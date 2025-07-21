import Image from "next/image";

const MainListItem = ({
	number,
	title,
	hasSublist = false,
}: {
	number: string;
	title: string;
	hasSublist?: boolean;
}) => (
	<div className={hasSublist ? "!mb-0 flex items-center gap-6 !pb-0" : "flex items-center gap-6"}>
		{" "}
		{/* Use items-start for long titles */}
		<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
			<span className="font-koulen text-4xl font-bold text-black">{number}</span>
		</div>
		<p className="font-dm_sans italic">{title}</p>
	</div>
);

// A reusable component for the sub-item
const SubListItem = ({ text }: { text: string }) => (
	<p className="!my-0 !ml-[68px] !py-0 text-base text-gray-700">
		{" "}
		{/* 12 (w) + 16 (gap) + 40 (indent) = 68px */}
		<span className="mr-2">-</span>
		{text}
	</p>
);

export default function MovingForward() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					MOVING FORWARD
				</h1>
			</div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
				<div>
					<h2 className="font-koulen text-2xl">
						Development of Preparation and Mitigation Strategies
					</h2>
					<div>
						<Image
							src="/svgs/un convention.svg"
							alt="flags"
							width={300}
							height={200}
							style={{ width: "100%", height: "auto" }}
						/>
						<a href="https://canva.com">Source: canva.com</a>
					</div>
					<div>
						The use of biotechnology in biowarfare and bioterrorism as weapons and defensive
						mechanisms can potentially increase the severity and lethality of attacks or strengthen
						protection. The 1925 Geneva Protocol and the 1972 Biological and Toxic Weapon Convention
						(BTWC) still stands as an important international framework for global cooperation and
						bioweapon regulation. Development and production of any bioweapons for use in war is
						strictly prohibited under the convention. However, many nations, including the United
						States, Japan, and Union of Soviet Socialist Republic, continued bioweapon research
						despite treaty signatories. Although internationally recognized, the BTWC do not have
						the capacity to inspect bioweapons from signed countries and have only broadly defined
						which activities or weapons are prohibited (Jansen et al., 2014).
					</div>
					<div>
						To address this limitation, governments have created and determined a restricted list of
						dangerous bioweapons and toxins. Mere basis of possession alone may warrant a
						prosecution to the carrying individual. The same list is also used to develop
						countermeasures for biological attacks, including:
					</div>
					<div className="my-0 py-0 !pt-0 [&>*]:my-5 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">Increased vigilance</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">Detection devices</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">Diagnostics</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">Vaccines</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">Drugs</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">6</span>
							</div>
							<p className="font-dm_sans italic">Therapeutic immunoglobulins</p>
						</div>
					</div>
					<div>
						Moreover, the same restricted list is used to analyze factors contributing to the threat
						of a biological agent, and attempt identifying other potentially dangerous microbes
						using an algorithm. The algorithm parameters include:
					</div>
					<div className="my-0 py-0 !pt-0 [&>*]:my-5 [&>*]:!px-1 [&>*]:!py-1">
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">1</span>
							</div>
							<p className="font-dm_sans italic">Mortality</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">2</span>
							</div>
							<p className="font-dm_sans italic">Need for hospitalization</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">3</span>
							</div>
							<p className="font-dm_sans italic">Likelihood for dissemination</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">4</span>
							</div>
							<p className="font-dm_sans italic">Availability of countermeasures</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#89F6CB] to-[#509077]">
								<span className="font-koulen text-4xl font-bold text-black">5</span>
							</div>
							<p className="font-dm_sans italic">Public perception</p>
						</div>
					</div>
					<div>
						Numerous microbial diseases, including the human immunodeficiency virus (HIV), severe
						acute respiratory syndrome (SARS) coronavirus, Ebola virus, and the recent CoVid-19,
						emerged in recent years. Humanity will continue to identify and confront new microbial
						threats, which can potentially be used as biological agents in the future (Casadevall,
						2012).
					</div>
					<div>
						In 2003, the spread of SARS coronavirus witnessed international cooperation, strong
						surveillance, and a healthy research environment, enabling rapid identification of the
						agent. The emerging biotechnologies and multidisciplinary approaches from this period
						developed deep molecular understanding and diagnostics and vaccine candidates. All of
						these developments were crucial in containing the recent, highly contagious COVID-19
						(Aileni et al., 2022). These developments highlight that any understanding and
						development of any defense strategy against current biological agents also considers and
						develops countermeasures for unidentified threats in the future.
					</div>
				</div>
				<div>
					<h2 className="font-koulen text-2xl">
						Developments in Biotechnology from the COVID-19 Experience
					</h2>
					<div>
						The recent COVID-19 experience exposed the global community&apos;s lack of preparedness
						for a rapid pandemic virus spread, resulting in significant human morbidities and
						fatalities in the initial days of the pandemic (Aileni et al., 2022). However, it also
						led to multiple advancements in Biotechnology, including development in diagnostics,
						broadened understanding of vaccine platforms, immunoinformatics, and Artificial
						Intelligence (AI) applications.
					</div>
					<h2 className="font-dm_sans !pb-0 text-xl italic">I. Diagnostics</h2>
					<div>
						In the event of biological attacks, diagnostics tests are pivotal in determining the
						severity and transmissibility of an illness. Identifying the disease&apos;s threat as
						soon as possible is crucial in determining a community&apos;s preparation and mitigation
						strategies. The tests&apos; reliability and effectiveness is also essential to prevent
						false-positives or false-negatives tests. The COVID-19 has made significant improvements
						in diagnostic tests, including:
					</div>
					<div className="my-0 py-0 !pt-0 [&>*]:my-5 [&>*]:!px-1 [&>*]:!py-1">
						<MainListItem
							number="1"
							title="Reverse Transcription-Quantitative Polymerase Chain Reaction"
						/>

						<MainListItem
							number="2"
							title="Isothermal Nucleic Acid Amplification"
							hasSublist={true}
						/>
						<SubListItem text="RT-LAMP" />
						<SubListItem text="Transcription-Mediated Amplification" />

						<MainListItem number="3" title="CRISPR-Based COVID Detection Assay" />
						<MainListItem number="4" title="Microarray Nucleic Acid Hybridization" />
						<MainListItem number="5" title="Genome Sequencing" />
						<MainListItem number="6" title="Biosensor improvements" />

						<MainListItem
							number="7"
							title="Serological and Immunological Assays"
							hasSublist={true}
						/>
						<SubListItem text="LFIA (Lateral Flow Test)" />
						<SubListItem text="ELISA (Enzyme-Linked Immunosorbent Assay)" />
						<SubListItem text="Enzyme-Linked Immunospot (ELISpot)" />

						<MainListItem number="8" title="Neutralization Assay" />
						<MainListItem
							number="9"
							title="Rapid Antigen Detection Test (RADT)
"
						/>
						<MainListItem number="10" title="Luminescent Immunoassay" />
					</div>
					<h2 className="font-dm_sans !pb-0 text-xl italic">II. Vaccine Platforms</h2>
					<div>
						Developing vaccines often have poor success rates and often takes around 10 to 15 years.
						Because of the pandemic&apos;s threat, urgent breakthroughs in vaccine development
						platforms have shortened the time significantly to 12-18 months. According to current
						available data, there are 14 COVID-19 vaccines that have cleared clinical trials and
						have been approved for worldwide use. These vaccines can be classified under different
						types of vaccine platforms:
					</div>
					<div className="grid grid-cols-1 items-start !pt-0 md:grid-cols-2 md:gap-x-15 [&>*]:[&>*]:my-5 [&>*]:my-0 [&>*]:[&>*]:!px-1 [&>*]:[&>*]:!py-1 [&>*]:py-0">
						<div>
							<MainListItem number="1" title="Viral Vector Vaccines" hasSublist />
							<SubListItem text="Non-replicating Viral Vector Vaccines" />
							<SubListItem text="Replicating Viral Vector-Based Vaccines" />

							<MainListItem number="2" title="Nucleic Acid Vaccines" hasSublist />
							<SubListItem text="DNA Vaccines" />
							<SubListItem text="mRNA Vaccines" />
						</div>
						<div className="!flex !flex-col md:!space-y-16">
							<MainListItem
								number="3"
								title="Vaccines based on recombinant proteins (subunit and VLPs virus-like particle)"
							/>
							<MainListItem number="4" title="Virus-based" hasSublist />
							<SubListItem text="Live Attenuated Vaccines" />
							<SubListItem text="Inactivated Virus Vaccines" />
						</div>
					</div>
					<h2 className="font-dm_sans !pb-0 text-xl italic">
						III. Immunoinformatics in Vaccine Preparation
					</h2>
					<div>
						Immunoinformatics refers to the process of data-gathering through antigenic variation
						comparisons, which is then stored, managed, and analyzed for future use. Because
						viruses, including COVID-19, can mutate into different variations, the information
						gathered through immunoinformatics allows scientists to design polyvalent COVID-19
						vaccines.
					</div>
					<h2 className="font-dm_sans !pb-0 text-xl italic">
						IV. Artificial Intelligence (AI) in the Pandemic Times
					</h2>
					<div>
						With the use of machine learning, deep learning, and deep neural network technologies,
						AI tools were used to detect early COVID-19 diagnosis during the pandemic. Currently, AI
						is now used to differentiate COVID-19 from community-acquired pneumonia using a deep
						learning model COVID-19 detection neural network (CovNet). AI also has the potential for
						redesigning COVID-19 vaccines, highlighting its versatility in healthcare preparation
						and combatting viruses.
					</div>
					<h2 className="font-koulen text-2xl">Moving Forward</h2>
					<div>
						Looking at the current advancements in biotechnology, there are plentiful biotechnology
						that could be used for future biological threats. Despite the broad biological attacks,
						how humanity has pacified the rapid dissemination of both SARS and COVID-19 brings
						optimism on the potential of humans to cooperate internationally for good surveillance
						and a healthy research environment.
					</div>
				</div>
			</div>
		</div>
	);
}
