# Cómo contribuir

¡Gracias por tu interés en **ZeroGuns**! Toda ayuda suma: reportar un bug, proponer una idea, mejorar la documentación o mandar código.

## 🐛 Reportar un bug

1. Revisá los [issues abiertos](https://github.com/NicoTomasin/ZeroGuns/issues) para no duplicar.
2. Abrí un [issue nuevo](https://github.com/NicoTomasin/ZeroGuns/issues/new) con:
   - Qué esperabas que pasara y qué pasó.
   - Pasos para reproducirlo.
   - Entorno (sistema operativo, navegador, versión de runtime) y capturas o logs si aplica.

## 💡 Proponer una mejora

Abrí un issue contando el problema que resuelve tu idea antes de ponerte a programar. Así lo charlamos y evitamos trabajo que después no se pueda mergear.

## 🛠️ Entorno de desarrollo

```bash
git clone https://github.com/NicoTomasin/ZeroGuns.git
cd ZeroGuns
npm install
npm run dev        # http://localhost:3000
```

## 🔀 Flujo para Pull Requests

1. Hacé un fork y creá una rama descriptiva desde `main`:
   `git checkout -b feat/mi-mejora` o `fix/descripcion-del-bug`
2. Hacé commits chicos y claros. Recomendamos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):
   `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `chore: ...`
3. Antes de abrir el PR, verificá que todo funcione:
   - `npm run lint` no reporta errores.
   - `npm run build` termina sin errores.
4. Abrí el PR contra `main` explicando **qué** cambia y **por qué**. Si resuelve un issue, mencionalo (`Closes #12`).
5. Respondé los comentarios de la revisión; una vez aprobado, se mergea.

## 📐 Estilo

- Respetá el estilo y la estructura que ya tiene el código.
- Nombres claros por sobre comentarios largos.
- No subas secretos, claves de API ni archivos generados (`node_modules`, `dist`, `bin`, `obj`, etc.).

## 🤝 Código de conducta

Tratá a todas las personas con respeto. No se toleran agresiones, discriminación ni acoso de ningún tipo.

## 📄 Licencia

Este proyecto **no es open source** (ver [LICENSE](LICENSE)). Los Pull Requests solo se aceptan con autorización previa del autor: abrí primero un issue o escribí a hola@nicotomasin.com.ar. Al contribuir, cedés al titular los derechos sobre tu aporte para que pueda usarlo dentro del proyecto.
