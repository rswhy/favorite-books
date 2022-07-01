<script>
import { RouterLink, RouterView } from 'vue-router'
import CardBox from '../components/CardBook.vue'
import { useBookStore } from "../stores/book";
import { mapActions, mapState } from "pinia";

export default {
  data () {
    return {
      page: "favorite"
    }
  },
  computed: {
    ...mapState(useBookStore, ['savedBooks']),
  },
  methods: {
    ...mapActions(useBookStore, ['fetchFavorite']),
    newTab () {
    window.open("https://www.linkedin.com/in/ratih-sanjaya-wahyuningrum/", "_blank")
    },
  },
  components: {
    RouterLink,
    RouterView,
    CardBox,
  },
  async created() {
    try {
      await this.fetchFavorite()
    } catch (err) {
      const error = err.response.statusText;
      swal("Error", error, "error");
    }
  },
  
};
</script>

<template>

  <div>
    <body>

        <!-- Masthead-->
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <!-- Page heading-->
                            <h1 class="mb-5" style="color:azure">Favorite Books</h1>
        
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Card Box -->
        <div class="container">
         <h2 class="mt-5 text-center">BOOK LIST</h2>
         <div class="card-grid">
           <CardBox v-for="book in savedBooks" :key="book.id" :book="book" :page="page"/>
         </div>
         <br/>
         <br/>
        </div>
       
        
        <!-- Footer-->
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="#!">About</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Contact</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; Ratih Sanjaya 2022. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a  onclick="newTab"><i class="bi-linkedin fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="https://www.twitter.com"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.instagram.com"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Bootstrap core JS-->
      
    </body>
  </div>


</template>

<style scoped>
@import '@/assets/base.css';

.card-grid {
display: grid;
 
grid-template-columns: repeat(4, 1fr);
 
grid-auto-rows: auto;
 
grid-gap: 1rem;
}


</style>
