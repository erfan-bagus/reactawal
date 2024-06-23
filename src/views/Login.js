import React from "react";
import { Button, Form } from "react-bootstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email:"",
            password:""
        }
    }
    componentDidMount(){
        document.title="Login"
    }

    getstate(){
        let regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(this.state.email.match(regex_email));
    }

    render() {
        return (
            <div className="container" >
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col">
                        <h1>{this.props.id}</h1>

                        <Form onSubmit={(e)=>e.preventDefault()}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e)=>{this.setState({email:e.target.value})}} type="email" placeholder="name@example.com" />
                                <span style={{color:"red",display:"none"}}>email tidak valid</span>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>{this.setState({password:e.target.value})}} type="password"  rows={3} />
                                <span style={{color:"red",display:"none"}}>password tidak valid</span>
                            </Form.Group>
                            <Button onClick={()=>{this.getstate()}} type="submit" variant="primary">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;