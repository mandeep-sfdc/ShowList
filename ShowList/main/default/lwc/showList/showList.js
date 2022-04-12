import { LightningElement,api,track } from 'lwc';

export default class ShowList extends LightningElement {

    @api sObjectList;
    @track cols = [];
    objCols = [];
    
    renderedCallback(){
        Object.keys(this.sObjectList[0]).forEach((key, index) => {
            let col = {label: key,fieldName:key,type:'text'};
            this.objCols.push(col);
        });
        this.cols=this.objCols;
    }
}