import React from "react";

const functionalComponent = (props) => {
    return(
        <>
            <h1>Soc un component funcional rebent props</h1>
            <h1>Props Variable: { props.propsFunctional1 }</h1>
            <h1>Props String: { props.propsFunctional2String }</h1>
            <h1>Props String: { props.propsFunctionalNumber } </h1>
            <h1>Props String: { props.propsFunctionalObject.nom } </h1>
            
        </>
    )
} 

export default functionalComponent;
