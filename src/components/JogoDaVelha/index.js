import Board from '@/components/Board/index';
import { useJogoDaVelha } from '@/context/JogoDaVelhaContext';
import EndGame from '../EndGame';
import GameInfo from '../GameInfo';

export default function JogoDaVelha() {
    const { squares, handleClick, xIsNext, resetGame, winner, player1Score, player2Score, endGame } = useJogoDaVelha();
    return (
        <div className="game">
            {endGame ? (<EndGame winner={winner} restartGame={restartGame} />) : (
                <GameInfo player1Score={player1Score} player2Score={player2Score} winner={winner} xIsNext={xIsNext} />
            )}
            <div className="game-board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <button className="btn-reset" onClick={resetGame}>reiniciar</button>



        </div>
    );
};



