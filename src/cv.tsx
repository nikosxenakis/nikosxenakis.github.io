import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet, Font, Link, Svg, Path } from '@react-pdf/renderer';
import { education, email, gitHub, interests, languages, linkedIn, name, projects, title, work } from './data';

Font.register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
Font.register({ family: 'Roboto', src: '/Roboto-Light.ttf', fontStyle: 'normal', fontWeight: 'light' });
Font.register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });

Font.registerEmojiSource({
   format: 'png',
   url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const secondaryColor = '#778492';

const styles = StyleSheet.create({
   page: {
      flexDirection: 'column',
      backgroundColor: backgroundColor,
      fontFamily: `Roboto`,
   },
   header: {
      // backgroundColor: primaryColor,
      paddingTop: 20,
      paddingBottom: 10,
      flexDirection: 'row',
   },
   headerName: {
      fontSize: 26,
      color: primaryColor,
   },
   headerTitle: {
      paddingBottom: 10,
      fontSize: 14,
      color: secondaryColor,
      // fontWeight: 'light',
   },
   headerContentLeft: {
      marginLeft: 20,
      width: '70%',
      maxWidth: '70%',
      textAlign: 'left',
   },
   headerContentRight: {
      width: '30%',
      maxWidth: '30%',
      flexDirection: 'column',
   },
   contactDetails: {
      paddingTop: 10,
      fontSize: 8,
   },
   contactDetailsItem: {
      flexDirection: 'row',
      marginBottom: 10,
      fontSize: 9,
      textAlign: 'left',
      display: 'flex',
   },
   text: {
      fontSize: 14,
      marginBottom: 5,
   },
   cvContents: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 20,
   },
   section: {
      padding: 10,
      // backgroundColor: 'red',
   },
   sectionTitle: {
      fontSize: 16,
      paddingBottom: 10,
      color: primaryColor,
   },
   sectionContent: {
   },
   sectionItem: {
      marginBottom: 12,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
   },
   sectionItemHeader: {
      flexDirection: 'row',
      // width: '100%',
      fontSize: 10,
      paddingBottom: 5,
      textAlign: 'right',
      // backgroundColor: '#236111',
   },
   sectionItemLeft: {
      // flexDirection: 'row',
      // flex: 1,
      textAlign: 'left',
      // backgroundColor: '#531111',
      width: '30%',
      maxWidth: '30%',
   },
   sectionItemRight: {
      // flexDirection: 'row',
      // flex: 1,
      // textAlign: 'right',
      // backgroundColor: '#534141',
      width: '70%',
      maxWidth: '70%',
   },
   sectionItemSubHeader: {
      flexDirection: 'row',
      fontSize: 9,
   },
   sectionItemTitle: {
      fontWeight: 'bold',
      fontSize: 10,
      marginBottom: 2,
   },
   sectionItemOrganisation: {
      fontSize: 9,
      marginBottom: 2,
   },
   sectionItemDate: {
      fontSize: 8,
      color: secondaryColor,
   },
   sectionItemContents: {
      fontSize: 8,
      paddingLeft: 10,
      paddingRight: 10,
   },
   sectionItemContent: {
      flexDirection: 'row',
      marginBottom: 3,
   },
   workItemDetailsTitle: {
      fontWeight: 'bold',
   },
   smallSectionGroup: {
      flexDirection: 'row',
      // backgroundColor: '#534141',
      justifyContent: 'space-between',
   },
   smallSectionContent: {
      flexDirection: 'column',
   },
   smallSectionText: {
      fontSize: 8,
      marginBottom: 5,
   },
   smallSectionSecondary: {
      color: secondaryColor,
   },
   linkStyle: {
      textDecoration: 'none',
      color: 'black',
   },
   technologyItem: {
      backgroundColor: primaryColor,
      color: backgroundColor,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 4,
      borderRadius: 5,
      marginRight: 1,
   },
});

export default function CV() {
   return (
      <Document title={`${name} CV`} author={name} subject='CV' language='en' pageLayout='singlePage' pageMode='fullScreen'>
         <Page size="A4" orientation='portrait' style={styles.page}>
            <View style={styles.header}>
               <View style={styles.headerContentLeft}>
                  <Text style={styles.headerName}>{name}</Text>
                  <Text style={styles.headerTitle}>{title}</Text>
               </View>
               <View style={styles.headerContentRight}>
                  <View style={styles.contactDetails}>
                     <View style={styles.contactDetailsItem}>
                        <Text><Link src={email.link} style={styles.linkStyle}>📧 {email.short}</Link></Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Text><Link src={linkedIn.link} style={styles.linkStyle}><Image src='./assets/images/linkedin.png' style={{ width: 10, height: 10 }} /> {linkedIn.short}</Link></Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Text><Link src={gitHub.link} style={styles.linkStyle}><Image src='./assets/images/github.png' style={{ width: 10, height: 10 }} /> {gitHub.short}</Link></Text>
                     </View>
                  </View>
               </View>
            </View>
            <View style={styles.cvContents}>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Work experience</Text>
                  <View style={styles.sectionContent}>
                     {work.map((x, i) => (
                        <View key={i} style={styles.sectionItem}>
                           <View style={styles.sectionItemLeft}>
                              <Text style={styles.sectionItemTitle}>{x.role} </Text>
                              {x.companyShort && <Text style={styles.sectionItemOrganisation}><Link src={x.companyUrl} style={styles.linkStyle}>{x.companyShort}</Link> </Text>}
                              {!x.companyShort && x.company && <Text style={styles.sectionItemOrganisation}><Link src={x.companyUrl} style={styles.linkStyle}>{x.company}</Link> </Text>}
                              <Text style={styles.sectionItemDate}>{x.location} ({x.date})</Text>
                           </View>
                           <View style={styles.sectionItemRight}>
                              <View style={styles.sectionItemContents}>
                                 {x.description &&
                                    <View style={styles.sectionItemContent}>
                                       <Text>{x.description}</Text>
                                    </View>
                                 }
                                 {x.technologies &&
                                    <View style={styles.sectionItemContent}>
                                       {/* <Text><Text style={styles.workItemDetailsTitle}>Technologies </Text> {x.technologies}</Text> */}
                                       {x.technologies.split(',').map((y, j) => (
                                          <View key={j} style={styles.technologyItem}>
                                             <Text>{y}</Text>
                                          </View>
                                       ))}
                                    </View>
                                 }
                              </View>
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
                           <View style={styles.sectionItemLeft}>
                              {x.roleShort && <Text style={styles.sectionItemTitle}>{x.roleShort} </Text>}
                              {!x.roleShort && x.role && <Text style={styles.sectionItemTitle}>{x.role} </Text>}
                              {x.company && <Text style={styles.sectionItemOrganisation}>{x.company} </Text>}
                              <Text style={styles.sectionItemDate}>{x.date}</Text>
                           </View>
                           <View style={styles.sectionItemRight}>
                              <View style={styles.sectionItemContents}>
                                 {x.description &&
                                    <View style={styles.sectionItemContent}>
                                       <Text>{x.description}</Text>
                                    </View>
                                 }
                                 {x.awards &&
                                    <View style={styles.sectionItemContent}>
                                       <Text><Text style={styles.workItemDetailsTitle}>Scholarships </Text> {x.awards}</Text>
                                    </View>
                                 }
                                 {x.dissertation &&
                                    <View style={styles.sectionItemContent}>
                                       <Text><Text style={styles.workItemDetailsTitle}>Dissertation </Text> {x.dissertation}</Text>
                                    </View>
                                 }
                              </View>
                           </View>
                        </View>
                     ))}
                  </View>
               </View>
               <View style={styles.smallSectionGroup}>
                  <View style={styles.section}>
                     <Text style={styles.sectionTitle}>Projects</Text>
                     <View style={styles.smallSectionContent}>
                        {projects.map((x, i) => (
                           <Text key={i} style={styles.smallSectionText}><Link src={x.url} style={styles.linkStyle}>{x.name}</Link> </Text>
                        ))}
                     </View>
                  </View>
                  <View style={styles.section}>
                     <Text style={styles.sectionTitle}>Languages</Text>
                     <View style={styles.smallSectionContent}>
                        {languages.map((x, i) => (
                           <Text key={i} style={styles.smallSectionText}>{x.name} - <Text style={styles.smallSectionSecondary}>{x.level}</Text></Text>
                        ))}
                     </View>
                  </View>
                  <View style={styles.section}>
                     <Text style={styles.sectionTitle}>Interests</Text>
                     <View style={styles.smallSectionContent}>
                        {interests.map((x, i) => (
                           <Text key={i} style={styles.smallSectionText}>{x.name} </Text>
                        ))}
                     </View>
                  </View>
               </View>
            </View>
         </Page>
      </Document>
   );
}