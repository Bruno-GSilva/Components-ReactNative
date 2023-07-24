import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CardComponentProps {}

export const CardComponent = ({}: CardComponentProps) => {
  const reactCode = `import React from 'react';

  const MyComponent = () => {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>This is a React component.</p>
      </div>
    );
  };

  export default MyComponent;`;

  return (
    <div className="border-2 p-4">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*"
        className="w-full h-48"
      />
      <div className="p-4 bg-rose-800 flex items-center justify-center text-white font-bold">
        <h1>component 01</h1>
      </div>
      <SyntaxHighlighter
        language="tsx"
        showInlineLineNumbers
        showLineNumbers
        wrapLongLines
        style={atomOneLight}
        customStyle={{ backgroundColor: "black" }}
      >
        {reactCode}
      </SyntaxHighlighter>
    </div>
  );
};
