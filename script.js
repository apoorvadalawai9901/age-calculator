const birthDateInput = document.querySelector('#birth-date');
const ageForm = document.querySelector('#age-form');
const resetButton = document.querySelector('#reset-button');
const result = document.querySelector('#result');
const errorMessage = document.querySelector('#error-message');
const today = new Date();

const todayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');

birthDateInput.max = todayString;

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  birthDateInput.setAttribute('aria-invalid', 'true');
  result.hidden = true;
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.hidden = true;
  birthDateInput.removeAttribute('aria-invalid');
}

function getLocalDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(0);
  date.setFullYear(year, month - 1, day);

  // Date normalizes impossible dates (like February 30), so verify the parts.
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function calculateAge(birthDate, currentDate) {
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // Borrow the actual number of days in the previous month when needed.
  if (days < 0) {
    months -= 1;
    days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function setAgeValue(id, value, unit) {
  document.querySelector(`#${id}`).textContent = String(value);
  document.querySelector(`#${id}-label`).textContent = value === 1 ? unit : `${unit}s`;
}

function getAgeMessage(years) {
  if (years < 1) return 'Your story is just beginning. Every day is a little milestone.';
  if (years < 13) return 'Growing, discovering, and becoming more you every single day.';
  if (years < 20) return 'A brilliant chapter of becoming. Your next adventure is yours to write.';
  if (years < 40) return 'Here’s to all you’ve become — and everything still waiting for you.';
  if (years < 65) return 'A lifetime of stories, with plenty more beautiful chapters ahead.';
  return 'Your years are a collection of stories, wisdom, and moments worth celebrating.';
}

ageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearError();

  if (!birthDateInput.value) {
    showError('Please enter your date of birth to calculate your age.');
    birthDateInput.focus();
    return;
  }

  const birthDate = getLocalDate(birthDateInput.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (!birthDate) {
    showError('That date doesn’t look valid. Please choose a real date.');
    birthDateInput.focus();
    return;
  }

  if (birthDate > currentDate) {
    showError('Your date of birth can’t be in the future. Please choose another date.');
    birthDateInput.focus();
    return;
  }

  const age = calculateAge(birthDate, currentDate);
  setAgeValue('years', age.years, 'year');
  setAgeValue('months', age.months, 'month');
  setAgeValue('days', age.days, 'day');
  document.querySelector('#age-message').textContent = getAgeMessage(age.years);
  result.hidden = false;
});

ageForm.addEventListener('input', clearError);

resetButton.addEventListener('click', () => {
  clearError();
  result.hidden = true;
  birthDateInput.removeAttribute('aria-invalid');
});
