import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;

`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <Agreement>
                        By creating this account, I consent to the processing of my personnal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>LOGIN</Button>
                    <Link>Do not rememeber the password?</Link>
                    <Link>Create A New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
