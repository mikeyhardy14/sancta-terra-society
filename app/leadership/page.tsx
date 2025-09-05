'use client';

import { useState, useEffect } from 'react';
import { getLeadership, getBoardOfAdvisors } from '../../sanity/lib/utils';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/client';

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

interface LeadershipMember {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  image?: any;
  order: number;
}

export default function Leadership() {
  const [leadership, setLeadership] = useState<LeadershipMember[]>([]);
  const [boardOfAdvisors, setBoardOfAdvisors] = useState<LeadershipMember[]>([]);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leadershipData, advisorsData] = await Promise.all([
          getLeadership(),
          getBoardOfAdvisors()
        ]);
        setLeadership(leadershipData || []);
        setBoardOfAdvisors(advisorsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedMember) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [expandedMember]);

  // Fallback content if no Sanity data
  const fallbackLeadership: LeadershipMember[] = [
    {
      _id: '1',
      name: 'Chaplain',
      title: 'Spiritual Director',
      bio: 'Our chaplain provides spiritual guidance and ensures all activities align with Catholic teaching and tradition.',
      order: 1
    },
    {
      _id: '2',
      name: 'Prior General',
      title: 'General Leadership',
      bio: 'The Prior General oversees the overall direction of the Society and coordinates our various initiatives across regions.',
      order: 2
    },
    {
      _id: '3',
      name: 'Regional Priors',
      title: 'Regional Governance',
      bio: 'Each region is led by a Prior who coordinates local shrine-building efforts and maintains relationships with diocesan authorities.',
      order: 3
    },
    {
      _id: '4',
      name: 'Master Builders',
      title: 'Construction & Design',
      bio: 'Experienced craftsmen and architects who guide the design and construction of our sacred spaces.',
      order: 4
    }
  ];

  const leaders = leadership && leadership.length > 0 ? leadership : fallbackLeadership;
  const advisors = boardOfAdvisors || [];

  const openModal = (memberId: string) => {
    setExpandedMember(memberId);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Delay clearing the expanded member to allow exit animation
    setTimeout(() => {
      setExpandedMember(null);
    }, 300);
  };

  // Reusable member card component
  const renderMemberCard = (member: LeadershipMember) => (
    <div
      key={member._id}
      className="w-full max-w-sm medieval-leader-card transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => openModal(member._id)}
    >
      {/* Profile Image */}
      <div className="mb-6">
        <div
          className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 shadow-lg transition-transform duration-300 hover:scale-105"
          style={{ borderColor: 'var(--earthy-green)' }}
        >
          {member.image ? (
            <Image
              src={urlFor(member.image).width(200).height(200).url()}
              alt={member.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--medieval-brown)' }}
            >
              <span className="text-4xl" style={{ color: 'var(--medieval-parchment)' }}>
                ✠
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-4">
        <h3
          className="font-bold text-xl mb-2 transition-colors duration-300 hover:opacity-80"
          style={{ color: 'var(--earthy-green)' }}
        >
          {member.name}
        </h3>
        <h4
          className="font-semibold text-sm uppercase tracking-wide"
          style={{ color: 'var(--medieval-brown)' }}
        >
          {member.title}
        </h4>
      </div>

      {/* Click indicator */}
      <div className="text-center mb-4">
      </div>
    </div>
  );

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
              <p className="medieval-text">Loading leadership...</p>
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
            <h1 className="medieval-title">Leadership & Governance</h1>
            <div className="w-32 h-1 mx-auto mt-4" style={{ backgroundColor: 'var(--earthy-green)' }}></div>
          </div>

          {/* Leadership Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-center text-3xl font-bold mb-8" style={{ color: 'var(--earthy-green)' }}>
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              {leaders.map(renderMemberCard)}
            </div>
          </div>

          {/* Board of Advisors Section - Only show if there are advisors */}
          {advisors.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--earthy-green)' }}>
                  Board of Advisors
                </h2>
                <div className="w-32 h-1 mx-auto" style={{ backgroundColor: 'var(--earthy-green)' }}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
                {advisors.map(renderMemberCard)}
              </div>
            </div>
          )}

          {/* Modal Popup */}
          {expandedMember && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Leader biography"
              className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4 z-40 transition-all duration-300 ease-in-out ${
                isModalVisible ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeModal}
            >
              <div
                className={`bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out ${
                  isModalVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                }`}
                style={{ backgroundColor: 'var(--medieval-parchment)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const selectedLeader = leaders.find((l) => l._id === expandedMember) || 
                                       advisors.find((a) => a._id === expandedMember);
                  if (!selectedLeader) return null;

                  return (
                    <div className="p-8">
                      {/* Close button */}
                      <button
                        onClick={closeModal}
                        className="float-right text-2xl font-bold hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--medieval-brown)' }}
                        aria-label="Close biography"
                      >
                        ×
                      </button>

                      {/* Modal content */}
                      <div className="text-center mb-8 clear-right">
                        {selectedLeader.image && (
                          <div
                            className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-lg"
                            style={{ borderColor: 'var(--earthy-green)' }}
                          >
                            <Image
                              src={urlFor(selectedLeader.image).width(300).height(300).url()}
                              alt={selectedLeader.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <h2 className="font-bold text-3xl mb-2" style={{ color: 'var(--earthy-green)' }}>
                          {selectedLeader.name}
                        </h2>
                        <h3
                          className="font-semibold text-lg uppercase tracking-wide mb-6"
                          style={{ color: 'var(--medieval-brown)' }}
                        >
                          {selectedLeader.title}
                        </h3>
                      </div>

                      {selectedLeader.bio && (
                        <div className="prose max-w-none">
                          <p className="medieval-text leading-relaxed text-lg" style={{ color: 'var(--medieval-brown)' }}>
                            {selectedLeader.bio}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <div className="medieval-notice">
              <p className="medieval-text italic">
                "For where two or three are gathered in my name, there am I among them." - Matthew 18:20
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
