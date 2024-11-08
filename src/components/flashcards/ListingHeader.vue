<template>
	<div class="listing-header">
		<h2 class="listing-header__title">{{ title }}</h2>
		<div class="listing-header__actions">
			<button
				class="button secondary-button"
				v-for="action in secondaryActions"
				:key="action"
				@click="onSecondaryAction(action)"
			>
				{{ action }}
			</button>

			<button class="button primary-button" @click="onMainAction">
				Main Action
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
					style="transform: rotateZ(-90deg)"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M10.363 20.405l-8.106 -13.534a1.914 1.914 0 0 1 1.636 -2.871h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1 -3.274 0z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["mainAction", "secondaryAction"]);

const props = defineProps({
	title: {
		type: String,
		default: "Table Title",
	},
	secondaryActions: {
		type: Array,
		default: () => ["Action 1", "Action 2"],
	},
});

const onMainMethod = () => {
	emit("mainAction");
};

const onSecondaryMethod = (action) => {
	emit("secondaryAction", action);
};
</script>
