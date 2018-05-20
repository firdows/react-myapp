import React, {Component} from 'react';

class Header extends Component {

    componentWillMount() {
        console.log('Header:will Mount')
    }

    componentDidMount() {
        console.log('Header:did Mount')
    }

    render() {
        console.log('Header:Render')
        return (
            <div >
                <h1>
                    {this.props.children}
                </h1>
            </div>
        )
    }

}

export default Header