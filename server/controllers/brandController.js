const Brand = require('../models/brandModel');

class brandController {

  async createBrand(req, res) {
    try {
        const {value} = req.body;
        if (!value || !req.file) {
          console.log("Fields must be filled in")
            return res.status(400).json({message: "Fields must be filled in"});
        }

        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const brand = await Brand.findOne({value});
        if (brand) {
          return res.status(400).json({message: "Brand with this name has already been added!"});
        }

        const newBrand = new Brand({value, image: imageUrl});
        await newBrand.save();
        return res.json({message: "Successfully added brand!", "brand": newBrand});

    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Brand Creation Error'});
    }
  }

  async getBrands(req, res) {
    try {
        const brands = await Brand.find()
        return res.json(brands)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Brand Getting Error'})
    }
  }

  async getBrand(req, res) {
    try {
        const id = req.params.id
        const brand = await Brand.findById(id)
        return res.json(brand)
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Brand Getting Error'})
    }
  }
}

module.exports = new brandController()