import React, {Component} from 'react';

class Header extends Component {

    render() {
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