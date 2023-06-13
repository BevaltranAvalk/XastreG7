function bancoDeDados3() {
  var nomeComercial = document.getElementById('nomeComercial').value;
  var codigoUnico = document.getElementById('codigoUnico').value;
  var descricao = document.getElementById('descricao').value;
  var cargaHoraria = document.getElementById('cargaHoraria').value;
  var inicioInscricoes = document.getElementById('inicioInscricoes').value;
  var fimInscricoes = document.getElementById('fimInscricoes').value;
  var inicioTreinamento = document.getElementById('inicioTreinamento').value;
  var fimTreinamento = document.getElementById('fimTreinamento').value;
  var minInscritos = document.getElementById('minInscritos').value;
  var maxInscritos = document.getElementById('maxInscritos').value;

  var request = indexedDB.open('BancoDeDados3', 1);

  request.onsuccess = function(event) {
    var db = event.target.result;
    console.log('Banco de dados 3 foi criado');
    var transaction = db.transaction('Treinamentos', 'readwrite');
    var objectStore = transaction.objectStore('Treinamentos');

    var data = {
      nomeComercial: nomeComercial,
      codigoUnico: codigoUnico,
      descricao: descricao,
      cargaHoraria: cargaHoraria,
      inicioInscricoes: inicioInscricoes,
      fimInscricoes: fimInscricoes,
      inicioTreinamento: inicioTreinamento,
      fimTreinamento: fimTreinamento,
      minInscritos: minInscritos,
      maxInscritos: maxInscritos
    };

    var addRequest = objectStore.add(data);

    addRequest.onsuccess = function() {
      console.log('Dados adicionados com sucesso');
    };

    transaction.oncomplete = function() {
      db.close();
    };
  };

  request.onerror = function(event) {
    console.log('Erro ao abrir o banco de dados 3: ' + event.target.errorCode);
  };
}

document.getElementById('submeter').addEventListener('click', bancoDeDados3);