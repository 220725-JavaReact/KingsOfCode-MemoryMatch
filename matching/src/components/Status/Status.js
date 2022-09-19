import './Status.css';
export default function Status({ player, difficulity, turns, streak, score }) {
    return (
        <div id="scroller-right">
            <table className="tg">
                <thead>
                    <tr>
                        <td className="tg-td">Player</td>
                        <td className="tg-td">:</td>
                        <td className="tg-td">{player.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tg-td">Difficulity</td>
                        <td className="tg-td">:</td>
                        <td className="tg-td">{difficulity}</td>
                    </tr>
                    <tr>
                        <td className="tg-td">Turns</td>
                        <td className="tg-td">:</td>
                        <td className="tg-td">{turns}</td>
                    </tr>
                    <tr>
                        <td className="tg-td">MATCH STREAK</td>
                        <td className="tg-td">:</td>
                        <td className="tg-td">x{streak}</td>
                    </tr>
                    <tr>
                        <td className="tg-td">SCORE</td>
                        <td className="tg-td">:</td>
                        <td className="tg-td">{score}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
