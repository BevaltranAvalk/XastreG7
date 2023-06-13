README
Este é o README do projeto desenvolvido para administrar e acompanhar alunos e empresas parceiras em um programa de treinamento. O sistema possui uma arquitetura separada em front-end e back-end, onde o front-end é responsável pela interação com o usuário e o back-end cuida da lógica do sistema e comunicação com o front-end através de uma API.

Funcionalidades
Front-end
O front-end é a interface de usuário (UI/UX) responsável pela interação do usuário com o sistema. Aqui não há processamento de informações ou acesso direto ao banco de dados. O foco é proporcionar uma experiência agradável e simples ao usuário, com poucos cliques e interfaces intuitivas. As funcionalidades do front-end incluem:

Sistema de login com autenticação por e-mail e senha.

-Níveis de permissão para diferentes usuários: alunos, mentores, empresas parceiras e administradores.

-Alunos podem visualizar cursos, testes e vagas de emprego.
-Mentores podem visualizar as últimas atividades concluídas pelos alunos.
-Empresas parceiras podem visualizar todas as atividades concluídas pelos alunos e os                      resultados intermediários e finais nos cursos.
-Administradores têm acesso total ao sistema, incluindo um CRUD de treinamentos.

--Back-end
-O back-end é responsável pela lógica do sistema e pela comunicação com o front-end por meio de uma API. Aqui ocorre o processamento de informações e o acesso ao banco de dados. As funcionalidades do back-end incluem:

--Implementação de uma API para comunicação com o front-end.
-Autenticação e autorização de usuários.
-CRUD de treinamentos, com criação, leitura, atualização e exclusão.
-Criação de quizzes para os treinamentos, com correção automática e registro do histórico do aluno.
-Gerenciamento de vagas de emprego, incluindo associação com os treinamentos selecionados pelas empresas parceiras.
-Registro e acompanhamento das atividades dos alunos, exibindo treinamentos inscritos, treinamentos não aprovados e treinamentos concluídos.
-Exibição das últimas atividades dos alunos para mentores.
--Tecnologias Utilizadas
-Linguagem de programação: HTML, CSS e JAVASCRIPT.
-Banco de dados: foram criados 5 bancos de dados, para satisfazer as parte basicas de registro.
 

Configuração e Execução

Basta baixar e executar o programa da release.