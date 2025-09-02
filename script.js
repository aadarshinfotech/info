function addReview() {
    let review = prompt("Enter your review:");
    if (review) {
        let reviewList = document.getElementById("review-list");
        let newReview = document.createElement("p");
        newReview.innerHTML = `⭐⭐⭐⭐⭐ "${review}" - Anonymous`;
        reviewList.appendChild(newReview);
    }
}
