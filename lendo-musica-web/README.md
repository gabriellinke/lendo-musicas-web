
# Lendo música
### Este é o projeto final da formação de programadores da equipe do aplicativo NÓS.  

<p>
  O aplicativo Lendo música é um buscador de letras de músicas desenvolvido para Android. Ao abrir o aplicativo, o usuário se depara com uma tela de buscas, onde ele pode inserir um artista e o nome de uma música e pressionar o botão buscar para pesquisar a letra dessa música. Essa tela também tem o botão de "Últimas buscas" que, ao ser pressionado, direciona o usuário a uma página listando as suas 10 últimas buscas.
 </p>
 <br>
 <p>
  Uma vez inseridos artista e música e pressionado o botão de buscar, é feita uma requisição a <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search">API</a> e a resposta é tratada. Se a letra não for encontrada, o usuário é direcionado para uma tela de erro, dizendo que a letra não foi encontrada. Do contrário, abre-se uma nova tela onde o usuário confirma se a letra encontrada é a que ele procurava. Após isso, é possível visualizar a letra da música pesquisada.
</p>

<p> O APK está anexado ao projeto e pode ser baixado para o uso do aplicativo.  pode ser acessado em tal link
<br>
  
## Imagens do website

<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003814-425b3900-4510-11eb-878c-7730f2a11dd1.JPG" width="650px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003807-40917580-4510-11eb-9d3c-d116eadd747f.JPG" width="450px">
   <img src="https://user-images.githubusercontent.com/51447706/103003810-41c2a280-4510-11eb-8e63-5b40575b20e1.JPG" width="450px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003808-412a0c00-4510-11eb-91ae-2112fa293a7c.JPG" width="450px">
   <img src="https://user-images.githubusercontent.com/51447706/103003812-41c2a280-4510-11eb-9484-dd7a794e4496.JPG" width="450px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003820-425b3900-4510-11eb-8e3b-c19ce36f2ccf.JPG" width="450px">
   <img src="https://user-images.githubusercontent.com/51447706/103003803-3f604880-4510-11eb-9323-4ec69136dab9.JPG" width="450px">
</div>
<br>

## Iniciando o projeto
 * Instale a última versão de [React Native CLI](https://reactnative.dev/docs/0.8/getting-started) e suas dependências
 * Rodar `npm i`
 * Conectar um aparelho físico ou emulador Android
 * Rodar `npm run Android`
 
 ## Versão Web
 Este app tem uma versão web desenvolvida em React, que pode ser encontrada [aqui](https://github.com/gabriellinke/lendo-musicas-web).
 
