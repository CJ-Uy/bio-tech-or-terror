import Image from "next/image";

export default function WhatYouCanDo() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					WHAT YOU CAN DO
				</h1>
			</div>

			{/* Main container for the two columns */}
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
				{/* Left Column */}
				<div>
					<div>
						As we have seen, biohazards pose a great threat to communities around the world. It was
						made evident to people when the COVID-19 pandemic has continued to bring lasting effects
						worldwide with regards to medicine, hygiene, and policies. With this in mind, it is
						imperative that we, the community, know how to deal with future biohazards and bioagents
						similar in nature.
					</div>
					<div>
						<Image
							src="/svgs/family dommsday preppers.svg"
							alt="doomsday preparation"
							width={300}
							height={200}
							style={{ width: "100%", height: "auto" }}
						/>
						<a href="https://canva.com">Source: canva.com</a>
					</div>
					<div>
						The U.S. Department of Homeland Security, through their website Ready.org, categorizes
						biohazard preparedness in three stages: before, during, and after exposure. Before
						exposure they recommend to:
					</div>

					{/* Use Grid for a responsive layout. 1 column on mobile, 2 on medium screens+ */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{/* Item 1 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Have an emergency kit ready with supplies
							</p>
						</div>
						{/* Item 2 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Keep immunizations and immunization records up-to-date.
							</p>
						</div>
						{/* Item 3 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Install a high-efficiency particulate air (HEPA) filter in the house to reduce the
								risk of bioagents contaminating the air.
							</p>
						</div>
						{/* Item 4 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Have a plan for emergencies—where to go, who to contact, what things to bring, etc.
							</p>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div>
					<div>
						During a possible biohazard event, people should stay tuned to the news on the
						television, internet, or radio for the latest information regarding the symptoms and
						duration of the disease, areas at risk, possible/distributed medications, and check-up
						and quarantine centers. The following actions are also advised:
					</div>

					{/* Use Grid here as well for consistency and responsiveness */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{/* Item 1 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Get away from areas with suspected suspicious substances.
							</p>
						</div>
						{/* Item 2 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Practice good hygiene—frequently wash your hands with soap and wear clean garments.
							</p>
						</div>
						{/* Item 3 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans text-left italic">Avoid crowds of people.</p>
						</div>
						{/* Item 4 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Do not share food, water, or utensils.
							</p>
						</div>
						{/* Item 5 */}
						<div className="flex items-center gap-6 md:col-span-2">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans text-left italic">
								Cover your mouth and nose with layers of fabric whilst being breathable (e.g. 2-3
								layers of handkerchief/t-shirt/towel).
							</p>
						</div>
					</div>

					<div>
						In the case that you yourself have been exposed to the biological agents, you should
						remove and bag your personal belongings, including your clothes. Follow instructions on
						how to dispose of contaminated items. Then you should contact relevant authorities and
						seek medical assistance, especially if your symptoms match those described. For the
						meantime, you should stay away from other people and expect to quarantine yourself.
					</div>
				</div>
			</div>
		</div>
	);
}
