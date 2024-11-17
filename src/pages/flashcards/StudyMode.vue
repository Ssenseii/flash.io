<template>
	<div class="study-container">
		<div class="study-container__info">
			<strong>id: {{ flashcard.id }} </strong>
			<h1>{{flashcard.name}}</h1>
			<p>number of cards: <span>{{flashcard.content.length}}</span></p>
			<p>Last Review Date: <span>{{flashcard.lastReviewDate}}</span></p>
			<p>number of attempts: <span>{{flashcard.attempts}}</span></p>
			<br />
			<router-link to="/"> Back to Home </router-link>
		</div>

		<div class="study-container__card" @click="flipCard">
			<div v-if="!isFlipped" class="question">
				<h3>Question:</h3>
				<p>{{ currentCard.question }}</p>
			</div>
			<div v-else class="answer">
				<h3>Answer:</h3>
				<p>{{ currentCard.answer }}</p>
			</div>
		</div>

		<div class="study-container__controls">
			<p>Card {{ currentIndex + 1 }} of {{ cards.length }}</p>
			<div class="actions">
				<button class="study-button" @click="prevCard" :disabled="currentIndex === 0">
					Previous
				</button>
				<button
					class="study-button"
					@click="nextCard"
					:disabled="currentIndex === cards.length - 1"
				>
					Next
				</button>
			</div>
			<button class="study-button" @click="resetAndShuffle">Reset & Shuffle</button>
		</div>
	</div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useFlashcardStore } from "../../stores/flashcards";

export default {
	setup() {
		const route = useRoute();
		const store = useFlashcardStore();

		const flashcard = ref({});
		const cards = ref([]);
		const currentIndex = ref(0);
		const isFlipped = ref(false);

		// Fetch flashcards by ID from the store
		const loadFlashcards = (id) => {
			const selectedFlashcard = store.allFlashcards.find((card) => card.id == id);
			if (selectedFlashcard) {
				flashcard.value = selectedFlashcard;
				cards.value = selectedFlashcard.content; // Assuming `cards` is an array in each flashcard
				currentIndex.value = 0;
				isFlipped.value = false;
			}
		};

		// Watch for route changes (if user navigates directly to another ID)
		watch(
			() => route.params.id,
			(newId) => loadFlashcards(newId)
		);

		// Load flashcards on initial render
		loadFlashcards(route.params.id);

		// Computed property for the current card
		const currentCard = computed(() => cards.value[currentIndex.value]);

		// Methods
		const flipCard = () => {
			isFlipped.value = !isFlipped.value;
		};

		const nextCard = () => {
			if (currentIndex.value < cards.value.length - 1) {
				currentIndex.value++;
				isFlipped.value = false;
			}
		};

		const prevCard = () => {
			if (currentIndex.value > 0) {
				currentIndex.value--;
				isFlipped.value = false;
			}
		};

		const resetAndShuffle = () => {
			currentIndex.value = 0;
			isFlipped.value = false;
			cards.value = [...cards.value].sort(() => Math.random() - 0.5);
		};

		return {
			currentCard,
			currentIndex,
			cards,
			isFlipped,
			flipCard,
			nextCard,
			prevCard,
			resetAndShuffle,
			flashcard,
		};
	},
};
</script>
