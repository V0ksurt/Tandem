<template>
	<div
		:style="{
			width: '100vw',
			height: '100vh',
			background: `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(${require('@/assets/backgroundOneLayer.jpg')})`,
			position: 'absolute',
		}"
	>
		<p
			class="inter-14"
			style="position: absolute; top: 680px; left: 19.35%; color: white"
		>
			Дизайн интерьера<br />
			с заботой о деталях
		</p>

		<p
			class="poiret-165"
			style="position: absolute; top: 690px; left: 18.8%; color: white"
		>
			POZHILAYA ABOBA
		</p>
	</div>

	<div>
		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn poiret-one-regular"
				variant="plain"
				style="left: 2.3%"
			>
				ABOBA
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn-inter inter"
				variant="plain"
				style="left: 33%"
			>
				О студии
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn-inter inter"
				variant="plain"
				style="left: 40%"
			>
				Проекты
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn-inter inter"
				variant="plain"
				style="left: 46.7%"
			>
				Услуги и цены
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn-inter inter"
				variant="plain"
				style="left: 55.8%"
			>
				Отзывы
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<btn
				v-bind="props"
				:class="isHovering ? 'text-grey-lighten-1' : 'text-white'"
				class="top-btn-inter inter"
				variant="plain"
				style="left: 62.15%"
			>
				Этапы работы
			</btn>
		</v-hover>

		<v-hover v-slot="{ isHovering, props }">
			<v-btn
				v-bind="props"
				:class="isHovering ? 'white-text' : 'black-text'"
				size="large"
				rounded="lg"
				class="v-btn inter-black"
				style="top: 21px; left: 88%"
			>
				Оставить заявку
			</v-btn>
		</v-hover>
	</div>
</template>

<script>

export default {
	name: 'HomeView',
	components: {},

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

@mixin adaptiv-font($pcSize, $mobSize) {
	$addSize: $pcSize - $mobSize;
	$addmobSize: $addSize + $addSize * 0.7;
	@media (max-width: 767px) {
		font-size: calc(#{$mobSize + px} + #{$addMobSize} * ((100vw - 320px) / #{$maxWidth}));
	}
	@media (mix-width: 767px) {
		font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth}));
	}
}

.poiret-one-regular {
	font-family: 'Poiret One', sans-serif;
	font-weight: 400;
	font-style: normal;
	@include adaptiv-font(24, 12);
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
