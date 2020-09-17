import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher.js";
import { HeroCard } from "./HeroCard.js";
const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

	//const heroes = getHeroByPublisher(publisher);
	return (
		<div className="card-columns animate__animated animate__fadeIn">
			<ul>
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</ul>
		</div>
	);
};

export default HeroList;
