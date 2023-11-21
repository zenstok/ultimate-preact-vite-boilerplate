module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true,
            'optionalDependencies': false,
            'peerDependencies': false
        }],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-param-reassign': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-bind': 'off',
        'max-len': [
            'warn',
            {
                code: 140,
                comments: 140,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always']
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};