console.log("Start");

function fakeLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ userEmail: email});
    }, 2000)
  });
}

function getPosts(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2", "post3"]);
    }, 1000)
  });
}

function getPostDetail(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Post details fetched");
      resolve("Details of the post");
    }, 1000)
  });
}

fakeLogin("parth@goomail.com", "123456")
.then(user => getPosts(user.email))
.then(posts => getPostDetail(posts[0]))
.then(detail => console.log(detail))

console.log("End");