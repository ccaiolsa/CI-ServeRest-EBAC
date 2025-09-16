Teste de integração contínua com Jenkins
Para realizar esse exercício foi proposto reutilizar o exercício anterior referente aos testes de API.
Foi criado três arquivos:
-  Um Dockerfile que padroniza o ambiente do Jenkins;
-  Um Dockerfile que padroniza o ambiente e as dependências para rodar o cypress;
-  Um Jenkinsfile que é executado quando um commit é feito no GitHub. 