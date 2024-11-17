<template>
	<div class="study-container">
		<div class="study-container__info">
			<strong>id: 012445123</strong>
			<h1>Random Trivia</h1>
			<p>number of cards: <span>4</span></p>
			<p>date created: <span>21-07-2024</span></p>
			<p>number of attempts: <span>12</span></p>
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
				<button class="study-button" @click="prevCard" :disabled="currentIndex === 0">Previous</button>
				<button class="study-button" @click="nextCard" :disabled="currentIndex === cards.length - 1">
					Next
				</button>
			</div>
			<button class="study-button" @click="resetAndShuffle">Reset & Shuffle</button>
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useFlashcardStore } from "../../stores/flashcards";

export default {
	setup() {

		const store = useFlashcardStore();

		const initialCards = [
			{ question: "What is the capital of France?", answer: "Paris" },
			{ question: "What is 2 + 2?", answer: "4" },
			{ question: "Who wrote '1984'?", answer: "George Orwell" },
			{ question: "What is the boiling point of water?", answer: "100°C" },
			{
				question: "Explain Einstein's theory of relativity in simple terms.",
				answer: "Energy and mass are interchangeable; E=mc^2.",
			},
			{ question: "Which element has the atomic number 1?", answer: "Hydrogen" },
			{
				question: "What is the largest mammal on Earth?",
				answer: "The blue whale, which can reach up to 100 feet in length and weigh 200 tons.",
			},
			{ question: "How many bones are in the human body?", answer: "206 bones" },
			{ question: "What is the chemical formula for table salt?", answer: "NaCl" },
			{ question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
			{
				question: "Describe the process of photosynthesis.",
				answer: "Plants convert sunlight, carbon dioxide, and water into glucose and oxygen through chlorophyll in chloroplasts.",
			},
			{
				question: "What is the main function of the CPU in a computer?",
				answer: "The CPU (Central Processing Unit) executes instructions and processes data in computing tasks.",
			},
			{
				question: "Define the term 'mitosis.'",
				answer: "Mitosis is the process where a single cell divides to form two identical daughter cells, ensuring the same number of chromosomes.",
			},
			{ question: "Translate 'Hola' from Spanish to English.", answer: "Hello" },
			{ question: "Name the three primary colors.", answer: "Red, blue, and yellow" },
			{ question: "What is the formula for the area of a circle?", answer: "A = πr²" },
			{
				question: "Who was the 16th president of the United States?",
				answer: "Abraham Lincoln",
			},
			{
				question: "Describe the water cycle in brief.",
				answer: "The water cycle includes evaporation, condensation, precipitation, and collection.",
			},
			{
				question: "What are Newton's three laws of motion?",
				answer: "1. Inertia, 2. F=ma (force equals mass times acceleration), 3. Action and reaction.",
			},
			{ question: "What is the main ingredient in guacamole?", answer: "Avocado" },
			{
				question: "How does the digestive system work?",
				answer: "Food is broken down by enzymes and digestive fluids, absorbed into the bloodstream, and waste is expelled from the body.",
			},
			{ question: "Name one of Shakespeare's most famous tragedies.", answer: "Hamlet" },
			{
				question: "What is the Pythagorean theorem?",
				answer: "In a right triangle, a² + b² = c², where c is the hypotenuse.",
			},
			{
				question: "What is the lifespan of a mayfly?",
				answer: "Adult mayflies typically live only 24-48 hours.",
			},
			{
				question: "Explain the significance of the 'Rosetta Stone.'",
				answer: "The Rosetta Stone helped linguists decode Egyptian hieroglyphics by comparing it with Greek and Demotic scripts.",
			},
			{
				question: "What is the speed of light?",
				answer: "Approximately 299,792 kilometers per second (or 186,282 miles per second).",
			},
			{ question: "What does DNA stand for?", answer: "Deoxyribonucleic acid" },
			{
				question: "How many continents are there?",
				answer: "Seven: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.",
			},
			{
				question: "Name the longest river in the world.",
				answer: "The Nile River or the Amazon River, depending on the measurement method.",
			},
			{ question: "What is pi to five decimal places?", answer: "3.14159" },
		];

		const cards = ref([...initialCards]);
		const currentIndex = ref(0);
		const isFlipped = ref(false);

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
			cards.value = [...initialCards].sort(() => Math.random() - 0.5);
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
			flashcards: store.allFlashcards,
		};
	},
};
</script>

<style scoped></style>
