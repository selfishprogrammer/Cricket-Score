const API_KEY = "Kf94SYxtYHhOexrJ9Mk6PShwkz03";



export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url).then((response) => response.json()).catch((error) => console.log("Error", error));

}




export const getScore = (id) => {

    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url).then((response) => response.json()).catch((error) => console.log("Error", error));


}