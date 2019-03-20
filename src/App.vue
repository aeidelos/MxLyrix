<template>
  <v-app id="inspire" >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="handleHomeRoute(null)">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleHomeRoute('favorite')">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Favorite Song</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleHomeRoute('new')">
          <v-list-tile-action>
            <v-icon>today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Weekly Release</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleHomeRoute('trending')">
          <v-list-tile-action>
            <v-icon>trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Weekly Trending</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleHomeRoute('popular')">
          <v-list-tile-action>
            <v-icon>trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Most Popular</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat fixed app dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <div>
        <v-toolbar-title @click="handleHomeRoute(null)">
          <v-icon>home</v-icon>
          <span class="title"> MX Lyrics</span>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <l-footer></l-footer>
  </v-app>
</template>

<script>

import LFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    LFooter,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    handleHomeRoute(data) {
      if (data === null) {
        this.$router.push({ name: 'home' });
      } else {
        this.$router.push({ name: 'home', query: { page: data } });
      }
    },
  },
};
</script>
