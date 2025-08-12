import { getProjects } from '../../sanity/lib/utils';

interface Project {
  _id: string;
  title: string;
  slug: any;
  description: string;
  featuredImage?: any;
  location?: string;
  startDate?: string;
  completionDate?: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  featured: boolean;
}

export default async function Projects() {
  const projects: Project[] = await getProjects();

  // Fallback content if no Sanity data
  const fallbackProjects: Project[] = [
    {
      _id: '1',
      title: 'The Urban Crucifixes Initiative',
      slug: { current: 'urban-crucifixes' },
      description: 'Installing beautiful crucifixes in public squares and parks across major cities, bringing the presence of Christ into the heart of urban life.',
      status: 'in-progress',
      featured: true
    },
    {
      _id: '2',
      title: 'Marian Wayside Shrines',
      slug: { current: 'marian-shrines' },
      description: 'Creating small but beautiful shrines to Our Lady along pilgrimage routes and in places of natural beauty.',
      status: 'in-progress',
      featured: true
    },
    {
      _id: '3',
      title: 'Saints of the Nations',
      slug: { current: 'saints-nations' },
      description: 'Establishing shrines dedicated to patron saints of various nations in immigrant communities and cultural centers.',
      status: 'planning',
      featured: false
    },
    {
      _id: '4',
      title: "St. Michael's Garden Shrine",
      slug: { current: 'st-michael-garden' },
      description: 'A magnificent shrine to St. Michael the Archangel in the heart of a public garden, featuring traditional stonework and sacred imagery.',
      status: 'completed',
      featured: false
    }
  ];

  const projectList = projects && projects.length > 0 ? projects : fallbackProjects;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'planning': return 'Planning Phase';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      case 'on-hold': return 'On Hold';
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'planning': return 'planning';
      case 'in-progress': return 'in-progress';
      case 'completed': return 'completed';
      case 'on-hold': return 'on-hold';
      default: return 'planning';
    }
  };
  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          <div className="text-center mb-12">
            <div className="medieval-crest mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4" style={{backgroundColor: 'var(--medieval-brown)', borderColor: 'var(--earthy-green)'}}>
          <span className="text-lg sm:text-2xl" style={{color: 'var(--medieval-parchment)'}}>✠</span>
              </div>
            </div>
            <h1 className="medieval-title">Sacred Projects</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectList.map((project) => (
                <div key={project._id} className="medieval-project-card">
                  <h3 className="font-bold text-lg mb-2" style={{color: 'var(--earthy-green)'}}>{project.title}</h3>
                  {project.location && (
                    <p className="text-sm mb-2 font-semibold" style={{color: 'var(--medieval-brown)'}}>{project.location}</p>
                  )}
                  <p className="medieval-text">
                    {project.description}
                  </p>
                  <div className={`medieval-status ${getStatusClass(project.status)} mt-3`}>
                    Status: {getStatusLabel(project.status)}
                  </div>
                  {project.completionDate && (
                    <div className="text-sm mt-2" style={{color: 'var(--medieval-brown)'}}>
                      Completed: {new Date(project.completionDate).getFullYear()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="medieval-notice">
              <h2 className="medieval-subtitle mb-4">Propose a Project</h2>
              <p className="medieval-text">
                Do you know of a location that would benefit from a public shrine? 
                Contact our Projects Committee to discuss possibilities and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 