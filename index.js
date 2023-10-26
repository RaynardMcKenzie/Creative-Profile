var formButton = document.querySelector(".formButton");
 var myContactForm = document.querySelector(".myContactForm");
 var closeBtn = document.querySelector(".close");

console.log(formButton)

  formButton.addEventListener("click", () => {
            myContactForm.style.display = "flex";
      });

      closeBtn.addEventListener("click", () => {
        myContactForm.style.display = "none";
  });