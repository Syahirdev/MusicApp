import api from './api';

export default {
	register(credentials) {
		return api().post('/register', credentials);
	},
};

// example on how to call authentication
// authentication.register({
// 	email: 'gmail@email.com',
// 	password: '123456',
// });
