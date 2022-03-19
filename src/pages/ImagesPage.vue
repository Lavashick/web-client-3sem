<template>
  <div>
    <h1>Галерея</h1>

   
<div align="center">
 <div class="inline" v-for="character of results" :key="character.id">
     <b-link :to="{ name: 'newsDetails', params: { id: character.id } }">
        <img class="inline-img"
      :src="character.image"
      width="300px"
      alt=""
    />
     </b-link>

    </div>
</div>
   

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImagesPage",
  data() {
    return {
      results: [],
      character: null,
    };
  },
  async created() {
    // добавление из json на страницу
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      this.results = res.data.results;
    } catch (e) {
      // отлов ошибки при добавлении
      console.error(e);
    }
  }
};
</script>

<style>
.inline {
    display: inline;
}

.inline-img {
    border-radius: 24px;
    margin: 8px;
    box-shadow: 0px 10px 22px -2px rgba(34, 60, 80, 0.16);
    border: 10px solid rgb(255, 255, 255);
}

.inline-img:hover {
    transform: scale(1.01);
}
</style>