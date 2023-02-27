import "./Button.scss";

function Button( {data} ) {
    return ( <div className={data.role}>
        {data.icon}
        {data.title}
     </div> 
    );
}

export default Button;