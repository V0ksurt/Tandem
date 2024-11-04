<template>
	<HomeView></HomeView>
	<AboutTheStudio></AboutTheStudio>
	<Portfolio></Portfolio>
	<ServicesAndPrices></ServicesAndPrices>
	<Reviews></Reviews>
</template>

<script>
import AboutTheStudio from './AboutTheStudio.vue'
import Portfolio from './Portfolio.vue'
import ServicesAndPrices from './ServicesAndPrices.vue'
import HomeView from './HomeView.vue';
import Reviews from './Reviews.vue';

export default {
	name: 'PageKit',
	components: { HomeView, AboutTheStudio, Portfolio, ServicesAndPrices, Reviews},

	data: function () {
		return {
			props: null,
		}
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

@font-face {
	font-family: 'Poiret One', sans-serif;
	src: url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
}

@font-face {
	font-family: 'Inter', sans-serif;
	src: url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
}

.poiret-one-regular {
	font-family: 'Poiret One', sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 24px;
}

.poiret-165 {
	font-family: 'Poiret One', sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 165px;
}

.inter {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 12px;
	text-transform: uppercase;
}

.inter-14 {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 14px;
	text-transform: uppercase;
}

.inter-black {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 13px;
	color: #151515;
	text-transform: uppercase;
}

.top-btn {
	position: absolute;
	top: 19px;
	cursor: pointer;
	user-select: none;
}

.top-btn-inter {
	position: absolute;
	top: 30px;
	cursor: pointer;
	user-select: none;
}

.fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
}
</style>
