import Image from "next/image";

export default function PhBiowarfare() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					Philippines&apos; Role in Biowarfare Discourse
				</h1>
			</div>

			{/* Main container for the two columns */}
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
				{/* Left Column */}
				<div>
					<div>
						In 2022, the Biological and Toxins Weapons Convention (BTWC) took a leap forward in its
						9th Review Conference. Before, the BTWC had lacked a proper framework for biological
						weapon compliance and verification. However, the conference agreed to form a working
						group to develop compliance and verification frameworks, paving the way for possible
						negotiations on a legally binding protocol. The Philippines’ delegation played a
						proactive role during the event, facilitating deliberations on international
						cooperations and assistance, and led the drafting of the outcome document. Additionally,
						the delegation prepared and oversaw the Association of Southeast Asian Nations' (ASEAN)
						Joint Statement&apos;s approval (Domingo, 2023).
					</div>
					<div>
						From July 27 to August 2, 2022, the United States government and the Philippine
						government discussed existing and future biological threat reduction, as well as
						potential measures for chemical security capacity-building in the Philippines. The
						United States’ Defense Threat Reduction Agency (DTRA), through its Cooperative Threat
						Reduction (CTR) Program, met with representatives from the Department of Health (DOH),
						the Department of Agriculture (DA), the Department of Science and Technology (DOST), and
						the Department of Interior and Local Government (DILG). In order to help the Philippines
						prepare for and defend against biothreat agents, the CTR Program commits to support
						activities that enhance interagency systems, communication, and other capacities over
						the course of the following five years.
					</div>
					<div>
						Recently, March 17 to 19, 2025, the Philippine Army held the country’s first Chemical,
						Biological, Radiological, and Nuclear (CBRN) warfare summit. During the summit, cohesive
						and strategic approaches were formulated to enhance the army’s CBRN defense
						capabilities, including biological threats. The Philippine Army was expected to
						strengthen its readiness, intelligence, and collaboration against CBRN threats.
					</div>
				</div>

				{/* Right Column */}
				<div>
					<Image
						src="/svgs/ph biowarfare.svg"
						alt="petri dish"
						width={300}
						height={200}
						style={{ width: "100%", height: "auto" }}
					/>
					<a href="https://www.manilatimes.net/manilatimes/uploads/images/2023/03/23/171207.jpg">
						Source: manilatimes.net
					</a>

					<div>
						These recent, serious efforts of the Philippines signal a growing national commitment to
						biosecurity. Through diplomatic engagement, international partnerships, and military
						preparedness, the country is taking significant steps toward preparing itself against
						potential biological warfare and bioterrorism threats.
					</div>
				</div>
			</div>
		</div>
	);
}
