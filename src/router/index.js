import { createRouter, createWebHistory } from "vue-router";

import MainLayout from '../layout/MainLayout.vue'
import ClearLayout from '../layout/ClearLayout.vue'

import FlashcardListing from '../pages/flashcards/Listing.vue'
import StudyMode from "../pages/flashcards/StudyMode.vue"
import CreateFlashcard from "../pages/flashcards/CreateFlashcard.vue"

import AccountSettings from "../pages/settings/AccountSettings.vue"

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

import NotFound from "../pages/misc/NotFound.vue";

const routes = [
	{
		path: "/",
		redirect: "/flashcards/listing",
	},
	{
		path: "/flashcards",
		redirect: "/flashcards/listing",
		component: MainLayout,
		children: [
			{ path: "listing", component: FlashcardListing },
			{ path: "study", component: StudyMode },
			{ path: "create", component: CreateFlashcard },
		],
	},
	{
		path: "/settings",
		redirect: "/settings/preferences",
		component: MainLayout,
		children: [{ path: "preferences", component: AccountSettings }],
	},
	{
		path: "/auth",
		component: ClearLayout,
		children: [
			{ path: "login", component: Login },
			{ path: "register", component: Register },
		],
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;