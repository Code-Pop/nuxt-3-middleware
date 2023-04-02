<script setup>
const isAuthenticated = useCookie('is-authenticated')
const currentUser = useCookie('current-user')

const router = useRouter()

const userInput = ref({
  username: '',
  password: ''
})

const loginUser = () => {
  if (
    userInput.value.username.length > 0 &&
    userInput.value.password.length > 0
  ) {
    isAuthenticated.value = 'true'
    currentUser.value = userInput.value.username
    router.push('/profile/' + userInput.value.username)
  }
}
</script>

<template>
  <form @submit.prevent>
    <input
      v-model="userInput.username"
      type="text"
      name="username"
      placeholder="Username"
      aria-label="Username"
      autocomplete="username"
      required
    />
    <input
      v-model="userInput.password"
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
      required
    />
    <button @click="loginUser" type="submit" class="contrast">Login</button>
  </form>
</template>

<style lang="scss" scoped></style>
