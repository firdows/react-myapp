import React, {Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component {

    state = {
        like: 0,
        dislike: 0
    }
    render() {
        const titleName = "App";
        return (
            <div >
                <Header>
                    I am Header
                </Header>

                Hello React

                <h4>Like : {this.state.like}</h4>
                <h4>DisLike : {this.state.dislike}</h4>

                <FbButton handleClick={this.onLike} caption="Like"/>
                <FbButton handleClick={this.onDisLike} caption="DisLike"/>
            </div>
        );
    }

    onLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    onDisLike = () => {
        this.setState({
            dislike: this.state.dislike + 1
        })
    }

    sampleFunction = () => {
        console.log("Event Click");
        alert(555);
    }
}

export default App;
