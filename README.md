<h1 align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103010091-7b96a780-4516-11eb-8677-4ca4cbe36e3f.png" />
</h1>

### Esta é a versão web do app Lendo música, um buscador de músicas que pode ser encontrado [aqui](https://github.com/gabriellinke/lendo-musicas-app).

### :gear: Funcionamento
<p>
   Ao abrir o website, o usuário se depara com uma tela de buscas, onde ele pode inserir um artista e o nome de uma música e pressionar o botão buscar para pesquisar a letra dessa música. Essa página também tem o botão de "Últimas buscas" que, ao ser pressionado, direciona o usuário a uma página listando as suas 10 últimas buscas.
 </p>
 <br>
 <p>
  Uma vez inseridos artista e música e pressionado o botão de buscar, é feita uma requisição a <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search">API</a> e a resposta é tratada. Se a letra não for encontrada, o usuário é direcionado para uma página de erro, dizendo que a letra não foi encontrada. Do contrário, abre-se uma nova página onde o usuário confirma se a letra encontrada é a que ele procurava. Após isso, é possível visualizar a letra da música pesquisada.
</p>

### :eyes: Versão demo
A versão de demonstração pode ser acessada clicando <a href="https://lendo-musica.netlify.app/">aqui.</a>
  
## :camera: Imagens do website

<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003814-425b3900-4510-11eb-878c-7730f2a11dd1.JPG" width="600px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003807-40917580-4510-11eb-9d3c-d116eadd747f.JPG" width="400px">
   <img src="https://user-images.githubusercontent.com/51447706/103003810-41c2a280-4510-11eb-8e63-5b40575b20e1.JPG" width="400px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003808-412a0c00-4510-11eb-91ae-2112fa293a7c.JPG" width="400px">
   <img src="https://user-images.githubusercontent.com/51447706/103003812-41c2a280-4510-11eb-9484-dd7a794e4496.JPG" width="400px">
</div>
<div align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103003820-425b3900-4510-11eb-8e3b-c19ce36f2ccf.JPG" width="400px">
   <img src="https://user-images.githubusercontent.com/51447706/103003803-3f604880-4510-11eb-9323-4ec69136dab9.JPG" width="400px">
</div>
<br>

# :construction_worker: Como rodar o projeto
```bash
# Clone Repository
$ git clone https://github.com/gabriellinke/lendo-musicas-web.git
```
 
### 💻 Executar projeto Web

```bash
# Go to lendo-musica-web folder
$ cd lendo-musica-web/lendo-musica-web

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Acesse http://localhost:3000/ e veja o resultado.

