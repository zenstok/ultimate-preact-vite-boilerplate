module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", ["sentence-case"]],
    "scope-case": [2, "always", ["pascal-case", "camel-case", "kebab-case"]],
    "type-case": [2, "always", "pascal-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "Feature",
        "Fix",
        "Refactor",
        "Performance",
        "Revert",
        "Docs",
        "CodeStyle",
        "CI",
        "Chore",
      ],
    ],
  },
};
