import { ca } from "date-fns/locale";
import Image from "next/image";

export default function Introduction() {
    return (
        <div className="block md:flex h-auto px-10 md:px-25">
			<div className="block mx-auto w-1/2 overflow-auto [&>*]:py-5 [&>*]:px-10 [&>*]:text-justify [&_div]:text-lg [&_div]:font-dm_sans [&>*]:m-auto">
                <div>
                    <h1 className="text-center sm:text-2xl md:text-4xl lg:text-5xl bg-[#E4E9F0] font-koulen p-5 rounded-2xl">
                        BIOWARFARE...?
                    </h1>
                </div>
                <div>
                    Throughout human history, the weapons employed in warfare have been dictated by the available resources and technologies of a given era (Casadevall, 2012). Wars in ancient societies utilized stones, metals, leather, and wood for both offensive tactics and defensive protection. The mobility that horseback riding offered when the stirrup was adopted in Western Europe greatly improved the knights' ability to combat. World War I and World War II witnessed the rise of gunpowder, aircraft, chemicals, computers, and nuclear weapons to gain advantages against opposing countries. Simultaneously, research on the use of biological agents for warfare was ongoing in Japan and continued by the Americans post-World War II. The mid-20th century ushered in the period of biological revolution wherein powerful biotechnologies emerged for scientific progress and industrial growth in the pharmaceutical and medicinal fields—which simultaneously opened the door to potential weapons of mass destruction. Given these ongoing advancements, the threat of potential biological warfare and bioterrorism remains a real and pressing concern.
                </div>
                <div className="">
                    Casadavall has identified infectious disease as one of the three major existential threats to humanity. While the 1972 Biological Toxic Weapons Convention was written to limit the use of certain bioweapons, a few countries did not sign the treaty. There is also no assurance that the signed countries will fully adhere to the treaty. Bioterrorism methods have become easier to achieve as biotechnology becomes more accessible, easier to operate, and cheaper (Jansen et al., 2014). Meanwhile, these advanced technological capabilities allow the development of a biological weapon, including mechanisms that hasten the spread and increase the lethality of disease. Terrorists may potentially use these weapons to instill fear and inflict mass casualties.
                </div>
            </div>
            <div className="block mx-auto w-1/2 overflow-auto [&>*]:py-5 [&>*]:px-10 [&>*]:text-justify [&_div]:text-lg [&_div]:font-dm_sans [&>*]:m-auto">
                <div>
                    <Image
                        src="/svgs/biosuits.svg"
                        alt="biosuits"
                        width={300}
                        height={200}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    Source: nti.org
                </div>
                <div>
                    While these biological attacks are alarming, hope is not lost. Despite the increasing availability of biotechnology, executing a successful bioterrorist attack still requires advanced skills. On the other hand, the same technologies have also led to improved scientific understanding of pathogens and the development of effective countermeasures. Innovation in surveillance technology has further enhanced early detection and response. While the threat of bioterrorism and biowarfare remains an ongoing concern, the likelihood of a large-scale, successful bioterrorist attack remains relatively low.
                </div>
                <div>
                    Amid the growing accessibility of biotechnology, the dual-use dilemma poses uncertainty in its use for threat and protection in biological warfare and terrorism. This article discusses the mechanisms behind biological attack, biowarfare and bioterrorism strategies, historical and recent examples, how biotechnology is used both as a tool for warfare and defense, explore global and local strategies for prevention and preparedness, and look into the steps the Philippines took in response to such global threat.
                </div>
            </div>
		</div>
    );
}