/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
    let [post, setPost] = useState(["남자코트 추천", "강남 우동 맛집", "파이썬독학"]);
    let [heart, setHeart] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...post];
                    copy.map((v, i) => {});
                }}
            >
                순서변경
            </button>
            <button
                onClick={() => {
                    let copy = [...post];
                    copy[0] = "여자코트 추천";
                    setPost(copy);
                }}
            >
                제목 변경
            </button>
            {post.map((v, i) => {
                return (
                    <>
                        <div className="list">
                            <h4>
                                {v}
                                <span
                                    onClick={() => {
                                        setHeart(heart + 1);
                                    }}
                                >
                                    ❤️
                                </span>
                                {heart}
                            </h4>
                            <p>2월 17일 발행</p>
                        </div>
                        <Modal />
                    </>
                );
            })}
        </div>
    );
}

// 컴포넌트 
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들 
function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
