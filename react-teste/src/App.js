import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Vues/Components/navbar.component";
import ProduitList from "./Vues/Components/liste-produit.component";
import CreateProduit from "./Vues/Components/create-produit.component";
import EditProduit from "./Vues/Components/edit-produit.component";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
        <p>
          BIENVENUE
        </p>
      
      </header>
      <Navbar />
      <br />
      <Route path="/" exact component={ProduitList} />
      <Route path="/edit/:id" component={EditProduit} />
      <Route path="/create" component={CreateProduit} />
      
    </div>
    </Router>
  );
}

export default App;
