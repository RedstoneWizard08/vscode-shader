import { ParameterInformation } from 'vscode';


export class IEntry {
    description?: string;
    parameters?: ParameterInformation[];
    link?: string;
}
//TODO: support multiple entry per name

export interface IEntries { [name: string]: IEntry; }
