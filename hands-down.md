### Configurazione di nome e email.

    git config --global user.name "Andrea Leopardi"
    git config --global user.email an.leopardi@gmail.com


### Creare una repository in `~/Code/awesome-app`

    cd ~/Code
    mkdir awesome-app && cd awesome-app
    git init
    git status
    rm -rfv .git
    git status
    git init


### Creare un file `hello.rb` e un `README.md`

Addarli con `git add`.

    git commit      # messaggio: Create hello.rb


- Creare un file `LICENSE.txt`
- Modificare `hello.rb` e addarlo
- Modificare `README.md` e **non addarlo**, inoltre **farci un typo** per il
  branch `fix` di dopo
- `git status` per mostrare gli stati dei file
- `git diff README.md` per vedere il diff
- `git rm` per rimuovere file


### Creare una repo su GitHub che si chiama `awesome-app`

Seguire le istruzioni di GitHub per pushare il codice.


### Branching

    git branch feature
    git checkout feature

Aggiungere il metodo `bye` a `hello.rb`.

Oooops, typo in README.md.

    git checkout master
    git checkout -b fix-typo

Fixare il typo.

    git checkout master
    git merge fix-typo      # fast-forward
    git merge feature       # git committa


### Mostrare info

    git remote -v
    git branch --all
    git log
    git lg                  # quanto migliora con un alias


### `gitignore`

Serve ad ignorare file.

- Mettiamo un'immagine nella repo
- La ignoriamo in `.gitignore`
- `git status` non la mostra


### Merge conflict

**TODO**:
- Lucio fa una repo su gh con l'oggetto `Greeter` js e il metodo `hello`,
    committa e pusha
- Io clono
- Lucio cambia il nome del metodo in `ciao`

Cambio il nome del metodo `hello` in `hola`.

`git push origin master` che mi fallisce con un merge conflict: risolvo e pusho.
