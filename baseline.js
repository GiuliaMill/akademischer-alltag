const jsPsych = initJsPsych({
  on_finish: () => {
    jsPsych.data.displayData();
  }
});

const timeline = [];

timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Wie fühlst du dich gerade?</p>
    <input type="radio" name="mood" value="good"> Gut<br>
    <input type="radio" name="mood" value="okay"> Mittel<br>
    <input type="radio" name="mood" value="bad"> Schlecht<br>
    <p>Was machst du gerade?</p>
    <textarea name="activity" rows="3" cols="30"></textarea>
  `
});

jsPsych.run(timeline);

