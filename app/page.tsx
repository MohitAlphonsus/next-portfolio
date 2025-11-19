import Grid from "@/components/grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center overflow-hidden bg-[#000319] text-white mx-auto px-5 sm:px-10">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[{ name: "About", link: "#about", icon: null }]}
				/>
				<Hero />
				<Grid />
			</div>
		</main>
	);
}
