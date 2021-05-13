import init, { compress } from '../pkg/psbt_compress.js';

async function run() {
  await init();
}

run();

document.addEventListener("DOMContentLoaded", function(){
    let el = document.getElementById("psbtin");
    let fbtn = document.getElementById("filebtn");
    let downloadbtn = document.getElementById("psbtout");


    if (el != null) {
        el.addEventListener("change", (e) => {
            let files = e.currentTarget.files;
            if(files.length == 0){
                console.log("Nothing to load");
                return;
            }
            let file = files[0];
            fbtn.innerHTML = file.name;
            console.log("Loading "+file.name);
            let reader = new FileReader();
            reader.onload = function(e) {
                let buf = reader.result;
                if(buf.substring(0,4) == "psbt"){
                    buf = btoa(buf);
                }
                fbtn.innerHTML = `${file.name}: ${buf.length} bytes`;
                console.log(buf.substring(0,5));
                let compressed = compress(buf);
                console.log(compressed.substring(0,5));
                console.log(buf.length);
                console.log(compressed.length);
                downloadbtn.href="data:application/octet-stream;base64,"+compressed;
                downloadbtn.innerHTML = `Download compressed file: ${compressed.length} bytes`;
                downloadbtn.style.display = 'block';
            }
            // reader.readAsText(file);
            reader.readAsBinaryString(file);
            // reader.readAsArrayBuffer(file);
        });
    }
});