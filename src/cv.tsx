import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { education, email, gitHubLink, interests, linkedInLink, name, title, work } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

Font.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
Font.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });

const styles = StyleSheet.create({
   page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      fontFamily: `Roboto`,
      // fontFamily: `'Roboto', sans-serif`,
      // padding: 0,
      // margin: 0,
   },
   // section: {
   //    // margin: 10,
   //    padding: 10,
   //    flexGrow: 1,
   // },
   header: {
      fontSize: 18,
      backgroundColor: '#7b8d6c',
      paddingTop: 20,
      paddingBottom: 10,
      textAlign: 'center',
   },
   headerName: {
      fontSize: 28,
   },
   headerTitle: {
   },
   contactDetails: {
      fontSize: 8,
      flexDirection: 'row',
      textAlign: 'center',
   },
   // subheader: {
   //    fontSize: 18,
   //    marginBottom: 10,
   // },
   text: {
      fontSize: 14,
      marginBottom: 5,
   },
   cvContents: {
      marginLeft: 10,
      marginRight: 10,
   },
   section: {
      padding: 10,
      // backgroundColor: 'red',
   },
   sectionTitle: {
      fontSize: 16,
      paddingBottom: 10,
   },
   sectionContent: {
   },
   sectionItem: {
      marginBottom: 10,
   },
   sectionItemHeader: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      // width: '100%',
      fontSize: 10,
      paddingBottom: 5,
      textAlign: 'right',
      // backgroundColor: '#236111',
   },
   sectionItemHeaderLeft: {
      flexDirection: 'row',
      // flex: 1,
      textAlign: 'left',
      // backgroundColor: '#531111',
   },
   sectionItemHeaderRight: {
      // flexDirection: 'row',
      // flex: 1,
      textAlign: 'right',
      // backgroundColor: '#534141',
   },
   sectionItemSubHeader: {
      flexDirection: 'row',
      fontSize: 9,
   },
   sectionItemTitle: {
      fontWeight: 'bold',
   },
   sectionItemOrganisation: {
   },
   sectionItemDate: {
      fontSize: 9,
      color: '#778492',
   },
   sectionItemContents: {
      fontSize: 8,
      paddingLeft: 10,
      paddingRight: 10,
   },
   sectionItemContent: {
      flexDirection: 'row',
   },
   workItemDetailsTitle: {
      fontWeight: 'bold',
   },
   interestsContent: {
      flexDirection: 'row',
   },
   interestText: {
      fontSize: 8,
   },
});

// Create Document Component
export default function CV() {
   return (
      <Document title={`${name} CV`}>
         <Page size="A4" style={styles.page}>
            <View style={styles.header}>
               <Text style={styles.headerName}>{name}</Text>
               <Text style={styles.headerTitle}>{title}</Text>
               <View style={styles.contactDetails}>
                  {/* <Image src={faEnvelope.iconName} /> */}
                  <Text><FontAwesomeIcon icon={faEnvelope} />{email} </Text>
                  <Text>{linkedInLink} </Text>
                  <Text>{gitHubLink} </Text>
               </View>
            </View>
            <View style={styles.cvContents}>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Work experience</Text>
                  <View style={styles.sectionContent}>
                     {work.map((x, i) => (
                        <View key={i} style={styles.sectionItem}>
                           <View style={styles.sectionItemHeader}>
                              <View style={styles.sectionItemHeaderLeft}>
                                 <Text style={styles.sectionItemTitle}>{x.role} </Text>
                                 <Text>- </Text>
                                 <Text style={styles.sectionItemOrganisation}>{x.company} </Text>
                              </View>
                              <View style={styles.sectionItemHeaderRight}>
                                 <Text style={styles.sectionItemDate}>{x.date}</Text>
                              </View>
                           </View>
                           <View style={styles.sectionItemContents}>
                              <Text>{x.description}</Text>
                              {x.technologies &&
                                 <View style={styles.sectionItemContent}>
                                    <Text style={styles.workItemDetailsTitle}>Technologies </Text><Text>{x.technologies}</Text>
                                 </View>
                              }
                           </View>
                        </View>
                     ))}
                  </View>
               </View>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Education</Text>
                  <View style={styles.sectionContent}>
                     {education.map((x, i) => (
                        <View key={i} style={styles.sectionItem}>
                           <View style={styles.sectionItemHeader}>
                              <View style={styles.sectionItemHeaderLeft}>
                                 <Text style={styles.sectionItemTitle}>{x.role} </Text>
                                 <Text>- </Text>
                                 {x.grade && <Text>{x.grade} </Text>}
                                 {x.grade && <Text>- </Text>}
                                 <Text style={styles.sectionItemOrganisation}>{x.company} </Text>
                              </View>
                              <View style={styles.sectionItemHeaderRight}>
                                 <Text style={styles.sectionItemDate}>{x.date}</Text>
                              </View>
                           </View>
                           <View style={styles.sectionItemContents}>
                              <Text>{x.description}</Text>
                              {x.awards &&
                                 <View style={styles.sectionItemContent}>
                                    <Text style={styles.workItemDetailsTitle}>Awards </Text><Text>{x.awards}</Text>
                                 </View>
                              }
                              {x.dissertation &&
                                 <View style={styles.sectionItemContent}>
                                    <Text style={styles.workItemDetailsTitle}>Dissertation </Text><Text>{x.dissertation}</Text>
                                 </View>
                              }
                           </View>
                        </View>
                     ))}
                  </View>
               </View>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Scholarships</Text>
                  <View style={styles.sectionContent}>
                  </View>
               </View>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Interests</Text>
                  <View style={styles.interestsContent}>
                     {interests.map((x, i) => (
                        <Text key={i} style={styles.interestText}>{x.name} </Text>
                     ))}
                  </View>
               </View>
            </View>

            {/* <View style={styles.section}>
               <Text style={styles.subheader}>Education</Text>
               <Text style={styles.text}>B.S. in Computer Science, Anytown University, 2020</Text>
            </View>

            <View style={styles.section}>
               <Text style={styles.subheader}>Experience</Text>
               <Text style={styles.text}>Software Engineer, TechCorp, 2021-Present</Text>
               <Text style={styles.text}>Intern, DevFirm, 2019-2020</Text>
            </View>

            <View style={styles.section}>
               <Text style={styles.subheader}>Skills</Text>
               <Text style={styles.text}>JavaScript, React, Node.js</Text>
            </View> */}
         </Page>
      </Document>
   );
}