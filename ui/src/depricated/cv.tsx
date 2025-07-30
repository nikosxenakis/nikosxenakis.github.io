import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link, Svg, Path } from '@react-pdf/renderer';
import { summary, education, email, gitHub, location, languages, linkedIn, name, title, website, work } from './data';
import { Buffer } from 'buffer';

globalThis.Buffer = Buffer;

(Font as any).register({ family: 'Roboto', src: '/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
(Font as any).register({ family: 'Roboto', src: '/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' });
(Font as any).register({ family: 'Roboto', src: '/Roboto-Thin.ttf', fontWeight: 'thin' });
(Font as any).register({ family: 'Roboto', src: '/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' });

const backgroundColor = '#E4E4E4';
const primaryColor = '#7b8d6c';
const primaryColorLight = '#d6e0ce';
const secondaryColor = '#6d757d';

// const backgroundColor = '#FAFAFA';
// const primaryColor = '#005F73';
// const primaryColorLight = '#94D2BD';
// const secondaryColor = '#0A9396';

const styles = StyleSheet.create({
   page: {
      flexDirection: 'column',
      backgroundColor: backgroundColor,
      fontFamily: `Roboto`,
   },
   header: {
      paddingTop: 20,
      paddingBottom: 10,
      flexDirection: 'row',
   },
   headerName: {
      fontWeight: 'normal',
      fontSize: 24,
      color: primaryColor,
   },
   headerTitle: {
      paddingBottom: 10,
      fontSize: 18,
      color: secondaryColor,
   },
   summary: {
      fontSize: 9,
   },
   headerContentLeft: {
      marginLeft: 20,
      width: '72%',
      maxWidth: '72%',
      textAlign: 'left',
      paddingRight: 20,
   },
   headerContentRight: {
      width: '28%',
      maxWidth: '28%',
      flexDirection: 'column',
      fontSize: 8,
   },
   contactDetails: {
      paddingTop: 10,
   },
   contactDetailsItem: {
      flexDirection: 'row',
      marginBottom: 7,
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
      marginBottom: 10,
   },
   section: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
   },
   sectionTitle: {
      fontSize: 16,
      paddingBottom: 10,
      color: primaryColor,
   },
   sectionContent: {
   },
   sectionItem: {
      marginBottom: 15,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
   },
   sectionItemHeader: {
      flexDirection: 'row',
      fontSize: 10,
      paddingBottom: 5,
      textAlign: 'right',
   },
   sectionItemLeft: {
      textAlign: 'left',
      width: '26%',
      maxWidth: '26%',
   },
   sectionItemRight: {
      width: '74%',
      maxWidth: '74%',
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
   sectionItemFormat: {
      fontSize: 8,
      marginBottom: 2,
      fontStyle: 'italic',
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
   exeprienceDescription: {
      marginBottom: 3,
   },
   exeprienceDescriptionItem: {
      marginBottom: 3,
   },
   workItemDetailsTitle: {
      fontWeight: 'bold',
   },
   smallSectionGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   smallSectionContent: {
      flexDirection: 'row',
   },
   smallSectionText: {
      fontSize: 10,
      marginRight: 35,
   },
   smallSectionSecondary: {
      color: secondaryColor,
      marginRight: 5,
      fontSize: 8,
   },
   linkStyle: {
      textDecoration: 'none',
      color: 'black',
   },
   technologyItem: {
      backgroundColor: primaryColorLight,
      color: 'black',
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 7,
      borderRadius: 5,
      marginRight: 1,
   },
   projectItem: {
      flexDirection: 'row',
      marginBottom: 5,
      width: 250,
      borderBottom: `1px solid ${primaryColor}`,
   },
   projectItemContentName: {
      fontSize: 8,
      marginBottom: 2,
      width: '40%',
      maxWidth: '40%',
   },
   projectItemName: {
      textDecoration: 'none',
      color: 'black',
   },
   projectItemContent: {
      flexDirection: 'row',
      fontSize: 8,
      width: '60%',
      maxWidth: '60%',
   },
   smallSectionContentProject: {
      flexDirection: 'column',
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
                  <Text style={styles.summary}>{summary.short}</Text>
               </View>
               <View style={styles.headerContentRight}>
                  <View style={styles.contactDetails}>
                     <View style={styles.contactDetailsItem}>
                        <Svg viewBox="0 0 512 512" style={{ width: 10, height: 10 }}>
                           <Path fill={primaryColor} d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </Svg>
                        <Text style={{ marginLeft: 4 }}>{location}</Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Svg viewBox="0 0 512 512" style={{ width: 10, height: 10 }}>
                           <Path fill={primaryColor} d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </Svg>
                        <Text style={{ marginLeft: 4 }}>{email.short}</Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Svg viewBox="0 0 512 512" style={{ width: 10, height: 10 }}>
                           <Path fill={primaryColor} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.91 0 54.41 0 24.91 24.09.72 53.79.72s53.79 24.2 53.79 53.69c0 29.5-24.09 53.69-53.79 53.69zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.4-79.2-48.4 0-55.8 37.8-55.8 76.8V448h-92.68V148.9h88.96v40.8h1.28c12.4-23.6  42.68-48.4 87.88-48.4 94 0 111.28 61.9 111.28 142.3V448z" />
                        </Svg>
                        <Text style={{ marginLeft: 4 }}>{linkedIn.short}</Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Svg viewBox="0 0 512 512" style={{ width: 10, height: 10 }}>
                           <Path fill={primaryColor} d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                        </Svg>
                        <Text style={{ marginLeft: 4 }}>{website.short}</Text>
                     </View>
                     <View style={styles.contactDetailsItem}>
                        <Svg viewBox="0 0 24 24" style={{ width: 10, height: 10 }} preserveAspectRatio="xMidYMid meet">
                           <Path fill={primaryColor} d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.287-.01-1.04-.015-2.04-3.338.725-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.758-1.333-1.758 -1.09-.746.084-.731.084-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605 -2.665-.303-5.466-1.336-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.125-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.301 1.23 1.008-.404 3.297-.404 3.297-.404 2.292-1.553 3.297-1.23 3.297-1.23.653 1.651.242 2.873.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.697.824.58C20.565 22.092 24 17.592 24 12  24 5.371 18.629 0 12 0z" />
                        </Svg>
                        <Text style={{ marginLeft: 4 }}>{gitHub.short}</Text>
                     </View>
                  </View>
               </View>
            </View>
            <View style={styles.cvContents}>
               <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Work experience</Text>
                  <View style={styles.sectionContent}>
                     {work.filter(x => x.forCV).map((x) => (
                        <View key={x.role + x.company} style={styles.sectionItem}>
                           <View style={styles.sectionItemLeft}>
                              <Text style={styles.sectionItemTitle}>{x.role}</Text>
                              {x.format && <Text style={styles.sectionItemFormat}>({x.format})</Text>}
                              {x.companyShort && <Text style={styles.sectionItemOrganisation}><Link src={x.companyUrl} style={styles.linkStyle}>{x.companyShort}</Link> </Text>}
                              {!x.companyShort && x.company && <Text style={styles.sectionItemOrganisation}><Link src={x.companyUrl} style={styles.linkStyle}>{x.company}</Link> </Text>}
                              <Text style={styles.sectionItemDate}>{x.location} ({x.date})</Text>
                           </View>
                           <View style={styles.sectionItemRight}>
                              <View style={styles.sectionItemContents}>
                                 {x.description &&
                                    <View style={styles.exeprienceDescription}>
                                       {x.description.map((d) => (
                                          <View key={d} style={styles.exeprienceDescriptionItem}>
                                             <Text>• {d}</Text>
                                          </View>
                                       ))}
                                    </View>
                                 }
                                 {x.technologies &&
                                    <View style={styles.sectionItemContent}>
                                       {x.technologies.split(',').map((y) => (
                                          <View key={y} style={styles.technologyItem}>
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
                     {education.filter(x => x.forCV).map((x) => (
                        <View key={x.company} style={styles.sectionItem}>
                           <View style={styles.sectionItemLeft}>
                              {x.roleShort && <Text style={styles.sectionItemTitle}>{x.roleShort} </Text>}
                              {!x.roleShort && x.role && <Text style={styles.sectionItemTitle}>{x.role} </Text>}
                              {x.grade && <Text style={styles.sectionItemFormat}>{x.grade}</Text>}
                              <Text style={styles.sectionItemOrganisation}><Link src={x.companyUrl ?? ''} style={styles.linkStyle}>{x.company}</Link> </Text>
                              <Text style={styles.sectionItemDate}>{x.location} ({x.date})</Text>
                           </View>
                           <View style={styles.sectionItemRight}>
                              <View style={styles.sectionItemContents}>
                                 {x.scholarship &&
                                    <View style={styles.sectionItemContent}>
                                       <Text><Text style={styles.workItemDetailsTitle}>Scholarship </Text> {x.scholarship}</Text>
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
                     <Text style={styles.sectionTitle}>Languages</Text>
                     <View style={styles.smallSectionContent}>
                        {languages.map((x) => (
                           <Text key={x.name} style={styles.smallSectionText}>{x.name} <Text style={styles.smallSectionSecondary}>{x.level}</Text></Text>
                        ))}
                     </View>
                  </View>
               </View>
            </View>
         </Page>
      </Document >
   );
}