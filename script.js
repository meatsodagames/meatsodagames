const header = document.getElementById("header");
const headIOS = document.getElementById("headerIOS");
const topMarker = document.getElementById("topMarker");
const banner = document.getElementById("titleBanner");

const graphicsMarker = document.getElementById("graphicsMarker");
const logosMarker = document.getElementById("logosMarker");
const motionMarker = document.getElementById("motionMarker");

const graphNav = document.getElementById("graphicsNav");
const logoNav = document.getElementById("logosNav");
const motionNav = document.getElementById("motionNav");
const contactNav = document.getElementById("contactNav");

const graphIOS = document.getElementById("graphicsIOS");
const logoIOS = document.getElementById("logosIOS");
const motionIOS = document.getElementById("motionIOS");
const contactIOS = document.getElementById("contactIOS");

const navIOS = document.getElementById("navIOS");

if (window.IS_IOS_SAFARI){
    headerSwitch();
}

function headerSwitch(){
    header.style.display = "none";
    headerIOS.style.display = "flex";
}

const observer = new IntersectionObserver(([entry]) => {
    if (window.IS_IOS_SAFARI){
        if (entry.isIntersecting) {
            headerIOS.style.opacity = 0;
            setTimeout(function() {navIOS.style.display = "none";}, 800);
            banner.classList.remove("hide");
            if (contactState == true) {
                contactState = false;
                contactTriggerIOS();
            }

        } else {
            navIOS.style.display = "flex";
            headerIOS.style.opacity = 1;
            banner.classList.add("hide");
            if (landingContactState == true) {
                landingContactState = false;
                contactTriggerIOS();
            }
        }
    } else {    
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
    }
});

const graphObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        graphNav.classList.add("highlight");
        graphIOS.classList.add("highlight");
    } else {
        graphNav.classList.remove("highlight");
        graphIOS.classList.remove("highlight");
    }
});

const logoObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        logoNav.classList.add("highlight");
        logoIOS.classList.add("highlight");
    } else {
        logoNav.classList.remove("highlight");
        logoIOS.classList.remove("highlight");
    }
});

const motionObserver = new IntersectionObserver(([entry]) => {
    
    if (entry.isIntersecting) {
        motionNav.classList.add("highlight");
        motionIOS.classList.add("highlight");
    } else {
        motionNav.classList.remove("highlight");
        motionIOS.classList.remove("highlight");
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
        contactNav.classList.add("highlight");
        contactIOS.classList.add("highlight");
        contactState = true;
        if(window.IS_IOS_SAFARI){
            contactTriggerIOS();
        } else return;
        
    } else if (contactState == true) {
        contact.classList.remove("reveal");
        contactNav.classList.remove("highlight");
        contactIOS.classList.remove("highlight");
        contactState = false;
        if(window.IS_IOS_SAFARI){
            contactTriggerIOS();
        } else return;
        
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
        if(window.IS_IOS_SAFARI){
            contactTriggerIOS();
        } else return;
    } else if (landingContactState == true) {
        landingContact.classList.remove("reveal");
        landingContactButton.classList.remove("highlight");
        landingContactState = false;
        if(window.IS_IOS_SAFARI){
            contactTriggerIOS();
        } else return;
    }
}

function contactTriggerIOS(){
    if (landingContactState === true){
        contactSheetIOS.style.opacity = 0;
        contactSheetIOS.style.display = "flex";
        
        contactSheetIOS.style.opacity = 1;
    } else {
        contactSheetIOS.style.opacity = 0;
        setTimeout(function() {contactSheetIOS.style.display = "hidden";}, 1000);
    }
}

document.getElementById("emailText").innerHTML = "meatsoda@meatsoda.is";
document.getElementById("emailTextIOS").innerHTML = "meatsoda@meatsoda.is";
document.getElementById("emailLandingText").innerHTML = "meatsoda@meatsoda.is";

const albums = {
    shark: [
        "../images/snowshark_main.png",
        "../images/snowshark_back.jpg",
        "../images/snowshark_front.jpg",
        "../images/snowshark_hat.png"
    ],
    acid: [
        "../images/acidbath_main.jpeg",
        "../images/acidbath_front.jpg",
        "../images/acidbath_back.jpg"
  ],
    wal2: [
        "/images/wearelosers2_cover.jpg",
        "/images/wearelosers2.png",
        "/images/wearelosers2.gif"
    ],
    lobster: [
        "/images/lobster.png",
        "/images/lobster_hashtag.png"        
    ],
    yes: [
        "/images/yes_airmaster.jpg",
        "/images/yes_fridgemaster.jpg",
        "/images/yes_backmaster.jpg",
        "/images/yes_fridge.png",
        "/images/yes_typo.png"
    ],
    heavy: [
        "/images/heavymeatal.png",
        "/images/heavymeatal_risowhite.jpg",
        "/images/heavymeatal_risored.jpg"
    ],
    stickers: [
        "/images/stickers.jpg",
        "/images/stickers2.jpg",
        "/images/stickers_thumbnail.jpg"
    ],
    nasl: [
        "/images/nasl_teikning.jpg",
        "/images/nasl.png"
    ],
    habe: [
        "/images/habe_chain.jpg",
        "/images/habe_sky.jpg",
        "/images/habe_main.jpg"
    ],
    hitalagnir: [
        "/images/hitalagnir_thumbnail.jpg",
        "/images/hitalagnir_bill.png"
    ],
    posters: [
        "/images/anticrusader.jpg",
        "/images/uberdeth.jpg"
    ],
    
    isey: [
        "/images/isey_icead.jpg",
        "/images/isey_ice.jpg",
        "/images/isey_beachad.jpg",
        "/images/isey_beach.jpg"
    ],
    
    lhi: [
        "/images/utopia.jpg",
        "/images/utopia_2.jpg",
        "/images/utopia_3.jpg",
        "/images/blodbankinn.jpg",
        "/images/fronsk.jpg"
    ],
    
    volcanova: [
        "/images/Volcanova_ss.jpg",
        "/images/Volcanova_io.jpg",
        "/images/Volcanova_sdv.jpg"
    ],
    dopamine: [
        "images/dopamine_main.jpg",
        "images/dopamine_clean.jpg",
        "images/dopamine_rough.jpg"
    ],
    malmsmidjan: [
        "images/malmsmidjan.png",
        "images/malmsmidjan_icon.png",
        "images/malmsmidjan_text.png",
    ],
    horsefeathers_text: [
        "images/horsefeathers_textthumbnail.jpg",
        "images/horsefeathers_sharktext.png",
        "images/horsefeathers_sharkhf.png",
        "images/horsefeathers_fire.png",
        "images/horsefeathers_melthf.png"
    ],
    baejarbio: [
        "videos/baejarbio.mp4",
        "images/baejarbio.png"
    ],
    2025: [
        "videos/2025reel.mp4"
    ],
    
    meatsoda: [
        "videos/MeatsodaIntro.mp4",
        "videos/ZonkEnterprises.mp4",
        "videos/Tauzhin.mp4"
    ],
    depeche: [
        "videos/shakethedisease.mp4"
    ],
    glitchtrix: [
        "videos/Glitchtrix.mp4"
    ],
    turbowizard: [
        "videos/turbowizard.mp4"
    ]
};

const description = {
    shark: ["Horsefeather's Halldór Helgason X Meatsoda Chuck Jacket Design. Printed on a jacket, hoodie, t-shirt and embroidered on Hats. (2023)"],
    
    acid: ["Horsefeather's Halldór Helgason X Meatsoda Chuck Jacket Design. Printed on a jacket, hoodie, t-shirt and embroidered on Hats. (2024)"],
    
    wal2: ["Logo and Title animation for Lobster Snowboards final movie 'We Are Losers 2'. (2023)"],
    
    lobster: ["Death metal style logos made for snowboard concepts. Later reworked after the merger of Yes Snowboards, Now Bindings and Lobster Snowboards. (2023)"],
    
    yes: ["Designed two snowboards for Yes Snowboards. The Airmaster and the Airmaster Extreme. Design was used on bindings as well as for storefronts and the merger ad campaign. (2024)"],
    
    heavy: ["Illustration originally meant to be printed on T-shirts. Riso printed on colored paper in dark green and pink. (2026)"],
    
    stickers: ["Meatsoda stickers (2018)"],
    
    nasl: ["Label design done for Borg Brugghús for their 31st collaboration beer, a new year's beer called 'Nasl'. (2021)"],
    
    habe: ["Logo designed for Habe, icelandic handmade goth chic jewelry. A secondary logotype and a custom hand drawn blackletter style H as a main logo. (2025)"],
    
    hitalagnir: ["Logo and car decals designed for plumber contractor Hitalagnir ehf. (2025)"],
    
    posters: ["Two Meatsoda posters."],
    
    isey: ["Assignment to make a campaign for Ísey Skyr for a class in LHÍ."],
    
    lhi: ["Posters made for three different assignments made for classes in LHÍ."],
    
    volcanova: ["Covers for three singles released by icelandic band Volcanova."],
    
    dopamine: ["Logo and variants made for icelandic band Dopamine Machine."],
    
    malmsmidjan: ["Logo made for icelandic metal scene podcast Málmsmiðjan."],
    
    horsefeathers_text: ["Typographic logo designs made for Horsefeathers."],
    
    baejarbio: ["The outcome of two different assignments at LHÍ. I made a new logo for Bæjarbíó an old venue that used to be a theater, then had a new assignment to make motion graphics for something we'd previously designed."],
    
    2025: ["A 2025 highlight reel I made for Instagram of my designs. Song is Coltrane by Tutankhamun."],
    
    depeche: ["Another LHÍ assignment. We were to plan and edit a video no longer than 1:50, I made a music video for the song Shake the Disease by Depeche Mode that was meant to feel like a memory. Cut together live videos and parts from the official video for the song and Stripped by Depeche Mode as well."],
    
    glitchtrix: ["LHÍ assignment for class on visuals for audio. I programmed an interactive and reactive music visualizer using Touch Designer. Song is Le gout Des Cendres by Kompromat."],
    
    turbowizard: ["An intro I made for movie nights I hosted over Discord during Covid Lockdowns with my friends. Song is Death In Space by Compilerbau."],
    
    meatsoda: ["Title sequences I made as practice (honestly just for the fun of it). Visuals and logos created by me, Meatsoda Illustrations is the only audio I made, rest was taken from old commercials and title sequences."]

};

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");

const modalVideo = document.getElementById("modalVideo");
const modalVideoSource = document.getElementById("modalVideoSource");

const modalText = document.getElementById("modalText");

let currentAlbum = [];
let currentDescription = [];
let index = 0;

const pageNumber = document.getElementById("pageNumber");
let modalPage = document.getElementById("modalPage");

document.querySelectorAll(".album").forEach(el => {
    el.addEventListener("click", () => {
        
        currentAlbum = albums[el.dataset.album];
        currentDescription = description[el.dataset.album];
        index = 0;
        
        modal.classList.add("active");
        update();
    });
});

function update() {
    const file = currentAlbum[index];
    
    if(file.endsWith(".mp4") || file.endsWith(".webm")) {

        modalImg.style.display = "none";
        
        modalVideo.style.display = "block";
        modalVideo.src = file;
        modalVideo.load();
        /*modalVideoSource.src = file;*/
        modalText.innerHTML = currentDescription ? currentDescription[0] : "";

    } else {

        modalVideo.pause();
        modalVideo.style.display = "none";
        
        modalImg.style.display = "block";
        modalImg.src = currentAlbum[index];
        modalText.innerHTML = currentDescription ? currentDescription[0] : "";
    }
    
    if(currentAlbum.length === 1){
            
        let nav = document.getElementsByClassName("nav");
        for(let n of nav){
            n.classList.add("needless");
        } modalPage.innerHTML = "";
    } else if (currentAlbum.length >= 2){
        let nav = document.getElementsByClassName("nav");
        for(let n of nav){
            n.classList.remove("needless");
            
        
        } modalPage.innerHTML = (index+1) + "/" + currentAlbum.length;
    }


/*    modalImg.src = currentAlbum[index];
    modalText.innerHTML = currentDescription ? currentDescription[0] : "";*/

}


document.querySelector(".next").onclick = () => {
    index = (index + 1) % currentAlbum.length;
    update();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + currentAlbum.length) % currentAlbum.length;
    update();
};

document.querySelector(".close").onclick = () => {
    modal.classList.remove("active");
    index = 0;

};

modal.onclick = (e) => {
    if (e.target === modal){
        modal.classList.remove("active");
        modalVideo.pause();
    }
};