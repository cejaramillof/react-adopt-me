import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// any other browser-only things

// hydrate is like render, but, will markup this space and just take over what's there and don't re render
hydrate(<App />, document.getElementById('root'));
// and now you can import this on node, and the render it there.
// you need check on all your app to make sure on the initial first render that there's no reference to documents. (on the DOM) like (document.getElementById)

// render blow aways whatever is there and re-render it


// need install babel-cli to run jsx on node, and express, and @babel/node