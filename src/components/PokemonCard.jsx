import PropTypes from "prop-types";
import pokeball from "../img/pokeball.png";
import { useState } from "react";

export function PokemonCard({
	id,
	name,
	img,
	type,
	weight,
	height,
	stats,
	statsName
}) {
	const [isShown, setIsShown] = useState(false);

	return (
		/* container */
		<div className='w-full p-10  sm:p-[50px] grid grid-cols-2'>
			{/* show */}
			{isShown && (
				<div className=' h-full col-start-1 col-end-2'>
					{/* stat-container-title */}
					<div className='fixed w-[140px] top-16 left-4 sm:w-[240px] md:w-[300px] md:h-[450px] md:top-20 md:left-20'>
						<p className='text-center text-2xl bg-white rounded-md py-1 font-bold'>
							{name}
						</p>
						{/* img title */}
						<img
							className='h-[185px] mx-auto shadow-black'
							src={img}
							alt={name}
						/>
						{/* type */}
						<div className='w-full flex border-b border-zinc-400'>
							<span className='w-1/2 py-2 bg-zinc-300 text-center font-semibold'>
								Type
							</span>
							<span className='w-1/2 py-2 bg-white pl-3 font-semibold'>
								{type}
							</span>
						</div>
						{/* weight */}
						<div className='w-full flex border-b border-zinc-400'>
							<span className='w-1/2 py-2  bg-zinc-300 text-center font-semibold'>
								Weight
							</span>
							<span className='w-1/2 py-2 bg-white pl-3 font-semibold'>
								{weight}
							</span>
						</div>
						{/* height */}
						<div className='w-full flex border-b border-zinc-400'>
							<span className='w-1/2 py-2 bg-zinc-300 text-center font-semibold'>
								Height
							</span>
							<span className='w-1/2 py-2 bg-white pl-3 font-semibold'>
								{height}
							</span>
						</div>
						{/* stats */}
						<div className='flex'>
							<div className='w-1/2 flex flex-col'>
								{statsName.map((stats, index) => (
									<span
										key={index}
										className='w-full py-2 bg-zinc-500 border-b font-semibold text-white text-center'>
										{stats}
									</span>
								))}
							</div>
							<div className='w-1/2 flex flex-col'>
								{stats.map((stats, index) => (
									<span
										key={index}
										className='w-full py-2  bg-zinc-500 border-b border-l  font-semibold text-white pl-3'>
										{stats}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* right */}
			<div className='h-0 col-start-2 col-end-3'>
				<div className='py-8'>
					<div
						className='cursor-pointer rounded-lg shadow-lg  h-14 bg-gradient-to-r from-zinc-200 via-orange-400 to-red-500 flex items-center gap-3 hover:-translate-x-8 hover:shadow-black/30 transition-all'
						onMouseEnter={() => setIsShown(true)}
						onMouseLeave={() => setIsShown(false)}>
						<img src={img} alt={name} className='h-24' />
						<p className='text-black text-xl sm:text-2xl'>No. {id}</p>
						<p className='hidden text-2xl font-bold sm:block'>{name}</p>
						<img
							src={pokeball}
							alt='pokeball'
							className='hidden h-12 md:block'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

PokemonCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.any,
	type: PropTypes.string.isRequired,
	weight: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	stats: PropTypes.array.isRequired,
	statsName: PropTypes.array.isRequired
};
