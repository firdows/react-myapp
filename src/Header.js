import React, {Component} from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>This is Header {props.title}</h1>
        </div>
    )
}
export default Header


// class Header extends Component {

//     render() {
//         return (
//             <div >
//                 <h1>
//                     This is Header {this.props.title}
//                 </h1>
//             </div>
//         )
//     }

// }

// export default Header