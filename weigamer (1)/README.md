
# Weigamer • Tienda de consolas retro y actuales

Proyecto frontend para **Evaluación 1**. Incluye tienda pública + sistema administrador, validaciones JS y carrito con LocalStorage.

## Cómo ejecutar
1. Descarga y descomprime `weigamer.zip`.
2. Abre `index.html` en tu navegador (doble clic).
3. Navega por las páginas: Productos, Blogs, Nosotros, Contacto, Login/Registro.
4. Entra al administrador desde `admin/index.html` (simulado).

> No requiere servidor ni base de datos. Todo se guarda en **LocalStorage** del navegador.

## Funcionalidades clave
- **Tienda**: listado, detalle, **carrito funcional** (añadir, editar cantidad, quitar, total, persistente).
- **Blogs** con 2 artículos de ejemplo y detalle.
- **Nosotros** y **Contacto** (almacena mensajes en LocalStorage).
- **Login / Registro** con validaciones:
  - Email solo `@duoc.cl`, `@profesor.duoc.cl` y `@gmail.com`.
  - Contraseña 4-10 caracteres.
  - RUN sin puntos ni guion, con dígito verificador (módulo 11).
  - Nombre/Apellidos/Dirección largos máximos.
- **Administrador**:
  - **Productos**: crear/editar/eliminar, validaciones (código, precio ≥ 0, stock entero ≥ 0, categoría requerida, descripción ≤ 500, imagen opcional).
  - **Usuarios**: crear/editar/eliminar, validaciones completas y **selector dependiente Región/Comuna** (desde arreglo JS).
  - Roles de referencia: Administrador / Cliente / Vendedor (base para próximas entregas).

## Estructura
```
weigamer/
  index.html, products.html, product.html, cart.html
  login.html, register.html, blogs.html, blog-detail.html, about.html, contact.html
  admin/ index.html, products.html, users.html
  assets/css/style.css
  assets/js/app.js, validation.js, regions.js
```

## Notas para GitHub
- Crea un repositorio y sube todo el contenido de `weigamer/`.
- Activa GitHub Pages (branch `main`, carpeta `/root`). El sitio quedará público.

## Documentos incluidos
- `ERS_Weigamer_v1.md`: Especificación de Requisitos siguiendo **IEEE 830** (versión inicial).
- `Planilla_Requerimientos_Weigamer.xlsx`: Requisitos funcionales y no funcionales con criterios de aceptación.

## Autoría y uso académico
Proyecto generado para apoyar la entrega, siguiendo los **mockups/validaciones** del enunciado. Ajusta textos y estilos según tu equipo.
