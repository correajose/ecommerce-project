# e-commerce con react.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Este proyecto es un **prototipo funcional** de un e-commerce que le permite al usuario acceder al catálogo de productos de la tienda, agregar items al carrito según la disponibilidad de stock y realizar el checkout de la compra proporcionando en un formulario la información requerida. La información de los productos del catálogo y de las órdenes realizadas se almacena en una base de datos noSQL facilitada por el servicio **Firestore** de Firebase.

## Instrucciones para levantar el proyecto
Desde la terminal, ubicados en el directorio `my-app` , ejecutar los comandos:
`npm install`
`install -g create-react-app`
`npm start`

## Convenciones de nomeclatura

 - PascalCase para componentes react.
 - camelCase para help-functions, para class-name's & id's particulares, nombres de estados, variables, handlers y props.
 - kebab-case para class-name's & id's reutilizables y URL sections.

## Arquitectura del front-end

 1. App.js --> se trata como nivel más alto de la app.

	- CartContext --> proporciona estados y métodos para administrar el carrito de compras, accesibles por todos los componentes de
    nuestra app.
	- AppRouter --> define las rutas para navegar a través de las secciones de nuestra app, sin refrescar la página y sin forzar un re-render de toda la app.

2.  Section-view components --> componentes contenedores encargados de renderizar las vistas principales de cada unas de las secciones y los componentes contenidos en estas.

3. Componentes contenedores --> se tratan como cajas contenedoras de los componentes funcionales. Organizan el layout de las vistas. Se permite definir estados dentro de estos componentes, para luego ser pasados a sus hijos y estos últimos los actualicen.

4. Componentes funcionales --> componentes que desempeñan alguna funcionalidad específica mediante lógica, peticiones, funciones. Se permite que contengan otros componentes funcionales de menor nivel. 