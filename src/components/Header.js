import React from 'react';

const Header = ({title}) => (
            <div>
                <nav className="nav-wrapper  indigo lighten-2">
                    <a className="brand-logo center">
                    {title}
                    </a>
                </nav>
            </div>
        );

export default Header;