let darkMode = false;
 
if (darkMode) {
  document.body.style.background = "black";
  document.body.style.color = "white";
} else {
  document.body.style.background = "white";
  document.body.style.color = "black";
}
const body = document.body;
const button = document.getElementById("themeToggle");
 
button.addEventListener("click", () => {
  body.classList.toggle("dark");
});
const gallery = document.getElementById("gallery");
gallery.addEventListener("mouseover", () => {
  gallery.src = "image2.jpg";
});
gallery.addEventListener("mouseout", () => {
  gallery.src = "image1.jpg";
});
</script>
