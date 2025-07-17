import Image from "next/image";

export default function TitleCard() {
	return (
		<main className="relative flex h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-[#89F6CB] to-[#1E1E1E]">
			{/* Noise overlay for the grainy texture */}
			<div className="absolute inset-0 h-full w-full bg-[url(/svgs/noise.svg)] opacity-50"></div>

			{/* Decorative Bubbles (absolutely positioned) */}
			<div className="absolute top-[45%] left-[20%] aspect-square w-24 rounded-full bg-white opacity-90 shadow-lg"></div>
			<div className="absolute top-[30%] left-[10%] aspect-square w-8 rounded-full bg-white opacity-90 shadow-lg"></div>
			<div className="absolute top-[40%] right-[18%] aspect-square w-12 rounded-full bg-white opacity-90 shadow-lg"></div>
			<div className="absolute top-[45%] right-[8%] aspect-square w-5 rounded-full bg-white opacity-90 shadow-lg"></div>

			{/* Central Element: Wrapper for the flask and main white circle */}
			<div className="relative aspect-square w-2/5 -translate-y-[15%] md:w-1/3 lg:w-1/4">
				{/* The main white circle */}
				<div className="absolute inset-0 rounded-full bg-white shadow-2xl"></div>

				{/* The Flask Image, layered on top */}
				<Image
					src="/svgs/flask.svg"
					alt="Flask Logo"
					fill
					style={{ objectFit: "contain" }}
					className="-translate-x-[5%] -translate-y-[8%] transform drop-shadow-xl"
				/>
			</div>

			{/* Title Text (bottom left) */}
			<div className="absolute bottom-10 left-10 mr-10 text-white md:bottom-20 md:left-20 md:mr-20">
				<h1 className="text-shadow font-koulen text-5xl font-extrabold tracking-widest md:text-7xl">
					BIO: TECH OR TERROR
				</h1>
				<h2 className="mt-2 text-lg text-gray-300 md:text-xl font-dm_sans">
					A Website Exploring Biotechnology used in and against Biowarfare
				</h2>
			</div>
		</main>
	);
}
