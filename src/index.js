import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import rootReducer from './store'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
