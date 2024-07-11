import { useEffect, useState } from "react";

import { IconColorType, IconType, IconSizeType } from "./icons.types";
import {
	icon_black,
	icon_blue,
	icon_dull_gray,
	icon_gray,
	icon_green,
	icon_light_gray,
	icon_purple,
	icon_red_dark,
	icon_red_material,
	icon_white,
	icon_yellow,
	icon_yellow_dark,
	link,
	primary_blue,
} from "../utils/colorConstants";

export const useGetIconSize = (size: IconType, color: IconColorType) => {
	const [iconSize, setIconSize] = useState<IconSizeType>(20);
	const [iconColor, setIconColor] = useState(icon_gray);
	useEffect(() => {
		switch (size) {
			case "tiny":
				setIconSize(8);
				break;
			case "tinyplus":
				setIconSize(10);
				break;
			case "extrasmall":
				setIconSize(12);
				break;
			case "small":
				setIconSize(16);
				break;
			case "medium":
				setIconSize(20);
				break;
			case "mediumplus":
				setIconSize(32);
				break;
			case "large":
				setIconSize(48);
				break;
			case "extralarge":
				setIconSize(56);
				break;
			default:
				setIconSize(20);
				break;
		}
	}, [size]);

	useEffect(() => {
		switch (color) {
			case "black":
				setIconColor(icon_black);
				break;
			case "dullgray":
				setIconColor(icon_dull_gray);
				break;
			case "lightgray":
				setIconColor(icon_light_gray);
				break;
			case "reddark":
				setIconColor(icon_red_dark);
				break;
			case "yellowdark":
				setIconColor(icon_yellow_dark);
				break;
			case "white":
				setIconColor(icon_white);
				break;
			case "blue":
				setIconColor(icon_blue);
				break;
			case "redmaterial":
				setIconColor(icon_red_material);
				break;
			case "yellow":
				setIconColor(icon_yellow);
				break;
			case "link":
				setIconColor(link);
				break;
			case "currentColor":
				setIconColor("currentColor");
				break;
			case "green":
				setIconColor(icon_green);
				break;
			case "purple":
				setIconColor(icon_purple);
				break;
			case "primary":
				setIconColor(primary_blue);
				break;
			default:
				setIconColor(icon_gray);
				break;
		}
	}, [color]);

	return {
		iconSize,
		iconColor,
	};
};
