import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Produit = props => (
    <tr>
      <td>{props.produit.name}</td>
      <td>{props.produit.type}</td>
      <td>{props.produit.price}</td>
      <td>{props.produit.rating}</td>
      <td>{props.produit.warranty_years}</td>
      
      

      
      <td>
        <Link to={"/edit/"+props.produit._id} class="p-3 mb-2 bg-success text-white">Modifier</Link> | <a href="#" onClick={() => { props.deleteProduit(props.produit._id) }} class="p-3 mb-2 bg-danger text-white">Supprimer</a>
      </td>
    </tr>
  )

  export default class ProduitList extends Component {

    constructor(props) {
        super(props);
    
        this.deleteProduit = this.deleteProduit.bind(this)
    
        this.state = {produits: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/produit/')
          .then(response => {
            this.setState({ produits: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteProduit(id) {
        axios.delete('http://localhost:5000/produit/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          produits: this.state.produits.filter(el => el._id !== id)
        })
      }
    
      ProduitList() {
        return this.state.produits.map(currentproduit => {
          return <Produit produit={currentproduit} deleteProduit={this.deleteProduit} key={currentproduit._id}/>;
        })
      }

      render() {
        return (
          
    <div>
    <h3>Liste des produits</h3>
    <table className="table" >
    <thead className="thead-light">
    <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Prix</th>
    <th>Note</th>
    <th>Garantie</th>
    </tr>
    </thead>
    <tbody>
                { this.ProduitList() }
              </tbody>
    
    </table>
    
    </div>
        
    
        );
      }
    }