let reviews = document.querySelector('.reviews');
let headers = new Headers();
headers.set('Content-Type', 'application/json');
async function getReviews() {
  const response = await fetch(
    `https://customer-reviews-api.onrender.com/reviews`,
    {
      method: 'GET',
      headers: headers,
    }
  );
  const jsonData = await response.json();
  console.log(jsonData.newData);
  jsonData.newData.map((review) => {
    reviews.innerHTML += `<div class="rev">
    <div class="nameAndPhoto">
      <div>${review.fullName.slice('')[0].toUpperCase()}</div>
      <div>${review.fullName}</div>
    </div>
    <p class="fBack">
    ${review.feedback}
    </p>
    <div class="rates">
      <p>Quality Rate : ${review.qualityRate}</p>
      <p>Service Rate : ${review.serviceRate}</p>
      <p>Experience Rate : ${review.experienceRate}</p>
      <p>Price Rate : ${review.priceRate}</p>
      <p>Staff Rate : ${review.staffRate}</p>
    </div>
  </div>`;
  });
}
getReviews();
