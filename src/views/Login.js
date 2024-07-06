import React from "react";
import { Button, Form } from "react-bootstrap";

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.aEmail = React.createRef();
        this.aPassword= React.createRef();
        this.state = {
            email:"",
            password:""
        }
        
        // this.getstate()
    }

    componentDidMount(){
        document.title="Login"
    }
    
    getstate(){
        
        let syarat=[false,false];
        let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!this.state.email.match(regex_email)){
            this.aEmail.current.style.display="block"
            syarat[0]=false;
        }else{
             this.aEmail.current.style.display="none"
             syarat[0]=true;
        }

        if(this.state.password.length==0){
            this.aPassword.current.style.display="block"
            this.aPassword.current.innerText="Password Tidak boleh kosong"
            syarat[1]=false;
        }else
        if(this.state.password.length<8){
            this.aPassword.current.style.display="block"
            this.aPassword.current.innerText="Password harus minimal 8 karater"
            syarat[1]=false;
        }else{
             this.aPassword.current.style.display="none"
             syarat[1]=true;
        }

        if(syarat[0]&&syarat[1]){
            console.log(this.state);
        }
    }

    render() {
        return (
            <div className="container" >
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col">

                        <Form onSubmit={(e)=>e.preventDefault()}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e)=>{this.setState({email:e.target.value})}} type="email" placeholder="name@example.com" />
                                <span ref={this.aEmail} style={{color:"red",display:"none"}}>Email tidak valid</span>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>{this.setState({password:e.target.value})}} type="password"  rows={3} />
                                <span ref={this.aPassword} style={{color:"red",display:"none"}}>Password tidak valid</span>
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