### DiscordBot

Un bot pour DiscordApp, permet de créer des commandes simple via la création de modules.

## Ce dont vous avez besoin

- Un email et un mot de passe utilisé sur Discord. Pas de connexion anonyme

## Installation

````javascript
npm install
````

## Configuration

Lancez simplement la commande suivante : et suivez le guide

```javascript
node install.js
```

## Modules disponible

	- ping : Retourne en privé un message à l'utilisateur indiquant si le bot est toujours présent.
	- help : Retourne la liste des commandes disponible.
	- share : la commande share affichera par callback un lien direct vers une nouvelle instance de codeshare.
		Si le site ne répond pas, un failBack vers pastie sera utilisé.
	- config : commande pour modifier la configuration du bot, met à jour le fichier config.json. Necessite que le tableau admin soit renseigné dans le fichier 		config.json avec l'id des administrateurs.

## Base du bot

**Le bot peu fonctionner grâce au travail de Izy521 qui met régulièrement à jour sa librairie.** [Depot Izy521](https://github.com/izy521/discord.io)