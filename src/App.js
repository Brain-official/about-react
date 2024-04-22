import './App.css';
import Header from './Components/header/Header';
import styledAtom from "./assets/react-core-concepts.png"
import CoreConcept from './Components/core-concept/CoreConcept';
import TabButton from './Components/tabButton/TabButton.jsx';
import { CORE_CONCEPTS } from "./data.js"
import { useState } from 'react';
import { EXAMPLES } from './data-with-examples.js';

function App() {

  const [tabContent, setTabContent] = useState()
  

  const handleSelect = (selectedButton) => {
    setTabContent(selectedButton)
  }
  

  return (
    <div>
      <Header styledAtom={styledAtom} />

      <main className='main'>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
              {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
              <CoreConcept {...CORE_CONCEPTS[1]}/>    
              <CoreConcept {...CORE_CONCEPTS[2]} /> 
              
              <CoreConcept 
                  image={CORE_CONCEPTS[3].image} 
                  title={CORE_CONCEPTS[3].title} 
                  description={CORE_CONCEPTS[3].description}
              />  */}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>

          <menu>
            <TabButton isSelected={tabContent === "components"} onSelect={()=> handleSelect("components")}>Component</TabButton>  
            <TabButton isSelected={tabContent === "jsx"} onSelect={()=> handleSelect("jsx")}>Jsx</TabButton>
            <TabButton isSelected={tabContent === "props"} onSelect={()=> handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={tabContent === "state"} onSelect={()=> handleSelect("state")}>State</TabButton>
          </menu>

          {!tabContent ? <p> Please select a topic </p>: 
            <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>

            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>                                                  
          </div>
          }

        </section>
      </main>
          
    </div>   
  );
}

export default App;




