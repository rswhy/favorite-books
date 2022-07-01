<script>
import { RouterLink, RouterView } from 'vue-router'
import CardBox from '../components/CardBook.vue'
import { useBookStore } from "../stores/book";
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
  },
  async created() {
    try {
      if (this.keyword === "") {
        await this.search("novel")
      }
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
                            <h1 class="mb-5" style="color:azure">Welcome to Bookaholic. The world's biggest library</h1>
        
                            <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <!-- Email address input-->
                                <div class="row">
                                    <div class="col">
                                        <input class="form-control form-control-lg" id="emailAddress" type="text" v-model="keyword" placeholder="Book Title"/>
                                    </div>
                                    <div class="col-auto"><button class="btn btn-primary btn-lg" id="submitButton" @click.prevent="searchBook">Search</button></div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Card Box -->
        <div class="container">
         <h2 class="mt-5 text-center">BOOK LIST</h2>
         <div class="card-grid">
           <CardBox v-for="book in searchedBooks" :key="book.id" :book="book" :page="page"/>
         </div>
          <br/>
         <br/>
        </div>
        
        <!-- Testimonials-->
        <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="../assets/img/tes3.jpg" alt="..." />
                            <h5>Margaret E.</h5>
                            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="../assets/img/tes2.jpg" alt="..." />
                            <h5>Fred S.</h5>
                            <p class="font-weight-light mb-0">"Bookaholic is amazing. I've been using it for years."</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="../assets/img/tes.jpg" alt="..." />
                            <h5>Sarah W.</h5>
                            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to Action-->
        <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4" style="color:azure">Ready to get more?</h2>
                        <!-- Signup form-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form class="form-subscribe" id="contactFormFooter">
                            <!-- Email address input-->
                            <div class="col">
                                <div class="col">
                                    <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" />
                                   
                                </div>
                                <div class="col-auto" style="margin: 13px"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">SEND ME SPECIAL OFFER</button></div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                  <div class="fw-bolder">Form submission successful!</div>
                                </div>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </section>
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
                                <a href="https://www.linkedin.com/in/ratih-sanjaya-wahyuningrum"><i class="bi-linkedin fs-3"></i></a>
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
    <RouterView />

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
