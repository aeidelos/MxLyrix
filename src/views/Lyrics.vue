<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 md12 lg12>
          <v-img
            class="white--text"
            height="50vh"
            :src="songs.img"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ songs.artist.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
      </v-flex>
    </v-layout>
    <v-layout row class="my-2">
      <v-flex >
        <span class="grey--text"> {{ getTitle }}</span><br>
      </v-flex>
    </v-layout>
    <v-layout row class="my-2">
      <v-flex xs12 md12 lg12 align-center>
        <div class="text-xs-center">
          <v-chip :color="isJapanese" @click="handleChip('jp')">Japanese</v-chip>
          <v-chip :color="isIndonesia" @click="handleChip('id')">Indonesia</v-chip>
          <v-chip :color="isEnglish" @click="handleChip('en')"> English</v-chip>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-text>
            <span v-html="getText"></span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row class="my-3">
      <iframe align="middle" :src="songs.vid" width="100%" height="300px">
      </iframe>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Lyrics',
  props: {
    songs: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      language: 'en',
    };
  },
  computed: {
    isEnglish() {
      return this.language === 'en' ? 'lime' : undefined;
    },
    isJapanese() {
      return this.language === 'jp' ? 'lime' : undefined;
    },
    isIndonesia() {
      return this.language === 'id' ? 'lime' : undefined;
    },
    getText() {
      let text = '';
      if (this.language === 'en') {
        text = this.songs.lyrics.en;
      } else if (this.language === 'id') {
        text = this.songs.lyrics.id;
      } else if (this.language === 'jp') {
        text = this.songs.lyrics.jp;
      }
      return text.replace(new RegExp('\r?\n', 'g'), '<br />');
    },
    getTitle() {
      let title = '';
      if (this.language === 'en') {
        title = this.songs.title.en;
      } else if (this.language === 'id') {
        title = this.songs.title.id;
      } else if (this.language === 'jp') {
        title = this.songs.title.jp;
      }
      return title;
    },
  },
  methods: {
    handleChip(lang) {
      this.language = lang;
    },
  },
};
</script>
