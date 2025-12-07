export const showSuccess = (element, message) => {
  const parentElement = element.parentNode;
  const hasSuccessElement = parentElement.querySelector(".success");

  if (!hasSuccessElement) {
    const newSucessElement = `<span class="success">${message}</span>`;
    parentElement.insertAdjacentHTML("beforeend", newSucessElement);
  }

  const successElement = parentElement.querySelector(".success");

  setTimeout(() => {
    successElement.remove();
  }, 1000);
}

export const showError = (element, message) => {
  const parentElement = element.parentNode;
  const hasErrorElement = parentElement.querySelector(".error-message");

  if (!hasErrorElement) {
    const newErrorElement = `<span class="error-message">${message}</span>`;

    parentElement.insertAdjacentHTML('beforeend', newErrorElement);
  }

  element.classList.add("invalid-info");

  const errorElement = parentElement.querySelector(".error-message");

  setTimeout(() => {
    element.classList.remove("invalid-info");
    errorElement.remove();
  }, 3000);
}