const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const produitSchema = new Schema({
  
  	name: {type: String, required : true },
    type: {type: String, required : true },
    price: {type: Number, required : true },
    rating: {type: Number, required : true },
    warranty_years: {type: Number, required : true },
    

    
    
  
}, {
  timestamps: true,
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;