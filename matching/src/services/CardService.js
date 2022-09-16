export async function getCards(num) {

    try {
        const response = await fetch('http://deckofcardsapi.com/api/deck/d8n7kza36skt/draw/?count=' + num);
        return await response.json();
    } catch (error) {
        return [];
    }

}
