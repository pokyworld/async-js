
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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }

        }, 2000)
    });
}

getPosts();


// createPost({ title: "Post Three", body: "This is post three"}, getPosts)
// .then(() => {
//     getPosts();
// })
// .catch(error => console.log(error));


// ---------------------------------------------------------------------
// Async/Await
// ---------------------------------------------------------------------

async function init() {
    await createPost({ title: "Post Three", body: "This is post three"});
    console.log(posts);
    getPosts();
}
init();

async function fetchUsers() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await res.json();
    console.log(data);
}
fetchUsers();

// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
// Promise All
// ---------------------------------------------------------------------
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Goodbye"));
// // const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Successfully reached Server"));
// const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Failed to reach Server"));
// const promise5 = fetch(
//     "https://jsonplaceholder.typicode.com/users/"
// ).then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4, promise5])
// .then(values => console.log(values))
// .catch(error => console.log(error));
// ---------------------------------------------------------------------
