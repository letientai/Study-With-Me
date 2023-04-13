import "./Button.scss";

function Button( {data} ) {
    return ( <a href="https://backenddoan-production.up.railway.app/api/auth/google" className={data.role}>
        {data.icon}
        {data.title}
     </a> 
    );
}

export default Button;