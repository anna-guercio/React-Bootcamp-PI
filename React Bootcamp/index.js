var container = window.document.getElementById("app");

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
    }

    function subtrair() {
        setNumero(numero - 1);
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Escolha quantas bolas você quer no seu sorvete: </h1>
            <Contador titulo="Chocolate" />
            <Contador titulo="Morango" />
            <Contador titulo="Baunilha" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App,null,null), container);
// ReactDOM.render(App(), container);