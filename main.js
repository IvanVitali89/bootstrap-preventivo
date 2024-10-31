const myForm = document.getElementById("form");
const discount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];





myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const valueDiscount = document.getElementById("Discount").value;
    const DiscountBigger = valueDiscount.toUpperCase();
    const tipeOfWork = document.getElementById("typeWork").value;
    console.log(tipeOfWork);
    console.log(valueDiscount);
    console.log(discountCode(valueDiscount));
    console.log(DiscountBigger);


    //if ()



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
