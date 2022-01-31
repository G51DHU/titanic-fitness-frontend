# Titanic Fitness project

>This project is a part of the first running year of the T-Levels course.

>Therefore, the name is ficticious and if it coincides with existing brand or companies, it is pureley a coincidence.

<br/>

## Download, Install, Run

1) Make sure you have [git](https://git-scm.com/downloads) installed

2) Open terminal in the directory you wish to clone the projec to.

3) Enter the following commands into the terminal.

```
git clone "https://github.com/G51DHU/titanic-fitness-frontend

cd titanic-fitness

npm i
```

4) Enter the following command to run the server.
```
npm run start
```
> Press `ctrl + c` in order to stop the server.

<br/>
<br/>

# Commands

1) This command starts the development version of the server.
```
npm run start
```

2) Build the website.
```   
npm run build
```

3) Build the website, everytime a file is saved.
```
npm run wbuild
```

4) Run the built version of the website.
```
npm run preview
```

# Path alias
Path aliases help make typing out the path to files easier, and also allow you to change paths quicker, when altering directory structures.

The current path alias' are:
- @c
- @s
- @a

### `@c` usage
The `@C` alias is used to access components located at the location "`src/components`".

Example:

```js
//instead of 
import Register from './src/components/register.jsx';

//use this
import Register from '@c/register';
```

### `@a` usage
The `@a` alias is used to access assets located at the location "`src/assets`".

Example:

```js
//instead of 
import logo from "../assets/logo.svg";

//use this
import logo from "@a/logo.svg"
```

### `@s` usage
The `@s` alias is used to access stylesheets located at the location "`src/styles`".

Example:

```js
//instead of 
import "../styles/login.css"


//use this
import "@s/login.css"
```
# titanic-fitness
# titanic-fitness
