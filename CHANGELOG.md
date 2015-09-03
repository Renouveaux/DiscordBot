## 0.0.7

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

## 0.0.6

Début du projet
