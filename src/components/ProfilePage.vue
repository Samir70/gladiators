<script setup>
import GlassBubble from './GlassBubble.vue';

import { store } from "../store"
import { ref } from "vue"

const user = ref(store.state.user)

</script>

<template>
  <div id="profilecontainer">
    <GlassBubble id="bannerbubble">
      <div id="homebutton" style="display:inline-block;">

        <button class="button" style="width:120px" @click="$router.push('dashboard')">
          <h2>Home</h2>
        </button>
      </div>
      <div style="display:inline-block;">
        <h1 v-if="user" id="profile-title"> Hi {{ user.username }}
        </h1>
      </div>
    </GlassBubble>

    <div id="body-container">
      <GlassBubble id="profmenu">

        <h4> <u>Info:</u> </h4>

        <!-- to display email: with users email -->
        <h5 v-if="user" id="infomenu">Email: {{ user.email }}</h5>
        <h5> My experience level is: </h5>
        <div v-if="user" id="experience">
          <h5 v-if="user.experience === 'B'"> Beginner </h5>
          <h5 v-if="user.experience === 'I'"> Intermediate </h5>
          <h5 v-if="user.experience === 'A'"> Advanced </h5>
        </div>

        <h5> Equipment: </h5>
        <div v-if="user" id="equipment">
          <h5 v-if="user.equipment === 'true'"> You have access to equipment </h5>
          <h5 v-if="user.equipment === 'false'"> You don't have access to equipment </h5>
        </div>
      </GlassBubble>

      <div id="userbutton-container" style="display:inline-block;">
        <div id="usersettings" style="display: flex; align-items: center;">
          <GlassBubble id="userbuttons">


            <div id="profbuttons">
              <br>
              <br>
              <button class="button" @click="$router.push('History')">
                <h4 id="history-button">History</h4>
              </button>
              <br>
              <br>
              <button class="button" @click="$router.push('Milestones')">
                <h4 id="milestone-button">Milestones</h4>
              </button>
              <br>
            </div>


          </GlassBubble>
        </div>

        <GlassBubble id="accountsettings">
          <h4> <u>Account settings</u> </h4>
          <button @click="$router.push('UpdateDetails')">
            <h5 id="account-button"> Update Details </h5>
          </button>

        </GlassBubble>
      </div>
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

#homebutton button {
  margin-left: -20px;
}

#profmenu {
  width: 400px;
  height: 450px;
  display: inline-block;
  color: #000000;
  align-content: center;
}

#history-button,
#milestone-button {
  font-size: 20px;
  padding: 10px;
  margin-block-start: 22px;
}

#profbuttons {
  display: block;
  flex-direction: column;
  width: 300px;

}

/* #userinfo {
  vertical-align: 50px;
  display: flex;
  flex-direction: column;
  width: fit-content;
} */

#userbuttons {
  margin: 0 auto;
}

#accountsettings {
  color: #000000;
  width: 320px;
  height: 150px;
}

#account-button {
  font-size: 12px;
}

#usersettings {
  display: inline-block;
}

button {
  width: 150px;
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

/* @media only screen and (max-width: 990px) {
  #profilecontainer {
  width: 85vw;
}

#bodycontainer {
  border-style: solid;
}


 

#profmenu {
  width: 400px;
  height: 450px;
  display: inline-block;
  color: #000000;
  align-content: center;
}

#userbuttons {
  margin: 0 auto;
}

#userbutton-container {}

#accountsettings {
  color: #000000;
  width: 320px;
  height: 150px;
}


} */
</style>