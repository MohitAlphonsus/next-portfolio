import Background from "./ui/Background";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<div className="pt-36 pb-20">
			<div>
				<Spotlight
					className="h-screen -top-40 -left-10 md:-left-32 md:-top-20"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			<Background>
				<div className="flex justify-center absolute my-20 z-10">
					<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
						<h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-96">
							Hi, I&apos;m Mohit Full-Stack Web Developer
						</h2>
						<TextGenerateEffect words="Building Modern, Scalable & Engaging Web Experiences" />
						<a href="#about">
							<MagicButton
								title="Show My Work"
								icon={<ArrowUpRight />}
								position="right"
							/>
						</a>
					</div>
				</div>
			</Background>
		</div>
	);
}
