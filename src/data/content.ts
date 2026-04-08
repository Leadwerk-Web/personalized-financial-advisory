export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  promise: string;
  whoItsFor: string[];
  includedItems: string[];
  commonMistakes: string[];
  faq: FAQItem[];
  ctaLabel: string;
}

export interface ClientStory {
  nameOrInitials: string;
  segment: string;
  challenge: string;
  result: string;
  quote: string;
}

export interface Credential {
  title: string;
  issuer: string;
  shortExplanation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const services: Record<string, Service> = {
  absicherung: {
    slug: 'absicherung',
    title: 'Absicherung',
    shortDescription: 'Schützen Sie, was Sie sich aufgebaut haben. Ohne überflüssige Policen.',
    promise: 'Ein Sicherheitsnetz, das hält, wenn es darauf ankommt – maßgeschneidert auf Ihre Lebenssituation.',
    whoItsFor: [
      'Berufseinsteiger, die ihr erstes eigenes Einkommen schützen wollen.',
      'Familien, die Verantwortung füreinander tragen.',
      'Selbstständige, die ihr größtes Kapital absichern müssen: sich selbst.'
    ],
    includedItems: [
      'Analyse bestehender Verträge (Was kann weg, was fehlt?)',
      'Ermittlung des tatsächlichen Bedarfs ohne Panikmache',
      'Vergleich unabhängiger Anbieter am Markt',
      'Unterstützung bei Gesundheitsfragen und Antragsstellung'
    ],
    commonMistakes: [
      'Zu späte Absicherung der Arbeitskraft (Berufsunfähigkeit)',
      'Überversicherung bei unwichtigen Risiken (z.B. Handyversicherung)',
      'Lückenhafter Schutz bei der Privathaftpflicht'
    ],
    faq: [
      {
        question: 'Brauche ich wirklich eine Berufsunfähigkeitsversicherung?',
        answer: 'Für die meisten Menschen ist die eigene Arbeitskraft das größte Vermögen. Fällt dieses aus, reicht die staatliche Erwerbsminderungsrente oft nicht aus, um den Lebensstandard zu halten. Daher ist sie in der Regel unverzichtbar.'
      },
      {
        question: 'Wie finden wir den richtigen Tarif?',
        answer: 'Wir prüfen gemeinsam Ihre berufliche Situation, Ihre Hobbys und Ihre Gesundheitshistorie. Auf dieser Basis vergleiche ich den gesamten Markt und empfehle Ihnen die Tarife mit den besten Bedingungen für Ihre individuelle Situation.'
      }
    ],
    ctaLabel: 'Kostenfreies Erstgespräch zur Absicherung'
  },
  vermoegensaufbau: {
    slug: 'vermoegensaufbau',
    title: 'Vermögensaufbau',
    shortDescription: 'Strukturierter Vermögensaufbau, der zu Ihrem Leben passt.',
    promise: 'Klarheit statt Chaos. Wir entwickeln eine Strategie, mit der Ihr Geld für Sie arbeitet.',
    whoItsFor: [
      'Menschen, die ihr Geld nicht auf dem Girokonto entwerten lassen wollen.',
      'Berufstätige, die systematisch und entspannt Vermögen aufbauen möchten.',
      'Anfänger am Kapitalmarkt, die eine verständliche Einführung suchen.'
    ],
    includedItems: [
      'Bestandsaufnahme Ihrer aktuellen finanziellen Situation',
      'Definition realistischer finanzieller Ziele',
      'Entwicklung einer passgenauen, wissenschaftlich fundierten Anlagestrategie (z.B. ETFs)',
      'Laufende Betreuung und Anpassung bei Lebensveränderungen'
    ],
    commonMistakes: [
      'Geld aus Angst vor Verlusten unverzinst liegen lassen',
      'Investieren ohne klare Strategie oder Notgroschen',
      'Teure, intransparente Bankprodukte kaufen'
    ],
    faq: [
      {
        question: 'Wie viel Geld brauche ich, um anzufangen?',
        answer: 'Vermögensaufbau beginnt nicht erst bei großen Summen. Schon mit monatlichen Sparraten ab 50 Euro können Sie langfristig ein solides Fundament aufbauen.'
      },
      {
        question: 'Sind Aktien nicht zu riskant?',
        answer: 'Kurzfristig schwanken Aktienmärkte, das ist normal. Langfristig und breit gestreut (z.B. über weltweite ETFs) ist das Risiko eines Totalverlusts jedoch minimal, während die Renditechancen deutlich über denen von Tagesgeld liegen.'
      }
    ],
    ctaLabel: 'Strategiegespräch zum Vermögensaufbau'
  },
  altersvorsorge: {
    slug: 'altersvorsorge',
    title: 'Altersvorsorge',
    shortDescription: 'Entspannt in die Zukunft blicken. Mit einem Plan, der aufgeht.',
    promise: 'Wir schließen Ihre Rentenlücke, damit Sie Ihren Ruhestand ohne finanzielle Sorgen genießen können.',
    whoItsFor: [
      'Angestellte, die wissen wollen, was am Ende wirklich übrig bleibt.',
      'Gutverdiener, die steuerliche Vorteile optimal nutzen möchten.',
      'Jeden, der das Thema "Rente" endlich von der To-Do-Liste streichen will.'
    ],
    includedItems: [
      'Berechnung Ihrer voraussichtlichen gesetzlichen Rente',
      'Ermittlung Ihrer individuellen Rentenlücke unter Berücksichtigung der Inflation',
      'Prüfung staatlicher Förderungen (z.B. bAV, Rürup, Riester)',
      'Erstellung eines flexiblen Vorsorgekonzepts'
    ],
    commonMistakes: [
      'Das Thema aufschieben ("Dafür habe ich noch Zeit")',
      'Die Auswirkungen der Inflation auf die Kaufkraft unterschätzen',
      'Sich blind auf staatliche Förderungen verlassen, ohne die Kostenstruktur zu prüfen'
    ],
    faq: [
      {
        question: 'Wann ist der beste Zeitpunkt, um mit der Altersvorsorge zu beginnen?',
        answer: 'Der beste Zeitpunkt war gestern, der zweitbeste ist heute. Je früher Sie beginnen, desto stärker profitieren Sie vom Zinseszinseffekt und desto geringer ist der monatliche Aufwand.'
      },
      {
        question: 'Lohnt sich eine betriebliche Altersvorsorge (bAV)?',
        answer: 'Das hängt stark vom Zuschuss Ihres Arbeitgebers ab. Ab einem Zuschuss von 15-20% wird es interessant. Wir rechnen das gerne individuell für Sie durch.'
      }
    ],
    ctaLabel: 'Rentenlücke berechnen lassen'
  }
};

export const clientStories: ClientStory[] = [
  {
    nameOrInitials: 'Sarah M.',
    segment: 'Ärztin, 32',
    challenge: 'Wenig Zeit, unübersichtliche Finanzen und Sorge vor der falschen BU.',
    result: 'Klar strukturiertes Portfolio und eine BU, die exakt auf ihren Beruf zugeschnitten ist.',
    quote: '"Endlich jemand, der mir nicht einfach etwas verkaufen will, sondern mir hilft, die Dinge selbst zu verstehen. Das gibt mir ein extrem gutes Gefühl."'
  },
  {
    nameOrInitials: 'Jan & Lisa',
    segment: 'Junge Familie',
    challenge: 'Nach der Geburt des ersten Kindes fehlte der Überblick über notwendige Absicherungen.',
    result: 'Sinnvolle Risikoabsicherung für die Familie und ein Sparplan für das Kind.',
    quote: '"Die Beratung war so entspannt und menschlich. Keine Panikmache, sondern sachliche Aufklärung. Genau das, was wir gesucht haben."'
  },
  {
    nameOrInitials: 'Thomas K.',
    segment: 'Softwareentwickler, 28',
    challenge: 'Wollte mit dem Investieren beginnen, war aber überfordert von den vielen Informationen im Netz.',
    result: 'Ein einfaches, automatisiertes ETF-Portfolio, das ohne ständige Pflege wächst.',
    quote: '"Ich habe jetzt eine klare Strategie und muss mir keine Sorgen mehr um meine Geldanlage machen. Der Prozess war super transparent."'
  }
];

export const credentials: Credential[] = [
  {
    title: 'IHK-geprüfter Finanzanlagenvermittler',
    issuer: 'IHK München',
    shortExplanation: 'Offizielle Erlaubnis nach § 34f GewO zur unabhängigen Beratung.'
  },
  {
    title: 'Zertifizierter Versicherungsmakler',
    issuer: 'IHK München',
    shortExplanation: 'Ungebunden an Versicherungsgesellschaften nach § 34d GewO.'
  },
  {
    title: 'B.Sc. Betriebswirtschaftslehre',
    issuer: 'Universität',
    shortExplanation: 'Fundiertes wirtschaftliches Verständnis als Basis jeder Beratung.'
  }
];

export const generalFaq: FAQItem[] = [
  {
    question: 'Sind Sie wirklich unabhängig?',
    answer: 'Ja. Als ungebundener Makler bin ich rechtlich verpflichtet, in Ihrem besten Interesse zu handeln. Ich bin an keine Bank oder Versicherung gebunden und vergleiche den gesamten Markt für Sie.'
  },
  {
    question: 'Was kostet die Beratung?',
    answer: 'Das Erstgespräch ist immer kostenfrei und unverbindlich. Bei der Vermittlung von Finanz- oder Versicherungsprodukten erhalte ich in der Regel eine Courtage von der jeweiligen Gesellschaft. Alternativ biete ich auch eine reine Honorarberatung an. Wir sprechen im Vorfeld transparent über alle Kosten.'
  },
  {
    question: 'Wie läuft das erste Kennenlernen ab?',
    answer: 'Ganz entspannt per Video-Call oder bei einem Kaffee. Wir besprechen Ihre aktuelle Situation, Ihre Ziele und prüfen, ob die Chemie zwischen uns stimmt. Sie müssen nichts vorbereiten.'
  },
  {
    question: 'Muss ich mich sofort entscheiden?',
    answer: 'Nein, niemals. Ich lege großen Wert darauf, dass Sie alle Entscheidungen in Ruhe treffen. Sie bekommen alle Unterlagen mit nach Hause und können in Ihrem eigenen Tempo entscheiden.'
  }
];
