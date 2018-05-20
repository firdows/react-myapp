import React, {Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component {

    state = {
        like: 0,
        dislike: 0
    }

    componentWillMount() {
        console.log('App:will Mount')
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
            </div>
        );
    }

    onLike = () => {
        this.setState(prevState => {
            like : prevState.like + 1
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
