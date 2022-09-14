import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Aleo:400,700|Roboto:100,100i,300,300i,400,500,500i&display=swap&subset=cyrillic" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}