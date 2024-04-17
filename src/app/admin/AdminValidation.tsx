"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useAdmin } from "./adminContext";
import { Button, Input } from "@nextui-org/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const AdminValidation = ({children} : {children: React.ReactNode}) => {
    const { isAdmin, setAdmin } = useAdmin();
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    useEffect(() => {
        // Redirect to home if not an admin and localStorage isAdmin is false
        if (typeof window !== "undefined") {
            const storedAdmin = localStorage.getItem('isAdmin');
            const isAdminFromStorage = storedAdmin ? JSON.parse(storedAdmin) : false;
          
            if (!isAdminFromStorage && storedAdmin !== null) {
              router.push('/')
            }
        }
      }, [isAdmin, router]);

    const handleLogin = () => {
        const correctPassword = process.env.NEXT_PUBLIC_BLOG_PASSWORD; 
   
        if (password === correctPassword) {
            setAdmin(true);
        } else {
            router.push('/');
        }
    };

    if (!isAdmin) {
        
        return (
            <div className="pt-28 size-section h-screen flex items-center flex-col gap-4 justify-start">
                <h4 className="title font-semibold mt-[20vh]">Panel de Administrador</h4>
                <Input
                    placeholder="Ingresar contraseña"
                    label="Contraseña"
                    className="w-5/6 lg:w-1/4 "
                    value={password}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                          {isVisible ? (
                            <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    type={isVisible ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="bg-rojo text-white py-2 px-6 font-semibold h-auto rounded-2xl text-sm xs:text-lg data-[focus-visble=true]:outline-rojo lg:text-xl" onClick={handleLogin}>
                    Ingresar
                </Button>
            </div>
        );
    }else{
        return children
    }

}

export default AdminValidation