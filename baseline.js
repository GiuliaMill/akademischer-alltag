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
    <h3>Hinweise zum Datenschutz</h3>
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
    <h2>Einverständniserklärung</h2>
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
     // 1. Demographische Daten 
      
    <p>Wie alt sind Sie?<br>
    <input type="number" name="age" min="16" max="120" required></p>  <!-- offenes Zahlenfeld -->

    <p><Mit welchem Geschlecht identifizieren Sie sich?><br>
    <input type="radio" name="gender" value="männlich" required> Männlich<br>
    <input type="radio" name="gender" value="weiblich"> Weiblich<br>
    <input type="radio" name="gender" value="divers"> Divers<br>
    <input type="radio" name="gender" value="keine angabe"> Keine Angabe</p>

    <p><Welches Studienfach studieren Sie?<br>
    <input type="text" name="major" required></p>  <!-- offenes Textfeld -->

    <p><In welchem Fachsemester studieren Sie?<br>
    <input type="number" name="semester" min="1" max="25" required></p>  <!-- offenes Zahlenfeld -->
  `
});

// 2. BASELINE QUESTIONNAIRES 
timeline.push({
  type: jsPsychSurveyHtmlForm,  // Ein Formular mit beliebigem HTML
  html: `
  
 // 2.1 BFI
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Im Folgenden finden Sie eine Reihe von Aussagen über verschiedene Eigenschaften, Einstellungen und Verhaltensweisen. Bitte lesen Sie jede Aussage sorgfältig durch und entscheiden Sie, inwieweit sie auf Sie persönlich zutrifft. Es gibt fünf Antwortmöglichkeiten.</p>
    <p>Wählen Sie bitte aus, inwieweit die folgenden Aussagen auf Sie zutreffen:<br>

    <p>Ich bin eher zurückhaltend, reserviert.<br>
  <p>
      <input type="radio" name="BFI_item1" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item1" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item1" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item1" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item1" value="5"> 5 = äußerst<br>

    <p>Ich schenke anderen leicht Vertrauen, glaube an das Gute im Menschen.<br>
   <p>
      <input type="radio" name="BFI_item2" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item2" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item2" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item2" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item2" value="5"> 5 = äußerst<br>

    <p>Ich bin bequem, neige zur Faulheit.<br>
   <p>
      <input type="radio" name="BFI_item3" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item3" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item3" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item3" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item3" value="5"> 5 = äußerst<br>

    <p>Ich bin entspannt, lasse mich durch Stress nicht aus der Ruhe bringen.<br>
   <p>
      <input type="radio" name="BFI_item4" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item4" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item4" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item4" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item4" value="5"> 5 = äußerst<br>

    <p>Ich habe nur wenig künstlerisches Interesse.<br>
  <p>
      <input type="radio" name="BFI_item5" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item5" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item5" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item5" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item5" value="5"> 5 = äußerst<br>

    <p>Ich gehe aus mir heraus, bin gesellig.<br>
   <p>
      <input type="radio" name="BFI_item6" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item6" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item6" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item6" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item6" value="5"> 5 = äußerst<br>

    <p>Ich neige dazu, andere zu kritisieren.<br>
  <p>
      <input type="radio" name="BFI_item7" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item7" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item7" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item7" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item7" value="5"> 5 = äußerst<br>

    <p>Ich erledige Aufgaben gründlich.<br>
  <p>
      <input type="radio" name="BFI_item8" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item8" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item8" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item8" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item8" value="5"> 5 = äußerst<br>

    <p>Ich werde leicht nervös und unsicher.<br>
 <p>
      <input type="radio" name="BFI_item9" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item9" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item9" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item9" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item9" value="5"> 5 = äußerst<br>

    <p>Ich habe eine aktive Vorstellungskraft, bin fantasievoll.<br>
<p>
      <input type="radio" name="BFI_item10" value="1" required> 1 = gar nicht<br>
      <input type="radio" name="BFI_item10" value="2"> 2 = ein bisschen<br>
      <input type="radio" name="BFI_item10" value="3"> 3 = einigermaßen<br>
      <input type="radio" name="BFI_item10" value="4"> 4 = erheblich<br>
      <input type="radio" name="BFI_item10" value="5"> 5 = äußerst<br>


 // 2.2 ASCQ 
timeline.push({
  type: jsPsychSurveyHtmlForm,
  html: `
    <p>Im Folgenden finden Sie eine Reihe von Aussagen über verschiedene Eigenschaften, Einstellungen und Verhaltensweisen. Bitte lesen Sie jede Aussage sorgfältig durch und entscheiden Sie, inwieweit sie auf Sie persönlich zutrifft. Es gibt sieben Antwortmöglichkeiten.</p>
    <p>Wählen Sie bitte aus, inwieweit die folgenden Aussagen auf Sie zutreffen:</p>

    <p>Ich kann den Vorlesungen leicht folgen.<br>
    <p>
      <input type="radio" name="ASC_item1" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item1" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item1" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item1" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item1" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item1" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item1" value="7"> 7 = vollständig<br>
    </p>

    <p>Meine Gedanken schweifen während der Vorlesungen oft ab.<br>
    <p>
      <input type="radio" name="ASC_item2" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASc_item2" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item2" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item2" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item2" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item2" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item2" value="7"> 7 = vollständig<br>
    </p>
    
    <p>Ich bin in der Lage, meinen Kommiliton*innen bei ihren Kursarbeiten zu helfen.<br>
    <p>
      <input type="radio" name="ASC_item3" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item3" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item3" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item3" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item3" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item3" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item3" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich erledige meine Kursarbeiten oft automatisch, ohne nachzudenken.<br>
    <p>
      <input type="radio" name="ASC_item4" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item4" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item4" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item4" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASc_item4" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item4" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item4" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich glaube, dass ich bessere Noten erreichen kann, wenn ich hart arbeite.<br>
    <p>
      <input type="radio" name="ASC_item5" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item5" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item5" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item5" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item5" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item5" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item5" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich höre den Dozent*innen in den Vorlesungen aufmerksam zu.<br>
    <p>
      <input type="radio" name="ASC_item6" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item6" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item6" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item6 value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item6" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item6" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item6" value="7"> 7 = vollständig<br>
    </p>

    <p>Die meisten meiner Kommiliton*innen sind schlauer als ich.<br>
    <p>
      <input type="radio" name="ASC_item7" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item7" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item7" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item7" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item7" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item7" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item7" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich lerne fleißig für meine Prüfungen.<br>
    <p>
      <input type="radio" name="ASC_item8" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item8" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item8" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item8" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item8" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item8" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item8" value="7"> 7 = vollständig<br>
    </p>

    <p>Meine Dozent*innen halten meine Studienleistungen für schlecht.<br>
    <p>
      <input type="radio" name="ASC_item9" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item9" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item9" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item9" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item9" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item9" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item9" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich interessiere mich normalerweise für meine Studieninhalte.<br>
    <p>
      <input type="radio" name="ASC_item10" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item10" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item10" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item10" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item10" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item10" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item10" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich vergesse oft, was ich gelernt habe.<br>
    <p>
      <input type="radio" name="ASC_item11" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item11" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item11" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item11" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_Item11" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item11" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item11" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich werde mein Bestes tun, um alle meine Kurse in diesem Semester zu bestehen.<br>
    <p>
      <input type="radio" name="ASC_item12" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item12" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item12" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item12" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item12" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item12" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item12" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich werde nervös, wenn Dozent*innen mir eine Frage stellen.<br>
    <p>
      <input type="radio" name="ASC_item13" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item13" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item13" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item13" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item13" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item13" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item13" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich habe oft das Gefühl, mein Studium abzubrechen zu wollen.<br>
    <p>
      <input type="radio" name="ASC_item14" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item14" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item14" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item14" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item14" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item14" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item14" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich bin in den meisten meiner Kurse gut.<br>
    <p>
      <input type="radio" name="ASC_item15" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item15" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item15" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item15" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item15" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item15" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item15" value="7"> 7 = vollständig<br>
    </p>

    <p>Während der Vorlesung warte ich immer, dass sie zu Ende ist, damit ich nach Hause gehen kann.<br>
    <p>
      <input type="radio" name="ASC_item16" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item16" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item16" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item16" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item16" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item16" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item16" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich schneide in Kursen und Prüfungen immer schlecht ab.<br>
    <p>
      <input type="radio" name="ASC_item17" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item17" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item17" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item17" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item17" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item17" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item17" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich gebe nicht leicht auf, wenn ich in meinen Kursarbeiten vor schwierigen Fragen stehe.<br>
    <p>
      <input type="radio" name="ASC_item18" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item18" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item18" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item18" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item18" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item18" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item18" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich bin in meinen Kursen besser als meine Freunde.<br>
    <p>
      <input type="radio" name="ASC_item19" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item19" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item19" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item19" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item19" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item19" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item19" value="7"> 7 = vollständig<br>
    </p>

    <p>Ich bin nicht bereit, mehr Aufwand in meine Studienarbeit zu stecken.<br>
    <p>
      <input type="radio" name="ASC_item20" value="1" required> 1 = überhaupt nicht<br>
      <input type="radio" name="ASC_item20" value="2"> 2 = sehr wenig<br>
      <input type="radio" name="ASC_item20" value="3"> 3 = wenig<br>
      <input type="radio" name="ASC_item20" value="4"> 4 = teils/teils<br>
      <input type="radio" name="ASC_item20" value="5"> 5 = ziemlich<br>
      <input type="radio" name="ASC_item20" value="6"> 6 = stark<br>
      <input type="radio" name="ASC_item20" value="7"> 7 = vollständig<br>
    </p>


// After Baseline  - Danke Text
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>Vielen Dank für Ihre Angaben. Ihre Antworten wurden erfolgreich gespeichert.</p>
  `,
  choices: ['Fertig']
});

  
// Starte die Umfrage
jsPsych.run(timeline);
