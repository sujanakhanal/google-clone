const dark_toggle = document.querySelector(".dark-bg i");
const logo = document.getElementById("google-logo");

dark_toggle.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    dark_toggle.classList.replace("fa-moon", "fa-sun");
    logo.src = "./Images/google1.png";
    localStorage.setItem("theme", "dark");
  } else {
    dark_toggle.classList.replace("fa-sun", "fa-moon");
    logo.src = "./Images/google-img.png";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  dark_toggle.classList.remove("fa-moon");
  dark_toggle.classList.add("fa-sun");
  logo.src = "./Images/google1.png";
}

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (query === "") return;
  const googleURL = `https://www.google.com/search?q=${encodeURIComponent(
    query,
  )}`;
  window.location.href = googleURL;
});

document
  .querySelector(".fa-magnifying-glass")
  .addEventListener("click", () => form.requestSubmit());
