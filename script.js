function showCategory(categoryId) {
    // Hide all image previews
    const allImagePreviews = document.querySelectorAll('.image-preview');
    allImagePreviews.forEach((preview) => {
        preview.style.display = 'none';
    });

    // Show the image previews for the selected category
    const categoryImages = document.getElementById(categoryId + '-images');
    if (categoryImages) {
        categoryImages.style.display = 'block';
    }
}

document.querySelectorAll('#navbarToggleExternalContent a.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      // Close the collapsible content
      var collapsible = document.querySelector('#navbarToggleExternalContent');
      if (collapsible.classList.contains('show')) {
        collapsible.classList.remove('show');
      }
    });
  });

const elements = document.querySelectorAll('.scale');

function scaleIn() {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', scaleIn);
window.addEventListener('load', scaleIn);

const elements1 = document.querySelectorAll('.scale-on-scroll');

function scaleOnScroll() {
  elements1.forEach(element1 => {
    const elementTop1 = element1.getBoundingClientRect().top;
    const elementBottom1 = element1.getBoundingClientRect().bottom;

    if (elementTop1 < window.innerHeight && elementBottom1 >= 0) {
      element1.classList.add('show');
    } else {
      element1.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', scaleOnScroll);
window.addEventListener('load', scaleOnScroll);






 