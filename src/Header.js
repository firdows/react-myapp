import React, {Component} from 'react';

class Header extends Component {

    componentWillMount() {
        console.log('Header:will Mount')
    }

    componentDidMount() {
        console.log('Header:did Mount')
    }

    shouldComponentUpdate(nextPropt, nextState) {
        return false;
    }

    render() {
        console.log('Header:Render')
        return (
            <div >
                <h1>
                    {this.props.title}
                </h1>
            </div>
        )
    }

}

export default Header