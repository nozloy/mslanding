import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model() {
	const group = useRef()
	const { scene, nodes } = useGLTF('forsite.gltf')

	useLayoutEffect(() =>
		Object.values(nodes).forEach(
			(node) => (node.receiveShadow = node.castShadow = true)
		)
	)
	return (
		<group
			ref={group}
			dispose={null}
			scale={7}
			position={[5, -5, 0]}
			rotation={[Math.PI / 0.1, 11.5, 0]}
			castShadow={true}
		>
			<primitive object={scene} />
			{/* <pointLight position={[0, 8, 0]} color='#FF5D55' /> */}
			<OrbitControls
				makeDefault
				minAzimuthAngle={Math.PI / 0.6}
				maxAzimuthAngle={Math.PI / 5}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 3}
				// minPolarAngle={Math.PI / 10}
				// maxPolarAngle={Math.PI}
				enableZoom={true}
				enablePan={false}
				zoomSpeed={1}
			/>
		</group>
	)
}

useGLTF.preload('/test.gltf')
