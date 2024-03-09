





    function search(posizioneLavorativa, posizioneGeografica) {
        // Crea un array di annunci di esempio
        var annunci = [
          {
            location: "NY, US",
            title: "java dev"
          },
          {
            location: "Genoa, IT",
            title: "web dev"
          },
          {
            location: "US",
            title: "dev"
          }
        ];
      
        //  annunci per posizione lavorativa
        var annunciFiltratiPerPosizioneLavorativa = annunci.filter(function(annuncio) {
          return annuncio.title.toLowerCase().includes(posizioneLavorativa.toLowerCase());
        });
      
        //  annunci per posizione geografica
        var annunciFiltrati = annunciFiltratiPerPosizioneLavorativa.filter(function(annuncio) {
          return annuncio.location.toLowerCase().includes(posizioneGeografica.toLowerCase());
        });
      
        // Restituisci gli annunci filtrati
        return annunciFiltrati;
      }
    