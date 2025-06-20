var meuInput = document.getElementById('inputTecla');
      var meuSpan = document.getElementById('teclaPressionada');

      meuInput.addEventListener('keydown', function(e) {
        var tecla = e.key;
        meuSpan.textContent = tecla;
      });