
  document.addEventListener("DOMContentLoaded", function() {
    const servicesItems = document.querySelectorAll(".services-1");

    servicesItems.forEach(item => {
      item.addEventListener("click", function() {
        const content = this.querySelector(".accordion-content");
        content.style.display = content.style.display === "none" ? "block" : "none";
      });
    });
  });

