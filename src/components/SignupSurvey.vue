<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from "vue";
import { store } from "../store"
import { useRouter } from "vue-router";

//for redirect
const router = useRouter()

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


//update equipment
const updateEquipment = async () => {
    let result = await fetch(`/.netlify/functions/updateEquipment`, {
        method: "POST",
        body: JSON.stringify({ equipped: selectedEquipped.value, username: user.value.username })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
    //only thing to be returned would be a mesasge that says update.. though no necessary - maybe leave out
    router.push("dashboard")
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

    const equipmentDiv = document.getElementById("equipment")
    equipmentDiv.style.display="block";
}


</script>

<template>
    <div id="maincontainer">
  <h1>Welcome {{ store.state.user.username }}</h1>
  <h2>Please tell us a bit about yourself.</h2>
  <GlassBubble id="aboutcontainer">
                <h2> About you </h2>
                <div id="experience">
                    <h4 style="display:inline-block">Your experience level</h4><br>
                    <label>
                        <input id="selectedBeginner" type="checkbox" :value="false" v-model="selectedBeginner"
                            :disabled="selectedBeginner" @click="selectExperience" />
                        <span>Beginner <img class=toggles src="/beginner.png"></span>
                    </label>

                    <label>
                        <input id="selectedIntermediate" type="checkbox" v-model="selectedIntermediate"
                            :disabled="selectedIntermediate" @click="selectExperience" />
                        <span>Intermediate <img class=toggles src="/intermediate.png"></span>
                    </label>

                    <label>
                        <input id="selectedAdvanced" type="checkbox" v-model="selectedAdvanced"
                            :disabled="selectedAdvanced" @click="selectExperience" />
                        <span>Advanced <img class=toggles src="/advanced.png"></span>
                    </label> <br>
                    <button v-on:click="updateExperience" id="/experienceupdate"> Confirm</button>
                </div>

                <div id="equipment" style="display:none">
                    <h4 style="display:inline-block">Equipment access</h4><br>

                    <label>
                        <!-- checkbox, v-model links the model to userinput (here it is when a user checks the box (onclick) which then changes the value of v-model to false (triggers disabled)) -->
                        <input id="selectedUnequipped" type="checkbox" v-model="selectedUnequipped"
                            :disabled="selectedUnequipped" @click="selectEquipment" />
                        <span>No <img class=toggles src="/noequipment.png"></span>
                    </label>

                    <label>
                        <input id="selectedEquipped" type="checkbox" :value="false" v-model="selectedEquipped"
                            :disabled="selectedEquipped" @click="selectEquipment" />
                        <span>Yes <img class=toggles src="/equipment.png"></span> <br>
                        <button v-on:click="updateEquipment" id="equipmentupdate">Confirm</button>
                    </label>
                </div>

            </GlassBubble>
        </div>

    
</template>

<style scoped>

.toggles {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
}

</style>