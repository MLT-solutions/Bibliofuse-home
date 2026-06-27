import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

const tsFiles = ['**/*.{ts,tsx}']

const scoped = (config) => ({
  ...config,
  files: tsFiles,
})

export default [
  { ignores: ['dist', '.vite', '.claude'] },
  {
    files: tsFiles,
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
  },
  scoped(js.configs.recommended),
  ...tseslint.configs.recommended.map(scoped),
  {
    files: tsFiles,
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  scoped(reactRefresh.configs.vite),
]
