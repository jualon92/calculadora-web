Proyecto en proceso, basado en [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)

Utilizo :
- HTML
- CSS / nomenclatura BEM / SASS 7 in 1
- Vanilla JS 
 

## Que es?
Se propone utilizar una pagina que divide el gastototal(gasto + propina) en partes iguales; para evitar ese silencio incomodo luego de salir a comer.

Se agrega un switch para cambiar idiomas y no terminar haciendo macanas a la hora de pagar.


Se asume:
- que la comida tiene un monto
- que hay una propina basada en %.
- al menos 1 personas comio

Si alguna no se cumple, la calculadora decide no gastar su tiempo en gente poco fiable.
 

## Imagen
 ![Webp net-resizeimage (5)](https://user-images.githubusercontent.com/46230600/153784103-bde482fe-a772-4a75-b617-ad50fd113a97.png)




![Webp net-resizeimage (4)](https://user-images.githubusercontent.com/46230600/153781916-a00fa435-0184-40a5-a4c7-e4ec08e51b44.png)


 

## Lista de Tareas pendientes 
- modo noche 
 

## Proceso
- si no son agregados monto, personas y porcentaje => display sigue en 0.00 para evitar resultados dudosos
- Agregar 0 personas avisa que es mala idea y lo ignora
- Limite en monto de 9 digitos para evitar malentendidos
- utilizar  switch de lenguaje cambia elemento.innerText segun valores de un diccionario reverso
- elegi utilizar flex porque  facilita que se mantengan proporciones en diferentes resoluciones.


 
### Herramientas
HTML/CSS/Vanilla JS
nomenclatura BEM y SASS

 
### Que aprendi
- Flex es comodo para organizar elementos y mantener un diseño responsive.

- Preferir no compartir clases de css con JS, limita refactoring  : Cambiar nombre de clases para metodologia de css no deberia impactar en JS
 

- JS : no repetir logica, delegar responsabilidad en funciones auxiliares.

- Tomarme el tiempo en plantear soluciones posible , ventajas y desv de cada una. Comenzar con una prueba  lo mas pequeña posible
ej: probar cambiar un solo input de un idioma a otro en vez de comenzar con un diccionario


### Recursos utiles
colorcop me ayudo con los colores
http://colorcop.net/

font-awesome para iconos me fue muy util
https://fontawesome.com/



