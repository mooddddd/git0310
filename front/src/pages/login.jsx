import { Wrap, InputBox, Btn, From } from "../components/content/login.jsx";
import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:3005", withCredentials: true });

export const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userid = e.target.userid.value;
        const userpw = e.target.userpw.value;
        const { data } = await request.post("/auths", { userid, userpw });
        document.cookie = `token=${data}`; // 쿠키에 토큰값 저장
        // 백에 요청을 보내고, 요청이 오면 쿠키 혹은 로컬스토리지에 저장, isLogin이 있다면 dispatch 실행되게?
    };
    return (
        <Wrap>
            <br></br>
            <br></br>
            <h2>Login 페이지</h2>
            <From onSubmit={handleSubmit}>
                <InputBox type="text" id="userid" name="userid" placeholder="아이디"></InputBox>
                <InputBox type="password" id="userpw" name="userpw" placeholder="비밀번호"></InputBox>
                <Btn>로그인</Btn>
            </From>
            <br></br>
        </Wrap>
    );
};
