import './ProductCard.css';


const ProductCard = ( props ) => { //como parámetro este componente va a recibir las url's relativas de las distintas imágenes de productos, y strings que sean los nombres y precios correspondientes a cada imagen-produto. estos parámetros son los "props" (objeto) -de propiedades-.

    let productCardsArray = [];

    for (let i = 0; i < props.prodNums.length; i++) {  //esto me parece que lo tengo que pasar a un componente que maneje estos datos y genere y retorne el array de componente;
        productCardsArray.push(<span id={"productCard"+props.prodNum[i]}>
                                    <img src={"./prod"+props.prodNum[i]+".png"} alt={"product"+props.prodNum[i]}/>
                                    <h2>*product title*</h2>
                                    <h3>$----,--</h3>
                                    <button className="button" id="buyButton">buy</button>
                                    <button className="button" id="addCartButton">add to cart</button>
                                </span>);
    };

    return productCardsArray;
};


export default ProductCard;