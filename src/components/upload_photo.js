import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Row, Col} from 'react-flexbox-grid';


class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = { files: null };
  }

  onDrop(files) {
    console.log('Received files: ', files, ...files);
    this.setState({files: files});
  }

  render () {
    return (
        <Row>
          <Col xs={6}>
              <Dropzone onDrop={this.onDrop.bind(this)} className="dropzone">
                <div>Incarca o poza (Apasa sau drag&drop)</div>
              </Dropzone>
          </Col>
          <Col xs={6}>
              {this.state.files
                ? <div>{this.state.files.map(file => <img src={file.preview} key={file.lastModified} className="image"/>)}</div>
              : <div>loc de poza</div>
              }
          </Col>
        </Row>
    );
  }
}

export default UploadPhoto;
