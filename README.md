## Rockeseat.Devs

![alt text](https://rocketseatdevs.herokuapp.com/static/media/logo-rocketseat-devs.8a75e733.svg "Rocketseat.Devs")

[Acessar site Rocketseat.Devs](https://rocketseatdevs.herokuapp.com)

Como vi diversas pessoas compartilhando redes e querendo fazer um networking através da comunidade no Discord resolvi criar este app para que todos possam contribuir, treinar um pouco de git e ficar listado em uma página de desenvolvedores Rocketseat.

**Melhorias são bem-vindas, caso eu tenha feito algo errado ou possa fazer de uma maneira mais eficiente favor me informar**

### Como adicionar meus contatos?

 * Primeiro faça um fork do repositorio em sua conta no Github.

 ```
    git clone link-do-fork-feito
    cd rockeatdevs
    git checkout -b Seu_nome
    cd src
    code person.js
 ```

 Adicione suas informações no final do objeto dentro do arquivo persons.js da seguinte maneira:
```javascript
    {
      name: "Seu_nome",
      gituser: "seu_usuario_do_github",
      linkedin: "seu_perfil_no_linkedin"    
    },
```

Salve.

```
    git add --all
    git commit -m "Adicionando meu nome na lista"
    git push origin Seu_nome
```

Após enviar o branch para seu repositorio abra um pull request e aguarde o merge :D

Até mais.