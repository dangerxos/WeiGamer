
# Especificación de Requisitos de Software (ERS) — Weigamer (V1)

**Proyecto:** Tienda online de consolas retro y actuales  
**Fecha:** 2025-09-05 21:21  
**Norma de referencia:** IEEE 830 (plantilla académica)

## 1. Introducción
### 1.1 Propósito
Definir los requisitos del frontend de Weigamer para la **Entrega 1**: tienda pública + panel administrador, con HTML/CSS/JS y **LocalStorage**.

### 1.2 Ámbito del Sistema
- **Incluye (E1):** navegación, catálogo, detalle, blogs, nosotros, contacto, login/registro, **carrito funcional** con persistencia; administrador con mantenedor de **Productos** y **Usuarios**.
- **No incluye (E1):** pagos reales, autenticación/roles en servidor, base de datos real, envío de correos; quedarán para futuras entregas.
- **Objetivo:** cumplir los mockups y validaciones solicitadas y dejar base para continuar.

### 1.3 Definiciones
- ERS: Especificación de Requisitos de Software.  
- LocalStorage: almacenamiento clave-valor del navegador.  
- RUN/RUT: Rol Único Nacional (Chile).

### 1.4 Referencias
- Enunciado de la evaluación (vistas y validaciones).  
- Plantilla ERS (IEEE 830) académica.

### 1.5 Visión General
Se presentan la descripción general (contexto/usuarios), requisitos específicos (funcionales y no funcionales), interfaces y validaciones, con identificación y trazabilidad inicial.

## 2. Descripción General
### 2.1 Perspectiva del Producto
Frontend autónomo **sin backend** (E1), con persistencia en LocalStorage para carrito, mensajes de contacto, productos y usuarios de demo.

### 2.2 Funciones del Producto (resumen)
- Navegación entre páginas públicas.
- Catálogo de productos + detalle + **carrito** (añadir/editar/quitar/total).
- Formularios: login, registro, contacto.
- Blogs (listado + detalle).
- Panel administrador: CRUD de productos/usuarios.
- Validaciones JS en formularios.

### 2.3 Características de los Usuarios
- **Cliente:** navega, añade al carrito, envía contacto, puede registrarse.
- **Vendedor:** (simulado) visualiza listados en admin.
- **Administrador:** gestiona productos/usuarios en admin.

### 2.4 Restricciones
- Entrega 1: **HTML, CSS, JS** puro, sin servidor; persistencia en LocalStorage.
- Diseño **responsivo** básico y estilos propios.
- Validaciones específicas indicadas por el enunciado.

### 2.5 Suposiciones y Dependencias
- El proyecto se ejecuta en navegadores modernos (Chrome/Edge/Firefox móvil/escritorio).
- El repositorio será público en GitHub.

### 2.6 Requisitos Futuros
- Autenticación real, base de datos, órdenes de compra, pasarela de pago, roles con permisos en backend.

## 3. Requisitos Específicos
### 3.1 Interfaces
**Usuario:** páginas web con menú superior, contenido central y footer; admin con menú lateral.  
**Hardware:** compatible con desktop y mobile (touch).  
**Software:** navegador web; almacenamiento en LocalStorage.  
**Comunicación:** N/A (sin backend en E1).

### 3.2 Requisitos Funcionales (extracto)
- **RF-01** Listar productos en **Products** desde un arreglo JS/LocalStorage.
- **RF-02** Ver detalle de producto y su información.
- **RF-03** **Añadir** productos al carrito desde listado y detalle.
- **RF-04** **Editar cantidad** y **eliminar** ítems del carrito.
- **RF-05** Calcular **total** y **persistir** carrito en LocalStorage.
- **RF-06** **Login**: correo permitido y contraseña 4–10 car.
- **RF-07** **Registro**: RUN válido, campos obligatorios y longitudes máximas.
- **RF-08** **Contacto**: guardar mensaje en LocalStorage.
- **RF-09** **Blogs**: listado + detalle (2 posts).
- **RF-10** **Admin/Productos**: crear/editar/eliminar con validaciones (precio ≥0, stock entero ≥0, categoría requerida, descripción ≤500).
- **RF-11** **Admin/Usuarios**: crear/editar/eliminar con validaciones (RUN, correo dominio, longitudes), selector **Región/Comuna** dinámico.
- **RF-12** Roles de referencia: Administrador/Vendedor/Cliente (solo UI; sin backend).

### 3.3 Requisitos No Funcionales (extracto)
- **RNF-01 Rendimiento:** render inicial en < 1.5 s en equipos estándar; acciones del carrito en < 200 ms.
- **RNF-02 Seguridad (E1):** sin datos sensibles; datos locales en LocalStorage; no exponer credenciales reales.
- **RNF-03 Fiabilidad:** no errores JS en consola en flujo normal; datos persisten en recarga.
- **RNF-04 Disponibilidad:** al ser estático, 99% si se aloja en GitHub Pages.
- **RNF-05 Mantenibilidad:** código modular (app.js, validation.js, regions.js); comentarios mínimos.
- **RNF-06 Portabilidad:** funciona en navegadores modernos desktop/móvil; sin dependencias externas.

### 3.4 Otros Requisitos
- Accesibilidad básica (etiquetas semánticas, contraste suficiente, foco visible).

## 4. Trazabilidad inicial
- RF-01..RF-12 ↔ Mockups/validaciones del enunciado.
- RNF-01..RNF-06 ↔ Pautas de la entrega 1.
