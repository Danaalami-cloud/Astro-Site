const menuButton = document.getElementById("menu-button");
// const dropdown = document.querySelector(".absolute.right-0.z-10");
const dropdown = document.getElementById("dropdown");

menuButton.addEventListener("click", (event) => {
    event.preventDefault();
    dropdown.classList.toggle("hidden");
    const isHidden = dropdown.classList.contains("hidden");
    localStorage.setItem("dropdownHidden", isHidden);
});
    window.addEventListener("beforeunload", () => {
        dropdown.classList.add("hidden");
    });

const initialDropdownHidden = localStorage.getItem("dropdownHidden") === "true";
if (initialDropdownHidden) {
    dropdown.classList.add("hidden");
}