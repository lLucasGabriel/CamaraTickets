import React from "react";
import * as S from "./styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
	cols: {
		field?: string,
		icon?: JSX.Element,
	}[];
	children: JSX.Element[] | JSX.Element,
}

const Table: React.FC<Props> = ({ cols, children }) => {
	return(
		<>
			<S.Table>
				<thead>
					<tr>
						{cols.map((col, index) => (
							<th key={index}>
								<div>
									{col.icon}
									{col.field}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{ children }
				</tbody>
			</S.Table>
			<S.Footer>
				<label htmlFor="lines">Linhas por página</label>
				<select id="lines" name="lineManagement">
					{[10, 25, 30].map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
				<label className="pagination">1 - 6 de 26</label>
				<button><NavigateBeforeIcon/></button>
				<button><NavigateNextIcon/></button>
			</S.Footer>
		</>
	);
};

export default Table;