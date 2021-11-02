const path = require('path');
const fs = require('fs-extra');

const init = async () => {
  const componentsPath = path.join(__dirname, '../src');
  // console.log(componentsPath);

  const files = await fs.readdir(componentsPath);
  // console.log(files);

  files.map(async (name) => {
    const comPath = path.join(componentsPath, name);
    const entry1 = path.join(comPath, 'index.md');
    const entry2 = path.join(comPath, 'demo.tsx');

    const stat = await fs.stat(comPath);
    if (!stat.isDirectory()) {
      return null;
    }

    const hasFile = await fs.pathExists(entry1);
    if (!hasFile) {
      return null;
    }
    fs.copySync(entry1, path.join(__dirname, `../dist/${name}/index.md`));
    fs.copySync(entry1, path.join(__dirname, `../es/${name}/index.md`));

    fs.copySync(entry2, path.join(__dirname, `../dist/${name}/demo.tsx`));
    fs.copySync(entry2, path.join(__dirname, `../es/${name}/demo.tsx`));
  });
};

init();
