import Image from "next/image";

export default function DevelopmentOfPreparationAndMitigationStrategies() {
	return (
		<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
			{/* Left Column */}
			<div>
				<h3 className="font-koulen -mb-3 text-3xl">
					Development of Preparation and Mitigation Strategies
				</h3>
				<div>
					The use of biotechnology in biowarfare and bioterrorism as weapons and defensive
					mechanisms can potentially increase the severity and lethality of attacks or strengthen
					protection. The 1925 Geneva Protocol and the 1972 Biological and Toxic Weapon Convention
					(BTWC) still stands as an important international framework for global cooperation and
					bioweapon regulation. Development and production of any bioweapons for use in war is
					strictly prohibited under the convention. However, many nations, including the United
					States, Japan, and Union of Soviet Socialist Republic, continued bioweapon research
					despite treaty signatories. Although internationally recognized, the BTWC do not have the
					capacity to inspect bioweapons from signed countries and have only broadly defined which
					activities or weapons are prohibited (Jansen et al., 2014).
				</div>
				<div>
					To address this limitation, governments have created and determined a restricted list of
					dangerous bioweapons and toxins. Mere basis of possession alone may warrant a prosecution
					to the carrying individual. The same list is also used to develop countermeasures for
					biological attacks, including:
				</div>
			</div>

			{/* Middle Column */}
			<div>
				<div>
					<Image
						src="/svgs/un convention.svg"
						alt="petri dish"
						width={300}
						height={200}
						style={{ width: "100%", height: "auto" }}
					/>
					<a href="https://legal.un.org/avl/images/ha/cpdpsucw/09-l.jpg">Source: legal.un.org</a>
				</div>
				{/* Use Grid for a responsive layout. 1 column on mobile, 2 on medium screens+ */}
				<div className="grid grid-cols-1 gap-8 [&>*]:grid-cols-1 [&>*]:gap-8 [&>*]:md:grid-cols-2">
					<div className="grid">
						{/* Item 1 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans text-left italic">Increased vigilance</p>
						</div>
						{/* Item 2 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans text-left italic">Detection devices</p>
						</div>
					</div>
					<div className="grid">
						{/* Item 3 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans text-left italic">Diagnostics</p>
						</div>
						{/* Item 4 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans text-left italic">Vaccines</p>
						</div>
					</div>
					<div className="grid">
						{/* Item 5 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans text-left italic">Drugs</p>
						</div>
						{/* Item 6 */}
						<div className="flex items-center gap-6">
							<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">6</span>
							</div>
							<p className="font-dm_sans text-left italic">Therapeutic immunoglobulins</p>
						</div>
					</div>
				</div>
			</div>

			{/* Right Column */}
			<div>
				<div>
					Moreover, the same restricted list is used to analyze factors contributing to the threat
					of a biological agent, and attempt identifying other potentially dangerous microbes using
					an algorithm. The algorithm parameters include:
				</div>
				{/* Item 1 */}
				<div className="flex flex-row-reverse items-center gap-6">
					<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
						<span className="font-koulen text-4xl font-bold text-black">1</span>
					</div>
					<p className="font-dm_sans text-left italic">Mortality</p>
				</div>

				{/* Item 2 */}
				<div className="flex flex-row-reverse items-center gap-6">
					<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
						<span className="font-koulen text-4xl font-bold text-black">2</span>
					</div>
					<p className="font-dm_sans text-left italic">Need for hospitalization</p>
				</div>
				{/* Item 3 */}
				<div className="flex flex-row-reverse items-center gap-6">
					<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
						<span className="font-koulen text-4xl font-bold text-black">3</span>
					</div>
					<p className="font-dm_sans text-left italic">Likelihood for dissemination</p>
				</div>
				{/* Item 4 */}
				<div className="flex flex-row-reverse items-center gap-6">
					<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
						<span className="font-koulen text-4xl font-bold text-black">4</span>
					</div>
					<p className="font-dm_sans text-left italic">Availability of countermeasures</p>
				</div>
				{/* Item 5 */}
				<div className="flex flex-row-reverse items-center gap-6">
					<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
						<span className="font-koulen text-4xl font-bold text-black">5</span>
					</div>
					<p className="font-dm_sans text-left italic">Public perception</p>
				</div>
			</div>
		</div>
	);
}
