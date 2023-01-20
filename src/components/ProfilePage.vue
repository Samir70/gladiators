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
      <div style="display:inline-block;">
        <h1 id="profile-title">My Profile</h1>
      </div>
    </GlassBubble>

   
    <GlassBubble id="profmenu">
      <div id="profmenu">

        <br>
        <br>
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
        <button @click="$router.push('UpdateDetails')">
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

#profile-title {
  display: flex;
  justify-content: center;
  
}

/* #homebutton button {
  margin-left: -20px;
} */



#profmenu {
  /* display: grid; */
  width: 300px;
  height: 380px;
  display: inline-block;
}

#history-button,
#milestone-button {
  grid-column: 1/2;
  font-size: 20px;
  padding: 10px;
  width: 150px;

}


#userinfo {
  vertical-align: 70px;
  width: 300px;
  height: 190px;
}

#accountsettings {
  width: 300px;
  height: 180px;
}

#usersettings {
  display: inline-block;
}
</style>