<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'first_comp',
  data() {
    return {
      msg: 'Hello!',
    };
  },
};
</script>