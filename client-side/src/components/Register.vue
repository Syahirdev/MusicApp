<template>
	<div>
		<h1>Register</h1>
		<input type="email" name="email" placeholder="email" v-model="email" />
		<br />
		<input type="password" name="password" placeholder="password" v-model="password" />
		<br />
		<button @click="register">Register</button>
	</div>
</template>

<script>
import authentication from '../services/authentication';
export default {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		async register() {
			await authentication.register({
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>
