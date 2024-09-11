import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delayInput = form.elements.delay.value;
  const selectedState = form.elements.state.value;

  const delay = parseInt(delayInput, 10);


  createPromise(delay, selectedState)
    .then((ms) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${ms}ms`,
      });
    })
    .catch((ms) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${ms}ms`,
      });
    });
});


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
