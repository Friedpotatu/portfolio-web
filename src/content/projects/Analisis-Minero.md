---
title: "Sistema de Análisis y Optimización Minera"
description: "Proyecto académico de análisis económico y visualización 3D/2D de procesos mineros usando el yacimiento ficticio Alto los Andes para comprender el ámbito minero."
image: "/project4-vid-1.mkv"
technologies: ["Python", "Dash", "PyVista", "NetworkX", "Pandas", "Matplotlib"]
github: "https://github.com/T-Procesos-Mineros/mining_process"
gallery: true
galleryImages:
  - src: "/project4-vid-1.mkv"
    alt: "Sistema de análisis 2D de datos mineros"
    caption: "Vista general del sistema centrado en análisis bidimensional de datos y visualizaciones estadísticas"
  - src: "/project4-vid-2.mkv"
    alt: "Visualización 3D del yacimiento"
    caption: "Representación tridimensional interactiva del yacimiento con bloques coloreados por valor económico"
  - src: "/project4-1.png"
    alt: "Panel de selección de escenarios"
    caption: "Dashboard con opciones de selección de escenarios y configuración del sistema"
  - src: "/project4-2.png"
    alt: "Yacimiento 3D renderizado"
    caption: "Visualización tridimensional estática del yacimiento minero con bloques georeferenciados"
featured: true
order: 4
---

Proyecto académico desarrollado para comprender los procesos mineros y su análisis mediante herramientas de ciencia de datos. Utiliza el yacimiento ficticio "Alto los Andes" como caso de estudio para explorar técnicas de modelado económico y visualización de datos mineros.

## Funcionalidades principales

- **Gestión de escenarios**: Análisis comparativo de múltiples escenarios de explotación (Escenario 00-09)
- **Calculadora económica**: Motor de cálculo de rentabilidad por bloques con parámetros configurables
- **Visualización 3D**: Representaciones tridimensionales interactivas con PyVista
- **Límite económico (UPL)**: Implementación experimental del Ultimate Pit Limit usando teoría de grafos
- **Análisis estadístico**: Histogramas, curvas tonelaje-ley y análisis de distribución

## Tecnología e innovación

El sistema integra múltiples tecnologías especializadas para análisis minero:

- **Interfaz web**: Dash para dashboards interactivos y análisis en tiempo real
- **Visualización 3D**: PyVista para renderizado volumétrico de yacimientos
- **Optimización**: NetworkX con algoritmos de flujo máximo para UPL
- **Análisis de datos**: Pandas y NumPy para procesamiento de grandes volúmenes
- **Visualización 2D**: Matplotlib para gráficos estadísticos y cortes transversales

## Algoritmos especializados

### Cálculo de Ultimate Pit Limit (Experimental)
Implementación de algoritmos de corte mínimo en grafos dirigidos para modelar relaciones de precedencia minera. Aunque el cálculo no alcanzó la precisión completa, sirvió como ejercicio de aprendizaje en optimización de yacimientos.

### Motor económico
Sistema de evaluación que considera precios de metales ($18M por tonelada), recuperación metalúrgica (85%), costos de minería ($2.5/ton) y procesamiento ($5/ton), optimizando automáticamente entre extracción y descarte.

## Resultados y métricas

- **Volumen de datos**: Procesamiento de +15,000 bloques por escenario
- **Precisión espacial**: Georeferenciación exacta con coordenadas XYZ
- **Optimización**: Maximización del valor económico total del yacimiento
- **Planificación temporal**: Secuenciamiento minero por períodos operacionales

## Objetivo académico

Este proyecto permitió comprender los fundamentos de la ingeniería de minas y explorar cómo la ciencia de datos puede contribuir al análisis de procesos mineros. Combinó teoría académica con implementación práctica para entender mejor la complejidad del sector minero.