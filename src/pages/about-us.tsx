import Footer from "../components/footer";
import Logo from "../components/logo";
import Menu from "../components/menu";

// src/pages/AboutUs.js
function AboutUs() {
	return (
		<>
			<div className="App">
				<Logo />
				<Menu />
				<div className="container mx-auto">
					<div className="about-us">
						<h1>
							&iquest;Quienes somos?
						</h1>
						<p>
							Argenpills.org nace en el a&ntilde;o 2013 como un lugar para agruparnos y ayudarnos entre todos para aprender sobre el consumo de &eacute;xtasis/MDMA, LSD y otras drogas.
						</p>
						<p>
							La idea del foro es permitir al p&uacute;blico en general adquirir informaci&oacute;n de calidad sobre el consumo de drogas y sus efectos, generar conciencia haciendo especial &eacute;nfasis en la reducci&oacute;n de da&ntilde;os y el consumo responsable de las mismas, para de esta forma reducir los efectos nocivos que generan en la salud y evitar da&ntilde;os mayores debido a un uso excesivo/inapropiado.
						</p>
						<p>
							<strong>BAJO NING&Uacute;N PUNTO DE VISTA SE BUSCA PROMOVER O INCITAR EL USO DE SUSTANCIAS ILEGALES Y NO SE PERMITIR&Aacute;N MENSAJES DE ESA &Iacute;NDOLE.</strong>
						</p>
						<p>
							El foro no permite <strong>NINGUN TIPO DE COMERCIALIZACION de ning&uacute;n tipo de droga.</strong> Los moderadores y administradores revisan constantemente los mensajes p&uacute;blicos y privados entre usuarios, y cuando se detecta que las reglas se rompen, esa persona es expulsada <strong>de forma permanente</strong> del foro.
						</p>
						<h1>&iquest;Dónde estamos?</h1>
						<p>
							Las &uacute;nicas cuentas que tenemos son las siguientes:
						</p>
						<ul>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="http://argenpills.org">http://argenpills.org</a> → foro de reduccion de da&ntilde;os. Registro gratuito y abierto a todo el mundo.
							</li>
							<li>
								<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/argenpills">https://www.twitter.com/argenpills</a> → cuenta oficial de twitter.
							</li>
							<li>
								Telegram: <a target="_blank" rel="noopener noreferrer" href="https://t.me/argenpills_oficial">https://t.me/argenpills_oficial</a> → bot de Telegram para publicar las pastillas en circulacion en Argentina
							</li>
						</ul>
						<p>
							Cualquier otra cuenta, sea en Instagram, Facebook, Threads, Mastodon u otra red social que use el nombre de Argenpills <strong>no tiene nada que ver con nosotros</strong>.
						</p>

					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default AboutUs;