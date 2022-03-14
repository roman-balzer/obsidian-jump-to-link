import {Editor} from "codemirror";

export type LinkHintType = 'internal' | 'external' | 'regex';

export interface LinkHintBase {
	letter: string;
	type: LinkHintType;
	linkText: string;
}

export interface PreviewLinkHint extends LinkHintBase {
	left: number;
	top: number;
}

export interface SourceLinkHint extends LinkHintBase {
	index: number
}

export class Settings {
	// Defaults as in Vimium extension for browsers
	letters: string = 'sadfjklewcmpgh';
	jumpToAnywhereRegex: string = '\\b\\w{3,}\\b';
}

export type Callback = (links: LinkHintBase[], editor?: Editor) => void
