import "./ItemCount.css";

const ItemCount = ( { maxStock, setAmount, amount } ) => {

    const handleSub = () => {
        amount > 1 && setAmount(amount-1)
    };

    const handleSum = () => {
        amount < maxStock && setAmount(amount+1)
    };

    return (
        <span className="itemCountBox">
            <button onClick={handleSub} className="btn"> - </button>
            <p>{amount}</p>
            <button onClick={handleSum}> + </button>
            {maxStock === 0 && <p className="sinStockLabel">sin stock</p>}
        </span>
    )

};

export default ItemCount;