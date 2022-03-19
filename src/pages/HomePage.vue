<template>
  <div>
    <h1>Анонс новостей</h1>
    <v-row class="carousel-wrapper mx-auto col-sm-12 col-md-11 col-lg-8">
      <v-col>
        <b-carousel
          img-height="100"
          label-next=""
          label-prev=""
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <div v-for="character of results.slice(0, 3)" :key="character.id">
            <b-link :to="{ name: 'newsDetails', params: { id: character.id } }">
              <b-carousel-slide
                img-height="100"
                class="img-slide"
                :caption="character.name"
                :text="character.status"
                :img-src="imagesForCharacters[character.id]"
              >
              </b-carousel-slide>
            </b-link>
          </div>
        </b-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      results: [],
      slide: 0,
      imagesForCharacters: {
        1: "/images/1.jpg", // localhost/images/1.jpg
        2: "/images/2.jpg",
        3: "/images/3.jpg",
      },
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },

  async created() {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      this.results = res.data.results;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
.carousel-wrapper {
  max-width: 1000px;
}