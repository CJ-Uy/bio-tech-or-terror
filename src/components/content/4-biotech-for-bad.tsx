import Image from "next/image";
import BioWeaponsTable from "./biotech-for-bad/BioWeaponsTable";

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
					<BioWeaponsTable />
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
					<div className="!pb-0">
						No matter how small the biological attacks are, it can reach strategic levels of success
						depending on (Gisselsson, 2022):
					</div>
					<div className="my-0 py-0 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">
								How good the distraction helped complete the information war objective
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">
								How it triggered mass worries by using the “contagiousness” of pathogens to instill
								anxiety
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">
								How it instigates fear of severe illnesses or death to the communities
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">
								How the attack cannot be traced. An unknown origin of an biological attack is
								helpful in directing conspiracy theories towards national institutions
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">
								How it maximizes element of surprise and circumvent countermeasures of target
								countries
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">6</span>
							</div>
							<p className="font-dm_sans italic">
								How well it creates psychological impact to frame public figures by media coverage
							</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">7</span>
							</div>
							<p className="font-dm_sans italic">
								How small-scale it used to prevent the spread of pathogens back to the attacker
							</p>
						</div>
					</div>
					<div>
						<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
							Historical Development and Use of Biological Weapons
						</h1>
					</div>
					<h2 className="font-koulen text-2xl">600-300 BC</h2>
					<div>
						The first instance of biological agents in warfare can be traced back to 600 BC, when
						the Assyrians used fungal toxins to poison the wells of their enemies and gain military
						advantages. Similarly in 300 BC, the Greeks, Romans, and Persians contaminated enemy
						water wells with animal cadavers.
					</div>
					<h2 className="font-koulen text-2xl">12th-15th Century</h2>
					<div>
						Around the 12th century, the same strategy was used by Emperor Barbarossa&apos;s troops
						during the siege of Tortona in Italy. Modern sources report over a thousand decomposing
						corpses of soldiers and animals were used to contaminate enemy water wells.
					</div>
					<div>
						One of the most well known early attempts of bioterrorism in the 14th century is the
						medieval siege of Kaffa. The Mongol Tartar army thought of catapulting dead corpses of
						their comrades within the walls of Kaffa. The infected Genoese fled from Kaffa,
						weakening the defense and forcing a retreat. Modern sources speculate that the black
						plague spread to other parts of Europe from the escaping Kaffa victims.
					</div>
					<div>
						Similarly, Lithuanian soldiers catapulted corpses of dead soldiers in the city during
						the siege of Carolstein in 1422. Lethal fevers dispersed throughout the area,
						frightening the people in the community.
					</div>
					<h2 className="font-koulen text-2xl">12th-15th Century</h2>
					<div>
						In the summer of 1763, during the French-Indian war, British officers distributed
						blankets infected with smallpox to Indian tribes that were hostile to the British.
						During the American Revolutionary War (1776-1781), anecdotal references suggest attempts
						to use infected British soldiers to spread smallpox. In the American Civil War, there
						are unverified claims that contaminated clothing may have been used, causing widespread
						disease.
					</div>
					<h2 className="font-koulen text-2xl">
						20th Century (The rise of modern biological weapons)
					</h2>
					<div>
						During World War I, it was frequently reported that cattle from Germans sent into enemy
						states had <i>Bacillus anthracis</i> and <i>Pseudomonas mallei</i>, causing severe
						diseases such as anthrax and glanders. The events of World War I have led to the
						drafting of the 1925 Geneva Protocol for the Prohibition of the Use in War of
						Asphyxiating, Poisonous or Other Gases and of Bacteriological Methods of Warfare.
					</div>
					<div>
						Despite the Geneva protocol, biological weapons were expected to be used in the event of
						a World War II. Multiple countries started conducting research programs to develop
						bioweapons. Japan&apos;s infamous Unit 731 was considered as the most ambitious, spearheaded
						by Lieutenant general Ishii, conducting experiments on war prisoners, including Koreans,
						Chinese, and Russian soldiers. Experiments included the use of <i>Yersinia pestis</i>{" "}
						(Plague), <i>Vibrio cholerae</i> (Water Safety threats), <i>Neisseria meningitidis</i>,
						and <i>Bacillus anthracis</i> (Anthrax). The British army also experimented on Anthrax
						bombs.
					</div>
					<div>
						During this period, the United States was far behind other nations in bioweapon
						research. After World War II, their scientific progress significantly hastened after
						they received the Japanese Unit 731 experiment results while working with the former
						director of Unit 731, Lt. Gen. Ishii.
					</div>
					<div>
						The United States has conducted experiments on civilians during their research. In
						September 1950, San Francisco Bay was clouded with <i>Serratia marcescens</i>, a skin
						and respiratory tract infecting pathogen. Roughly one million people were unknowingly
						exposed during this covert operation, with several individuals having respiratory
						diseases, with a few of them dying in the process. Later in the decade, swarms of
						mosquitoes with yellow fevers were released in Georgia and Florida to verify the
						country&apos;s vulnerability in case of an air attack. In the New York Subway of Summer
						1966, the pathogen <i>Bacillus subtilis</i> was released from a single station and
						spread throughout the whole subway network. In 1969, the former president of United
						States Nixon halted the program, shifting their research from offensive bioweapons to
						defensive countermeasures.
					</div>
					<div>
						In 1972, the Biological and Toxin Weapons Convention (BTWC) was negotiated, signed, and
						ratified. While many countries signed the treaty, several countries continued
						researching for potential bioweapons. Among these is the United Soviet Socialist
						Republics, who formed the organization Chief Directorate for Biological Preparation
						(Biopreparat) aiming to develop bioweapons that are new, lethal, easily dispersed, and
						difficult to identify. The organization reportedly used genetic engineering in
						biological agents to enhance its aggressiveness. From the mid-1980s until the present,
						the number of subnational terrorist and radical groups that are independently working on
						offensive use of biological weapons were reportedly increasing.
					</div>
					<h2 className="font-koulen text-2xl">Notable Recent Examples of Bioterrorism</h2>
					<div>
						In the autumn of 2001, a series of letters containing anthrax spores were sent by mail
						to US senators, journalists, and media buildings. In the process, 22 people were
						seriously injured, five of whom died, and probably thousands were contaminated and
						advised to use antibiotics for an extended period of time. The event caused much anxiety
						and stress, and the direct and indirect costs related to the investigation, clean-up and
						installation of detection equipment, scanning mail and other measures to prevent further
						attacks were high. Furthermore, the quality of life of those involved at the time has
						been badly affected. To this day, powdered letters are a regular phenomenon worldwide,
						usually containing hoax materials, but occasionally containing other toxic materials
						such as ricin.
					</div>
				</div>
			</div>
		</div>
	);
}
