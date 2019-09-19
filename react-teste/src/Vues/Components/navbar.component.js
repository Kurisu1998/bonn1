import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';





export default class Navbar extends Component {



  render() {
    return (
      <nav>
        <Button variant="contained" color="primary">
          <li>
          <Link to="/create" ><p>CREER UN NOUVEAU PRODUIT</p></Link>
          </li>
    </Button>
    
      </nav>

    );
  }
}