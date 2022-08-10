'use strict';

import { CompletionItemKind } from 'vscode';
import { BaseCompletionItemProvider, CompletionCollection, createCollection } from '../BaseCompletionItemProvider';
import * as glslReference from '../generated/glsl-reference.json';

export default class HLSLCompletionItemProvider extends BaseCompletionItemProvider {
    defineCollections(): CompletionCollection[] {
        return [
            createCollection(glslReference.functions, CompletionItemKind.Function, 'function'),
        ]
    }
}