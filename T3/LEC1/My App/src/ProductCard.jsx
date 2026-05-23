function ProductCard(props){
    return(
        <>
        {
            props.data.map((product,index)=>(
                <div key={index}>
                    <img src={product.image} alt="logo" />
                    <h2>{product.title}</h2>
                    <h2>{product.price}</h2>
                    <h2>{product.ratting}</h2>
                </div>
            ))
        }
        </>
    )
}
export default ProductCard;