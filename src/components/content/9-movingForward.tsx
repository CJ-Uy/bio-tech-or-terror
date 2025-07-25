import DevelopmentOfPreparationAndMitigationStrategies from "@/components/content/movingForward/dev-of-prep-and-miti-strat";
import DevelopmentInBiotechnologyFromTheCOVID19Experience from "@/components/content/movingForward/dev-in-biotech-from-covid";

export default function MovingForward() {
	return (
		<div>
			<div className="px-5 md:px-25">
				<h1 className="font-koulen rounded-2xl bg-[#E4E9F0] p-2 text-center text-4xl md:p-5">
					MOVING FORWARD
				</h1>
			</div>
			<div>
				<DevelopmentOfPreparationAndMitigationStrategies />
			</div>
			<div>
				<DevelopmentInBiotechnologyFromTheCOVID19Experience />
			</div>
			<div>
				<div className="[&>*]:[&_div]:font-dm_sans block h-auto md:flex md:px-25 [&>*]:mx-auto [&>*]:block [&>*]:overflow-auto [&>*]:[&>*]:px-10 [&>*]:[&>*]:py-5">
					<div>
						<div className="text-justify text-lg">
							Looking at the current advancements in biotechnology, there are plentiful
							biotechnology that could be used for future biological threats. Despite the broad
							biological attacks, how humanity has pacified the rapid dissemination of both SARS and
							COVID-19 brings optimism on the potential of humans to cooperate internationally for
							good surveillance and a healthy research environment.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
