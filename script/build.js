import { execSync } from 'child_process'

process.env.buildBase = process.argv.slice(2);

execSync(`vuepress build docs`, { stdio: 'inherit' });
