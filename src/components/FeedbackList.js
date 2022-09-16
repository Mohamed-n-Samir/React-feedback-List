import Card from "./shared/card";
import { FaTimes } from "react-icons/fa";


const FeedbackList = ({ feedback, handleDelete }) => {

	if (!feedback || feedback.length === 0) {
		return <p style={{color:"white"}}>No FeedBack Yet</p>;
	}
	return (
		<div className="feedback-list">
			{feedback.map((item, index) => {
				return (
					<Card key={index}>
						<div className="num-display">{item.rating}</div>
						<div className="text-display">{item.text}</div>
						<button className="delete"
							onClick={() => {
								handleDelete(item.id);
							}}
						>
							<FaTimes color="purple" />
						</button>
					</Card>
				);
			})}
		</div>
	);
};

export default FeedbackList;
