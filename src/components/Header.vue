<!-- src/components/Header.vue -->
<template>
	<header class="header">
		<router-link to="/" class="header__logo">
			<img src="../assets/images/logo.png" alt="logo image" />
		</router-link>
		<div class="header__search">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M21 21l-6 -6" />
			</svg>
			<input type="text" name="search" autocomplete="off" placeholder="Search Flashcards..."/>
		</div>
		<div class="header__settings">
			<router-link to="/settings/account">
				<img src="../assets/images/placeholder-user.png" alt="">
			</router-link>
		</div>
	</header>
</template>

<script setup>

</script>
