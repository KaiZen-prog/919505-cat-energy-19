var form = document.querySelector("form");
var formSubmitButton = document.querySelector(".button--submit");
var fields = form.querySelectorAll(".form__input:required");
var petNameField = form.querySelector("[name=pet-name]");
var petWeightField = form.querySelector("[name=pet-weight]");
var petAgeField = form.querySelector("[name=pet-age]");
var emailField = form.querySelector("[name=email]");
var phoneField = form.querySelector("[name=phone]");

var isStorageSupport = true;
var petNameStorage = "";
var petWeightStorage = "";
var petAgeStorage = "";
var emailStorage = "";
var phoneStorage = "";

try {
  petNameStorage = localStorage.getItem("pet-name");
  petWeightStorage = localStorage.getItem("pet-weight");
  petAgeStorage = localStorage.getItem("pet-age");
  emailStorage = localStorage.getItem("email");
  phoneStorage = localStorage.getItem("phone");
} catch (err) {
  isStorageSupport = false;
}

if (petNameStorage) {
  petNameField.value = petNameStorage;
}

if (petWeightStorage) {
  petWeightField.value = petWeightStorage;
}

if (petAgeStorage) {
  petAgeField.value = petAgeStorage;
}

if (emailStorage) {
  emailField.value = emailStorage;
}

if (phoneStorage) {
  phoneField.value = phoneStorage;
}

for (var i = 0; i < fields.length; i++) {
  if (!fields[i].value) {
    fields[i].focus();
    break;
  }
}
if (i === fields.length) {
  fields[i - 1].focus();
}

formSubmitButton.addEventListener("click", function (evt) {
  for (i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      fields[i].classList.add('form__input--error');
    }
  }

  if (i === fields.length && isStorageSupport) {
    console.log("111");
    localStorage.setItem("pet-name", petNameField.value);
    localStorage.setItem("pet-weight", petWeightField.value);
    localStorage.setItem("pet-age", petAgeField.value);
    localStorage.setItem("email", emailField.value);
    localStorage.setItem("phone", phoneField.value);
  }
});
