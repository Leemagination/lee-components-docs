import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '..', 'docs');
const filesList = fs.readdirSync(docsDir, { recursive: true })

const vueFilesList = filesList.filter(file => /Demo.*\.vue$/.test(file)).map(file => {
  return {
    path: file,
    fileName: path.basename(file),
  }
})

const targetPath = path.join(__dirname, '../config/register-components.js')
let importContent = ''
let registerContent = ''
vueFilesList.forEach(file => {
  const fixPath = file.path.replace('\\', '/') // windows系统是反斜杠,mac是正斜杠
  const componentName = file.fileName.split('.')[0]
  importContent = `${importContent}import ${componentName} from "../docs/${fixPath}"\n`;
  registerContent = `${registerContent}  app.component('${componentName}',${componentName})\n`
})
const fileContent = `${importContent}
export default function registerComponents(app){
${registerContent}}
`

fs.writeFileSync(targetPath, fileContent)



