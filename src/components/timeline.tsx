import { Chrono } from "react-chrono";

const Timeline = () => {
	return (
		<Chrono
			items={[
				{
					title: "Hora 0",
					cardTitle: "Toma inicial",
					cardDetailedText: `Empieza nuestra aventura, y tomamos la sustancia. 
					Recuerden que el formato de la sustancia no varia y puede ser pastillas o en formato cristal. La droga, en definitiva, es la misma.`,
				},
				{
					title: "Hora +2",
					cardTitle: "En la cresta de la ola",
					cardDetailedText: `
					Estamos en el pico del viaje, todo es amor y felicidad, queremos que no se termine nunca
					Recordemos hidratarnos, comer cositas dulces, frutas (si tenemos disponibles),charlar con nuestros amigos y amigas, darnos besos y sentir la musica. Todo es perfecto!
					`,
				},
				{
					title: "Hora +8",
					cardTitle: "Pasaron 8 horas",
					cardSubtitle: `A mimir`,
					cardDetailedText: `Ya pasaron 8 horas desde que consumimos nuestra ultima dosis. Probablemente estemos durmiendo (o en proceso de hacerlo). Recorda que podes tener varios sintomas cuando intentes dormir,
					incluidos: brain zaps, movimientos involuntarios, levantarte muchas veces a hacer pis, o incluso insomnio. Tu cerebro esta intentando recuperarse de la sustancia, no te asustes`,
				},
				{
					title: "Dia +2",
					cardTitle: "2 dias despues",
					cardSubtitle: `Tuesday Blues`,
					cardDetailedText: `Llegamos al dia martes. Ya pasaron 2 dias de la toma, estamos empezando a volver a la normalidad, pero podemos sentir un bajon animico muy grande. Se le llama "Tuesday Blues" en ingles,
					y es muy comun, dado que el cerebro esta todavia recuperandose. Podes sentir irritabilidad, tristeza, depresion, poca esperanza. Trata de no pelearte con nadie de tu familia, y tene en cuenta
					que es un proceso quimico y va a pasar pronto`
				},
				{
					title: "Dia +4",
					cardTitle: "4 dias despues",
					cardSubtitle: `(Casi) normales`,
					cardDetailedText: `Pasaron 4 dias desde que consumimos. Nos sentimos bastante mejor, dormimos bien, tenemos buen animo, podemos concentrarnos, casi que parece que no tomamos nada el finde, y estamos
					listos para volver al ruedo, pero nuestro cerebro todavia se esta recuperando!`
				},
				{
					title: "Dia +20",
					cardTitle: "20 dias despues",
					cardSubtitle: `Lo que no se ve`,
					cardDetailedText: `Pasaron 20 dias desde la toma de extasis. Tal vez nosotros no nos acordemos, pero nuestro cerebro, recien ahora, puede volver a generar la hormona necesaria para la produccion de 
					serotonina en nuestro cerebro! No hay forma de acelerar este proceso, el cerebro es muy elastico pero necesita mucho tiempo para volver al equilibrio quimico`
				},
				{
					title: "Dia +30",
					cardTitle: "30 dias despues",
					cardSubtitle: `Estamos listos para otro round... o no?`,
					cardDetailedText: `Ya pasaron 30 dias desde nuestra toma de extasis. Esperamos el tiempos suficiente para que la serotonina empiece a recuperarse en nuestro cerebro`
				},
				,
				{
					title: "Dia +60",
					cardTitle: "60 dias despues (o mas!)",
					cardSubtitle: `Cosas buenas les esperan a los que esperan`,
					cardDetailedText: `Pasan 60 dias (o mas!) desde la ultima toma de extasis. Nuestro cerebro esta casi recuperado! Si tenemos ganas, podemos repetir la toma, respetando la dosis recomendada (maximo 120-150mg) de forma 
					segura, teniendo las precauciones y recaudos suficientes`
				},

			]}
			mode="VERTICAL"
			hideControls="true"
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