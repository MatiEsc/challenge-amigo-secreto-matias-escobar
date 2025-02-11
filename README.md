# Amigo Secreto 🎉

## Descripción
Esta aplicación web permite a los usuarios agregar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". Además, incluye funcionalidades como validaciones de entrada, prevención de caracteres especiales, y opciones de reinicio para mejorar la experiencia del usuario.

---

## Características Principales ✅

1. **Agregar nombres**: Los usuarios pueden ingresar nombres en un campo de texto y agregarlos a una lista visible.
2. **Validación de entrada**: Se verifica que los nombres ingresados sean válidos, permitiendo solo letras y tildes.
3. **Prevención de nombres duplicados**: No se permite agregar el mismo nombre más de una vez.
4. **Sorteo aleatorio**: Se elige un nombre al azar de la lista de amigos ingresados.
5. **Botón de reinicio**: Se permite limpiar la lista y comenzar un nuevo sorteo.
6. **Habilitación y deshabilitación de botones**: Los botones de "Sortear" y "Reiniciar" se activan o desactivan según el estado de la lista.

---

## Instrucciones de Uso 📌

1. Escribe el nombre de un amigo en el campo de texto.
2. Presiona el botón "Añadir" para agregar el nombre a la lista.
3. Repite el proceso hasta tener al menos dos nombres en la lista.
4. Una vez agregados, presiona el botón "Sortear amigo" para elegir un amigo secreto.
5. El resultado del sorteo aparecerá en pantalla.
6. Para empezar de nuevo, presiona el botón "Reiniciar", lo que borrará la lista y permitirá un nuevo sorteo.

---

## Estructura del Proyecto 📂

```
|-- index.html       # Estructura principal de la página
|-- style.css        # Estilos de la interfaz
|-- app.js           # Lógica de la aplicación
|-- assets/          # Imágenes y recursos visuales
```

---

## Tecnologías Usadas 🛠️

- **HTML5** → Estructura de la página.
- **CSS3** → Diseño y estilos de la aplicación.
- **JavaScript (Vanilla JS)** → Lógica del sorteo y validaciones.

---

## Mejoras Implementadas 🚀

✔ Se sanitizan las entradas para evitar ataques XSS.
✔ Se capitaliza la primera letra de cada nombre ingresado.
✔ Se agrega un contador en la lista de nombres.
✔ Se implementa la lógica para habilitar y deshabilitar botones de manera dinámica.
✔ Se asegura que haya al menos dos nombres antes de realizar el sorteo.

---

## Próximas Mejoras 🔥

🔹 Implementación de almacenamiento local para guardar la lista.
🔹 Estilos más dinámicos con animaciones CSS.
🔹 Opción para exportar la lista de nombres en un archivo.

---

¡Disfruta la aplicación y que comience el sorteo del amigo secreto! 🎁🎊
