let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

let nextId = 3;

// 1. GET ALL PRODUCTS

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// 2. GET SINGLE PRODUCT BY ID

const getProductById = (req, res) => {

  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
};

// 3. CREATE A NEW PRODUCT

const createProduct = (req, res) => {

  const { name, price } = req.body;


  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  // Build the new product object
  const newProduct = {
    id: nextId,       // assign the current nextId value
    name: name,       // name from request body
    price: price,     // price from request body
  };

  // Add the new product to the end of the products array
  // .push() adds an item to the end of an array
  products.push(newProduct);

  // Increment nextId so the NEXT product gets a unique id
  nextId = nextId + 1;

  res.status(201).json(newProduct);
};

// 4. UPDATE A PRODUCT
const updateProduct = (req, res) => {
  // Get the id from the URL parameter, convert to number
  const id = parseInt(req.params.id);

  // Find the INDEX (position) of the product in the array

  const index = products.findIndex((p) => p.id === id);

  // If index is -1, the product was not found
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Get the updated fields from the request body
  const { name, price } = req.body;

  // Update the product at the found index
  products[index] = {
    ...products[index],              // copy all old fields (id, name, price)
    name: name ?? products[index].name,       // update name if provided
    price: price ?? products[index].price,    // update price if provided
  };

  // Send back the updated product
  res.status(200).json(products[index]);
};

const deleteProduct = (req, res) => {
  // Get the id from the URL, convert to number
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);

  res.status(200).json({ message: 'Product deleted successfully' });
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};