# Plataforma de Exercícios Personalizada

Este repositório contém uma plataforma de exercícios que pode ser personalizada para atender às suas necessidades. Siga os passos abaixo para configurar sua própria instância.

---

## **1. Faça o fork do repositório**
1. Realize o fork deste repositório para a sua conta no GitHub.  
2. Clone o repositório no seu computador. Você pode usar o GitHub Desktop ou executar o seguinte comando no terminal:

   ```bash
   git clone https://github.com/RamonXXII/TCC.git

## 2. Configure a planilha no Google Sheets
1. Acesse a planilha no link: [Planilha Google Sheets.](https://docs.google.com/spreadsheets/d/1vCub5qQZRu3KEEiJUPqKJ5bcn-TAJUgmTP_9JsrMfZQ/edit?usp=sharing)
2. Faça uma cópia para o seu Google Drive:
* Arquivo → Fazer uma cópia.
* Nota: Um script será copiado automaticamente. Ele integra a planilha à plataforma
3. No menu, acesse Extensões → Apps Script → TCC-backend.
4. Localize o ID da sua nova planilha (exemplo: 1vCub5qQZRu3KEEiJUPqKJ5bcn-TAJUgmTP_9JsrMfZQ, localizado na URL do google planilha).
* Substitua o ID no arquivo Code.gs, na primeira linha de código:

  ```js
  const spreadsheetID = "seu_ID_da_planilha";
5. Salve o arquivo e implemente:
* Implantar → Nova implantação → App da Web.
* Configure:
  * Descrição: Insira uma descrição que combine com o propósito da plataforma.
  * Executar como: Seu usuário.
  * Quem pode acessar: Qualquer pessoa.
* Clique em Implantar.
6. Autorize o acesso aos seus dados, se solicitado.
* Nota: Isso é utilizado apenas para alterar os dados das planilhas e inserir fotos dos exercícios criados em seu drive.    
7. Copie a URL do App da Web gerada (exemplo: https://script.google.com/macros/s/AKfycbxfAdPRVKqg/.../exec).



## 3 Configure o arquivo scriptUrl.js
1. Abra o arquivo scriptUrl.js no editor de sua preferência.
2. Substitua a URL pelo App da Web gerado

   ```js
   window.scriptUrl = "https://script.google.com/macros/s/AKfycbxfAdPRVKqg/.../exec";

3. Adicione as alterações ao Git, faça o commit e o push para o repositório:
 
    ```bash
     git add -A
     git commit -m "Configuração inicial"
     git push origin main

## 4 Personalize a planilha
1. Edite ou exclua os exercícios, usuários e histórico conforme necessário.
Atenção: Não apague os cabeçalhos das planilhas.
2. Recomendação: Exclua usuários e histórico, mas mantenha exercícios relevantes para o seu propósito. 

## 5 Configure as credenciais no Google Cloud
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/apis/credentials/consent?) e crie um novo projeto.
2. Configure a tela de permissão OAuth:
* Tipo de usuário: Externo.
* Domínios autorizados: Adicione o domínio do seu GitHub Pages (exemplo: seu-usuario.github.io, sem "https://").
* Selecione os seguintes escopos:
  * /auth/userinfo.email
  * /auth/userinfo.profile
  * openid
3. Crie as credenciais:
* Tipo: ID do cliente OAuth → Aplicativos da Web.
* Origem: Seu domínio GitHub Pages.
* Redirecionamento: URL completa do deploy.
4. Copie o Client ID e substitua-o no arquivo index.html, na linha:

    ```javascript
    client id: "SEU_CLIENT_ID";
## 6 Configure o deploy no GitHub Pages
1. No repositório do GitHub, acesse: Settings → Pages.
* Em Source, selecione Deploy from a branch.
* Branch: main.
* Pasta: /root.
* Clique em Save.
2. Opcional: personalize o domínio da página.
3. Verifique o status do deploy em Actions → Pages build and deployment.
* Após a conclusão, acesse o link gerado e teste a aplicação.
