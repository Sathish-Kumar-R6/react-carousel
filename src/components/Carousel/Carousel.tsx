import React, { HTMLAttributes, useState } from "react";
import SvgBack from "../../icons/SvgBack";
import SvgNext from "../../icons/SvgNext";
import classNames from "classnames/bind";
import styles from "./Carousel.module.css";

const cx = classNames.bind(styles);

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
	images: string[];
}
function Carousel({ images }: CarouselProps) {
	const [current, setCurrent] = useState(0);
	if (images.length === 0) {
		return null;
	}
	const handleSetPrev = () => {
		console.log(current);
		if (current === 0) {
			setCurrent(images.length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	const handleSetNext = () => {
		if (current >= images.length - 1) {
			setCurrent(0);
		} else {
			setCurrent((curr) => curr + 1);
		}
	};

	const handleIndicatorClick = (slideIndex: number) => {
		setCurrent(slideIndex);
	};

	return (
		<div className={cx("carousel")}>
			<SvgBack
				size="mediumplus"
				className={cx("svg-back")}
				onClick={handleSetPrev}
			/>
			{images.map((img, id) => {
				const isCurrentImage = id === current;
				return (
					<img
						src={img}
						style={{ width: "400px" }}
						className={cx("images", { "other-images": !isCurrentImage })}
						key={img}
					/>
				);
			})}
			<span className={cx("dot-container")}>
				{images.map((img, indicator) => {
					const isCurrentIndicator = indicator === current;
					return (
						<span
							key={img}
							onClick={() => handleIndicatorClick(indicator)}
							className={cx("carousel-dot", {
								"current-indicator": isCurrentIndicator,
							})}
						></span>
					);
				})}
			</span>

			<SvgNext
				size="mediumplus"
				className={cx("svg-next")}
				onClick={handleSetNext}
			/>
		</div>
	);
}

export default Carousel;
