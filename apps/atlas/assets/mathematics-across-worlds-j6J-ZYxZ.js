var e=`---
id: course-mathematics-across-worlds
title: "Mathematics Across Worlds: Ideas, Practices, and Exchanges"
level: secondary
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Mathematics Across Worlds: Ideas, Practices, and Exchanges

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-mathematics-across-worlds/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Mathematics has no single birthplace and no straight road. Counting, measuring, proving, tabulating, predicting, drawing, and optimizing developed in many communities. Ideas travelled through trade, conquest, migration, translation, schooling, correspondence, print, instruments, and later electronic networks. Some practices were written on durable material; others were oral, embodied, perishable, restricted, or later destroyed. The surviving archive is therefore not a fair census of human thought.

This course is a first global map, not a claim to compress every tradition into one page. Each stop includes mathematics you can perform. Names appear in institutional and collaborative context rather than as isolated “geniuses.” Dates and priority claims remain qualified where evidence is layered or disputed.

## Entry diagnostic and source habits

Classify each statement as **calculation**, **repository fact**, **historical
inference**, or **unsupported claim**:

1. \\(13\\cdot12=156\\).
2. A museum catalogue dates a particular manuscript to approximately 1550 BCE.
3. Similar algorithms in two surviving texts prove that one author copied the
   other.
4. A numeral with a vacant place can support place-value computation.
5. A named scholar single-handedly invented a field.

The first is a calculation that can be checked directly. The second is a
repository claim that should retain its catalogue identifier, dating method,
and uncertainty. The third needs evidence of a transmission route. The fourth
is a mathematical and historical inference whose scope depends on the source.
The fifth is generally too broad without evidence about predecessors,
collaborators, institutions, and what “invented” means.

If these categories blur together, keep a four-column source ledger throughout
the course: exact wording, source and date, your mathematical reconstruction,
and the boundary of the resulting historical claim. Complete Sections 1–5
before comparing traditions, then Sections 6–9 before attempting either project.

## 1. How to study a mathematical past

Use four lenses together:

- **object:** numerals, diagram, table, instrument, building, game, textile, manuscript;
- **operation:** what a trained person did with it;
- **argument:** why the operation was trusted;
- **setting:** administration, trade, ritual, astronomy, craft, teaching, leisure, or research.

Avoid two opposite mistakes. One is **presentism**: praising a source only when it resembles today’s notation. The other is romantic overreach: assigning a modern theorem to any artifact with a suggestive shape. Reconstruct, calculate, compare, and label inference.

## 2. Nile Valley and Mesopotamian procedures

The Rhind Mathematical Papyrus is a major surviving Egyptian scribal text. The [British Museum record](https://www.britishmuseum.org/collection/object/Y_EA10058) describes problems involving fractions, multiplication, division, areas, and volumes and dates the physical text approximately to 1550 BCE.

### Doubling multiplication

Compute $13\\times 12$ by decomposing 13 into powers of two:

| multiplier | doubled value of 12 |
| ---: | ---: |
| 1 | 12 |
| 2 | 24 |
| 4 | 48 |
| 8 | 96 |

Since $13=8+4+1$, add $96+48+12=156$.

The invariant is distributivity:

$12(8+4+1)=12\\cdot 8+12\\cdot 4+12\\cdot 1$.

This is not “multiplication without understanding.” It is a binary decomposition algorithm. A modern computer’s shift-and-add multiplication shares structural features, though hardware history should not be projected backward.

Mesopotamian scribal mathematics used sexagesimal place-value calculation and extensive tables; a [British Museum reciprocal-table record](https://www.britishmuseum.org/collection/object/W_K-2069?selectedImageId=1197487001) documents one later surviving witness and lists several kinds of computational tables known from Babylonian evidence. Practices differed by region and period. Base sixty makes many reciprocal fractions finite. For example,

$1/8 = 7.5/60 = 0;7,30$ in sexagesimal,

because $7/60+30/3600 = 420/3600+30/3600=450/3600=1/8$.

Tables and place value supported equation procedures, surveying, and astronomy. A tablet’s surviving marks do not reveal every spoken explanation around it.

## 3. Mathematical canons in early imperial China

The *Nine Chapters on Mathematical Procedures* accumulated problems and procedures with later commentary. It addresses areas, proportions, taxation, engineering, and systems of linear relations. Scholarship on its [instructional procedures and commentary layers](https://www.cambridge.org/core/journals/bjhs-themes/article/reading-instructions-of-the-past-classifying-them-and-reclassifying-them-commentaries-on-the-canon-the-nine-chapters-on-mathematical-procedures-from-the-third-to-the-thirteenth-centuries/F402B3DE252D1799135618C259E5C706) cautions against treating the text as one author’s timeless object.

### Eliminate with counting-rod columns

Solve

$2x+y=7$,

$x-y=2$.

Add the second equation to the first:

$3x=9$, so $x=3$, then $y=1$.

In a tabular arrangement, equivalent row or column operations remove an unknown while preserving the solution set. The correctness principle is simple: adding equal quantities to equal quantities preserves equality. Calling every such procedure “Gaussian elimination” hides both operation and chronology; compare methods without erasing their own textual settings.

Chinese zhusuan, calculation with an abacus, remains a living transmitted practice. UNESCO’s [intangible-heritage record](https://www.unesco.org/archives/multimedia/document-3523) describes oral teaching and operations including roots, not merely museum display.

## 4. South Asian number, astronomy, and series

South Asian traditions developed place-value numeration, arithmetic, algebraic rules, geometry, astronomy, and later sophisticated infinite-series work. Ideas were written in Sanskrit and regional languages, often in verse with commentary and worked examples.

The Bakhshali manuscript contains written dots in numerical work. Whether all should be described only as placeholders is disputed. A [2017 Bodleian announcement](https://glam.web.ox.ac.uk/node/218481), a [peer-reviewed response by historians](https://doi.org/10.18732/H2XT07), and Oxford's later [2024 radiocarbon report on five folios](https://ora.ox.ac.uk/objects/uuid%3A5a6d1dd7-f20c-4209-adb6-33849f5b08f4) show why bark date, scribal activity, composition date, and mathematical role must be separated.

### Place-value algorithm

The numeral 3,042 represents

$3\\cdot 10^{3}+0\\cdot 10^{2}+4\\cdot 10+2$.

When multiplying by 10, each coefficient shifts one power:

$3042\\cdot 10=30420$.

The zero makes an empty coefficient explicit. Place value turns multiplication by the base into a structural shift rather than repeated addition.

Later Kerala-school work included series related to trigonometric functions. A Cambridge source study of [power series in fifteenth-century Kerala](https://www.cambridge.org/core/books/abs/sources-in-the-development-of-mathematics/power-series-in-fifteenthcentury-kerala/4B3570D4505BBADE0567CB23264C8C0A) also notes that much attribution depends on later surviving works. A modern statement is

$\\pi /4 = 1-1/3+1/5-1/7+⋯$.

The alternating-series bound says truncating after a term of magnitude $1/(2n+1)$ leaves error no larger than the next term. Historical derivations, terminology, and standards of justification require their own study; recognizing a modern formula is the beginning, not end, of history.

## 5. Mathematics in Islamic societies

Across Abbasid and later Islamic societies, scholars translated and criticized earlier works, developed algebra, trigonometry, geometry, astronomy, optics, inheritance calculation, and instruments. Arabic was a major scholarly language used by people of varied regions and faiths.

The Qatar Digital Library’s [Arabic Scientific Tradition](https://www.qdl.qa/en/arabic-scientific-tradition) situates algebraic work in administrative, legal, and astronomical practice. The [Metropolitan Museum’s astrolabe record](https://www.metmuseum.org/art/collection/search/451699) preserves an instrument whose geometry linked observation, time, and direction.

### Complete the square

Solve $x^{2}+8x=20$:

$x^{2}+8x+16=36$,

$(x+4)^{2}=36$.

Modern signed algebra gives $x=2$ or $x=-10$. A positive-magnitude problem may retain only $x=2$. The square completion can be seen geometrically: add a missing $4\\times 4$ corner to an $x\\times x$ square plus two $4\\times x$ rectangles.

Translation movements were not one-way delivery pipes from “East” to “West.” Scholars selected, revised, commented, synthesized, and created. Arabic, Persian, Sanskrit, Hebrew, Latin, Chinese, and other scholarly languages participated in overlapping exchanges whose documented routes differ by place and period. A matching formula is not by itself evidence of transmission.

## 6. African and diasporic mathematical practices

Africa is a continent, not a single tradition, and Egyptian evidence cannot stand for all of it. Quantitative practices appear in trade, architecture, divination, games, navigation, metal weights, textiles, timekeeping, and drawing traditions. Colonial collecting and the privileging of written archives distorted what entered histories.

Sona are geometric sand drawings practised by Lunda Cokwe and neighbouring peoples in eastern Angola. UNESCO’s community-linked [intangible heritage record](https://ich.unesco.org/en/RL/sona-drawings-and-geometric-figures-on-sand-01994) describes placing reference points and tracing lines around them as a way of transmitting stories, knowledge, and memory.

### Trace a one-line design

Place four points at the corners of a rectangle. Try to draw one closed curve that loops around each point without crossing itself. Then use a $2\\times 3$ point array. Record:

- number of point-neighbour gaps crossed;
- number of turns;
- whether the curve closes;
- symmetry transformations preserving it.

This turns a making practice into graph and topology questions, but the mathematical analysis does not exhaust the drawing’s cultural meaning. Community practice is not raw material to strip of context.

Akan gold-weight systems supported measurement in regional trade. Museum records such as the Met’s [geometric gold weight](https://www.metmuseum.org/art/collection/search/317674) document objects while also acknowledging uncertainty about some pattern meanings. Honest interpretation can say “unknown.”

Diasporic histories include forced movement, restricted education, mutual aid, navigation, craft, surveying, statistics, engineering, and later academic communities. Biography must show the institutions that opened or blocked mathematical participation.

## 7. Indigenous mathematics in the Americas and Pacific

The Maya developed positional and calendar numeration using dots, bars, and a zero sign. The Smithsonian National Museum of the American Indian’s [Living Maya Time project](https://maya.nmai.si.edu/maya-sun/maya-math-game) places vigesimal arithmetic within living Maya perspectives rather than treating Maya people only as an archaeological past.

### Base-twenty conversion

Convert decimal 2025:

$2025 = 5\\cdot 400 + 1\\cdot 20 + 5$.

Its ordinary base-twenty digit sequence is $(5,1,5)_{20}$. Check: $5\\cdot 20^{2}+1\\cdot 20+5=2000+20+5$.

Across the Americas and Pacific, mathematical knowledge is embedded in calendars, kinship systems, land relations, weaving, navigation, architecture, games, and measurement. Categories such as “pure” and “applied” may not match community organization. Responsible study uses community scholarship and permissions, especially for restricted knowledge.

## 8. Early modern networks: print, correspondence, probability, calculus

Printing, academies, postal correspondence, colonial expansion, observatories, commerce, and state administration reshaped who could circulate mathematics and whose work was credited.

Probability theory developed around games, annuities, mortality records, insurance, and expectation. These threads did not all begin together: for example, MacTutor's source-linked account of [Abraham de Moivre](https://mathshistory.st-andrews.ac.uk/Biographies/De_Moivre/) documents work on games as well as later mortality statistics and annuities. For a fair die, expected value is

$E[X]=(1+2+3+4+5+6)/6=3.5$.

This does not predict a possible single roll; it is a weighted long-run average and decision quantity.

Calculus emerged through multiple problem traditions: tangents, areas, motion, series, and inverse relationships between differentiation and integration. Newton and Leibniz developed influential calculi with different notation amid wider networks of predecessors, correspondents, critics, and later textbook writers. The Oxford [Newton Project's chronology](https://newtonproject.ox.ac.uk/his-life-and-work-at-a-glance) records both an acknowledgement of independent results and the later, institutionally entangled priority dispute. “Who invented it?” is therefore too narrow on its own. A better question asks which problems, representations, proof standards, publication routes, and institutions made bodies of methods durable.

The mathematical link is

$d(x^{3})/dx=3x^{2}$, while $\\int _{0}ᵃ 3x^{2} dx=a^{3}$.

The fundamental theorem connects local rates and accumulated change. Its modern hypotheses were clarified over later analysis, not delivered fully formed in one publication.

## 9. Modern institutions, exclusion, and communication

Universities, academies, journals, examinations, professional societies, military and colonial administrations, industry, schools, and computing laboratories shape mathematical agendas. They provide time, archives, collaborators, and legitimacy; they also exclude by class, race, caste, gender, language, disability, geography, and political power.

A biography should therefore map a network:

- teachers and students;
- collaborators and translators;
- employers and patrons;
- instruments and archives;
- barriers to appointment or publication;
- people whose labour was credited collectively or not at all.

Electronic computing changed feasible experiments and proofs. Consider Euclid’s greatest-common-divisor algorithm:

\`\`\`text
while b ≠ 0:
    (a,b) ← (b, a mod b)
return |a|
\`\`\`

Its invariant is $\\gcd(a,b)=\\gcd(b,a\\bmod b)$. Ancient procedure, later symbolic proof, and machine implementation belong to different historical moments even when the mathematical invariant persists.

## 10. Comparison without a ladder

Compare traditions on explicit axes instead of ranking civilizations:

| Question | Possible evidence |
| --- | --- |
| How are quantities represented? | numerals, rods, knots, counters, words, diagrams |
| Which operations are routinized? | tables, algorithms, instruments, worked examples |
| What counts as justification? | diagram, commentary, verification, deduction, authority |
| How is knowledge transmitted? | apprenticeship, school, oral performance, manuscript, print |
| Who uses it and why? | trade, ritual, astronomy, land, taxation, play, theory |

Different answers are not points on one scale from inferior to superior. They reveal mathematical practice under distinct constraints.

## Exercises and projects

### 1. Run the doubling algorithm

Compute $27\\times 19$ using powers-of-two decomposition.

**Solution.** Double 19 to obtain $19,38,76,152,304$ for multipliers $1,2,4,8,16$. Since $27=16+8+2+1$, sum $304+152+38+19=513$.

### 2. Sexagesimal check

Convert $(2,30)_{60}$ to decimal.

**Solution.** $2\\cdot 60+30=150$. If written as a fractional $0;2,30$, it would instead mean $2/60+30/3600=1/24$; the radix position must be stated.

### 3. Complete a square generally

Show that $x^{2}+bx=c$ becomes $(x+b/2)^{2}=c+b^{2}/4$.

**Solution.** Add $b^{2}/4$ to both sides and use $(x+b/2)^{2}=x^{2}+bx+b^{2}/4$.

### 4. Source-card project

Choose one mathematical object. Record repository, accession number, material date, claimed composition date, language, operation, and one uncertainty. Reperform one calculation and distinguish repository fact from your inference.

**Solution standard.** A strong card makes each claim traceable, uses units, checks the calculation, avoids “first ever” unless evidence warrants it, and names missing information.

### 5. Network biography

Replace a lone-person timeline with a graph having at least eight nodes: people, institutions, texts, instruments, and barriers. Explain one path by which an idea travelled.

**Solution standard.** The graph should not treat unnamed groups as background. Edge labels must state relations such as taught, translated, funded, copied, criticized, or excluded.

## Final project: one operation across two settings

Choose one operation—multiplication, elimination, approximation, measurement,
proof by diagram, tabulation, or navigation—and study two well-bounded settings.
Submit:

1. two source cards with stable repository or scholarly references;
2. a faithful reconstruction of one calculation from each setting;
3. a modern mathematical explanation that is explicitly labelled as modern;
4. a comparison table using representation, operation, justification,
   transmission, and use;
5. one plausible connection and the evidence that would be needed to establish
   transmission;
6. one archival silence or dating uncertainty that changes the conclusion;
7. an accessible diagram, table, or tactile description;
8. a 300-word revision explaining which initial claim you narrowed.

**Rubric.** Mathematical accuracy and reproducibility count for 30%; source
traceability and dating discipline for 25%; contextual accuracy for 20%;
comparison without ranking for 15%; accessibility and revision for 10%. A
project cannot pass if it turns formula resemblance into an unsupported
priority or transmission claim.

## Sources, scope, and uncertainty

This course uses selected repository records and scholarship; absence here is not absence from mathematical history. Dates may refer to artifacts, copies, commentaries, or reconstructed compositions. Translations change vocabulary. “Influence” needs a plausible transmission route, not merely similar formulas. Community knowledge deserves consent and context.

Continue with [Read the Procedure, Rebuild the Mathematics](#/item/deep-dive-reading-historical-algorithms), historical sources and evidence, individual regional topics, and the mathematical subjects whose development this course only begins to map.
`;export{e as default};