import React from 'react';
import Loadable from 'react-loadable';
import marked from 'marked';

const Markdown = (props) => {
  const { code, content, component } = props;

  const result = content.replace(
    '<code src="./demo.tsx"></code>',
    `~~~${code}~~~`,
  );

  // const LoadableComponent = Loadable({
  //   loader: component.demo,
  //   loading() {
  //     return <div>Loading</div>;
  //   },
  // });

  // const preview = <div className="preview"><LoadableComponent /></div>;

  const html = marked(result, {
    renderer: new marked.Renderer(),
  });

  return (
    <>
      <div className="page-doc" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="page-simulator">
        <div className="marvel-device iphone8 silver">
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="volume"></div>
          <div className="camera"></div>
          <div className="sensor"></div>
          <div className="speaker"></div>
          <div className="screen">
            <iframe
              src={`${window.location.protocol}//${window.location.host}/demo.html#${component.key}`}
            ></iframe>
          </div>
          <div className="home"></div>
          <div className="bottom-bar"></div>
        </div>
      </div>
    </>
  );
};

export default Markdown;
