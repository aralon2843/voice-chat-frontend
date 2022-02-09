import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import { setupStore } from './store/store';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

const store = setupStore();

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					<Route path='/user/:id' element={<Profile />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='explore' element={<Explore />} />
					<Route path='messages/' element={<Messages />}>
						<Route path=':dialogId' element={<Messages />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
