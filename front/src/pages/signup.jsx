import { Wrap, InputBox, Btn, From } from "../components/content/login.jsx";
import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3005",
    withCredentials: true,
});

export const Signup = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userid = e.target.userid.value;
        const userpw = e.target.userpw.value;
        const userInsert = await request.post("/users", { userid, userpw });
    };
    return (
        <Wrap>
            <br></br>
            <br></br>
            <h2>회원가입</h2>
            <From onSubmit={handleSubmit}>
                <InputBox type="text" id="userid" name="userid" placeholder="아이디"></InputBox>
                <InputBox type="password" id="userpw" name="userpw" placeholder="비밀번호"></InputBox>
                <Btn>가입하기</Btn>
            </From>
            <br></br>
        </Wrap>
    );
};
