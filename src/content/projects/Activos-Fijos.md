---
title: "Sistema de Activos Fijos"
description: "Sistema de gestión de activos fijos con código QR y visualización interactiva."
image: "/Project3-1.jpg"
technologies: ["Laravel 8", "Tailwind CSS", "SQL Anywhere", "D3.js", "Python", "FastAPI"]
gallery: true
galleryImages:
  - src: "/Project3-1.jpg"
    alt: "Interfaz móvil del sistema"
    caption: "Dashboard principal optimizado para dispositivos móviles con navegación intuitiva"
  - src: "/project3-2.png"
    alt: "Modal de recuperación de activos"
    caption: "Ventana modal para recuperar información de activos con o sin código QR en versión desktop"
  - src: "/project3-3.png"
    alt: "Selección de tipo de activo"
    caption: "Modal de creación de nuevos activos con selección por categorías en versión desktop"
  - src: "/project3-4.png"
    alt: "Búsqueda manual de activos"
    caption: "Funcionalidad de recuperación de activos sin código QR mediante búsqueda manual"
  - src: "/project3-5.png"
    alt: "Formulario de creación - Parte 1"
    caption: "Primera sección del formulario de registro de nuevos activos con datos básicos"
  - src: "/project3-6.png"
    alt: "Formulario de creación - Parte 2"
    caption: "Segunda sección del formulario con información contable: cuentas, responsable, depreciación acumulada, facturación y fechas de compra"
  - src: "/project3-7.png"
    alt: "Formulario de creación - Parte 3"
    caption: "Sección final del formulario con información de leasing: número de contrato, banco leasing y fecha de vencimiento"
  - src: "/project3-8.jpg"
    alt: "Edición de activos en móvil"
    caption: "Interfaz de edición de activos optimizada para dispositivos móviles"
  - src: "/project3-9.jpg"
    alt: "Búsqueda móvil sin QR"
    caption: "Funcionalidad de búsqueda manual de activos en la versión móvil del sistema"
order: 3
---

Sistema completo de gestión de activos fijos desarrollado durante mi práctica profesional, incorporando tecnologías de vanguardia para el control y trazabilidad del inventario organizacional.

## Arquitectura del sistema

- **Frontend**: Interfaz desarrollada con Tailwind CSS
- **Backend robusto**: Laravel 8 como framework principal con APIs optimizadas
- **Doble base de datos**: MariaDB para usuarios y SQL Anywhere para datos operacionales
- **Códigos QR**: Generación y lectura automática para identificación de activos

## Funcionalidades clave

- **CRUD completo**: Operaciones completas de creación, lectura, actualización y eliminación
- **Escáner QR integrado**: Identificación rápida de activos mediante códigos únicos
- **Gestión por ubicación**: Seguimiento detallado por sede y área de trabajo
- **Asignación flexible**: Sistema de asignaciones individuales y por departamento

## Desafíos técnicos

El principal desafío fue trabajar con dos motores de base de datos diferentes: MariaDB para la gestión de usuarios y SQL Anywhere para la información empresarial, requiriendo manejo cuidadoso de las conexiones y consultas entre ambos sistemas.

## Aprendizajes

Este proyecto durante mi práctica profesional me permitió comprender la gestión de inventarios empresariales y la importancia de la trazabilidad en el control de activos organizacionales.