<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from "vue";
import { store } from "../store"

//current user
const user = ref(store.state.user)

//for experience toggles
let selectedBeginner = ref(true);
let selectedIntermediate = ref(false);
let selectedAdvanced = ref(false);
//maybe these will actually need to be pulled out of the database for each account
//maybe would have to be 'selected({{user.experience}}) or something? and then have that =ref(true); we would initialise ref(false) for all 3 initially'
function selectExperience() {
    selectedBeginner.value = !selectedBeginner;
    selectedIntermediate.value = !selectedIntermediate;
    selectedAdvanced.value = !selectedAdvanced;
    //need to add a route to send this to the database to update
}
//for equipment toggles
let selectedUnequipped = ref(true);
let selectedEquipped = ref(false);
//if the value for equipped is selected, the toggle ref toggle is inverted
function selectEquipment() {
    selectedEquipped.value = !selectedEquipped;
    selectedUnequipped.value = !selectedUnequipped;
}
let currentPassword = ref("")
let newPassword = ref("")
let confirmPassword = ref("")


const changePassword = async () => {
    let result = await fetch(`/.netlify/functions/updatePassword`, {
        method: "POST",
        body: JSON.stringify({ password: newPassword.value, username: user.value.username, currentPass: currentPassword.value, confirmPass: confirmPassword.value })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
}

//update equipment
const updateEquipment = async () => {
    let result = await fetch(`/.netlify/functions/updateEquipment`, {
        method: "POST",
        body: JSON.stringify({ equipped: selectedEquipped.value, username: user.value.username })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
    //only thing to be returned would be a mesasge that says update.. though no necessary - maybe leave out
}

//update experience
const updateExperience = async () => {
    //get the true button
    let experienceLevel = null;
    if (selectedBeginner.value) {
        experienceLevel = "B"
    }
    else if (selectedIntermediate.value) {
        experienceLevel = "I"
    }
    else {
        experienceLevel = "A"
    }
    let result = await fetch(`/.netlify/functions/updateExperience`, {
        method: "POST",
        body: JSON.stringify({ experience: experienceLevel, username: user.value.username })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
}




</script>

<template>

    <div id="pagecontainer">
        <GlassBubble>
            <div id="homebanner" style="display:inline-block;">
                <button id="homebutton" @click="$router.push('dashboard')">
                    <h2>Home</h2>
                </button>
                <h1 id="updatepage-title">Your details</h1>
                <img id=bannericon src="/gladiator.png" alt="">
            </div>
        </GlassBubble>


        <div id=mainbody>
            <GlassBubble id="passwordchangecontainer">
                <h2> Change your password </h2>
                <input type="password" v-model="currentPassword" id="current-password" name="current-password" required>
                <label for="current-password"> Current Password</label>
                <br>
                <input type="password" v-model="newPassword" id="new-password" name="new-password" required>
                <label for="new-password"> New Password</label>
                <br>
                <input type="password" v-model="confirmPassword" id="confirm-password" name="confirm-password" required>
                <label for="confirm-password"> Confirm New Password</label><br>
                <!-- <div id="passwordmessage">{{ passwordMessage }}</div> to do -> return message-->
                <input v-on:click="changePassword" type="submit" value="Submit">

            </GlassBubble>


            <GlassBubble id="aboutcontainer">
                <h2> About you </h2>
                <div id="experience">
                    <h4 style="display:inline-block">Your experience level</h4><br>
                    <label>
                        <input id="selectedBeginner" type="checkbox" :value="false" v-model="selectedBeginner" :disabled="selectedBeginner"
                            @click="selectExperience" />
                        <span>Beginner <img class=toggles src="/beginner.png"></span>
                    </label>

                    <label>
                        <input id="selectedIntermediate" type="checkbox" v-model="selectedIntermediate" :disabled="selectedIntermediate"
                            @click="selectExperience" />
                        <span>Intermediate <img class=toggles src="/intermediate.png"></span>
                    </label>

                    <label>
                        <input id="selectedAdvanced" type="checkbox" v-model="selectedAdvanced" :disabled="selectedAdvanced"
                            @click="selectExperience" />
                        <span>Advanced <img class=toggles src="/advanced.png"></span>
                    </label> <br>
                    <button v-on:click="updateExperience" id="experienceupdate"> Update</button>
                </div>

                <div id="equipment">
                    <h4 style="display:inline-block">Equipment access</h4><br>

                    <label>
                        <!-- checkbox, v-model links the model to userinput (here it is when a user checks the box (onclick) which then changes the value of v-model to false (triggers disabled)) -->
                        <input id="selectedUnequipped" type="checkbox" v-model="selectedUnequipped" :disabled="selectedUnequipped"
                            @click="selectEquipment" /> 
                        <span>No <img class=toggles src="/noequipment.png"></span>
                    </label>

                    <label>
                        <input id="selectedEquipped" type="checkbox" :value="false" v-model="selectedEquipped" :disabled="selectedEquipped"
                            @click="selectEquipment" />
                        <span>Yes <img class=toggles src="/equipment.png"></span> <br>
                        <button id="equipmentupdate">Update</button>
                    </label>
                </div>

            </GlassBubble>
        </div>
    </div>
</template>


<style scoped>
.toggles {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
}

#passwordchangecontainer {
    display: inline-block;

}

input {
    width: 100px;
}

#aboutcontainer {
    display: inline-block;
}

#pagecontainer {
    width: 95vw;
}


#homebutton {
    position: relative;

}


#updatepage-title {
    display: inline-block
}

#bannericon {
    width: 100px;
    height: 100px;
    display: inline-block;
    position: relative;
    top: 20px;
}
</style>


