import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="devops">
                    <a href="https://dmginc.gg/clubs/6-devops/" target="blank">DevOps</a>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/DmgInc-Paul/">home</Link>
                        </li>
                        <li>
                            <Link to="/DmgInc-Paul/trivia">trivia</Link>
                        </li>
                    </ul>

                </nav>

            </header>
        );
    }
}

export default Header;