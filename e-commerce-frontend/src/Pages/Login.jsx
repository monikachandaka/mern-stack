import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
    const [loginDetails, setLoginDetails] = React.useState({
        username: "",
        password: "",
        otp: "",
    });

    const navigate= useNavigate();
    let [mailOtp, setMailOtp] = useState(0);

    const handleLogin = (e) => {
        try {
            e.preventDefault();
            if ( mailOtp == loginDetails.otp && loginDetails.password != " ") {
                toast.success("login Successful")

                localStorage.setItem("token","234asdfgfdf");
                setTimeout(()=>{
                    navigate("/home");
                },3000);
            }
             else if(mailOtp !=loginDetails.otp){
                toast.warn("invalid OTP");
            }
            else{
                toast.error("Failed to login")
            }
            console.log(loginDetails);
            console.log(mailOtp);
        }
        catch (err) {
            console.log(err);
        }


    };

    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
    }

    // forn reset function

    const handleReset = () => {
        setLoginDetails({
            username: " ",
            password: " ",
            otp: " "
        });
    };

    const generateOtp = async () => {
        try {
            let generatedOtp = Math.floor(Math.random() * 1000000);
            let time = new Date();
            let expiredTime = `${time.getHours()}:${time.getMinutes() + 15}:00`;

            setMailOtp(generatedOtp);

            // setTimeout(()=>{
            //     setMailOtp(0)
            // },'15min');

            let formData = {
                email: loginDetails.username,
                otp: generatedOtp,
                time: expiredTime,
            };


            await emailjs.send("service_u7o75tp",
                "template_87ulgei",
                formData,
                "BIOtf_Gzs0XNpkHLR"
            );
            toast.success("Otp send to ur mail successfully")
        }

        catch (err) {
            console.log(err);
            toast.error("failed to generate Otp")

        }
    };




    return (
        <div id="form-container">
            <Form onSubmit={handleLogin}>
                <Row>
                    <Form.Group>
                        <Form.Label>username:</Form.Label>
                        <Form.Control type="email" placeholder="enter email" name="username" onChange={handleChange} value={loginDetails.username} />
                    </Form.Group>
                </Row>
                <Row className="my-2">
                    <Form.Group>
                        <Form.Label>password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="password" onChange={handleChange} value={loginDetails.password} />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <button onClick={generateOtp} type='button'>generate otp</button>
                    </Col>

                    <Col>

                        <Form.Control type="number" placeholder="enter otp" name="otp" onChange={handleChange} value={loginDetails.otp} />
                    </Col>

                </Row>
                <Row className="my-2">
                    <Col>
                        <button type='submit' className="btn btn-info"  >Login</button>
                    </Col>
                    <Col>
                        <button onClick={handleReset} type='reset' className="btn btn-warning" >reset</button>
                    </Col>
                </Row>
            </Form>
            <ToastContainer />
        </div>
    )
}
export default Login;