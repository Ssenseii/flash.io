<!-- components/TableRow.vue -->
<template>
	<tr class="table__row">
		<td class="table__row-checkbox"><input type="checkbox" v-model="checked" /></td>
		<td class="table__row-date">{{ id }}</td>
		<td v-for="data in rowData" :key="data">{{ data }}</td>
		<td class="table__row-tag">
			<span class="tag" :class="tag.color" v-for="tag in tags" :key="tag.text">
				{{ tag.text }}
			</span>
		</td>
		<td class="table__row-actions">
			<button @click="onAction">Action1</button>
			<button @click="onAction">Action2</button>
			<button @click="onAction">Action3</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		rowData: Array,
		id: String,
		tags: {
			type: Array,
			default: () => [{ text: "Example", color: "blue" }],
		},
	},
	data() {
		return {
			checked: false,
		};
	},
	methods: {
		onAction() {
			this.$emit("rowAction");
		},
	},
};
</script>
