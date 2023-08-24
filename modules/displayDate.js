import { DateTime } from './luxon.js';

const showTime = () => {
  const dateElement = document.querySelector('#date');

  const now = DateTime.now();

  const formate = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  dateElement.innerHTML = formate;
};

export default showTime;
