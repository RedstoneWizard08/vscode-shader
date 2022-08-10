'use strict';

import { CompletionItemKind } from 'vscode';
import { BaseCompletionItemProvider, CompletionCollection, createCollection } from '../BaseCompletionItemProvider';
import hlslGlobals = require('./hlslGlobals');

export default class HLSLCompletionItemProvider extends BaseCompletionItemProvider {
    defineCollections(): CompletionCollection[] {
        return [
            createCollection(hlslGlobals.datatypes, CompletionItemKind.TypeParameter, 'datatype'),
            createCollection(hlslGlobals.intrinsicfunctions, CompletionItemKind.Function, 'function'),
            createCollection(hlslGlobals.semantics, CompletionItemKind.Reference, 'semantic'),
            createCollection(hlslGlobals.semanticsNum, CompletionItemKind.Reference, 'semantic'),
            createCollection(hlslGlobals.keywords, CompletionItemKind.Keyword, 'keyword'),
        ]
    }
}