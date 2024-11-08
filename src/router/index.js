import { createRouter, createWebHistory } from "vue-router";

import MainLayout from '../layout/MainLayout.vue'
import ClearLayout from '../layout/ClearLayout.vue'

import FlashcardListing from '../pages/flashcards/Listing.vue'
import StudyMode from "../pages/flashcards/StudyMode.vue"

import AccountSettings from "../pages/settings/AccountSettings.vue"
import Preferences from "../pages/settings/Preferences.vue"

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
		component: MainLayout,
		children: [
			{ path: "listing", component: FlashcardListing },
			{ path: "study", component: StudyMode },
		],
	},
	{
		path: "/settings",
		component: MainLayout,
		children: [
			{ path: "account", component: AccountSettings },
			{ path: "preferences", component: Preferences },
		],
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