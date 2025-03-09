document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let team = document.getElementById("team").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    
    if (email && phone && team && date && category && quantity) {
        document.getElementById("message").innerText = `Tickets booked successfully for ${team} on ${date} (${category} - ${quantity} tickets)! Confirmation sent to ${email}.`;
    } else {
        document.getElementById("message").innerText = "Please fill in all fields correctly.";
    }
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}