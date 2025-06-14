// Initialisiere jsPsych
const jsPsych = initJsPsych({
  on_finish: () => {
    // Am Ende zeigen wir die gesammelten Daten (kannst du später ändern)
    jsPsych.data.displayData();
  }
});

// Erstelle einen leeren Ablauf (Timeline)
const timeline = [];

// 3. MOMENTARY PROMPTS (state, within)

// Einführungstext vor dem EMA Prompt
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>Bitte beantworten Sie nun ein paar kurze Fragen zu Ihrer Person und Ihrem aktuellen Empfinden. Die Beantwortung dauert nur wenige Minuten.</p>
  `,
  choices: ['Weiter']
});

// 3.1 Momentary Location – Single Choice Frage
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p><strong>Wo befinden Sie sich gerade?</strong></p>
    <p>Bitte wählen Sie den Ort aus, an dem Sie sich aktuell aufhalten:</p>
    <p>
      <input type="radio" name="location" value="Bibliothek" required> Bibliothek<br>
      <input type="radio" name="location" value="Mensa / Cafeteria"> Mensa / Cafeteria<br>
      <input type="radio" name="location" value="Lernraum / Arbeitsraum"> Lernraum / Arbeitsraum<br>
      <input type="radio" name="location" value="Hörsaal / Seminarraum"> Hörsaal / Seminarraum<br>
      <input type="radio" name="location" value="Innenhof / Außenbereich der Universität"> Innenhof / Außenbereich der Universität<br>
      <input type="radio" name="location" value="Zuhause"> Zuhause<br>
      <input type="radio" name="location" value="Anderer Ort"> Anderer Ort<br>
    </p>
  `
});

// 3.2 PA/NAs (Momentary Affect) – mehrere Items mit 5er Skala
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p><strong>Dieser Fragebogen enthält eine Reihe von Wörtern, die unterschiedliche Gefühle und Empfindungen beschreiben.</strong></p>
    <p>Lesen Sie jedes Wort und wählen Sie dann aus der Skala neben jedem Wort die Intensität aus. Es gibt fünf Antwortmöglichkeiten.</p>
    <p>Geben Sie bitte an, wie Sie sich im Moment fühlen.</p>

<h3>Frage 1</h3>
<p><em>„Aktiv“</em></p>
    <p>
      <input type="radio" name="aktiv" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="aktiv" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="aktiv" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="aktiv" value="4"> 4 = erheblich<br>
      <input type="radio" name="aktiv" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 2</h3>
<p><em>„Bekümmert“</em></p>
    <p>
      <input type="radio" name="bekümmert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="bekümmert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="bekümmert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="bekümmert" value="4"> 4 = erheblich<br>
      <input type="radio" name="bekümmert" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 3</h3>
<p><em>„Interessiert“</em></p>
    <p>
      <input type="radio" name="interessiert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="interessiert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="interessiert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="interessiert" value="4"> 4 = erheblich<br>
      <input type="radio" name="interessiert" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 4</h3>
<p><em>„Freudig erregt“</em></p>
    <p>
      <input type="radio" name="freudig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="freudig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="freudig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="freudig" value="4"> 4 = erheblich<br>
      <input type="radio" name="freudig" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 5</h3>
<p><em>„Verärgert“</em></p>
    <p>
      <input type="radio" name="verärgert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="verärgert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="verärgert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="verärgert" value="4"> 4 = erheblich<br>
      <input type="radio" name="verärgert" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 6</h3>
<p><em>„Stark“</em></p>
    <p>
      <input type="radio" name="stark" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="stark" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="stark" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="stark" value="4"> 4 = erheblich<br>
      <input type="radio" name="stark" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 7</h3>
<p><em>„Schuldig“</em></p>
    <p>
      <input type="radio" name="schuldig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="schuldig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="schuldig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="schuldig" value="4"> 4 = erheblich<br>
      <input type="radio" name="schuldig" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 8</h3>
<p><em>„Erschrocken“</em></p>
    <p>
      <input type="radio" name="erschrocken" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="erschrocken" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="erschrocken" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="erschrocken" value="4"> 4 = erheblich<br>
      <input type="radio" name="erschrocken" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 9</h3>
<p><em>„Feindselig“</em></p>
    <p>
      <input type="radio" name="feindselig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="feindselig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="feindselig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="feindselig" value="4"> 4 = erheblich<br>
      <input type="radio" name="feindselig" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 10</h3>
<p><em>„Angeregt“</em></p>
    <p>
      <input type="radio" name="angeregt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="angeregt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="angeregt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="angeregt" value="4"> 4 = erheblich<br>
      <input type="radio" name="angeregt" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 11</h3>
<p><em>„Stolz“</em></p>
    <p>
      <input type="radio" name="stolz" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="stolz" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="stolz" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="stolz" value="4"> 4 = erheblich<br>
      <input type="radio" name="stolz" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 12</h3>
<p><em>„Gereizt“</em></p>
    <p>
      <input type="radio" name="gereizt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="gereizt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="gereizt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="gereizt" value="4"> 4 = erheblich<br>
      <input type="radio" name="gereizt" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 13</h3>
<p><em>„Begeistert“</em></p>
    <p>
      <input type="radio" name="begeistert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="begeistert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="begeistert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="begeistert" value="4"> 4 = erheblich<br>
      <input type="radio" name="begeistert" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 14</h3>
<p><em>„Beschämt“</em></p>
    <p>
      <input type="radio" name="beschämt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="beschämt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="beschämt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="beschämt" value="4"> 4 = erheblich<br>
      <input type="radio" name="beschämt" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 15</h3>
<p><em>„Wach“</em></p>
    <p>
      <input type="radio" name="wach" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="wach" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="wach" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="wach" value="4"> 4 = erheblich<br>
      <input type="radio" name="wach" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 16</h3>
<p><em>„Entschlossen“</em></p>
    <p>
      <input type="radio" name="entschlossen" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="entschlossen" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="entschlossen" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="entschlossen" value="4"> 4 = erheblich<br>
      <input type="radio" name="entschlossen" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 17</h3>
<p><em>„Entschlossen“</em></p>
    <p>
      <input type="radio" name="entschlossen" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="entschlossen" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="entschlossen" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="entschlossen" value="4"> 4 = erheblich<br>
      <input type="radio" name="entschlossen" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 18</h3>
<p><em>„Aufmerksam“</em></p>
    <p>
      <input type="radio" name="aufmerksam" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="aufmerksam" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="aufmerksam" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="aufmerksam" value="4"> 4 = erheblich<br>
      <input type="radio" name="aufmerksam" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 19</h3>
<p><em>„Durcheinander“</em></p>
    <p>
      <input type="radio" name="durcheinander" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="durcheinander" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="durcheinander" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="durcheinander" value="4"> 4 = erheblich<br>
      <input type="radio" name="durcheinander" value="5"> 5 = äußerst<br>
    </p>

<h3>Frage 20</h3>
<p><em>„Ängstlich“</em></p>
    <p>
      <input type="radio" name="ängstlich" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="ängstlich" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="ängstlich" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="ängstlich" value="4"> 4 = erheblich<br>
      <input type="radio" name="ängstlich" value="5"> 5 = äußerst<br>
    </p>


// 4. MOMENTARY CONTROL PROMPTS (state, within)

// 4.1 ASC Salience
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p><strong>Bitte gib an, ob Sie der folgenden Aussage zustimmen:</strong></p>
    <p>„Im Moment sehe ich mich selbst als Student*in.“</p>
    <p>
      <input type="radio" name="asc_salience" value="Ja" required> Ja<br>
      <input type="radio" name="asc_salience" value="Nein"> Nein<br>
    </p>
  `
});

// 4.2 Social Presence
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p><strong>Sind Sie im Moment von anderen Personen umgeben?</strong></p>
    <p>
      <input type="radio" name="social_presence" value="Ja" required> Ja<br>
      <input type="radio" name="social_presence" value="Nein"> Nein<br>
    </p>
  `
});

// 4.3 Concentration
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p><strong>Konnten Sie sich beim Beantworten der Fragen gut konzentrieren?</strong></p>
    <p>
      <input type="radio" name="concentration" value="Ja" required> Ja<br>
      <input type="radio" name="concentration" value="Nein"> Nein<br>
    </p>
  `
});

// After EMA prompts - Danke Text
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>Vielen Dank für Ihre Angaben. Ihre Antworten wurden erfolgreich gespeichert.</p>
  `,
  choices: ['Fertig']
});
