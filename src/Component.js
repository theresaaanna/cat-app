function Component(props) {
	return (
		<div className="Component">
			<header className="Component-header">
				<h2>Name: {props.name}</h2>
			</header>
			<p>
				Job Title: <br />
				{props.title}
			</p>
			<p>
				Lieblings Caterpillar Thema: <br /> {props.topic}
			</p>
			<p>
				Wunsch Essen fÃ¼r die Mittagspause: <br /> {props.meal}
			</p>
		</div>
	);
}

export default Component;
