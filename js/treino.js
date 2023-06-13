document.getElementById('training-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nomeComercial = document.getElementById('nome-comercial').value;
    var codigoCurso = document.getElementById('codigo-curso').value;
    var descricao = document.getElementById('descricao').value;
    var cargaHoraria = document.getElementById('carga-horaria').value;
    var dataInscricao = document.getElementById('data-inscricao').value;
    var dataTreinamento = document.getElementById('data-treinamento').value;
    var minInscritos = document.getElementById('min-inscritos').value;
    var maxInscritos = document.getElementById('max-inscritos').value;
    
    // Realize as correções automáticas com base nas respostas fornecidas pelo usuário
    
    // Exemplo: Corrigindo o nome comercial e código do curso
    nomeComercial = nomeComercial.toUpperCase();
    codigoCurso = codigoCurso.toUpperCase();
    
    // Exemplo: Calculando a quantidade de perguntas corretas
    var perguntasCorretas = 0;
    
    // ...
  
    // Exemplo: Exibindo a quantidade de perguntas corretas ao usuário
    alert("Você acertou " + perguntasCorretas + " perguntas!");
    
    // Gravar o histórico do aluno
    // ...
  });
  