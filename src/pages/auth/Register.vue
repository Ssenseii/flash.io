
<template>
	<div class="auth">
		<div class="auth__logo">
			<img src="../../assets/images/logo.png" alt="Flashio Logo" />
		</div>

		<h1 class="auth__title">New to FlashIO?</h1>
		<p class="auth__description">Create a new account & start practicing.</p>

		<form method="POST" class="auth__form">
			<div class="auth__input">
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
					<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
					<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
				</svg>
				<input id="username" type="text" name="username" placeholder="username..." />
			</div>
			<div class="auth__input">
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
					<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
					<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
				</svg>
				<input id="email" type="email" name="email" placeholder="Email..." />
			</div>
			<div class="auth__input">
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
				<input type="password" name="password" placeholder="Your Password..." />
			</div>
			<div class="auth__input">
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
				<input type="password" name="confirm_password" placeholder="Confirm Password..." />
			</div>
			<input class="button primary-button" type="submit" value="Create Account" />
		</form>

		<div class="auth__actions">
			<router-link to="/auth/login">Already Have an Account?</router-link>
		</div>
	</div>
</template>

<script setup></script>
