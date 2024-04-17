"use client"
import { createContext, useContext, ReactNode, useState } from 'react';

type AdminContextProps = {
  isAdmin: boolean;
  setAdmin: (value: boolean) => void;
};

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(() => {
        // Check localStorage on initial load
        let storedAdmin
        if (typeof window !== "undefined") {
            storedAdmin = localStorage.getItem('isAdmin');
        }
        
        return storedAdmin ? JSON.parse(storedAdmin) : false;
    });

    const setAdmin = (value: boolean) => {
        setIsAdmin(value);
        // Save to localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem('isAdmin', JSON.stringify(value));
        }
    };
    
    return (
        <AdminContext.Provider value={{ isAdmin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};