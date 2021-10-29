const path = require('path');
const fs = require('fs-extra');

const init = async () => {
  const componentsPath = path.join(__dirname, '../src');
  console.log(componentsPath);

  const files = await fs.readdir(componentsPath);
  console.log(files);

  files.map(async (name) => {
    const comPath = path.join(componentsPath, name);
    const entry = path.join(comPath, 'index.md');
    console.log(entry);

    const stat = await fs.stat(comPath);
    if (!stat.isDirectory()) {
      return null;
    }

    const hasFile = await fs.pathExists(entry);
    if (!hasFile) {
      return null;
    }
    const dest1 = path.join(__dirname, `../dist/${name}/index.md`);
    const dest2 = path.join(__dirname, `../es/${name}/index.md`);
    fs.copySync(entry, dest1);
    fs.copySync(entry, dest2);
  });
};

init();
