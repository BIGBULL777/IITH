import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Left from './Left';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create PDFContent component
const PDFContent = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <View style={styles.section}> */}
        {/* <Text>PDF Content</Text> */}
        <Left/>
      {/* </View> */}
    </Page>
  </Document>
);

export default PDFContent;
