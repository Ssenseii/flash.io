<template>
	<div>
		<Header />

		<!-- 
		<div style="display: flex">
			<Sidebar />
			<main>
				<router-view />
			</main>
		</div>
		-->

		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
