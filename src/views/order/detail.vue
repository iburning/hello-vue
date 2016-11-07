<template>
  <div id="order">
    <h1>order: {{ $route.params._id }}</h1>

    <order></order>
  </div>
</template>

<script>
export default {
  name: 'order'
}
</script>
