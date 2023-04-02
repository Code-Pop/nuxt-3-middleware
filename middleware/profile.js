export default defineNuxtRouteMiddleware((to, from) => {
  const currentUser = useCookie('current-user')
  const isAuthenticated = useCookie('is-authenticated')

  if (!isAuthenticated.value) {
    return navigateTo('/login')
  } else if (to.params.username !== currentUser.value) {
    return navigateTo('/profile/' + currentUser.value)
  }
})
