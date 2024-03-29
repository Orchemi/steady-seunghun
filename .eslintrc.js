module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    // project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    'prettier/prettier': [
      'off',
      {
        usePrettierrc: true, // .prettierrc 파일 사용
      },
    ],
    'react/jsx-curly-brace-presence': ['warn', { props: 'always', children: 'ignore', propElementValues: 'always' }], // jsx 내부의 props는 항상 {} 사용
    // 'React' must be in scope when using JSX 에러 해결 (Next.js)
    'react/react-in-jsx-scope': 'off',
    // ts파일에서 tsx구문 허용 (Next.js)
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'no-console': 'off', // ['warn', { allow: ['warn', 'error'] }]
    'no-unused-vars': 'off',
    'no-var': 'off',
  },
};
