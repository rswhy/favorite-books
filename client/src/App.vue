<script>
import { RouterLink, RouterView } from 'vue-router'
import CardBox from './components/CardBook.vue'
import { useBookStore } from "./stores/book";
import { mapActions, mapState } from "pinia";

export default {
  data () {
    return {
      keyword: "",
      page: "home"
    }
  },
  computed: {
    ...mapState(useBookStore, ['searchedBooks']),
  },
  components: {
    RouterLink,
    RouterView,
    CardBox,
  },
  methods: {
    ...mapActions(useBookStore, ['search']),
    async searchBook () {
      try {
        await this.search(this.keyword)
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
  }
  
};
</script>

<template>
  <div>
      <!-- Navigation-->
    <nav class="navbar navbar-light bg-light static-top">
        <div class="container">
            <RouterLink class="navbar-brand" to="#"><b>📘 Bookaholic</b></RouterLink>
            <RouterLink class="navbar-brand" to="/"><b>Home</b></RouterLink>
            <RouterLink class="btn btn-primary" to="/favorite-book">❤️ Favorite Books</RouterLink>
        </div>
        <hr/>
    </nav>
    <RouterView/>
  </div>




</template>

<style>
@import '@/assets/base.css';

.card-grid {
display: grid;
 
grid-template-columns: repeat(4, 1fr);
 
grid-auto-rows: auto;
 
grid-gap: 1rem;
}


</style>
