
const posts = [
    { title: "Post One", body: "this is post one" },
    { title: "Post Two", body: "this is post two" }
];

function getPosts() {
    setTimeout(() => {
        let postList = document.getElementById("posts");
        postList.innerHTML = "";    // clear the list
        posts.forEach((post, index) => {
            let item = document.createElement('li');
            item.setAttribute("id", `post-${index}`);
            item.classList.add("list-group-item");
            item.innerHTML = post.title;
            postList.appendChild(item);
        });
        
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({ title: "Post Three", body: "This is post three"}, getPosts);
// getPosts();