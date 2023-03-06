import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLive = () => {
  return (
    <>
        <LiveProvider code="<button>Hello World!</button>">
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>    
    </>
  )
}

export default ReactLive