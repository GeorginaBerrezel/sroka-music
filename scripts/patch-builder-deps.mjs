// scripts/patch-builder-deps.mjs
import fs from 'fs';

const pkgPath = './package.json';
if (!fs.existsSync(pkgPath)) {
  console.error('package.json introuvable. Lance ce script à la racine du projet.');
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
pkg.dependencies = pkg.dependencies || {};
const ensure = (name, ver) => { if (!pkg.dependencies[name]) pkg.dependencies[name] = ver; };

ensure('@builder.io/react', '^3.0.0');
ensure('@builder.io/sdk', '^3.0.0');
if (!pkg.dependencies.react && !(pkg.devDependencies && pkg.devDependencies.react)) ensure('react', '^18.2.0');
if (!pkg.dependencies['react-dom'] && !(pkg.devDependencies && pkg.devDependencies['react-dom'])) ensure('react-dom', '^18.2.0');

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('✅ Dépendances Builder ajoutées/assurées dans package.json');
