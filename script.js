const summaryContainer = document.querySelector('.summary__list');

const summaryList = async function () {
  try {
    const summary = await fetch('./data.json');
    const res = await summary.json();
    const markup = res
      .map(function (item) {
        return `
        <li class="summary__item summary__item--${item.category.toLowerCase()}">
            <p class="summary__name">${item.category}</p>
            <p class="summary__rating">${item.score} <span>/ 100</span></p>
        </li>
      `;
      })
      .join('');
    summaryContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }
};

summaryList();
