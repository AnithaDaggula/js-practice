let course="JavaScript"

function practicescope(){
    let topic="variables"
    console.log(course + "-" + topic)

    if(true){
        let detail="exploring scopes"
        console.log(detail)
    }
}
practicescope()