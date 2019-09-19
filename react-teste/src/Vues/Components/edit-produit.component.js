import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduit extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeType = this.onChangeType.bind(this);
      this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeWarranty_years = this.onChangeWarranty_years.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
  
      this.state = {
        name: '',
        type: '',
        price:0,
      ratinng:0,
      warranty_years:0,
        
      }
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/produit/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            name: response.data.name,
            type: response.data.type,
            
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
  
      }
  
    onChangeName(e) {
      this.setState({
        name: e.target.value
      })
    }
  
    onChangeType(e) {
      this.setState({
        type: e.target.value
      })
    }

    onChangePrice(e) {
      this.setState({
        price: e.target.value
      })
    }
    onChangeRating(e) {
      this.setState({
        rating: e.target.value
      })
    }
    onChangeWarranty_years(e) {
      this.setState({
        warranty_years: e.target.value
      })
    }
  
    
  
    onSubmit(e) {
      e.preventDefault();
  
      const exercise = {
        name: this.state.name,
        type: this.state.type,
        price: this.state.price,
        rating: this.state.rating,
        warranty_years: this.state.warranty_years,
      
      }
  
      console.log(exercise);
  
      axios.post('http://localhost:5000/produit/update/' + this.props.match.params.id, exercise)
        .then(res => console.log(res.data));
  
      window.location = '/';
    }
  
    render() {
      return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group"> 
            <label>Nom: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
     
        
            <label>Type: </label>
            <input 
                type="text" 
                required className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
                />
          

          <label>Prix: </label>
            <input  type="text" required className="form-control" value={this.state.price} onChange={this.onChangePrice}/>

             <label>Note: </label>
            <input  type="text" required className="form-control" value={this.state.rating} onChange={this.onChangeRating}/>

             <label>Garantie: </label>
            <input  type="text" required className="form-control" value={this.state.warranty_years} onChange={this.onChangeWarranty_years}/>
            </div>
          <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary"  />
          </div>
        </form>
      </div>
      )
    }

}