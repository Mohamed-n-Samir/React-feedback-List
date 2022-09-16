import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ children, reverse }) => {
	// return ( <div key={index} className={`card ${reverse && "reverse"}`}>{children}</div> );
    // console.log(reverse)
    const [rev, revState] = useState(reverse)
    // console.log(rev)

	return (
		<div
			className={`card`}
			style={{
				backgroundColor: rev ? "rgba(0,0,0,0.4)" : "white",
				color: rev ? "white" : "black",
				fontWeight: "bold",
			}}
		>
			{children}
			
            <button style={{display: "none"}} onClick={() => {
                revState((prev) => {
                    return prev ? false : true
                })
            }}>press</button>
		</div>
	);
};

Card.defaultProp = {
    reverse: true,
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
