export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from)
  console.log('to', to)
})
