<template>
	<div class="listing">
		<ListingHeader
			title="Flashcards"
			:secondaryActions="['Action A', 'Action B']"
			@mainAction="mainActionHandler"
		/>

		<Table
			:rows="tableData"
			:columns="['ID', 'Name', 'Category', 'Link', 'Date Created', 'Attempts']"
			:actions="tableActions"
			:loading="isLoading"
			emptyStateMessage="No records found"
		/>
	</div>
</template>

<script>
import ListingHeader from "../../components/flashcards/ListingHeader.vue";
import Table from "../../components/flashcards/DataTable.vue";

export default {
	components: {
		ListingHeader,
		Table,
	},
	data() {
		return {
			tableData: [
				{
					id: "1",
					data: ["Flashcard 1", "Math", "link", "21-04-2024", 9],
					tags: [{ text: "Danger", color: "level1" }],
				},
				{
					id: "2",
					data: ["Flashcard 2", "Science", "link", "22-04-2024", 8],
					tags: [{ text: "Important", color: "level1" }],
				},
				{
					id: "3",
					data: ["Flashcard 3", "History", "link", "23-04-2024", 7],
					tags: [{ text: "Review", color: "level2" }],
				},
				{
					id: "4",
					data: ["Flashcard 4", "Language", "link", "24-04-2024", 6],
					tags: [{ text: "Easy", color: "level3" }],
				},
				{
					id: "5",
					data: ["Flashcard 5", "Geography", "link", "25-04-2024", 5],
					tags: [{ text: "Difficult", color: "level1" }],
				},
				{
					id: "6",
					data: ["Flashcard 6", "Math", "link", "26-04-2024", 9],
					tags: [{ text: "Danger", color: "level1" }],
				},
				{
					id: "7",
					data: ["Flashcard 7", "Science", "link", "27-04-2024", 8],
					tags: [{ text: "Important", color: "level2" }],
				},
				{
					id: "8",
					id: "8",
					data: ["Flashcard 8", "History", "link", "28-04-2024", 7],
					tags: [{ text: "Review", color: "level3" }],
				},
				{
					id: "9",
					data: ["Flashcard 9", "Language", "link", "29-04-2024", 6],
					tags: [{ text: "Easy", color: "level1" }],
				},
				{
					id: "10",
					data: ["Flashcard 10", "Geography", "link", "30-04-2024", 5],
					tags: [{ text: "Difficult", color: "level2" }],
				},
				{
					id: "11",
					data: ["Flashcard 11", "Math", "link", "01-05-2024", 9],
					tags: [{ text: "Danger", color: "level2" }],
				},
				{
					id: "12",
					data: ["Flashcard 12", "Science", "link", "02-05-2024", 8],
					tags: [{ text: "Important", color: "level1" }],
				},
				{
					id: "13",
					data: ["Flashcard 13", "History", "link", "03-05-2024", 7],
					tags: [{ text: "Review", color: "level1" }],
				},
				{
					id: "14",
					data: ["Flashcard 14", "Language", "link", "04-05-2024", 6],
					tags: [{ text: "Easy", color: "level2" }],
				},
				{
					id: "15",
					data: ["Flashcard 15", "Geography", "link", "05-05-2024", 5],
					tags: [{ text: "Difficult", color: "level3" }],
				},
				// Add more rows as needed
			],
		};
	},
	methods: {
		mainActionHandler() {
			// Handle main action here
		},
		tableRowActionHandler(row) {
			// Handle row action here
		},
	},
};
</script>
