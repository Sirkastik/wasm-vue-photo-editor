/* tslint:disable */
/* eslint-disable */
/**
* @param {string} encoded_file
* @returns {string}
*/
export function grayscale(encoded_file: string): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function invert(encoded_file: string): string;
/**
* @param {string} encoded_file
* @param {number} brighten_value
* @returns {string}
*/
export function brighten(encoded_file: string, brighten_value: number): string;
/**
* @param {string} encoded_file
* @param {number} blur_sigma
* @returns {string}
*/
export function blur(encoded_file: string, blur_sigma: number): string;
/**
* @param {string} encoded_file
* @param {number} blur_sigma
* @param {number} threshold
* @returns {string}
*/
export function sharpen(encoded_file: string, blur_sigma: number, threshold: number): string;
/**
* @param {string} encoded_file
* @param {number} c_value
* @returns {string}
*/
export function contrast(encoded_file: string, c_value: number): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function flip_vertical(encoded_file: string): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function flip_horizontal(encoded_file: string): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function rotate_90(encoded_file: string): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function rotate_180(encoded_file: string): string;
/**
* @param {string} encoded_file
* @returns {string}
*/
export function rotate_270(encoded_file: string): string;
/**
* @param {string} encoded_file
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @returns {string}
*/
export function crop(encoded_file: string, x: number, y: number, width: number, height: number): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly grayscale: (a: number, b: number, c: number) => void;
  readonly invert: (a: number, b: number, c: number) => void;
  readonly brighten: (a: number, b: number, c: number, d: number) => void;
  readonly blur: (a: number, b: number, c: number, d: number) => void;
  readonly sharpen: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly contrast: (a: number, b: number, c: number, d: number) => void;
  readonly flip_vertical: (a: number, b: number, c: number) => void;
  readonly flip_horizontal: (a: number, b: number, c: number) => void;
  readonly rotate_90: (a: number, b: number, c: number) => void;
  readonly rotate_180: (a: number, b: number, c: number) => void;
  readonly rotate_270: (a: number, b: number, c: number) => void;
  readonly crop: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
