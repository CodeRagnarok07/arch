import Hero from "/src/components/pages/Hero";



import MovilScroll from '/src/components/Layout/MovilScroll'


export default function Home() {
  return (
    <MovilScroll>

      <main id="home" >

        <Hero/>

        <section>

          <div>
            <svg width="336px" height="195px">
              <defs>
                <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >
                  <stop offset="0%" stop-color="#7A5FFF">
                    <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="1s" repeatCount="indefinite"></animate>
                  </stop>
                  {/* 
                  <stop offset="100%" stop-color="#01FF89">
                    <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s" repeatCount="indefinite"></animate>
                  </stop> */}
                </linearGradient>
              </defs>
              <g>
                <path fill="url('#logo-gradient')" d="M315.69646,6.17948262 C328.855897,-3.88648819 332.169516,-0.795739865 323.113707,13.0582738 L217.327474,174.895153 C208.264469,188.760175 193.218185,188.990964 183.71996,175.409636 L126.769111,93.9767151 L12.5417619,181.728698 C-0.593710633,191.81966 -3.91947426,188.74917 5.1230211,174.855879 L110.403975,13.0975513 C119.44219,-0.789163345 134.468377,-1.03753706 143.966601,12.5437917 L200.917445,93.9767151 L315.69646,6.17948262 Z"></path>
              </g>
            </svg>


          </div>

        </section>

      </main>
      <main id="about">
        <Hero />
      </main>
      <main id="blog">
      </main>
      <main id="contact"> </main>

    </MovilScroll>

  )
}