// Ele deve mostrar seu nome em um h2, sua cidade e um parágrafo com o que você quer aprender. Use variáveis com chaves para nome e cidade. Mostre o componente três vezes no App.

export const CartaoDeVisita = () => {
    const nome = "Lucas";
    const cidade = "Santo André";

    return (
        
        <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>

            <h2>{nome}</h2>
            <p>Cidade: {cidade}</p>
            <p>Quero aprender React para criar sistemas completos.</p>

        </div>
    );
    
};


