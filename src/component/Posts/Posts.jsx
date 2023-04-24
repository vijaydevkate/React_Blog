import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import * as blogPosts from "../../Datablog/BlogData.json";

const Posts = () => {

return (
	
	<div>
		
		<div className="posts-container">
			{blogPosts.default.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
		
	</div>
);
};

export default Posts;
