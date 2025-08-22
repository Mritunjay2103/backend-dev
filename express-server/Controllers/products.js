const getAllProducts = async(req, res) => {
    res.status(200).json({msg: "products"});
};

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({msg: "productstesting"});
};

module.exports = {getAllProducts, getAllProductsTesting};