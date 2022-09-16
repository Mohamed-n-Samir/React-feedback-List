import {Navigate} from "react-router-dom"
import { useParams } from "react-router-dom";

const Post = () => {

	const param = useParams();
	
    return (
			<div>
				<h1>Posts {param.id}</h1>
			</div>
		);
}
 
export default Post;