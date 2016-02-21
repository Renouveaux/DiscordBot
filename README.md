[![Build Status](https://travis-ci.org/Renouveaux/DiscordBot.svg?branch=master)](https://travis-ci.org/Renouveaux/DiscordBot)

[changelog](https://github.com/Renouveaux/DiscordBot/blob/master/CHANGELOG.md)

# DiscordBot
Un bot pour le chat sur Discord basé sur <a href="https://github.com/izy521/discord.io">discord.io</a>

# Caractéristiques:
- !bit url => Retourne une url bitifié via le site bit.ly
- !clean query => Nettoie le chat du nombre de message de la query peu-être un chiffre ou all
- !config key => Retourne et ou modifie la configuration du bot
- !help => Retourne la liste des commandes du bot
- !ping => Envoie un ping au bot répondant à la personne en **MP**
- !poll key => Système de sondage, non implémenté
- !question @user => Envoie à l'@user, un message lui précisant comment poser sa question
- !screen => Retourne l'url permettant le partage d'image
- !share @user => Retourne une url propre de codeshare pour le partage de code
- !sms @user => Alerte un utilisateur que le langage sms est prohibé
- #filter => Supprime et remplace automatiquement le code d'un utilisateur par un lien contenant ce dit code
- #bit => Remplace une URL d'un utilisateur par une URL simplifié par bit.ly

Et bien plus

# Installation

Ce bot est écrit pour fonctionner sous nodejs. Please see https://nodejs.org/en/download/

Une fois cloné, lancer la commande npm install afin d'installer les packages utiles puis un node install.js pour paramètrer le fichier de config.

# Autre

Si vous avez des remarques, commentaires idée de fonctionnalité ou autre, n'hesitez pas.