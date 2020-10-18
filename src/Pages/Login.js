import React,{useState} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
const styles = { 
   cards:{
       width: '75%',
       margin:'auto',
       marginTop:'15px'
   }
}
function Login(){
   const [form,setForm] = useState({usuario:'',password:''});
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
         //<div>Login</div>
         <>
         <Card style={styles.cards}>
             <Card.Body>
                 <Card.Title>Login de Usuario</Card.Title>
                 <Form onSubmit={handleSubmit}>
                     <Form.Group controlId="formBasicNombre">
                         <Form.Label>Usuario</Form.Label>
                         <Form.Control type="text" placeholder="Ingrese su Usuario, máximo 8 caracteres" name="usuario" 
                                 value={form.nombre} onChange={handleChange} maxLength="8"/>
                                                                        
                     </Form.Group>
                     <Form.Group controlId="formBasicEmail">
                         <Form.Label>Contraseña</Form.Label>
                         <Form.Control type="password" placeholder="Ingrese su contraseña, máximo 8 caracteres" name="password" 
                                 value={form.password} onChange={handleChange} maxLength="8"/>
      
                     </Form.Group>
                     <Button variant="primary" type="submit">
                         Aceptar
                     </Button>
                 </Form>
             </Card.Body>
         </Card>
         
         
         </>
       )
}
export default Login