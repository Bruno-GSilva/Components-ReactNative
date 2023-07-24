"use client"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
  const reactCode =
  `import React from 'react';

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
    <main className="w-full h-screen  p-4 bg-red-500">
     <div className='border-4 border-white'>
      <h1>olhaa esse components</h1>
     <SyntaxHighlighter language="tsx" showInlineLineNumbers showLineNumbers wrapLongLines style={atomOneLight } customStyle={{backgroundColor:'black'}}>
        {reactCode}
      </SyntaxHighlighter>
     </div>
    </main>
  )
}
