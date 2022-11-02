// import React from "react";
// import "./Main.scss";

// export default function Main() {

// }
// const commentInput = document.querySelector(".main__feed_comments_input");
// const commentForm = document.querySelector(".main__feed_comments_form");
// const commentBtn = document.querySelector(".main__feed_comments_enter");
// const commentArea = document.querySelector(".comment_area");
// const addComment = document.getElementsByClassName("letAddNewComment");
// let commentValue = "";
// //값이 없다로 시작하기 위함

// commentInput.addEventListener("keyup", function () {
//   commentValue = commentInput.value;
//   if (commentValue.length > 0) {
//     commentBtn.disabled = false;
//     commentBtn.style.cursor = "pointer";
//     commentBtn.style.color = "#488bff";
//   } else {
//     commentBtn.disabled = true;
//     commentBtn.style.cursor = "default";
//     commentBtn.style.color = "#488bff";
//   }
// });

// //${id} + ${ctx} + delete button
// //const inputCtx = input.value;

// commentForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const newCommentCtx = commentInput.value;
//   const newComment = document.createElement("li");
//   newComment.innerHTML = `<li> <span><b>0713.jpg</b></span>   ${newCommentCtx} </li>`;
//   addComment[0].appendChild(newComment);
// });
