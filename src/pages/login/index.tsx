import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Input from "@/components/form/Inputs/searchInput";
import Button from "@/components/Layout/Button";
import Logo from "@/components/InceptiaLogo";
import { ContCol, PageCont } from "@/components/Layout/Containers";
import ContWithImage from "@/components/Layout/ContWithImage";
import Header from "@/components/Layout/Header";
import { Paragraph } from "@/components/Layout/Paragraph";
import { Credentials } from "@/models/api";
import { User } from "@/models/api";
import { Login } from "@/api";
import { useUser } from "@/context/user";
const credsInitialVal: Credentials = {
 email: "",
 password: "",
};
export function LoginPage() {
 const [credentials, setCredentials] = useState<Credentials>(credsInitialVal);
 const { setIsAuthenticated } = useUser();
 const navigate = useNavigate();

 /**
  * @description Funcion para tomar el valor de los fields y setear las credenciales
  * @param e input element event
  */
 function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
 }

 /**
  * @description Esta funcion se encarga de manejar el proceso de login contra la api de inceptia
  */
 function HandleLogin(): void {
  Login(credentials).then(async (res) => {
   const jsonRes = await res.json();
   if (res.ok && (jsonRes as User)) {
    const user: User = jsonRes;
    localStorage.setItem("user_token", user.token);
    setIsAuthenticated(true);
    toast("Login Sucessfull");
    navigate("/logs");
    return;
   }
   // Si la request fallo mostrar un toast con el mensaje de error
   toast.error(JSON.stringify(jsonRes));
  });
 }
 return (
  <PageCont>
   <ContWithImage>
    <form className="p-4 w-3/5 flex flex-col gap-6">
     <ContCol>
      <Logo size="md" />
      <Header>Iniciar sesión</Header>
     </ContCol>

     <Input onChange={handleChange} inputName="email" placeholder="Email" />
     <Input
      onChange={handleChange}
      inputName="password"
      placeholder="Contraseña"
     />
     <Button onClick={HandleLogin}>Iniciar sesión</Button>
     <Paragraph>Olvidaste tu contraseña ?</Paragraph>
    </form>
   </ContWithImage>
  </PageCont>
 );
}
