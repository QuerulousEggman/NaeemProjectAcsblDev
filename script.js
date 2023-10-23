

let acc = document.getElementsByClassName("accordion_trigger");
let i;

for (i=0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /*Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let accordion_content = this.nextElementSibling;
    if (accordion_content.style.display === "block") {
      accordion_content.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      accordion_content.style.display = "block";
      this.setAttribute("aria-expanded", "true");

    }
  });
}