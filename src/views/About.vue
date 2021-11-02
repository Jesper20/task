<template>
    <h3>Version 1.0.0</h3>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go Back</router-link>
</template>

<script>
export default {
  name: 'About',
  inheritAttrs: false, // disable 'non-props' warning
};
</script>
