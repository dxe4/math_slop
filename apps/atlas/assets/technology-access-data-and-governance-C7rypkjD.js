var e=`---
parent_id: book-mathematics-teaching-learning-evidence-reader
chapter_id: technology-access-data-and-governance
title: "Technology Access, Data, and Governance Cases"
level: undergraduate
estimated_minutes: 650
license: CC BY-SA 4.0
---

# Technology access, data, and governance cases

Chapter 2 analyzed how tools redistribute mathematical labor. This chapter turns to the institutional and ethical environment in which those tools are chosen, deployed, and governed. Access is not only whether a device is present; it includes whether the mathematical goal is reachable, whether data practices are transparent, and whether decisions about procurement, consent, and algorithmic use are accountable. The cases below are structured for analysis, not endorsement of any product.

## 1. Access is multidimensional

Access to mathematical technology can be blocked by:

- **economic barriers:** purchase cost, subscription fees, replacement parts, reliable electricity;
- **infrastructure barriers:** bandwidth, device sharing, platform compatibility, update cycles;
- **linguistic barriers:** interface language, documentation, support, culturally unfamiliar contexts;
- **sensory and motor barriers:** color-only feedback, drag-only controls, small targets, motion requirements;
- **pedagogical barriers:** tool introduced without mathematical goal, assessment requiring the tool when the target is content knowledge;
- **governance barriers:** opaque data terms, mandatory account creation, age restrictions, cross-border storage.

Removing one barrier while preserving others does not guarantee access. A free app with mandatory email registration and no privacy policy may be unusable in a setting that requires parental consent for data collection.

## 2. Case: procurement without audit

A district adopts a mathematics practice platform. The stated goal is formative assessment. The platform collects keystroke timing, response order, and session duration; it requires individual student accounts linked to school records; its terms permit training proprietary models on aggregated responses; it offers no data-deletion timeline; and its accessibility statement is a generic template.

### Audit questions

1. **Goal alignment:** does the platform assess the stated mathematical constructs, or mainly speed and accuracy on procedural items?
2. **Data minimization:** are keystroke timing and order necessary for formative assessment, or do they create a behavioral profile?
3. **Consent and assent:** can learners and families opt out without losing instruction? Is the consent process distinguishable from a terms-of-service checkbox?
4. **Retention and deletion:** what happens to records when a learner transfers or graduates?
5. **Accessibility:** has the platform been tested with the assistive technologies and browsers used in the setting?
6. **Fallback:** if the platform fails, is there an equivalent paper or discussion-based route?

**Teaching conjecture:** a procurement checklist that includes these six questions, completed by a team with mathematics and data-protection expertise, may reduce adoption of tools that undermine either mathematical goals or learner privacy. The conjecture needs local testing.

## 3. Case: algorithmic scoring and fairness

An automated system scores constructed responses to algebra problems. It was trained on a large corpus of labeled student answers. A team notices that the system awards full credit to a particular phrasing common in the training data but marks equivalent reasoning with unfamiliar vocabulary as incorrect.

### Analysis

The system has learned a correlation between wording and labeled score. It has not learned the mathematical equivalence relation. Possible responses:

- **Technical:** retrain with more diverse wording, add symbolic equivalence checking, or use human-in-the-loop validation.
- **Pedagogical:** do not use the score for high-stakes decisions; use it to flag responses for human review.
- **Governance:** disclose the training data composition, the validation sample, and the error rates by subpopulation.

**Research finding, bounded.** A quasi-experiment of this design can warrant that an automated scorer agrees with human raters at a stated rate for a specified sample and task type. It cannot warrant that the scorer understands algebra, that it is fair across all linguistic varieties, or that it should replace human judgment.

## 4. Case: surveillance and the classroom climate

A school installs dashboards that display real-time "engagement" metrics inferred from eye-tracking, keystroke patterns, and time-on-task. Teachers see color-coded warnings for individual learners during class.

### Risks

- **Construct validity:** engagement is inferred from proxies; looking at the screen is not identical to mathematical reasoning.
- **Chilling effect:** learners may alter behavior to game the metric rather than think mathematically.
- **Privacy:** continuous biometric inference creates a detailed behavioral record.
- **Power:** real-time individual flags during instruction can shift the teacher's attention from mathematical discourse to behavior management.

**Mathematical result:** a proxy measure $X$ correlated with an outcome $Y$ does not become a valid measure of $Y$ solely because the correlation is strong. The interpretation argument must link $X$ to the construct, not only to prediction.

## 5. Data governance: principles and practices

The following principles are widely endorsed in data-protection frameworks; they are governance standards, not claims that any particular tool satisfies them.

| Principle | Practice | Question for audit |
| --- | --- | --- |
| Purpose limitation | collect only for declared educational purpose | Are timing logs necessary for math learning? |
| Data minimization | collect the least data needed | Can the task work without individual accounts? |
| Storage limitation | set retention and deletion rules | When are records deleted after a learner leaves? |
| Accuracy | allow correction of errors | Can a learner challenge a generated score? |
| Integrity and confidentiality | secure against unauthorized access | Who has admin rights and how are they audited? |
| Accountability | document decisions and breaches | Is there a published breach response plan? |
| Transparency | explain processing in plain language | Can a non-lawyer understand the privacy policy? |

**Teaching conjecture:** applying this table during procurement may improve alignment between tool features and institutional values. The effect depends on who participates, what authority they have, and whether the checklist is revisited after adoption.

## 6. Open alternatives and their limits

Open-source software, open educational resources, and open data can reduce vendor lock-in and increase inspectability. They do not automatically solve accessibility, maintenance, security, or pedagogical quality.

### Worked comparison

| Criterion | Proprietary platform | Open-source tool | Paper and discussion |
| --- | --- | --- | --- |
| Cost to acquire | subscription or license | free to download | materials cost only |
| Cost to maintain | vendor handles updates | community or local IT | teacher time |
| Inspectability | limited by terms | source code visible | fully transparent |
| Accessibility | vendor claims | depends on implementation | highly adaptable |
| Data control | vendor terms govern | local control possible | local control |
| Mathematical fidelity | varies | varies | depends on task design |

No column is universally superior. A well-designed paper task with structured discussion can achieve deeper reasoning than a poorly designed digital drill. An open-source geometry tool maintained by a volunteer community may lack the accessibility testing of a commercial product.

## 7. Generative systems: specific risks

Large language models and generative image systems can produce fluent but incorrect mathematics, invent citations, and replicate biases present in training data. Their use in education requires additional safeguards.

### Verification protocol for generated content

1. Restate the mathematical problem independently.
2. Check each step: definitions, theorems, algebra, arithmetic, boundary cases.
3. Verify any cited source at its original.
4. Test with counterexamples.
5. Mark any claim supported only by generated text as unverified.
6. Require the learner to reconstruct the decisive step without the tool.

**Teaching conjecture:** requiring independent reconstruction may reduce over-reliance on generated fluency. It does not guarantee understanding or prevent exposure to incorrect content.

## 8. International and institutional frameworks

- **UNESCO's Guidance for Generative AI in Education** emphasizes human-centered governance, privacy, and age-appropriate use. It is policy guidance, not evidence that a particular tool improves learning.
- **GDPR and similar regulations** establish legal baselines for data protection in applicable jurisdictions. Compliance is necessary but not sufficient for ethical educational use.
- **Institutional review boards** or ethics committees evaluate research involving learners. Ordinary classroom improvement and generalizable research may be governed differently, but renaming research "evaluation" does not remove obligations.

## 9. Designing a governance review

Before adopting or renewing any mathematical technology, complete this record:

1. **Goal:** exact mathematical performance expected.
2. **Tool:** name, version, vendor or source, cost structure.
3. **Data collected:** fields, duration, recipients, jurisdiction.
4. **Consent process:** who consents, who assents, opt-out consequences.
5. **Accessibility:** tested configurations, known barriers, fallback routes.
6. **Algorithmic use:** scoring, recommendation, profiling, human oversight.
7. **Security:** encryption, access controls, breach history, audit trail.
8. **Deletion:** timeline, process, verification.
9. **Mathematical audit:** does the tool perform the work being assessed?
10. **Fallback:** equivalent no-tool or low-tool route.
11. **Review date:** when will this record be revisited?

## 10. Case: bandwidth, offline equity, and shared-device classrooms

A secondary school serves learners who share one smartphone among three siblings, rely on intermittent mobile data, and have no home broadband. The mathematics department wants to use an online graphing platform for a unit on quadratic functions.

### Equity analysis

Even if the platform is free to use, several barriers remain:

- **Device contention:** the smartphone may not be available during the assigned homework window.
- **Data cost:** each session consumes metered bandwidth that the family budgets for other purposes.
- **Offline impossibility:** if the platform requires a persistent connection, no session can occur during an outage.
- **Screen size:** a phone screen may hide axis labels, compress the coordinate grid, or make precise point entry difficult.

**Hypothetical case inference:** under the stated device, connection, and screen constraints, assigning the platform as the only route to the quadratic goal would make the tool itself a gatekeeper, not an aid. This is reasoning within the constructed case, not a recorded classroom observation.

### Worked low-tech fallback design

Goal: learners can predict and justify the effects of $a$, $h$, and $k$ in $y=a(x-h)^2+k$, connect the vertex form to roots and symmetry, and sketch a parabola from its equation.

Low-tech design:

1. **Prediction cards:** each learner receives a card with an equation and predicts the vertex, axis of symmetry, direction of opening, and $y$-intercept before any plotting.
2. **Shared table:** a printed table with integer $x$ values from $-5$ to $5$ is completed by hand for two or three cases. The table includes a column for first differences to reveal the linear rate of change of the slope.
3. **Graph paper sketch:** learners plot the computed points, draw the smooth curve, and mark the vertex and axis. A peer checks the sketch against the prediction.
4. **Parameter comparison:** in pairs, learners compare two equations such as $y=2(x-1)^2+3$ and $y=-0.5(x-1)^2+3$, noting which parameters changed and what effect each change had on the graph.
5. **Proof fragment:** learners explain why the vertex must lie at $(h,k)$ by completing the square on a general quadratic $ax^2+bx+c$ and identifying the constant term.

The mathematical goal is preserved: prediction, computation, graphical representation, and symbolic justification are all present. What is lost is the continuous dragging of sliders and instantaneous replotting; what is gained is deliberate computation, peer checking, and a record that requires no bandwidth or account.

**Teaching conjecture:** pairing one digital demonstration session in school with a paper-based practice set at home may reach more learners than requiring the platform for all practice. The conjecture needs local testing with attendance and performance records.

## 11. Case: accessibility procurement

A school system issues a request for proposals for a new mathematics assessment platform. The procurement document states that the platform must be "accessible." Vendors submit claims, but no tested configuration is named, no WCAG version is specified, and no remedy timeline is attached to a failed test.

### What to require in the contract

Accessibility cannot be audited after the fact if the contract lacks specificity. The following requirements translate standards into enforceable terms.

| Requirement | Contract language | Why it matters |
| --- | --- | --- |
| Named standard | "Conformance with W3C WCAG 2.2 Level AA, verified by documented test results." | Without a named version, a vendor may claim compliance with an obsolete or weaker standard. |
| Tested assistive-technology configurations | "Tested with the latest two versions of JAWS, NVDA, and VoiceOver with Chrome, Firefox, and Safari; test reports supplied for mathematics-specific interactions such as equation entry and graph navigation." | A generic accessibility statement does not guarantee that a screen reader can navigate a constructed-response math item. |
| Remediation timeline | "Any WCAG 2.2 Level AA failure reported in writing will be remedied within 30 business days; failures that block assessment completion will be remedied within 5 business days." | Without a timeline, a vendor can defer fixes indefinitely while learners are blocked. |
| Alternative-route guarantee | "For every digital interaction required to complete a task, an equivalent non-visual, keyboard-only, and reduced-motion route exists and is documented." | Prevents procurement of drag-only or color-only interactions that exclude some learners. |
| Third-party validation | "Independent accessibility audit by a named qualified tester; school retains right to commission its own audit at vendor expense if failures exceed a stated threshold." | Self-reported compliance is not independent evidence. |

**Governance rationale and teaching conjecture.** Testable standards, named configurations, and remedy timelines make an accessibility promise auditable and enforceable. It is plausible that verified requirements reduce inaccessible deployments, but this chapter supplies no comparative procurement-outcome study; any prevalence or causal-effect claim needs its own evidence.

### Audit questions

1. Does the procurement document name a testable standard, or does it use the word "accessible" as a vague aspiration?
2. Are the assistive technologies and browsers in the test plan the same ones used by learners in the setting?
3. Is there a financial or contractual consequence if the platform fails an independent audit?
4. Does the vendor provide a VPAT (Voluntary Product Accessibility Template) or equivalent, and has it been reviewed for mathematics-specific claims?

## 12. Case: algorithmic recommendation and sequencing

An adaptive mathematics platform selects the "next problem" for each learner based on a latent-ability estimate inferred from response patterns. The platform claims to personalize learning. A team wants to know whether the recommendation engine is educationally sound.

### Construct validity of the learner model

The learner model is a statistical representation, not the learner's mathematical knowledge. It typically encodes:

- **Observed variables:** item responses, response times, hint requests, number of attempts.
- **Latent variables:** estimated proficiency on a skill graph, often modeled as a scalar or vector in a knowledge-space framework.

**Mathematical result:** a latent variable model $P(\\text{response}|\\theta)$ describes the probability of observed responses given a parameter vector $\\theta$. It does not entail that $\\theta$ corresponds to any psychologically real construct; the correspondence is a modeling assumption that must be argued, not proved by fit statistics alone.

### Feedback loops

A recommendation system can create several feedback loops:

- **Exposure loop:** learners who are routed to easier items never demonstrate competence on harder items, so the model never updates their estimate upward.
- **Label loop:** if the model's own predictions are used to label training data for future model updates, errors can reinforce themselves.
- **Engagement loop:** if the platform optimizes for time-on-task or completion rate, it may select problems that are easy enough to guarantee success rather than problems that stretch the learner's reasoning.

**Teaching conjecture:** an adaptive system that optimizes for accuracy alone may produce a curriculum that is too narrow or too easy for deep learning. The conjecture needs local testing with outcome measures that include explanation, proof, and transfer, not only procedural accuracy.

### What an audit can and cannot show

An audit of the learner model can establish:

- the variables used as input and the functional form of the model;
- the fit of the model to a held-out response set;
- the distribution of recommended items across difficulty levels and content strands;
- error rates and outcome disparities across subgroups defined by available demographics.

An audit cannot establish:

- that the latent variable represents the mathematical construct the curriculum claims to teach;
- that the recommendation sequence is optimal for any individual learner;
- that the system will not develop harmful feedback loops over long-term use;
- that the system is fair across all possible learner backgrounds and future item pools.

**Evidence boundary.** The broad educational-technology syntheses cited in this book do not isolate the whole bundle of adaptive sequencing, learner-model design, procedural outcomes, and conceptual transfer. This chapter therefore makes no general effect claim for adaptive systems. A local adoption study must name the construct, outcome, comparison condition, assignment process, and implementation before it can warrant an effectiveness claim.

## 13. Worked data-flow mapping exercise

Before adopting a tool, map every field it collects, where it goes, how long it stays, and how it is deleted. The map is a governance document, not a technical manual.

### Completed example: mathematics practice platform

The table below inventories the data practices of a fictional but representative platform. Each row names one data element, its purpose, recipient, retention period, and deletion process. The table is followed by a prose alternative that states the same information in continuous text.

| Data element | Purpose stated by vendor | Recipient | Retention | Deletion process |
| --- | --- | --- | --- | --- |
| Student name and school ID | Account creation and roster sync | Platform database, school SIS | Until account closure | Admin-initiated deletion; 30-day grace period |
| Item responses (correct/incorrect) | Formative reporting to teacher | Platform database, teacher dashboard | 7 years after graduation | Batch deletion by cohort; no individual learner control |
| Keystroke timing per item | "Engagement analytics" | Platform database, vendor data-science team | Indefinite for "model improvement" | Not offered; aggregated only |
| IP address at login | Security and geolocation | Platform database, third-party fraud-detection service | 90 days | Automated purge after 90 days |
| Device type and OS version | Compatibility diagnostics | Platform database | 2 years | Not specified in terms |
| Session duration and time-of-day | "Usage insights" for district | Platform database, district analytics portal | 5 years | District admin can export; deletion not guaranteed |

**Prose alternative:** The platform collects six categories of data. Identifying information includes the student's name and school identifier, retained until account closure and deletable by an administrator after a 30-day grace period. Item-level correctness data is retained for seven years after graduation and deleted by cohort batch, with no individual deletion option. Keystroke timing, collected under the stated purpose of engagement analytics, is retained indefinitely for model improvement and is not deletable. The IP address at login is shared with a third-party fraud-detection service and purged automatically after 90 days. Device information is retained for two years with no stated deletion process. Session duration and time-of-day data are retained for five years in a district analytics portal; the district can export this data, but deletion is not guaranteed.

### Audit questions raised by the map

1. **Purpose limitation:** is keystroke timing necessary for formative mathematics assessment, or does it create a behavioral profile beyond the stated educational purpose?
2. **Data minimization:** can the platform function without collecting device type and OS version, or can this be inferred server-side without storing it per learner?
3. **Storage limitation:** what purpose requires indefinite keystroke retention, are the records identifiable or reasonably re-identifiable, and when does necessity end? Under GDPR Article 5(1)(e), identifiable personal data should not be retained longer than necessary for its purpose, subject to specified research/statistical safeguards; truly anonymous information falls outside the Regulation under Recital 26. The table raises an audit question rather than establishing a legal violation by itself.
4. **Transparency:** a parent reading the privacy policy would need to locate six separate clauses, each with a different retention rule, to understand the full picture. The map makes the aggregate practice visible.

**Teaching conjecture:** requiring vendors to complete a standardized data-flow table before contract signing may reduce adoption of tools with opaque or excessive data practices. The conjecture needs local testing.

## 14. Consent architecture in schools

Consent in educational technology is not a single signature. It is an architecture of authority, information, voluntariness, and genuine alternatives.

### Authority gradients

In a school, consent operates across multiple power relationships:

- **State or district to vendor:** the institution contracts for services and defines the scope of data use.
- **Parent or guardian to school:** legal consent for data collection, especially for learners below the age of majority.
- **Learner to teacher:** assent, the learner's agreement to participate, which should be informed and voluntary even when legal consent rests with the parent.
- **Teacher to administration:** the teacher may be required to use a platform and may not have the authority to opt out on behalf of the class.

An authority gradient means that the person asked to consent may not have the power to refuse without consequence. A parent who objects to a mandatory platform may be told that the child will fall behind. A teacher who objects may face performance review consequences. A learner who objects may lose instructional time.

### Assent and its limits

Assent is the learner's agreement to participate, distinct from the parent's legal consent. Developmentally appropriate assent requires:

- information the learner can understand, about what is collected and why;
- a genuine opportunity to decline without penalty;
- ongoing rather than one-time permission, because a learner's comfort may change.

**Hypothetical governance failure:** learners are told that a platform will be used and are then asked to click "agree." In that scenario the click records notification of a mandatory requirement, not voluntary assent. Whether a real classroom follows this pattern requires direct records from that setting.

### Genuinely equivalent unrecorded routes

For consent or assent to be meaningful, there must be an alternative that is genuinely equivalent in educational value and not stigmatizing. If the only alternative to the digital platform is a worksheet with lower cognitive demand, or if the learner must sit in a separate room to do the paper version, the alternative is not equivalent.

A genuinely equivalent unrecorded route satisfies:

1. **Same mathematical goal:** the alternative addresses the identical performance target.
2. **Same cognitive demand:** the alternative requires reasoning, explanation, or proof at the same level.
3. **Same social setting:** the alternative is completed in the same classroom, during the same time, with the same peer and teacher interaction.
4. **No record beyond ordinary classroom practice:** the alternative does not create a separate data trail that identifies the learner as an opt-out.

**Teaching conjecture:** designing the low-tech fallback first, before selecting the digital tool, increases the likelihood that the unrecorded route will be genuinely equivalent. If the digital tool is chosen first and the fallback is improvised later, the fallback often becomes a lesser task.

## 15. Open vs proprietary revisited: total cost of ownership and exit costs

The comparison in Section 6 focused on acquisition and inspectability. This section adds the costs that appear only after adoption: maintenance, training, integration, and the cost of leaving.

### Total cost of ownership

Total cost of ownership (TCO) is the sum of all costs over the expected life of a tool, not only the initial price.

| Cost category | Proprietary platform | Open-source tool | Paper and discussion |
| --- | --- | --- | --- |
| Acquisition | subscription or perpetual license | free download | materials only |
| Setup and integration | vendor-assisted or self-service | local IT or external consultant | minimal |
| Training for staff | vendor training, webinars, documentation | community forums, self-directed, or hired support | peer observation, study groups |
| Ongoing maintenance | included in subscription or support contract | local IT time, community updates, or paid support contract | teacher time for copying and filing |
| Accessibility testing | vendor claims, independent audit cost | local or community testing | local adaptation |
| Data export and portability | often limited to vendor-defined formats; API access may cost extra | full database access; format depends on local skill | physical transfer |
| Exit cost | contract termination fees, data migration, retraining on new tool | migration effort depends on local documentation and format choice | minimal |

The table shows that open-source tools are not free; they shift costs from license fees to local technical capacity. A proprietary platform with a generous education discount may appear cheap until the subscription rises, the export format is proprietary, or the vendor discontinues the product.

### Exit costs: data export formats and portability

Exit cost is the cost of moving to a different tool while preserving learner records, curriculum materials, and institutional knowledge.

- **Proprietary lock-in:** if the platform stores data in a vendor-specific format and offers no standard export, the institution must either maintain the old platform in parallel or lose historical records.
- **Open standards:** formats such as CSV, JSON, QTI (Question and Test Interoperability), and LTI (Learning Tools Interoperability) reduce exit cost by allowing data to move between systems.
- **Local control:** an open-source tool hosted locally allows the institution to archive the full database, but only if local staff have the skill to manage backups and migrations.

**Teaching conjecture:** including exit-cost clauses in procurement contracts—requiring standard-format export, a stated API, and a data-deletion timeline on termination—may reduce long-term vendor lock-in. The conjecture needs local testing with contract data.

## 16. Governance review practice: a video-conferencing platform

Section 9 presented a generic governance review record. This section completes a fully worked record for a different tool class: a video-conferencing platform used for remote mathematics tutoring and small-group problem solving.

### Worked governance review record

1. **Goal:** learners will explain their reasoning aloud, share written work via camera or digital whiteboard, and receive responsive feedback from a tutor or peer group. The mathematical performance targets are explanation clarity, justification of steps, and revision based on critique.

2. **Tool:** video-conferencing platform, version and host to be specified; vendor or self-hosted open-source alternative; cost structure includes per-seat licensing or server hosting fees.

3. **Data collected:**
   - audio and video of sessions;
   - chat messages and whiteboard annotations;
   - participant names, email addresses, and IP addresses;
   - session metadata (start time, duration, device type);
   - cloud recordings if enabled.
   Recipients: platform vendor, cloud storage provider, any integrated transcription or analytics service. Jurisdiction: data may be stored in regions covered by the vendor's infrastructure; cross-border transfer must be documented.

4. **Consent process:**
   - Parent or guardian consents to video participation and recording.
   - Learner assents to being on camera and to the recording policy.
   - Opt-out consequence: if a learner declines video, they join by audio-only with a shared static whiteboard image; if they decline recording, they join a non-recorded breakout while the main session is recorded. The audio-only and non-recorded routes must be checked for equivalence of mathematical interaction.

5. **Accessibility:**
   - Tested configurations: keyboard navigation of all controls, screen-reader compatibility with participant lists and chat, captioning or transcription.
   - Known barriers: video whiteboard content may not be readable by screen readers unless text alternatives are provided; camera-required policies may exclude learners with certain disabilities.
   - Fallback routes: audio-only with structured text chat; pre-shared PDF of whiteboard content; asynchronous written explanation with peer feedback.

6. **Algorithmic use:**
   - Automated transcription may misrepresent mathematical vocabulary.
   - Automated attendance or engagement scoring based on camera-on time is a proxy measure with low construct validity for mathematical reasoning.
   - Human oversight: a tutor reviews all automated transcripts before they become part of a learner record.

7. **Security:**
   - Encryption: end-to-end encryption for video and audio if offered; at-rest encryption for recordings.
   - Access controls: host-only screen sharing, waiting room, password protection.
   - Breach history: review vendor disclosures for the past 24 months.
   - Audit trail: log of who accessed recordings and when.

8. **Deletion:**
   - Recordings deleted 30 days after the term ends unless a learner or teacher requests retention for a portfolio.
   - Chat logs deleted 90 days after the session.
   - Verification: automated deletion report with timestamp and file hash.

9. **Mathematical audit:** the platform transmits and displays mathematical reasoning but does not perform it. The audit question is whether the whiteboard resolution, latency, and screen-sharing quality preserve the precision of symbolic notation. A test session with small fractions, exponents, and geometric diagrams should verify legibility.

10. **Fallback:** a telephone audio call with a pre-mailed paper problem set and a shared asynchronous document for written explanations. The tutor provides oral feedback on the phone and written feedback in the document. The mathematical goal of explanation and revision is preserved, though the immediacy of visual gesture is reduced.

11. **Review date:** end of term; earlier if the vendor updates terms, changes infrastructure region, or introduces new analytics features.

## Exercises

1. A district is offered a free mathematics app in exchange for anonymized student response data. List three governance questions that must precede adoption.
2. Explain why "the algorithm is unbiased because the developers tested it" is not a sufficient warrant for fair scoring.
3. Design a paper-based fallback for a dynamic geometry lesson on triangle midpoints that preserves the proof goal.
4. A generative system produces a correct-looking proof that contains an invalid implication. Give two safeguards for classroom use.
5. An engagement dashboard flags a learner as "off-task" because they paused typing for two minutes. Name two rival explanations and one risk of acting on the flag.
6. Compare proprietary and open-source homework platforms on data control and maintenance cost; state which dimension each wins and why neither is universally superior.
7. Write a purpose-limitation argument against collecting keystroke timing for a formative fraction assessment.
8. A school requires individual accounts for a mathematics game that works offline. What is the data-minimization question?
9. Classify: "The platform encrypts data at rest"; "a named meta-analysis estimated a small average effect for educational technology"; "this tool may reduce grading time in this department"; "the probability of at least one six in four rolls is $1-(5/6)^4$."
10. Draft a governance review record for a spreadsheet used to track student quiz scores, including deletion and access questions.
11. A rural school has one computer lab with unreliable internet. Propose a low-tech fallback for a lesson on linear functions that preserves the goal of interpreting slope and intercept in context.
12. In an accessibility procurement contract, why is it insufficient to require that the platform be "accessible" without naming a WCAG version and tested assistive-technology configurations?
13. An adaptive platform routes a learner to easier items after two consecutive errors. Name one feedback loop this creates and one mathematical risk.
14. Map the data flow for a mathematics game that collects player username, level completion times, in-game purchase history, and device advertising identifier. For each field, state the data-minimization question.
15. A teacher tells learners they must create accounts on a social mathematics platform to share solutions. A learner objects. Describe three features of a genuinely equivalent unrecorded route.
16. Calculate which has the higher five-year total cost of ownership: a proprietary platform at 2,000 currency units per year with free setup, or an open-source tool with no license fee but 8,000 currency units of initial setup and 1,500 currency units of annual maintenance. State your assumptions.
17. A video platform used for mathematics tutoring offers automated transcription. List two risks specific to mathematical vocabulary and one governance response.
18. A vendor claims that learner data is "anonymized" because direct identifiers have been removed. Explain why combinations of remaining variables may still permit re-identification, using the concept of a quasi-identifier.
19. Draft three contract clauses that reduce exit costs for a proprietary mathematics platform.
20. A school uses an engagement dashboard that scores "focus" from eye-tracking data. Explain why this is a proxy measure and why a strong correlation between eye-tracking data and test scores does not validate the dashboard as a measure of mathematical focus.
21. A generative AI system recommends the next theorem to study based on a learner's chat history. Name two construct-validity concerns and one feedback-loop risk.
22. A district procures a mathematics platform without specifying a remediation timeline for accessibility failures. Write a procurement clause that fixes this gap.
23. An open-source geometry tool is free to download but requires a local server, regular security patches, and a teacher trained to debug JavaScript errors. Classify each cost and explain why the tool may still have a higher total cost of ownership than a commercial subscription for a small school with no IT staff.
24. A learner is asked to assent to being recorded during a mathematics discussion. The teacher says, "Just click yes so we can start." Identify two ways this procedure fails the standard for developmentally appropriate assent.
25. Using the data-flow mapping template from Section 13, inventory a fictional generative-AI tutoring tool that collects chat prompts, generated responses, learner ratings of helpfulness, session duration, and inferred "confusion" scores. Write the table and list two governance questions it raises.

## Solutions

1. What does "anonymized" mean under the vendor's definition? Can students opt out without losing instruction? What is the retention and deletion policy? What mathematical construct does the app actually assess?
2. Testing on a specific sample cannot guarantee performance on all populations, linguistic varieties, or future tasks. Bias can be embedded in training data, labeling, or feature engineering. A validity argument requires construct representation and fairness analysis, not only accuracy.
3. Provide a paper with a drawn triangle and midpoints marked by construction. Ask learners to predict which segments are parallel and in what ratio, then to write a proof using vectors, coordinates, or similarity. The prediction and proof are preserved; the continuous dragging is replaced by static cases and deductive reasoning.
4. Require independent verification of each step by a human with mathematical expertise. Require the learner to reconstruct the proof without the generated text. Do not use generated proofs as authoritative sources.
5. Rival A: the learner is thinking before writing. Rival B: the learner is reading the problem carefully. Risk: the teacher interrupts productive thinking or stigmatizes the learner based on a proxy.
6. Proprietary platforms often win on maintenance cost because the vendor handles updates and support. Open-source platforms often win on data control because the institution can host and inspect the code. Neither is universally superior because maintenance quality varies, and data control depends on local technical capacity.
7. Keystroke timing is not necessary to assess fraction understanding. It creates a behavioral profile that may be used for purposes beyond formative assessment, violating purpose limitation. If timing is not part of the construct, it should not be collected.
8. Why are individual accounts required if the game works offline? Can progress be stored locally without creating a persistent identifiable record? The data-minimization question asks whether the account is necessary for the educational purpose.
9. Technical claim about platform features; external research finding bounded to its sample and design; local teaching conjecture; mathematical result.
10. Goal: track quiz scores for formative feedback. Tool: spreadsheet software, version and host. Data collected: student names, scores, dates. Consent: ordinary classroom record, no research use without additional review. Accessibility: screen-reader compatibility of the file format. Algorithmic use: none unless formulas calculate averages. Security: file access controls, encrypted storage if required. Deletion: scores deleted after the term or per institutional policy. Mathematical audit: spreadsheet performs arithmetic, not reasoning; reasoning is assessed separately. Fallback: paper gradebook. Review date: end of term.
11. Provide printed graph paper with a contextual scenario such as a taxi fare with a base charge and per-kilometer rate. Learners complete a table of values by hand, plot the points, draw the line, and interpret the intercept as the base charge and the slope as the per-kilometer rate. They then write a sentence predicting the fare for a given distance and justify it using the equation. The goal of interpreting slope and intercept is preserved without internet or devices.
12. Without a named standard, a vendor may claim compliance with an obsolete or weaker guideline. Without tested configurations, there is no evidence that the platform works with the screen readers, browsers, or assistive technologies actually used by learners in the setting. The requirement becomes unenforceable.
13. **Feedback loop:** the learner is never exposed to harder items, so the model never receives evidence of competence at higher levels, and the estimate stays low. **Mathematical risk:** the learner's curriculum becomes too easy and narrow, potentially omitting important content strands or reasoning demands.
14. **Username:** is a persistent identifier necessary, or can play proceed anonymously? **Level completion times:** are timing data necessary for the mathematical goal, or do they create a behavioral profile? **In-game purchase history:** what educational purpose does commercial transaction data serve? **Device advertising identifier:** why is a tracking identifier collected for an educational game? The data-minimization question for each field is whether it is necessary for the stated educational purpose.
15. The unrecorded route must address the same mathematical goal (sharing and critiquing solutions), require the same cognitive demand (explanation and justification), occur in the same social setting (the classroom with peers and teacher), and not create a separate data trail that identifies the learner as an opt-out.
16. Proprietary five-year TCO: $2{,}000\\times5=10{,}000$ currency units. Open-source five-year TCO: $8{,}000+1{,}500\\times5=15{,}500$ currency units. Under these assumptions, the proprietary platform has the lower five-year TCO. If the proprietary subscription rises after year three, or if the open-source setup cost is amortized over more years, the ranking could reverse. The calculation is a mathematical result; the choice depends on additional local conjectures about price changes, staff capacity, and exit costs.
17. **Risk 1:** automated transcription may misread mathematical terms such as "sine" as "sign" or "log" as "law." **Risk 2:** symbolic notation spoken aloud may not be captured accurately, losing the precise mathematical content. **Governance response:** require human review of all transcripts before they enter a learner record; do not use automated transcripts as authoritative evidence of mathematical reasoning.
18. A quasi-identifier is a variable that is not a direct identifier on its own but can be combined with other variables to identify an individual. For example, in a school with few learners, the combination of grade level, mathematics course, and response timestamp may uniquely identify a student even after name and ID have been removed. If the vendor retains these quasi-identifiers, re-identification is possible.
19. **Clause 1:** "The vendor will provide a complete export of all learner data in a machine-readable standard format (JSON or CSV) within 30 days of contract termination." **Clause 2:** "The vendor will maintain a documented API for data access at no additional charge throughout the contract term." **Clause 3:** "On termination, the vendor will delete all learner data and provide a signed deletion certificate within 60 days."
20. Eye-tracking data measures where the eyes are directed; it does not measure mathematical reasoning, attention to relevant features, or productive struggle. A strong correlation with test scores is a predictive relationship, not a validity argument. The dashboard measures a proxy, and the proxy may be gamed or may reflect factors unrelated to the mathematical construct.
21. **Construct-validity concern 1:** the chat history may reflect vocabulary or writing style rather than mathematical knowledge. **Construct-validity concern 2:** the model may conflate question-asking with confusion or confidence. **Feedback-loop risk:** if the system recommends easier theorems after detecting "confusion," learners who ask questions may be routed away from challenging content, reinforcing a loop that underestimates their capacity.
22. "Any accessibility failure that prevents a learner from completing a mathematics assessment or interaction will be remedied by the vendor within five business days of written notice. All other WCAG 2.2 Level AA failures will be remedied within thirty business days. Failure to meet these timelines will entitle the district to withhold payment proportional to the duration of the outage."
23. **Local server cost:** hardware or hosting expense, classified as infrastructure. **Security patches:** ongoing labor cost, classified as maintenance. **Teacher debugging time:** opportunity cost of instructional time lost to technical support, classified as support. For a small school with no IT staff, these costs may exceed a commercial subscription that bundles hosting, security, and support. The open-source tool wins on inspectability and data control but may lose on TCO when local capacity is scarce.
24. **Failure 1:** the learner is not given information about what the recording will be used for, who will see it, or how long it will be kept. **Failure 2:** the learner is pressured to agree by the authority of the teacher and the implicit threat of delaying the lesson; there is no genuine opportunity to decline without social penalty.
25. **Table:**

| Data element | Purpose stated by vendor | Recipient | Retention | Deletion process |
| --- | --- | --- | --- | --- |
| Chat prompts | "Personalized tutoring" | AI model provider, platform database | Indefinite for model training | Not offered; prompts may persist in model weights |
| Generated responses | "Personalized tutoring" | Learner, platform database | Session history: 1 year | Learner can delete session history; model retains influence |
| Learner ratings of helpfulness | "Quality improvement" | Platform database, model training pipeline | Indefinite | Not offered |
| Session duration | "Usage analytics" | Platform database, district dashboard | 5 years | Batch deletion by cohort |
| Inferred "confusion" scores | "Adaptive difficulty" | Platform database, model training pipeline | Indefinite | Not offered |

**Governance question 1:** the chat prompts and inferred confusion scores are retained indefinitely and may influence model behavior even after individual session deletion; what control does the learner have over this persistent inference? **Governance question 2:** the inferred confusion score is a latent construct with no direct mathematical validity argument; is it being used to make consequential routing decisions without human oversight?

## Project: Design a governance review for an adaptive elementary mathematics platform

A school district is considering an adaptive platform for grades 3–5 that selects arithmetic practice items, provides automated hints, and reports "mastery" dashboards to teachers. The platform requires individual student accounts, collects item responses and response times, and uses a proprietary algorithm to infer mastery on a skills map. The vendor offers a free pilot semester in exchange for aggregated usage data.

Your task is to produce a complete governance review record for this platform, following the structure in Section 9 and drawing on the cases in Sections 10–16. Your review must address:

1. **Goal alignment:** state the exact mathematical performances the district expects for grades 3–5 arithmetic, and audit whether the platform's "mastery" metric corresponds to those performances or to a narrower procedural subset.
2. **Data-flow map:** inventory every field the pilot collects, its recipient, retention, and deletion, using the template from Section 13. Flag any field that violates purpose limitation or data minimization.
3. **Consent architecture:** describe who consents, who assents, what authority gradients exist, and what genuinely equivalent unrecorded route is available to a learner who declines the platform.
4. **Accessibility procurement:** specify three contract requirements with enforceable language, including a named WCAG version, tested assistive-technology configurations, and a remediation timeline.
5. **Algorithmic audit:** state what the audit can and cannot show about the adaptive learner model, and identify one feedback loop that could harm mathematical learning.
6. **Exit-cost analysis:** estimate the cost of leaving the platform after the pilot if the district decides not to adopt, including data export, format portability, and retraining on a replacement tool.
7. **Fallback design:** describe a paper-based or low-tech alternative for one grade-level unit that preserves the same mathematical goal and cognitive demand.

### Solution blueprint

1. **Goal alignment.** The district expects learners to solve multi-step word problems, explain strategies orally and in writing, use representations such as area models and number lines, and judge the reasonableness of answers. The platform's "mastery" metric is inferred from correct item responses and response time on a skills map. The audit shows that the platform measures procedural accuracy and speed on isolated items. It does not measure explanation, representation use, or reasonableness judgment. Therefore, the mastery metric is misaligned with the district's goal: it is a proxy for a narrower construct.

2. **Data-flow map.**

| Data element | Purpose | Recipient | Retention | Deletion |
| --- | --- | --- | --- | --- |
| Student name, grade, teacher | Account and reporting | Platform database, SIS | Until account closure | Admin request; 30-day grace |
| Item response (correct/incorrect) | Mastery inference | Platform database, vendor analytics | 7 years | Batch by cohort |
| Response time per item | "Efficiency" metric | Platform database, vendor data science | Indefinite | Not offered |
| Hint requests and hint viewing time | "Engagement" analytics | Platform database, vendor analytics | 5 years | Not offered |
| Device type and OS | Compatibility | Platform database | 2 years | Not specified |
| Aggregated usage patterns (pilot data) | Vendor product improvement | Vendor data science, possible third-party partners | Indefinite | Not applicable; aggregated |

Flags: response time and hint viewing time are not shown necessary for the stated goal of arithmetic mastery; they may create behavioral profiles. The review must determine whether the "aggregated" pilot record is truly anonymous or remains reasonably re-identifiable, name its product-improvement purpose, test whether indefinite retention is necessary for that purpose, and identify applicable safeguards. School-level pattern inference alone does not establish that the data are personal data or that storage limitation has been violated.

3. **Consent architecture.** Parents consent through a district-wide digital form. Learners are asked to "click agree" on the first login; this is notification, not assent. Authority gradients: the district contracts; the teacher assigns platform use as part of math class; the learner cannot decline without missing instruction. A genuinely equivalent unrecorded route: a paper problem set with the same multi-step word problems, area models, and explanation prompts, completed in the same classroom during the same math block, with teacher circulation and peer discussion. The paper set is not marked as an "opt-out" and is not recorded in a separate database.

4. **Accessibility procurement clauses.** (a) "The platform will conform to W3C WCAG 2.2 Level AA, with test reports for mathematics-specific interactions including equation entry, graph navigation, and dynamic feedback." (b) "Tested configurations: JAWS and NVDA with the latest two versions of Chrome and Firefox; VoiceOver with the latest two versions of Safari." (c) "Any WCAG 2.2 Level AA failure that prevents a learner from completing an assessment item will be remedied within five business days; all other failures within thirty business days. Failure to meet timelines entitles the district to terminate without penalty."

5. **Algorithmic audit.** The audit can show the input variables, the functional form of the mastery model, the distribution of recommended items, and error rates by demographic subgroup. It cannot show that the latent "mastery" variable corresponds to the district's full mathematical goal, that the recommendation sequence is optimal for any individual learner, or that the system will not create harmful loops. **Feedback loop:** learners who take longer on items may be routed to easier problems, so the system never sees their capacity for harder reasoning. Over time, the curriculum narrows and underestimates the learner.

6. **Exit-cost analysis.** After a one-semester pilot, the district has accumulated item-level response data for several hundred learners. Export: the vendor provides CSV exports of item responses but not the inferred mastery scores or the skills map. The district must reconstruct progress from raw responses. Format portability: CSV is standard, but the skills map is proprietary, so the data cannot be imported directly into another adaptive system. Retraining: teachers have learned the vendor's dashboard and reporting categories; moving to a new tool requires retraining. Estimated exit cost: 40 hours of staff time for data migration and retraining, plus the risk of losing historical progress visibility during the transition.

7. **Fallback design.** Grade 4 unit: multi-digit multiplication with area models. Goal: learners can decompose factors by place value, represent the partial products in an area model, and explain why the standard algorithm produces the same result. Low-tech design: learners receive printed grids, decompose $23 \\times 15$ into $(20+3)(10+5)$, shade the four partial-product rectangles, compute each area, sum them, and write a paragraph explaining the connection to the standard algorithm. The teacher circulates, asks probing questions, and selects two learners to share their explanations. The mathematical goal and cognitive demand are preserved; the digital platform's instant feedback is replaced by teacher and peer feedback.

## Evidence notes and references

- UNESCO. (2023). [*Guidance for Generative AI in Education and Research*](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research). Governance guidance, not a product endorsement.
- W3C. (2024 recommendation). [*Web Content Accessibility Guidelines (WCAG) 2.2*](https://www.w3.org/TR/WCAG22/). A web standard, not an education-effect study.
- Rakes, C. R., et al. (2020). ["Mathematics achievement and orientation: A systematic review and meta-analysis of education technology."](https://doi.org/10.1016/j.edurev.2020.100337) *Educational Research Review, 31*, 100337. Read the eligibility, dependence, bias, and outcome limitations before applying its estimates.
- Sweeney, L. (2000). "Simple demographics often identify people uniquely." *Data Privacy Working Paper 3*, Carnegie Mellon University. Demonstrates re-identification risk from quasi-identifiers.
- Koedinger, K. R., Brunskill, E., Baker, R. S. J. d., McLaughlin, E. A., & Stamper, J. (2013). ["New potentials for data-driven intelligent tutoring system development and optimization."](https://doi.org/10.1609/aimag.v34i3.2484) *AI Magazine, 34*(3), 27–41. Discusses learner models and data-driven development; not a claim that adaptive systems are universally effective.
`;export{e as default};