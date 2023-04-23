const buttons = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const ratingComponent = document.querySelector('.rating-component');
const thankYou = document.querySelector('.thank-you');
const pointsSpan = document.querySelector('.points span');
let selectedButton = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (selectedButton !== null) {
      selectedButton.classList.remove('selected');
    }
    button.classList.add('selected');
    selectedButton = button;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedButton === null) {
    alert("Select a rating first.")
    return;
  }

  const selectedValue = parseInt(selectedButton.textContent);
  pointsSpan.textContent = selectedValue;

  ratingComponent.style.display = 'none';
  thankYou.classList.remove('hidden');
});