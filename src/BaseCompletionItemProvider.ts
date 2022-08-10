'use strict';
import { CompletionItemProvider, CompletionItem, CompletionItemKind, CancellationToken, TextDocument, Position, workspace } from 'vscode';
import { IEntries, IEntry } from './IEntry';

export type CompletionCollection = {
    collection: IEntries;
    kind: CompletionItemKind;
    type: string;
};

export abstract class BaseCompletionItemProvider implements CompletionItemProvider {
    public async provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): Promise<CompletionItem[]> {
        const enable = workspace.getConfiguration('hlsl').get<boolean>('suggest.basic', true);
        if (!enable) {
            return [];
        }
        const range = document.getWordRangeAtPosition(position);
        var prefix = range ? document.getText(range) : '';

        const createNewProposal = function (kind: CompletionItemKind, name: string, entry: IEntry, type?: string): CompletionItem {
            var proposal: CompletionItem = new CompletionItem(name);
            proposal.kind = kind;
            if (entry) {
                if (entry.description) {
                    proposal.documentation = entry.description;
                }
                if (entry.parameters) {
                    let signature = type ? '(' + type + ') ' : '';
                    signature += name;
                    signature += '(';
                    if (entry.parameters && entry.parameters.length != 0) {
                        let params = '';
                        entry.parameters.forEach(p => params += p.label + ',');
                        signature += params.slice(0, -1);
                    }
                    signature += ')';
                    proposal.detail = signature;
                }
            }
            return proposal;
        };

        const matches = (name: string) => {
            return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
        };

        const result: CompletionItem[] = [];
        const added: Record<string, boolean> = {};


        this.defineCollections().forEach(({ collection, kind, type }) => {
            for (const name in collection) {
                if (collection.hasOwnProperty(name) && matches(name)) {
                    added[name] = true;
                    result.push(createNewProposal(kind, name, collection[name], type));

                }
            }
        });

        var text = document.getText();
        var functionMatch = /^\w+\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\s*\(/mg;
        var match: RegExpExecArray = null;
        while (match = functionMatch.exec(text)) {
            var word = match[1];
            if (!added[word]) {
                added[word] = true;
                createNewProposal(CompletionItemKind.Function, word, null);
            }
        }

        return result;
    }

    abstract defineCollections(): CompletionCollection[];

}

export const createCollection = (collection: IEntries, kind: CompletionItemKind, type: string): CompletionCollection => {
    return {
        collection,
        kind,
        type
    };
};
