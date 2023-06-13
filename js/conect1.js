var db;

var request = indexedDB.open('BancoDeDados1', 2);

request.onsuccess = function(event) {
  db = event.target.result;
  console.log('Conexão realizada');
};

request.onupgradeneeded = function(event) {
  db = event.target.result;

  if (!db.objectStoreNames.contains('SenhasEmails')) {
    var objectStore = db.createObjectStore('SenhasEmails', { keyPath: 'email' });
    objectStore.createIndex('senhaIndex', 'senha', { unique: false });
    console.log('Object store "SenhasEmails" created');
  }
};

request.onerror = function(event) {
  console.log('Erro na conexão:', event.target.error);
};

function criarTabela1() {
  console.log('Criar tabela');
  var senha = document.getElementById('signup-password').value;
  var email = document.getElementById('signup-username').value;
  var conf = document.getElementById('signup-confirm-password').value;

  var transaction = db.transaction(['SenhasEmails'], 'readwrite');
  var objectStore = transaction.objectStore('SenhasEmails');

  var data = {
    senha: senha,
    email: email,
    conf: conf
  };

  var addRequest = objectStore.add(data);

  addRequest.onsuccess = function() {
    console.log('Dados adicionados com sucesso');
  };

  transaction.oncomplete = function() {
    console.log('Transação completada');
  };
}

document.getElementById('botaoCriarTabela1').addEventListener('click', criarTabela1);

function consultarSenhaEmail() {
  console.log('Consultar senha e e-mail');
  var senha = document.getElementById('login-password').value;
  var email = document.getElementById('login-username').value;

  var transaction = db.transaction(['SenhasEmails'], 'readonly');
  var objectStore = transaction.objectStore('SenhasEmails');
  var senhaIndex = objectStore.index('senhaIndex');

  var senhaRequest = senhaIndex.get(senha);
  var emailRequest = objectStore.get(email);

  senhaRequest.onsuccess = function() {
    if (senhaRequest.result) {
      console.log('Senha encontrada:', senhaRequest.result);
    } else {
      console.log('Senha não encontrada');
    }
  };

  emailRequest.onsuccess = function() {
    if (emailRequest.result) {
      console.log('E-mail encontrado:', emailRequest.result);
    } else {
      console.log('E-mail não encontrado');
    }
  };

  transaction.oncomplete = function() {
    console.log('Transação completada');
  };
}

document.getElementById('botaoConsultar').addEventListener('click', consultarSenhaEmail);