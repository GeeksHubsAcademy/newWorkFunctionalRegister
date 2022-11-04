

export const errorVerify = (kind,value) => {

    switch(kind){
        
        case "string":
            console.log("evaluating a string");
        break;

        case "number":
            console.log("evaluating a number")
        break;

        case "email":
            console.log("evaluating an email")
        break;

        default:

            console.log("unknown format!!");

        break;
    }


};