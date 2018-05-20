import React, {Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component {

    state = {
        like: 0,
        dislike: 0,
        data: null
    }

    componentWillMount() {
        console.log('App:will Mount');
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(result => result.json())
            .then(result => this.setState(this.setState({data: result})))
            .catch(err => {
                console.error(err)
            })

    }

    componentDidMount() {
        console.log('App:did Mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps, 'props', this.props.like)
    }

    render() {
        const {data} = this.state
        return (
            <div >
                <Header title="I am Header" /> 
                {data && data.map(d => {
                    return (
                        <div key={d.id}>
                            <div>
                                <b>{d.title}</b>
                            </div>
                            <div>{d.body}</div>
                            <hr/>
                        </div>
                    )
                })}

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
