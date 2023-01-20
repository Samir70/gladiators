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
                <form id="password-form" action="THIS NEEDS TO BE DONE" method="post">
                    <input type="password" id="current-password" name="current-password" required>
                    <label for="current-password"> Current Password</label>
                    <br>
                    <input type="password" id="new-password" name="new-password" required>
                    <label for="new-password"> New Password</label>
                    <br>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                    <label for="confirm-password"> Confirm New Password</label>
                    <br><br>
                    <input type="submit" value="Submit">
                </form>

            </GlassBubble>


            <GlassBubble id="aboutcontainer">
                <h2> About you </h2>
                <div id="experience">
                    <h4 style="display:inline-block">Your experience level</h4><br>
                    <label>
                        <input id="selectedBeginner" type="checkbox" :value="false" v-model="selectedBeginner" :disabled="selectedBeginner"
                            @click="selectExperience" />
                        <span>Beginner <img class=toggles src="beginner.png"></span>
                    </label>

                    <label>
                        <input id="selectedIntermediate" type="checkbox" v-model="selectedIntermediate" :disabled="selectedIntermediate"
                            @click="selectExperience" />
                        <span>Intermediate <img class=toggles src="intermediate.png"></span>
                    </label>

                    <label>
                        <input id="selectedAdvanced" type="checkbox" v-model="selectedAdvanced" :disabled="selectedAdvanced"
                            @click="selectExperience" />
                        <span>Advanced <img class=toggles src="advanced.png"></span>
                    </label> <br>
                    <button id="experienceupdate"> Update</button>
                </div>

                <div id="equipment">
                    <h4 style="display:inline-block">Equipment access</h4><br>

                    <label>
                        <!-- checkbox, v-model links the model to userinput (here it is when a user checks the box (onclick) which then changes the value of v-model to false (triggers disabled)) -->
                        <input id="selectedUnequipped" type="checkbox" v-model="selectedUnequipped" :disabled="selectedUnequipped"
                            @click="selectEquipment" /> 
                        <span>No <img class=toggles src="noequipment.png"></span>
                    </label>

                    <label>
                        <input id="selectedEquipped" type="checkbox" :value="false" v-model="selectedEquipped" :disabled="selectedEquipped"
                            @click="selectEquipment" />
                        <span>Yes <img class=toggles src="equipment.png"></span> <br>
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

