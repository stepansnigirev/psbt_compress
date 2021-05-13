# PSBT compressor

A small tool that removes `non_witness_utxo` information from the transaction inputs so your hardware wallet doesn't run into memory problems.

Use it online: [https://stepansnigirev.github.io/psbt_compress/](https://stepansnigirev.github.io/psbt_compress/)

## Compile and run yourself

```sh
# build
wasm-pack build --target web
# serve
python3 -m http.server
```
