import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars0.githubusercontent.com/u/56306917?s=460&u=36c063ff62be8a6a714489a9b653e8e7c7f8e3f4&v=4" alt="Luis Felipe"/>
				<div>
					<strong>Luis Felipe</strong>
					<span>Química</span>
				</div>
			</header>

			<p>
				Entusiasta das melhores tecnologias de quimica avançada.
				<br/><br/>
				Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
				através de experiências. Mais de 200.000 pessoas já passaram por uma das 
				minhas explosões.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$100,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Entrar em Contato"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem;