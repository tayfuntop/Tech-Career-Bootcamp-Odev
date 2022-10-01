import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from "../../Json/data.json";
import { useCommerce } from "../../context/commerce";

function Product() {

    const { shoppingCard, setShoppingCard, setDisplay } = useCommerce();

    const shoppingFunction = (e) => {

        const findItems = shoppingCard.some((item) => e.target.id === item.id);

        if (findItems) {
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
                }
            }))
        } else {
            setShoppingCard([...shoppingCard, {
                id: data.filter((item) => item.id === e.target.id)[0].id,
                name: data.filter((item) => item.id === e.target.id)[0].productName,
                price: Number(data.filter((item) => item.id === e.target.id)[0].productPrice),
                piece: 1,
            }])
        }
        setDisplay(true);
    };

    return (
        <div className="product">
            {
                data.map((item, index) => {
                    return (
                        <Card key={index} style={{ width: '10rem', margin: "2px", height: "20rem" }}>
                            <Card.Img variant="top" style={{ padding: "20px" }} src={item.imgLink} />
                            <Card.Body>
                                <Card.Title style={{ height: "2.5rem", fontSize: "18px" }}>{item.productName}</Card.Title>
                                <Card.Text>
                                    {item.productPrice}$
                                </Card.Text>
                                <Button id={item.id} onClick={shoppingFunction} variant="success">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Product