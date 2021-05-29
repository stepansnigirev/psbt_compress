import init, { compress, decode } from '../pkg/psbt_compress.js';

async function run() {
  await init();
}

run();

function showError(msg){
    document.getElementById("psbtout").style.display = 'none';
    document.getElementById("error").style.display = 'block';
    document.getElementById("error").innerHTML = msg;
}

class PSBT extends Object {
    constructor(obj){
        super();
        obj && Object.assign(this, obj);
    }
    fee(){
        console.log("fee!");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let el = document.getElementById("psbtin");
    let fbtn = document.getElementById("filebtn");
    let downloadbtn = document.getElementById("psbtout");
    let errordiv = document.getElementById("error");


    if (el != null) {
        el.addEventListener("change", (e) => {
            downloadbtn.style.display = 'none';
            errordiv.style.display = 'none';
            let files = e.currentTarget.files;
            if(files.length == 0){
                showError("Nothing to load");
                return;
            }
            let file = files[0];
            fbtn.innerHTML = file.name;
            console.log("Loading "+file.name);
            let reader = new FileReader();
            reader.onload = function(e) {
                try{
                    let buf = reader.result;
                    if(buf.substring(0,4) == "psbt"){
                        buf = btoa(buf);
                    }
                    fbtn.innerHTML = `${file.name}: ${buf.length} bytes`;
                    let compressed = compress(buf);
                    // let decoded = JSON.parse(decode(buf));
                    // let psbt = new PSBT(decoded);
                    // console.log(psbt);
                    // psbt.fee();
                    // console.log(JSON.stringify(psbt) == JSON.stringify(decoded));
                    downloadbtn.href="data:application/octet-stream;base64,"+compressed;
                    downloadbtn.innerHTML = `Download compressed file: ${compressed.length} bytes`;
                    downloadbtn.style.display = 'block';
                } catch (error) {
                    showError(error);
                }
            }
            // reader.readAsText(file);
            reader.readAsBinaryString(file);
            // reader.readAsArrayBuffer(file);
        });
    }
});