export default defineNuxtRouteMiddleware((to, from) => {
  console.log('--- Profile Middleware')
  const isAuthenticated = useCookie('is-authenticated')
  const currentUser = useCookie('current-user')

  if (!isAuthenticated.value && !currentUser.value) {
    return navigateTo('/login')
  } else if (to.params.username !== currentUser.value) {
    return navigateTo(`/profile/${currentUser.value}`)
  }
})
