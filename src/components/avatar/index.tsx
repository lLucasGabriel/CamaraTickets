import React from "react";
import * as S from "./styles";

interface Props {
    username: string,
    office: string,
    img: string,
	color?: string
}

const Avatar: React.FC<Props> = ({ username, office, img, color }) => {
	return(
		<S.Box 
			className={ color ? color : "inherit"}
		>
			<img 
				src={img} 
				alt="avatar"
			/>
			<p>
				{username}
			</p>
			<small>
				{office}
			</small>
		</S.Box>
	);
};

export default Avatar;