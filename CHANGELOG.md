## V.***0.1.2***

### **Ajout** : 
	Ajout de la commande bit pour raccourcir les urls de manière automatique.
	Ajout d'un filtre basé sur bit.ly 

### **Résolution de bug** :
	Correction de la commande clean pour prise en compte de la mise à jour de la librairie en 1.7.1 de Discord.io

## V.***0.1.0***

### **Ajout** : 
	Ajout de la commande sms, affichant un message d'attention au format d'écriture.
	Ajout d'un message d'accueil pour les nouveau arrivant (Message à la première connexion seulement).

### **Résolution de bug** :
	Correction de la commande screen suite à la mise à jour de la librairie Discord.io
	Correction de la commande share suite à la mise à jour de la librairie Discord.io
		-> Ces deux mise à jour concerne le changement de pseudo du Bot.

## V.***0.0.9***


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
