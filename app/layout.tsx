export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header>
					<nav>
						<a href='/'>Home</a> | <a href='/about'>About</a> | <a href='/projects'>Projects</a>
					</nav>
				</header>
				<hr />
				{children}
				<footer>
					<hr />
					<p>&copy; 2024 My Portfolio</p>
				</footer>
			</body>
		</html>
	);
}
