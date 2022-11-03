import React from "react";
import * as S from "./styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
    color: string;
}

const SearchBar: React.FC<Props> = ({ color }) => {
	return(
		<S.Fieldset className={color}>
			<input
				type={"text"}
				name={"search"}
				id={"search"}
				placeholder={"BUSCAR"}
			/>
			<label htmlFor='search'>
				<div>
					<SearchIcon />
				</div>
			</label>
		</S.Fieldset>
	);
};

export default SearchBar;