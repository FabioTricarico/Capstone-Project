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

  $(".list-container").addClass("animated fadeIn");
  $(".radio-container").addClass("animated slideDown");

  // Add animation to the title
  $("h1#saved-title").addClass("animatedTitle").animate({ fontSize: "40px" }, 2000);

  let images = $(".picture-container img");

  function swayImages() {
    images.animate({ marginLeft: "20px" }, 1000, function() {
      images.animate({ marginLeft: "-20px" }, 1000, swayImages);
    });
  }

  swayImages();
});
