const header = document.getElementById("header");
const topMarker = document.getElementById("topMarker");
const banner = document.getElementById("titleBanner");

const graphicsMarker = document.getElementById("graphicsMarker");
const logosMarker = document.getElementById("logosMarker");
const motionMarker = document.getElementById("motionMarker");

const graphNav = document.getElementById("graphicsNav");
const logoNav = document.getElementById("logosNav");
const motionNav = document.getElementById("motionNav");
const contactNav = document.getElementById("contactNav");

const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        header.classList.remove("reveal");
        banner.classList.remove("hide");
        
        if (contactState == true) {
            contact.classList.remove("reveal");
            contactState = false;
        }
    } else {
        header.classList.add("reveal");
        banner.classList.add("hide");
        
        if (landingContactState == true) {
            landingContact.classList.remove("reveal");
            landingContactButton.classList.remove("highlight");
            landingContactState = false;
        }
        
    }
});

const graphObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        graphNav.classList.add("highlight");
    } else {
        graphNav.classList.remove("highlight");
    }
});

const logoObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        logoNav.classList.add("highlight");
    } else {
        logoNav.classList.remove("highlight");
    }
});

const motionObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        motionNav.classList.add("highlight");
    } else {
        motionNav.classList.remove("highlight");
    }
});

observer.observe(topMarker);

graphObserver.observe(graphicsMarker);
logoObserver.observe(logosMarker);
motionObserver.observe(motionMarker);

let contactState = false;

const contact = document.getElementById("contactSheet");

function contactSheet() {
    
    if (contactState == false) {
        contact.classList.add("reveal");
        contactState = true;
        contactNav.classList.add("highlight");
    } else if (contactState == true) {
        contact.classList.remove("reveal");
        contactState = false;
        contactNav.classList.remove("highlight");
    }
}

let landingContactState = false;

const landingContact = document.getElementById("landingContactSheet");
const landingContactButton = document.getElementById("landingContactNav");

function contactLandingSheet() {
    
    if (landingContactState == false) {
        landingContact.classList.add("reveal");
        landingContactButton.classList.add("highlight");
        landingContactState = true;
    } else if (landingContactState == true) {
        landingContact.classList.remove("reveal");
        landingContactButton.classList.remove("highlight");
        landingContactState = false;
    }
}
document.getElementById("emailText").innerHTML = "meatsoda@meatsoda.is";
document.getElementById("emailLandingText").innerHTML = "meatsoda@meatsoda.is";