import { defineStore } from "pinia";

export const useFlashcardStore = defineStore("flashcard", {
	state: () => ({
		flashcards: [
			{
				id: 1,
				name: "Card Test",
				category: "History",
				numberOfCards: 6,
				lastReviewDate: "24/07/2024",
				attempts: 6,
				content: [
					{ question: "What is the capital of France?", answer: "Paris" },
					{ question: "What is 2 + 2?", answer: "4" },
					{ question: "Who wrote '1984'?", answer: "George Orwell" },
					{ question: "What is the boiling point of water?", answer: "100°C" },
				],
			},
		],
	}),
	actions: {
		addFlashcardCollection(collection) {
			this.flashcards.push(collection);
		},
	},
	getters: {
		allFlashcards: (state) => state.flashcards,
	},
});
