export function setupCounter(label, element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `${label} ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
