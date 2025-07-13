# ATUALIZAÇÃO DAS INFORMAÇÕES DO SITE #

Para atualizar informações do site, recomenda-se utilizar o VS CODE localmente conectado ao git hub. 
Para isso, os pré requisitos são:
1. Baixar o VS, óbvio
2. Baixar o Git para Windows (não tão óbvio)
3. Baixar o Node.js
  3.1 Verificar se o node e o npm estão funcionando com node -v e npm -v
  3.2 npm install (baixar todas as dependencias para que funcione)
  3.3 npm install -g vite (baixa o vite, pode ser um passo opcional talvez)

Para ter acesso aos documentos do repositório no VS e conseguir atualizar as informações:
1. No VS code, clonar o repositório com: git clone <link repositório>
2. Logar na sua conta com: git config --global user.name "Nome do paspalhão/paspalhona" e depois git config --global user.email "email do paspalhão/paspalhona"
3. Fazer alteraçãõ
4. git add .
5. git commit -m "Título descritivo do commit"
6. git push
7. npm run deploy 
