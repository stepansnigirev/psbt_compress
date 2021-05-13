use wasm_bindgen::prelude::*;

use std::str::FromStr;

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
    Ok(psbtin.into())
}
