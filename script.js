function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>MATH KING</h1> 
            </div>
            <div className="row justify-content-center my-3">
                <div className="btn-group">
                    <button className="btn btn-lg btn-primary rounded-circle mx-2">+</button>
                    <button className="btn btn-lg btn-success rounded-circle mx-2">-</button>
                    <button className="btn btn-lg btn-warning rounded-circle mx-2">/</button>
                    <button className="btn btn-lg btn-danger rounded-circle mx-2">*</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="m-3"><h2>25 + 36</h2></div>
                <div className="m-3"><h2><i className="bi bi-arrow-right-square"></i></h2></div>
                <div className="m-3">
                    <h2><input className="form-control" placeholder="input the answer"></input></h2>
                </div>
                <div className="m-3">
                    <h2>
                        <i
                            className="bi bi-check-square-fill text-success"
                            style={{cursor: "pointer"}}
                            onClick={() => alert("wee")}>    
                        </i>
                    </h2>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);