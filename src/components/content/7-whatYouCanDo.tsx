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
					<div className="md:!px-32">
						<Image
							src="/svgs/doomsday prep.svg"
							alt="doomsday preparation"
							width={300}
							height={300}
							style={{ width: "100%", height: "auto" }}
						/>
						<a href="https://canva.com">Source: canva.com</a>
					</div>
					<div className="!pb-0">
						The U.S. Department of Homeland Security, through their website Ready.org, categorizes
						biohazard preparedness in three stages: before, during, and after exposure. Before
						exposure they recommend to:
					</div>

					<div className="my-0 !pt-0 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-2 [&>*]:!px-5 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">Have an emergency kit ready with supplies</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">
								Have a plan for emergencies—where to go, who to contact, what things to bring, etc.
							</p>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">
								Install a high-efficiency particulate air (HEPA) filter in the house to reduce the
								risk of bioagents contaminating the air.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">
								Keep immunizations and immunization records up-to-date.
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

					<div className="my-0 py-0 !pt-0 [&>*]:my-5 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">
								Get away from areas with suspected suspicious substances.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">
								Practice good hygiene—frequently wash your hands with soap and wear clean garments.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">
								Cover your mouth and nose with layers of fabric whilst being breathable (e.g. 2-3
								layers of handkerchief/t-shirt/towel).
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">Do not share food, water, or utensils.</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">Avoid crowds of people.</p>
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
