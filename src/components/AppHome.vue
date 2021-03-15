<template>
<div class="home">
<app-toolbar/>
<v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <section id="cars" class="text-center">
  <v-container>
  <h3>Book a car now</h3>
  <v-row>
  <v-col cols="4"
  v-for="car in cars"
  :key="car.name">
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
   
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      v-bind:src="car.imageurl"
    ></v-img>

    <v-card-title>Perodua Alza</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{car.rating}}
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
       RM {{car.price}}
      </div>

      <div>{{car.discription}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </v-container>

</section>
<app-footer></app-footer>
  </div>
</template>


<script>
// Step 1 : Import AppFooter and AppToolbar
import AppFooter from './AppFooter.vue';
import AppToolbar from './AppToolbar.vue';
export default {
  name: 'AppHome',
  components: {AppFooter, AppToolbar},
  data () {
return {
	cars:[
	{
		name:"Perodua Alza",
		location:"setapak",
		description:"Perodua Alza sesuai untuk 4 orang",
		price:"80 per day",
		rating:4,
		imageurl:"https://s4.paultan.org/image/2018/09/2018-Perodua-Alza-AV-facelift-1-e1536119391982.jpg"


	},
	{
		name:"Perodua Viva",
		location:"setapak",
		description:"Perodua Viva sesuai untuk 4 orang",
		price:"80 per day",
		rating:3.5,
		imageurl:"https://da4dkroembtou.cloudfront.net/wp-content/uploads/2014/06/vica1.jpg"


	},
	{
		name:"Perodua Saga",
		location:"Sri Rampai",
		description:"Perodua Saga sesuai untuk 4 orang",
		price:"80 per day",
		rating:4,
		imageurl:"https://www.proton.com/-/media/project/proton-group/proton/media/car-models/saga/2019-saga/exterior-interior/new-front-bumper-and-grille_mobile.ashx?h=500&w=640&hash=2502981D049553EA79E601D1AEBAD768CAC91CDD"


	},
	{
		name:"Perodua Preve",
		location:"Wangsa Maju",
		description:"Perodua Preve sesuai untuk 4 orang",
		price:"80 per day",
		rating:5,
		imageurl:"http://1.bp.blogspot.com/-E9XTbZdGers/T5bVDn_vykI/AAAAAAAABqQ/LY7AmG_LpAE/s1600/Preve%2B20.jpg"


	},
	],
        items: [
          {
            src: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          },
        ],
      }
   }
  // 2) declare appfooter and apptoolbar in components
  }

</script>

