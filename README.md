# Grido

This is a project made entirely in JavaScript, designed to demonstrate the use of Node.js and other JavaScript technologies.

### Installation

To install this project, simply clone the repository and run npm install to install the required dependencies.

```
$ git clone https://github.com/Mondieur/Grido.git
$ cd core
$ npm install
```

### Usage 
To run the project, simply enter the command node App.js in the terminal.

```
$ node App.js
```

This will start the application and display any relevant output in the terminal.

### Contributing 
Contributions to this project are welcome! If you find a bug or would like to add a new feature, please create an issue or submit a pull request.

### Credits
This project was created by [Mondieur Gara](https://github.com/Mondieur).

### License
This project is licensed under the [MIT License]().

### Typescript Testing

To run the `app.ts` type `tsc app.ts`.

1. Intall the typescript compiler
```
npm install typescript --save-dev
```
2. Run the compiler
```
npx tsc
```
3. The `tsconfig.json` configures the compilaton.

### Configuring the compiler
```
npx tsc --init
```

Here is an example of more things you could add to the `tsconfig.json` file:

```
{
  "include":["src"],
  "compilerOptions":{
    "outDir": "./build"
  }
}
```