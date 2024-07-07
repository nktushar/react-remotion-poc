import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const MyVideo = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 80], [0, 1]);

	return (
		<div
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				backgroundColor: 'cyan',
				fontSize: 100,
				fontFamily: 'Arial',
			}}
		>
			<h1 style={{opacity}}>Hello, Remotion!</h1>
		</div>
	);
};
