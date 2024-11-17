<template>
	<div class="flashcards">
		<div class="listing-header">
			<h2 class="listing-header__title">Flashcards List</h2>
			<div class="listing-header__actions">
				<button class="button secondary-button">Import Flashcards</button>
				<button class="button secondary-button">Export Flashcards</button>

				<button class="button primary-button">
					<router-link to="./create">Create Flashcard</router-link>
				</button>
			</div>
		</div>

		<div class="table">
			<!-- Search Bar -->
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
				<input v-model="searchQuery" placeholder="Filter..." autocomplete="off" />
			</div>

			<!-- Table -->
			<table class="table__table">
				<thead>
					<tr>
						<th><input type="checkbox" @change="toggleSelectAll" /></th>
						<th
							v-for="column in columns"
							:key="column.key"
							@click="sortBy(column.key)"
							style="cursor: pointer"
						>
							{{ column.label }}
							<span v-if="sortColumn === column.key">{{
								sortOrder === "asc" ? "↑" : "↓"
							}}</span>
						</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in paginatedItems" :key="item.id">
						<td><input type="checkbox" v-model="selectedItems" :value="item.id" /></td>
						<td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
						<td>
							<!-- Actions Dropdown -->
							<button class="table__table-actions" @click="toggleDropdown(item.id)">
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
									<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
									<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
									<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
								</svg>
							</button>
							<div class="table__table-actions-list" v-if="dropdownOpen === item.id">
								<ul>
									<li @click="runItem(item)">Run</li>
									<li @click="editItem(item)">Edit</li>
									<li @click="deleteItem(item.id)">Delete</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<!-- Pagination Controls -->
			<div class="table__pagination">
				<button @click="prevPage" :disabled="currentPage === 1">
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
						<path d="M15 6l-6 6l6 6" />
					</svg>
				</button>
				<span>Page {{ currentPage }} of {{ totalPages }}</span>
				<button @click="nextPage" :disabled="currentPage === totalPages">
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
						<path d="M9 6l6 6l-6 6" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useFlashcardStore } from "../../stores/flashcards";

export default {
	name: "ListingPage",
	setup() {
		const store = useFlashcardStore();

		const items = ref(store.flashcards.map(({ content, ...rest }) => rest));

		const columns = [
			{ label: "Name", key: "name" },
			{ label: "Category", key: "category" },
			{ label: "N° of Cards", key: "numberOfCards" },
			{ label: "Last Review Date", key: "lastReviewDate" },
			{ label: "Attempts", key: "attempts" },
		];

		const searchQuery = ref("");
		const sortColumn = ref(null);
		const sortOrder = ref("asc");
		const selectedItems = ref([]);
		const dropdownOpen = ref(null);

		// Pagination controls
		const currentPage = ref(1);
		const itemsPerPage = ref(25);

		// Computed properties
		const filteredItems = computed(() => {
			let filtered = items.value;

			// Search filter
			if (searchQuery.value) {
				const query = searchQuery.value.toLowerCase();
				filtered = filtered.filter(
					(item) =>
						item.name.toLowerCase().includes(query) ||
						item.category.toLowerCase().includes(query)
				);
			}

			// Sorting
			if (sortColumn.value) {
				filtered.sort((a, b) => {
					const valA = a[sortColumn.value];
					const valB = b[sortColumn.value];
					if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
					if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
					return 0;
				});
			}

			return filtered;
		});

		const paginatedItems = computed(() => {
			const start = (currentPage.value - 1) * itemsPerPage.value;
			const end = start + itemsPerPage.value;
			return filteredItems.value.slice(start, end);
		});

		const totalPages = computed(() =>
			Math.ceil(filteredItems.value.length / itemsPerPage.value)
		);

		// Methods
		const sortBy = (column) => {
			if (sortColumn.value === column) {
				sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
			} else {
				sortColumn.value = column;
				sortOrder.value = "asc";
			}
		};

		const toggleSelectAll = (event) => {
			if (event.target.checked) {
				selectedItems.value = paginatedItems.value.map((item) => item.id);
			} else {
				selectedItems.value = [];
			}
		};

		const toggleDropdown = (itemId) => {
			dropdownOpen.value = dropdownOpen.value === itemId ? null : itemId;
		};

		const runItem = (item) => {
			alert(`Runnning item: ${item.name}`);
		};

		const editItem = (item) => {
			alert(`Editing item: ${item.name}`);
		};

		const deleteItem = (itemId) => {
			items.value = items.value.filter((item) => item.id !== itemId);
		};

		const prevPage = () => {
			if (currentPage.value > 1) currentPage.value--;
		};

		const nextPage = () => {
			if (currentPage.value < totalPages.value) currentPage.value++;
		};

		return {
			items,
			columns,
			searchQuery,
			sortColumn,
			sortOrder,
			selectedItems,
			dropdownOpen,
			currentPage,
			itemsPerPage,
			paginatedItems,
			totalPages,
			sortBy,
			toggleSelectAll,
			toggleDropdown,
			runItem,
			editItem,
			deleteItem,
			prevPage,
			nextPage,
			flashcards: store.allFlashcards,
		};
	},
};
</script>
