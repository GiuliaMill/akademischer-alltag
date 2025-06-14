// Initialisiere jsPsych
const jsPsych = initJsPsych({
  on_finish: () => {
    // Am Ende zeigen wir die gesammelten Daten (kannst du später ändern)
    jsPsych.data.displayData();
  }
});

// Erstelle einen leeren Ablauf (Timeline)
const timeline = [];

// 0. Participant Information – Briefing und Informed Consent
const timeline = [];

// Info-Seite 1 – Kurzbeschreibung 
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h2>Willkommen zur Studie!</h2>
    <p>Wir laden Sie herzlich ein, an einer Studie teilzunehmen, die untersucht, wie Studierende in ihrem Uni-Alltag Emotionen erleben und wie diese mit dem akademischen Selbstbild und Persönlichkeitsmerkmalen zusammenhängen. Die Teilnahme umfasst einen kurzen Einstiegsfragebogen sowie bis zu drei kurze Rückmeldungen pro Tag über einen Zeitraum von sieben Tagen. Bitte lesen Sie die folgenden Informationen sorgfältig durch.</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});

// Info-Seite 2 – Standortnutzung
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Hinweise zur Nutzung des Standortes</h3>
    <p>Im Rahmen der Studie nutzt Ihr Smartphone den Standort, um zu erkennen, ob Sie sich auf dem Universitätsgelände befinden. Dies geschieht mithilfe einer virtuellen Grenze (Geofence), die zentrale Bereiche der Universität wie Hörsäle, Bibliotheken oder die Mensa umfasst. Sobald Sie eines dieser Areale betreten, erhalten Sie eine kurze, einmalige Benachrichtigung. Ihr genauer GPS-Standort wird dabei nicht gespeichert – es wird lediglich erfasst, ob und wann Sie das Universitätsgelände betreten haben. Zusätzlich werden Sie gebeten, einmalig Ihren Heimatort festzulegen, damit auch dort eine Benachrichtigung ausgelöst werden kann. Diese Information bleibt ausschließlich auf Ihrem Gerät und ist weder für das Forschungsteam noch für andere einsehbar. Sie wird automatisch nur während der Studiendauer genutzt und danach nicht weiter gespeichert oder verwendet.</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});

// Info-Seite 3 – Datenschutz
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Hinweise zur Nutzung des Standortes</h3>
    <p>Alle Daten werden anonymisiert und sicher auf den Servern der Universität Konstanz gespeichert. Es werden keine persönlichen oder identifizierbaren Informationen erhoben. Die erhobenen Daten dienen ausschließlich wissenschaftlichen Zwecken und können in anonymisierter Form veröffentlicht werden.</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});

// Info-Seite 4 – Freiwillige Teilnahme
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Freiwillige Teilnahme</h3>
    <p>Die Teilnahme ist selbstverständlich freiwillig. Sie können jederzeit und ohne Angabe von Gründen aus der Studie aussteigen – ohne Nachteile oder Konsequenzen für Sie.</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});

// Info-Seite 4 – Freiwillige Teilnahme
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h3>Freiwillige Teilnahme</h3>
    <p>Wenn Sie Fragen zur Studie haben, wenden Sie sich gerne an:
Giulia Mill – giulia.mill@uni-konstanz.de
Yury Shevchenko – yury.shevchenko@uni-konstanz.de“
</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});

// Info-Seite 6  – Informed Consent mit Pflicht-Checkbox
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <h2>2. Einverständniserklärung (Informed Consent)</h2>
    <p>Indem Sie fortfahren, bestätigen Sie, dass:</p>
    <ul>
      <li>Sie sind mindestens 18 Jahre alt.</li>
      <li>Sie haben die oben genannten Informationen gelesen und verstanden.</li>
      <li>Sie erklären sich freiwillig bereit, an dieser Studie teilzunehmen.</li>
    </ul>
    <label>
      <input type="checkbox" name="consent" value="agree" required>
      Ich bin mit der Teilnahme an der Studie einverstanden.
    </label>
  `,
  button_label: "Weiter"
});

// Check, ob eingewilligt wurde, sonst abbrechen
timeline.push({
  timeline: [{
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>Vielen Dank für Ihr Interesse. Sie können leider nicht teilnehmen, wenn Sie nicht einwilligen.</p><p>Die Studie wird nun beendet.</p><p>Drücken Sie eine Taste zum Beenden.</p>"
  }],
  conditional_function: function(){
    const data = jsPsych.data.get().last(1).values()[0].response;
    // response ist ein Objekt mit den Formularantworten, z.B. {consent: "agree"}
    if(data.consent !== "agree"){
      return true;  // Falls nicht eingewilligt, zeige diese Seite (Abbruch)
    } else {
      return false; // Wenn eingewilligt, überspringe Abbruch
    }
  }
});

// Falls eingewilligt, geht es hier weiter mit der Timeline...

jsPsych.run(timeline);


// Info-Seite 7 – Überblick
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <h2>Vielen Dank, dass Sie an unserer Studie teilnehmen!</h2>
    <p>Mit Ihrer Unterstützung möchten wir besser verstehen, wie sich Studierende während ihres Alltags an der Universität fühlen.
Um uns auf universitätsbezogene Erfahrungen konzentrieren zu können, haben wir eine virtuelle Grenze (Geofence) um zentrale Campusbereiche wie Hörsäle, Bibliotheken und Cafeterien eingerichtet. So können wir erfassen, in welchem Kontext bestimmte Gefühle auftreten – ohne Ihren genauen Standort zu speichern.
Zu Beginn werden Ihnen einige allgemeine Fragen zu Ihrer Person gestellt. In den kommenden sieben Tagen erhalten Sie täglich bis zu drei kurze Benachrichtigungen auf Ihrem Smartphone. Darin werden Sie gebeten, ein paar Fragen zu Ihrem aktuellen emotionalen Zustand und Ihrer Umgebung zu beantworten. Die Beantwortung dauert jeweils weniger als zwei Minuten. Bitte beantworten Sie die Fragen möglichst ehrlich und spontan.
</p>
    <p>Drücken Sie eine Taste, um fortzufahren.</p>
  `
});


// 1. DEMOGRAPHICS - Fragebogen mit gemischten offenen und Multiple-Choice-Fragen
timeline.push({
  type: jsPsychSurveyHtmlForm,  // Ein Formular mit beliebigem HTML
  html: `
    <h2>1. Demographische Daten</h2>
    
    <p><strong>1.1 Alter</strong><br>
    Wie alt sind Sie?<br>
    <input type="number" name="age" min="16" max="120" required></p>  <!-- offenes Zahlenfeld -->

    <p><strong>1.2 Geschlecht</strong><br>
    Mit welchem Geschlecht identifizieren Sie sich?<br>
    <input type="radio" name="gender" value="männlich" required> Männlich<br>
    <input type="radio" name="gender" value="weiblich"> Weiblich<br>
    <input type="radio" name="gender" value="divers"> Divers<br>
    <input type="radio" name="gender" value="keine angabe"> Keine Angabe</p>

    <p><strong>1.3 Studienfach</strong><br>
    Welches Studienfach studieren Sie?<br>
    <input type="text" name="major" required></p>  <!-- offenes Textfeld -->

    <p><strong>1.4 Semester</strong><br>
    In welchem Fachsemester studieren Sie?<br>
    <input type="number" name="semester" min="1" max="25" required></p>  <!-- offenes Zahlenfeld -->
  `
});

// 2. BASELINE QUESTIONNAIRES 
timeline.push({
  type: jsPsychSurveyHtmlForm,  // Ein Formular mit beliebigem HTML
  html: `
    <h2>2. Baseline Questionnaires</h2>

<h2>2.1. BFI</h2>
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Im Folgenden finden Sie eine Reihe von Aussagen über verschiedene Eigenschaften, Einstellungen und Verhaltensweisen. Bitte lesen Sie jede Aussage sorgfältig durch und entscheiden Sie, inwieweit sie auf Sie persönlich zutrifft. Es gibt fünf Antwortmöglichkeiten.</p>
    <p>Wählen Sie bitte aus, inwieweit die folgenden Aussagen auf Sie zutreffen:</p>

    <h3>Frage 1</h3>
    <p><em>„Ich bin eher zurückhaltend, reserviert.“</em></p>
    <p>
      <input type="radio" name="item1" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item1" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item1" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item1" value="4"> 4 = erheblich<br>
      <input type="radio" name="item1" value="5"> 5 = äußerst<br>

    <h3>Frage 2</h3>
    <p><em>„Ich schenke anderen leicht Vertrauen, glaube an das Gute im Menschen.“</em></p>
   <p>
      <input type="radio" name="item2" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item2" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item2" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item2" value="4"> 4 = erheblich<br>
      <input type="radio" name="item2" value="5"> 5 = äußerst<br>

  <h3>Frage 3</h3>
    <p><em>„Ich bin bequem, neige zur Faulheit.“</em></p>
    <p>
      <input type="radio" name="item3" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item3" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item3" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item3" value="4"> 4 = erheblich<br>
      <input type="radio" name="item3" value="5"> 5 = äußerst<br>

    <h3>Frage 4</h3>
    <p><em>„Ich bin entspannt, lasse mich durch Stress nicht aus der Ruhe bringen.“</em></p>
    <p>
      <input type="radio" name="item4" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item4" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item4" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item4" value="4"> 4 = erheblich<br>
      <input type="radio" name="item4" value="5"> 5 = äußerst<br>

    <h3>Frage 5</h3>
    <p><em>„Ich habe nur wenig künstlerisches Interesse.“</em></p>
   <p>
      <input type="radio" name="item5" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item5" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item5" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item5" value="4"> 4 = erheblich<br>
      <input type="radio" name="item5" value="5"> 5 = äußerst<br>

    <h3>Frage 6</h3>
    <p><em>„Ich gehe aus mir heraus, bin gesellig. “</em></p>
   <p>
      <input type="radio" name="item6" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item6" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item6" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item6" value="4"> 4 = erheblich<br>
      <input type="radio" name="item6" value="5"> 5 = äußerst<br>

    <h3>Frage 7</h3>
    <p><em>„Ich neige dazu, andere zu kritisieren.“</em></p>
  <p>
      <input type="radio" name="item7" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item7" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item7" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item7" value="4"> 4 = erheblich<br>
      <input type="radio" name="item7" value="5"> 5 = äußerst<br>

    <h3>Frage 8</h3>
    <p><em>„Ich erledige Aufgaben gründlich.“</em></p>
  <p>
      <input type="radio" name="item8" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item8" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item8" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item8" value="4"> 4 = erheblich<br>
      <input type="radio" name="item8" value="5"> 5 = äußerst<br>

    <h3>Frage 9</h3>
    <p><em>„Ich werde leicht nervös und unsicher.“</em></p>
 <p>
      <input type="radio" name="item9" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item9" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item9" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item9" value="4"> 4 = erheblich<br>
      <input type="radio" name="item9" value="5"> 5 = äußerst<br>

    <h3>Frage 10</h3>
    <p><em>„Ich habe eine aktive Vorstellungskraft, bin fantasievoll.“</em></p>
<p>
      <input type="radio" name="item10" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="item10" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="item10" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="item10" value="4"> 4 = erheblich<br>
      <input type="radio" name="item10" value="5"> 5 = äußerst<br>


<h3>2.2. ASCQ</h2>
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Im Folgenden finden Sie eine Reihe von Aussagen über verschiedene Eigenschaften, Einstellungen und Verhaltensweisen. Bitte lesen Sie jede Aussage sorgfältig durch und entscheiden Sie, inwieweit sie auf Sie persönlich zutrifft. Es gibt sieben Antwortmöglichkeiten.</p>
    <p>Wählen Sie bitte aus, inwieweit die folgenden Aussagen auf Sie zutreffen:</p>

    <h3>Frage 1</h3>
    <p><em>„Ich kann den Vorlesungen leicht folgen.“</em></p>
    <p>
      <input type="radio" name="item1" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item1" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item1" value="3"> 3 = wenig<br>
      <input type="radio" name="item1" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item1" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item1" value="6"> 6 = stark<br>
      <input type="radio" name="item1" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 2</h3>
    <p><em>„Meine Gedanken schweifen während der Vorlesungen oft ab.“</em></p>
    <p>
      <input type="radio" name="item2" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item2" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item2" value="3"> 3 = wenig<br>
      <input type="radio" name="item2" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item2" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item2" value="6"> 6 = stark<br>
      <input type="radio" name="item2" value="7"> 7 = vollständig<br>
    </p>
    
  <h3>Frage 3</h3>
    <p><em>„Ich bin in der Lage, meinen Kommiliton*innen bei ihren Kursarbeiten zu helfen.“</em></p>
    <p>
      <input type="radio" name="item3" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item3" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item3" value="3"> 3 = wenig<br>
      <input type="radio" name="item3" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item3" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item3" value="6"> 6 = stark<br>
      <input type="radio" name="item3" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 4</h3>
    <p><em>„Ich erledige meine Kursarbeiten oft automatisch, ohne nachzudenken.“</em></p>
    <p>
      <input type="radio" name="item4" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item4" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item4" value="3"> 3 = wenig<br>
      <input type="radio" name="item4" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item4" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item4" value="6"> 6 = stark<br>
      <input type="radio" name="item4" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 5</h3>
    <p><em>„Ich glaube, dass ich bessere Noten erreichen kann, wenn ich hart arbeite.“</em></p>
    <p>
      <input type="radio" name="item5" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item5" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item5" value="3"> 3 = wenig<br>
      <input type="radio" name="item5" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item5" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item5" value="6"> 6 = stark<br>
      <input type="radio" name="item5" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 6</h3>
    <p><em>„Ich höre den Dozent*innen in den Vorlesungen aufmerksam zu. “</em></p>
    <p>
      <input type="radio" name="item6" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item6" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item6" value="3"> 3 = wenig<br>
      <input type="radio" name="item6 value="4"> 4 = teils/teils<br>
      <input type="radio" name="item6" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item6" value="6"> 6 = stark<br>
      <input type="radio" name="item6" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 7</h3>
    <p><em>„Die meisten meiner Kommiliton*innen sind schlauer als ich.“</em></p>
    <p>
      <input type="radio" name="item7" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item7" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item7" value="3"> 3 = wenig<br>
      <input type="radio" name="item7" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item7" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item7" value="6"> 6 = stark<br>
      <input type="radio" name="item7" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 8</h3>
    <p><em>„Ich lerne fleißig für meine Prüfungen.“</em></p>
    <p>
      <input type="radio" name="item8" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item8" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item8" value="3"> 3 = wenig<br>
      <input type="radio" name="item8" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item8" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item8" value="6"> 6 = stark<br>
      <input type="radio" name="item8" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 9</h3>
    <p><em>„Meine Dozent*innen halten meine Studienleistungen für schlecht.“</em></p>
    <p>
      <input type="radio" name="item9" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item9" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item9" value="3"> 3 = wenig<br>
      <input type="radio" name="item9" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item9" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item9" value="6"> 6 = stark<br>
      <input type="radio" name="item9" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 10</h3>
    <p><em>„Ich interessiere mich normalerweise für meine Studieninhalte.“</em></p>
    <p>
      <input type="radio" name="item10" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item10" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item10" value="3"> 3 = wenig<br>
      <input type="radio" name="item10" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item10" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item10" value="6"> 6 = stark<br>
      <input type="radio" name="item10" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 11</h3>
    <p><em>„Ich vergesse oft, was ich gelernt habe. em></p>
    <p>
      <input type="radio" name="item11" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item11" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item11" value="3"> 3 = wenig<br>
      <input type="radio" name="item11" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item11" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item11" value="6"> 6 = stark<br>
      <input type="radio" name="item11" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 12</h3>
    <p><em>„Ich werde mein Bestes tun, um alle meine Kurse in diesem Semester zu bestehen. “</em></p>
    <p>
      <input type="radio" name="item12" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item12" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item12" value="3"> 3 = wenig<br>
      <input type="radio" name="item12" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item12" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item12" value="6"> 6 = stark<br>
      <input type="radio" name="item12" value="7"> 7 = vollständig<br>
    </p>

   
    <h3>Frage 13</h3>
    <p><em>„Ich werde nervös, wenn Dozent*innen mir eine Frage stellen.“</em></p>
    <p>
      <input type="radio" name="item13" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item13" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item13" value="3"> 3 = wenig<br>
      <input type="radio" name="item13" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item13" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item13" value="6"> 6 = stark<br>
      <input type="radio" name="item13" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 14</h3>
    <p><em>„Ich habe oft das Gefühl, mein Studium abzubrechen zu wollen.“</em></p>
    <p>
      <input type="radio" name="item14" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item14" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item14" value="3"> 3 = wenig<br>
      <input type="radio" name="item14" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item14" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item14" value="6"> 6 = stark<br>
      <input type="radio" name="item14" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 15</h3>
    <p><em>„Ich bin in den meisten meiner Kurse gut.“</em></p>
    <p>
      <input type="radio" name="item15" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item15" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item15" value="3"> 3 = wenig<br>
      <input type="radio" name="item15" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item15" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item15" value="6"> 6 = stark<br>
      <input type="radio" name="item15" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 16</h3>
    <p><em>„Während der Vorlesung warte ich immer, dass sie zu Ende ist, damit ich nach Hause gehen kann.“</em></p>
    <p>
      <input type="radio" name="item16" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item16" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item16" value="3"> 3 = wenig<br>
      <input type="radio" name="item16" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item16" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item16" value="6"> 6 = stark<br>
      <input type="radio" name="item16" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 17</h3>
    <p><em>„Ich schneide in Kursen und Prüfungen immer schlecht ab.“</em></p>
    <p>
      <input type="radio" name="item17" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item17" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item17" value="3"> 3 = wenig<br>
      <input type="radio" name="item17" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item17" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item17" value="6"> 6 = stark<br>
      <input type="radio" name="item17" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 18</h3>
    <p><em>„Ich gebe nicht leicht auf, wenn ich in meinen Kursarbeiten vor schwierigen Fragen stehe.“</em></p>
    <p>
      <input type="radio" name="item18" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item18" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item18" value="3"> 3 = wenig<br>
      <input type="radio" name="item18" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item18" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item18" value="6"> 6 = stark<br>
      <input type="radio" name="item18" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 19</h3>
    <p><em>„Ich bin in meinen Kursen besser als meine Freunde.“</em></p>
    <p>
      <input type="radio" name="item19" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item19" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item19" value="3"> 3 = wenig<br>
      <input type="radio" name="item19" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item19" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item19" value="6"> 6 = stark<br>
      <input type="radio" name="item19" value="7"> 7 = vollständig<br>
    </p>

    <h3>Frage 20</h3>
    <p><em>„Ich bin nicht bereit, mehr Aufwand in meine Studienarbeit zu stecken.“</em></p>
    <p>
      <input type="radio" name="item20" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="item20" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="item20" value="3"> 3 = wenig<br>
      <input type="radio" name="item20" value="4"> 4 = teils/teils<br>
      <input type="radio" name="item20" value="5"> 5 = ziemlich<br>
      <input type="radio" name="item20" value="6"> 6 = stark<br>
      <input type="radio" name="item20" value="7"> 7 = vollständig<br>
    </p>

  
// Starte die Umfrage
jsPsych.run(timeline);
