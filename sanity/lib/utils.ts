import { client } from '../client'
import { 
  homePageQuery, 
  aboutPageQuery,
  donatePageQuery,
  leadershipQuery, 
  boardOfAdvisorsQuery,
  projectsQuery, 
  projectBySlugQuery, 
  siteSettingsQuery,
  footerQuery
} from './queries'

export async function getHomePage() {
  return await client.fetch(homePageQuery)
}

export async function getAboutPage() {
  return await client.fetch(aboutPageQuery)
}

export async function getDonatePage() {
  return await client.fetch(donatePageQuery)
}

export async function getLeadership() {
  return await client.fetch(leadershipQuery)
}

export async function getBoardOfAdvisors() {
  return await client.fetch(boardOfAdvisorsQuery)
}

export async function getProjects() {
  return await client.fetch(projectsQuery)
}

export async function getProjectBySlug(slug: string) {
  return await client.fetch(projectBySlugQuery, { slug })
}

export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery)
}

export async function getFooter() {
  return await client.fetch(footerQuery)
}
