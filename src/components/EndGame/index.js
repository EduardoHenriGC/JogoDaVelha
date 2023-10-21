export default function EndGame({ restartGame, winner }) {

    return (

        <div>
            <span>vencedor: {winner === "X" ? "Jogador 1 (X)" : "Jogador 2 (O)"}</span>
            <button onClick={restartGame}>jogar novamente</button>


        </div>
    )
}