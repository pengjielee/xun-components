// const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');

const options = process.argv.slice(2);
const name = options[0];

const getClassName = (componentName) =>
  componentName
    .split(/(?=[A-Z])/)
    .map((item) => item.toLowerCase())
    .join('-');

const createScript = function (desFilePath, componentName) {
  const className = getClassName(componentName);
  const content = `import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

const classPrefix = 'xun-${className}';

interface IProps {
  visible?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const ${componentName}: FC<IProps> = (props) => {
  const { className, text, children } = props;

  const finalClassName = classnames(classPrefix, className);

  return <div className={finalClassName}><span className={\`$\{classPrefix\}__title\`}>{children}</span></div>;
};

export default ${componentName};`;
  fs.writeFileSync(desFilePath, content);
  console.log(chalk.green(`src/${componentName}/index.tsx created.`));
};

const createMarkdown = function (desFilePath, componentName) {
  const content = `## ${componentName}

使用:

\`\`\`tsx
import React, { useState } from 'react';
import { ${componentName} } from 'xun-components';

const Demo = () => {
  const [visible,setVisible] = useState(false);
  return <><${componentName}>${componentName}</${componentName}></>;
};

export default Demo; 
\`\`\``;
  fs.writeFileSync(desFilePath, content);
  console.log(chalk.green(`src/${componentName}/index.md created.`));
};

if (name) {
  const componentName = name.slice(0, 1).toUpperCase() + name.slice(1);
  const desDir = path.join(__dirname, '../src/' + componentName);

  const styleContent = `@import '../assets/styles/index.scss'; \r\n .xun-${getClassName(
    componentName,
  )} {}`;

  if (!fs.existsSync(desDir)) {
    fs.mkdirpSync(desDir);
    createScript(path.join(desDir, 'index.tsx'), componentName);
    createMarkdown(path.join(desDir, 'index.md'), componentName);
    fs.writeFileSync(path.join(desDir, 'style.scss'), styleContent);
  } else {
    console.log(chalk.red(componentName + ' existed!'));
    inquirer
      .prompt([
        {
          name: 'yes',
          type: 'confirm',
          message: 'Is covered?',
        },
      ])
      .then((answers) => {
        if (answers.yes) {
          createScript(path.join(desDir, 'index.tsx'), componentName);
          createMarkdown(path.join(desDir, 'index.md'), componentName);
          fs.writeFileSync(path.join(desDir, 'style.scss'), styleContent);
        }
      });
  }
} else {
  console.log(
    chalk.red('No name provided, try `npm run newComponent [name]` instead.'),
  );
}
