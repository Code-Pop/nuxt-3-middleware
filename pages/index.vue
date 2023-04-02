<script setup>
const isAuthenticated = useCookie('is-authenticated')
const currentUser = useCookie('current-user')
</script>

<template>
  <article class="grid">
    <div>
      <hgroup>
        <h1>Home</h1>
        <p>A minimalist home page</p>
      </hgroup>
      <p>Authenticated: {{ isAuthenticated }}</p>
      <p>Current User: {{ currentUser }}</p>
    </div>
    <div>
      <hgroup>
        <h2>Navigation</h2>
        <p>Simple navigation links for testing</p>
      </hgroup>
      <ul>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/"> Current User </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/undefined-user">
            Profile: Undefined User
          </nuxt-link>
        </li>
      </ul>
    </div>
  </article>
</template>
