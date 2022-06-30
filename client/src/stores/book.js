import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert';

export const useBookStore = defineStore({
  id: 'book',
  state: () => ({
    baseUrl: "https://favorite-book.herokuapp.com/books",
    searchedBooks: [],
    savedBooks: []
  }),
  actions: {
    async search(keyword) {
      try {
         const response = await axios.get("https://www.googleapis.com/books/v1/volumes", {
           params: {
            q: keyword,
            maxResults: 20
           }
         })

        this.searchedBooks = response.data.items;
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async fetchFavorite() {
      try {
        const response = await axios.get("https://favorite-book.herokuapp.com/books")

        this.savedBooks = response.data.items;
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
  }
})
