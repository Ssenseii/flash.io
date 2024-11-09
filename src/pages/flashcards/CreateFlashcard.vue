<template>
	<div class="create-flashcard">
		<h2>Create a Flashcard</h2>

		<div class="create-flashcard__input">
			<div class="create-flashcard__input-question">
				<label for="question">Question:</label>
				<textarea v-model="newQuestion" id="question"></textarea>
			</div>

			<div class="create-flashcard__input-answer">
				<label for="answer">Answer:</label>
				<textarea v-model="newAnswer" id="answer"></textarea>
			</div>
		</div>
		<button class="button primary-button" @click="addFlashcard">
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
				<path d="M12 5l0 14" />
				<path d="M5 12l14 0" />
			</svg>
			Add Flashcard
		</button>

		<div class="separator"></div>

		<h3>Flashcards</h3>

		<ul class="create-flashcard__flashcards">
			<li v-for="(flashcard, index) in flashcards" :key="index">
				<div class="question">
					<strong>Q:</strong> {{ truncateText(flashcard.question) }}
				</div>
				<div class="answer"><strong>A:</strong> {{ truncateText(flashcard.answer) }}</div>
				<div class="actions">
					<button class="button secondary-button" @click="editFlashcard(index)">
						Edit
					</button>
					<button class="button secondary-button" @click="deleteFlashcard(index)">
						Delete
					</button>
				</div>
			</li>
		</ul>

		<div v-if="isEditing" class="create-flashcard__edit">
			<h3>Edit Flashcard</h3>

			<div class="create-flashcard__input">
				<div class="create-flashcard__input-answer">
					<label for="edit-question">Question:</label>
					<textarea v-model="editedQuestion" id="edit-question"></textarea>
				</div>

				<div class="create-flashcard__input-answer">
					<label for="edit-answer">Answer:</label>
					<textarea v-model="editedAnswer" id="edit-answer"></textarea>
				</div>
			</div>
			<div class="actions">
				<button class="button primary-button" @click="updateFlashcard">
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
						<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
						<path
							d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
						/>
						<path d="M16 5l3 3" />
					</svg>
					Update Flashcard
				</button>
				<button class="button secondary-button" @click="cancelEdit">Cancel</button>
			</div>
		</div>
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
		const isEditing = ref(false);
		const editedIndex = ref(null);
		const editedQuestion = ref("");
		const editedAnswer = ref("");

		const addFlashcard = () => {
			if (newQuestion.value && newAnswer.value) {
				flashcards.value.push({
					question: newQuestion.value,
					answer: newAnswer.value,
				});
				newQuestion.value = "";
				newAnswer.value = "";
			}
			console.log(flashcards.value);
		};

		const editFlashcard = (index) => {
			isEditing.value = true;
			editedIndex.value = index;
			editedQuestion.value = flashcards.value[index].question;
			editedAnswer.value = flashcards.value[index].answer;
		};

		const updateFlashcard = () => {
			if (editedQuestion.value && editedAnswer.value) {
				flashcards.value[editedIndex.value] = {
					question: editedQuestion.value,
					answer: editedAnswer.value,
				};
				cancelEdit();
			}
		};

		const deleteFlashcard = (index) => {
			flashcards.value.splice(index, 1);
		};

		const cancelEdit = () => {
			isEditing.value = false;
			editedIndex.value = null;
			editedQuestion.value = "";
			editedAnswer.value = "";
		};

		const truncateText = (text) => {
			const words = text.split(" ");
			if (words.length > 24) {
				return words.slice(0, 24).join(" ") + "...";
			}
			return text;
		};

		return {
			newQuestion,
			newAnswer,
			flashcards,
			addFlashcard,
			editFlashcard,
			updateFlashcard,
			deleteFlashcard,
			cancelEdit,
			isEditing,
			editedQuestion,
			editedAnswer,
			truncateText,
		};
	},
};
</script>
