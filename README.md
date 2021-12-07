# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### PreViews

This views are subjected to changes.

- IPad Pro

![iPad Pro.png](https://static.platzi.com/media/user_upload/iPad%20Pro-f8e08748-9931-4ac0-8180-b753ab4d5e85.jpg)

- IPhone

![iPhone X.png](https://static.platzi.com/media/user_upload/iPhone%20X-837dfdfb-5ae6-44bf-b4b7-5b9130566237.jpg)

- Portatil

![portatil.png](https://static.platzi.com/media/user_upload/portatil-b0b6d9ce-4947-4145-8677-c81a92f4c42a.jpg)

### Folders

![folders.png](https://static.platzi.com/media/user_upload/folders-d4568b2e-b12b-4fe3-b3a4-0b6db1ad05cf.jpg)

### High Order Components

–
Las funciones como las conocemos pueden devolvernos un valor en sus returns, pero estas funciones de “orden superior”, son funciones que devuelven otras funciones.

–
Si llamamos a la high order function y le enviamos un parámetro no tendremos todavía un resultado, como está devolviendo otra función tenemos que llamar a esa función que obtenemos luego de llamar a la de orden superior, enviarle los nuevos parámetros que necesita la función de retorno y entonces si, obtendremos nuestro resultado.

### Render props vs. High Order Components vs. React Hooks

–

#### Maquetación

**Render props o render functions vs React hooks**

Ambas son formas correctas de trabajar y comunes.
Las render props suben el nivel de elegancia del código pero también pueden bajar el nivel de código aburrido comparado con los react hooks.
Si practicamos mucho podremos usar las render props de manera mucho más saludable para los componentes más estructuralmente importantes de nuestras apps. Nos ayudan a proteger nuestros componentes para que no nos equivoquemos y la maquetación sea correcta.
–

#### Share data, compartir información entre componentes.

Aquí participan todos los patrones.

- Render Functions:

Compartir info con funciones que en sus parámetros nos dejan esa info que necesitamos que nos compartieran.
Si necesitamos demasiada info de distintas render functions para un mismo componente deja de verse bien y podría llegar al código spaghetti.

- HOC:

Funciones que pueden retornar y retornar y retornar otras funciones hasta que en algún momento retornemos un componente de react y podamos pasarle toda la info.
Usarlos es sencillo, envolvemos nuestros componentes en estos HOC y automáticamente van a recibir toda la info que nos querían compartir estos HOC.
Si necesitamos la info de muchos HOC’S en un mismo componente tenemos el mismo problema que con las render functions. Código muy horizontal.
–
**React hooks**

Llamamos al react hook (oficial o custom) y luego consumimos la info en el return del componente.
Cuando tenemos muchos llamados a distintos react hooks no hay código horizontal.
Ganaron los hooks para compartir info entre varios componentes
