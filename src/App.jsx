import { BottomBar } from "./components/BottomBar";
import { PokeList } from "./components/PokeList";
import { TopBar } from "./components/TopBar";

function App() {
	return (
		<div className='min-h-screen'>
			<TopBar />
			<PokeList />
			<BottomBar />
		</div>
	);
}

export default App;
