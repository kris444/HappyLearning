import * as React from 'react';

import {AgGridReact} from 'ag-grid-react';
import SimpleCellRenderer from './simpleCellRenderer';
import {ColDef} from 'ag-grid';

export default class SimpleGrid extends React.Component {

    private columnNames : Array < string > = [];

    constructor() {
        super();

        this.createColumnNames();
        this.state = {
            columnDefs: this.createColumnNames(),
            rowData: this.createRowData()
        };
    }

    createColumnNames() {
        // creates column names by iterating the alphabet twice, eg
        // {'aa','ab','ac',.....'zz'}
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.columnNames = [];
        alphabet.forEach(letter1 => {
            alphabet.forEach(letter2 => {
                this
                    .columnNames
                    .push(letter1 + letter2);
            });
        });
    }

    createRowData() {
        var rowData = [];

        for (var i = 0; i < 1000; i++) {
            var item : any = {};
            this
                .columnNames
                .forEach(colName => {
                    item[colName] = '(' + colName.toUpperCase() + ',' + i + ')'
                });
            rowData.push(item);
        }

        return rowData;
    }

    createColumnDefs() {
        let columnDefs : any[] = [];

        this
            .columnNames
            .forEach(colName => {
                columnDefs.push({
                    headerName: colName.toUpperCase(),
                    field: colName,
                    cellRendererFramework: SimpleCellRenderer,
                    width: 100
                });
            });

        return columnDefs;
    }

    render() {
        return (
            <div
                style={{
                height: '100%'
            }}
                className="ag-fresh">
                <AgGridReact></AgGridReact>
            </div>
        );
    }
}