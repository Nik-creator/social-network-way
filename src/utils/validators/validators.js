const requredField = value =>{
    if(value){
        return undefined;
    }
    return 'Field is required';
}
export default requredField;