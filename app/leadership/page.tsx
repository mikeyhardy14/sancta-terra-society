'use client';

import { useState, useEffect } from 'react';
import { getLeadership } from '../../sanity/lib/utils';
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
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const data = await getLeadership();
        setLeadership(data || []);
      } catch (error) {
        console.error('Error fetching leadership:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadership();
  }, []);

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

  const toggleExpanded = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  if (loading) {
    return (
      <div className="min-h-screen medieval-bg">
        <div className="medieval-border">
          <div className="medieval-content">
            <div className="text-center py-20">
              <div className="animate-spin w-8 h-8 border-2 border-t-transparent rounded-full mx-auto mb-4" style={{borderColor: 'var(--earthy-green)'}}></div>
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4" style={{backgroundColor: 'var(--medieval-brown)', borderColor: 'var(--earthy-green)'}}>
                <span className="text-lg sm:text-2xl" style={{color: 'var(--medieval-parchment)'}}>✠</span>
              </div>
            </div>
            <h1 className="medieval-title">Leadership & Governance</h1>
            <div className="w-32 h-1 mx-auto mt-4" style={{backgroundColor: 'var(--earthy-green)'}}></div>
          </div>

          <div className="medieval-text-layout">
            {/* Responsive grid that centers items and prevents left-stacking */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
              {leaders.map((leader) => (
                <div 
                  key={leader._id} 
                  className="w-full max-w-sm medieval-leader-card transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => toggleExpanded(leader._id)}
                >
                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 shadow-lg transition-transform duration-300 hover:scale-105" style={{borderColor: 'var(--earthy-green)'}}>
                      {leader.image ? (
                        <Image
                          src={urlFor(leader.image).width(200).height(200).url()}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{backgroundColor: 'var(--medieval-brown)'}}>
                          <span className="text-4xl" style={{color: 'var(--medieval-parchment)'}}>✠</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-xl mb-2 transition-colors duration-300 hover:opacity-80" style={{color: 'var(--earthy-green)'}}>{leader.name}</h3>
                    <h4 className="font-semibold text-sm uppercase tracking-wide" style={{color: 'var(--medieval-brown)'}}>{leader.title}</h4>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mb-4">
                    <span className="text-xs uppercase tracking-wider opacity-60 transition-opacity duration-300 hover:opacity-100" style={{color: 'var(--medieval-brown)'}}>
                      Click to {expandedMember === leader._id ? 'collapse' : 'read biography'}
                    </span>
                  </div>

                  {/* Expandable Biography */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedMember === leader._id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {leader.bio && (
                      <div className="pt-4 border-t-2 mt-4" style={{borderColor: 'var(--earthy-green)'}}>
                        <p className="medieval-text text-left leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="text-center mt-4">
                    <div className={`transition-transform duration-300 ${
                      expandedMember === leader._id ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mx-auto opacity-60"
                        style={{stroke: 'var(--earthy-green)'}}
                      >
                        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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