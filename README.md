# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Setup app
*   Make a directory and clone the GitHub repo
```
git clone https://github.com/Samir70/gladiators.git
```

*   Check you have npm installed on your machine with `npm -v`
*   Go to the cloned repo on your machine and switch branches to development
```
git checkout development
```
Next run:
```
npm install
```

## Install mongodb

In the top level directory run the following:

```
brew tap mongodb/brew
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```

## To set it up as a service
*   Run the following to stop mongodb
```
brew services stop mongodb-community@6.0
```


*   Next make sure you have the .env file with the following contents (Make sure the strings are strings). This file will be placed in the root folder for the project 'gladiators'.

```
MONGODB_URI = "mongodb://0.0.0.0/"
MONGODB_DATABASE = "gladiators"
```

### Setup connection on tableplus 
*   Select create new connection 'mongo beta'
*   Set the URL to 'mongodb://0.0.0.0/gladiators'
*   Connect

### Seed the database by going to the gladiators repo and running jest
```
npm install netlify-cli -g
# and then
Npm install -g jest
```

This should seed the database by going to the gladiators repo and running jest