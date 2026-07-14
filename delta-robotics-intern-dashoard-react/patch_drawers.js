const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/views/*.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Cancel buttons in Drawer
  content = content.replace(/<button([^>]*)>(\s*)Cancel(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Cancel$3</button>');
  
  // Save/Approve/Delete buttons etc
  content = content.replace(/<button([^>]*)>(\s*)Save Course(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Course$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Student(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Student$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Enrollment(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Enrollment$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Item(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Item$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Experience(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Experience$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Workshop(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Workshop$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Delete Student(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Delete Student$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Edit Details(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Edit Details$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Reject(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Reject$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Approve Enrollment(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Approve Enrollment$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Delete Item(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Delete Item$3</button>');
  content = content.replace(/<button([^>]*)>(\s*)Save Changes(\s*)<\/button>/g, '<button$1 onClick={() => setIsDrawerOpen(false)}>$2Save Changes$3</button>');

  fs.writeFileSync(file, content);
}
