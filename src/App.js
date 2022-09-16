import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./Data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AbouticonLink";
import Post from "./components/Post";
// import { FeedbackProvider } from "./context/FeedbackContext";
import {useContext} from "react"
import PropTypes from 'prop-types';
import FeedbackContext from "./context/FeedbackContext";

function App() {
	const [feedbackData, setFeedbackData] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		console.log(newFeedback);
		setFeedbackData([newFeedback, ...feedbackData]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete")) {
			setFeedbackData(feedbackData.filter((item) => item.id !== id));
		}
	};

	return (
		// <FeedbackProvider>
			<Router>
				<div className="App">
					<Header />
					<div className="container">
						<Routes>
							<Route
								exact
								path="/"
								element={
									<>
										<h1>My App</h1>

										<FeedbackForm handleAdd={addFeedback} />
										<FeedbackStats feedback={feedbackData} />
										<FeedbackList
											feedback={feedbackData}
											handleDelete={deleteFeedback}
										/>
										<AboutIconLink />
									</>
								}
							></Route>
							<Route path="/about" element={<AboutPage />} />
							<Route exact path="/Post/:id/:name" element={<Post />} />
						</Routes>
					</div>
				</div>
			</Router>
		// </FeedbackProvider>
	);
}

export default App;
