/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function compress(a: number, b: number): number;
export function decode(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_serialize(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_parse(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_ec_seckey_verify(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_serialize_compact(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_parse_compact(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_context_preallocated_size(a: number): number;
export function rustsecp256k1_v0_4_0_context_preallocated_create(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_signature_serialize_der(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_signature_parse_der(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_signature_parse_compact(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_signature_normalize(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_signature_serialize_compact(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_combine(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_context_create(a: number): number;
export function rustsecp256k1_v0_4_0_context_destroy(a: number): void;
export function rustsecp256k1_v0_4_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_4_0_default_error_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_4_0_context_preallocated_destroy(a: number): void;
export function rustsecp256k1_v0_4_0_context_preallocated_clone_size(a: number): number;
export function rustsecp256k1_v0_4_0_context_preallocated_clone(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_context_set_illegal_callback(a: number, b: number, c: number): void;
export function rustsecp256k1_v0_4_0_context_set_error_callback(a: number, b: number, c: number): void;
export function rustsecp256k1_v0_4_0_ecdsa_verify(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_sign(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_create(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_seckey_negate(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ec_privkey_negate(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_negate(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ec_seckey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_privkey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_seckey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_privkey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ec_pubkey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_context_randomize(a: number, b: number): number;
export function rustsecp256k1_v0_4_0_ecdh(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_recoverable_signature_convert(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_sign_recoverable(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1_v0_4_0_ecdsa_recover(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_xonly_pubkey_parse(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_xonly_pubkey_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_xonly_pubkey_from_pubkey(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_xonly_pubkey_tweak_add(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_xonly_pubkey_tweak_add_check(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1_v0_4_0_keypair_create(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_keypair_pub(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_keypair_xonly_pub(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1_v0_4_0_keypair_xonly_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1_v0_4_0_schnorrsig_sign(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1_v0_4_0_schnorrsig_verify(a: number, b: number, c: number, d: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
