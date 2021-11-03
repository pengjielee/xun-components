import React, { useRef } from 'react';
import Loadable from 'react-loadable';
import marked from 'marked';

let prefix = '/';

if(process.env.NODE_ENV === 'production') {
  prefix = 'xun-components/'
}

const Markdown = (props) => {
  const frameRef = useRef(null);
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

  return (
    <div className="main">
      <div
        className="doc markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="simulator">
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
      </div>
    </div>
  );
};

export default Markdown;
