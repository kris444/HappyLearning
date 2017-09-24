import * as React from 'react';
import { UploadFileDetails } from "./upload-file.details";

interface IUploadFileDetails {
    fileName: string,
    fileSize: number,
    fileData: any
}

class UploadFileData implements IUploadFileDetails {
    constructor(file: any) {
        this.fileName = file.name;
        this.fileSize = (file.size/1024);
        this.fileData = file;
    }

    fileName: string;
    fileSize: number;
    fileData: any;
}

interface IProps {

}

interface IState {
    uploadedFiles: IUploadFileDetails[]
}

export class Upload extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            uploadedFiles: []
        };
    }

    render() {
        let style = {
            // height: "0px",
            // opacity: 0,
            // filter: "alpha(opacity=0)",
            // outline: "none",
            // background: "white",
            // cursor: "inherit",
            // display: "block",
        }

        return (
            <div className="col-md-8">
                <div className="col-md-4">
                    <span className="btn btn-primary btn-file" >
                        Browse <input type="file" style={style} onChange={this.onFileSelected.bind(this)} />
                    </span>
                </div>

                <div className="col-md-4">
                    {this.state.uploadedFiles.map((x,i) =>
                        <UploadFileDetails key={i}
                            fileName={x.fileName}
                            fileSize={x.fileSize}>
                        </UploadFileDetails>
                    )}
                </div>
            </div>
        );
    }

    private uploadData: IUploadFileDetails[] = [];

    private onFileSelected(evt: any) {
        console.log(this.uploadData);
        this.uploadData.push(new UploadFileData(evt.target.files[0]));
        this.setState({
            uploadedFiles: this.uploadData
        })
    }

    private removeFile(file:IUploadFileDetails):void{
        
    }

}