let myJournals = [""];

function displayJournal() {
    var journalsContainer = document.getElementById("journals");
    journalsContainer.innerHTML = ""; // Clear the container before adding new journals

    myJournals.forEach((journal, index) => {
        var postJournal = document.createElement("div");
        postJournal.className = "journal";
        postJournal.id = "journal" + index;
        postJournal.innerText = journal; // Use 'journal' instead of 'myjournals'
        postJournal.style.color = "green";
        postJournal.style.fontWeight = "bold";
        postJournal.style.fontSize = "20px";

        journalsContainer.appendChild(postJournal); // Append 'postJournal' to 'journalsContainer'
    });
}

function addJournal() {
    var newJournal = document.getElementById("newJournal").value;

    myJournals.push(newJournal); // Add the new journal to the array
    displayJournal(); // Call the function to display the journals
}

function removeLastJournal() {
    myJournals.pop(); // Remove the last journal from the array
    displayJournal(); // Call the function to display the journals
}

function removeFirstJournal() {
    myJournals.shift(); // Remove the first journal from the array
    displayJournal(); // Call the function to display the journals
}

function addJournalToBeginning() {
    var newJournal = document.getElementById("newJournal").value;
    myJournals.unshift(newJournal);
    displayJournal();
}

function replaceJournal() {
    var newJournal = document.getElementById("newJournal").value;
    var index = document.getElementById("removeIndex");
    myJournals.splice(myJournals[index], 1, newJournal); // Remove the journal at the specified index
    displayJournal(); // Call the function to display the journals
}

function removeAllJournals() {
    myJournals = []; // Remove all journals from the array
    displayJournal(); // Call the function to display the journals
}

displayJournal(); // Call the function to display the initial journals