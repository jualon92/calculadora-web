Proyecto en proceso, basado en [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)

 
 

## Imagen
 ![Webp net-resizeimage (2)](https://user-images.githubusercontent.com/46230600/153524953-1c81ca13-8ee8-4936-ab3f-5547e727bdc5.png)


![Webp net-resizeimage](https://user-images.githubusercontent.com/46230600/153524850-5463b999-0de6-4043-820b-ec7c5ba343c3.png)

 

## Lista de Tareas pendientes
- Falta implementar custom
- Estaria bueno utilizar nombres de clase basado en BEM, y utilizar Sass


## Proceso
Para los contenedores utilice flex box, margin, transform:translate(x,y) y position absolute para iconos.

El boton de porcentaje clickeado es recordado mediante JS:
Al dispararse evento clickear se quita clase activo a todos los botones y se agrega al boton clickeado. 
El texto  interior del boton es pasado a integer y asignado a variable para recordar la eleccion.


Me parece mejor que la cuenta se haga cuando ya fueron ingresados los tres valores. Se verifica que no hay input.value falsy antes de mostrar datos


Borrar datos ingresados de inputs provoca que ecuacion devuelve NaN (se utiliza string vacio)
Por esto, funcion getDisplay() devuelve 0 si input.value es string vacio.


### Herramientas
HTML/CSS/Vanilla JS

 

### Que aprendi
Flex es muy comodo para organizar elementos. Position absolute permite sacar del flujo elementos, util para iconos.

JS : no repetir logica, funciones puras facilitan legibilidad.


### Recursos utiles
colorcop me ayudo con los colores
http://colorcop.net/

font-awesome para iconos me fue muy util
https://fontawesome.com/



