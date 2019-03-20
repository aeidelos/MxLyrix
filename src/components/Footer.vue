<template>
  <v-footer dark app>
    <v-spacer></v-spacer>
    <div> My Awesome Unpredictable Life &copy; {{ new Date().getFullYear() }}</div>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      link: {
        home: {
          title: 'Home',
          to: '/',
        },
        about: {
          title: 'About',
          to: '/',
        },
        terms: {
          title: 'Terms',
          to: '/',
        },
      },
      social: {
        facebook: {
          title: 'Facebook',
          to: '/',
        },
        linkedin: {
          title: 'Linkedin',
          to: '/',
        },
        twitter: {
          title: 'Twitter',
          to: '/',
        },
        github: {
          title: 'Github',
          to: '/',
        },
        reddit: {
          title: 'Reddit',
          to: '/',
        },
      },
    };
  },
};
</script>
