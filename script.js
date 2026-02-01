// Scroll to scholarships section
document.getElementById("exploreBtn").addEventListener("click", function () {
  document.getElementById("scholarships").scrollIntoView({
    behavior: "smooth"
  });
});

// Search functionality
document.getElementById("searchInput").addEventListener("keyup", function () {
  let searchValue = this.value.toLowerCase();
  let scholarships = document.querySelectorAll(".scholarship");

  scholarships.forEach(function (card) {
    let cardText = card.innerText.toLowerCase();

    if (cardText.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
