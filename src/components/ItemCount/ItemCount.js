import "./ItemCount.css";

const ItemCount = ( { maxStock, setAmount, amount} ) => {

    const handleSub = () => {
        amount > 1 && setAmount(amount-1)
    };

    const handleSum = () => {
        amount < maxStock && setAmount(amount+1)
    };

    return (
        <span className={"itemCountBox container-row hierarchy-3"}>
            <button className="btn btn-sqz" onClick={handleSub}> - </button>
            <p className="count">{amount}</p>
            <button className="btn btn-sqz" onClick={handleSum}> + </button>
        </span>
    )

};

export default ItemCount;