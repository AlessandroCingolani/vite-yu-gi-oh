# Vite Yu-Gi-Oh

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.

1. Pulisco css e componenti non necessari importo scss bootstrap e axios per dipendenze.
2. Creo stili scss un main dove importo tutti stili partials, \_general, \_var.
3. Creo miei componenti seguendo layou da replicare un Header, Result,Contenitore delle card,Card singole.
4. Creo il mio store.js per lo state management dove importerò la mia API , poi creo un array vuoto dove aggiornerò tramite App.vue il suo contenuto.
5. Utilizzo array di oggetti dove mi serve richiamando store e per le card singole userò dei props ereditati dal genitore per prendere chiavi specifiche da utilizzare
6. Dopo aver provato con un mark up statico la mia card stampo dinamicamente nel contenitore delle card
