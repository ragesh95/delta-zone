import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { Document, Page, pdfjs } from 'react-pdf';

import Sample from '../../Data/sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDF(props) {
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
 
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
  
    return (
      <Modal
        centered={true}
        open={props.open}
        onClose={() => props.close()}
      >
        <Modal.Header>PDF</Modal.Header>
        <Modal.Content>
            <div>
                <Document file={Sample}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(err) => alert(err)}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => props.close()}>OK</Button>
        </Modal.Actions>
      </Modal>
    )
  }
  
  export default PDF;
