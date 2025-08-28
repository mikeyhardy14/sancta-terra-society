'use client';

import { useState, useEffect } from 'react';
import { getProjects } from '../../sanity/lib/utils';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/client';

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

interface ProjectUpdate {
  title: string;
  excerpt: string;
  date: string;
  media?: any[];
  content?: any[];
}

interface StatusChange {
  status: string;
  date: string;
  notes?: string;
}

interface Project {
  _id: string;
  title: string;
  slug: any;
  description: string;
  content?: any[];
  featuredImage?: any;
  location?: string;
  startDate?: string;
  completionDate?: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  featured: boolean;
  updates?: ProjectUpdate[];
  statusHistory?: StatusChange[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

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

  if (loading) {
    return (
      <div className="min-h-screen medieval-bg">
        <div className="medieval-border">
          <div className="medieval-content">
            <div className="text-center py-20">
              <div
                className="animate-spin w-8 h-8 border-2 border-t-transparent rounded-full mx-auto mb-4"
                style={{ borderColor: 'var(--earthy-green)' }}
              ></div>
              <p className="medieval-text">Loading projects...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          <div className="text-center mb-12">
            <div className="medieval-crest mb-8">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4"
                style={{ backgroundColor: 'var(--medieval-brown)', borderColor: 'var(--earthy-green)' }}
              >
                <span className="text-lg sm:text-2xl" style={{ color: 'var(--medieval-parchment)' }}>
                  ✠
                </span>
              </div>
            </div>
            <h1 className="medieval-title">Sacred Projects</h1>
            <div className="w-32 h-1 mx-auto mt-4" style={{ backgroundColor: 'var(--earthy-green)' }}></div>
          </div>

          {/* Single column layout with responsive grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {projectList.map((project) => (
                <div
                  key={project._id}
                  className="w-full max-w-sm medieval-leader-card transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  {/* Project Image */}
                  <div className="mb-6">
                    <div
                      className="w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden border-4 shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{ borderColor: 'var(--earthy-green)' }}
                    >
                      {project.featuredImage ? (
                        <Image
                          src={urlFor(project.featuredImage).width(600).height(450).fit('crop').crop('center').url()}
                          alt={project.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--medieval-brown)' }}
                        >
                          <span className="text-6xl" style={{ color: 'var(--medieval-parchment)' }}>
                            ✠
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="text-center mb-4">
                    <h3
                      className="font-bold text-xl mb-2 transition-colors duration-300 hover:opacity-80"
                      style={{ color: 'var(--earthy-green)' }}
                    >
                      {project.title}
                    </h3>
                  {project.location && (
                      <p
                        className="font-semibold text-sm uppercase tracking-wide mb-2"
                        style={{ color: 'var(--medieval-brown)' }}
                      >
                        📍 {project.location}
                      </p>
                    )}
                    <div className={`medieval-status ${getStatusClass(project.status)} mb-3`}>
                      {getStatusLabel(project.status)}
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="mb-4">
                    <p className="medieval-text text-left text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mb-4">
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for Project Details */}
          {selectedProject && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Project details"
              className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4 z-40 transition-all duration-300 ease-in-out ${
                isModalVisible ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeModal}
            >
              <div
                className={`bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out ${
                  isModalVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                }`}
                style={{ backgroundColor: 'var(--medieval-parchment)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="float-right text-2xl font-bold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--medieval-brown)' }}
                    aria-label="Close project details"
                  >
                    ×
                  </button>

                  {/* Project Header */}
                  <div className="text-center mb-8 clear-right">
                    {selectedProject.featuredImage && (
                      <div
                        className="w-full max-w-3xl mx-auto mb-6 rounded-lg overflow-hidden border-4 shadow-lg bg-white"
                        style={{ borderColor: 'var(--earthy-green)' }}
                      >
                        <div className="relative w-full">
                          <Image
                            src={urlFor(selectedProject.featuredImage).width(1200).url()}
                            alt={selectedProject.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain max-h-80"
                            style={{ maxHeight: '20rem' }}
                          />
                        </div>
                      </div>
                    )}
                    <h2 className="font-bold text-3xl mb-2" style={{ color: 'var(--earthy-green)' }}>
                      {selectedProject.title}
                    </h2>
                    {selectedProject.location && (
                      <h3
                        className="font-semibold text-lg mb-2"
                        style={{ color: 'var(--medieval-brown)' }}
                      >
                        📍 {selectedProject.location}
                      </h3>
                    )}
                    <div className={`medieval-status ${getStatusClass(selectedProject.status)} mb-4 inline-block`}>
                      {getStatusLabel(selectedProject.status)}
                    </div>
                  </div>

                  {/* Project Description & Dates */}
                  <div className="mb-8">
                    <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--earthy-green)' }}>
                      About This Project
                    </h3>
                    <p className="medieval-text leading-relaxed text-lg mb-6" style={{ color: 'var(--medieval-brown)' }}>
                      {selectedProject.description}
                    </p>
                    
                    {/* Project Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.startDate && (
                        <div className="bg-white p-4 rounded-lg border-2" style={{ borderColor: 'var(--earthy-green)' }}>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--earthy-green)' }}>
                            Start Date
                          </h4>
                          <p className="medieval-text" style={{ color: 'var(--medieval-brown)' }}>
                            {new Date(selectedProject.startDate).toUTCString().split("00:")[0]}
                          </p>
                        </div>
                      )}
                      {selectedProject.completionDate && (
                        <div className="bg-white p-4 rounded-lg border-2" style={{ borderColor: 'var(--earthy-green)' }}>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--earthy-green)' }}>
                            {new Date(selectedProject.completionDate) > new Date() ? 'Expected Completion Date' : 'Completion Date'}
                          </h4>
                          <p className="medieval-text" style={{ color: 'var(--medieval-brown)' }}>
                            {new Date(selectedProject.completionDate).toUTCString().split("00:")[0]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Full Content */}
                  {selectedProject.content && selectedProject.content.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--earthy-green)' }}>
                        Project Details
                      </h3>
                      <div className="prose max-w-none">
                        {selectedProject.content.map((block, index) => {
                          if (block._type === 'block') {
                            return (
                              <div key={index} className="mb-4">
                                {block.children?.map((child: any, childIndex: number) => (
                                  <p key={childIndex} className="medieval-text leading-relaxed text-lg" style={{ color: 'var(--medieval-brown)' }}>
                                    {child.text}
                                  </p>
                                ))}
                              </div>
                            );
                          } else if (block._type === 'image') {
                            return (
                              <div key={index} className="my-6">
                                <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 shadow-lg bg-white" style={{ borderColor: 'var(--earthy-green)' }}>
                                  <div className="relative w-full">
                                    <Image
                                      src={urlFor(block).width(1200).url()}
                                      alt={block.alt || 'Project image'}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain max-h-96"
                                      style={{ maxHeight: '24rem' }}
                                    />
                                  </div>
                                </div>
                                {block.caption && (
                                  <p className="text-sm text-center mt-2" style={{ color: 'var(--medieval-brown)' }}>
                                    {block.caption}
                                  </p>
                                )}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Status History */}
                  {selectedProject.statusHistory && selectedProject.statusHistory.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--earthy-green)' }}>
                        Project Timeline
                      </h3>
                      <div className="space-y-4">
                        {selectedProject.statusHistory.map((status, index) => (
                          <div key={index} className="border-l-4 pl-4" style={{ borderColor: 'var(--earthy-green)' }}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold" style={{ color: 'var(--earthy-green)' }}>
                                {getStatusLabel(status.status)}
                              </span>
                              <span className="text-sm" style={{ color: 'var(--medieval-brown)' }}>
                                {new Date(status.date).toLocaleDateString()}
                              </span>
                            </div>
                            {status.notes && (
                              <p className="text-sm medieval-text" style={{ color: 'var(--medieval-brown)' }}>
                                {status.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Updates */}
                  {selectedProject.updates && selectedProject.updates.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--earthy-green)' }}>
                        Project Updates
                      </h3>
                      <div className="space-y-6">
                        {selectedProject.updates.map((update, index) => (
                          <div key={index} className="border rounded-lg p-6" style={{ borderColor: 'var(--earthy-green)' }}>
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="font-bold text-lg" style={{ color: 'var(--earthy-green)' }}>
                                {update.title}
                              </h4>
                              <span className="text-sm" style={{ color: 'var(--medieval-brown)' }}>
                                {new Date(update.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="medieval-text mb-4" style={{ color: 'var(--medieval-brown)' }}>
                              {update.excerpt}
                            </p>
                            {update.media && update.media.length > 0 && (
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {update.media.slice(0, 6).map((media, mediaIndex) => (
                                  <div key={mediaIndex} className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                      src={urlFor(media).width(200).height(200).url()}
                                      alt={`Update ${index + 1} media ${mediaIndex + 1}`}
                                      width={200}
                                      height={200}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <div className="medieval-notice">
              <h2 className="medieval-subtitle mb-4">Propose a Project</h2>
              <p className="medieval-text">
                Do you know of a location that would benefit from a public shrine? 
                Contact us to discuss possibilities and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 