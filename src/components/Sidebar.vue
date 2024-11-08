<!-- src/components/Sidebar.vue -->
<template>
	<div class="sidebar">
		<nav>
			<ul>
				<li><router-link to="/flashcards/listing">Flashcards</router-link></li>
				<li><router-link to="/flashcards/study">Study Mode</router-link></li>
				<li><router-link to="/settings/account">Account Settings</router-link></li>
				<li><router-link to="/settings/preferences">Preferences</router-link></li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
};
</script>
