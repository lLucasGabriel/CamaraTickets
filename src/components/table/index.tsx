import React from "react";
import * as S from "./styles";

interface Props {
	cols: {
		field?: string,
		icon?: JSX.Element,
	}[];
	children: JSX.Element[] | JSX.Element,
}

const Table: React.FC<Props> = ({ cols, children, }) => {
	return(
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
	);
};

export default Table;