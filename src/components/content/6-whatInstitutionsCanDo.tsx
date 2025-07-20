import Image from "next/image";

const MainListItem = ({ number, title }: { number: string; title: string }) => (
	<div className="flex items-start gap-4 pt-4">
		{" "}
		{/* Use items-start for long titles */}
		<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#89F6CB] to-[#509077]">
			<span className="font-koulen text-2xl font-semibold text-black">{number}</span>
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

export default function WhatInstitutionsCanDo() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					WHAT CAN INSTITUTIONS DO
				</h1>
			</div>

			{/* First Introduction Container */}
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-3/4 [&>*]:[&_div]:text-lg">
				<div>
					<div>
						Given the complexity of biothreat agents, institutions play a pivotal role in enhancing
						detection, response and increasing awareness. The 2001 anthrax incident heightened
						concern on biowarfare and bioterrorism, yet many hospitals still lack preparedness for
						biological threats. In a research conducted by the UK emergency department, 24% lacked
						isolation facilities and merely 61% with an independent ventilation system. Moreover,
						27% of patients with suspected SARS and 23% with chickenpox would not be transported to
						an isolation facility, reflecting inadequate isolation protocols (Christian 2013).
					</div>
					<div>
						<div className="flex flex-col items-center justify-center">
							<Image
								src="/svgs/whoMeeting.svg"
								alt="Meeting at the WHO"
								width={300}
								height={200}
								className="h-auto w-[100%] md:w-[70%]"
							/>
						</div>
						<a
							className="ml-[15%]"
							href="https://th.bing.com/th/id/OIP.QjKklDk-C7S67bx18nFhagHaE5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
						>
							Source: libyaobserver.ly
						</a>
					</div>
					<div>
						These inefficient protocols effectively increase the widespread infection and highlight
						the urgent need for stronger preparation, detection and response not just within the
						hospital but across government, institutions and scientific and health professionals
						that can help to mitigate the risk and offer collective response between these sections.
					</div>
				</div>
			</div>

			{/* Two Column Info */}
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-3/4 [&>*]:[&_div]:text-lg">
				{/* GOVERNMENTS Left Column */}
				<div>
					<h2 className="font-koulen text-2xl">Governments</h2>
					<div>
						The government&apos;s role is vital in preparing and responding against bioterrorism and
						biowarfare by implementing regulations and measurement that enhance clinical
						environments and raise public awareness. Government efforts are crucial in restricting
						dangerous biological agents, establishing a significant relevance of animal disease
						occurrences for human health, improving detection of diseases and implementing
						bioterrorism preparedness to reduce potential negative impact on society.
					</div>
					<div>
						Bedada et al., (2017) establish general measures that the government implements.
						<MainListItem number="1" title="Public Awareness" />
						<SubListItem text="Raising awareness through educating the public about biological agents and their associated threats and risks." />
						<MainListItem number="2" title="Pest Control" />
						<SubListItem text="Initiate measures of insects and rodent control." />
						<MainListItem number="3" title="Clinic and Laboratory Measures" />
						<SubListItem text="Improve clinical isolation of suspected and confirmed cases to avoid transmission." />
						<SubListItem text="Emphasizes the importance of early diagnosis for handling casualties." />
						<SubListItem text="Establish a confirmatory laboratory diagnostic across a network of specialized laboratories." />
						Gisselsson (2022) also suggested an increase of civil-military synergy can help future
						biodefense.
					</div>
				</div>

				{/* Interdiscipline Right Column */}
				<div>
					<div>
						These provided general measurements can assist in providing guidance on the public
						awareness and clinical institutions in responding in such circumstances and through
						government implementation, it can effectively catch attention, improve response and
						promote appropriate action.
					</div>
					<h2 className="font-koulen text-2xl">Interdiscipline</h2>
					<div>
						A stronger collaboration in fighting these biothreat agents among scientific and
						healthcare professionals, along with government and institutions, will facilitate
						collaborative responses to combine stronger force and partnership to ensure elimination
						and reduction of threats posed by bioterrorism and biowarfare.
					</div>
					<div>
						Gisselsson (2022) proposed creating an expandable network of expertise and
						infrastructure to enhance medical intelligence by collaboration between scientists and
						national governments. He also argued that societies need to expand their focus beyond on
						traditional biodefense such as biosurveillance, stockpiling vaccines, drugs and PPEs, as
						these are insufficient to keep up with the rapid evolution of biothreat agents. Instead
						must focus on rapid implementation of next-generation technologies that can characterize
						new and emerging threats and fostering attribution and enhanced collaboration among
						government, defense industry, healthcare providers, commercial biotech sensor and
						medical research organizations that can offer support during crises.
					</div>
				</div>
			</div>

			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:[&_div]:text-lg">
				<div>
					<h2 className="font-koulen mt-2 text-2xl">Scientific and Health Care Professionals</h2>
					<div>
						The increase of biowarfare threat agents demands proper precautions, while it can be
						mitigated through immunization, pre- and post- exposure prophylaxis, therapeutics and
						protective clothing, it requires timely interventions. Vaccination on the other hand,
						plays the most practical role as they are developed to offer ongoing protection.
						However, countering bioterrorism is not only the responsibility of a sole discipline, as
						the coordination and collaboration of scientific and health care professionals like
						scientists, health-care providers, veterinarians and epidemiologists, play a central
						role in addressing global impact of bioterrorism (Bedada et al., 2017).
					</div>
				</div>
			</div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-3/4 [&>*]:[&_div]:text-lg">
				<div>
					<h3 className="font-koulen text-xl">I. Critical Care and Clinical Response</h3>
					<div>
						Health care providers must be equipped to provide care during stressful conditions but
						still address emergency protocols, among these frontliners are the clinical care
						physicians who play a critical role in diagnosing and treating patients during
						emergencies. One general measure includes ensuring the enhancement of clinical care
						physicians knowledge and skills (Bedada et al., 2017). To support this, Christian (2013)
						discussed that supportive care encompasses two components: individual patient treatment
						and mass casualty event management. Thus, the Task Force for Emergency Mass Critical
						Care offers guidelines for preparation and handling large numbers of critically ill
						patients which clinical care physicians are expected to be familiar with to handle
						large-scale bioterrorism incidents and to ensure preparedness in bioterrorism and
						biowarfare attack. Additionally, critical care physicians are the first line defense on
						recognizing bioterrorism; while detection technologies like sampling and syndromic
						surveillance exist, it would usually take 3-6 days to confirm an outbreak, in contrast
						to clinicians that can detect these outbreaks much sooner simply by observing clusters
						of patients with usual or rare disease.
					</div>
					<div>
						Effective response to these threats require the collaboration of clinicians and public
						health officials, diagnosis of a single case like smallpox can alarm the public however
						a disease that is naturally occurring, rare or unknown can be seen as nonthreatening
						unless clusters of cases are identified in various locations. An instance is an anthrax
						attack, if a physician encounters an individual case, it may not provoke immediate
						concern however if the anthrax attack takes place in multiple locations at once,
						particularly airports where disease can spread nationally and internationally, would
						trigger immediate alert and concern. This example highlights situational awareness
						relying on regional, state or federal public health agencies but due to challenges in
						distinguishing between an epidemic or bioterrorism, coordination, preparedness and
						surveillance are crucial in handling and preventing widespread caused by bioterrorism
						and biowarfare.
					</div>
				</div>
				<div>
					<h3 className="font-koulen text-xl">II. Scientific Prescriptions for Biodefense</h3>
					<div>
						Casadevall (2012) outlines several prescriptions to strengthen biodefense including the
						ongoing advancement of specific diagnostic assays and countermeasures like vaccines,
						drugs, and antibodies for high risk threats recognized by the existing matrix threat
						analysis. This is essential as biothreat agents still remain a threat in the future and
						by enhancing countermeasures, these agents can be overcome when an outbreak happens.
					</div>
					<div>
						Casadevall also suggested developing host-targeted strategies to temporarily boost
						immune function responses as a defensive approach to a wide variety of threats which
						would protect against both known and unknown dangers. Furthermore, he highlights
						developing innovative methods to assess health that could enable tracking of the
						population in identifying the appearance of new agents as not all approaches can be
						sufficient in identifying infections. One example is the epidemic of HIV that happened
						in 1981, clusters of people were infected with illness only to find out that they were
						suffering from AIDS. However HIV comes before AIDS, thus HIV has been spreading silently
						without symptoms. Thus developing advanced methods that can identify earlier signs would
						be effective before an epidemic could happen.
					</div>
					<div>
						In addition, understanding microbial disease on animal species as they can be a source
						of new pathogenic microbes that can affect human and wildlife. Finally, collective
						teamwork on establishing scientific study enabling effective response and defense
						against biothreat agents.
					</div>
				</div>
			</div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-3/4 [&>*]:[&_div]:text-lg">
				<div>
					<h3 className="font-koulen text-xl">III. Medical Intelligence</h3>
					<div>
						In strengthening biodefense, Gisselsson (2022), emphasized that medical intelligence is
						essential through (1) an updated and thorough assessment of the technological capacity
						to prevent surprises during bioterrorism and biowarfare attack, (2) a proficient
						research expertise and infrastructure to produce reliable data to combat misinformation
						and (3) extensive datasets on biothreat agents enabling experts to grasp their
						mechanisms and provide development of countermeasures against threats.
					</div>
				</div>
				<div>
					<div>
						He further suggested the following methods for an effective approach in medical
						intelligence including the use of information countermeasures with current and validated
						data as a means to defend against damaging narratives that may emerge during biological
						attacks. A rapid autopsy of fatalities caused suspicious new biological dangers enabling
						faster identification; ensuring secure data transmission and storage, along with
						computational capabilities to analyze biological data and direct information to vaccine
						producers and lastly regularly updating expert scientists and health professionals to
						ensure connection and respond when emergency happened
					</div>
				</div>
				<div>
					<h3 className="font-koulen text-xl">IV. Veterinary Surveillance</h3>
					<div>
						Bedada et al. (2017) emphasized the role of veterinarians and veterinary diagnostic
						laboratories on participating nationwide active surveillance systems for bioterrorism.
						Biothreat agents can infect both humans and animals thus early diagnosis in animals must
						be observed as it can be an indication of bioterrorism and biowarfare attack hence
						involving veterinarians in tracking categories A, B, C, agents, diseases and new and
						emerging bioterrorism agents.
					</div>
				</div>
			</div>
		</div>
	);
}
