import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
            <div>
                <nav  className="nav-wrapper  indigo lighten-2">
                    <a href="#!" className="brand-logo center">
                    {title}
                    </a>
                </nav>
            </div>
        );

Header.propTypes = {
    title: PropTypes.string.isRequired
        }
export default Header;