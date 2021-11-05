import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [averageClarity, setAverageClarity] = useState(0);
  const [averageKnowledge, setAverageKnowledge] = useState(0);
  const [averageTopic, setAverageTopic] = useState(0);
  const [averageCorrection, setAverageCorrection] = useState(0);
  const [averageInteraction, setAverageInteraction] = useState(0);
  const [entries, setEntries] = useState(0);
  const [clarityIsChecked, setClarityIsChecked] = useState(false);
  const [knowledgeIsChecked, setKnowledgeIsChecked] = useState(false);
  const [topicIsChecked, setTopicIsChecked] = useState(false);
  const [correctionIsChecked, setCorrectionIsChecked] = useState(false);
  const [interactionIsChecked, setInteractionIsChecked] = useState(false);


  const validateForm = (event) => {
    event.preventDefault();
    const subject = document.getElementById("Subj").value;
    const staff = document.getElementById("staff").value;
    const feedback = document.getElementById("Feedback").value;
    const contentMaterial = document.getElementById("Material").value;
    const followups = document.getElementById("FollowUps").value;
    const clarity = document.getElementById("clarity").value;
    const knowledge = document.getElementById("SubjK").value;
    const topic = document.getElementById("Topic").value;
    const correction = document.getElementById("Interaction").value;
    const interaction = document.getElementById("Correction").value;
    if (subject === "" ||
      staff === "" ||
      feedback === "" ||
      contentMaterial === "" ||
      followups === "")
      alert("Enter Details Correctly");
    else {
      if (entries === 0) {
        setAverageClarity(((clarity / 5) * 100))
        setAverageKnowledge(((knowledge / 5) * 100))
        setAverageTopic(((topic / 5) * 100))
        setAverageCorrection(((correction / 5) * 100))
        setAverageInteraction(((interaction / 5) * 100))
      } else {
        setAverageClarity((parseFloat(((((averageClarity / 100 * 5) * entries)) + parseInt(clarity)) / (entries + 1)) / 5) * 100)
        setAverageKnowledge((parseFloat(((((averageKnowledge / 100 * 5) * entries)) + parseInt(knowledge)) / (entries + 1)) / 5) * 100)
        setAverageTopic((parseFloat(((((averageTopic / 100 * 5) * entries)) + parseInt(topic)) / (entries + 1)) / 5) * 100)
        setAverageCorrection((parseFloat(((((averageCorrection / 100 * 5) * entries)) + parseInt(correction)) / (entries + 1)) / 5) * 100)
        setAverageInteraction((parseFloat(((((averageInteraction / 100 * 5) * entries)) + parseInt(interaction)) / (entries + 1)) / 5) * 100)
      }
      setEntries(entries + 1)
      setClarityIsChecked(false)
      setKnowledgeIsChecked(false)
      setTopicIsChecked(false)
      setCorrectionIsChecked(false)
      setInteractionIsChecked(false)
      alert("Form Validated Successfully!");
    }
  }

  const validateClarity = (event) => {
    event.preventDefault();
    setClarityIsChecked(true);
  }

  const validateKnowledge = (event) => {
    event.preventDefault();
    setKnowledgeIsChecked(true);
  }

  const validateTopic = (event) => {
    event.preventDefault();
    setTopicIsChecked(true);
  }

  const validateCorrection = (event) => {
    event.preventDefault();
    setCorrectionIsChecked(true);
  }

  const validateInteraction = (event) => {
    event.preventDefault();
    setInteractionIsChecked(true);
  }

  return (
    <div className="App">
      <div class="App-header">
        <h1> FEEDBACK FORM </h1>
      </div>
      _________________________________________________________________________________________________________________________________________________________
      <form className="main" onSubmit={validateForm}>
        <br />
        <label for="Subj" class="form-label">Subject</label>
        <input class="form-control" list="datalistOptions" id="Subj" placeholder="Type to search..." />
        <datalist id="datalistOptions">
          <option value="Physics" />
          <option value="Mathematics" />
          <option value="Chemistry" />
          <option value="English" />
          <option value="Computer Science" />
        </datalist>
        <br />
        <label for="staff" class="form">Staff</label>
        <input class="form-control" list="data" id="staff" placeholder="Type to search..." />
        <datalist id="data">
          <option value="Sumithra" />
          <option value="Jerin Mahiba" />
          <option value="Subashini" />
          <option value="Nithya" />
          <option value="Amudha" />
        </datalist>
        <br />
        <label for="clarity" class="form-label">Clarity in Teaching</label>
        <input type="range" onChange={validateClarity} class="form-range" min="0" max="5" id="clarity" defaultValue="0" />
        <br />
        {
          averageClarity !== 0 && clarityIsChecked === true ?
            <div class="progress">
              <div class="progress-bar" style={{ width: averageClarity.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> : console.log(clarityIsChecked)
        }
        <br />
        <div class="rating">
          <label for="rating" class="form-label">Rating</label>
          <div class="container d-flex justify-content-center mt-200">
            <div class="row">
              <div class="col-md-12">
                <div class="stars">
                  <form action=""> <input class="star star-5" id="star-5" type="radio" name="star" /> <label class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio" name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3" id="star-3" type="radio" name="star" /> <label class="star star-3" for="star-3"></label> <input class="star star-2" id="star-2" type="radio" name="star" /> <label class="star star-2" for="star-2"></label> <input class="star star-1" id="star-1" type="radio" name="star" /> <label class="star star-1" for="star-1"></label> </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="Feedback" class="form-label">Feedback   </label>
          <textarea class="form-control" id="Feedback" rows="3"></textarea>
        </div>
        <br />
        <label for="SubjK" class="form-label">Subject Knowledge</label>
        <input type="range" onChange={validateKnowledge} class="form-range" min="0" max="5" id="SubjK" defaultValue="0" />
        <br />
        {
          averageKnowledge !== 0 && knowledgeIsChecked === true ?
            <div class="progress">
              <div class="progress-bar" style={{ width: averageKnowledge.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> : console.log(clarityIsChecked)
        }
        <br />
        <label for="Material" class="form-label">Content Material  </label>
        <select class="form-select" aria-label="Default select example" id="Material">
          <option selected></option>
          <option value="1">Simple</option>
          <option value="2">Adequate</option>
          <option value="3">Complex</option>
        </select>
        <br />

        <label for="FollowUps" class="form-label">Follow ups  </label>
        <select class="form-select" aria-label="Default select example" id="FollowUps">
          <option selected></option>
          <option value="1">Regular</option>
          <option value="2">Irregular</option>
        </select>

        <br />
        <label for="Topic" class="form-label">Topic Coverage</label>
        <input type="range" onChange={validateTopic} class="form-range" min="0" max="5" id="Topic" defaultValue="0" />

        <br />
        {
          averageTopic !== 0 && topicIsChecked === true ?
            <div class="progress">
              <div class="progress-bar" style={{ width: averageTopic.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> : console.log(clarityIsChecked)
        }
        <br />
        <label for="Correction" class="form-label">Correction Transparency</label>
        <input type="range" onChange={validateCorrection} class="form-range" min="0" max="5" id="Correction" defaultValue="0" />
        <br />
        {
          averageCorrection !== 0 && correctionIsChecked === true ?
            <div class="progress">
              <div class="progress-bar" style={{ width: averageCorrection.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> : console.log(clarityIsChecked)
        }
        <br />

        <label for="Interraction" class="form-label">Student Interaction</label>
        <input type="range" onChange={validateInteraction} class="form-range" min="0" max="5" id="Interaction" defaultValue="0" />
        <br />
        {
          averageInteraction !== 0 && interactionIsChecked === true ?
            <div class="progress">
              <div class="progress-bar" style={{ width: averageInteraction.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> : console.log(clarityIsChecked)
        }
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <br />
    </div>
  );
}

export default App;
