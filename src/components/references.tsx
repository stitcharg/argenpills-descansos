import { US, AR } from 'country-flag-icons/react/3x2'
const References = () => {
	//https://pubmed.ncbi.nlm.nih.gov/1359444/
	//<ReferenceLink name="Repeated administration of MDMA causes transient down-regulation of serotonin 5-HT2 receptors" link="https://pubmed.ncbi.nlm.nih.gov/1359444/" />
	return (
		<footer className="footer items-center p-4 bg-neutral text-neutral-content">
			<div className="items-center grid-flow-row">
				<h2 className="text-lg font-bold">Referencias:</h2>
				<ul className="list-disc pl-10">
					<ReferenceLink name="How often can you take MDMA?" link="https://rollsafe.org/page/how-often-can-you-take-mdma-molly-ecstasy-and-roll/" lang="en" />
					<ReferenceLink name="No respectar los descansos" link="https://argenpills.org/showthread.php?tid=1086" lang="es" />
					<ReferenceLink name="C&oacute;mo consumir &eacute;xtasis de forma segura" link="https://argenpills.org/showthread.php?tid=961" lang="es" />
					<ReferenceLink name="Informaci&oacute;n basica sobre MDMA" link="https://argenpills.org/showthread.php?tid=413" lang="es" />
					<ReferenceLink name="Consumir dos d&iacute;as seguidos" link="https://argenpills.org/showthread.php?tid=5" lang="es" />
					<ReferenceLink name="Qu&eacute; es la tolerancia?" link="https://argenpills.org/showthread.php?tid=2468" lang="es" />
					<ReferenceLink name="Long-Term Comedown" link="https://argenpills.org/showthread.php?tid=276" lang="es" />
				</ul>
			</div>
		</footer>
	);
}

interface iReferenceProps {
	link: string,
	name: string,
	lang: string
}
const ReferenceLink = (props: iReferenceProps) => {
	const showFlag = (lang: string) => {
		if (lang == "es") return <AR className='w-4 ml-2' />
		if (lang == "en") return <US className='w-4 ml-2' />
	}

	return (
		<li>
			<a href={props.link} className="flex" target="out">{props.name}
				{showFlag(props.lang)}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
					<path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
					<path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
				</svg>

			</a>
		</li>
	);


}

export default References;