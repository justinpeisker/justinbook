import React from 'react';

const PostForm = (props) => {

    return(
        <form onSubmit= {props.submit}>
            <input
                type= 'text'
                name= 'title'
                value= {props.post.title}
                placeholder= 'Enter a title'
                onChange= {props.change}
                />
        


            <input  
                type= 'text'
                name= 'content'
                value={props.post.content}
                onChange= {props.change}
                />
            
            <input type= 'submit' value= 'submit your post'/>

        </form> 
    )
}

export default PostForm;