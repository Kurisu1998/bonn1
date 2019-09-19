const router = require('express').Router();
let Produit = require('../models/produit.model');

router.route('/').get((req, res) => {
  Produit.find()
    .then(produits => res.json(produits))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const price = Number(req.body.price);
  const rating = Number(req.body.rating);
  const warranty_years = Number(req.body.warranty_years);


  const newProduit = new Produit({
    name,
    type,
    price,
    rating,
    warranty_years,
    
  });

  newProduit.save().then(() => res.json('Produit ajouté!')).catch(err => res.status(400).json('Error: ' + err));
});




router.route('/:id').get((req, res) => {
  Produit.findById(req.params.id)
    .then(produit => res.json(produit))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Produit.findByIdAndDelete(req.params.id)
    .then(() => res.json('Produit supprimé.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Produit.findById(req.params.id)
    .then(produit => {
      produit.name = req.body.name;
      produit.type = req.body.type;
      produit.price = Number(req.body.price);
      produit.rating = Number(req.body.rating);
      produit.warranty_years = Number(req.body.warranty_years);
      

      produit.save()
        .then(() => res.json('Produit updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;