import AuthNavbar from "../components/auth_navbar";

export default function Authlayout({title,children})
{
    return(
        <>
         <AuthNavbar/>
         {children}
        </>
       
    )
}