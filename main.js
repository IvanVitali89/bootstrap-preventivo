const myForm = document.getElementById("form");
const discount = [ "YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]





myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const tipeOfWork = document.getElementById("typeWork").value;
    console.log(tipeOfWork);
    

});



/** confronta la stringa con l'array e mi da conferma di eventuale uguaglianza
 * 
 * @param {string} array1 
 */
function discountCode(array1){
    for (i=0; i< discount.length; i++);
    if (array1===discount[i]);
    return true 
}