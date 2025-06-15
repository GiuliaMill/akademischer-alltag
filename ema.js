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
    <p>Wo befinden Sie sich gerade?</p>
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
    <p>Dieser Fragebogen enthält eine Reihe von Wörtern, die unterschiedliche Gefühle und Empfindungen beschreiben.</strong></p>
    <p>Lesen Sie jedes Wort und wählen Sie dann aus der Skala neben jedem Wort die Intensität aus. Es gibt fünf Antwortmöglichkeiten.</p>
    <p>Geben Sie bitte an, wie Sie sich im Moment fühlen.</p>


<p>Aktiv<br>
    <p>
      <input type="radio" name="PA_aktiv" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_aktiv" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_aktiv" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_aktiv" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_aktiv" value="5"> 5 = äußerst<br>
    </p>

<p>Bekümmert<br>
    <p>
      <input type="radio" name="NA_bekümmert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_bekümmert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_bekümmert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_bekümmert" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_bekümmert" value="5"> 5 = äußerst<br>
    </p>

<p>Interessiert<br>
    <p>
      <input type="radio" name="PA_interessiert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_interessiert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_interessiert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_interessiert" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_interessiert" value="5"> 5 = äußerst<br>
    </p>

<p>Freudig erregt<br>
    <p>
      <input type="radio" name="PA_freudig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_freudig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_freudig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_freudig" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_freudig" value="5"> 5 = äußerst<br>
    </p>

<p>Verärgert<br>
    <p>
      <input type="radio" name="NA_verärgert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_verärgert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_verärgert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_verärgert" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_verärgert" value="5"> 5 = äußerst<br>
    </p>

<p>Stark<br>
    <p>
      <input type="radio" name="PA_stark" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_stark" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_stark" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_stark" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_stark" value="5"> 5 = äußerst<br>
    </p>

<p>Schuldig<br>
    <p>
      <input type="radio" name="NA_schuldig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_schuldig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_schuldig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_schuldig" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_schuldig" value="5"> 5 = äußerst<br>
    </p>

<p>Erschrocken<br>
    <p>
      <input type="radio" name="NA_erschrocken" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_erschrocken" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_erschrocken" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_erschrocken" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_erschrocken" value="5"> 5 = äußerst<br>
    </p>

<p>Feindselig<br>
    <p>
      <input type="radio" name="NA_feindselig" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_feindselig" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_feindselig" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_feindselig" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_feindselig" value="5"> 5 = äußerst<br>
    </p>

<p>Angeregt<br>
    <p>
      <input type="radio" name="PA_angeregt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_angeregt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_angeregt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_angeregt" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_angeregt" value="5"> 5 = äußerst<br>
    </p>

<p>Stolz<br>
    <p>
      <input type="radio" name="PA_stolz" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_stolz" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_stolz" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_stolz" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_stolz" value="5"> 5 = äußerst<br>
    </p>

<p><br>Gereizt“<br>
    <p>
      <input type="radio" name="NA_gereizt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_gereizt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_gereizt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_gereizt" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_gereizt" value="5"> 5 = äußerst<br>
    </p>

<p>Begeistert<br>
    <p>
      <input type="radio" name="PA_begeistert" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_begeistert" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_begeistert" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_begeistert" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_begeistert" value="5"> 5 = äußerst<br>
    </p>

<p>Beschämt<br>
    <p>
      <input type="radio" name="NA_beschämt" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_beschämt" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_beschämt" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_beschämt" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_beschämt" value="5"> 5 = äußerst<br>
    </p>

<p>Wach<br>
    <p>
      <input type="radio" name="PA_wach" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_wach" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_wach" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_wach" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_wach" value="5"> 5 = äußerst<br>
    </p>

<p>Entschlossen<br>
    <p>
      <input type="radio" name="PA_entschlossen" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_entschlossen" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_entschlossen" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_entschlossen" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_entschlossen" value="5"> 5 = äußerst<br>
    </p>


<p>Aufmerksam<br>
    <p>
      <input type="radio" name="PA_aufmerksam" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="PA_aufmerksam" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="PA_aufmerksam" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="PA_aufmerksam" value="4"> 4 = erheblich<br>
      <input type="radio" name="PA_aufmerksam" value="5"> 5 = äußerst<br>
    </p>

<p>Durcheinander<br>
    <p>
      <input type="radio" name="NA_durcheinander" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_durcheinander" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_durcheinander" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_durcheinander" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_durcheinander" value="5"> 5 = äußerst<br>
    </p>

<p>Ängstlich<br>
    <p>
      <input type="radio" name="NA_ängstlich" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="NA_ängstlich" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="NA_ängstlich" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="NA_ängstlich" value="4"> 4 = erheblich<br>
      <input type="radio" name="NA_ängstlich" value="5"> 5 = äußerst<br>
    </p>


// 4. MOMENTARY CONTROL PROMPTS (state, within)

// 4.1 ASC Salience
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Bitte gib an, ob Sie der folgenden Aussage zustimmen:<br>
    <p>Im Moment sehe ich mich selbst als Student*in.<br>
    <p>
      <input type="radio" name="asc_salience" value="Ja" required> Ja<br>
      <input type="radio" name="asc_salience" value="Nein"> Nein<br>
    </p>
  `
});

// 4.2 Social Presence
    <p>Sind Sie im Moment von anderen Personen umgeben?<br>
    <p>
      <input type="radio" name="social_presence" value="Ja" required> Ja<br>
      <input type="radio" name="social_presence" value="Nein"> Nein<br>
    </p>
  `
});

// 4.3 Concentration
    <p>Konnten Sie sich beim Beantworten der Fragen gut konzentrieren?<<br>
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
