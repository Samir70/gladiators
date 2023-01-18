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
               <div class="text">
                    <h1>Catalogues</h1>
               </div>
               <div class="button">
                    <button>
                        <h2>All Exercises</h2>
                    </button>
                    <br>
                    <button>
                        <h2>Cardio</h2>
                    </button>
                    <br>
                    <button>
                        <h2>Strength</h2>
                    </button>
                    <br>
                    <button>
                        <h2>Flexibility</h2>
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
    background: url("https://t3.ftcdn.net/jpg/03/50/81/90/360_F_350819094_ASJQuvwGOy4BpQwb096TntNE9J1D4UP5.jpg");
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
    background: rgb(64, 93, 189);
    border: none;
    border-radius: 5vmin;
    outline: transparent;
    cursor: pointer;
}

button:hover {
    background: rgb(92, 128, 226);
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