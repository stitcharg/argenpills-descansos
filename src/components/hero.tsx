function HeroComponent() {
	return (
		<div className="hero min-v-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
			<div className="hero-content text-center text-white">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hola!</h1>
					<p className="py-6">En este sitio vamos a tratar de explicarte porque es importante esperar <strong>al menos 30 dias</strong> entre tomas de extasis</p>
				</div>
			</div>
		</div>
	);
}

export default HeroComponent;