---
title: "Sistema de Activos Fijos"
description: "Sistema de gestión de activos fijos con código QR y visualización interactiva."
image: "/src/assets/Project3.jpg"
technologies: ["Laravel 8", "Tailwind CSS", "SQL Anywhere", "D3.js", "Python", "FastAPI"]
github: "https://github.com/friedpotatu/activos-fijos"
order: 3
---

Sistema completo de gestión de activos fijos desarrollado durante mi práctica profesional, incorporando tecnologías de vanguardia para el control y trazabilidad del inventario organizacional.

## Arquitectura del sistema

- **Frontend moderno**: Interfaz desarrollada con Tailwind CSS y componentes interactivos
- **Backend robusto**: Laravel 8 como framework principal con APIs optimizadas  
- **Doble base de datos**: MariaDB para usuarios y SQL Anywhere para datos operacionales
- **Códigos QR**: Generación y lectura automática para identificación de activos
- **Visualización**: Implementación de D3.js para gráficos dinámicos

## Funcionalidades clave

- **CRUD completo**: Operaciones completas de creación, lectura, actualización y eliminación
- **Escáner QR integrado**: Identificación rápida de activos mediante códigos únicos
- **Gestión por ubicación**: Seguimiento detallado por sede y área de trabajo
- **Asignación flexible**: Sistema de asignaciones individuales y por departamento
- **Reportes automáticos**: Generación de informes detallados en múltiples formatos

## Integración con FastAPI

Desarrollo de microservicio complementario con FastAPI para procesamiento de datos y análisis avanzados, proporcionando endpoints optimizados para consultas complejas.

## Desafíos técnicos

La integración de dos motores de base de datos diferentes (MariaDB y SQL Anywhere) presentó desafíos únicos en la sincronización de datos y optimización de consultas, los cuales fueron resueltos mediante estrategias de caché y consultas optimizadas.

## Impacto organizacional

El sistema mejoró significativamente la eficiencia en el control de activos, reduciendo el tiempo de inventario en un 60% y eliminando prácticamente los errores de registro manual.