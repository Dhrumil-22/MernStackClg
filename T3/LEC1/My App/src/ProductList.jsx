//1.create a prodtuctcard component to show product details like title,price,ratting,and image.
//2.used a productlist component to store product data and display multiple productcard component using map function.


import ProductCard from './ProductCard';
import img1 from "C:\\Users\\91940\\Downloads\\@ COLLAGE\\LJIET\\SEM4\\FSD2\\T3\\LEC1\\My App\\src\\assets\\hero.png"
import img2 from "C:\\Users\\91940\\Downloads\\@ COLLAGE\\LJIET\\SEM4\\FSD2\\T3\\LEC1\\My App\\src\\assets\\react.svg"

function ProductList(){
    const products=[
        {
            title:'Laptop',
            price:'45000',
            ratting:'4.8',
            image:'img1'
        },
         {
            title:'PC',
            price:'50000',
            ratting:'4.1',
            image:'img2'
        }
    ]

    return(
        <>
        <ProductCard data={products}></ProductCard>
        </>
    )
}
export default ProductList;
//write event.jsx scrip to display alert box