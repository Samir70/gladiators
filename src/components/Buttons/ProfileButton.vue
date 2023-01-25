<script setup>

</script>

<template>
    <button id="profile-button" @click="$router.push('profilepage')">
        <img id="profile_logo" src="/spartan-helmet.png">
        <p>Profile</p>
    </button>
</template>

<style scoped>
img {
    width: 75px;
    height: 50px;
    border-radius: 80px;
}

#profile-button {
    margin: 10px auto;
}
</style>
