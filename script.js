// Mobile Navbar Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Image Slider
const sliderImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
];

let currentImage = 0;
const slider = document.getElementById("sliderImage");

if (slider) {
  setInterval(() => {
    currentImage = (currentImage + 1) % sliderImages.length;
    slider.src = sliderImages[currentImage];
  }, 3000);
}

// Contact Form Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      e.preventDefault();
      document.getElementById("formMessage").style.color = "#fda4af";
      document.getElementById("formMessage").textContent = "Please fill in all fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      e.preventDefault();
      document.getElementById("formMessage").style.color = "#fda4af";
      document.getElementById("formMessage").textContent = "Please enter a valid email address.";
      return;
    }
  });
}

// Newsletter Validation
function subscribeNow(event) {
  event.preventDefault();

  const email = document.getElementById("newsletterEmail").value.trim();
  const message = document.getElementById("newsletterMessage");

  if (email === "") {
    message.style.color = "#fda4af";
    message.textContent = "Please enter your email.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.style.color = "#fda4af";
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.style.color = "#86efac";
  message.textContent = "Subscribed successfully!";
  document.getElementById("newsletterEmail").value = "";
}

// Modal Functions
function openModal(title, text) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = text;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};