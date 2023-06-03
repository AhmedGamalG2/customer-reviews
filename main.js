let qualityContainer = document.querySelector('.quality');
let serviceContainer = document.querySelector('.service');
let experienceContainer = document.querySelector('.experience');
let priceContainer = document.querySelector('.price');
let staffContainer = document.querySelector('.staff');
let feedbackContainer = document.querySelector('textarea');
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
  } else fName.style.border = 'none';
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
  } else lName.style.border = 'none';
  let fullName = `${firstName} ${lastName}`;

  let qualityRate = document.querySelector('.quality span.selected')?.innerHTML;
  if (!qualityRate) {
    qualityContainer.style.borderLeft = '4px solid red';
    // qualityContainer.scrollIntoView();
    window.scroll({
      top: qualityContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else qualityContainer.style.borderLeft = 'none';

  let serviceRate = document.querySelector('.service span.selected')?.innerHTML;
  if (!serviceRate) {
    serviceContainer.style.borderLeft = '4px solid red';
    // serviceContainer.scrollIntoView();
    window.scroll({
      top: serviceContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else serviceContainer.style.borderLeft = 'none';

  let experienceRate = document.querySelector(
    '.experience span.selected'
  )?.innerHTML;
  if (!experienceRate) {
    experienceContainer.style.borderLeft = '4px solid red';
    // experienceContainer.scrollIntoView();
    window.scroll({
      top: experienceContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else experienceContainer.style.borderLeft = 'none';

  let priceRate = document.querySelector('.price span.selected')?.innerHTML;
  if (!priceRate) {
    priceContainer.style.borderLeft = '4px solid red';
    // priceContainer.scrollIntoView();
    window.scroll({
      top: priceContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else priceContainer.style.borderLeft = 'none';

  let staffRate = document.querySelector('.staff span.selected')?.innerHTML;
  if (!staffRate) {
    staffContainer.style.borderLeft = '4px solid red';
    // staffContainer.scrollIntoView();
    window.scroll({
      top: staffContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else staffContainer.style.borderLeft = 'none';

  let feedback = document.querySelector('textarea').value;
  if (!feedback) {
    feedbackContainer.style.border = '4px solid red';
    // feedbackContainer.scrollIntoView();
    window.scroll({
      top: feedbackContainer.offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
    return false;
  } else feedbackContainer.style.border = 'none';
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
