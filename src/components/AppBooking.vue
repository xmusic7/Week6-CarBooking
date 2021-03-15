	<template>
	  <div class="home">
	    <app-toolbar></app-toolbar>
	    <v-container>
	      <h1>this is a booking page</h1>
	      <v-card>
	        <v-text-field
	            label="Name"
	            v-model=
	          ></v-text-field>
	          <v-text-field
	          type
	            label="Email"
	          ></v-text-field>
	          <v-text-field
	            label="Phone no."
	          ></v-text-field>
	        
	        <v-btn>Book my car</v-btn>
	      </v-card>
	    </v-container>
	    <app-footer></app-footer>
	  </div>
	  
	</template>
	<script>
	import AppFooter from './AppFooter.vue';
	import AppToolbar from './AppToolbar.vue';
	export default {
	  name: 'AppBooking',
	  components: {AppFooter, AppToolbar},
	  data (){
	  	return{
	  		items:["Putrajaya", "Cyberjaya", "Bangi", "Kajang", "Puchong"],
	  		name:'',
	  		email:'',
	  		phone:'',
	  		senddate:'',
	  		returndate:'',
	  		sendplace:'',
	  		returnplace:''


	  	}
	  },
	methods: {
		buttonPress:function(){
			let url = 'hhttps://api.sheety.co/114fd996afc031391494916de4b6dd55/bookingSheets/sheet1'
			console.log('ok')
			console.log(this.name)
			console.log(this.email)
			console.log(this.phone)
			console.log(this.senddate)
			console.log(this.returndate)
			console.log(this.returnplace)
		}
	}

	// 2) declare appfooger and apptoolbar in components
	}
	  
	</script>