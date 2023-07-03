$(document).ready(function() {
  // Retrieve saved items from local storage if available
  let storedItems = localStorage.getItem("savedItems");
  let savedItems = storedItems ? JSON.parse(storedItems) : [];

  function updateSavedItemsCount() {
    // Display the number of items in the "Save for later" folder
    alert("You have " + savedItems.length + " items in your 'Save for later' folder.");
  }

  function updateSavedItemsPage() {
    // Update the saved items list on the page
    let savedItemsList = $("#saved-items");
    savedItemsList.empty();

    savedItems.forEach(function(item) {
      // Create a list item for each saved item and display its title and date
      let li = $("<li>").text(item.title + " - " + item.date);
      savedItemsList.append(li);
    });

    // Store the updated saved items in the local storage
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }

  function clearSavedItems() {
    // Clear all saved items
    savedItems = [];
    updateSavedItemsCount();
    updateSavedItemsPage();
    localStorage.removeItem("savedItems");
    alert("Your 'Save for later' folder has been cleared.");
  }

  $(document).on("click", ".save-button", function() {
    // Add a clicked item to the saved items list
    let item = {
      title: $(this).data("title"),
      date: $(this).data("date")
    };
    savedItems.push(item);
    updateSavedItemsCount();
    updateSavedItemsPage();
  });

  $("#clear-storage").click(function() {
    // Clear the saved items folder when the "Clear" button is clicked
    clearSavedItems();
  });

  // Update the saved items page and count on page load
  updateSavedItemsPage();
  updateSavedItemsCount();

  // Add animations to certain elements
  $(".list-container").addClass("animated fadeIn");
  $(".radio-container").addClass("animated slideDown");
  $("h1#gamesnews-title").addClass("animatedTitle").animate({ fontSize: "40px" }, 2000);

  // Create a swaying effect for the images
  let images = $(".picture-container img");

  function swayImages() {
    images.animate({ marginLeft: "20px" }, 1000, function() {
      images.animate({ marginLeft: "-20px" }, 1000, swayImages);
    });
  }

  swayImages();

 // Function to handle like button clicks
function handleLikeButtonClick(event) {
  event.preventDefault();
  
  // Get the like count element
  const likeCountElement = event.target.querySelector('.like-count');
  
  // Get the current like count
  let likeCount = parseInt(likeCountElement.textContent);
  
  // Increment the like count by 1
  likeCount++;
  
  // Update the like count element with the new count
  likeCountElement.textContent = likeCount;
}

// Attach event listeners to all like buttons
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
  button.addEventListener('click', handleLikeButtonClick);
});
});
