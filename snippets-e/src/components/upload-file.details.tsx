import * as React from 'react';

interface IProps {
    fileName: string,
    fileSize?: number
}

interface IState {

}

export class UploadFileDetails extends React.Component<IProps, IState>{
    render() {

        return (
            <div>
                <span> {this.props.fileName} {this.props.fileSize}<span className="glyphicon glyphicon-camera" onClick={() => {alert('Hi');}}></span></span>
                
            </div>
        );
    }

    private onFileSelected(evt: any) {

    }

}