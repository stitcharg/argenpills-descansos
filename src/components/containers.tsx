interface iContainerProps {
	caption: string;
}

const Arrow = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
		</svg>
	)
}

const FullToEmpty = (props: iContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row shadow-md p-5">
			<div className="text-xs sm:text-center p-3 content-center italic">
				{props.caption}
			</div>
			<div className="flex flex-row place-items-center place-content-center">
				<div>
					<img src="/full.png" className="xs:w-8 md:w-10" alt="Lleno"></img>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<img src="/medium.png" className="xs:w-8 md:w-10" alt="Medio"></img>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<img src="/empty.png" className="xs:w-8 md:w-10" alt="Vacio"></img>
				</div>
			</div>
		</div>
	)
}

const Full = (props: iContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row shadow-md p-5">
			<div className="text-xs sm:text-center p-3 content-center italic">
				{props.caption}
			</div>
			<div className="flex flex-row place-items-center place-content-center">
				<div>
					<img src="/full.png" className="xs:w-8 md:w-10" alt="Lleno"></img>
				</div>
			</div>
		</div>
	)
}


const Empty = (props: iContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row shadow-md p-5">
			<div className="text-xs sm:text-center p-3 content-center italic">
				{props.caption}
			</div>
			<div className="flex flex-row place-items-center place-content-center">
				<div>
					<img src="/empty.png" className="xs:w-8 md:w-10" alt="Vacio"></img>
				</div>
			</div>
		</div>
	)
}

const Filling = (props: iContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row shadow-md p-5">
			<div className="text-xs sm:text-center p-3 content-center italic">
				{props.caption}
			</div>
			<div className="flex flex-row place-items-center place-content-center">
				<div>
					<img src="/empty.png" className="xs:w-8 md:w-10" alt="Vacio"></img>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<img src="/medium.png" className="xs:w-8 md:w-10" alt="Medio"></img>
				</div>

			</div>
		</div>
	)
}



const Half = (props: iContainerProps) => {
	return (
		<div className="flex flex-col md:flex-row shadow-md p-5">
			<div className="text-xs sm:text-center p-3 content-center italic">
				{props.caption}
			</div>
			<div className="flex flex-row place-items-center place-content-center">
				<div>
					<img src="/medium.png" className="xs:w-8 md:w-10" alt="Vacio"></img>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<img src="/medium.png" className="xs:w-8 md:w-10" alt="Medio"></img>
				</div>

			</div>
		</div>
	)
}



export { FullToEmpty, Full, Empty, Filling, Half }