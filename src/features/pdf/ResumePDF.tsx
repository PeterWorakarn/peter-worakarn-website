import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import moment from 'moment-timezone';
import { TBio, TCareer, TEducation } from '../../constant-enum-type/Strapi';
import { parseMarkdownToLines } from './parseMarkdownToLines';

interface ResumePDFProps {
  bio: TBio;
  jobs: TCareer[];
  educations: TEducation[];
}

const colors = {
  primaryBlue: '#455AFB',
  typoMain: '#2D2D2D',
  typoMinor: '#6E7278',
  border: '#d1d5db',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: colors.typoMain,
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 64,
    paddingRight: 64,
  },
  // Layout
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 16,
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  sectionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 3,
    marginBottom: 8,
  },
  // Header
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: colors.typoMain,
    marginBottom: 3,
  },
  tagline: {
    fontSize: 10,
    color: colors.typoMain,
  },
  contactText: {
    fontSize: 9,
    color: colors.typoMinor,
    textAlign: 'right',
    marginBottom: 2,
  },
  // Section heading
  sectionHeading: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.typoMain,
  },
  // Experience
  jobEntry: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.typoMain,
  },
  jobTitleAccent: {
    color: colors.primaryBlue,
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
  },
  jobMeta: {
    fontSize: 9,
    color: colors.typoMinor,
    marginTop: 2,
    marginBottom: 3,
  },
  descParagraph: {
    fontSize: 9,
    color: colors.typoMain,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  descBullet: {
    fontSize: 9,
    color: colors.typoMain,
    marginBottom: 1,
    paddingLeft: 8,
    lineHeight: 1.4,
  },
  // Education
  educationEntry: {
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.typoMain,
  },
  degree: {
    fontSize: 10,
    color: colors.typoMain,
    marginTop: 1,
  },
  eduMeta: {
    fontSize: 9,
    color: colors.typoMinor,
    marginTop: 2,
  },
  // Expertise
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    fontSize: 9,
    color: colors.typoMain,
    width: '23%',
  },
});

const formatDate = (date: string | null) =>
  date ? moment(date).format('MMM YYYY') : 'Current';

const ResumePDF: React.FC<ResumePDFProps> = ({ bio, jobs, educations }) => {
  const currentJob = jobs[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={styles.name}>
              {bio.First_name} {bio.Last_name.substr(0, 1)}
            </Text>
            {currentJob && (
              <Text style={styles.tagline}>{currentJob.Title}</Text>
            )}
          </View>
          <View style={[styles.col2, { alignItems: 'flex-end' }]}>
            {bio.contact ? <Text style={styles.contactText}>{bio.contact}</Text> : null}
            {bio.linkedin ? <Text style={styles.contactText}>{bio.linkedin}</Text> : null}
            {bio.github ? <Text style={styles.contactText}>{bio.github}</Text> : null}
            {bio.telephone ? <Text style={styles.contactText}>{bio.telephone}</Text> : null}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.row}>
          <View style={styles.col1}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionHeading}>Experience</Text>
            </View>
          </View>
          <View style={styles.col2}>
            {jobs.map(job => (
              <View key={job.id} style={styles.jobEntry}>
                <Text style={styles.jobTitle}>
                  {job.Company},{' '}
                  <Text style={styles.jobTitleAccent}>{job.Title}</Text>
                </Text>
                <Text style={styles.jobMeta}>
                  {formatDate(job.Start_date)} -{' '}
                  {job.Current_job ? 'Current' : formatDate(job.End_date)} | {job.Location}
                </Text>
                {parseMarkdownToLines(job.Description).map((line, i) =>
                  line.type === 'bullet' ? (
                    <Text key={i} style={styles.descBullet}>• {line.text}</Text>
                  ) : (
                    <Text key={i} style={styles.descParagraph}>{line.text}</Text>
                  )
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.row}>
          <View style={styles.col1}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionHeading}>Education</Text>
            </View>
          </View>
          <View style={styles.col2}>
            {educations.map(edu => (
              <View key={edu.id} style={styles.educationEntry}>
                <Text style={styles.schoolName}>{edu.School}</Text>
                <Text style={styles.degree}>{edu.Degree}</Text>
                <Text style={styles.eduMeta}>
                  {formatDate(edu.Start_date)} -{' '}
                  {edu.Current_education ? 'Current' : formatDate(edu.End_date)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Expertise */}
        <View style={styles.row}>
          <View style={styles.col1}>
            <View style={styles.sectionDivider}>
              <Text style={styles.sectionHeading}>Expertise</Text>
            </View>
          </View>
          <View style={styles.col2}>
            <View style={styles.skillsGrid}>
              {bio.skill_set.map(skill => (
                <Text key={skill} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default ResumePDF;
