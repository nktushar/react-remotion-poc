import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';

export const AnimatedText = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	const translateY = interpolate(frame, [0, 30], [50, 0]);

	return (
		<div
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				height: '100%',
			}}
		>
			<h1
				style={{
					color: 'white',
					opacity,
					transform: `translateY(${translateY}px)`,
				}}
			>
				Welcome to Advanced Remotion!
			</h1>
		</div>
	);
};
