import React, {ReactNode} from "react";

interface IRuneLinkBoxProps {
	children?: ReactNode;
	title?: string;
}

const RuneLinkBox: React.FC<IRuneLinkBoxProps> = (props: IRuneLinkBoxProps) => {

	const {children, title} = props;

	return (
		<div
			className="rune-link-box"
			style={{marginTop: title ? "7px" : 0}}
		>
			{title && (
				<div className="rune-link-box-title">
					{title}
				</div>
			)}
			{children}
		</div>
	)
};

export default RuneLinkBox;
