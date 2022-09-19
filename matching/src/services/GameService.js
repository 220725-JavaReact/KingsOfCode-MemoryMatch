export async function CreateGame(turn, deck, userId, score) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic UDIwMDA5NjE0Mjk6bnNjYzEzMDA=");

    // logic to calculate score
    // score = [(total pair of cards * 2) - turns] % total pair of cards
    var raw = JSON.stringify({
        "turn": turn,
        "deck": deck,
        "score": score - (turn*10),
        //"score": (deck * 2 - turn) / deck,
        "userId": userId
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    console.log(raw);
    fetch("/memorymatch/games", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

