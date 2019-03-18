import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../sass/Header.css';

class Header extends Component {
    render(){
        return(
            <div>

            <nav className="header">
              <ul>
                  <li><img src="http://organicandnatural.com.ua/design/organic-responsive/images/logo-new.png" alt="" /></li>
                  <li><Link to = "/">Main page</Link></li>
                  <li><Link to = "/about">About</Link></li>
                  <li><Link to = "/basket">Корзина</Link></li>
              </ul>
            </nav>
            </div>
        )
    }
}

export default Header;