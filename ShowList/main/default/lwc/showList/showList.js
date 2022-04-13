import { LightningElement,api,track } from 'lwc';

export default class ShowList extends LightningElement {

    @api sObjectList;
    @track cols = [];
    objCols = [];
    
    get isThereData() {
        return (this.sObjectList!=null)? true : false;
    }

    renderedCallback(){
        if(this.isThereData){
            Object.keys(this.sObjectList[0]).forEach((key, index) => {
                let col = {label: key,fieldName:key,type:'text'};
                this.objCols.push(col);
            });
            this.cols=this.objCols;
        }
    }
}