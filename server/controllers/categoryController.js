const Category = require('../models/categoryModel');

class categoryController {

  async createCategory(req, res) {
    try {
        const {value} = req.body;
        if (!value || !req.file) {
          console.log("Fields must be filled in")
            return res.status(400).json({message: "Fields must be filled in"});
        }

        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const category = await Category.findOne({value});
        if (category) {
          return res.status(400).json({message: "Category with this name has already been added!"});
        }

        const newCategory = new Category({value, image: imageUrl});
        await newCategory.save();
        return res.json({message: "Successfully added category!", "category": newCategory});

    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Category Creation Error'});
    }
  }

  async getCategories(req, res) {
    try {
        const categories = await Category.find()
        return res.json(categories)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Category Getting Error'})
    }
  }

  async getCategory(req, res) {
    try {
        const id = req.params.id
        const category = await Category.findById(id)
        return res.json(category)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Category Getting Error'})
    }
  }
}

module.exports = new categoryController()