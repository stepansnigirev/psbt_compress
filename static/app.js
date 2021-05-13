import init, { compress } from '../pkg/psbt_compress.js';

async function run() {
  await init();
}

run();

document.addEventListener("DOMContentLoaded", function(){
    var el = document.getElementById("psbtin");

    if (el != null) {
        el.addEventListener("change", (e) => {
            let files = e.currentTarget.files;
            if(files.length == 0){
                console.log("Nothing to load");
                return;
            }
            let file = files[0];
            console.log("Loading "+file.name);
            let reader = new FileReader();
            reader.onload = function(e) {
                let buf = reader.result;
                if(buf.substring(0,4) == "psbt"){
                    buf = btoa(buf);
                }
                console.log(buf.substring(0,5));
                let compressed = compress(buf);
                console.log(compressed.substring(0,5));
            }
            // reader.readAsText(file);
            reader.readAsBinaryString(file);
            // reader.readAsArrayBuffer(file);
        });
    }
});