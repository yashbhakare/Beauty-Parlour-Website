// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAtLVUnBTTYLPQMa6KiIQz17YpK0bfIqFo",
  authDomain: "beautyweb-48bbf.firebaseapp.com",
  databaseURL: "https://beautyweb-48bbf-default-rtdb.firebaseio.com",
  projectId: "beautyweb-48bbf",
  storageBucket: "beautyweb-48bbf.appspot.com", // this should be .appspot.com not .storage.app
  messagingSenderId: "610379053247",
  appId: "1:610379053247:web:10787bea02fe54ffd0ee0a",
  measurementId: "G-CLSV34W63M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference
var contactFormDB = firebase.database().ref("Shamal Beauty Hub");

// Submit listener
document.getElementById("yourFormId").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;

  saveMessages(name, mobile, email);
  alert("Your details have been submitted!");
}

function saveMessages(name, mobile, email) {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    mobile: mobile,
    email: email
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const lazyElements = document.querySelectorAll(".lazy-load");

  const observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const src = el.getAttribute("data-src");
        if (src.endsWith(".jpg") || src.endsWith(".png")) {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "Loaded Image";
          img.style.width = "100%";
          img.style.borderRadius = "10px";
          el.appendChild(img);
        } else if (src.endsWith(".mp4")) {
          const video = document.createElement("video");
          video.src = src;
          video.controls = true;
          video.style.width = "100%";
          el.appendChild(video);
        }
        observerRef.unobserve(el);
      }
    });
  }, {
    threshold: 0.3
  });

  lazyElements.forEach(el => observer.observe(el));
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
