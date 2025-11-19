import { cn } from "@/lib/utils";
export default function Background({ children }) {
	return (
		<div className="relative flex h-[70vh] w-full items-center justify-center ">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:60px_60px]",
					"[background-image:linear-gradient(to_right,#0d1131_1px,transparent_1px),linear-gradient(to_bottom,#0d1131_1px,transparent_1px)]"
				)}
			/>

			<div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#000319]"></div>
			{children}
		</div>
	);
}
