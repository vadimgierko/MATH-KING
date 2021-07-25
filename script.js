function App() {
    const [input, setInput] = React.useState();
    const [expression, setExpression] = React.useState();
    const [result, setResult] = React.useState();
    const [message, setMessage] = React.useState();
    function generateExpression(symbol) {
        let firstNum;
        let secondNum;
        if (symbol === "+") {
            firstNum = Math.floor(Math.random() * 100);
            secondNum = Math.floor(Math.random() * 100);
            setResult(firstNum + secondNum);
        } else if (symbol === "-") {
            firstNum = Math.floor(Math.random() * 100);
            secondNum = Math.floor(Math.random() * firstNum);
            setResult(firstNum - secondNum);
        } else if (symbol === "*") {
            firstNum = Math.floor(Math.random() * 10);
            secondNum = Math.floor(Math.random() * 10);
            setResult(firstNum * secondNum);
        } else {
            let a = Math.floor(Math.random() * 10);
            let b = Math.floor(Math.random() * 10);
            firstNum = a * b;
            secondNum = Math.floor(Math.random() * 2) === 0 ? a : b;
            setResult(firstNum / secondNum);
        }
        setExpression(`${firstNum} ${symbol} ${secondNum}`);
        setMessage(null);
    }
    function check() {
        console.log("result = " + result);
        console.log("input = " + input);
        result === +(input) ? setMessage("Correct!") : setMessage("Oops... Try again!");
        
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="display-2">MATH KING</h1> 
            </div>
            <div className="row justify-content-center my-3">
                <div className="btn-group">
                    <button className="btn btn-lg btn-primary rounded-circle mx-3" onClick={() => generateExpression("+")}>+</button>
                    <button className="btn btn-lg btn-success rounded-circle mx-3" onClick={() => generateExpression("-")}>-</button>
                    <button className="btn btn-lg btn-warning rounded-circle mx-3" onClick={() => generateExpression("/")}>/</button>
                    <button className="btn btn-lg btn-danger rounded-circle mx-3" onClick={() => generateExpression("*")}>*</button>
                </div>
            </div>
            <div className="row justify-content-center">
                {expression ? <div className="m-3"><h2 className="display-1">{expression}</h2></div> : null}
            </div>
            {expression ?
            <div className="row justify-content-center">
                <div className="m-3">
                    <h1>
                        <input className="form-control form-control-lg" placeholder="input the answer" onChange={(e) => setInput(e.target.value)}></input>
                    </h1>
                </div>
                <div className="m-3">
                    <h1>
                        <i className="bi bi-check-square-fill text-success" style={{cursor: "pointer"}} onClick={check}></i>
                    </h1>
                </div>
            </div>
            :
            null
            }
            <div className="row justify-content-center">
                {message ? <h1 className="text-success display-2">{message}</h1> : null}
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);