import Image from "next/image";

export default function BiotechForBad() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					Biotechnology For Bad
				</h1>
			</div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:py-5 [&>*]:[&_div]:text-lg">
				<div>
					<div>
						<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
							Mechanisms
						</h1>
					</div>
					<h2 className="font-koulen text-2xl">Biological Agents</h2>
					<div className="!pb-0">
						With the enormous microbial diversity on our planet, pathogenic species are capable of
						causing diseases to humans. The core component that makes infecting numerous people
						possible is through the use of disease-causing pathogenic microorganisms or toxins
						called Biological Agents. The US Centers for Disease Control and Prevention (CDC) has
						identified and categorized these agents into (Christian, 2013):
					</div>
					<div className="flex flex-col gap-x-6 pt-0 md:flex-row [&>*]:block [&>*]:[&>*]:aspect-square [&>*]:grow [&>*]:p-2 [&>*]:text-center">
						<div>
							<div>
								<Image
									src="/svgs/bacteria.svg"
									alt="bacteria"
									width={50}
									height={100}
									className="h-full w-full object-cover"
								/>
							</div>
							Bacterial
						</div>
						<div>
							<div>
								<Image
									src="/svgs/virus.svg"
									alt="virus"
									width={100}
									height={300}
									className="h-full w-full object-cover"
								/>
							</div>
							Viral
						</div>
						<div>
							<div>
								<Image
									src="/svgs/fungi.svg"
									alt="fungi"
									width={300}
									height={300}
									className="h-full w-full object-cover"
								/>
							</div>
							Fungi
						</div>
						<div>
							<div>
								<Image
									src="/svgs/toxins.svg"
									alt="Biological Toxins"
									width={300}
									height={300}
									className="h-full w-full object-cover"
								/>
							</div>
							Biological Toxins
						</div>
					</div>
					<h2 className="font-koulen text-2xl">How disease spreads through Biological Agents</h2>
					<div className="!pb-0">
						These microorganisms generally cause illnesses when they enter the body of an organism.
						Common routes of exposure of these biological agents include the respiratory system,
						skin and mucous membranes, and the digestive system. A host is an organism infected by a
						biological agent, capable of transmitting the pathogen to other organisms, including
						susceptible hosts. With these mechanisms, various methods of spreading these agents
						include (Bedada et al., 2017):
					</div>
					<div className="my-0 py-0 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">Human-to-human transmission</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">Contamination of food and water supply</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">Per-cutaneous</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">Oral transmission</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">Physical objects</p>
						</div>
					</div>
					<div>
						Most of these biological agents (80%) are <b>zoonotic</b> in origin, and can also spread
						from one particular animal species to another. When a human population is attacked with
						a specific biological agent, it would likely pose health risks to the animal populations
						in that target area as well.
					</div>
					<div>
						Biological agents can also be acquired through environmental transmission. When a
						particular area hosts a biological agent, the population of species near the area is
						likely to be infected. These environmental microbes adapted pathogenicity from
						non-mammalian selection pressures. As a result, environmental microbes that can survive
						mammalian temperatures are a major threat both in natural transmission of illnesses and
						as weapons for biological attacks.
					</div>
					<h2 className="font-koulen text-2xl">Modes of delivery and Method of dissemination</h2>
					<div>
						While biological agents can be transmitted either through wet forms, dried forms are
						more commonly used with its better dissemination characteristics and advantages in
						storage (e.g dried powders) (Bedada et al., 2017). One of the most effective methods of
						delivery is through the aerosolization of these agents. The release of 1-5 micron-sized
						particles in an area infects and kills people faster while also being difficult to
						detect with its tasteless and odorless characteristics. However, non-aerosolized attacks
						can still result in morbidity and mortality.
					</div>
					<h2 className="font-koulen text-2xl">Three Categories of Biological Agents</h2>
					<div className="!pb-0">
						Different biological agents have different transmissibility, lethality, and way for
						dissemination. Given these factors, the US Centers for Disease Control and Prevention
						(CDC) recognized three categories of Biological Agents (Bedada et al., 2017):
					</div>
					<div className="my-0 py-0 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">A</span>
							</div>
							<p className="font-dm_sans italic">
								easily transmitted from person-to-person, high mortality rate, potential for major
								public health impact
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">B</span>
							</div>
							<p className="font-dm_sans italic">
								easy to disseminate, moderate morbidity rates, low mortality rates
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">C</span>
							</div>
							<p className="font-dm_sans italic">
								emerging pathogens that could be engineered for mass dissemination
							</p>
						</div>
					</div>
					<div className="!pb-0">
						Among these classifications, Category A poses the highest risk for national security due
						to the following features (Jansen et al., 2014):
					</div>
					<div className="my-0 py-0 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">
								They are easily disseminated or transmitted person-to-person, causing secondary and
								tertiary cases.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">
								They cause high mortality with the potential to have a major public health impact,
								including the impact on healthcare facilities.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">
								They may cause public panic and social disruption.
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">
								They require special action for public health preparedness.
							</p>
						</div>
					</div>
					<h2 className="font-koulen text-2xl">Examples of Biological Agents</h2>
				</div>
				<div>
					<div>
						<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
							Strategies
						</h1>
					</div>
					<h2 className="font-koulen text-2xl">Biotechnology in Bioterrorism Strategies</h2>
					<div className="!pb-0">
						The impact of a bioterrorist attack depends on the following factors (Bedada et al.,
						2017):
					</div>
					<div className="my-0 py-0 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">Agent used</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">Amount disseminated</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">Dispersal method</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">Weather/Release conditions</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">Pre-existing immunity of the exposed population</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">6</span>
							</div>
							<p className="font-dm_sans italic">How quickly the attack was identified</p>
						</div>
					</div>
					<div>
						While biological agents are already threatening in itself, biotechnology has the
						capacity to significantly enhance the lethality of these bioweapons. Before the 20th
						century, the most common dispersion method was through food and water contamination.
						Nowadays, biological agents can now be stockpiled; there is control in the amount of
						agents dispersed in a target population and when it is disseminated—reducing the impact
						of weather on the spread of pathogens.
					</div>
					<div>
						Through methods of genetic engineering, the repertoire of useful biological agents has
						broadened. Researchers can also place resistance genes to these weapons to ensure
						effective transmission or difficult treatment options for the affected. Moreover,
						countermeasures such as vaccines can be bypassed by genetically modifying the agents to
						express immune modifier genes (e.g. IL-4 in ectromelia virus). Depending on the intent,
						agents can also be designed to incapacitate people rather than killing them.
					</div>
					<div>
						The zoonotic nature of most biological agents enables terrorist attacks through animals.
						Mobile animals, such as insects, can be a medium for biological agent attacks and infect
						masses of people.
					</div>
					<h2 className="font-koulen text-2xl">Biowarfare Strategies</h2>
					<div>
						While strategic bioterrorism includes enhancing the capacity of bioweapons to inflict as
						much harm as possible, biowarfare strategies focus more on the disruptions bioweapons
						provide towards a target country. Information warfare between countries may use
						bioweapons to open several vulnerabilities to societies, exploiting health crises to
						destabilize societies, discredit institutions, or divert political attention. During the
						COVID-19 pandemic, massive social and psychological impacts were apparent within local
						communities, causing momentary instability within a nation. The mere notion of a
						biological threat can create turmoil in a society by instilling anxiousness and fear in
						the masses, resulting in blame-shifting of politicians and public figures under media
						coverage.
					</div>
					<div>
						No matter how small the biological attacks are, it can reach strategic levels of success
						depending on (Gisselsson, 2022):
					</div>
				</div>
			</div>
		</div>
	);
}
