let myJournals = ["journal1", "journal2", "journal3", "journal4"];

function displayJournal() {
    var journalsContainer = document.getElementById("journals");
    journalsContainer.innerHTML = ""; // Clear the container before adding new journals

    myJournals.forEach((journal, index) => {
        var postJournal = document.createElement("div");
        postJournal.className = "journal";
        postJournal.id = "journal" + index;
        postJournal.innerText = journal; // Use 'journal' instead of 'myjournals'
        postJournal.style.color = "red";
        postJournal.style.fontWeight = "bold";
        postJournal.style.fontSize = "20px";
        journalsContainer.appendChild(postJournal); // Append 'postJournal' to 'journalsContainer'
    });
}

displayJournal(); // Call the function to display the journals