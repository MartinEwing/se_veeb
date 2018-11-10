import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Kodu from './Kodu';
import Vork from './Vork';
import Kontakt from './Kontakt';
import Pilv from './Pilv';
import Serverid from './Serverid';
import Meist from './Meist';

class Ruuter extends Component {
    render(){ return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Kodu</Link>
                        </li>
                        <li>
                            <Link to="/meist/">Meist</Link>
                        </li>
                        <li>
                            <Link to="/serverid/">Serverid</Link>
                        </li>
                        <li>
                            <Link to="/pilv/">Pilv</Link>
                        </li>
                        <li>
                            <Link to="/vork/">Vork</Link>
                        </li>
                        <li>
                            <Link to="/kontakt/">Kontakt</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Kodu} />
                <Route path="/meist/" component={Meist}/>
                <Route path="/serverid/" component={Serverid} />
                <Route path="/pilv/" component={Pilv} />
                <Route path="/vork/" component={Vork}/>
                <Route path="/kontakt/" component={Kontakt}/>
            </div>
        </Router>
    );
    }
}

export default Ruuter;
