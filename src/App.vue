<template lang="pug">
	#app
		h2 Musica
		select(v-model="selectedCountry")
			option(v-for="country in countries" v-bind:value="country.value") {{ country.name }} - {{ country.value }}
		
		spinner(v-show="loading")

		ul
			artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>

import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
	name: 'app',
	data () {
		return {
			artists: [],
			countries: [
				{ name: "España", value: "spain"},
				{ name: "Argentina", value: "argentina"},
				{ name: "Colombia", value: "colombia"}
			],
			selectedCountry: "argentina",
			loading: true
		}
	},
	components:{
		Artist,
		Spinner
	},
	methods:{
		refreshArtists(){
			// llamo al this de esta clase, no al global
			const self = this 
			getArtists(this.selectedCountry).then( items => {
				self.loading = false
				self.artists = items
			} )		
		}
	},
	mounted: function(){
		this.refreshArtists()
	},
	// Ver cambios en variable
	watch: {
		selectedCountry(){
			this.refreshArtists()
		}
	}

}
</script>

<style lang="stylus">
#app
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px

h1, h2
	font-weight normal

ul
	list-style-type none
	padding 0

li
	display inline-block
	margin 0 10px

a
	color #42b983
</style>
