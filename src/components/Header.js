import React, {Component} from 'react';
import starlinkLogo from '../assets/images/starlink_logo.svg'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={starlinkLogo} className="App-logo" alt="logo" />
                    <p className="title">
                       Starlink Tracker
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;