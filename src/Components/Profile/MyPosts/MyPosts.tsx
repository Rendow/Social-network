import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsMapDispatchToPropsType, MyPostsMapStateToPropsType} from "./MyPostsContainer";
import {Button, TextField} from "@material-ui/core";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../Login/Login";
import {maxLenghtCreator, minLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";
import SuperButton from "../../common/FormsControl/SuperButton";


export type MyPostsPropsType = MyPostsMapStateToPropsType & MyPostsMapDispatchToPropsType


function MyPosts(props: MyPostsPropsType) {


     let PostsElements =
        props.posts.map (post => <Post message={post.messages} like={post.likesCount} />)

    //  let newPostElement = React.createRef<HTMLDivElement>()
    //
    // const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = event.currentTarget.value
    //     props.onChange(text);
    // }
    let addPost = (text:any) => {
        props.onClick(text.newPostText)
    }
    return (
        <div className={classes.content}>

            <div className={classes.postBlock}>
                <div className={classes.header}>
                    <h4> My publications</h4>
                </div>

                <AddNewPostFormRedux onSubmit={addPost}/>
                {/*<div>*/}
                {/*    <TextField*/}
                {/*        color={"primary"}*/}
                {/*        style={{margin:'10px 0'}}*/}
                {/*        onChange={onPostChange}*/}
                {/*        value={props.newPostText}*/}
                {/*        ref={newPostElement}*/}
                {/*        variant={"outlined"}> </TextField>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Button color={"primary"} variant={"contained"} disabled={props.newPostText === ''} onClick={addPost}> Publish</Button>*/}
                {/*</div>*/}
            </div>
            <div className={classes.posts}>
                {PostsElements}
            </div>
        </div>

    )
}
let maxLength = maxLenghtCreator(20)
let minLength = minLenghtCreator(4)
const AddNewPostForm = (props:InjectedFormProps<FormDataType> ) => {
    return  <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Enter your message'}
                    style={{margin: '10px 0'}}
                    name={'newPostText'}
                    component={Textarea}
                    validate={[required, maxLength, minLength]}
                />
            </div>
            <SuperButton>
                Publish
            </SuperButton>
        </form>
    </div>
}

export const AddNewPostFormRedux = reduxForm<FormDataType >({form: 'profileAddMessageForm'})(AddNewPostForm)

export default MyPosts;