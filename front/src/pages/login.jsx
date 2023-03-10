import { Wrap, InputBox, Btn, From } from "../components/content/login.jsx";

export const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`hi`);
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
