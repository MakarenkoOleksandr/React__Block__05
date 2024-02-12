const ProductList = ({ filter, products }) => {
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) =>
          product.product.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul>
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((product) => (
          <li key={product.product}>
            <strong>Name:</strong> {product.product}, <strong>Category:</strong>{" "}
            {product.category}, <strong>Price:</strong> ${product.price}
          </li>
        ))
      )}
    </ul>
  );
};

export default ProductList;
