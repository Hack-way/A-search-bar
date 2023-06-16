const searchForm = document.getElementById("search-form");
        const searchInput = document.getElementById("search-input");
        const searchImage = document.getElementById("search-image");
        const searchResults = document.getElementById("search-results");
        
        searchForm.addEventListener("submit", (event) => {
          event.preventDefault();
          searchImage.style.display = "none";
          searchResults.innerHTML = `Showing results for: ${searchInput.value}`;
        });