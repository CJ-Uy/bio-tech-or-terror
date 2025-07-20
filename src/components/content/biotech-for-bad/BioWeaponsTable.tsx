// components/BioWeaponsTable.tsx
import React from "react";

// Data for the table. Storing it this way makes the JSX cleaner.
const tableData = [
	{
		group: "A",
		items: [
			{ disease: "Anthrax", agent: "Bacillus anthracis" },
			{ disease: "Botulism", agent: "Clostridium botulinum toxin" },
			{ disease: "Plague", agent: "Yersinia pestis" },
			{ disease: "Smallpox", agent: "Variola major" },
			{ disease: "Tularemia", agent: "Francisella tularensis" },
			{ disease: "Viral hemorrhagic fevers", agent: "Filoviruses and Arenaviruses" },
		],
	},
	{
		group: "B",
		items: [
			{ disease: "Brucellosis", agent: "Brucella spp." },
			{ disease: "Epsilon toxin", agent: "Clostridium perfringens" },
			{ disease: "Food safety threats", agent: "Salmonella spp., E. coliO157:H7, shigella" },
			{ disease: "Glanders", agent: "Burkholderia mallei" },
			{ disease: "Melioidosis", agent: "Burkholderia pseudomallei" },
			{ disease: "Psittacosis", agent: "Chlamydia psittaci" },
			{ disease: "Q fever", agent: "Coxiella burnetii" },
			{ disease: "Ricin toxin", agent: "Ricinus communis" },
			{ disease: "Staphylococcal enterotoxin B", agent: "Staphylococcus spp." },
			{ disease: "Typhus fever", agent: "Rickettsia prowazekii" },
			{ disease: "Viral encephalitis", agent: "Alphaviruses" },
			{ disease: "Water safety threats", agent: "Vibrio cholerae, Cryptosporidium parvum" },
		],
	},
	{
		group: "C",
		items: [{ disease: "Emerging infectious diseases", agent: "Nipah virus and Hantavirus" }],
	},
];

const BioWeaponsTable = () => {
	return (
		<div className="font-dm_sans bg-white p-8 antialiased">
			<div className="!pb-0 text-center">
				<h1 className="font-dm_sans text-2xl">
					Major Categories of Biological Agents with Probability to be used as Bio-Weapons
				</h1>
				<p className="mt-1 text-sm text-gray-600">(Bedada et al., 2017)</p>
			</div>

			<div className="flow-root !pt-0">
				<div className="-mx-8 -my-2 overflow-x-auto">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300 border-b border-gray-300">
							<thead>
								<tr className="border-t border-gray-300">
									<th
										scope="col"
										className="font-koulen w-1/6 py-3.5 pr-3 pl-8 text-left text-lg tracking-wide"
									>
										Groups
									</th>
									<th
										scope="col"
										className="font-koulen w-2/6 px-3 py-3.5 text-left text-lg tracking-wide"
									>
										Disease
									</th>
									<th
										scope="col"
										className="font-koulen w-3/6 px-3 py-3.5 text-left text-lg tracking-wide"
									>
										Agents
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{tableData.map((groupData) =>
									groupData.items.map((item, itemIndex) => (
										<tr key={`${groupData.group}-${item.disease}`}>
											{/* Show the group letter only for the first item in the group */}
											{itemIndex === 0 ? (
												<td className="font-koulen py-4 pr-3 pl-8 text-base whitespace-nowrap">
													{groupData.group}
												</td>
											) : (
												<td></td> // Keep the cell empty for other items
											)}
											<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">
												{item.disease}
											</td>
											<td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700 italic">
												{item.agent}
											</td>
										</tr>
									)),
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BioWeaponsTable;
