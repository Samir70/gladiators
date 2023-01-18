<script setup>


</script>


<template>

<div id="dashboard">
  <h1>Gladiator Dashboard</h1>

<br>

  <!-- Navigation -->
  <div class="glass_bubble" style="width: 30vmin;
    height: 90vmin; float:left;">
    <p>navigation</p>
 <!--
"dashboard nav"
- profile
- logout
- spotify
- local weather
- date/time
-->
  </div>

  <div class="glass_bubble" style="width: 30vmin;
    height: 90vmin; float:right;">
    <p>Utilities</p>
  </div>

    <!-- exersice catalogues -->
    <!-- <div class="background"> -->


       <!-- <div class="glass_bubble">
           <div class="innercard">
               <div class="exercise_catalogue_button"> -->
                    <!-- <button>
                        <h2>Exercise Catalogue</h2>
                    </button> -->
               <!-- </div>
           </div>
       </div> -->

<!-- Exercise catalogue -->
 <div class="glass_bubble" style="width: 60vmin;
    height: 30vmin; margin-left: auto;
  margin-right: auto;">
<p>catalogue</p>
</div>


 
   <br>


  <div class="glass_bubble" style="position: relative; width: 60vmin;
    height: 55vmin; margin-left: auto;
  margin-right: auto;">
    <p>current workout</p>
  </div>

</div>
</template>




<style scoped>

#dashboard{
    width: 95vw;
}

body, .glass_bubble::before {
    background-position: 40%;
    background-size: cover;
    background-attachment: fixed;
}

/* .background {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} */

h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: rgb(0, 0, 0);
}

h1 {
    font-size: 4vmin;
    letter-spacing: .6vmin;
    text-transform: uppercase;
}

h2 {
    font-size: 2.7vmin;
    letter-spacing: .3vmin;
}

.glass_bubble {
    /* position: relative;
    width: 70vmin;
    height: 50vmin; */
    background: rgba(255, 255, 255, 0.2);
    border: .1vmin solid rgba(219, 219, 219, 0.1);
    border-radius: 4vmin;
    overflow: hidden;
    box-shadow: 0 .5vmin 1vmin rgba(0, 0, 0, .4);
}

.glass_bubble::before {
    content: "";
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(4.5vmin);
    margin: -5vmin;
}


/* .innercard {
    position: relative;
    width: 70vmin;
    height: 50vmin;
    display: flex;
    justify-content: center;
    align-items: center;
} */

.text {
    position: absolute;
    top: 16vmin;
}

@media (min-width: 731px) {

    h1 {
        font-size: 3vmin;
    }

    h2 {
        font-size: 2.4vmin;
    }

    .card, .innercard {
        width: 60vmin;
        height: 45vmin;
    }

    .text {
        top: 15vmin;
    }
/* 
    .button {
        bottom: 16vmin;
    }

    button {
        width: 25vmin;
        height: 7vmin;
    } */
}

</style>