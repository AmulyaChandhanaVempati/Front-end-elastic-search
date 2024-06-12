import { timeStamp } from "console";

import { AnyPtrRecord } from "dns";

 

export class service {

    static tableName: any = [];

    static targetkeys:any;

    static array : any = [];

    static commontarget:any = [];

    static inarray:any = [];

    static outarray:any = [];

    static outtarget: any = [];

    static intarget: any = [];

   

    static postinArray(inarray:any):any{

        this.inarray = inarray;

    }

 

    static getinArray(){

        return this.inarray;

    }

    static postoutcommontargetArray(inarray:any):any{

        this.commontarget = inarray;

    }

 

    static getoutcommontargetArray(){

        return this.commontarget;

    }

    static postintargetArray(inarray:any):any{

        this.intarget = inarray;

    }

   

    static getintargetArray(){

        return this.intarget;

    }

    static postouttargetArray(inarray:any):any{

        this.outtarget = inarray;

    }

   

    static getouttargetArray(){

        return this.outtarget;

    }

    static postoutArray(outarray:any):any{

        this.outarray = outarray;

    }

    static getoutArray(){

        return this.outarray;

    }

    static postArray(array:any):any{

        this.array = array;

    }

    static getArray(){

        return this.array;

    }

    static getTableName(): any {

        console.log(this.tableName);

        return this.tableName ? this.tableName : [];

    }

    static postTableName(tableName: string) {

        this.tableName = tableName;

    }

    static getTargetKeys(): any {

        console.log(this.targetkeys);

        return this.targetkeys;

    }

    static postTargetKeys(targetkeys:any) {

        console.log(targetkeys);

        this.targetkeys = targetkeys;  

    }

 

  constructor() { }

 

 

}