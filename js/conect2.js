document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var alunos = document.getElementById('alunos').value;
  var mentores = document.getElementById('mentores').value;
  var empresas = document.getElementById('empresas').value;
  var administradores = document.getElementById('administradores').value;
  
  var request = indexedDB.open('BancoDeDados2', 1);

  request.onsuccess = function(event) {
    var db = event.target.result;
    var transaction = db.transaction('Cargos', 'readwrite');
    var objectStore = transaction.objectStore('Cargos');
    
    var data = {
      alunos: alunos,
      mentores: mentores,
      empresas: empresas,
      administradores: administradores
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
    console.log('Erro ao abrir o banco de dados 2: ' + event.target.errorCode);
  };
});
