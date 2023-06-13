document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var titulo = document.getElementById('titulo').value;
  var empresa = document.getElementById('empresa').value;
  var descricao = document.getElementById('descricao').value;
  var requisitos = document.getElementById('requisitos').value;
  var salario = document.getElementById('salario').value;
  
  var request = indexedDB.open('BancoDeDados5', 1);

  request.onsuccess = function(event) {
    var db = event.target.result;
    var transaction = db.transaction('VagasEmprego', 'readwrite');
    var objectStore = transaction.objectStore('VagasEmprego');
    
    var data = {
      titulo: titulo,
      empresa: empresa,
      descricao: descricao,
      requisitos: requisitos,
      salario: salario
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
    console.log('Erro ao abrir o banco de dados 5: ' + event.target.errorCode);
  };
});
