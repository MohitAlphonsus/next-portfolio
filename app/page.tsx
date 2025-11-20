import Approach from "@/components/approach";
import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center overflow-hidden bg-[#000319] text-white mx-auto px-5 sm:px-10">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
