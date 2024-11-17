<template>
	<div class="create-flashcard">
		<h2>Create Flashcards</h2>

		<div class="create-flashcard__meta">
			<div class="main-input">
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
						d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
					/>
					<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
					<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
				</svg>
				<input
					id="flashcard_name"
					v-model="flashcardName"
					type="text"
					name="flashcards_name"
					placeholder="Flashcard Name..."
				/>
			</div>
			<div class="main-input">
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
						d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
					/>
					<path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
					<path d="M8 11v-4a4 4 0 1 1 8 0v4" />
				</svg>
				<input
					id="flashcard_category"
					v-model="flashcardCategory"
					type="text"
					name="flashcards_category"
					placeholder="Flashcard Category..."
				/>
			</div>
			<div class="create-flashcard__meta-count">
				<p>Flashcards Created:</p>
				<strong>{{ flashcards.length }}</strong>
			</div>
			<input
				type="submit"
				class="button primary-button"
				value="Save Flashcard Collection"
				@click="saveCollection"
			/>
		</div>

		<h3>Add flashcards</h3>

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
		<button class="button secondary-button" @click="addFlashcard">
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
					Update Flashcard
				</button>
				<button class="button secondary-button" @click="cancelEdit">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useFlashcardStore } from "../../stores/flashcards";
import router from "../../router";

export default {
	name: "CreateFlashcard",
	setup() {
		const store = useFlashcardStore();
		const flashcardName = ref("");
		const flashcardCategory = ref("");
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

		const formatDate = (date) => {
			const options = {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			};
			return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
		};

		const saveCollection = () => {
			if (flashcardName.value && flashcardCategory.value && flashcards.value.length > 0) {
				store.addFlashcardCollection({
					id: Date.now(),
					name: flashcardName.value,
					category: flashcardCategory.value,
					numberOfCards: flashcards.value.length,
					lastReviewDate: formatDate(new Date().toISOString()),
					attempts: 0,
					content: flashcards.value,
				});
				flashcardName.value = "";
				flashcardCategory.value = "";
				flashcards.value = [];
				router.push('/');
			} else {
				alert("Please fill in all fields and add at least one flashcard.");
			}
		};

		return {
			flashcardName,
			flashcardCategory,
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
			saveCollection,
		};
	},
};
</script>
