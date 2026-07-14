import fs from 'fs';
import path from 'path';

const dir = 'src/views';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/<button([^>]*)>(\s*)Upload Files(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Upload Files$3</button>');
  
  fs.writeFileSync(file, content);
}
