# Leetcode Solvers

Repository for storing Leetcode problem solutions written in TypeScript.

## Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate a new problem
npm run generate 1 two-sum
```

## Structure

```
src/
└── {number}-{slug}/
    ├── solution.ts    # Tu solución
    ├── index.ts      # Export
    └── description.md # Documentación

tests/
└── {number}-{slug}.test.ts # Tests
```

## Usage

Importar soluciones con el alias `@`:

```typescript
import { twoSum } from '@/001-two-sum';
```