// Initialize jsPsych
const jsPsych = initJsPsych({
  on_finish: () => {
    // Show collected data at the end for now (can be removed or replaced with saving)
    jsPsych.data.displayData();
  }
});

// Create an empty timeline for your trials
const timeline = [];

// Add an EMA questionnaire trial
timeline.push({
  type: jsPsychSurveyHtmlForm,  // A form-based questionnaire

  // Participant-facing text — EDIT THIS to add your questions in German
  html: `
    <p>Bitte beantworte die folgenden Fragen:</p>

    <p>1. Wie hoch ist dein aktueller Stresslevel?</p>
    <input type="radio" name="stress" value="low"> Niedrig<br>
    <input type="radio" name="stress" value="medium"> Mittel<br>
    <input type="radio" name="stress" value="high"> Hoch<br>

    <p>2. Wo befindest du dich gerade?</p>
    <textarea name="location" rows="2" cols="30"></textarea>

    <p>3. Was machst du gerade?</p>
    <textarea name="activity" rows="2" cols="30"></textarea>
  `
});

// Run the experiment
jsPsych.run(timeline);
