import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    title,
    tagline,
    leftColumnTitle,
    leftColumnIntro,
    leftColumnSecondParagraph,
    primaOpera,
    secundaOpera,
    rightColumnTitle,
    rightColumnIntro,
    tertiaOpera,
    quartaOpera,
    vocationSection,
    joinSection
  }
`

export const leadershipQuery = groq`
  *[_type == "leadership"] | order(order asc) {
    _id,
    name,
    title,
    bio,
    image {
      asset -> {
        _id,
        url
      },
      alt
    },
    order
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(startDate desc) {
    _id,
    title,
    slug,
    description,
    featuredImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    location,
    startDate,
    completionDate,
    status,
    featured,
    content,
    statusHistory[] {
      status,
      date,
      notes
    },
    updates[] {
      title,
      excerpt,
      date,
      media[] {
        asset -> {
          _id,
          url
        },
        alt
      },
      content
    }
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    content,
    featuredImage,
    location,
    startDate,
    completionDate,
    status
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    socialMedia,
    donationSettings
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    pageTitle,
    foundationSection,
    heritageSection
  }
`

export const footerQuery = groq`
  *[_type == "footer"][0] {
    tagline,
    missionDescription,
    sacredMissionLinks,
    joinWorkLinks,
    contactDescription,
    socialMediaText,
    blessing,
    bibleQuote
  }
`
