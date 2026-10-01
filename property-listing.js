// ================= PROPERTY LISTING =================

// Get the search value from the homepage URL
const urlParams = new URLSearchParams(window.location.search);

const searchValue = urlParams.get("search");


// If the visitor came from the homepage search bar,
// display the search value in the browser console.

if (searchValue) {

    console.log("Property search:", searchValue);

}