name: cover
class: center, middle

<img src="images/git-logo.png" width="400" />





---
name: whoami
class: center, middle

# Andrea Leopardi  
### an.leopardi@gmail.com  
### @whatyouhide
##### Web developer  

???
- Sono anche un maestro delle arti oscure di git.
- Interrompete per qualsiasi domanda, le domande mi gasano





---
class: center, middle

# Cos'è git?

???
# Survey
- quanti conoscono git?
- quanti conoscono svn?


--
Git è un *distributed version control system*

--
#### open source

--
#### veloce

--
#### efficiente (spaziotempo)

--
#### open source!





---
name: installation-cover
class: center, middle

# Installazione





---
name: installation-links
class: left, middle

### Linux

```bash
apt-get install git-core    # *buntu, Debian
yum install git-core        # Fedora
```

### OS X

http://git-scm.com/downloads

### ...Windows?

http://msysgit.github.com/

???
Ovviamente git è molto unix-oriented  
Funziona alla perfezione anche su Windows ma la sua filosofia e' Unix  
Fare una cosa e farla bene (ogni subcommand)





---
name: git-init-cover
class: center, middle, git-command-cover

# `git init`





---
class: more-padded

Inizializza una repository git:

```
ironmac ~/Code/git-talk-ingegneria/tmp → git init
Initialized empty Git repository in /Users/ironmac/Code/git-talk-ingegneria/tmp/.git/
```

--
Crea semplicemente una directory `.git` nella directory corrente:

```
ironmac ~/Code/git-talk-ingegneria/tmp → ls -la
total 0
drwxr-xr-x   3 ironmac  staff  102 May 27 18:44 .
drwxr-xr-x  14 ironmac  staff  476 May 27 18:34 ..
drwxr-xr-x   9 ironmac  staff  306 May 27 18:44 .git
```

--
Si può facilmente rimuovere git da una repository:

```
ironmac ~/Code/git-talk-ingegneria/tmp → rm -rf .git
```
