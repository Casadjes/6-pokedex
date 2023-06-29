import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export function PokeList() {
	const [allPokemon, setAllPokemon] = useState([]);

	const getAllPokemon = async () => {
		const response = await fetch(
			"https://pokeapi.co/api/v2/pokemon?limit=100offset=0"
		);
		const data = await response.json();
		function createPokemonObject(results) {
			results.forEach(async (pokemon) => {
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);
				const data = await res.json();
				setAllPokemon((currentList) => [...currentList, data]);
				await allPokemon.sort((a, b) => a.id - b.id);
			});
		}
		createPokemonObject(data.results);
	};

	useEffect(() => {
		getAllPokemon();
	}, []);

	return (
		/* app container */
		<div className='h-screen w-full  bg-gradient-to-r from-red-500 via-orange-400 to-zinc-200 overflow-y-scroll'>
			{allPokemon.map((pokemon) => (
				<PokemonCard
					key={pokemon.id}
					id={pokemon.id.toString().padStart(3, "0")}
					name={pokemon.name}
					img={pokemon.sprites.other["official-artwork"].front_default}
					type={pokemon.types[0].type.name}
					weight={pokemon.weight}
					height={pokemon.height}
					stats={pokemon.stats.map((stat) => stat.base_stat).slice(0, 3)}
					statsName={pokemon.stats.map((stat) => stat.stat.name).slice(0, 3)}
				/>
			))}
		</div>
	);
}
