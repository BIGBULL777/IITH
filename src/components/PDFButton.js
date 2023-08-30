import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFContent from './PDFContent';
import Left from './Left';

const DownloadPDFButton = () => (
  <PDFDownloadLink document={<PDFContent/>} fileName="report.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download PDF'
    }
  </PDFDownloadLink>
);

export default DownloadPDFButton;
