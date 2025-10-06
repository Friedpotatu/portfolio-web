---
title: "Intranet Empresarial Integral"
description: "Sistema de gestión empresarial completo con módulos de operaciones, mantenimiento, inventario TI, flota y recursos humanos. Proyecto en desarrollo continuo."
image: "/project1-vid-1.mp4"
technologies: ["Laravel 12", "Bootstrap 5", "MariaDB", "Livewire", "Blade"]
gallery: true
galleryImages:
  - src: "/project1-vid-1.mp4"
    alt: "Demostración principal de la intranet"
    caption: "Video principal mostrando el dashboard y funcionalidades core del sistema de inventario TI"
  - src: "/project1-1.png"
    alt: "Pantalla de bienvenida"
    caption: "Welcome blade - Pantalla de bienvenida al sistema con acceso inicial 1"
  - src: "/project1-2.png"
    alt: "Dashboard principal modular"
    caption: "Welcome blade - Pantalla de bienvenida al sistema con acceso inicial 2"
  - src: "/project1-3.png"
    alt: "Dashboard de operaciones"
    caption: "Dashboard del módulo de operaciones mostrando estadísticas de OT, personal técnico activo, OTs del mes y acceso a gestión de OT, checklist y documentación técnica"
  - src: "/project1-4.png"
    alt: "Gestión de órdenes de trabajo"
    caption: "Vista de gestión de OT mostrando listado con personal asignado, vehículo, título, descripción, fechas programadas y leyenda de iconos de tipo, prioridad y estado"
  - src: "/project1-vid-2.mkv"
    alt: "Módulos operacionales avanzados"
    caption: "Demostración de módulos complementarios: operaciones, mantenimiento y gestión de flota"
  - src: "/project1-vid-3.mp4"
    alt: "Características administrativas"
    caption: "Funcionalidades de administración, usuarios y configuración del sistema empresarial"
featured: true
order: 1
---

Intranet empresarial integral diseñada para centralizar y optimizar la gestión operacional completa de la empresa. Sistema modular en desarrollo continuo que unifica procesos críticos desde inventario TI hasta gestión de flota y mantenimiento.

## Módulos del Sistema

### Módulo Inventario TI (Núcleo Original)
- **Gestión integral de activos**: Registro, seguimiento por sede/usuario, asignaciones individuales y por área
- **Dashboard interactivo**: Métricas clave y visualización de estados en tiempo real
- **Exportación avanzada**: Generación automática de Excel y actas de entrega/devolución
- **Sistema de permisos**: Control de accesos RBAC con 10 niveles jerárquicos

### Módulos Operacionales en Desarrollo
- **Operations**: Sistema de órdenes de trabajo con autenticación dual (admin/técnicos)
- **Maintenance**: Gestión de mantenimiento preventivo/correctivo integrado
- **Fleet**: Administración completa de vehículos y documentación técnica
- **Human Resources**: Gestión de empleados con importación Excel masiva
- **Warehouse**: Control de stock y órdenes de compra
- **Transport Services**: Gestión de servicios, clientes y contratos
- **Accounting**: Seguimiento financiero y créditos

## Arquitectura Tecnológica

### Stack Principal
- **Backend**: Laravel 12 con arquitectura modular y Services
- **Frontend**: Tailwind CSS + Alpine.js + Livewire para interactividad
- **Base de datos**: MySQL con relaciones UUID optimizadas
- **Autenticación**: Sistema dual (Laravel Breeze + RUT para técnicos)

### Características Técnicas
- **RBAC Avanzado**: 10 niveles jerárquicos con middleware personalizado
- **Cache Inteligente**: TTL optimizado (1-5 min) para diferentes tipos de datos
- **Storage Dinámico**: Configuración automática D: drive con fallback local
- **Exportación**: Excel/PDF con librerías especializadas
- **API REST**: Endpoints para integración inter-módulos

## Estado y Evolución Continua

### Fase Actual
El sistema comenzó como una solución de inventario TI y ha evolucionado hacia una intranet empresarial completa. Actualmente integra 10 módulos operacionales interconectados que centralizan la gestión empresarial.

### Desarrollo Iterativo
- **Metodología**: Desarrollo ágil con releases modulares
- **Testing**: Suite completa con Pest PHP
- **CI/CD**: Pipeline automatizado con Vite y formateador Pint
- **Escalabilidad**: Arquitectura preparada para crecimiento empresarial

### Impacto Organizacional
Transformación digital completa que unifica operaciones dispersas en una plataforma centralizada, mejorando la eficiencia operacional y la trazabilidad de procesos críticos desde inventario hasta mantenimiento de flota.