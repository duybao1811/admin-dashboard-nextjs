import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        ignores: ["**/node_modules/**", "**/.next/**", "public/**"],
    },
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "plugin:@typescript-eslint/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:import/typescript",
            "prettier",
        ],
        plugins: ["@typescript-eslint", "import"],
        rules: {
            // Code quality
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "warn",
            "no-unused-vars": "off", // Turned off in favor of TS version
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",

            // Import order
            "import/order": [
                "error",
                {
                    groups: [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],

            // Style rules
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "arrow-body-style": ["error", "as-needed"],
        },
    }),
];

export default eslintConfig;
