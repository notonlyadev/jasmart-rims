function ProductTable({products}){
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>{product.price.toFixed(2)}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

export default ProductTable;