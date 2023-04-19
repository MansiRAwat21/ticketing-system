export class basecontroller{
    constructor(){}
    private formatted_res (data:any, message : string ='ok' ,success:boolean=true){
        if(success=== false && data.code==11000){
            message=``;
            Object.keys(data.keyvalue).forEach(key =>{
                message +=`${key}: ${data.keyvalue[key]} already exit in our record`
            })
        }
        if(success===false && data.name=="ValidationError")message=data.message;
        return{data, message, success}
    }

    public format_res (data:any, message:string='ok'){
        return this.formatted_res(data,message,true)
    }

    public format_error (error : Error , message:string="Something wrong"){
        return this.formatted_res(error,message,false)
    }
}