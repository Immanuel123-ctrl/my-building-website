const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("searchInput");

const searchMessage = document.getElementById("searchMessage");


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchValue = searchInput.value.trim();


    if (searchValue === "") {

        searchMessage.textContent =
            "Please enter a property or location to search.";

        searchMessage.style.color = "#ffcccc";

        return;
    }


    searchMessage.textContent =
        "Searching for properties...";

    searchMessage.style.color = "white";


    /*
       After searching, take the visitor
       to the property listing page.
    */

    setTimeout(function() {

        window.location.href =
            "property-listing.html?search=" +
            encodeURIComponent(searchValue);

    }, 800);

});