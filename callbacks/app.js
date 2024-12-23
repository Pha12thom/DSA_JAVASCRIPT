function fetchComments(callback) {
    setTimeout(function() {
        const comments = [
            { username: 'User1', text: 'Great post!' },
            { username: 'User2', text: 'Very informative.' },
            { username: 'User3', text: 'I learned a lot, thanks!' }
        ];
        callback(comments);
    }, 2000); // Simulating network delay
}

// Function to display comments
function displayComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');
    comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.innerHTML = `<strong>${comment.username}</strong>: ${comment.text}`;
            commentsContainer.appendChild(commentDiv);]

    });
}

// Event listener for the button click
document.getElementById('loadCommentsButton').addEventListener('click', function() {
    fetchComments(displayComments);
});