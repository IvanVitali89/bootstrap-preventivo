const myForm = document.getElementById("form");
const discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];





myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const valueDiscount = document.getElementById("Discount").value;
    const DiscountBigger = valueDiscount.toUpperCase();
    let tipeOfWork = document.getElementById("typeWork").value;
    let finalPrice=0
    console.log(tipeOfWork);
    console.log(valueDiscount);
    console.log(discountCode(DiscountBigger));
    console.log(DiscountBigger);


    if ( tipeOfWork==='1' && discountCode(DiscountBigger)==true){
        finalPrice = (20.50*10/100)*75;
    } else {
        finalPrice = 20.50*10;
    } if ( tipeOfWork==='2' && discountCode(DiscountBigger)==true){
        finalPrice = (15.30*10/100)*75;
    } else {
        finalPrice = 15.30*10;
    } if ( tipeOfWork==='3' && discountCode(DiscountBigger)==true){
        finalPrice = (33.60*10/100)*75;
    } else {
        finalPrice = 33.60*10;
    }
    console.log(finalPrice.toFixed(2));

    const stampFinalPrice = document.getElementById("result");
    console.log(stampFinalPrice);
    stampFinalPrice.innerHTML+=
    `Prezzo Finale € ${finalPrice.toFixed(2)}`;
    


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
