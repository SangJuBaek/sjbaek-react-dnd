import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from 'App';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { store } from 'store'

ReactDOM.render(
  // <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Provider>
    </div>,
  // </React.StrictMode>
  document.getElementById('root')
);
