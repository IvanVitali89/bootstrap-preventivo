const myForm = document.getElementById("form"); //prendo il form 
const discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


myForm.addEventListener('submit', function (event) { //blocco l'aggiornamento automatico della pagina
    event.preventDefault();
    const valueDiscount = document.getElementById("Discount").value; //prendo tutti i valori necessari al calcolo
    const DiscountBigger = valueDiscount.toUpperCase(); //rendo maiuscolo il codice sconto
    let tipeOfWork = document.getElementById("typeWork").value;
    let finalPrice = 0
    console.log(tipeOfWork); //check che ho tutti i valori giusti
    console.log(valueDiscount);
    console.log(discountCode(DiscountBigger));
    console.log(DiscountBigger);

    // calcolo il valore
    if (tipeOfWork === '1' && discountCode(DiscountBigger) == true) {
        finalPrice = (20.50 * 10 / 100) * 75;
    } else {
        finalPrice = 20.50 * 10;
    } if (tipeOfWork === '2' && discountCode(DiscountBigger) == true) {
        finalPrice = (15.30 * 10 / 100) * 75;
    } else {
        finalPrice = 15.30 * 10;
    } if (tipeOfWork === '3' && discountCode(DiscountBigger) == true) {
        finalPrice = (33.60 * 10 / 100) * 75;
    } else {
        finalPrice = 33.60 * 10;
    }
    console.log(finalPrice.toFixed(2));

    const stampFinalPrice = document.getElementById("result");
    console.log(stampFinalPrice);
    const finalPriceDecimal = finalPrice.toFixed(2);
    let decimalValue = finalPriceDecimal.toString().indexOf(".");
    let afterDecimal = finalPriceDecimal.toString().substring(decimalValue + 1);
    if (discountCode(DiscountBigger) == true) { //controllo se lo sconto è applicato per il messaggio finale
        stampFinalPrice.innerHTML +=
            `
            Prezzo Finale 
            <p>€ ${finalPrice},<span class="fw-normal">${afterDecimal}</span></p>
            `;
    } else {
        stampFinalPrice.innerHTML += `
           Prezzo Finale 
           <p>€ ${finalPrice},<span class="fw-normal">${afterDecimal}</span></p>
            <p class="fw-normal fs-6">Il codice promozionale non è valido</p>
    `;
    }



});



/** confronta la stringa con l'array e mi da conferma di eventuale uguaglianza
 * 
 * @param {string} array1
 * @returns {boolean} 
 */
function discountCode(array1) {
    for (i = 0; i < discount.length; i++) {
        if (array1 === discount[i]) {
            return true;
        }
    }
    return false;
}  
