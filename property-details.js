// ================= MORE DETAILS POPUP =================

function openDetails() {

    const modal = document.getElementById("detailsModal");

    modal.style.display = "flex";
}


function closeDetails() {

    const modal = document.getElementById("detailsModal");

    modal.style.display = "none";
}


// ================= GALLERY POPUP =================

function openGallery() {

    const modal = document.getElementById("galleryModal");

    modal.style.display = "flex";
}


function closeGallery() {

    const modal = document.getElementById("galleryModal");

    modal.style.display = "none";
}


// ================= CONTACT AGENT =================

function contactAgent() {

    alert(
        "Thank you for your interest. Our property agent will contact you shortly."
    );

}


// ================= CLOSE POPUPS WHEN CLICKING OUTSIDE =================

window.addEventListener("click", function(event) {

    const detailsModal = document.getElementById("detailsModal");

    const galleryModal = document.getElementById("galleryModal");


    if (event.target === detailsModal) {

        detailsModal.style.display = "none";

    }


    if (event.target === galleryModal) {

        galleryModal.style.display = "none";

    }

});