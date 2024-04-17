"use client"
import React from "react";
import { AdminProvider } from "./adminContext";
import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AdminValidation = dynamic(() => import("./AdminValidation"), {
  ssr: false,
});

const AdminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AdminProvider>
      <AdminValidation>
        <>
          <Header color="242, 234, 231" textColor="text-negro" />
          {children}
          <Footer bgColor="bg-fondo" textColor="text-negro"/>
        </>
      </AdminValidation>
    </AdminProvider>
  );
};

export default AdminLayout;
