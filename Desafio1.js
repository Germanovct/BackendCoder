

class ProductManager {
    constructor() {
    this.products = [];
}

addProducts = (prodTitle, prodDescription, prodPrice, prodThumbnail, prodCode, prodStock) => {

    const productIndex = this.products.findIndex((product) => product.prodCode === prodCode )

    if (!prodTitle || !prodDescription || !prodPrice || !prodThumbnail || !prodCode ||!prodStock) {
        console.log("Error: All fields are mandatory")
        return;
    }

if (productIndex === -1) {
    const product = {
        prodID: this.products.length + 1,
        prodTitle,
        prodDescription,
        prodPrice,
        prodThumbnail,
        prodCode,
        prodStock,
    };
    this.products.push(product);
    console.log(`Products whit code ${prodCode} added successfully`)
} else {
    console.log (`Error: Product whit code ${prodCode} already exists`);
};
}
    getProducts = () => {
        console.log(this.products);
        return this.products;
    };

    getProductsById = (productID) => {
        const productIdFound = this.products.findIndex((product) => product.prodID === productID);
        if (productIdFound === -1) { 
            console.log(`Error: Product with ID ${productID} was not found`);
    } else {
        console.log(`Info on products with Products ID ${productID}:`);
        return this.products[productIdFound];
    }
    };

}

let products = new ProductManager ();

products.getProducts();

products.addProducts( "test");
products.addProducts("test product", "this is a test product", 200,"No image", "abc123");
products.addProducts("this is a test product", 200, "no image", 30);
products.addProducts(250, "no image", "abc123", 30);
products.addProducts("test product", "this is a test product", 202, "no image", "bpm1300", 150);
products.addProducts("test product2", "this is a test product", 2, "no image", "bpm100000", 5110);
products.addProducts("test product3", "this is a test product", 8900002, "no image", "bpm652000", 2500);
products.addProducts("test product", "this is a test product", 25122, "no image", "bpm655000", 10);

products.getProducts();
products.addProducts (("test product", "this is a test product", 20202, "no image", "bpm1300", 84840));

products.getProducts();

products.getProductsById(3);
products.getProductsById(5);
products.getProductsById(6);
products.getProductsById(7);
products.getProductsById(9);
products.getProductsById(4);

