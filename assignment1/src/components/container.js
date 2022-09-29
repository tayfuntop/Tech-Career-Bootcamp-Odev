import { useInfo } from "../context/Info";

function Container() {

    const { number, setNumber } = useInfo();

    const numberFunction = (e) => {
        setNumber(number + e.target.innerText)
    };

    const equalFunction = () => {
        for (let i = 0; i <= 5; i++) {
            if (number[i] === "/" || number[i] === "*" || number[i] === "+" || number[i] === "-") {
                switch (number[i]) {
                    case "+":
                        setNumber((
                            parseInt(number.slice(0, i)) +
                            parseInt(number.slice((i + 1), number.length)))
                            .toString()
                        )
                        break;
                    case "-":
                        setNumber((
                            parseInt(number.slice(0, i)) -
                            parseInt(number.slice((i + 1), number.length)))
                            .toString()
                        )
                        break;
                    case "*":
                        setNumber((
                            parseInt(number.slice(0, i)) *
                            parseInt(number.slice((i + 1), number.length)))
                            .toString()
                        )
                        break;
                    case "/":
                        setNumber((
                            parseInt(number.slice(0, i)) /
                            parseInt(number.slice((i + 1), number.length)))
                            .toString()
                        )
                        break;
                }
            }
        }

    };

    const operationFunction = (e) => {
        !number.split("").some((item) => {
            return (
                item == "/" || item == "*" || item == "+" || item == "-"
            )
        }) && setNumber(number + e.target.innerText)
        console.log(number.split(""));
    };

    return (
        <div className="container">
            <div id="number">
                <div onClick={numberFunction} className="button ">1</div>
                <div onClick={numberFunction} className="button ">2</div>
                <div onClick={numberFunction} className="button ">3</div>
                <div onClick={numberFunction} className="button ">4</div>
                <div onClick={numberFunction} className="button ">5</div>
                <div onClick={numberFunction} className="button ">6</div>
                <div onClick={numberFunction} className="button ">7</div>
                <div onClick={numberFunction} className="button ">8</div>
                <div onClick={numberFunction} className="button ">9</div>
                <div onClick={numberFunction} className="button zero">0</div>
                <div onClick={equalFunction} className="button ">=</div>
            </div>
            <div id="operation">
                <div onClick={operationFunction} className="button">/</div>
                <div onClick={operationFunction} className="button">*</div>
                <div onClick={operationFunction} className="button">-</div>
                <div onClick={operationFunction} className="button">+</div>
            </div>
        </div>
    )
}

export default Container