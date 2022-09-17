import './Status.css';
export default function Status({ player, difficulity, turns }) {
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
                </tbody>
            </table>
        </div>
    )
}
