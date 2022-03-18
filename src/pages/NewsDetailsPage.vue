<template>
  <div>
    <p>Персонаж №{{ character.id }}</p>

    <h1>{{ character.name }}</h1>

    <img
      class="mt-2 character-img"
      :src="character.image"
      width="300px"
      alt=""
    />
    <h3 class="mt-4">Эпизоды:</h3>
    <div class="news-card" v-for="episode of episodes" :key="episode.id">
      {{ episode.name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //   props: ["id", "character"],
  name: "NewsDetailsPage",
  data() {
    return {
      episodes: [],
      character: null,
    };
  },

  async created() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.test);

    try {
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/" + this.$route.params.id
      );
      this.character = res.data;

      for (const episodeUrlId in this.character.episode) {
        try {
          const res = await axios.get(this.character.episode[episodeUrlId]);
          this.episodes.push(res.data);
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      // отлов ошибки при добавлении
      console.error(e);
    }
  },
};
</script>


<style>
.character-img {
  border-radius: 24px;
}
</style>