const Product = require('../models/productModel');
const Brand = require('../models/brandModel');

class productController {
  async createProduct(req, res) {
    try {
        const {name, description, price, category, countInStock, rating, brand} = req.body;
        if (!name || !price || !category || !countInStock) {
            return res.status(400).json({message: "Fields must be filled in"});
        }

        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const product = await Product.findOne({name});
        if (product) {
          return res.status(400).json({message: "Product with this name has already been added!"});
        }

        const productBrand = await Brand.findOne({value: brand});
        const newProduct = new Product({name, description, price, category, image: imageUrl, countInStock, rating, brand: productBrand ? productBrand.value : brand});
        await newProduct.save();
        return res.json({message: "Successfully added product!", "product": newProduct});

    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Product Creation Error'});
    }
  }

  async updateProduct(req, res) {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Product Update Error'});
    }
  };

  async getProducts(req, res) {
    try {
        const products = await Product.find()
        return res.json(products)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Product Getting Error'})
    }
  }

  async getProduct(req, res) {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        return res.json(product)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Product Getting Error'})
    }
  }
}

module.exports = new productController()