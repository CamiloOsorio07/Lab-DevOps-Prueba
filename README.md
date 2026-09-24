# 🚀 Laboratorio DevOps — CI/CD con Azure DevOps

Laboratorio práctico de **DevOps e Integración y Entrega Continua (CI/CD)** utilizando **Azure DevOps**, **GitHub**, **Node.js** y **Express**.

El proyecto implementa un pipeline automatizado que permite validar el código, generar un artefacto y promoverlo a diferentes ambientes: **DEV, QA y PDN**.

---

## 👨‍💻 Autor

**Camilo Andrés Osorio Mejía**
Estudiante de Ingeniería Informática
Universidad de Caldas

---

## 📌 Descripción

Este proyecto tiene como objetivo aplicar conceptos fundamentales de DevOps mediante la construcción de un pipeline CI/CD en Azure DevOps.

El flujo implementado permite:

* Gestionar el código fuente mediante Git y GitHub.
* Ejecutar automáticamente el pipeline ante cambios en la rama `main`.
* Preparar la aplicación Node.js.
* Generar un artefacto de despliegue.
* Promover el artefacto entre los ambientes DEV, QA y PDN.
* Mantener trazabilidad entre los commits y las ejecuciones del pipeline.
* Separar los ambientes mediante stages de Azure DevOps.

> **Nota:** En este laboratorio los pasos de despliegue de DEV, QA y PDN están implementados como simulaciones mediante tareas `echo`, con el propósito de demostrar el flujo CI/CD.

---

## 🛠️ Tecnologías utilizadas

| Tecnología          | Uso                            |
| ------------------- | ------------------------------ |
| **Node.js**         | Entorno de ejecución           |
| **Express.js**      | Framework para la API          |
| **JavaScript**      | Lenguaje de programación       |
| **Git**             | Control de versiones           |
| **GitHub**          | Repositorio de código          |
| **Azure DevOps**    | CI/CD y ejecución del pipeline |
| **Azure Pipelines** | Automatización del flujo       |
| **YAML**            | Definición del pipeline        |

---

## 📂 Estructura del proyecto

```text
Lab-DevOps-Prueba/
│
├── .gitignore
├── package.json
├── package-lock.json
├── azure-pipelines.yml
├── README.md
│
└── src/
    └── ...
```

La estructura puede variar según la versión actual del proyecto.

---

## 🔄 Flujo CI/CD

El pipeline está dividido en cuatro etapas principales:

```text
                 ┌───────────────┐
                 │    GitHub     │
                 │    main       │
                 └───────┬───────┘
                         │
                         ▼
                ┌─────────────────┐
                │ CI - Build/Test │
                │                 │
                │ Node.js         │
                │ npm install     │
                │ Generar ZIP     │
                └────────┬────────┘
                         │
                         ▼
                  ┌─────────────┐
                  │  Artifact   │
                  │    drop     │
                  └──────┬──────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
          ┌───────┐  ┌───────┐  ┌───────┐
          │  DEV  │  │  QA   │  │  PDN  │
          └───────┘  └───────┘  └───────┘
```

### Etapas

#### 1. CI — Build & Test

Se ejecuta cuando se realiza un cambio sobre la rama `main`.

Durante esta etapa se:

* Configura el entorno Node.js.
* Instalan las dependencias.
* Prepara la aplicación.
* Genera un archivo comprimido `.zip`.
* Publica el artefacto `drop`.

#### 2. Deploy DEV

El pipeline descarga y utiliza el artefacto generado para ejecutar el proceso correspondiente al ambiente de desarrollo.

#### 3. Deploy QA

El mismo artefacto generado durante CI se utiliza para continuar el flujo hacia el ambiente de pruebas.

#### 4. Deploy PDN

El artefacto se descarga nuevamente para el ambiente de producción.

En esta versión académica del laboratorio, el despliegue está **simulado** mediante comandos `echo`.

---

## 📦 Artefacto

El pipeline genera un artefacto llamado:

```text
drop
└── app-XX.zip
```

El artefacto permite mantener una versión empaquetada de la aplicación y utilizarla durante las diferentes etapas del pipeline.

Esto permite aplicar el principio:

> **Build once, deploy many.**

Es decir, construir una versión del software y utilizar ese mismo artefacto durante la promoción entre ambientes.

---

## ⚙️ Pipeline

El pipeline se encuentra definido en:

```text
azure-pipelines.yml
```

Configuración principal:

```yaml
trigger:
- main
```

Esto permite ejecutar automáticamente el pipeline cuando se realizan cambios en la rama `main`.

Las etapas principales son:

```text
CI - Build & Test
        ↓
Deploy DEV
        ↓
Deploy QA
        ↓
Deploy PDN
```

---

## 🌎 Ambientes

| Ambiente | Propósito                       |
| -------- | ------------------------------- |
| **DEV**  | Desarrollo y validación inicial |
| **QA**   | Pruebas y validación de calidad |
| **PDN**  | Ambiente de producción          |

La configuración utiliza diferentes `environment` de Azure DevOps para representar estos ambientes.

---

## 🔐 Variables y secretos

Las variables de configuración deben mantenerse separadas del código fuente cuando contienen información sensible.

Ejemplos de información que **no debe almacenarse directamente en GitHub**:

```text
Contraseñas
Tokens
API Keys
Credenciales
Secretos
Connection Strings sensibles
```

Para información sensible se recomienda utilizar mecanismos de gestión de secretos proporcionados por Azure DevOps.

---

## 🧪 Evidencias del laboratorio

Durante la ejecución del laboratorio se obtuvieron evidencias del funcionamiento del pipeline:

### Pipeline exitoso

La ejecución del pipeline finalizó correctamente y quedó asociada a un commit de la rama `main`.

```text
#20260923.15
Add initial API validation test
Commit: 8a331d11
```

### Artefacto generado

Azure DevOps publicó correctamente el artefacto:

```text
drop
└── app-15.zip
```

### Stages

El pipeline completó correctamente las siguientes etapas:

```text
✓ CI - Build & Test
✓ Deploy DEV
✓ Deploy QA
✓ Deploy PDN
```

### Trazabilidad

El historial de GitHub permite relacionar los cambios realizados en el código con las ejecuciones del pipeline.

---

## 📊 Resultado

El laboratorio permitió demostrar un flujo básico de CI/CD:

```text
Código
  ↓
GitHub
  ↓
Azure DevOps
  ↓
CI
  ↓
Artefacto
  ↓
DEV
  ↓
QA
  ↓
PDN
```

De esta manera se demuestra la automatización del proceso de integración y promoción de una aplicación entre diferentes ambientes.

---

## 📚 Conceptos aplicados

Durante el desarrollo del laboratorio se aplicaron los siguientes conceptos:

* DevOps
* Integración Continua (CI)
* Entrega Continua (CD)
* Git
* GitHub
* Azure DevOps
* Azure Pipelines
* YAML Pipelines
* Artefactos
* Stages
* Environments
* Trazabilidad
* Automatización
* Promoción entre ambientes
* Gestión de variables
* Gestión de secretos

---

## 🔗 Repositorio

Repositorio utilizado para el laboratorio:

**GitHub:**
https://github.com/CamiloOsorio07/Lab-DevOps-Prueba

---

## 👤 Autor

**Camilo Andrés Osorio Mejía**

Universidad de Caldas
Ingeniería Informática

---

## 📄 Licencia

Proyecto desarrollado con fines **académicos** para el laboratorio práctico de DevOps.
