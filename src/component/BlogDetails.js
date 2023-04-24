import React from "react";

const BlogDetails = ({ post: { id,title, body,
imgUrl, date, author }}) => {

return (
		<div className="blogDetails-container">
				<h1 className="heading">{title}</h1>
            <br/>
			<p><strong>Date: {date}</strong></p>
			<p><strong>Author: {author}</strong></p>
            <br />
			<img className="image" src={`/images/${imgUrl}`} alt="post" />
            <br />
			<h3>{body}</h3>
            <br />
		</div>
);
};

export default BlogDetails;
