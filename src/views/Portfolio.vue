<template>
	<div
		:style="{
			width: '100vw',
			top: '200vh',
			height: '156.2vw',
			background: '#282828',
			position: 'absolute',
		}"
	>
		<p
			class="inter-14"
			style="position: absolute; top: 100px; left: 19.35%; color: #afafaf"
		>
			ПОРТФОЛИО
		</p>

		<div
			class="inter-30-white indentation"
			style="position: absolute; top: 100px; left: 30%"
		>
			<p>ПРОЕКТЫ СТУДИИ</p>
		</div>

		<div>
			<v-card
				class="shaped"
				:style="{
					backgroundColor: '#323232',
					position: 'absolute',
					borderRadius: '20px',
					top: '200px',
					left: '49%',
					width: '600px',
					height: '360px',
				}"
			>
				<v-card-title
					class="inter-30-white_not_uppercase" style="position: absolute; top: 90px; left: 115px"
				>
					г. Москва
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 170px; left: 115px"
				>
					ЖК "Life-Варшавская"
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase_AF" style="position: absolute; top: 205px; left: 115px"
				>
					Площадь:
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 205px; left: 220px"
				>
					69 м²
				</v-card-title>
			</v-card>

			<v-card
				class="shaped"
				:style="{
					background: `url(${require('@/assets/Portfolio_one.jpg')})`,
					position: 'absolute',
					borderRadius: '20px',
					top: '200px',
					left: '19.35%',
					width: '600px',
					height: '360px',
				}"
			>
			</v-card>
		</div>

		<div>
			<v-card
				class="shaped"
				:style="{
					backgroundColor: '#323232',
					position: 'absolute',
					borderRadius: '20px',
					top: '580px',
					left: '49%',
					width: '600px',
					height: '360px',
				}"
			>
				<v-card-title
					class="inter-30-white_not_uppercase" style="position: absolute; top: 90px; left: 115px"
				>
					г. Москва
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 170px; left: 115px"
				>
					ЖК "Сердце столицы"
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase_AF" style="position: absolute; top: 205px; left: 115px"
				>
					Площадь:
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 205px; left: 220px"
				>
					46 м²
				</v-card-title>
			</v-card>

			<v-card
				class="shaped"
				:style="{
					background: `url(${require('@/assets/portfolio_two.jpeg')})`,
					position: 'absolute',
					borderRadius: '20px',
					top: '580px',
					left: '19.35%',
					width: '600px',
					height: '360px',
				}"
			>
			</v-card>
		</div>

		<div>
			<v-card
				class="shaped"
				:style="{
					backgroundColor: '#323232',
					position: 'absolute',
					borderRadius: '20px',
					top: '960px',
					left: '49%',
					width: '600px',
					height: '360px',
				}"
			>
				<v-card-title
					class="inter-30-white_not_uppercase" style="position: absolute; top: 90px; left: 115px"
				>
					г. Апрелевка
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 170px; left: 115px"
				>
					Коттеджный поселок "Парк Апрель"
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase_AF" style="position: absolute; top: 205px; left: 115px"
				>
					Площадь:
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 205px; left: 220px"
				>
					66 м²
				</v-card-title>
			</v-card>

			<v-card
				class="shaped"
				:style="{
					background: `url(${require('@/assets/portfolio_tree.jpg')})`,
					position: 'absolute',
					borderRadius: '20px',
					top: '960px',
					left: '19.35%',
					width: '600px',
					height: '360px',
				}"
			>
			</v-card>
		</div>

		<div>
			<v-card
				class="shaped"
				:style="{
					backgroundColor: '#323232',
					position: 'absolute',
					borderRadius: '20px',
					top: '1340px',
					left: '49%',
					width: '600px',
					height: '360px',
				}"
			>
				<v-card-title
					class="inter-30-white_not_uppercase" style="position: absolute; top: 90px; left: 115px"
				>
					г. Краснознаменск
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 170px; left: 115px"
				>
					ЖК "Космическая гавань"
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase_AF" style="position: absolute; top: 205px; left: 115px"
				>
					Площадь:
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 205px; left: 220px"
				>
					61 м²
				</v-card-title>
			</v-card>

			<v-card
				class="shaped"
				:style="{
					background: `url(${require('@/assets/portfolio_five.jpg')})`,
					position: 'absolute',
					borderRadius: '20px',
					top: '1340px',
					left: '19.35%',
					width: '600px',
					height: '360px',
				}"
			>
			</v-card>
		</div>

		<div>
			<v-card
				class="shaped"
				:style="{
					backgroundColor: '#323232',
					position: 'absolute',
					borderRadius: '20px',
					top: '1720px',
					left: '49%',
					width: '600px',
					height: '360px',
				}"
			>
				<v-card-title
					class="inter-30-white_not_uppercase" style="position: absolute; top: 90px; left: 115px"
				>
					г. Загреб
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 170px; left: 115px"
				>
					Частный дом в Хорватии
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase_AF" style="position: absolute; top: 205px; left: 115px"
				>
					Площадь:
				</v-card-title>
				<v-card-title
					class="inter-18-white_not_uppercase" style="position: absolute; top: 205px; left: 220px"
				>
					440 м²
				</v-card-title>
			</v-card>

			<v-card
				class="shaped"
				:style="{
					background: `url(${require('@/assets/portfolio_four.jpeg')})`,
					position: 'absolute',
					borderRadius: '20px',
					top: '1720px',
					left: '19.35%',
					width: '600px',
					height: '360px',
				}"
			>
			</v-card>
		</div>

		<button
			class="button-all-projects-no-hover-1"
			style="position: absolute; top: 2125px; left: 972px"
		>
			ВСЕ ПРОЕКТЫ
			<svg
				width="20px"
				height="20px"
				viewBox="-9 -10 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />

				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					<path
						d="M6 18L18 6M18 6H9M18 6V15"
						stroke="#AFAFAF"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	name: 'PortfolioItem',
	components: {},

	data: function () {
		return {
			props: null,
		}
	},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');


@font-face {
	font-family: 'Inter', sans-serif;
	src: url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
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

.inter-30-white {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 30px;
	text-transform: uppercase;
	color: white;
}

.inter-30-white_not_uppercase {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 30px;
	color: white;
}

.inter-18-white_not_uppercase {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 18px;
	color: white;
}

.inter-18-white_not_uppercase_AF {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 18px;
	color: #AFAFAF;
}


.button-all-projects-no-hover-1 {
	background-color: #282828;
	width: 157px;
	height: 44px;
	font-size: 14px;
	border-radius: 10px;
	border: 1px solid #afafaf;
	color: #afafaf;
}
</style>
