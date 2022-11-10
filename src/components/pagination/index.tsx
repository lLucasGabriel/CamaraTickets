import React from "react";
import * as S from "./styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
	firstItem: number,
	lastItem: number,
	totalItens: number,
	setItemsPerPage: (e: any) => void,
	NavigateBefore?: () => void,
	NavigateNext?: () => void,
}

const Pagination: React.FC<Props> = ({ firstItem, lastItem, setItemsPerPage, totalItens, NavigateBefore, NavigateNext }) => {
	return(
		<S.Footer>
			<label htmlFor="lines">Linhas por página</label>
			<select 
				id="lines" 
				name="lineManagement"
				onChange={setItemsPerPage}
			>
				{[6, 12, 18, 24, 30, 60].map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			<label className="pagination">
				{firstItem} - {lastItem} de {totalItens}
			</label>
			<button onClick={NavigateBefore}><NavigateBeforeIcon/></button>
			<button onClick={NavigateNext}><NavigateNextIcon/></button>
		</S.Footer>
	);
};

export default Pagination;