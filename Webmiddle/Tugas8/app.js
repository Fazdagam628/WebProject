// Endpoint URLs
const API_USER = "https://jsonplaceholder.typicode.com/users/1";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts?userId=1";

// DOM Elements
const userInfoElement = document.getElementById("userInfo");
const userPostsElement = document.getElementById("userPosts");

// Display user data on the page
const displayData = (user, posts) => {
  userInfoElement.innerHTML = `
    Name: ${user.name} <br>
    Email: ${user.email} <br>
    City: ${user.address.city}
    `;
  userPostsElement.innerHTML = posts
    .map((post) => `<li>${post.title}</li>`)
    .join("");
};

// Display error message
const displayError = (message) => {
  userInfoElement.innerHTML = `<span style="color: red;">${message}</span>`;
  userPostsElement.innerHTML = "";
};

// Fetch data with callback
const fetchWithCallback = (callback) => {
  fetch(API_USER)
    .then((response) => response.json())
    .then((user) => {
      fetch(API_POSTS)
        .then((response) => response.json())
        .then((posts) => {
          callback(null, user, posts);
        })
        .catch((err) => callback(err, null, null));
    })
    .catch((err) => callback(err, null, null));
};

// Fetch data with promise
const fetchWithPromise = () => {
  Promise.all([
    fetch(API_USER).then((res) => res.json()),
    fetch(API_POSTS).then((res) => res.json()),
  ])
    .then(([user, posts]) => {
      displayData(user, posts);
    })
    .catch((err) => {
      displayError("Failed to fetch data!");
    });
};

// Fetch data with async/await
const fetchWithAsyncAwait = async () => {
  try {
    const userResponse = await fetch(API_USER);
    const postsResponse = await fetch(API_POSTS);

    const user = await userResponse.json();
    const posts = await postsResponse.json();

    displayData(user, posts);
  } catch (error) {
    displayError("Failed to fetch data!");
  }
};

// Event listeners
document.getElementById("loadCallback").addEventListener("click", () => {
  fetchWithCallback((err, user, posts) => {
    if (err) {
      displayError("Failed to fetch data!");
    } else {
      displayData(user, posts);
    }
  });
});

document
  .getElementById("loadPromise")
  .addEventListener("click", fetchWithPromise);
document
  .getElementById("loadAsync")
  .addEventListener("click", fetchWithAsyncAwait);
