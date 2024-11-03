<template>
	<div
		:style="{
			width: '100vw',
			height: '100vh',
			position: 'absolute',
		}"
	>
		<p
			class="inter-14"
			style="position: absolute; top: 985px; left: 19.35%; color: #afafaf"
		>
			О СТУДИИ
		</p>

		<div
			class="inter-30-black indentation"
			style="position: absolute; top: 980px; left: 30%"
		>
			<p>Студия дизайна интерьера TANDEM - Команда</p>
			<p>профессионалов, влюбленных в</p>
			<p>минимализм и стремящихся создавать</p>
			<p>пространства,</p>
		</div>

		<div
			class="inter-30-black indentation"
			style="position: absolute; top: 1087px; left: 45%"
		>
			<p>где простота и элегантность</p>
			<p>играют ведущую роль</p>
		</div>
	</div>

	<div
		:style="{
			background: `url(${require('@/assets/interior_designer.jpg')})`,
			position: 'absolute',
			top: '1200px',
			left: '30.3%',
			width: '260px',
			height: '463px',
		}"
	></div>

	<div class="inter-16" style="position: absolute; top: 1250px; left: 45.5%">
		<p>Наша цель - создать функциональное, стильное и удобное</p>
		<p>пространство, которое будет соответствовать Вашим потребностям</p>
		<p>и желаниям.</p>
	</div>

	<div class="inter-16" style="position: absolute; top: 1350px; left: 45.5%">
		<p>Мы используем только высококачественные материалы</p>
		<p>и современные решения, чтобы обеспечить долговечность</p>
		<p>и надежность наших проектов. Уделяем большое внимание</p>
		<p>деталям и функциональности каждого помещения, учитывая</p>
		<p>все мелочи, чтобы создать пространство, которое будет</p>
		<p>максимально удобным и практичным для Вас.</p>
	</div>

	<div class="inter-15" style="position: absolute; top: 1525px; left: 45.5%">
		<p>Сергей Трусков - капитан команды POZHILAYA ABOBA</p>
	</div>

	<div>
		<div class="inter-34">
			<p style="position: absolute; top: 1575px; left: 45.5%">7+</p>
			<p style="position: absolute; top: 1575px; left: 52.5%">300+</p>
			<p style="position: absolute; top: 1575px; left: 62%">10%</p>
			<p
				:style="{
					background: `url(${require('@/assets/infinity.jpg')})`,
					position: 'absolute',
					top: '1565px',
					left: '72%',
					width: '64px',
					height: '64px'
				}"
			></p>
		</div>

		<div class="inter-15-black">
			<p style="position: absolute; top: 1625px; left: 45.5%">лет<br>работы</p>
			<p style="position: absolute; top: 1625px; left: 52.5%">выполнено<br>проектов</p>
			<p style="position: absolute; top: 1597px; left: 60.5%">до</p>
			<p style="position: absolute; top: 1625px; left: 60.5%">скидка в магазинах<br>партнеров</p>
			<p style="position: absolute; top: 1625px; left: 72%">нет ограничений<br>по количеству<br>корректировок</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutTheStudio',
	components: {},

	data: function () {
		return {
			hoverButton: null,
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


.inter-14 {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 14px;
	text-transform: uppercase;
}

.inter-15 {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 15px;
	color: #afafaf;
}

.inter-15-black {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 15px;
	color: #151515;
}

.inter-16 {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 16px;
}

.inter-34 {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 34px;
}

.inter-30-black {
	font-family: 'Inter', sans-serif;
	font-optical-sizing: auto;
	font-weight: weight;
	font-style: normal;
	font-size: 30px;
	text-transform: uppercase;
}


.indentation {
	line-height: 1.2em;
}
</style>
