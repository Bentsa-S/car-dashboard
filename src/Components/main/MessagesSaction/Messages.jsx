import React from "react";
import search from "../header/Header.module.css";
import searchImg from "../../../icone/iconeHeader/search.png";


const MessagesPeople = () =>{
    // let dialogsElements = props.dialogsPage.people.map(dialog => <DialogsItem userName={dialog.userName} lastText = {dialog.lastText} userAvater = {dialog.userAvatar} id={dialog.id}/>)
    return(
        <div>
            <div>
                <div>
                    <h1>Messages</h1>
                </div>

                <div className={search.search}>
                    <img className={search.logo} src={searchImg}/>
                    <input className={search.inputSearch} type="text"/>
                </div>

                {/*{dialogsElements}*/}
                <h2>pinned</h2>

            </div>
        </div>
    )
}


export default MessagesPeople;