console.log("Start");

function fakeLogin(email, password, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback({ userEmail: email});
  }, 2000)
}

function getPosts(email, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2", "post3"]);
  }, 1000)
}

function getPostDetail(post, callback) {
  setTimeout(() => {
    console.log("Post details fetched");
    callback("Details of the post");
  }, 1000)
}

const user = fakeLogin("parth@goomail.com", 123456, user => {
  console.log(user);
  getPosts(user.email, (posts) => {
    console.log(posts);
    getPostDetail(posts[0], (details) => {
      console.log(details);
    })
  })
})

console.log("End");