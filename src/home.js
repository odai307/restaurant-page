export default class Home {

    static displayDays = () => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>Mondays 9:00am - 11:30pm<p>
            <p>Tuesdays 9:00am - 11:30pm<p>
            <p>Wednesdays 9:00am - 11:30pm<p>
            <p>Thursays 9:00am - 11:30pm<p>
            <p>Fridays 9:00am - 11:30pm<p>
            <p>Saturdays 9:00am - 11:30pm<p>
            <p>Sundays 9:00am - 11:30pm<p>
        `
        return card;
    
    }

}
