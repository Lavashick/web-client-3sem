<template>
  <div>
    <h1>Страница новостей</h1>

    <div class="news-card" v-for="character of results" :key="character.id">
      <b-card no-body class="border-card overflow-hidden">
        <b-row class="news-background" no-gutters>
          <b-col md="3">
            <b-card-img
              style="max-width: 340px"
              :src="character.image"
              alt="Image"
              class="card-img"
            ></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-body :title="character.name">
              <b-card-text>
                {{ character.species }}
              </b-card-text>
              <b-button variant="outline-primary" 
              :to="{ name: 'newsDetails', params: { id: character.id, character: character } }">
               <!-- В params пишутся параметры, которые нужно передать -->
                Подробнее
                </b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  
  data() {
    return {
      name: "NewsPage",
      results: [], // массив из json
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
.news-card {
  margin-top: 20px;
  width: 100%;
}

.news-background {
  background-color: rgb(244, 244, 244);
}

 
.border-card:hover{
 transform: scale(1.01);
 background-color: rgb(227, 227, 227);
 }

.border-card {
  border-radius: 30px !important;
}

.card-img {
  object-fit: cover;
}
</style>