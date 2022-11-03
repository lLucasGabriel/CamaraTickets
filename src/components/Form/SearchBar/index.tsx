import React from "react";
import * as S from "./styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
    color: string;
	onChange?: (e: any) => void;
}

const SearchBar: React.FC<Props> = ({ color, onChange }) => {
	return(
		<S.Fieldset className={color}>
			<input
				type={"text"}
				name={"search"}
				id={"search"}
				placeholder={"BUSCAR"}
				onChange={onChange}
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