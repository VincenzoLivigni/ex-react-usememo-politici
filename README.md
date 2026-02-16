Milestone 1: Recuperare e visualizzare i dati
✅ - 1 Effettua una chiamata API a http://localhost:3333/politicians

✅ - 2 Salva la risposta in uno stato React (useState).

✅ - 3 Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:
        Nome (name)
        Immagine (image)
        Posizione (position)
        Breve biografia (biography)




Milestone 2: Implementare la ricerca ottimizzata
✅ - 1 Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.

✅ - 2 Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare
        un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.

✅ - 3 Non usare useEffect per aggiornare l’array filtrato.




Milestone 3: Ottimizzare il rendering delle card con React.memo
✅- 1 Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che 
     non sono cambiate.

✅ - 2 Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.

✅ - 3 Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.