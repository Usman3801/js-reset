#!/bin/bash
# Run this FROM INSIDE a freshly unzipped Angela React starter folder.
# e.g.: cd react/280-some-lesson && ../setup-starter.sh

set -e

# bash ../setup-starter.sh

if [ ! -f package.json ]; then
  echo "ERROR: no package.json here. Are you in the right folder?"
  exit 1
fi

echo "== Installing react@18 and react-dom@18 (pinned, not @latest) =="
npm install react@18 react-dom@18

echo ""
echo "== Checking .gitignore =="
if [ ! -f .gitignore ]; then
  echo "No .gitignore found — creating one."
  cat > .gitignore << 'EOF'
node_modules
dist
dist-ssr
*.local
EOF
else
  if grep -q "node_modules" .gitignore; then
    echo ".gitignore exists and already ignores node_modules — fine."
  else
    echo "WARNING: .gitignore exists but does NOT list node_modules."
    echo "Add it manually before your first git add ."
  fi
fi

echo ""
echo "== Checking eslint-plugin-react =="
if [ ! -d node_modules/eslint-plugin-react ]; then
  echo "eslint-plugin-react not installed — installing now."
  npm install eslint-plugin-react --save-dev
else
  echo "eslint-plugin-react already installed."
fi

echo ""
echo "== Checking eslint.config.js =="
if [ ! -f eslint.config.js ]; then
  echo "No eslint.config.js found — creating one with proper JSX support."
  cat > eslint.config.js << 'EOF'
import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
EOF
else
  echo "eslint.config.js already exists — leaving it alone."
fi

echo ""
echo "== Environment setup done. =="
echo "MANUAL STEP STILL REQUIRED — fix module syntax in the source file(s):"
echo ""
echo "  OLD (CommonJS, React 17):"
echo '    var React = require("react");'
echo '    var ReactDOM = require("react-dom");'
echo '    ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));'
echo ""
echo "  NEW (ES modules, React 18 + Vite automatic JSX transform):"
echo '    import ReactDOM from "react-dom/client";'
echo '    const root = ReactDOM.createRoot(document.getElementById("root"));'
echo '    root.render(<h1>Hello</h1>);'
echo ""
echo "  DO NOT add: import React from \"react\";"
echo "  Vite'\''s automatic JSX transform makes it unnecessary. The linter"
echo "  will flag it as unused. Delete it from every starter file."
echo ""
echo "Check every .jsx file the starter ships with, not just index.jsx —"
echo "some lessons include more than one file using the old syntax."