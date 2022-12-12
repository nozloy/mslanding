import './App.css'
import Menu from './components/menu'
import Logo from './components/logo'
import Scene from './components/scene'

function App() {
	return (
		<div className='flex flex-col max-w-md mx-auto mb-5 pb-5 neo rounded-xl'>
			<Logo />
			<Scene />
			<Menu />
		</div>
	)
}

export default App
