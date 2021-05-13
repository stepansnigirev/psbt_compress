/* tslint:disable */
/* eslint-disable */
/**
* @param {string} psbtin
* @returns {any}
*/
export function compress(psbtin: string): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly compress: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_serialize: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_parse: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_seckey_verify: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_serialize_compact: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_parse_compact: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_context_preallocated_size: (a: number) => number;
  readonly rustsecp256k1_v0_4_0_context_preallocated_create: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_signature_serialize_der: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_signature_parse_der: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_signature_parse_compact: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_signature_normalize: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_signature_serialize_compact: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_combine: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_context_create: (a: number) => number;
  readonly rustsecp256k1_v0_4_0_context_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_4_0_default_illegal_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_4_0_default_error_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_4_0_context_preallocated_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_4_0_context_preallocated_clone_size: (a: number) => number;
  readonly rustsecp256k1_v0_4_0_context_preallocated_clone: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_context_set_illegal_callback: (a: number, b: number, c: number) => void;
  readonly rustsecp256k1_v0_4_0_context_set_error_callback: (a: number, b: number, c: number) => void;
  readonly rustsecp256k1_v0_4_0_ecdsa_verify: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_create: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_seckey_negate: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_privkey_negate: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_negate: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_seckey_tweak_add: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_privkey_tweak_add: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_tweak_add: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_seckey_tweak_mul: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_privkey_tweak_mul: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ec_pubkey_tweak_mul: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_context_randomize: (a: number, b: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdh: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_convert: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_sign_recoverable: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly rustsecp256k1_v0_4_0_ecdsa_recover: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_xonly_pubkey_parse: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_xonly_pubkey_serialize: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_xonly_pubkey_from_pubkey: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_xonly_pubkey_tweak_add: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_xonly_pubkey_tweak_add_check: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly rustsecp256k1_v0_4_0_keypair_create: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_keypair_pub: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_keypair_xonly_pub: (a: number, b: number, c: number, d: number) => number;
  readonly rustsecp256k1_v0_4_0_keypair_xonly_tweak_add: (a: number, b: number, c: number) => number;
  readonly rustsecp256k1_v0_4_0_schnorrsig_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly rustsecp256k1_v0_4_0_schnorrsig_verify: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
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
