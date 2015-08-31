## Bot pour DiscordApp

Ce bot est comme beaucoup d'autre, réalisé pour la nouvelle application Discord, peu-être un futur remplacent au chan IRC.

# Comment l'utiliser
````javascript
npm install
node index.js
````

# Fichier de configuration

Pour que l'application puisse fonctionner, il faut écrire un fichier de config nommé ***config.json***, donc voici là forme.
```javascript
{
  "username": "",
  "password": "",
  "admin": [],
  "autoReconnect": false,
  "commandPrefix": "!",
  "debug": false,
  "allowedChannelIds": {}
}
```