import React, {Component} from 'react';
import Header from './Header';

class App extends Component {

    render() {
      const titleName = "App";
        return (
            <div >
                <Header click={this.sampleFunction}/>
                Hello React
            </div>
        );
    }

    sampleFunction = () => {
        console.log("Event Click");
        alert(555);
    }
}

export default App;
