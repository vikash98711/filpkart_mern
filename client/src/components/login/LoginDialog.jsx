
import { useState, useContext } from 'react';

import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material/';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
height:70vh;
width:90vh;
`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:80%;
width:40%;
padding: 46px 35px;
& > p, & > h5{
    color:#ffffff;
    font-weight:600
}
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
& >div  > Button, & > p{
    margin-top:34px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641b;
color:#fff;
height:48px;
border-radius:2px;

`

const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgba(0 0 0/20%);

`

const Text = styled(Typography)`
font-size:12px;
color: #878787;
margin-bottom:16px;  

`

const CreateAccount = styled(Typography)`
font-size:12px;
text-align:center;
color:#2874f0;
font-weight:500;
cursor:pointer;

`;

const Error = styled(Typography)`
font-size: 10px;
color:#ff6161;
line-height:0;

font-weight:600px;
`

const accountIntitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}
const loginintialvalue = {
    email: "",
    password: ""
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, Toggleaccount] = useState(accountIntitialValues.login)

    // login_dialogbox usestate for getvalue

    const [signup, setSignup] = useState(signupIntitialValues);
    const [login, setlogin] = useState(loginintialvalue);
const [error,seterror]=useState(false)


    const { setAccount } = useContext(DataContext);

    const handleclose = () => {
        setOpen(false);

        Toggleaccount(accountIntitialValues.login);
        seterror(false)
    }

    const toggleSingup = () => {
        Toggleaccount(accountIntitialValues.signup);
    }

    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup)

    }

    // signupuser button
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleclose();
        setAccount(signup.firstname);
    }

    const onvalueChange = (e) => {
        // console.log(e.target.name , e.target.value)
        setlogin({ ...login, [e.target.name]: e.target.value });

    }
    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleclose();
            setAccount(response.data.data.firstname);
        } else {
        seterror(true)
        }
    }

    return (


        <Dialog open={open} onClose={handleclose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image >
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}
                        </Typography>
                    </Image>


                    {account.view === 'login' ?

                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => { onvalueChange(e) }} name='email' label="Enter your email" />
                           {error && <Error>Please enter valid email and password</Error>}
                            <TextField variant="standard" onChange={(e) => { onvalueChange(e) }} name='password' label="Enter Password" />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => { loginUser() }}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSingup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>

                        : <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='firstname' label="Enter Firstname" />
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='lastname' label="Enter Lastname" />
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='username' label="Enter Username" />
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='email' label="Enter Email" />
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='password' label="Enter Password" />
                            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='phone' label="Enter Phone" />
                            <LoginButton onClick={() => signupUser()} style={{ marginTop: 20 }}>Continue</LoginButton>

                        </Wrapper>

                    }

                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;