import { MarkdownString, MarkedString, workspace } from "vscode";

export function textToMarkedString(text: string): MarkedString {
	return text.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
}

export function linkToMarkdownString(linkUrl: string): MarkdownString {
    if (linkUrl === undefined || linkUrl === '') {
        return;
    }

    let link = new MarkdownString('[HLSL documentation][1]\n\n[1]: ');
    let openDocOnSide = workspace.getConfiguration('hlsl').get<boolean>('openDocOnSide', false);
    if (openDocOnSide) {
        link.appendText(encodeURI( 'command:shader.openLink?' + JSON.stringify([linkUrl, true])));
    } else {
        link.appendText(linkUrl);
    }
    link.isTrusted = true;
    return link;
}