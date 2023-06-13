document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var quizQuestions = getQuizQuestions();
  
    var request = indexedDB.open('BancoDeDados4', 1);
  
    request.onsuccess = function(event) {
      var db = event.target.result;
      var transaction = db.transaction('SequenciasDados', 'readwrite');
      var objectStore = transaction.objectStore('SequenciasDados');
  
      var data = {
        quizQuestions: quizQuestions
      };
  
      var addRequest = objectStore.add(data);
  
      addRequest.onsuccess = function() {
        console.log('Quiz adicionado com sucesso');
      };
  
      transaction.oncomplete = function() {
        db.close();
      };
    };
  
    request.onerror = function(event) {
      console.log('Erro ao abrir o banco de dados 4: ' + event.target.errorCode);
    };
  });
  
  function getQuizQuestions() {
    var numQuestions = parseInt(document.getElementById("num-questions").value);
  
    var quizQuestions = [];
  
    for (var i = 1; i <= numQuestions; i++) {
      var question = {
        pergunta: document.getElementsByName("pergunta" + i)[0].value,
        respostaCorreta: document.getElementsByName("resposta-correta" + i)[0].value,
        respostaErrada1: document.getElementsByName("resposta-errada1-" + i)[0].value,
        respostaErrada2: document.getElementsByName("resposta-errada2-" + i)[0].value
      };
  
      quizQuestions.push(question);
    }
  
    return quizQuestions;
  }