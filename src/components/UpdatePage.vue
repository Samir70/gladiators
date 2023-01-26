<script setup>
import GlassBubble from './GlassBubble.vue';
import { ref } from "vue";
import { store } from "../store"

//current user
const user = ref(store.state.user)

//experience v-model
let experience = ref("")
//equipment v-model
let equipmentStatus = ref("");

let currentPassword = ref("")
let newPassword = ref("")
let confirmPassword = ref("")
let updateMessage = ref("")
// let completedPassForm = ref(currentPassword.value == "") // || newPassword.value === "" || confirmPassword.value === "")


const changePassword = async () => {
    if (currentPassword.value === user.value.password) {
        if (newPassword.value === confirmPassword.value) {
            let result = await fetch(`/.netlify/functions/updatePassword`, {
                method: "POST",
                body: JSON.stringify({ password: newPassword.value, username: user.value.username, currentPass: currentPassword.value, confirmPass: confirmPassword.value })
            }).then(response => console.log(response))
            updateMessage.value = "Password updated!"
        } else {
            updateMessage.value = "New passwords do not match. Please try again."
        }} else {
        //current pass is incorrect
        updateMessage.value = "Incorrect password. Please try again."
    }
}

//update equipment
const updateEquipment = async () => {
    let result = await fetch(`/.netlify/functions/updateEquipment`, {
        method: "POST",
        body: JSON.stringify({ equipped: equipmentStatus.value, username: user.value.username })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
    store.commit("updateEquipment", equipmentStatus.value)


}

//update experience
const updateExperience = async () => {
    //get the true button
    let result = await fetch(`/.netlify/functions/updateExperience`, {
        method: "POST",
        body: JSON.stringify({ experience: experience.value, username: user.value.username })
    }).then(function (response) { return response.json() }).then(function (data) { console.log(data.msg) })
    store.commit("updateExperience", experience.value)
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
                <fieldset>
                    <h2> Change your password </h2>
                    <input type="password" v-model="currentPassword" id="current-password" name="current-password"
                        required>
                    <label for="current-password"> Current Password</label>
                    <br>
                    <input type="password" v-model="newPassword" id="new-password" name="new-password" required>
                    <label for="new-password"> New Password</label>
                    <br>
                    <input type="password" v-model="confirmPassword" id="confirm-password" name="confirm-password"
                        required>
                    <label for="confirm-password"> Confirm New Password</label><br>
                    <div id="passwordUpdateComments">
                        <p id="updateMessageContainer" v-if="updateMessage"> {{ updateMessage }}</p>
                        <p></p>

                    </div>
                    <input v-bind:disabled="currentPassword === '' || newPassword === '' || confirmPassword === ''"
                        v-on:click="changePassword" type="submit" value="Submit" id="passwordSubmitButton">
                    <!-- <div id="passwordmessage">{{ passwordMessage }}</div> to do -> return message-->
                </fieldset>
            </GlassBubble>

            <GlassBubble id="aboutcontainer">
                <h2> About you </h2>
                <fieldset id="experiencechangebox">
                    <h1> Your experience level </h1>
                    <input type="radio" v-model="experience" name="experienceselection" id="beginner"
                        value="B">Beginner<img class=toggles src="/beginner.png">
                    <input type="radio" v-model="experience" name="experienceselection" id="intermediate"
                        value="I">Intermediate<img class=toggles src="/intermediate.png">
                    <input type="radio" v-model="experience" name="experienceselection" id="advanced"
                        value="A">Advanced<img class=toggles src="/advanced.png">
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

                <fieldset id="equipmentchangebox">
                    <h1>Equipment access</h1><br>
                    <input type="radio" v-model="equipmentStatus" name="equipmentselection" id="notequipped"
                        value="false">No<img class=toggles src="/noequipment.png">
                    <input type="radio" v-model="equipmentStatus" name="equipmentselection" id="equipped"
                        value="true">Yes <img class=toggles src="/equipment.png">
                    <div id="equipmentSelectionComments">
                        <p v-if="equipmentStatus === 'true'">You do have access to equipment/facilities. </p>
                        <p v-if="equipmentStatus === 'false'">You do not have access to equipment/facilities.</p>
                        <p v-if="equipmentStatus == ''"> Select an option to update your equipment preference.</p>
                    </div>
                    <button id=equipmentUpdateButton v-bind:disabled="equipmentStatus === ''" v-on:click="updateEquipment">
                        Update</button><br>
                </fieldset><br>

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


