async function renderBooks(filter) {
    const booksWrapper = document.querySelector('.books');
    const books = getBooks();


    if(filter === 'LOW_TO_HIGH') {
        books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
    }
    else if (filter === 'HIGH_TO_LOW') {
        books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
    }
    else if (filter === 'RATING') {
        books.sort((a, b) => b.rating - a.rating);
    }
    

    const booksHtml = books.map((book) => {
    return ` <div class="book">
    <figure class="book__img--wrapper">
        <img
        class="book__img"
        src="${book.url}"
        alt=""
        />
    </figure>
    <div class="book__title">${book.title}</div>
    <div class="book__ratings">
        ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
    ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
</div> `;
    })
    .join('');

    booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice) {
    if(!salePrice) {
        return `$${originalPrice.toFixed(2)}`
    }
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}`
}


function ratingsHTML(rating) {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratingHTML += '<i class="fas fa-star"></i>';
    }
    if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    return ratingHTML;
}

function filterBooks (event) {
  renderBooks(event.target.value);
}

window.addEventListener('DOMContentLoaded', () => {
    renderBooks();
});



// FAKE DATA 

function getBooks() {
    return [
                 {
            id: 1, 
            title: "Crack the Coding Interview",
            url: "./assets/crack the coding interview.png",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id: 2,
            title: "Atomic Habits",
            url: "./assets/atomic habits.jpg",
            originalPrice: 39,
            salePrice: null,
            rating: 5,
        },
        {
            id: 3,
            title: "Cant hurt me",
            url: "./assets/david goggins.jpeg",
            originalPrice: 29,
            salePrice: 12,
            rating: 5,
        },
        {
            id: 4,
            title: "Deep Work",
            url: "./assets/deep work.jpeg",
            originalPrice: 44,
            salePrice: 19,
            rating: 4,
        },
    ]
    }
