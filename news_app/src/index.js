import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import News from './newsData'

class App extends React.Component {
    

    render(){
      return(
          <div>
        <Navbar />
        <News />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

