<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from "vue";
import { store } from "../store"
import { useRouter } from "vue-router";

//current user
const user = ref(store.state.user)

//for redirects
const router = useRouter()

//experience v-model
let experience = ref("")
//equipment v-model
let equipmentStatus = ref("");

//update equipment
const updateEquipment = async () => {
    let result = await fetch(`/.netlify/functions/updateEquipment`, {
        method: "POST",
        body: JSON.stringify({ equipped: equipmentStatus.value, username: user.value.username })
    }).then(response => response.json())
    store.commit("updateEquipment", equipmentStatus.value)
    router.push("dashboard")
}

//update experience
const updateExperience = async () => {
    //get the true button
    let result = await fetch(`/.netlify/functions/updateExperience`, {
        method: "POST",
        body: JSON.stringify({ experience: experience.value, username: user.value.username })
    }).then(response => console.log(response))
    store.commit("updateExperience", experience.value)
    const equipmentDiv = document.getElementById("equipmentcontainer")
    equipmentDiv.style.display="block";
}
</script>

<template>
    <GlassBubble id="aboutcontainer">
        <h1> Welcome {{ user.username }}</h1>
        <h2> About you </h2>
        <div id="experiencecontainer">
        <fieldset id="experiencechangebox">
            <h1> Your experience level </h1>
            <input type="radio" v-model="experience" name="experienceselection" id="beginner" value="B">Beginner<img
                class=toggles src="/beginner.png">
            <input type="radio" v-model="experience" name="experienceselection" id="intermediate"
                value="I">Intermediate<img class=toggles src="/intermediate.png">
            <input type="radio" v-model="experience" name="experienceselection" id="advanced" value="A">Advanced<img
                class=toggles src="/advanced.png">
            <div id="experienceSelectionComments">
                <p v-if="experience === 'B'">You have just started on your journey to becoming a champion. </p>
                <p v-if="experience === 'I'">You are a challenger and know most movements. </p>
                <p v-if="experience === 'A'">You are a champion and can handle advanced movements. </p>
                <p v-if="experience == ''"> Select an option to update your experience level. </p>
            </div>
            <button v-bind:disabled="experience === ''" v-on:click="updateExperience" id="experienceUpdateButton">
                Update</button><br>
        </fieldset><br>
        <!-- <span>You've chosen {{ experience }}</span><br><br> -->
    </div>
        <div id="equipmentcontainer" style="display:none">
        <fieldset id="equipmentchangebox">
            <h1>Equipment access</h1><br>
            <input type="radio" v-model="equipmentStatus" name="equipmentselection" id="notequipped"
                value="false">No<img class=toggles src="/noequipment.png">
            <input type="radio" v-model="equipmentStatus" name="equipmentselection" id="equipped" value="true">Yes <img
                class=toggles src="/equipment.png">
            <div id="equipmentSelectionComments">
                <p v-if="equipmentStatus === 'true'">You do have access to equipment/facilities. </p>
                <p v-if="equipmentStatus === 'false'">You do not have access to equipment/facilities. </p>
                <p v-if="equipmentStatus == ''"> Select an option to update your equipment preference.</p>
            </div>
            <button v-bind:disabled="equipmentStatus === ''" v-on:click="updateEquipment" id="equipmentUpdateButton">
                Update</button><br>
        </fieldset><br>
    </div>

    </GlassBubble>


</template>


<style scoped>
.toggles {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
}



#pagecontainer {
    width: 95vw;
}



</style>


