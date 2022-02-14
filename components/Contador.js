const Contador = () =>{   
    
    const [contador, setContador] = React.useState(0);

    const aumentar = () =>{
        return setContador(contador+1);
    }
    const disminuir = () =>{
        return setContador(contador-1);
    }
    const reset = () => setContador(0)
    

    return(
        <div>
            <h1 className={contador == 0 ? "cero": contador < 0 ? "menor":"mayor"}> Contador: {contador} </h1>
            <hr/>
            <div className="container">
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={reset}>Reiniciar</button>
            <button onClick={disminuir}>Disminuir</button>
            </div>
        </div>
    );
}