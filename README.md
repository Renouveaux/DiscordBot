## V.***0.0.9***

[![Build Status](https://travis-ci.org/Renouveaux/DiscordBot.svg?branch=master)](https://travis-ci.org/Renouveaux/DiscordBot)

### **Ajout** :
	Une nouveau filtre pour la détection de bloc de code. Cela supprime le message, pousse le code dans un nouveau pastie et retourne l'url.
	Mise en place des tests unitaires, ils s'étofferons avec le temps afin que toutes les fonctions y soit présentes.

### **Résolution de bug** :
	Le bug pour la réponse en privé lors de la première commande d'un utilisateur à été corrigé directement dans la librairie Discord.io

## v.***0.0.8***

Mise à jour du fichier du readme.

### **Ajout** :
	- Ajout de la génération automatique d'un fichier de config via la commande ***node install.js***

## v.***0.0.7***

### **Ajout** :
        - help : Retourne toutes les commandes disponible
        - share : Retourne le lien d'un site de partage de code
        - ping : Test le retour du Bot
        - config : Pour admin seulement, permet de lire et d'écrire dans la config du bot

### **Modification** :
- share. Utilisation de request pour la detection du bon fonctionnement du site
et callback retournant l'adresse d'un share unique. En cas de 404 ou autre venant du site par défaut.
Le retour ce fait sur pastie.

### **Bugs connu**
 - Le fait que le message soit supprimé fait planter de manière aléatoire le bot.
        Il ne trouve apparement pas l'id du message à supprimer.

## v.***0.0.6***

Début du projet
