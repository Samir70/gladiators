<script setup>


</script>


<template>

<div id="dashboard">
  <h1>Gladiator Dashboard</h1>

<br>


  <!-- Navigation -->
  <div class="glass_bubble" style="width: 30vmin;
    height: 90vmin; float:left;">

<br>
<button class="button"> 
    <img src="https://cdn.dribbble.com/users/1018252/screenshots/4659653/media/a2417f6c672fe11596822ea7c4cebcc8.png?compress=1&resize=400x300&vertical=top" style="width: 150px;
    height: 100px; border-radius: 80px;">
    <p>Profile</p>
    </button>

    <br>

    <button class="button"> 
    <img src="https://cdn.icon-icons.com/icons2/3685/PNG/512/spotify_logo_icon_229290.png" style="width: 100px;
    height: 100px; border-radius: 80px;">
     <p>Spotify</p>
    </button>

    <br>

    <button class="button"> 
    <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" style="width: 100px;
    height: 100px; border-radius: 80px;">
    <p>Weather</p>
    </button>

    <br>

    <button class="button">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6y2CpNlcrydpptu63X_yAyk_tIuF2sYByA&usqp=CAU" style="width: 100px;
    height: 100px; border-radius: 80px;">
    <p>date/time</p>
    </button>

  </div>


  <!-- Utilities -->
  <div class="glass_bubble" style="width: 30vmin;
    height: 90vmin; float:right;">
    <p>Utilities</p>

    <br>

<button class="button"> 
<p>Log Out</p>
</button>

<br>

<button class="button"> 
<p>User Guide</p>
</button>

<br>

<button class="button"> 
<p>Facilities Finder</p>
</button>

<br>

<button class="button"> 
<p>Leaderboard</p>
</button>

<br>

<button class="button"> 
<p>Lifting Calculator</p>
</button>

<br>

<button class="button"> 
<p>Stop Watch</p>
</button>
  </div>


<!-- Exercise catalogue -->
 <div class="glass_bubble" style="width: 60vmin;
    height: 30vmin; margin-left: auto;
  margin-right: auto;">
<button class="button">
    <p>Exercise Catalogue</p>
</button>
</div>


 
   <br>



  <div class="glass_bubble" style="position: relative; width: 60vmin;
    height: 55vmin; margin-left: auto;
  margin-right: auto;">
    <p>current workout</p>

    <br>

<button class="button"> 
<p>Random Workout Generator</p>
</button>

<br>

<button class="button"> 
<p>Workout Complete</p>
</button>

<br>

<button class="button"> 
<p>Clear All</p>
</button>

<p>(remove individual exercise button, for each, similar to like/unlike idea)</p>

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
    border-radius: 80px;
    /* padding: 10px 10px; */
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

.button {
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 80px;
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