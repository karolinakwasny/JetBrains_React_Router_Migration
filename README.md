# Kotlin Website Migration – React Router 7

This repository contains the migration of the Kotlin homepage from a legacy Flask/Jinja2 setup to React Router 7 Framework Mode with Server-Side Rendering (SSR).

## How to build

Due to version constraints within the legacy JetBrains `@rescui` ecosystem, this project requires a specific installation flag to resolve peer dependency conflicts between React 17/18/19

```bash
cd after_migration/
```

```bash
npm install --legacy-peer-deps
```

## How to run

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Migration Process

1. Used `npx create-react-router@latest` to get the latest setup.
2. Moved all legacy components, assets and styles.
3. Turned the old `base.html` into `app/root.tsx`.
4. Fixed import paths, installed missing dependencies and resolved all errors.
