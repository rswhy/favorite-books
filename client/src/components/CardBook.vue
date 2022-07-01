<script>
import { useBookStore } from "../stores/book";
import { mapActions } from "pinia";

export default {
  data () {
    return {
      title: "",
      authors: [],
      imageLink: "",
      rating: 0,
    }
  },
  props: ["book", "page"],
  methods: {
    ...mapActions(useBookStore, ['addFavorite']),
    async addFav () {
      try {
        let payload = {
          title: this.title,
          imageLink: this.imageLink,
          authors: this.authors,
          rating: this.rating,
        }
        this.addFavorite(payload)
        
      } catch (err) {
        swal("Error", "error", "error");
      }
    }
  },
  watch: {
    page: {
      handler(val) {
        if (val === "home") {
          this.title = this.book.volumeInfo.title;
          if (Array.isArray(this.book.volumeInfo.authors)) {
            if ((this.book.volumeInfo.authors).length > 4) {
              let temp = ((this.book.volumeInfo.authors).slice(0, 4))
              temp.push("etc")
              this.authors = temp.join(", ")
            } else {
              this.authors = (this.book.volumeInfo.authors).join(", ");
            }
          } else {
            this.authors = "Unknown"
          }
          this.imageLink = this.book.volumeInfo.imageLinks.thumbnail;
          this.rating = this.book.volumeInfo.averageRating ? this.book.volumeInfo.averageRating : 0

        } else {
          this.title = this.book.title;
          this.authors = this.book.authors;
          this.imageLink = this.book.imageLink;
          this.rating = this.book.rating
        }
      },

      immediate: true,
    },
  },
};
</script>

<template>
  <div class="card-book">
    <div class="small">
      <article class="book">
        <div class="pizza-box" style="border-bottom: darkcyan; margin-bottom: 0px; border: 0.1px solid #ece7e7; border-style: none none groove none">
          <img
            :src="imageLink"
            width="1500"
            height="1368"
            alt=""
       
          />
    
          <hr/>
          <hr/>
          <hr/>
        </div>
        
          

        <div class="book-content">
          <div style="flex: 1; justify-content: center;">
            <vue3-star-ratings style="padding: 10px;" class="book-rating" v-model="rating" starSize="15" :showControl="false" :disableClick="true" />
          </div>
          <h1 class="book-title">{{ title.length > 70 ? title.slice(0,70) + ".." : title }}</h1>
            <p class="book-desc"> Authors : {{authors}}</p>


        </div>
          <div style="margin-bottom: 15px; margin-left: 20px; flex: 1; justify-content: center;">

            <button class="book-save" type="button" v-if="page === 'home'" @click.prevent="addFav" >
                ❤️ Add to Favorite
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
  border: 2px solid #ece7e7;
  border-radius: 8px;
  overflow: hidden;
}

.book-content {
  padding: 16px 32px;
  flex: 4 1 1 1;
  align-items: center;
  justify-items: center;
  min-height: 250px;
  max-height: 500px;
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
  text-align: center;
}

.book-desc {
  margin: 0;
  text-align: center;
}

.book-metadata {
  margin: 0;
  flex: 1;
  align-content: flex-start;
  flex-direction: row;
}

.book-rating {
  margin: 0;
  left: 0;
  top: 0;
  flex: 1;
  align-items:flex-start;
}


.book-save {
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: center;
  padding: 6px 14px 6px 12px;
  border-radius: 4px;
  bottom: 0;
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
  min-height: 700px;
  box-shadow: 5px rgb(82, 91, 95);
}

.small {
  width: clamp(300px, 17%, 450px);
  padding: 24px;
  min-height: 700px;
}
</style>
