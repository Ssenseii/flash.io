<template>
	<div class="settings">
		<!-- 
		Title
		Description

		Account Settings:
		- Username	
		- Email
		-
		- Password Reset 
		- 
		- Profile Picture Change

		Preferences: 
		- Theme
		- Colors
		- Fonts

		Help
		- Call technical Help
		- FAQ

		-->

		<div class="settings__title">
			<h1>Account Settings & Preferences</h1>
			<p>Control Your Account, Fine-tune Your Preferences</p>
		</div>

		<h2>User Settings: </h2>

		<div class="settings__control">
			<form class="settings__control-form">
				<h3>Account Defaults:</h3>
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
						<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
						<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
					</svg>
					<input
						id="username"
						type="text"
						name="username"
						value="JohnDoe123"
						placeholder="Username..."
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
						<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
						<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
					</svg>
					<input
						disabled
						id="email"
						type="email"
						name="email"
						placeholder="Email..."
						value="johndoe.study@flash.io"
					/>
				</div>
				<input type="submit" class="button secondary-button" value="Change Account Info" />
			</form>
			<form class="settings__control-form">
				<h3>Change Your Password:</h3>
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
					<input type="password" name="old_password" placeholder="Your Old Password..." />
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
					<input type="password" name="new_password" placeholder="Your New Password..." />
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
					<input
						type="password"
						name="confirm_password"
						placeholder="Confirm Password..."
					/>
				</div>
				<input type="submit" class="button secondary-button" value="Update Password" />
			</form>
			<form class="settings__control-form">
				<h3>Change Profile Picture:</h3>
				<div class="settings__control-img">
					<img src="../../assets/images/placeholder-user.png" alt="user image">
				</div>
				<input class="file-input" type="file" ref="fileInput" />
				<button class="button secondary-button">Update Profile Picture</button>
			</form>
		</div>

		
		<h2>Preferences: </h2>
		
		<div class="settings__preferences">
			<p>Coming Soon...</p>
		</div>
	</div>
</template>

<script setup></script>
