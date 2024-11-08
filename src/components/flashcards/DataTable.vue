<!-- components/Table.vue -->
<template>
	<div class="table">
		<div v-if="loading" class="table__loading">Loading...</div>
		<div v-else-if="filteredData.length === 0" class="table__empty">
			{{ emptyStateMessage }}
		</div>
		<div v-else>
			<div class="table__filter">
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
					<path
						d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
					/>
				</svg>
				<input
					v-model="filterText"
					placeholder="Filter..."
					autocomplete="off"
					@input="applyFilter"
				/>
			</div>

			<table class="table__table">
				<thead>
					<tr>
						<th><input type="checkbox" @change="toggleAll" /></th>
						<th v-for="column in columns" :key="column" @click="sortBy(column)">
							{{ column }}
						</th>
						<th>Tags</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<TableRow
						v-for="(row, index) in paginatedData"
						:key="index"
						:rowData="row.data"
						:id="row.id"
						:tags="row.tags"
						:actions="actions"
					/>
				</tbody>
			</table>
			<pagination-controls
				:currentPage="currentPage"
				:totalPages="totalPages"
				@pageChange="setPage"
			/>
		</div>
	</div>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
	components: { TableRow },
	props: {
		rows: Array,
		columns: Array,
	},
	data() {
		return {
			currentPage: 1,
			itemsPerPage: 10,
			filterText: "",
			sortColumn: null,
			sortDirection: 1,
			selectedRows: [],
		};
	},
	computed: {
		filteredData() {
			return this.rows.filter((row) =>
				row.data.some((item) => item.includes(this.filterText))
			);
		},
		sortedData() {
			return [...this.filteredData].sort((a, b) => {
				if (!this.sortColumn) return 0;
				return a[this.sortColumn] > b[this.sortColumn]
					? this.sortDirection
					: -this.sortDirection;
			});
		},
		paginatedData() {
			const start = (this.currentPage - 1) * this.itemsPerPage;
			return this.sortedData.slice(start, start + this.itemsPerPage);
		},
		totalPages() {
			return Math.ceil(this.filteredData.length / this.itemsPerPage);
		},
	},
	methods: {
		applyFilter() {
			this.currentPage = 1;
		},
		sortBy(column) {
			this.sortColumn = column;
			this.sortDirection *= -1;
		},
		setPage(page) {
			this.currentPage = page;
		},
		toggleAll(event) {
			this.selectedRows = event.target.checked ? this.paginatedData : [];
		},
		rowActionHandler(row) {
			this.$emit("rowAction", row);
		},
	},
};
</script>
