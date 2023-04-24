import "./Button.scss";

function Button( {dataBtn} ) {
    return ( <a href="https://backenddoan-production.up.railway.app/api/auth/google" className={dataBtn.role}>
        {dataBtn.icon}
        {dataBtn.title}
     </a> 
    );
}

export default Button;