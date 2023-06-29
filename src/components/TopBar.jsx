import pokeball from "../img/pokeball.png";
import pokeballColor from "../img/pokeballcolor.png";

export function TopBar() {
	return (
		<div className='absolute top-0 left-0 w-full h-[50px] bg-black z-[2]'>
			{/* title */}
			<div className='h-full flex justify-between items-center px-7'>
				{/*  */}
				<h1 className='text-white text-[28px]'>Pokedex</h1>
				<div className='h-full flex items-center gap-5 pl-2'>
					{/* */}
					<div className='bg-zinc-100 flex gap-1 rounded-lg items-center px-5'>
						{/*  */}
						<img
							className='h-8 w-8 rounded-full shadow-lg'
							src={pokeballColor}
							alt='pokeball'
						/>
						<p>75</p>
					</div>
					<div className='bg-zinc-100 flex gap-1 rounded-lg items-center px-5'>
						{/*  */}
						<img
							className='h-8 w-8 rounded-full shadow-lg'
							src={pokeball}
							alt='pokeball'
						/>
						<p>25</p>
					</div>
				</div>
			</div>
		</div>
	);
}
