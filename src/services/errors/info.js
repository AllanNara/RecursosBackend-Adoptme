export const generateUserErrorInfo = (user) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    * first_name : needs to be a String, recieved ${user.first_name}
    * last_name : needs to be a String, recieved ${user.last_name}
    * email : needs to be a String, recieved ${user.email}`
}

export const validateIdErrorInfo = (id) => {
    return `The ID type is not valid, needs to be a ObjectId, recieved ${id}`
}