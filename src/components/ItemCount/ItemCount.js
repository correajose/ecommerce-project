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
            <button onClick={handleSub}> - </button>
            <p>{amount}</p>
            <button onClick={handleSum}> + </button>
        </span>
    )

};

export default ItemCount;