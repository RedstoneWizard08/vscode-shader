import BaseSignatureHelpProvider from '../BaseSignatureHelpProvider';
import { IEntries } from '../IEntry';
import * as glslReference from '../generated/glsl-reference.json';

export default class GLSLSignatureHelpProvider extends BaseSignatureHelpProvider {
    getFunctionEntries(): IEntries {
        return glslReference.functions;
    }

}