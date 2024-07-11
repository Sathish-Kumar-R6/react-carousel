import { useGetIconSize } from "./iconHooks";
import { IconColorType, IconType } from "./icons.types";

type SvgNextProps = {
	className?: string;
	size?: IconType;
	color?: IconColorType;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
};

function SvgNext({
	size = "small",
	color = "currentColor",
	className,
	onClick,
}: Readonly<SvgNextProps>) {
	const { iconSize, iconColor } = useGetIconSize(size, color);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			width={iconSize}
			height={iconSize}
			transform="scale(-1 1)"
			viewBox="0 0 219.151 219.151"
			className={className}
			fill={iconColor}
			onClick={onClick}
		>
			<path d="M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576S169.995 0 109.576 0 .002 49.156.002 109.575s49.155 109.576 109.574 109.576m0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15" />
			<path d="M94.861 156.507a7.5 7.5 0 0 0 10.606 0 7.5 7.5 0 0 0-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 0 0-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 0 0-10.607-10.608l-41.629 41.628a7.5 7.5 0 0 0-2.197 5.303 7.5 7.5 0 0 0 2.198 5.305z" />
		</svg>
	);
}

export default SvgNext;
