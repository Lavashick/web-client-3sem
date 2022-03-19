<template>
  <div>
    <h1>Анонс новостей</h1>
    <b-carousel
      label-next=""
      label-prev=""
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="character of results.slice(0, 3)" :key="character.id">
        <b-link :to="{ name: 'newsDetails', params: { id: character.id } }">
     <b-carousel-slide
            class="img-slide"
            :caption="character.name"
            :text="character.status"
            :img-src="imagesForCharacters[character.id]"
          >
          </b-carousel-slide>
        </b-link>
     
        
      </div>
    </b-carousel>
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
        1: "/images/rick.jpg", // localhost/images/rick.jpg
        2: "/images/summer.jpg",
        3: "/images/morty.jpg"
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
/* .img-slide {
  height: 400px;
} */
</style>