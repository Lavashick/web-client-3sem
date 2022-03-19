<template>
  <div>
    <h1>{{ character.name }}</h1>
    <p class="dop-info">Персонаж №{{ character.id }}</p>

    <v-row class="mx-auto">
      <v-col class="mx-auto details-img-wrapper col-sm-12 col-md-11 col-lg-8">
        <img class="details-img" src="/images/1.jpg" alt="" />
      </v-col>
    </v-row>

    <img
      class="mt-4 md-4 character-img"
      :src="character.image"
      width="300px"
      alt=""
    />

    <div class="char-info mx-auto">
      <p>Вид: {{ character.species }}</p>
      <p>Пол: {{ character.gender }}</p>
      <p>Статус: {{ character.status }}</p>
    </div>

    <h3 class="mt-4">Эпизоды:</h3>
    <div class="dop-info news-card" v-for="episode of episodes" :key="episode.id">
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

.dop-info {
  color: grey;
}

.details-img {
  width: 100%;
  border-radius: 24px;
}

.char-info {
  background-color: bisque;
  border-radius: 24px;
  padding: 16px 16px 8px 16px;
  min-width: 200px;
  max-width: 250px;
  margin: 24px;
}

</style>