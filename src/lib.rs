use wasm_bindgen::prelude::*;

use bitcoin::{
    util::psbt::PartiallySignedTransaction,
    base64,
    consensus::encode::{serialize, deserialize},
};

// https://github.com/rustwasm/wasm-bindgen/issues/1742#issuecomment-643793491
macro_rules! jserr {
    ($expression:expr) => {
        match $expression {
            Ok(a) => a,
            Err(e) => {
                return Err(JsValue::from(format!("{}", e)));
            }
        }
    };
}


#[wasm_bindgen]
pub fn compress(psbtin: &str) -> Result<JsValue, JsValue>{
    let raw = jserr!(base64::decode(psbtin));
    let mut psbt:PartiallySignedTransaction = jserr!(deserialize(&raw));
    // process all inputs
    for inp in psbt.inputs.iter_mut() {
    	inp.non_witness_utxo = None;
    }
    let compressed = base64::encode(&serialize(&psbt));
    Ok(compressed.into())
}

#[wasm_bindgen]
pub fn decode(psbtin: &str) -> Result<JsValue, JsValue>{
    let raw = jserr!(base64::decode(psbtin));
    let psbt:PartiallySignedTransaction = jserr!(deserialize(&raw));
    let res = jserr!(serde_json::to_string(&psbt));
    Ok(res.into())
}