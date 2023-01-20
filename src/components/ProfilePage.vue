<script setup>
import GlassBubble from './GlassBubble.vue';


</script>

<template>
  <div id="profilecontainer">
    <GlassBubble>
      <div id="homebutton" style="display:inline-block;">

        <button class="button" style="width:120px" @click="$router.push('dashboard')">
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

    <div id="usersettings">
      <GlassBubble id="userinfo">

        <h4> <u>User Info</u> </h4>
        <h5> My goal is to: </h5>
        <!-- <form>
          <label for="goal"> <input type="text" id="goal" name="goal">
          </label>
        </form> -->

        <h5> My experience level is: </h5>
          <form>
      <select>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="c">C</option>
       
      </select>
    </form>
       
        <h5> Workout Preference: </h5>


      </GlassBubble>

      <GlassBubble id="accountsettings">
        <h4> <u> Account Settings </u> </h4>
        <button class="button" @click="$router.push('Update')">
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
  width: 400px;
  height: 450px;
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
  height: 290px;
}

#accountsettings {
  width: 300px;
  height: 150px;
}

#usersettings {
  display: inline-block;
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
</style>