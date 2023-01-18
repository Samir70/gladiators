<script setup>


</script>


<template>
  <h1>Gladiator Dashboard</h1>


  <div>
 <!--
"dashboard nav"
- profile
- logout
- spotify
- local weather
- date/time
-->
  </div>

    <!-- exersice catalogues -->
    <div class="background">
       <div class="card">
           <div class="innercard">
               <div class="button">
                    <button>
                        <h2>Exercise Catalogue</h2>
                    </button>
               </div>
           </div>
       </div>
   </div>
 


  <div>
    <h2>My current workout</h2>
    <!-- has the 4 buttons -->
  </div>


  <div>
    <h3>Utilities</h3>
  </div>


</template>

<style scoped>

* {
    background: url("");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, .card::before {
    background-position: 40%;
    background-size: cover;
    background-attachment: fixed;
}

.background {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: rgb(206, 206, 206);
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

.card {
    position: relative;
    width: 70vmin;
    height: 50vmin;
    background: rgba(255, 255, 255, 0.2);
    border: .1vmin solid rgba(219, 219, 219, 0.1);
    border-radius: 4vmin;
    overflow: hidden;
    box-shadow: 0 .5vmin 1vmin rgba(0, 0, 0, .4);
}

.card::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(4.5vmin);
    margin: -5vmin;
}

.innercard {
    position: relative;
    width: 70vmin;
    height: 50vmin;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    position: absolute;
    top: 16vmin;
}

.button {
    position: absolute;
    bottom: 18vmin;
}

button {
    width: 30vmin;
    height: 8vmin;
    background: rgb(0, 0, 0);
    border: none;
    border-radius: 5vmin;
    outline: transparent;
    cursor: pointer;
}

button:hover {
    background: rgb(126, 126, 126);
    box-shadow: 0 0 .5vmin #fff;
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

    .button {
        bottom: 16vmin;
    }

    button {
        width: 25vmin;
        height: 7vmin;
    }
}

</style>