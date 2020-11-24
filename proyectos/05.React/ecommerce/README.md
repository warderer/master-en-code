# ECOMMERCE REACT PROJECT

## PROYECTO REACT PRIMERA FASE: 
A partir del siguiente backend: [https://ecomerce-master.herokuapp.com/docs](https://ecomerce-master.herokuapp.com/docs)

* El diseño es libre y esta vez SÍ se tomará en cuenta.

Hacer un e-commerce con las siguientes características:
* Debe de tener signup
* Debe de tener login
* Mostrar productos
* Mostrar detalles de producto
* Distingue entre ADMIN y CUSTOMER

### Funcionalidad: CUSTOMER 

#### SIN USUARIO / CON USUARIO
* Cuando entro al home puedo ver todos los productos.
* Siempre hay una navbar para hacer búsquedas por productos.
* Si le doy click a un producto puedo ver su detalle en su propio link.

#### SIN USUARIO
* En el navbar de lado izquierdo me sugiere hacer signup o login.
* La vista de login o signup son urls diferentes /login /signup.
* Hay un botón comprar en la vista individual del detalle pero está desactivado y te invita a registrarte o hacer login.

#### CON USUARIO
* En el navbar se ve mi nombre de usuario y un icono de mi foto de perfil.
* Si veo el detalle del item me aparece el botón de comprar.
	
#### Funcionalidad ADMIN: 
* Todas las funcioanlidades del customer mas: 
* El admin puede dar de alta nuevos productos.
* El admin puede modificar productos.

## BACKEND / API

### API

#### URI
[https://ecomerce-master.herokuapp.com](https://ecomerce-master.herokuapp.com)

#### DOCUMENTACIÓN
[https://ecomerce-master.herokuapp.com/docs](https://ecomerce-master.herokuapp.com/docs)

#### END POINTS DEV.F E-COMMERCE API
Auth
* POST /api/v1/signup
* POST /api/v1/login

Items
* GET /api/v1/item
* GET /api/v1/item/:idItem

Users
Es necesario autenticarse para poder consumirlos

* GET /api/v1/user
* GET /api/v1/user/me
* GET /api/v1/user/:idUser
* PATCH /api/v1/user/:idUser


### OBJETO DE LOGIN
```javascript
{
    "first_name": STRING,
    "last_name": STRING,
    "email": STRING,
    "password": STRING,
    "birth_date": DATE,
    "gender": STRING posibles["F","M","X"]
}
```

### CATEGORÍAS DE LA TIENDA
```javascript
[
      "Books",
      "Movies",
      "Music",
      "Games",
      "Electronics",
      "Computers",
      "Home",
      "Garden",
      "Tools",
      "Grocery",
      "Health",
      "Beauty",
      "Toys",
      "Kids",
      "Baby",
      "Clothing",
      "Shoes",
      "Jewelery",
      "Sports",
      "Outdoors",
      "Automotive",
      "Industrial"
]
```

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
