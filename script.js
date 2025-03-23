// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Carousel data structure
const carouselData = [
  {
    src: 'images/lodge1-exterior.jpg',
    alt: 'Exterior view of Lodge 1 at Cast & Stay on Baffin Bay'
  },
  {
    src: 'images/lodge1-interior.jpg',
    alt: 'Interior view of Lodge 1 at Cast & Stay showing comfortable living space'
  },
  {
    src: 'images/lodge2-exterior.jpg',
    alt: 'Exterior view of Lodge 2 at Cast & Stay overlooking Baffin Bay'
  },
  {
    src: 'images/lodge2-interior.jpg',
    alt: 'Interior view of Lodge 2 at Cast & Stay featuring modern amenities'
  },
  {
    src: 'images/lodge3-exterior.jpg',
    alt: 'Exterior view of Lodge 3 at Cast & Stay with waterfront access'
  },
  {
    src: 'images/lodge3-interior.jpg',
    alt: 'Interior view of Lodge 3 at Cast & Stay showing comfortable accommodations'
  },
  {
    src: 'images/past-customers.jpg',
    alt: 'Happy guests enjoying their stay at Cast & Stay on Baffin Bay'
  },
  {
    src: 'images/event.jpg',
    alt: 'Special event venue at Cast & Stay overlooking Baffin Bay'
  }
];

let currentIndex = 0;
let itemsPerView = 4;
let carouselItems = document.getElementById('carousel-items');
let dotsContainer = document.querySelector('.carousel-dots');

// Initialize carousel
function initCarousel() {
  // Create carousel items
  carouselData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `<img src="${item.src}" alt="${item.alt}" onclick="onClick(this)">`;
    carouselItems.appendChild(div);

    // Create dots
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  updateCarousel();
}

// Update carousel position
function updateCarousel() {
  const offset = -currentIndex * (100 / itemsPerView);
  carouselItems.style.transform = `translateX(${offset}%)`;
  
  // Update dots
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Move carousel
function moveCarousel(direction) {
  const maxIndex = carouselData.length - itemsPerView;
  currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
  updateCarousel();
}

// Go to specific slide
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Handle window resize
function handleResize() {
  if (window.innerWidth <= 480) {
    itemsPerView = 1;
  } else if (window.innerWidth <= 768) {
    itemsPerView = 2;
  } else {
    itemsPerView = 4;
  }
  updateCarousel();
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  window.addEventListener('resize', handleResize);
});

// Update loadMorePhotos function to work with new carousel
function loadMorePhotos() {
  // Add new images to carouselData array
  const newImages = [
    'images/fishing1.jpg',
    'images/fishing2.jpg',
    'images/fishing3.jpg',
    'images/fishing4.jpg',
    'images/fishing5.jpg',
    'images/fishing6.jpg',
    'images/fishing7.jpg',
    'images/fishing8.jpg',
    'images/fishing9.jpg',
    'images/fishing10.jpg',
    'images/fishing11.jpg',
    'images/fishing12.jpg'
  ];

  newImages.forEach(src => {
    carouselData.push({
      src: src,
      alt: `Fishing at Cast & Stay on Baffin Bay - ${src.split('/').pop().replace(/\.[^/.]+$/, '')}`
    });
  });

  // Reinitialize carousel with new data
  carouselItems.innerHTML = '';
  dotsContainer.innerHTML = '';
  initCarousel();
  
  // Hide load more button
  document.querySelector('.w3-button.w3-padding-large.w3-light-grey').style.display = 'none';
}

// Function to handle email form submission
function send_email(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Create mailto link with subject and body
    var mailtoLink = "mailto:castnstay@yahoo.com?subject=Contact Form: " + encodeURIComponent(name) + 
                     "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    return false;
} 