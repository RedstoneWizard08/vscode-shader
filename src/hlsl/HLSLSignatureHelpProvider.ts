import BaseSignatureHelperProvider from '../BaseSignatureHelpProvider';
import { IEntries } from '../IEntry';
import hlslGlobals = require('./hlslGlobals');

export default class HLSLSignatureHelpProvider extends BaseSignatureHelperProvider {
    getFunctionEntries(): IEntries {
        return hlslGlobals.intrinsicfunctions;
    }

}