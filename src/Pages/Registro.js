import React,{useState} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
const styles = { 
    cards:{
        width: '80%',
        margin:'auto',
        marginTop:'10px'
    }
}
function Registro(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const handleSubmit = (e)=>{
        console.log("HandleSubmit",form)
        e.preventDefault();
    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]:value
        })
    }
    return(
        <>
        <Card style={styles.cards}>
            <Card.Body>
                <Card.Title>Registrarse</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} onChange={handleChange}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/>
                        
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        
        
        </>
    )
}
export default Registro