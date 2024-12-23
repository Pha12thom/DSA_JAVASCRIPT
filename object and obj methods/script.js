const blogposts = {
    name: "milugo",

}


function displayBlog() {
    var blogpost = document.getElementById("journal");
    blogpost.innerHTML = "";

    for (key in blogposts) {
        var mypost = document.createElement(div);

        mypost.index = key;
        mypost.classname = "journals";
        mypost.id = "journals";
        mypost = blogposts[key];

        blogpost.appendChild(mypost);

    }
}

displayBlog();