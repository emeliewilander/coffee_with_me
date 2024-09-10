/************************************************************
* Strategic 9 is an IT consulting company driven by a       *
* passion to apply modern thinking and select fit-for       *
* purpose technologies to maximize the benefit for our      *
* customers and help them in their digital journey.         *
*                                                           *
* Strategic9 - Sets You Apart                               *
************************************************************/


const introduction = () => {
    console.log("Hello! I'm Emelie Wilander, a business developer, excited to connect with you.");
}

const about_me = () => {
    console.log("A bit about me: I specialize in building strong business relationships, finding top talent, and creating growth opportunities.");
}

const coffee_with_me = (response) => {
    if (response.toLowerCase() === 'yes') {
        console.log("Fantastic! Let's grab a coffee and discuss how we can collaborate.");
    } else if (response.toLowerCase() === 'no') {
        console.log("No problem! I'm always open for a chat in the future.");
    } else {
        console.log("I didn't quite catch that. Feel free to reach out whenever you're ready for coffee or a conversation!");
    }
}

const contact_details = () => {
    console.log("Feel free to reach out to me directly at: emelie.wilander@strategic9.se or +46 70-263 36 03");
    console.log("Or schedule a meeting with me: https://calendly.com/emelie-wilander/30min");
};

introduction();
about_me();
contact_details();

let userResponse = "yes";
coffee_with_me(userResponse);