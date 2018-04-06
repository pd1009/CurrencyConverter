import React from 'react';
import ReactDOM from 'react-dom';
import Conversion from './Components/Conversion.jsx';
import store from './Store/configureStore'
import { Provider } from 'react-redux';

class App extends React.Component {

    render() {
      return (
         <div>
             <Conversion />
         </div>
      );
   }
}

ReactDOM.render(<Provider store={store}>
                    <App />
                 </Provider>, document.getElementById('app'));