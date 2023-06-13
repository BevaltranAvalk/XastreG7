var users = []; 
 function signup() {
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;
  var confirmPassword = document.getElementById("signup-confirm-password").value;
  var emailDomain = username.split("@")[1].toLowerCase(); // Extrai o domínio do email
  
  var allowedDomains = {
    "alunos": "puccampinas.edu.br",
    "administradores": "puc-campinas.edu.br",
    "empresas": "puc_campinas.edu.br",
    "mentores": "puccamp.edu.br"

  };
  
  var userType = Object.keys(allowedDomains).find(function(type) {
    return emailDomain === allowedDomains[type];
  });
  
  if (!userType) {
    document.getElementById("message").innerHTML = "Domínio de email inválido.";
    return;
  }
    
      if (password !== confirmPassword) {
        document.getElementById("message").innerHTML = "As senhas não coincidem.";
        return;
      }
    
      if (users.some(function(u) { return u.username === username })) {
        document.getElementById("message").innerHTML = "O usuário já existe.";
        return;
      }
      
    
      users.push({ username: username, password: password });
      document.getElementById("message").innerHTML = "Cadastro bem-sucedido como " + userType + "!";
    }
    
function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  var user = users.find(function(u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    var emailDomain = username.split("@")[1].toLowerCase();
    var allowedDomains = {
      "alunos": "puccampinas.edu.br",
      "administradores": "puc-campinas.edu.br",
      "empresas": "puc_campinas.edu.br",
      "mentores": "puccamp.edu.br"
    };

    var userType = Object.keys(allowedDomains).find(function(type) {
      return emailDomain === allowedDomains[type];
    });

    if (userType) {
      // Redirecionar para a página correta com base no tipo de usuário
      if (userType === "alunos") {
        window.location.href = "ALUNOS.html";
      } else if (userType === "administradores") {
        window.location.href = "ADMS.html";
      } else if (userType === "empresas") {
        window.location.href = "EMPRESA.html";
      } else if (userType === "mentores") {
        window.location.href = "MENTORES.html";
      }
    } else {
      document.getElementById("message").innerHTML = "Domínio de email inválido.";
    }
  } else {
    document.getElementById("message").innerHTML = "Usuário ou senha incorretos.";
  }
}
