import React, {Component} from 'react';
import Header from './Header';

class App extends Component {
    render() {
        const titleName = "App"
        return (
            <div >
                <Header title={titleName}/>
                Hello React
            </div>
        );
    }
}

export default App;
