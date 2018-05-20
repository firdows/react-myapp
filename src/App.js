import React, {Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component {

    state = {
        like: 0,
        dislike: 0
    }

    componentWillMount() {
        //console.log('App:will Mount');
        this
            .txt2
            .focus();
    }

    componentDidMount() {
        console.log('App:did Mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps, 'props', this.props.like)
    }

    render() {
        //const titleName = "App";
        return (
            <div >
                <Header title="I am Header" like={this.state.like}/>
                Hello React

                <h4>Like : {this.state.like}</h4>
                <h4>DisLike : {this.state.dislike}</h4>

                <FbButton handleClick={this.onLike} caption="Like"/>
                <FbButton handleClick={this.onDisLike} caption="DisLike"/>
                <input
                    type="text"
                    ref={(input) => {
                    this.txt1 = input;
                }}/>
                <input
                    type="text"
                    ref={(input) => {
                    this.txt2 = input;
                }}/>
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
