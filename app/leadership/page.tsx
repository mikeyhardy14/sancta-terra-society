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

export default async function Leadership() {
  const leadership: LeadershipMember[] = await getLeadership();

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
          </div>

          <div className="medieval-text-layout">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader) => (
                <div key={leader._id} className="medieval-leader-card">
                  {leader.image && (
                    <div className="mb-4">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 shadow-lg" style={{borderColor: 'var(--earthy-green)'}}>
                        <Image
                          src={urlFor(leader.image).width(200).height(200).url()}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2" style={{color: 'var(--earthy-green)'}}>{leader.name}</h3>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{color: 'var(--medieval-brown)'}}>{leader.title}</h4>
                  </div>
                  {leader.bio && (
                    <p className="medieval-text text-left">
                      {leader.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
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