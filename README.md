# Comprensión y aplicación de React Hooks, useReducer y Context API

En un dashboard de una aplicación financiera, se necesita implementar una funcionalidad que maneje el estado global de la aplicación utilizando React Hooks, específicamente useReducer y Context API. El dashboard muestra información sobre transacciones, saldos y notificaciones. Es necesario que los componentes del dashboard compartan y actualicen este estado de manera eficiente y sin redundancias.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l1 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración del problema y necesidades del dominio

**Objetivo:** Identificar las necesidades del dominio y las restricciones para implementar el estado global en el dashboard.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Analiza las funcionalidades del dashboard y determina qué información debe ser compartida entre los componentes.
- Identifica las restricciones y los requisitos del dominio que deben ser considerados al implementar el estado global.

**Entregable:** Documento que describe las necesidades del dominio y las restricciones identificadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las diferentes fuentes de información que deben ser gestionadas en el dashboard.
- Piensa en cómo los componentes del dashboard interactúan y comparten información.

</details>

### Fase 2: Diseño del estado global utilizando React Hooks, useReducer y Context API

**Objetivo:** Diseñar la estructura del estado global y cómo los componentes del dashboard interactuarán con él.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Diseña la estructura del estado global que será compartido entre los componentes del dashboard.
- Determina cómo los componentes del dashboard interactuarán con el estado global utilizando React Hooks, useReducer y Context API.

**Entregable:** Documento que describe la estructura del estado global y cómo los componentes del dashboard interactuarán con él.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo dividir el estado global en diferentes partes para que sea más manejable.
- Piensa en cómo los componentes del dashboard pueden suscribirse y actualizar el estado global de manera eficiente.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son React Hooks, useReducer y Context API y para qué se utilizan en este contexto?
- **paraQueSirve**: ¿Cómo ayudan React Hooks, useReducer y Context API a manejar el estado global en el dashboard?
- **comoSeUsa**: ¿Cómo se implementan React Hooks, useReducer y Context API en el dashboard para compartir y actualizar el estado global?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar React Hooks, useReducer y Context API en el dashboard?
- **queDecisionesImplica**: ¿Qué decisiones se deben tomar al implementar React Hooks, useReducer y Context API en el dashboard para manejar el estado global?

## Criterios de Evaluacion

- Identificación correcta de las necesidades del dominio y las restricciones.
- Diseño adecuado de la estructura del estado global y la interacción de los componentes con él.
- Consideración de los errores comunes al implementar React Hooks, useReducer y Context API.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
