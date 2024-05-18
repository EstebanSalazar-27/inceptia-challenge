import { useState } from "react";
import Input from "../../components/form/inputs/searchInput";
import {
 Button,
 ContCol,
 ContWithImage,
 HeaderH3,
 Logo,
 PageCont,
 Paragraph,
} from "../../components/layout";
import { Credentials } from "../../models";
import { Login } from "../../api/login";
import { toast } from "react-toastify";
import { User } from "../../models/api/login";
import { useUser } from "../../context/user";

export function LoginPage() {
 const [credentials, setCredentials] = useState<Credentials>({
  email: "",
  password: "",
 });
 const { setUser } = useUser();
 function handleChange(e) {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
 }
 function handleSubmit() {
  Login(credentials).then(async (res) => {
   const jsonRes = await res.json();
   if (res.ok && (jsonRes as User)) {
    const user: User = jsonRes;
    toast("Login Sucessfull");
    localStorage.setItem("user_token", user.token);
    setUser(jsonRes);
    return;
   }
   toast(JSON.stringify(jsonRes));
  });
 }
 return (
  <PageCont>
   <ContWithImage>
    <form className="p-4 w-3/5 flex flex-col gap-6">
     <ContCol>
      <Logo size="md" />
      <HeaderH3>Iniciar sesión</HeaderH3>
     </ContCol>

     <Input onChange={handleChange} inputName="email" placeholder="Email" />
     <Input
      onChange={handleChange}
      inputName="password"
      placeholder="Contraseña"
     />
     <Button onClick={handleSubmit}>Iniciar sesión</Button>
     <Paragraph>Olvidaste tu contraseña ?</Paragraph>
    </form>
   </ContWithImage>
  </PageCont>
 );
}
