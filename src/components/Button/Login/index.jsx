import "./Button.scss";

function Button( {dataBtn} ) {
    return ( <div className={dataBtn.role}>
        {dataBtn.icon}
        {dataBtn.title}
     </div> 
    );
}

export default Button;