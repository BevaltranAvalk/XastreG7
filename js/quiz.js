function addQuestion() {
    let questions = document.getElementById("questions");
    questions.innerText = "";

    var numQuestions = document.getElementById("num-questions").value;
    var questionsDiv = document.getElementById("questions");

    for (var i = 1; i <= numQuestions; i++) {
        var questionDiv = document.createElement("div");
        questionDiv.innerHTML = "<h2>Pergunta " + i + ":</h2>" +
            "<div>"+
            "<label>Pergunta:</label>" +
            "<input type='text'  name='pergunta" + i + "' required>" +
            "<br>" +
            "<label>Resposta correta:</label>" +
            "<input type='text' name='resposta-correta" + i + "' required>" +
            "<br>" +
            "<label>Resposta errada 1:</label>" +
            "<input type='text' name='resposta-errada1-" + i + "' required>" +
            "<br>" +
            "<label>Resposta errada 2:</label>" +
            "<input type='text' name='resposta-errada2-" + i + "' required>" +
            "<br>"+
            "</div>";

        questionsDiv.appendChild(questionDiv);
    }
}

function saveQuiz() {
    document.getElementById('quizForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var form = event.target;
        var formData = new FormData(form);
    
        var numQuestions = parseInt(formData.get('num-questions'));
    
        var quizQuestions = [];
    
        for (var i = 1; i <= numQuestions; i++) {
            var question = {
                pergunta: formData.get('pergunta' + i),
                A: formData.get('resposta-correta' + i),
                B: formData.get('resposta-errada1-' + i),
                C: formData.get('resposta-errada2-' + i)
            };
    
            quizQuestions.push(question);
        }
    
        var request = indexedDB.open('BancoDeDados4', 1);
    
        request.onsuccess = function(event) {
            var db = event.target.result;
            var transaction = db.transaction('SequenciasDados', 'readwrite');
            var objectStore = transaction.objectStore('SequenciasDados');
    
            var addRequest = objectStore.add({ quizQuestions: quizQuestions });
    
            addRequest.onsuccess = function() {
                console.log('Quiz salvo com sucesso no banco de dados');
            };
    
            transaction.oncomplete = function() {
                db.close();
            };
        };
    
        request.onerror = function(event) {
            console.log('Erro ao abrir o banco de dados: ' + event.target.errorCode);
        };
    });
    }

    // Salvar o quiz no banco de dados
    var request = indexedDB.open('BancoDeDados4', 1);

    request.onsuccess = function(event) {
        var db = event.target.result;
        console.log('Banco de dados 4 aberto com sucesso!');

        var transaction = db.transaction(['Quizes'], 'readwrite');
        var objectStore = transaction.objectStore('Quizes');

        var quizData = {
            perguntas: quizQuestions,
            data: new Date().toLocaleString()
        };

        objectStore.add(quizData);

        console.log('Quiz salvo com sucesso no banco de dados!');
    };

    request.onerror = function(event) {
        console.log('Erro ao abrir o banco de dados 4: ' + event.target.errorCode);
    };