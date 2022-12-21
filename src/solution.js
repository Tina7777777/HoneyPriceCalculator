function solve() {

    let jarVolume = Number(document.getElementById('jarVolumeBtn').value);
    let jarPrice = Number(document.getElementById('jarPriceBtn').value);
    let capPrice = Number(document.getElementById('capPriceBtn').value);
    let honeyJarPrice = Number(document.getElementById('honeyJarPriceBtn').value);

    //let resultElement = document.getElementById('honeyPrice');


   let honeyPriceRes= (honeyJarPrice-jarPrice-capPrice)/jarVolume;
   
   document.getElementById("result").textContent=honeyPriceRes;
}