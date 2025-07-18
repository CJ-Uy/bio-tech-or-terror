import Image from "next/image";

export default function Definition() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="text-center text-4xl bg-[#E4E9F0] font-koulen p-2 md:p-5 rounded-2xl">
					DEFINITIONS OF BIOWARFARE & BIOTERRORISM
				</h1>
			</div>
			<div className="block md:flex h-auto md:px-25 [&>*]:block [&>*]:mx-auto [&>*]:md:w-1/2 [&>*]:overflow-auto [&>*]:[&>*]:py-5 [&>*]:[&>*]:px-10 [&>*]:[&>*]:text-justify [&>*]:[&_div]:text-lg [&>*]:[&_div]:font-dm_sans">
				<div>
					<div>
						<Image
							src="/svgs/petri dish.svg"
							alt="petri dish"
							width={300}
							height={200}
							style={{ width: '100%', height: 'auto' }}
						/>
						<a href="https://www.oculyze.net/wp-content/uploads/2023/09/Agar-Plates-vs-Petri-Dish.jpg">Source: oculyze.net</a>
					</div>
					<div>
						Bioterrorism refers to the deliberate or threatened use of biological agents; virus, bacteria, toxins or other agents to cause illness or death in people, animals, or plants (Bedada et al., 2017). Biowarfare on the other hand refers to the intentional use of living pathogens as weapons in armed conflict settings (Oliveira et al., 2020). Though both involve the use of biological agents causing catastrophic events and damage to the public health and safety, the key difference lies on the actors and intention: bioterrorism aims to instill fear, create chaos and death by non-state actors like terrorist and extremist group, whereas biowarfare is establish by state group like military not only causing death but also weaken the enemy force and render unusable area making them hazardous to unprotected people.
					</div>
					<div>
						Biological agents are the microorganism either in naturally (diseased corpses of animals) or modified form (gem warfare) containing bacteria and viruses that capable of causing illness or death on human, plants or animals, whereas bioweapons or biological weapons are pathogens or toxins created from the biological agents that have been intentionally weaponized for hostile usage like wars. Both cause significant harm and threats affecting human lives (Roffey et al., 2002).
					</div>
				</div>
				<div>
					<div>
						Historically, the awareness of biowarfare and bioterrorism became considerably noticeable due to the 2001 anthrax attack or known as Amerithrax which happened in the United States. Although the restriction of using biological weapons has been outlined in the 1972 Conventions which aim to restrict the development of offensive use of biological weapons, the threat remains. As stated by Christian (2013), the definition of bioterrorism varies from different sources and has been evolving over time. In the 1990s, the definition was primarily focused on bacterial and viral as biological weapons and its potential uses by the state and, considerably, the non-state actors. However recent definitions are more broader including the following: (1) a diverse array of potential biological agents, (2) broad range of potential targets and (3) the consequences of biological agents used as a weapon.
					</div>
					<div>
						
					</div>
					<div>
						Spencer expands the definition as “the use of microorganisms as weapons of catastrophic effect,” highlighting the use of a wide range of microorganisms, not just bacterial and viral but can be fungi and other bacterial agents. He further explained that it causes negative impact not just the nation’s physical but also psychological and economic well-being leading to major changes in routine activity of the affected society. Spencer also highlighted the concept of agroterrorism—the intentional attack on livestock or crops, indirectly affecting human lives through economic instability. This broader definition deepens the understanding of bioterrorism and overlaps on biowarfare. 
					</div>
					<div>
						Both bioterrorism and biowarfare show how it can affect public health and economic well-being, making them a serious threat especially in an era where science and technology are rapidly evolving over time, making it easy to modify these biological agents in a harmful way.
					</div>
				</div>
			</div>
		</div>
	);
}
