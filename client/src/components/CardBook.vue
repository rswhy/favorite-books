<script>

export default {
  props: ["book"],
};
</script>

<template>
  <div class="card-book">
    <div class="small">
      <article class="book">
        <div class="pizza-box">
          <img
            :src="book.volumeInfo.imageLinks.thumbnail"
            width="1500"
            height="1368"
            alt=""
          />
        </div>
        <div class="book-content">
          <h1 class="book-title">{{ book.volumeInfo.title.length > 70 ? book.volumeInfo.title.slice(0,70) + ".." : book.volumeInfo.title }}</h1>

          <p class="book-metadata">
            <span class="book-rating">★★★★<span>☆</span></span>
          </p>

          <p class="book-desc"> Authors : {{ (book.volumeInfo.authors).join(", ") }}</p>

          <button class="book-save" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <path
                d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                fill="currentColor"
              />
            </svg>
            Add to Favorite
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.book,
.pizza-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.pizza-box {
  flex: 3 1 30ch;
  height: calc(282px + 5vw);
  overflow: hidden;
}

img {
  max-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  object-position: 50% 50%;
}

.book {
  border: 2px solid #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
}

.book-content {
  padding: 16px 32px;
  flex: 4 1 40ch;
}

.book-tags {
  margin: 0 -8px;
}

.book-tag {
  display: inline-block;
  margin: 8px;
  font-size: 0.875em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--primary);
}

.book-title {
  margin: 0;
  font-size: 20px;
  font-family: "Roboto Slab", Helvetica, Arial, sans-serif;
}

.book-metadata {
  margin: 0;
}

.book-rating {
  font-size: 1.2em;
  letter-spacing: 0.05em;
  color: var(--primary);
}

.book-votes {
  font-size: 0.825em;
  font-style: italic;
  color: var(--lightgrey);
}

.book-save {
  display: flex;
  align-items: center;
  padding: 6px 14px 6px 12px;
  border-radius: 4px;
  border: 2px solid currentColor;
  color: var(--primary);
  background: none;
  cursor: pointer;
  font-weight: bold;
}

/* Body Layout */
* {
  box-sizing: border-box;
}

body {
  --primary: #e05d26;
  --grey: #454545;
  --lightgrey: #666;

  color: var(--grey);
  line-height: 1.55;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
}

.card-book {
  height: 600px;
  box-shadow: 5px rgb(160, 172, 176);

}

.small {
  width: clamp(300px, 17%, 450px);
  padding: 24px;
}
</style>
