export async function CreateGame(turn, deck, userId) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    // logic to calculate score
    // score = [(total pair of cards * 2) - turns] % total pair of cards
    var raw = JSON.stringify({
        "turn": turn,
        "deck": deck,
        "score": (deck * 2 - turn) / deck,
        "userId": userId
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    console.log(raw);
    fetch("http://localhost:8080/memorymatch/games", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}