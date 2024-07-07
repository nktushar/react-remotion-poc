import React from 'react';
import {Composition} from 'remotion';
import {AnimatedText} from './AnimatedText';
import {ImageComponent} from './ImageComponent';

export const AdvancedVideo = () => {
	return (
		<>
			<Composition
				id="AnimatedTextComposition"
				component={AnimatedText}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ImageComposition"
				component={ImageComponent}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
