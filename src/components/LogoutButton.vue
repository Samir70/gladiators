<script setup>
import { store } from "../store";
import { useRouter } from 'vue-router';
const router = useRouter()

const logout = () => {
    store.commit("logout")
    router.push('/')
}
</script>

<template>
    <button @click="logout">
        <p>Log Out</p>
    </button>
</template>

<style>

</style>