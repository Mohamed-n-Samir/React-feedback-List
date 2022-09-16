import Card from "./shared/card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";

const FeedbackForm = ({handleAdd}) => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");

	const handleTextChange = async (e) => {
		setText(e.target.value);
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage("Text must be at least 10 characters");
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length >= 10) {
			const newFeedback = {
				text,
				rating,
			};

			handleAdd(newFeedback);
			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect
					select={(rating) => {
						setRating(rating);
					}}
				/>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button type="submit" version={"secondary"} isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && (
					<div
						style={{ paddingTop: "10px", textAlign: "center", width: "100%" }}
						className="message"
					>
						{message}
					</div>
				)}
			</form>
		</Card>
	);
};

export default FeedbackForm;
