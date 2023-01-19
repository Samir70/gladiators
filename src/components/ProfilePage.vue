<script setup>
import GlassBubble from './GlassBubble.vue';


</script>

<template>
  <GlassBubble>
    <div id="homebutton" style="display:inline-block;">
      <button>
        <h2>Home</h2>

      </button>
    </div>
    <div style="display:inline-block; float:right;">
      <h1 id="profile-title">My Profile</h1>
    </div>
  </GlassBubble>

  <GlassBubble id="profmenu">
    <div id="profmenu">

      <br>
      <button>
        <h4 id="goals-button">Goals</h4>
      </button>
      <br>
      <button>
        <h4 id="history-button">History</h4>
      </button>
      <br>
      <button>
        <h4 id="timesheet-button">Timesheet</h4>
      </button>
      <br>
      <button>
        <h4 id="calculator-button">Calculator</h4>
      </button>
    </div>
  </GlassBubble>

  <div id="usersettings">
    <GlassBubble id="userinfo">

      <h4> User Info </h4>

    </GlassBubble>

    <GlassBubble id="accountsettings">
      <h4> Account settings </h4>

    </GlassBubble>
  </div>


</template>

<style scoped>
#profmenu {
  width: 200px;
  height: 300px;
  display: inline-block;
}

#userinfo {
  vertical-align: 70px;
  width: 200px;
  height: 190px;
}

#accountsettings {
  width: 200px;
  height: 100px;
}

#usersettings {
  display: inline-block;
}

button {
  width: fit-content;
  margin: 2px auto;
  background-color: rgba(255, 255, 255, 0.248);
  border: none;
  color: black;
  padding: 1px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 80px;
}
</style>