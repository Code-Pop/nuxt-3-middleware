<script setup>
definePageMeta({
  middleware: function (to, from) {
    const isAuthenticated = useCookie('is-authenticated')
    const currentUser = useCookie('current-user')

    if (isAuthenticated.value && currentUser.value) {
      return navigateTo('/profile/' + currentUser.value)
    }
  }
})
</script>

<template>
  <article class="grid">
    <div>
      <hgroup>
        <h1>Login</h1>
        <p>This is a simple login page.</p>
      </hgroup>
      <LoginForm />
    </div>
    <div></div>
  </article>
</template>

<style lang="scss" scoped></style>
