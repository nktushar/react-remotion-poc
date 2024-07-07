import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import image from '../assets/images.jpg';

export const ImageComponent = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 30], [0.8, 1]);
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<div
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				height: '100%',
				backgroundColor: 'black',
			}}
		>
			<img
				src={image}
				style={{
					transform: `scale(${scale})`,
					opacity,
					width: '80%',
					height: 'auto',
				}}
				alt="Example"
			/>
		</div>
	);
};
