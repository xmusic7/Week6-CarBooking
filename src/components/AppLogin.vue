	<template>
	<div class="home">
	<app-toolbar></app-toolbar>
	<v-container>
	<h1>Login Page</h1>
	<v-text-field
		label="Username">
		</v-text-field>
		<v-text-field 
		label="Password"
		type="password">
		</v-text-field>
		<v-btn block color="primary">
			Login
		</v-btn>
	</v-container>
	<app-footer></app-footer>
	  </div>
	</template>

	<script>
	// Step 1 : Import AppFooter and AppToolbar
	import AppFooter from './AppFooter.vue';
	import AppToolbar from './AppToolbar.vue';
	export default {
	  name: 'AppLogin',
	  components: {AppFooter, AppToolbar}
	  // 2) declare appfooter and apptoolbar in components
	  }

	</script>

