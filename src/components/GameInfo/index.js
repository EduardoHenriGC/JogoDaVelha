export default function GameInfo({ player1Score, player2Score, xIsNext, winner }) {
    return (
        <div className="gameinfo">
            <div className="playerContent">
                <span>{`Jogador 1 (X): ${player1Score} `}</span>
                <span>{`Jogador 2 (O): ${player2Score} `}</span>
            </div>
            <span className="nextPlayer">
                {winner
                    ? `Vencedor: ${winner === "X" ? "Jogador 1 (X)" : "Jogador 2 (O)"}`
                    : `Próximo jogador: ${xIsNext ? "Jogador 1 (X)" : 'Jogador 2 (O)'}`}
            </span>
        </div>
    )
}