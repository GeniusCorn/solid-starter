import antfu from '@antfu/eslint-config'
import solid from 'eslint-plugin-solid/configs/typescript.js'
import * as tsParser from '@typescript-eslint/parser'

export default antfu({
  unocss: true,
  ignores: [
    '.vinxi',
    '.output',
  ],
}, {
  files: ['**/*.{ts,tsx}'],
  ...solid,
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: 'tsconfig.json',
    },
  },
})
