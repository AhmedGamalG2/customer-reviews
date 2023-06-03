let quality = document.querySelectorAll('.quality span');
let service = document.querySelectorAll('.service span');
let experience = document.querySelectorAll('.experience span');
let price = document.querySelectorAll('.price span');
let staff = document.querySelectorAll('.staff span');
let fName = document.querySelector('.fName');
let lName = document.querySelector('.lName');
let selector = function (select) {
  for (let index = 0; index < select.length; index++) {
    select[index].addEventListener('click', function () {
      select.forEach((q) => q.classList.remove('selected'));
      select[index].classList.add('selected');
    });
  }
};
selector(quality);
selector(service);
selector(experience);
selector(price);
selector(staff);

let headers = new Headers();
headers.set('Content-Type', 'application/json');
async function addReview(rev) {
  const response = await fetch(
    `https://customer-reviews-api.onrender.com/reviews`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(rev),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData.status);
}
let submit = document.querySelector('button');
submit.addEventListener('click', function (e) {
  e.preventDefault();
  let firstName = fName.value;
  if (!firstName) {
    fName.style.border = '1px solid red';
    // fName.scrollIntoView();
    window.scroll({
      top: fName.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  }
  let lastName = document.querySelector('.lName').value;
  if (!lastName) {
    lName.style.border = '1px solid red';
    // lName.scrollIntoView();
    window.scroll({
      top: lName.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  }
  let fullName = `${firstName} ${lastName}`;
  let qualityRate = document.querySelector('.quality span.selected')?.innerHTML;
  let serviceRate = document.querySelector('.service span.selected')?.innerHTML;
  let experienceRate = document.querySelector(
    '.experience span.selected'
  )?.innerHTML;
  let priceRate = document.querySelector('.price span.selected')?.innerHTML;
  let staffRate = document.querySelector('.staff span.selected')?.innerHTML;
  let feedback = document.querySelector('textarea').value;
  let reviewData = {
    fullName,
    qualityRate,
    serviceRate,
    experienceRate,
    priceRate,
    staffRate,
    feedback,
  };
  addReview(reviewData);
});
