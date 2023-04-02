export default defineNuxtRouteMiddleware((to, from) => {
  console.log('--- Analytics Middleware ---')
  console.log('from', from)
  console.log('to', to)
})
