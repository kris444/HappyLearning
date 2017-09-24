import * as React from "react";
import {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import {ColumnApi, GridApi} from "ag-grid";

interface IState{
  rowData:any[],
  columnDefs:any[]
}

interface IProps{

}

export default class SimpleGrid extends Component<IProps,IState>{
    
    private gridApi:GridApi;
    private columnApi:ColumnApi;

    constructor(props:IProps){
     super(props);
     this.state = {
         rowData:this.createRowData(),
         columnDefs:this.createColumnDefs()
     };
 }

 private createColumnDefs():any[]{
    return [
        {headerNam: "Make", field:"make"}
    ]
 }

  private createRowData():any[]{
     return [
         {make:"BMW"},
         {make:"BMW1"},
         {make:"BMW2"},
         {make:"BMW3"},

     ]
  }

  private onGridReady(params: any){
    this.gridApi = params.api;
    this.columnApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

 render(){
   let containerStyle:{
       height: 115,
       width:500
   }

   return (
       <div style={containerStyle} className="ag-fresh">
           <AgGridReact
           columnDefs={this.state.columnDefs}
           rowData ={this.state.rowData}
           onGridReady = {this.onGridReady}
           >

           </AgGridReact> 
      </div>
   )
 }
}