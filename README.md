 Formattare il prezzo
 JS offre diverse utilities per aiutarci. Ad es. i valori numerici offrono il metodo .toFixed() per
 formattare un numero con un numero specificato di cifre decimali. Ricordatevi che se non
 state bene attenti, JavaScript vi fa le magie con i tipi…!

  Step 2 (JavaScript)
 Aggiungiamo la componente js di interazione con l’utente.
 Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del
 preventivo per le ore di lavoro richieste.
 Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che
 ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
 Il prezzo orario per una commissione varia in questo modo:
 ● selacommissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
 ● selacommissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
 ● selacommissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora
 L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32,
 JANJC63, PWKCN25, SJDPO96, POCIE24.
 Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul
 prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice
 non è valido e il prezzo finale viene calcolato senza applicare sconti.
 Il risultato del calcolo del prezzo finale



 Nome, cognome e email non servono
 Prendere il value di tipo di lavoro e moltiplicarlo per 10
 prendere il codice promozionane e con una funzione che scorre un array di stringe e verificare se è uguale a uno di questi (codice promozionale .uppercase) se la funzione mi restitusce true applico lo sconto
 Scoprire come stampare in pagina tramire innerText o altri