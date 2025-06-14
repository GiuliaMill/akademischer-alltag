// Initialize jsPsych experiment
const jsPsych = initJsPsych({
  // When the experiment finishes, show all collected data (for testing)
  on_finish: () => {
    jsPsych.data.displayData();
  }
});

// Define an empty timeline (sequence of trials / questions)
const timeline = [];

// Add a survey trial with HTML form elements
timeline.push({
  type: jsPsychSurveyHtmlForm, // type of trial: survey with HTML form

  // This HTML is what participants will *see* and interact with.
  // **EDIT THIS PART to write your questions in German or any language**
  html: `
    <p>Wie fühlst du dich gerade?</p> <!-- Question text in German -->
    <input type="radio" name="mood" value="good"> Gut<br>
    <input type="radio" name="mood" value="okay"> Mittel<br>
    <input type="radio" name="mood" value="bad"> Schlecht<br>

    <p>Was machst du gerade?</p> <!-- Another question -->
    <textarea name="activity" rows="3" cols="30"></textarea>
  `
});

// Start the experiment (show questions in the order added to timeline)
jsPsych.run(timeline);
