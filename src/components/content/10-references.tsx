export default function References() {
	const references1 = [
		"Aileni, M., Rohela, G. K., Jogam, P., Soujanya, S., Zhang, B. (2022). Biotechnological perspectives to combat the COVID-19 pandemic: Precise diagnostics and inevitable vaccine paradigms. Cells, 11(7), 1182. https://doi.org/10.3390/cells11071182",
		"Casadevall, A. (2012). The future of biological warfare. Microbial Biotechnology, 5(4), 584-587. https://doi.org/10.1111/j.1751-7915.2012.00340.x",
		"Christian, M. (2013). Biowarfare and bioterrorism. Life-Threatening Infections: Part 1, 29(3), 393-794. https://doi.org/10.1016/j.ccc.2013.03.015",
		"Domingo, J. (2023). Advancing Biological Weapons Convention (BWC): The Philippine role. APLN. https://www.apln.network/analysis/the-korea-times-column/advancing-biological-weapons-convention-bwc-the-philippine-role",
		"Gisselsson, D. (2021). Next-generation biowarfare: Small in scale, sensational in nature? Health Security, 20(2). https://doi.org/10.1089/hs.2021.0165",
		"Jansen, H. J., Breeveld, H.J., Stijnis, C., & Grobusch, M.P. (2015). Biological warfare, bioterrorism, and biocrime. Clinical Microbiology and Infection, 20(6), 488-496. https://doi.org/10.1111/1469-0691.12699",
		"Lim, D., Simpson, J., Kearns, E., & Kramer, M. (2005). Current and developing technologies for monitoring agents of bioterrorism and biowarfare. Clinical Microbiology Reviews, 18(4). https://doi.org/10.1128/cmr.18.4.583-607.2005",
		"Oliveira, M. O., Mason-Buck, G., Ballard, D., Branicki, W., Amorim, A. (2020). Biowarfare, bioterrorism and biocrime: A historical overview on microbial harmful applications. Forensic Science International, 314, 110366. https://doi.org/10.1016/j.forsciint.2020.110366",
	];

	const references2 = [
		"Pal, M., Tsegaye, M., Girzaw, F., Bedada, H., Godishala, V., & Kandi, V. (2017). An overview on biological weapons and bioterrorism. American Journal of Biomedical Research, 5(2), 24-34. https://doi.org/10.12691/ajbr-5-2-2",
		"Philippine Army. (n.d.). Army holds first-ever chemical, biological, radiological and nuclear warfare summit. https://army.mil.ph/home/index.php/press-releases-archive-2/2672-army-holds-first-ever-chemical-biological-radiological-and-nuclear-warfare-summit",
		"Roffey, R., Lantorp, K., Tegnell, A., Elgh, F. (2002). Biological weapons and bioterrorism preparedness: importance of public-health awareness and international cooperation. Clinical Microbiology and Infection, 8, 522-528. https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X(14)62641-0/pdf",
		"Saavedra, J. (2023). Viscom enhances biowarfare, disaster response skills. Philippine News Agency. https://www.pna.gov.ph/articles/1205606",
		"Salvacion, J. (2006). Biological and chemical threats to public health and safety in the Philippines. Public Policy, 10(1), 81-102. https://cids.up.edu.ph/wp-content/uploads/2022/03/Biological-and-Chemical-Threats-to-Public-Health-and-Safety-in-the-Philippines-vol.10-no.1-Jan-June-2006-4.pdf",
		"U.S. Department of Homeland Security. (n.d.). Biohazard Exposure. Ready.org. https://www.ready.gov/biohazard",
		"U.S. Embassy Manila. (2022). U.S. to support Philippines in addressing biological and chemical security threats. https://ph.usembassy.gov/u-s-to-support-philippines-in-addressing-biological-and-chemical-security-threats/",
		"van Aken, J., & Hammond, E. (2003). Genetic engineering and biological weapons. EMBO Reports, 4(S1), S57–S60. https://doi.org/10.1038/sj.embor.embor860",
	];

	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					REFERENCES
				</h1>
			</div>
			<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5 [&>*]:[&>*]:text-justify [&>*]:md:w-1/2 [&>*]:[&_div]:text-lg">
				<div className="mt-4">
					<ul className="font-dm_sans list-outside space-y-4">
						{references1.sort().map((ref, index) => (
							<li key={index} className="pl-6 -indent-6">
								{ref}
							</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<ul className="font-dm_sans list-outside space-y-4">
						{references2.sort().map((ref, index) => (
							<li key={index} className="pl-6 -indent-6">
								{ref}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
