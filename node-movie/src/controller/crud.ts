import { Response } from "express";
import { basecontroller } from "./basecontroller";
import { Document, Model} from "mongoose";
import {StatusCodes} from 'http-status-codes';


export class crudController<T> extends basecontroller{
    private table_name="";
    constructor(private model:Model<T>){
        super()
        this.table_name=this.model.collection.collectionName.slice(0,-1)
    }

    // Error Hendler
    private error_handler(res:Response , error:Error|any , status_code:StatusCodes=StatusCodes.INTERNAL_SERVER_ERROR){
        res.status(status_code).json(this.format_error(error))
    }

    // get 
    public async get(res:Response, query:any={}){
        try {
            const data=await this.model.find(query) 
            return res.status(StatusCodes.OK).json(this.format_res(data))
            
        } catch (error:unknown) {
           this.error_handler(res,error)
        }
    }

    // getById
    public async getById(res:Response, id:any){
        try {
            const data = await this.model.findById(id)

            if(data){

                return res.status(200).json(this.format_res(data))
            }
            this.error_handler(res, new Error("Not Found") , StatusCodes.NOT_FOUND)
        } catch (error: any) {
            this.error_handler(res,error)
        }
    }
    
    // create
    public async create(res:Response, Document:any){
        try {
            const newEntry = await this.model.create(Document)
            res.status(StatusCodes.CREATED).json(this.format_res(newEntry , `${this.table_name} created Successfully`))
        } catch (error:unknown) {
            this.error_handler(res,error)
            
        }
    }

    // update
    /**
     * Function that updates a given document based on id.
     * @param res Response
     * @param id - Document Id that needs to be updated
     * @param data - Value that needs to updated in the Document.
     * @returns completes the request,
     */

    public async update(res:Response, id:string , data:any){
        try {
            const updateDoc=await this.model.findByIdAndUpdate(id, data)
            return res.status(StatusCodes.OK).json(this.format_res(updateDoc, `${this.table_name}updated succesfully`))
            
        } catch (error:unknown) {
             this.error_handler(res, error)
        }
    }

    // delete 
        /**
     * Methods to delete a document from the table using _id.
     * @param res Response 
     * @param id Document that needs to be deleted
     * @returns Completed the request
     */
    public async delete(res:Response, id:string){
        try {

            const deleteDoc =await this.model.findByIdAndDelete(id)
            return res.status(StatusCodes.OK).json(this.format_res(deleteDoc, `${this.table_name} deleted sucessfully`))

        } catch (error:unknown) {
            this.error_handler(res, error )
            
        }
    }
    
}