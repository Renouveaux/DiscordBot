## 0.3.0

#### ADDED :

- There is now a `CHANGELOG.md` file ( for the changelogs ).
- `admin` key to the config.
- Command `util` ( default : return help ).
- Subcommand `channel-id` ( which return the id of the channel ) of the command
`util`.
- Subcommand `help` ( which return the help for the command ) of the command
`util`.
- Subcommand `my-id` ( which return the id of the user ) of the command `util`.
- Command `config` ( default return help ).
- Subcommand `get` ( which return the value of a part of the configuration ) of
`config`.
- Subcommand `help` ( which return the help for the command ) of the command
`config`.
- Subcommand `save` ( which save the config ) of the command `config`.
- Subcommand `set` ( which change the value of a part of the configuration ) of
the command `config`.

#### MODIFIED :

- The `commandSymbol` configuration has now the name of `commandPrefix`.
- The `echo` mention the sender of the command.

#### FIXED :

- The bot crash when try to set default configuration.
- The command parser return a bad value when we try to get all the arguments
after an other.

## 0.2.0

#### ADDED :

- The architecture of the project is created.
- A default config and a `config.json` have been created.
- And `echo` command has been created.

## 0.1.0

Initialize the project after some tests
