import "./ItemCount.css";

const ItemCount = ( { maxQtty, setAmount, amount } ) => {

    /* useEffect( () => {
        setAmount(maxQtty > 0 ? 1 : 0);
    }, [amount] ); */

    const handleSub = () => {
        amount > 1 && setAmount(amount-1)
    };

    const handleSum = () => {
        amount < maxQtty && setAmount(amount+1)
    };

    return (
        <span className="itemCountBox">
            <button onClick={handleSub} className="btn"> - </button>
            <p>{amount}</p>
            <button onClick={handleSum}> + </button>
            {maxQtty === 0 && <p className="sinStockLabel">sin stock</p>} {//tampoco funciona este condicional para mostrar una etiqueta "sin stock" cuando no lo haya
            }
        </span>
    )

};

export default ItemCount;