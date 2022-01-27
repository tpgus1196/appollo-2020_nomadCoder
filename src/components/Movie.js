import React from "react";
import {Link} from "react-router-dom";

export default ({id}) => 

    //div안에 넣으면 id 수직 나열
    //link로 주소에 id 넣어서 detail페이지로 이동됨
    <div>
        <Link to={`/${id}`}>{id}</Link>
    </div>; 





//js 구조 분해 할당 
//활용 예시:export default ({id}) => <div>
    //"(props) => props.id" 를 "({id}) => id"로 바꾸어 사용
    //미리 필요한 것만 예측하여 뽑아오기.