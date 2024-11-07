function Input( {label, invlabel, ...props} ){

    //let classeDoLabel = invlabel

    return(
        <p>
            <label className={invlabel}>
                {label}
            </label>
            <input {...props}/>
        </p>
      
    );
}

export default Input