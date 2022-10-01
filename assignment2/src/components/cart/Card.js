import "./Card.css"
import { useCommerce } from "../../context/commerce"
import data from "../../Json/data.json"

function Card() {

    const { shoppingCard, setShoppingCard, display, setDisplay } = useCommerce();

    const increaseFunction = (e) => {
        setShoppingCard(shoppingCard.map((item) => {
            const query = item.id === e.target.id;
            return {
                id: item.id,
                name: item.name,
                price: query ?
                    (Number(item.price) +
                        Number(data.find((item) => item.id === e.target.id).productPrice)) :
                    item.price,
                piece: query ? item.piece + 1 : item.piece
            };
        }));
    };

    const decreaseFunction = (e) => {
        if (shoppingCard.find((item) => item.id === e.target.id).piece === 1) {
            setShoppingCard(shoppingCard.filter(item => item.id !== e.target.id));
        } else {
            setShoppingCard(shoppingCard.map((item) => {
                const query = item.id === e.target.id;
                return {
                    id: item.id,
                    name: item.name,
                    price: query ?
                        (Number(item.price) -
                            Number(data.find((item) => item.id === e.target.id).productPrice)) :
                        item.price,
                    piece: query ? item.piece - 1 : item.piece
                };
            }));
        };
        console.log(shoppingCard.length, shoppingCard[0].piece);
        if (shoppingCard.length === 1 && shoppingCard[0].piece === 1) {
            setDisplay(false);
        };
    };

    return (
        <>
            {
                display && (
                    <div className="sale">
                        <h4>Card items</h4>
                        {
                            shoppingCard.map((item, index) => {
                                return (
                                    <div key={index} className="content">
                                        <div>{item.piece}</div>
                                        <div className="infoProduct productName">{item.name}</div>
                                        <div>
                                            <div onClick={increaseFunction} id={item.id} className="increase button">+</div>
                                            <div onClick={decreaseFunction} id={item.id} className="decrease button">-</div>
                                        </div>
                                        <div className="infoProduct productPrice">{item.price.toFixed(2)}$</div>
                                    </div>
                                )
                            })
                        }
                        <div className="footer">
                            <div className="total">
                                <div className="infoProduct">Total price</div>
                                <div className="infoProduct productPrice">
                                    {
                                        shoppingCard.reduce((sum, item) => {
                                            return sum + Number(item.price)
                                        }, 0).toFixed(2)
                                    }$
                                </div>
                            </div>
                            <div className="buy button">Buy</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Card