import React from 'react';
import {Sequence} from 'remotion';
import {AnimatedText} from './AnimatedText';
import {ImageComponent} from './ImageComponent';

export const VideoComposition = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={50}>
				<AnimatedText />
			</Sequence>
			<Sequence from={50} durationInFrames={150}>
				<ImageComponent />
			</Sequence>
		</div>
	);
};
