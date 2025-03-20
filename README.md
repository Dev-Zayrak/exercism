# 💡 Exercism Solutions 💡

Ce repository contient mes solutions aux exercices réalisés sur [Exercism](https://exercism.org). 💪

Chaque dossier correspond à un langage de programmation et regroupe mes résolutions d'exercices, avec le code source et les tests associés.

Ce projet a pour but de suivre ma progression, d'améliorer mes compétences en développement et de partager mes solutions avec la communauté. 🚀


## Instructions pour tester les exercices JavaScript :

avoir [node.js](https://nodejs.org/en/download/) installer sur votre machine

Ensuite dans le terminal ..\exercism\javascript\\*nom de l'exercice*

installer les dependances :
```
corepack pnpm install
```

si besoin activer corepack :
```
corepack enable pnpm
```

lancer les tests :
```
corepack pnpm test
```

## Instructions pour tester les exercices Ruby :

avoir [ruby](https://www.ruby-lang.org/en/documentation/installation/) installer sur votre machine

Ensuite dans le terminal ..\exercism\ruby\\*nom de l'exercice*

installer la gemme :
```
gem install minitest
```

lancer les tests en remplacant *<snake_case_exercise>* par le nom de l'exercice en snake_case :
```
ruby <snake_case_exercise>_test.rb
```

## Instructions pour tester les exercices PHP :

avoir [PHP](https://www.php.net/downloads.php) installer sur votre machine

Installer [COMPOSER](https://getcomposer.org/) un gestionnaire de dependance pour PHP

Ensuite dans le terminal ..\exercism\php\\*nom de l'exercice*

Installer le framework de tests unitaires [PHPUnit](https://phar.phpunit.de/)

-> pour une installation globale sur la machine et ne pas avoir a l'installer sur chaque projet :
- creer un dossier C:\phpunit
- creer un fichier phpunit.bat qui contient :
```batch
@echo off
php C:\phpunit\phpunit.phar %*
```
- Renommer le fichier telecharger phpunit.phar
- Ajouter C:\phpunit dans PATH des variables d'environnement systeme

Cela permettra de lancer les tests avec la commande
```
phpunit HelloWorldTest.php
```
