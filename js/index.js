const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent ["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent ["main-content"]["middle-img-src"])
// End of Images

// NAVIGATION
const nav = document.querySelectorAll("nav a");

nav.forEach(element => element.style.color = "green");

nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const newNavItems = document.querySelector("nav");

const newElement1 = document.createElement('a');
newElement1.textContent = "Home";
newElement1.href = "#";
newElement1.style.color = "green";

const newElement2 = document.createElement('a');
newElement2.textContent = "Blog";
newElement2.href = "#";
newElement2.style.color = "green";

newNavItems.prepend(newElement1);
newNavItems.appendChild(newElement2);
// End of Navigation

// CTA
const ctaDOM = document.querySelector(".cta-text h1");
ctaDOM.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "</br>");

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta["button"];
// End of CTA

// MAIN CONTENT
const sectionTitles = document.querySelectorAll(".main-content h4");
sectionTitles[0].textContent = siteContent["main-content"]["features-h4"]
sectionTitles[1].textContent = siteContent["main-content"]["about-h4"]
sectionTitles[2].textContent = siteContent["main-content"]["services-h4"]
sectionTitles[3].textContent = siteContent["main-content"]["product-h4"]
sectionTitles[4].textContent = siteContent["main-content"]["vision-h4"]

const sectionText = document.querySelectorAll(".main-content p");
sectionText[0].textContent = siteContent["main-content"]["features-content"];
sectionText[1].textContent = siteContent["main-content"]["about-content"];
sectionText[2].textContent = siteContent["main-content"]["services-content"];
sectionText[3].textContent = siteContent["main-content"]["product-content"];
sectionText[4].textContent = siteContent["main-content"]["vision-content"];
// End of Main Content

// CONTACT
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = siteContent.contact["address"];
contactText[1].textContent = siteContent.contact["phone"];
contactText[2].textContent = siteContent.contact["email"];
// End of Contact

// COPYRIGHT
const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer["copyright"]; 
// End of Copyright
ßß




