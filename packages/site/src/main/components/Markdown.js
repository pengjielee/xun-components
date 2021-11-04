import React, { useRef, useState } from 'react';
import Loadable from 'react-loadable';
import marked from 'marked';

let prefix = '';

//生产环境并且是github pages添加前缀
if (
  process.env.NODE_ENV === 'production' &&
  window.location.href.indexOf('github') >= 0
) {
  prefix = 'xun-components/';
}

const Markdown = (props) => {
  const frameRef = useRef(null);

  let defaultFixed = window.localStorage.getItem('fixed') || 'false';

  defaultFixed = JSON.parse(defaultFixed);

  const [fixed, setFixed] = useState(defaultFixed);
  const { code, content, component } = props;

  const result = content.replace(
    '<code src="./demo.tsx"></code>',
    `~~~javascript ${code}~~~`,
  );

  // const LoadableComponent = Loadable({
  //   loader: component.demo,
  //   loading() {
  //     return <div>Loading</div>;
  //   },
  // });

  // const preview = <div className="preview"><LoadableComponent /></div>;

  // const html = marked(result, {
  //   renderer: new marked.Renderer(),
  // });
  //

  const renderer = {
    table: (header, body) => {
      return `<div class="grid-container"><table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    },

    heading: (text, level) => {
      if (level === 1) return '';
      return `<h${level}>${text}</h${level}>`;
    },
  };
  marked.use({ renderer });

  const html = marked(result);

  const handleClick = () => {
    frameRef.current.src = `${window.location.protocol}//${window.location.host}/${prefix}demo.html#/`;
  };

  const handleFix = () => {
    const value = !fixed;
    window.localStorage.setItem('fixed', value);
    setFixed(value);
  };

  return (
    <div className="main">
      <div
        className="doc markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className={fixed ? 'simulator fixed' : 'simulator'}>
        <div className="marvel-device iphone8 silver">
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="volume"></div>
          <div className="camera"></div>
          <div className="sensor"></div>
          <div className="speaker"></div>
          <div className="screen">
            <iframe
              ref={frameRef}
              src={`${window.location.protocol}//${window.location.host}/${prefix}demo.html#${component.key}`}
            ></iframe>
          </div>
          <div className="home" onClick={handleClick}></div>
          <div className="bottom-bar"></div>
        </div>
        <div className="control" onClick={handleFix}>
          <svg
            t="1635932576150"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6378"
            width="32"
            height="32"
          >
            <path
              d="M631.637333 178.432a64 64 0 0 1 19.84 13.504l167.616 167.786667a64 64 0 0 1-19.370666 103.744l-59.392 26.304-111.424 111.552-8.832 122.709333a64 64 0 0 1-109.098667 40.64l-108.202667-108.309333-184.384 185.237333-45.354666-45.162667 184.490666-185.344-111.936-112.021333a64 64 0 0 1 40.512-109.056l126.208-9.429333 109.44-109.568 25.706667-59.306667a64 64 0 0 1 84.181333-33.28z m-25.450666 58.730667l-30.549334 70.464-134.826666 135.04-149.973334 11.157333 265.408 265.6 10.538667-146.474667 136.704-136.874666 70.336-31.146667-167.637333-167.765333z"
              p-id="6379"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
