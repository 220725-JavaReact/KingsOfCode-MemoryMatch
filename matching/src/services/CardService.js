export async function getCards(num) {

    try {
        // to make sure the deck is full
        const reShuffle = await fetch('http://deckofcardsapi.com/api/deck/d8n7kza36skt/shuffle/');
        console.log(await reShuffle.json())
        // fetch cards
        const response = await fetch('http://deckofcardsapi.com/api/deck/d8n7kza36skt/draw/?count=' + num);
        return await response.json();
    } catch (error) {
        return [];
    }

}
