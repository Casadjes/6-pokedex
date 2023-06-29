export function BottomBar() {
	return (
		<div className='absolute bottom-0 h-[50px] w-full bg-black flex items-center justify-end gap-[30px] pr-[50px]'>
			{/* bottom */}
			<div className='flex gap-4 text-white cursor-pointer'>
				{/* bottom btn */}
				<p className='rounded-[50%] py-0  grid place-items-center h-6 w-6 bg-white text-black'>
					A
				</p>
				{/* bg cirlce white */}
				<p>See Details</p>
			</div>
			<div className='flex gap-4 text-white cursor-pointer'>
				{/* bottom btn */}
				<p className='rounded-[50%] py-0  grid place-items-center h-6 w-6 bg-white text-black'>
					X
				</p>
				{/* bg circle white */}
				<p>Habitat</p>
			</div>
		</div>
	);
}
