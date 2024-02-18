const themeToggler = document.querySelector(".dark-light-button");
const changeText = document.getElementById("dark-to-light-txt");
const input = document.getElementById("searchInput");
const searchButton = document.getElementById("search-btn");
const userName = document.getElementById("name");
const repos = document.getElementById("repos");
const folowers = document.getElementById("followers");
const following = document.getElementById("following");
const date = document.querySelector(".date");
const nameLink = document.querySelector(".name-link");
const profilePhoto = document.getElementById("profilePic");
const aboutInfo = document.querySelector(".about-information");
const locate = document.getElementById("loc");
const link = document.getElementById("lin");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");

const savedDarkMode = localStorage.getItem("dark-mode");
if (savedDarkMode === "true") {
  document.body.classList.add("dark-theme");
  changeText.innerHTML = "Light";
}

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkMode = document.body.classList.contains("dark-theme");

  window.localStorage.setItem("dark-mode", isDarkMode);

  changeText.innerHTML = isDarkMode ? "Light" : "Dark";
});

searchButton.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue) {
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        userName.innerHTML = data.name || "User not found";
        repos.innerHTML = data.public_repos;
        date.innerHTML = data.created_at;
        folowers.innerHTML = data.followers;
        following.innerHTML = data.following;
        nameLink.innerHTML = `@${data.login}`;
        profilePhoto.src = data.avatar_url;
        aboutInfo.innerHTML = data.bio || "Not Avalible";
        locate.innerHTML = data.location || "Not Avalible";
        link.innerHTML = data.html_url || "Not Avalible";
        twitter.innerHTML = data.twitter_username || "Not Avalible";
        company.innerHTML = data.company || "Not Avalible";
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  } else {
    alert("Empty input. Please enter a GitHub username.");
  }
});
