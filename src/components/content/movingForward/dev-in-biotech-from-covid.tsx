import Image from "next/image";

const MainListItem = ({ number, title }: { number: string; title: string }) => (
	<div className="flex items-start gap-4 pt-4">
		{" "}
		{/* Use items-start for long titles */}
		<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#89F6CB] to-[#509077]">
			<span className="!font-koulen text-2xl font-semibold text-black">{number}</span>
		</div>
		<p className="pt-2 italic">{title}</p>
	</div>
);

// A reusable component for the sub-item
const SubListItem = ({ text }: { text: string }) => (
	<p className="pl-[68px] text-base text-gray-700">
		{" "}
		{/* 12 (w) + 16 (gap) + 40 (indent) = 68px */}
		<span className="mr-2">-</span>
		{text}
	</p>
);

export default function DevelopmentInBiotechnologyFromTheCOVID19Experience() {
	return (
		<div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:md:w-4/5 [&>*]:[&_div]:text-lg">
				<div>
					<h3 className="font-koulen -mb-3 text-justify text-3xl md:text-center">
						Development of Preparation & Mitigation Strategies
					</h3>
					<div>
						<div className="flex items-center justify-center">
							<Image
								src="/svgs/covid.svg"
								alt="covid preparation"
								width={300}
								height={200}
								className="h-auto w-[100%] md:w-[70%]"
							/>
						</div>
						<a className="ml-[15%]" href="canva.com">
							Source: canva.com
						</a>
					</div>
					<div className="text-justify">
						The recent COVID-19 experience exposed the global community&apos;s lack of preparedness
						for a rapid pandemic virus spread, resulting in significant human morbidities and
						fatalities in the initial days of the pandemic (Aileni et. al., 2022). However, it also
						led to multiple advancements in Biotechnology, including development in diagnostics,
						broadened understanding of vaccine platforms, immunoinformatics, and Artificial
						Intelligence (AI) applications.
					</div>
				</div>
			</div>

			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
				<div>
					<h4 className="font-koulen -mb-6 text-justify text-2xl md:text-center">I. Diagnostics</h4>
					<div className="text-justify">
						In the event of biological attacks, diagnostics tests are pivotal in determining the
						severity and transmissibility of an illness. Identifying the disease&apos;s threat as
						soon as possible is crucial in determining a community&apos;s preparation and mitigation
						strategies. The tests&apos; reliability and effectiveness is also essential to prevent
						false-positives or false-negatives tests. The COVID-19 has made significant improvements
						in diagnostic tests, including:
					</div>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-15">
						<div>
							<MainListItem
								number="1"
								title="Reverse Transcription-Quantitative Polymerase Chain Reaction"
							/>

							<MainListItem number="2" title="Isothermal Nucleic Acid Amplification" />
							<SubListItem text="RT-LAMP" />
							<SubListItem text="Transcription-Mediated Amplification" />

							<MainListItem number="3" title="CRISPR-Based COVID Detection Assay" />
							<MainListItem number="4" title="Microarray Nucleic Acid Hybridization" />
							<MainListItem number="5" title="Genome Sequencing" />
						</div>

						<div>
							<MainListItem number="6" title="Biosensor improvements" />

							<MainListItem number="7" title="Serological and Immunological Assays" />
							<SubListItem text="LFIA (lateral flow test)" />
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
					</div>
				</div>
				<div>
					<h4 className="font-koulen -mb-6 text-justify text-2xl md:text-center">
						II. Vaccine Platform
					</h4>
					<div className="text-justify">
						Developing vaccines often have poor success rates and often takes around 10 to 15 years.
						Because of the pandemic&apos;s threat, urgent breakthroughs in vaccine development
						platforms have shortened the time significantly to 12-18 months. According to current
						available data, there are 14 COVID-19 vaccines that have cleared clinical trials and
						have been approved for worldwide use. These vaccines can be classified under different
						types of vaccine platforms:
					</div>
					<div className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-x-15">
						<div>
							<MainListItem number="1" title="Viral Vector Vaccines" />
							<SubListItem text="Non-replicating Viral Vector Vaccines" />
							<SubListItem text="Replicating Viral Vector-Based Vaccines" />

							<MainListItem number="2" title="Nucleic Acid Vaccines" />
							<SubListItem text="DNA Vaccines" />
							<SubListItem text="mRNA Vaccines" />

							<MainListItem
								number="3"
								title="Vaccines based on recombinant proteins (subunit and VLPs virus-like particle)"
							/>
						</div>
						<div>
							<MainListItem number="4" title="Virus-based" />
							<SubListItem text="Live Attenuated Vaccines" />
							<SubListItem text="Inactivated Virus Vaccines" />
							<br />
							<div>
								Moreover, developed understanding of vaccines has brought suggestions to potential
								next-generation vaccines:
							</div>
							<MainListItem number="1" title="Mucosal Vaccines" />
							<MainListItem number="2" title="Edible Vaccines" />
						</div>
					</div>
				</div>
			</div>

			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:md:w-4/5 [&>*]:[&_div]:text-lg">
				<div>
					<h4 className="font-koulen -mb-6 text-justify text-2xl md:text-center">
						III. Immunoinformatics in Vaccine Preparation
					</h4>
					<div className="text-justify">
						Immunoinformatics refers to the process of data-gathering through antigenic variation
						comparisons, which is then stored, managed, and analyzed for future use. Because
						viruses, including COVID-19, can mutate into different variations, the information
						gathered through immunoinformatics allows scientists to design polyvalent COVID-19
						vaccines.
					</div>
				</div>
			</div>

			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:md:w-4/5 [&>*]:[&_div]:text-lg">
				<div>
					<h4 className="font-koulen -mb-6 text-justify text-2xl md:text-center">
						IV. Artificial Intelligence (AI) in the Pandemic Times
					</h4>
					<div className="text-justify">
						With the use of machine learning, deep learning, and deep neural network technologies,
						AI tools were used to detect early COVID-19 diagnosis during the pandemic. Currently, AI
						is now used to differentiate COVID-19 from community-acquired pneumonia using a deep
						learning model COVID-19 detection neural network (CovNet). AI also has the potential for
						redesigning COVID-19 vaccines, highlighting its versatility in healthcare preparation
						and combatting viruses.
					</div>
				</div>
			</div>
		</div>
	);
}
