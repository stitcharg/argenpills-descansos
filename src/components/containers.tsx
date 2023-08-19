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
					<Tank altText="Tanque lleno" type={TANK_TYPE.FULL}></Tank>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<Tank altText="Tanque a medio llenar" type={TANK_TYPE.MEDIUM}></Tank>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<Tank altText="Tanque vacio" type={TANK_TYPE.EMPTY}></Tank>
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
					<Tank altText="Tanque lleno" type={TANK_TYPE.FULL}></Tank>
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
					<Tank altText="Tanque vacio" type={TANK_TYPE.EMPTY}></Tank>
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
					<Tank altText="Tanque vacio" type={TANK_TYPE.EMPTY}></Tank>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<Tank altText="Tanque medio lleno" type={TANK_TYPE.MEDIUM}></Tank>
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
					<Tank altText="Tanque medio lleno" type={TANK_TYPE.MEDIUM}></Tank>
				</div>
				<div>
					<Arrow />
				</div>
				<div>
					<Tank altText="Tanque medio lleno" type={TANK_TYPE.MEDIUM}></Tank>
				</div>

			</div>
		</div>
	)
}

//internal methods

interface iTank {
	altText: string,
	type: TANK_TYPE
}

enum TANK_TYPE {
	EMPTY,
	MEDIUM,
	FULL
}

const Tank = (props: iTank) => {
	let imagePath = "";
	switch (props.type) {
		case TANK_TYPE.EMPTY:
			imagePath = "/empty.png";
			break;
		case TANK_TYPE.FULL:
			imagePath = "/full.png";
			break;
		case TANK_TYPE.MEDIUM:
			imagePath = "/medium.png";
			break;
	}

	return (
		<img src={imagePath} className="xs:w-8 md:w-10" alt={props.altText}></img>
	)
}

export { FullToEmpty, Full, Empty, Filling, Half }