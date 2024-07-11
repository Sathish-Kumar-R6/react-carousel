import Carousel from "./components/Carousel/Carousel";

const images = [
	"https://picsum.photos/seed/pic1/200/300",
	"https://picsum.photos/seed/pic2/200/300",
	"https://picsum.photos/seed/pic3/200/300",
];

function App() {
	return <Carousel images={images} />;
}

export default App;
