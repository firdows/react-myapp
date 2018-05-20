import React, {Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component {

    state = {
        like: 0,
        dislike: 0,
        data: null,
        name: ''
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
                <Header title="I am Header"/>
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="enter Name"
                            defaultValue="Peter"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    </label>
                </form>
                <button onClick={this.handleClick}>Change Text</button>

            </div>
        );
    }

    handleClick = e => {
        this.setState({name: "I am React"})
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({name: e.target.value})
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
