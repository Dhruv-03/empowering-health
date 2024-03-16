class ApiError extends Error {
    constructor(statusCode,message="Something went wrong",stack=""){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.success=false
    }
}

export {ApiError}