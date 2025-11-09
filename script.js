// Simple script to open/close the image caption modal
// Function to open the image modal
function openImageModal(imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.querySelector(".modal-caption");
    
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
    
    // Enable zoom with mouse wheel
    modalImg.addEventListener('wheel', function(e) {
        e.preventDefault();
        let scale = 1;
        if (e.deltaY < 0) {
            scale = 1.1; // Zoom in
        } else {
            scale = 0.9; // Zoom out
        }
        this.style.transform = `scale(${parseFloat(this.style.transform.replace('scale(', '').replace(')', '') || 1) * scale})`;
    });
}

// Close modal when clicking the X
document.querySelector(".modal-close").onclick = function() {
    document.getElementById("image-modal").style.display = "none";
    document.getElementById("modal-img").style.transform = "scale(1)";
}

// Close modal when clicking outside the image
document.getElementById("image-modal").onclick = function(e) {
    if (e.target === this) {
        this.style.display = "none";
        document.getElementById("modal-img").style.transform = "scale(1)";
    }
}

// Add keyboard support for closing modal
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.getElementById("image-modal").style.display = "none";
        document.getElementById("modal-img").style.transform = "scale(1)";
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('caption-modal');
  const closeBtn = document.getElementById('close-caption-btn');

  // Attach click handlers to all read-more links
  document.querySelectorAll('.read-more').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const post = link.closest('.post');
      if (!post || !modal) return;
      const full = post.querySelector('.full-caption');
      const body = modal.querySelector('.modal-body');
      if (full && body) {
        body.innerHTML = full.innerHTML;
      }
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // close modal when clicking outside content
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});