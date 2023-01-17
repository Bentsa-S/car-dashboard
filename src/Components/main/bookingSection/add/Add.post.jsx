import React from "react";


const AddBookingPost = (props) => {
    let newPostElementName = React.createRef();
    let newPostElementPrise = React.createRef();

    let addPost = () =>{
        props.addPost();
        console.log(props)
    }

    let onPostChangeName = () => {
        let name = newPostElementName.current.value;
        props.updateNewPostName(name);
    }

    let onPostChangePrise = () => {
        let prise = newPostElementPrise.current.value;
        props.updateNewPostPrise(prise);
    }

    return(
        <div>
            <input onChange={onPostChangeName} ref={newPostElementName} type={"text"}/>
            <input onChange={onPostChangePrise} ref={newPostElementPrise} type={"text"}/>

            {/*<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>*/}
            <input onClick={addPost} type={"submit"}/>

        </div>
    )
}

export default AddBookingPost;