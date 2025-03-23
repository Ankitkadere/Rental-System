import React from "react";
import '../Productlist/Productlist.css';
 

const products = [
  {
    
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?fm=jpg&q=60&w=3000",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4,
    brand: "NestFood",
  },
  {
  
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  },
  {
 
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Ricee",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  }, {
 
 
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHyw180jWMmjk4JXSNrMuwZUUvaJBkED0bg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "24.95",
    oldPrice: "29.99",
    rating: 4.5,
    brand: "HealthyBites",
  },
  {
     
    image:
      "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-79825.jpg?semt=ais_hybrid",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Dessert",
    price: "19.99",
    oldPrice: "22.50",
    rating: 4.3,
    brand: "SweetDelights",
  },
  {
   
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bjdjwJkFBsoJS3AdaB6b0lL8TR_Zz8GlHg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "18.85",
    oldPrice: "22.00",
    rating: 4.2,
    brand: "NestFood",
  },
  {
  
    image: "https://img.lovepik.com/photo/50007/3966.jpg_wh860.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4.0,
    brand: "NestFood",
  },
  {
    image:
      "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-79825.jpg?semt=ais_hybrid",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Dessert",
    price: "19.99",
    oldPrice: "22.50",
    rating: 4.3,
    brand: "SweetDelights",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bjdjwJkFBsoJS3AdaB6b0lL8TR_Zz8GlHg&s",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "18.85",
    oldPrice: "22.00",
    rating: 4.2,
    brand: "NestFood",
  },
  {
    image: "https://img.lovepik.com/photo/50007/3966.jpg_wh860.jpg",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    price: "28.85",
    oldPrice: "32.8",
    rating: 4.0,
    brand: "NestFood",
  },
];

const PopularProducts = () => {
  return (
    <>
      <div className="gridbox">
        <a href="ProductDetailsPage" className="grid">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <span className="badge badge-hot">Hot</span>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="text-sm text-gray-500">{product.category}</div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
                By {product.brand}
              </div>
              <div className="flex items-center justify-between adddown">
                <div className="flex">
                  <div className="text-lg font-bold text-green-600">
                    ${product.price}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
                  </div>
                </div>
                <button className="button">Add</button>
              </div>
            </div>
          ))}
   
        </a>
      </div>
    </>
  );
};

export default PopularProducts;
