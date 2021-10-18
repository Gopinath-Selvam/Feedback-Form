import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [error, setError] = useState("");

  useEffect(() => {
    setError("")
  }, [])

  const validateForm = (event) => {
    event.preventDefault();
    const subject = document.getElementById("Subj").value;
    const staff = document.getElementById("staff").value;
    const feedback = document.getElementById("Feedback").value;
    const contentMaterial = document.getElementById("Material").value;
    const followups = document.getElementById("FollowUps").value;
    if(subject == "" ||
    staff == "" ||
    feedback == "" ||
    contentMaterial == "" ||
    followups == "")
      setError("Enter Details Correctly");
    else {
      setError("");
      alert("Form Validated Successfully!");
    }
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
        <input type="range" class="form-range" min="0" max="5" id="clarity" />
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
        <input type="range" class="form-range" min="0" max="5" id="SubjK" />
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
        <input type="range" class="form-range" min="0" max="5" id="Topic" />

        <br />
        <label for="Correction" class="form-label">Correction Transparency</label>
        <input type="range" class="form-range" min="0" max="5" id="Correction" />
        <br />

        <label for="Interraction" class="form-label">Student Interaction</label>
        <input type="range" class="form-range" min="0" max="5" id="Interaction" />
        <br />
        <div className="errorMessage">{error}</div>
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <br />
    </div>
  );
}

export default App;
