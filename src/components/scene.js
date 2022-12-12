import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './model'
import { useHelper } from '@react-three/drei'
// import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'

function HemiLights() {
	const hemiLight = useRef()
	useHelper(hemiLight, THREE.HemisphereLightHelper, 'cyan')
	return (
		<hemisphereLight
			ref={hemiLight}
			color={'0xffffff'}
			groundColor={'#ffffff'}
			position={(0, 30, 0)}
			intensity={0}
		/>
	)
}

function DirectLights() {
	const spotLight = useRef()
	useHelper(spotLight, THREE.SpotLightHelper, 'cyan')
	return (
		<spotLight
			ref={spotLight}
			angle={Math.PI / 3}
			color='#fefae0'
			penumbra={1}
			position={[0, 100, 0]}
			shadow-mapSize={[2048, 2048]}
			shadow-bias={-0.0001}
			castShadow
			intensity={0}
		/>
	)
}

export default function Scene() {
	return (
		<div className='mt-5 mx-20 h-56'>
			<Canvas
				dpr={[1, 2]}
				camera={{ position: [0, 0, 100], near: 0.1, far: 1000, fov: 35 }}
				gl={{ alpha: true }}
			>
				<Suspense fallback={null}>
					<spotLight
						angle={Math.PI / 3}
						color='#fefae0'
						penumbra={1}
						position={[0, 100, 0]}
						shadow-mapSize={[2048, 2048]}
						shadow-bias={-0.0001}
						intensity={3}
					/>
					<ambientLight intensity={0.3} />
					{/* <spotLight
						angle={Math.PI / 3}
						color='#ffffff'
						penumbra={1}
						position={[0, 50, 30]}
						shadow-mapSize={[2048, 2048]}
						shadow-bias={-0.0001}
						castShadow
						intensity={3}
					/>
					<spotLight
						angle={Math.PI / 2}
						color='#ffffff'
						penumbra={1}
						position={[50, 30, -50]}
						shadow-mapSize={[2048, 2048]}
						shadow-bias={-0.0001}
						castShadow
						intensity={1}
					/>
					<spotLight
						angle={Math.PI / 3}
						color='#ffffff'
						penumbra={1}
						position={[-30, 50, 30]}
						shadow-mapSize={[2048, 2048]}
						shadow-bias={-0.0001}
						castShadow
						intensity={1}
					/> */}
					<hemisphereLight
						color={'#fefae0'}
						groundColor={'#ffffff'}
						position={(0, 30, 0)}
					/>

					<Model />

					{/* <Sky
						distance={3000}
						sunPosition={[1, 1, 0]}
						inclination={0.49}
						azimuth={1}
						turbidity={10}
						Rayleigh={10}
						mieCoefficient={0.05}
						mieDirectionalG={0.75}
					/> */}
				</Suspense>
				{/* <HemiLights /> */}
				{/* <DirectLights /> */}
				{/* <Suspense fallback={null}>
					<EffectComposer smaa>
						<Bloom
							intensity={0.3} // The bloom intensity.
							blurPass={undefined} // A blur pass.
							luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
							luminanceSmoothing={0.005} // smoothness of the luminance threshold. Range is [0, 1]
						/>
						<SSAO />
					</EffectComposer>
				</Suspense> */}
			</Canvas>
		</div>
	)
}
