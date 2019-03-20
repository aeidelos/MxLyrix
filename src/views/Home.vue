<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout v-if="isMainPage" row wrap>
        <v-flex xs12>
          <v-card>
            <v-img
              class="white--text"
              height="55vh"
              src="https://i1.jpopasia.com/albums/4/56419_l5j.jpg"
            >
              <v-container grid-list-x1>
                <v-layout align-space-between justify-center column fill-height>
                  <v-flex>
                    <span class="headline">MUSIXXLYRICS</span>
                    <hr>
                  </v-flex>
                  <v-flex style="margin-top:15vh;">
                    <v-text-field
                      dark
                      class="mx-3"
                      flat
                      label="Search"
                      append-icon="search"
                      solo-inverted
                    ></v-text-field>
                  </v-flex>
                    <span style="padding:3%;">
                      Search lyrics, get an automated translation
                    in Japanese, English and Indonesian.
                    We also need your contribution too~
                    </span>
                  <v-flex>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-if="isMainPage || isNewLyrics" row wrap>
        <v-subheader>New Lyrics</v-subheader>
      </v-layout>

      <v-layout v-if="isMainPage || isNewLyrics" row wrap>
        <v-flex v-for="release in getRelease" v-bind:key="release.title.en" xs12 md4>
          <v-card :color="getColorName(release.color)" class="white--text"
                  @click="handleClick(release)">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="release.img"
                  height="18.5vh"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ release.artist.name }}</div>
                    <div>{{ release.title.jp }}</div>
                    <div>{{ release.release_date }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-if="isMainPage || isTrending" row wrap>
        <v-subheader>Weekly Trending</v-subheader>
      </v-layout>

      <v-layout v-if="isMainPage || isTrending" row wrap>

        <v-flex v-for="release in getTrending" v-bind:key="release.title.en" xs12 md4>
          <v-card :color="getColorName(release.color)" class="white--text"
                  @click="handleClick(release)">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="release.img"
                  height="17.5vh"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ release.artist.name }}</div>
                    <div>{{ release.title.jp }}</div>
                    <div>{{ release.release_date }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-if="isMainPage || isPopular" row wrap>
        <v-subheader>Popular All The Time</v-subheader>
      </v-layout>

      <v-layout  v-if="isMainPage || isPopular" row wrap>
        <v-flex v-for="release in getPopular" v-bind:key="release.title.en" xs12 md4>
          <v-card :color="getColorName(release.color)" class="white--text"
                  @click="handleClick(release)">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="release.img"
                  height="17.5vh"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ release.artist.name }}</div>
                    <div>{{ release.title.jp }}</div>
                    <div>{{ release.release_date }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout v-if="isFavorite" row wrap>
        <v-subheader>Popular All The Time</v-subheader>
      </v-layout>

      <v-layout  v-if="isFavorite" row wrap>
        <v-flex v-for="release in getFavorite" v-bind:key="release.title.en" xs12 md4>
          <v-card :color="getColorName(release.color)" class="white--text"
                  @click="handleClick(release)">
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="release.img"
                  height="17.5vh"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ release.artist.name }}</div>
                    <div>{{ release.title.jp }}</div>
                    <div>{{ release.release_date }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

import data from '../data/index';

export default {
  created() {
    const query = this.$route.query.page;
    if (query !== undefined) {
      this.mode = query;
    }
  },
  data() {
    return {
      mode: null,
    };
  },
  components: {
  },
  computed: {
    getRelease() {
      return data.release;
    },
    getPopular() {
      return data.popular;
    },
    getFavorite() {
      return data.favorite;
    },
    getTrending() {
      return data.trending;
    },
    isMainPage() {
      return this.mode === null;
    },
    isNewLyrics() {
      return this.mode === 'new';
    },
    isPopular() {
      return this.mode === 'popular';
    },
    isTrending() {
      return this.mode === 'trending';
    },
    isFavorite() {
      return this.mode === 'favorite';
    },
  },
  methods: {
    getColorName(id) {
      return `${this.$color[id]} darken-2`;
    },
    handleClick(payload) {
      this.$router.push({ name: 'lyrics', params: { songs: payload } });
    },
  },
};
</script>
