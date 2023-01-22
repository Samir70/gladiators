<script setup>

</script>

<template>
    <button id="profile-button" @click="$router.push('profilepage')">
        <img id="profile_logo" src="/profile_logo.webp">
        <p>Profile</p>
    </button>
</template>

<style scoped>
img {
    width: 150px;
    height: 100px;
    border-radius: 80px;
}

#profile-button {
    margin: 10px auto;
}
</style>
