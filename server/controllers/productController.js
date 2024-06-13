const Product = require('../models/productModel');
const Brand = require('../models/brandModel');
const Category = require('../models/categoryModel');

class productController {
  async createProduct(req, res) {
    try {
        const {name, description, price, category, countInStock, rating, brand} = req.body;
        if (!name || !price || !category || !countInStock || !brand) {
            return res.status(400).json({message: "Все поля обязательны для заполнения!"});
        }

        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const product = await Product.findOne({name});
        if (product) {
          return res.status(400).json({message: "Товар с таким названием уже существует!"});
        }

        const productBrand = await Brand.findOne({value: brand});
        const productCategory = await Category.findOne({value: category});

        const newProduct = new Product({name, description, price, category: productCategory ? productCategory.value : category, image: imageUrl, countInStock, rating, brand: productBrand ? productBrand.value : brand});
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

  async getProductByBrand(req, res) {
    try {
        let brandId = req.params.id
        const brand = await Brand.findById(brandId) 
        const products = await Product.find({brand: brand.value})
        return res.json(products)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Product Getting By Brand Error'})
    }
  }

  async getProductByCategory(req, res) {
    try {
        let categoryId = req.params.id
        const category = await Category.findById(categoryId) 
        const products = await Product.find({category: category.value})
        return res.json(products)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Product Getting By Category Error'})
    }
  }

  async search(req, res) {
    const { query } = req.body;
    try {
      const products = await Product.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ],
      });
      res.json({ products });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}


module.exports = new productController()