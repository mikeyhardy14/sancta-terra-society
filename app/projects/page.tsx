export default function Projects() {
  return (
    <div className="min-h-screen medieval-bg">
      <div className="medieval-border">
        <div className="medieval-content">
          <div className="text-center mb-12">
            <div className="medieval-crest mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto border-3 sm:border-4 border-amber-600">
                <span className="text-amber-100 text-lg sm:text-2xl">✠</span>
              </div>
            </div>
            <h1 className="medieval-title">Sacred Projects</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">Current Undertakings</h2>
              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">The Urban Crucifixes Initiative</h3>
                <p className="medieval-text">
                  Installing beautiful crucifixes in public squares and parks across major cities, 
                  bringing the presence of Christ into the heart of urban life.
                </p>
                <div className="medieval-status completed">Status: Active in 12 cities</div>
              </div>

              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Marian Wayside Shrines</h3>
                <p className="medieval-text">
                  Creating small but beautiful shrines to Our Lady along pilgrimage routes 
                  and in places of natural beauty.
                </p>
                <div className="medieval-status in-progress">Status: 8 shrines completed, 15 planned</div>
              </div>

              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Saints of the Nations</h3>
                <p className="medieval-text">
                  Establishing shrines dedicated to patron saints of various nations 
                  in immigrant communities and cultural centers.
                </p>
                <div className="medieval-status planning">Status: Planning phase</div>
              </div>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">Completed Works</h2>
              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">St. Michael's Garden Shrine</h3>
                <p className="medieval-text">
                  A magnificent shrine to St. Michael the Archangel in the heart of a public garden, 
                  featuring traditional stonework and sacred imagery.
                </p>
                <div className="medieval-status completed">Completed: 2023</div>
              </div>

              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Sacred Heart Memorial</h3>
                <p className="medieval-text">
                  A public monument to the Sacred Heart of Jesus, erected in memory of fallen soldiers, 
                  combining patriotic and religious devotion.
                </p>
                <div className="medieval-status completed">Completed: 2022</div>
              </div>

              <h2 className="medieval-subtitle mt-8">Future Visions</h2>
              <div className="medieval-project-card">
                <h3 className="text-amber-800 font-bold text-lg mb-2">Cathedral Square Project</h3>
                <p className="medieval-text">
                  A grand vision for transforming public spaces near cathedrals into 
                  places of prayer and contemplation.
                </p>
                <div className="medieval-status planning">Status: Seeking diocesan approval</div>
              </div>
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