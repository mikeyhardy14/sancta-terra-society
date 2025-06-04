export default function About() {
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
            <h1 className="medieval-title">About Our Society</h1>
          </div>

          <div className="medieval-text-layout">
            <div className="medieval-column">
              <h2 className="medieval-subtitle">Our Foundation</h2>
              <p className="medieval-text">
                The Sancta Terra Society was founded upon the sacred calling to sanctify the temporal order through the ancient practice of building public shrines. Our members, drawn from the Catholic laity, recognize the profound spiritual significance of creating sacred spaces in our secular world.
              </p>
              
              <p className="medieval-text">
                In an age where the sacred and profane have become increasingly separated, we stand as witnesses to the truth that all of creation belongs to God, and that public spaces can and should acknowledge His sovereignty.
              </p>
            </div>

            <div className="medieval-column">
              <h2 className="medieval-subtitle">Our Heritage</h2>
              <p className="medieval-text">
                Drawing inspiration from the rich tradition of Catholic shrine-building that spans centuries, we look to the great saints and mystics who understood that physical places can become windows to the divine.
              </p>
              
              <p className="medieval-text">
                From the roadside crucifixes of medieval Europe to the grand basilicas that crown our cities, the Church has always recognized the power of sacred architecture to lift hearts and minds to God.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 