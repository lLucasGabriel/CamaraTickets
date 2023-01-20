import React from "react";
import * as S from "./styles";

interface Props {
	key: number;
	content: string;
    username: string;
	userImage?: string;
	imageSent?: string;
    date: string;
	className: string,
}

const Message: React.FC<Props> = ({ content, username, userImage, imageSent, date, className}) => {
	return(
		<S.Box className={className}>
			<div className="user">
				<img src={userImage} alt={username}/>
				<small>{date}</small>
			</div>
			<div className="messageContent">
				<p>{content}</p>  
				{imageSent ? <img src={imageSent} alt=""/> : null}
			</div>
		</S.Box>
	);
};

export default Message;