import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: npm run generate <number> [name]');
  console.error('Example: npm run generate 1 two-sum');
  process.exit(1);
}

const number = args[0];
const name = args[1] || '';
const folderName = name ? `${number}-${name}` : number;

const srcDir = path.join(__dirname, '..', 'src', folderName);
const testsDir = path.join(__dirname, '..', 'tests');

if (fs.existsSync(srcDir)) {
  console.error(`Error: Problem ${folderName} already exists`);
  process.exit(1);
}

fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(testsDir, { recursive: true });

const solutionContent = `export function solution() {
  // TODO: implement
}
`;

const indexContent = `export * from './solution';
`;

const descriptionContent = name
  ? `# ${number}. ${name}

**Difficulty:**

**URL:** https://leetcode.com/problems/${name}/  

**Topics:** 

## Problem

[Descripción del problema]

## Approach

[Tu approach y complejidad]
`
  : `# ${number}

**Difficulty:**  
**URL:**  
**Topics:** 

## Problem

[Descripción del problema]

## Approach

[Tu approach y complejidad]
`;

const testContent = name
  ? `import { describe, it, expect } from 'vitest';
import { solution } from '@/${folderName}';

describe('${folderName}', () => {
  it('test case 1', () => {
    // TODO: write test
  });
});
`
  : `import { describe, it, expect } from 'vitest';
import { solution } from '@/${number}';

describe('${number}', () => {
  it('test case 1', () => {
    // TODO: write test
  });
});
`;

fs.writeFileSync(path.join(srcDir, 'solution.ts'), solutionContent);
fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent);
fs.writeFileSync(path.join(srcDir, 'description.md'), descriptionContent);

const testFileName = name ? `${folderName}.test.ts` : `${number}.test.ts`;
fs.writeFileSync(path.join(testsDir, testFileName), testContent);

console.log(`Created problem ${folderName}`);
console.log(`  - src/${folderName}/solution.ts`);
console.log(`  - src/${folderName}/index.ts`);
console.log(`  - src/${folderName}/description.md`);
console.log(`  - tests/${testFileName}`);
