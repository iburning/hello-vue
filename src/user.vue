<template>
  <div id="user">
    <h1>User {{ $route.params.user_id }}</h1>
    <p>
      <router-link to="/user/100/fans">Fans</router-link>
      <router-link to="/user/100/follow">Follow</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>
