<template>
  <div>
    <h1>Страница новостей</h1>

    <b-row class="news-background gx-4">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="character of results" :key="character.id">
        <b-card no-body class="mx-auto border-card overflow-hidden news-card" style="max-width: 500px">
          <b-col>
            <b-card-img
              style="max-width: 340px"
              :src="character.image"
              alt="Image"
              class="card-img"
            ></b-card-img>
          </b-col>
          <b-col>
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
        </b-card>
      </div>
    </b-row>
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

.border-card:hover{
 transform: scale(1.02);
 }

.border-card {
  border-radius: 30px !important;
  box-shadow: 0px 10px 22px -2px rgba(34, 60, 80, 0.16);
}

.card-img {
  object-fit: cover;
  border-radius: 16px !important;
}
</style>