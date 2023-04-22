import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crea un nuevo usuario con el rol "cliente"
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;
      const userDocRef = await addDoc(collection(db, "usuarios"), {
        uid,
        email,
        password,
        rol: "cliente",
      });
      console.log("Usuario registrado con ID: ", userDocRef.id);
      alert("el usuario ha sido creado con exito");
      navigate("/micuenta");
    } catch (error) {
      console.log(error);
    }
    clearState();
  };

  const handleSignUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Se ha iniciado sesión con éxito
      const user = result.user;
      const uid = user.uid;
      const displayName = user.displayName;
      const email = user.email;

      // Crea un nuevo usuario en Firestore
      const usuariosRef = collection(db, "usuarios");
      const usuarioDoc = doc(usuariosRef, uid);
      await setDoc(usuarioDoc, { displayName, email, uid, rol: "cliente" });

      // Muestra un mensaje de éxito
      console.log("Se ha registrado el usuario con éxito");
    } catch (error) {
      console.error(error);
    }
  };
  const clearState = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div>
        <div className=" place-items-center py-[8px]  border-blanco border-[1px] rounded-lg  bg-inherit text-blanco focus:outline-none text-center my-10 flex flex-row items-center justify-center gap-2 font-semibold ">
            <img className="w-[24px] " src={"https://i.ibb.co/S7kKGdz/1486146475-google-plus-79440.png"} alt="" />
            <button onClick={handleSignUpWithGoogle}>
              Iniciar sesión con Google
            </button>
          </div>
      <div className="flex flex-row  items-center gap-4 justify-center">
        <div className="w-8 border h-0 text-blanco font-monsterrat font-medium  text-base"></div>
        <p className="text-blanco font-monsterrat font-medium  text-base ">Ó</p>
        <div className="w-8 border h-0 text-blanco font-monsterrat font-medium  text-base"></div>
      </div>
      <form onSubmit={handleSubmit} className="my-10">
        <input
          type="email"
          value={email}
          placeholder="E-mail:"
          onChange={(e) => setEmail(e.target.value)}
          className="grid grid-cols-3 place-items-center py-[6px]  border-secundario border-[1px] rounded-lg  bg-inherit w-full  pl-3 pr-3 my-8  text-blanco "
        />

        <input
          type="password"
          value={password}
          placeholder="Contraseña:"
          onChange={(e) => setPassword(e.target.value)}
          className="grid grid-cols-3 place-items-center py-[6px]  border-secundario border-[1px] rounded-lg  bg-inherit w-full  pl-3 pr-3 my-8  text-blanco "
        />
        <div className=" w-full flex justify-center">
          <button
            type="submit"
            className=" font-monsterrat bg-gradient-to-r text-center from-yellow-400 via-yellow-500 to-yellow-600 w-[282px]
                py-4 px-6 rounded-lg font-semibold text-base mb-10 "
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registro;
