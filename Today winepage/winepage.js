// Get the modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const openModalButton = document.getElementById("open-modal-button"); // Replace with your own button element

// Get the <span> element that closes the modal
const closeModalSpan = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  
  // Fetch reviews from your server or any data source
  const reviews = [
    { name: "John Doe", review: "Great wine! Highly recommended." },
    { name: "Jane Smith", review: "Excellent service and quality." },
    // Add more reviews here
  ];

  // Display the reviews in the modal
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = ""; // Clear previous reviews

  reviews.forEach(review => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `<strong>${review.name}:</strong> ${review.review}`;
    reviewList.appendChild(listItem);
  });
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalSpan.addEventListener("click", closeModal);
window.addEventListener("click", event => {
  if (event.target == modal) {
    closeModal();
  }
});
