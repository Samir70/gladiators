<script setup>
import GlassBubble from './GlassBubble.vue';


</script>

<template>
  <div id="profilecontainer">
    <GlassBubble>
      <div id="homebutton" style="display:inline-block;">

        <button @click="$router.push('dashboard')">
          <h2>Home</h2>
        </button>
      </div>
      <div style="display:inline-block; float:right;">
        <h1 id="profile-title">My Profile</h1>
      </div>
    </GlassBubble>

   
    <GlassBubble id="profmenu">
      <div id="profmenu">

        <!-- <br>
      <button>
        <h4 id="goals-button">Goals</h4>
      </button>
      <br> -->
        <br>
        <button @click="$router.push('History')">
          <h4 id="history-button">History</h4>
        </button>
        <br>
        <br>
        <button @click="$router.push('Milestones')">
          <h4 id="milestone-button">Milestones</h4>
        </button>
        <br>
        <!-- <button>
        <h4 id="calculator-button">Calculator</h4>
      </button> -->
      </div>
    </GlassBubble>

    <div id="usersettings">
      <GlassBubble id="userinfo">

        <h4> User Info </h4>
        <h5> My goal is to </h5>
        <h5> My experience level is </h5>
        <h5> Preference: </h5>

      </GlassBubble>

      <GlassBubble id="accountsettings">
        <h4> Account settings </h4>
        <button @click="$router.push('Update')">
          <h5> Update Details </h5>
        </button>

      </GlassBubble>
    </div>

  </div>
</template>

<style scoped>
#profilecontainer {
  width: 85vw;

}

#profmenu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 350px;
  display: inline-block;
}

#history-button,
#milestone-button {
  grid-column: 1/2;

}

#userinfo {
  vertical-align: 70px;
  width: 200px;
  height: 190px;
}

#accountsettings {
  width: 200px;
  height: 150px;
}

#usersettings {
  display: inline-block;
}
</style>