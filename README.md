## Rockeseat.Devs

[Acessar site Rocketseat.Devs](https://rocketseatdevs.vercel.app)

![Demo App](./print.png "Demo App")

Como vi diversas pessoas compartilhando redes e querendo fazer um networking através da comunidade no Discord resolvi criar este app para que todos possam contribuir, treinar um pouco de git e ficar listado em uma página de desenvolvedores Rocketseat.

**Melhorias são bem-vindas, caso eu tenha feito algo errado ou possa fazer de uma maneira mais eficiente favor me informar**

### Como adicionar meus contatos?

 * Primeiro faça um fork do repositorio em sua conta no Github.

 ```
    git clone link-do-fork-feito
    cd rockseatdevs
    git checkout -b Seu_nome
    cd src/components
    code persons.js
 ```

 Adicione suas informações no final do objeto dentro do arquivo persons.js da seguinte maneira:
 **ps:** Lembre-se de manter os demais usuários no arquivo. Apenas adicione o seu bloco de informação seguindo o padrão. Veja o padrão do usuários já existente e siga o mesmo.
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

Após enviar o branch para seu repositorio abra um pull request e aguarde o merge

Até mais.
