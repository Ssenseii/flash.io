<template>
	<div>
		<h2>Create a Flashcard</h2>
		<label for="question">Question:</label>
		<input v-model="newQuestion" id="question" type="text" />

		<label for="answer">Answer:</label>
		<input v-model="newAnswer" id="answer" type="text" />

		<button @click="addFlashcard">Add Flashcard</button>

		<h3>Flashcards</h3>
		<ul>
			<li v-for="(flashcard, index) in flashcards" :key="index">
				<strong>Q:</strong> {{ flashcard.question }} <br />
				<strong>A:</strong> {{ flashcard.answer }}
			</li>
		</ul>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "CreateFlashcard",
	setup() {
		const newQuestion = ref("");
		const newAnswer = ref("");
		const flashcards = ref([]);

		const addFlashcard = () => {
			if (newQuestion.value && newAnswer.value) {
				flashcards.value.push({
					question: newQuestion.value,
					answer: newAnswer.value,
				});
				newQuestion.value = "";
				newAnswer.value = "";
			}
		};

		return {
			newQuestion,
			newAnswer,
			flashcards,
			addFlashcard,
		};
	},
};
</script>
