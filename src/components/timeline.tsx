import { Chrono } from "react-chrono";
import { FullToEmpty, Full, Empty, Filling, Half } from "./containers";



const Timeline = () => {
	return (
		<Chrono
			items={[
				{
					title: "Hora 0",
					cardTitle: "Toma inicial",
					timelineContent: <div>Empieza nuestra aventura, y tomamos la sustancia.
						Recuerden que el formato de la sustancia no varia y puede ser pastillas o en formato cristal. La droga, en definitiva, es la misma. Asumimos que pasaron, al menos, 90 dias desde el ultimo
						consumo de extasis, o es tu primera vez
						<Full caption="Nuestro tanquecito esta lleno de serotonina"></Full>
					</div>
				},
				{
					title: "Hora +2",
					cardTitle: "En la cresta de la ola",
					timelineContent: <div>
						Estamos en el pico del viaje, todo es amor y felicidad, queremos que no se termine nunca
						Recordemos hidratarnos, comer cositas dulces, frutas (si tenemos disponibles), charlar con nuestros amigos y amigas, darnos besos y sentir la musica. Todo es perfecto!
						<br />
						Si estas pensando en redosificar, recorda hacerlo con la <strong>mitad de la dosis original</strong> (si tomaste una pastilla, toma 1/2 mas, si tomaste 1/2, 1/4, etc.). Respetar esto es importante
						para evitar la neurotoxicidad, y cada vez que repitas la toma, vas a sentir menos sensaciones agradables.
						<FullToEmpty caption="Nuestro tanquecito se va vaciando a medida que la sustancia va circulando en nuestro sistema" />
					</div>
				},
				{
					title: "Hora +8",
					cardTitle: "Pasaron 8 horas",
					cardSubtitle: `A mimir`,
					timelineContent: <div>Ya pasaron 8 horas desde que consumimos nuestra ultima dosis. Probablemente estemos durmiendo (o en proceso de hacerlo). Record&aacute; que podes tener varios sintomas cuando intentes dormir,
						incluidos: brain zaps (como "descargas de electricidad en la cabeza"), movimientos involuntarios, sue&ntilde;os muy vividos, levantarte muchas veces a hacer pis, o incluso insomnio. Tu cerebro esta intentando
						recuperarse de la sustancia, no te asustes.
						<Empty caption="Nuestro tanquecito esta totalmente vacio"></Empty>
					</div>
				},
				{
					title: "Dia +2",
					cardTitle: "2 dias despues",
					cardSubtitle: `Tuesday Blues`,
					timelineContent: <div>Ya pasaron 2 dias de la toma, estamos empezando a volver a la normalidad, pero podemos sentir un bajon animico muy grande. Se le llama "Tuesday Blues" en ingles ("Martes triste", porque usualmente,
						si consumimos el dia sabado, hoy seria martes),
						y es muy comun, dado que el cerebro esta todavia recuperandose. Podes sentir irritabilidad, tristeza, depresion, poca esperanza. Trat&aacute; de no pelearte con nadie de tu familia, y tene en cuenta
						que es un proceso quimico y va a pasar pronto.
						<Empty caption="Nuestro tanquecito sigue vacio"></Empty>
					</div>
				},
				{
					title: "Dia +4",
					cardTitle: "4 dias despues",
					cardSubtitle: `(Casi) normales`,
					timelineContent: <div>Pasaron 4 dias desde que consumimos. Nos sentimos bastante mejor, dormimos bien, tenemos buen animo, podemos concentrarnos, casi que parece que no tomamos nada el finde, y estamos
						listos para volver al ruedo, pero nuestro cerebro todavia se est&aacute; recuperando!
						<br />Si sentis que no te est&aacute;s recuperando, o est&aacute;s asustado o preocupado por algun sintoma, te recomendamos acudir al medico! Si no te anim&aacute;s, podes dejar un mensaje en el foro de Argenpills, tal vez
						encuentres alguna respuesta ahi, pero <strong>recorda que no somos medicos ni reemplazmos su funcion</strong>!
						<Empty caption="Nuestro tanquecito sigue vacio! Aunque nos sintamos mejor"></Empty>
					</div>
				},
				{
					title: "Dia +20",
					cardTitle: "20 dias despues",
					cardSubtitle: `Lo que no se ve`,
					timelineContent: <div>Pasaron 20 dias desde la toma de extasis. Tal vez nosotros no nos acordemos, pero nuestro cerebro, recien ahora, puede volver a generar la hormona necesaria para la produccion de
						serotonina en nuestro cerebro! No hay forma de acelerar este proceso, el cerebro es muy elastico pero necesita mucho tiempo para volver al equilibrio quimico
						<Filling caption="Nuestro tanquecito empieza a llenarse nuevamente, lentamente"></Filling>
					</div>
				},
				{
					title: "Dia +30",
					cardTitle: "30 dias despues",
					cardSubtitle: `Estamos listos para otro round... o no?`,
					timelineContent: <div>Ya pasaron 30 dias desde nuestra toma de extasis. Esperamos el tiempos suficiente para que la serotonina empiece a recuperarse en nuestro cerebro
						<Half caption="Nuestro tanquecito pudo llenarse durante 10 dias, pero no llega a llenarse del todo"></Half>
					</div>
				},
				,
				{
					title: "Dia +60",
					cardTitle: "60 dias despues (o mas!)",
					cardSubtitle: `Cosas buenas les esperan a los que esperan`,
					timelineContent: <div>Pasaron <strong>60 dias (o mas!)</strong> desde la ultima toma de extasis. Nuestro cerebro esta casi recuperado!
						Si tenemos ganas, podemos repetir la toma, respetando la dosis recomendada (maximo 120-150mg) de forma
						segura, teniendo las precauciones y recaudos suficientes
						<Full caption="Nuestro tanquecito esta lleno de serotonina nuevamente!"></Full>
					</div>,
				},
				,
				{
					title: "Dia +90",
					cardTitle: "90 dias despues (o mas!)",
					cardSubtitle: `Recuperado completamente!`,
					timelineContent: <div>Pasaron <strong>90 dias (o mas!)</strong> desde la ultima toma de extasis. Nuestro cerebro est&aacute; recuperado! (al menos a nivel quimico)
						Es el tiempo ideal de espera entre consumos de extasis, si queremos disminuir los efectos adversos y problemas a futuro.
						Si tenemos ganas, podemos repetir la toma, respetando la dosis recomendada (maximo 120-150mg) de forma
						segura, teniendo las precauciones y recaudos suficientes
						<Full caption="Nuestro tanquecito esta lleno de serotonina nuevamente!"></Full>
					</div>,
				},

			]}
			mode="VERTICAL"
			hideControls="true"
			useReadMore="true"
			cardHeight="200"
			theme={{
				primary: "#3a86ff",
				secondary: "#8338ec",
				cardBgColor: "#EEE",
				titleColor: "#ff006e",
				titleColorActive: "#fff",
			}}
			fontSizes={{
				cardSubtitle: '1.2rem',
				cardTitle: '1.5rem',
				title: '2rem',
			}}
		/>
	);
};

export default Timeline;