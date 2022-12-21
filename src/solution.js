function solve() {

    let jarVolume = Number(document.getElementById('jarVolume').value);
    let jarPrice = Number(document.getElementById('jarPrice').value);
    let capPrice = Number(document.getElementById('capPrice').value);
    let honeyJarPrice = Number(document.getElementById('honeyJarPrice').value);

    //let resultElement = document.getElementById('honeyPrice');


   let honeyPriceRes= (honeyJarPrice-jarPrice-capPrice)/jarVolume;
   
   document.getElementById("result").textContent=honeyPriceRes;
}