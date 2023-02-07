import React, {useState} from 'react';
import './App.css';


function App() {

const [picOpen, setPicOpen] = useState(false);
const [picWidth, setPicWidth] = useState("500px");
const [picHeight, setPicHeight] = useState("300px");
const [popped, setPopped] = useState("none");

function enbiggen(){
  if (!picOpen){
    setPicWidth("80%");
    setPicHeight("20%");
  }

  if (picOpen){
    setPicWidth("500px");
    setPicHeight("300px");
  }
  return setPicOpen(!picOpen)
}

let holder = <></>
let shoepic = <img src="shoesaver.jpg" alt="Shoe Saving combination of moisture absorbing dribox with high barrier zipper bag" id="shoe-pic" width="200px" height="135px" />;
const PopOut = (el) => {
if (popped=="none"){
 holder = el;
 setPopped("visible")
 }
 else if (popped=="visible"){
  holder = <></>
  setPopped("none")
 }
}
  // function Contacting(){
  //   <script type="text/javascript" src="https://form.jotform.com/jsform/230366115214041"></script> 

  // }

  return (
    <div className="App">
    <div id="Header-Cont">
      <div id="Header-Title"><img src=".\PTlogo.png" id="logo-badge" width="75px" height="75px" title="Preservation Technologies Logo" alt="header logo for preservatioin technologies information page" onClick={PopOut(shoepic)} />
<h1 id="Title-Text">Preservation Technologies</h1></div>
      {/* <div id="Header-Stuffs">Contact Us</div> */}
    </div>
      <div id="Main-Body">
        <div id="popout" visible={popped}>{holder}</div>
        <div id="section1" className="section-container">
          <div id="section1-title" className="section-title"><h2>Preservation Vs Time and Environment</h2></div>
          <div id="section1-cont">Keeping your goods fresh has always been a struggle. From everyday foods to the historical and cultural artifacts we use to look 
          back on our society, the conservation of goods in the face of environmental, biological, and physical factors has always been a balancing act to find an 
          effective and cost efficient solution. As technology has advanced, the tools and ability to preserve things has increased to match. Everyday modern storage 
          solutions have changed drastically from decades prior. Things like refrigerators paired with tupperware containers have prolonged the nutritional value of 
          leftovers by a lot. Even today where more and more people have brought home tools like Vacuum Sealing machines, the understanding of how to preserve has 
          changed and updated as technology has developed. The process by which we refine and improve our techniques is never ending. </div>
        </div>
        <div id="section2" className="section-container">
          <div id="section2-title" className="section-title"><h2>The Power of Oxygen</h2></div>
          <div id="section2-cont">
           <div id="section2-cont1">
              <img id="oxygen-free-study" src="oxygenfree.png" alt="EBook from Shin Maekawas preservation study caled Oxygen Free Museum Cases" title="Research in Conservation - Oxygen Free Museum Cases" width="150px" height="200px" />
              <p>&ensp;What now sounds like common sense was not always the case for our understanding of preservation. One key study to prove the effectiveness of an
                 oxygen free environment on keeping biological growth to a minimum was a collaboration between the Getty and various museums over the course of years. 
                 Starting in the 80s with a series of collaborative experiments centered around Egyptian Sarcophagi and other relics. Collected as part of a series of 
                 studies called <a title="Oxygen Free Museum Cases e-book download" href="https://books.google.com/books?id=RJ5QAgAAQBAJ&printsec=frontcover&hl=en#v=onepage&q&f=false">Oxygen Free Museum Cases</a> 
                 edited by Shin Maekawa, the overall goal of the study was to find effective and cost efficient means of preserving relics for both long term storage, and 
                 from the environmental factors introduced as some pieces traveled around the globe. </p>
            </div>
            <hr />
            <div id="section2-cont2">
            <p>&ensp;&ensp;Having historical pieces go on "tour" in different countries has been a key part in cultural and historical exchanges. However, aside from just 
              the physical stress shipping can bring, differing quality standards and environmental conditions in each country can reveal unknown issues with 
              these treasures. In the case of Mr. Maekawa and the Egyptian Sarcophagus collection, changes to the relative humidity of the museum would cause 
              drying and damage to some of the preserved bodies. On the other side of the spectrum, having too high a temperature and/or relative humidity would 
              encourage bacterial growth, or even restart some insect life cycles that had been dormant in the relics. So the solution had to be both all encompassing 
              to ensure the same level of preservation protection no matter the environment it was brought to, but also maintain an effective hold on any new 
              deterioration possible. </p>
            </div>
            <br />
            <img id="study-chart" src="RHchart.JPG" alt="chart showing levels of activity at various RH and oxygen levels" title="Relative Humidity and Oxygen level chart for preservation" />
            <div id="section2-cont3">
            <p>&ensp;&ensp;When the study began in 1985, one of the more prolific forms of preservation was using a pressurized case filled with Nitrous gas to replace any 
              stagnant air. While effective for long term exhibitions, this technique would often come with high maintenance costs, and require the handling of high 
              pressure gas canisters. Similar styles using other chemical agents like Argon were also in use, but could leave residue or cause other unforeseen 
              damage. For pieces as old and fragile as the Egyptian mummies, they could not take a chance. Even the standard case at that time was difficult to 
              source parts and manufacture for museums like those in Cairo. So the team at the Getty went about redesigning the case to be reliable, but easy to 
              assemble and manufacture for galleries around the world to model off of. After running some tests with the new design, they found one of the largest 
              contributing factors to deterioration and/or biological growth was oxygen. As seen in the table above, to ensure bacterial growth is kept to a minimum, the 
              ideal conditions require a Relative Humidity level of <strong>around 35%</strong> and an oxygen level <strong>below 0.1%</strong> within the case. Keeping the artifacts in an anaerobic
               environment was key in maintaining a stable and long lasting preservation environment. For large scale items, a more involved process involving some Nitrous gas may still be used, but 
              for medium to small cases, suitable barrier properties in conjunction with Oxygen Scavengers like the Stay Fresh packets is enough to bring the 
              levels down low enough for effective anoxia storage.</p> 
              </div>
          </div>
        </div>
        <div id="section3" className="section-container">
          <div id="section3-title" className="section-title"><a id="" href="https://www.impakcorporation.com/wood-story" ><h2>Oxygen Absorbers For Combating Pests</h2></a></div>
          <div id="section3-cont">
            <a href="https://www.impakcorporation.com/wood-story" alt="Bwteen the Lines Case Study for preserving infested wood art peice" ><img id="woodpic1" src="wood-story-figure2.jpg" alt="Between the Lines Wooden Sculpture needing treatment for beattle infestation" title="Between the Lines " width="200px" height="150px" /></a>
            <p>&ensp;&ensp; Even today we are still using some of the same technologies and knowledge developed by scientists and preservationists around 
          the world. Another smaller example was during an Art Exhibition at the Everson Museum of Art in New York. During the exhibition staff noticed 
          telltale signs of sawdust around the peice of art. Fearing an infestation of some kind that could spread to other pieces, the modern sculpture was pulled 
          to investigate for pests. Facing similar problems as those found in the Egyptian museum decades prior, standard methods of removing pests from pieces was 
          deemed a little too invasive to safely enact on the wooden sculpture. Chemical "fogging" solutions were likely to have some lingering result on the 
          peice and no real guarantee that the treatment would remove all pests. As the piece was constructed by wood held together with glue, freezing was also not an 
          option to address the insects as it would damage the adhesives in the process. When the museum staff ran out of solutions, the artist ended up reaching 
          out to a <a href="https://www.impakcorporation.com" alt="trusted packaging company" title="IMPAK Corporation acting as preservation experts">packaging manufacturer</a> for their 
          assistance. After describing the issue to the company representative, they came up with a treatment plan. 
          Using a very high oxygen/moisture barrier pouch to seal the art piece in, and an amount of oxygen absorbers to match the remaining space in the 
          bag (~6500cc worth of scavengers), they were able to craft a smaller version of what Mr. Maekawa had developed over the years - using items available to anyone. After 
          23 days of quarantine the oxygen levels in the bag were down below 0.1%, the art was found to be pest free and undamaged. One more week in a fresh 
          sealed bag and it was deemed ready for exhibition once again. </p>
          </div>
        </div>
        <div id="section4" className="section-container">
          <div id="section4-title" className="section-title"><h2>Taking Preservation Technology Home</h2></div>
          <div id="section4-cont"> <img src="shoesaver.jpg" alt="Shoe Saving combination of moisture absorbing dribox with high barrier zipper bag" id="shoe-pic" width="200px" height="135px" />
          &ensp;&ensp;These breakthroughs in how we preserve things do not just help museum staff. The knowledge and development of new modes of 
          preservation trickle down to help everyday people in their own homes. One small example of that is in cases like the proliferation of oxygen scavengers. 
          Anyone who has lived somewhere with regular rainfall has had to deal with funky smells and growths on clothing and fabric goods. In some cases when you 
          have a pair of damp shoes after running around in the rain, they can quickly develop mold or other 'fuzzy' growths. To prevent that, and even combat it 
          once you see it start, you used to have to make sure shoes were kept near a heat source, or use a cleaning agent that was rarely good for the leather. 
          Taking a cue from the experts at the getty, some people have found success using a <a href="https://www.impakcorporation.com/flexible_packaging/mylar-bag/16MFS205ZTE" alt="high barrier zipseal bag to store shoes durring moisture removal" title="16 x 205 MylarFoil Bag With Zipper">high barrier bag</a>, 
          a <a href="https://www.impakcorporation.com/desiccants/dribox/1494SB99" alt="dribox desiccant pack to remove moisture from container" title="45.5g blue indicating silica gel dribox pack">moisture absorbing desiccant</a>, and a 
          little patience to keep the shoes feeling fresh. By sealing the shoes in a small high barrier environment tools like moisture absorbers or oxygen 
          scavengers can effectively alter the preservation environment to best suit your target conditions. Having something actively remove moisture from the 
          area helps draw out and remaining moisture trapped in the shoes, while also removing the source of a lot of the biological growth in the leather. 
          As these new modes of technology continue to develop, more and more of the resulting tools will be available to everyday people. Things like desiccants 
          and scavengers have been in wide use for decades at this point, but more and more people are finding ways to use them to better their lives.
         
          </div>
        </div> 

        <div id="concluding">
          <div>Scientists continue developing new techniques and tools to improve our ability to preserve the things we care about. From full airtight museum grade 
          cases, to high barrier flexible film containers - consistant humidity and low oxygen environments steady below .1% show a significant drop in bacterial 
          growth and product degredation. For smaller cases or home use a similar environment can be achieved with Oxygen Scavengers like Stay Fresh&trade; in a 
          sealed environment. As we continue developing new preservation technologies it is important to remain aware of why all these things work together to 
          create a proper environment. Some companies have started trying to find ways to cut things like oxygen absorbers from their packaging in the name of 
          costs and have descovered the hard way just how important tools like that are in keeping goods fresh. Seeing examples like the Keto Dessert box, 
          highlighted below show how that decision could not only cost products in the distribution channels, but also trust from consumers who notice a change 
          in quality.  </div>
          <img id="review-pic" src="SmartBake.desiccant.review.jpg" alt="Negative Amazon review of Gluten free Keto dessert bars after they removed oxygen absorbers from the standard box" width={picWidth} height={picHeight} onClick={() => enbiggen()} />
        </div>
      </div>
      <div id="Footer-Cont">
        <p>Preservation Technologies Inc. |   ©2023 | All Rights Reserved</p>
      </div>
    </div>

    
  );
}

export default App;
