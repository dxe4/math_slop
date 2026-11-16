
# Inclusion changes design, not mathematical ambition

## Access and equity in mathematics education

The goal of inclusive mathematics teaching is not to lower expectations but to remove barriers that prevent learners from engaging with challenging content. The National Council of Teachers of Mathematics argues in its access and equity position statement that all learners deserve responsive instruction and access to rigorous mathematics with the support they need. CAST's Universal Design for Learning framework similarly recommends multiple means of representation, action, and expression, so that disability, language, or background do not become gatekeepers to mathematical learning.

This chapter examines how inclusive design preserves mathematical goals while changing the means of access. The central claim is that accommodation and dilution are not synonyms: when the target is spatial graph interpretation, omitting that interpretation changes the goal; a usable tactile graph may preserve it. When the target is interpreting the represented relationship, structured coordinates and descriptions can also preserve the mathematical evidence. Suitability depends on the precise target and the learner's access requirements.

## Multiple means of representation

A representation that is accessible to one learner may be a barrier to another. An accessible graph lesson on $y=2x+1$ might provide:

- The equation and a data table;
- A high-contrast plot with distinct point shapes and line labels, not colour alone;
- A verbal description of intercept, direction, and rate;
- Keyboard-operable controls for digital exploration;
- A tactile graph or coordinate grid where available;
- Time to decode notation, plus a glossary of terms;
- Several response modes while preserving the reasoning goal.

Each of these alternatives makes different information available. The equation makes the rule explicit. The table makes individual values concrete. The verbal description makes the global behaviour accessible to screen-reader users. The tactile graph makes spatial relationships available through touch. These formats offer different paths to the relationship, but they do not automatically preserve every graph-reading demand. A table may preserve exact coordinates while omitting spatial interpretation; an equation may supply a rule that the original task asked learners to infer. Match the alternative to the target and record any mathematical information it supplies.

## Multiple means of action and expression

Learners differ in how they can interact with mathematical tasks and demonstrate understanding. Some may write fluently; others may dictate, use speech-to-text, or manipulate digital tools. The inclusive teacher asks: "What is the mathematical goal, and what response modes preserve it?"

If the goal is to explain why the sum of two odd integers is even, a learner might:
- write an algebraic proof;
- give a verbal explanation using parity;
- use counters to show that pairing odd numbers leaves no remainder;
- use a symbolic program in which arbitrary integers are written as $2m+1$ and $2n+1$, then simplify their sum to $2(m+n+1)$.

All four responses can demonstrate understanding because each represents arbitrary odd integers. A program that merely checks finitely many numerical cases is useful exploration, but it does not prove the universal claim. The teacher's job is to ensure that the response mode preserves both the concept and the required generality.

## Common misconceptions about inclusion

**Misconception: inclusion means separate curricula.**

Some educators assume that learners with disabilities or language needs require a different, simpler curriculum. This assumption denies learners access to grade-level content and can become a self-fulfilling prophecy. The repair is to identify the specific barrier---notation, language, motor control, sensory access---and remove it while preserving the mathematical target.

**Misconception: accommodations give unfair advantage.**

Extended time, alternative formats and assistive technology can remove extraneous barriers. Whether a specific change preserves the assessed demand depends on the goal: a supplied formula, automatic symbolic solver or precomputed graph can supply a mathematical operation that the task intended the learner to perform. A learner who uses a screen reader to access a graph is not gaining an advantage; they are gaining access. The repair is to distinguish between accommodations that preserve the construct (valid) and those that alter it (invalid).

**Misconception: inclusive design is only for learners with identified needs.**

Universal Design for Learning holds that designing for the margins benefits everyone. Captions on videos help learners in noisy environments as well as deaf learners. Clear notation helps learners with dyslexia and learners who are new to the language of instruction. The repair is to adopt inclusive design as a default, not as an afterthought.

## Designing an inclusive task

Consider the task: "Find the equation of the line through $(1,2)$ and $(4,8)$."

An inclusive version might offer:

- A printed worksheet with large, high-contrast text;
- A digital version compatible with screen readers;
- An audio description of the points and the grid;
- A manipulative coordinate plane with raised axes and movable points;
- The option to work with a partner who describes the visual elements;
- Extended time for learners who process text slowly;
- A choice of response format: an equation with computed slope and intercept; a table annotated with both parameters and the linear rule; a graph with the intercept and a slope triangle labelled; or a verbal explanation that computes both quantities.

The mathematical goal—finding the slope and intercept from two points—is unchanged. Every response mode must make both computed parameters and the evidence for them explicit. The design changes how learners access the information and express their understanding.

## Worked access case: preserve a rate comparison without supplying its conclusion

The cases in this chapter are fictional design exercises. They do not report disabled learners' experiences, measured outcomes, or an evaluation of an access tool. Suppose the mathematical target is to compare the rates of two affine relationships from exact point data and justify which is larger. The original visual task displays two labelled lines on a graph. A replacement consisting only of “line A is steeper” would give the conclusion while omitting its evidence. A replacement giving just the two equations would preserve the relationships but could also supply the slopes in a form that bypasses the intended calculation.

Instead provide the variable names and units, the common axis scales, and two distinct coordinate pairs for each line. For A use $(1,4)$ and $(4,10)$; for B use $(1,6)$ and $(5,12)$. State that each relation is affine over the relevant interval. A's output change is six over an input change of three, so its rate is two output units per input unit. B's rate is six over four, or one and a half. A therefore has the larger rate, even though B has the larger output at the first common input. This last contrast separates rate from current value.

A screen-readable table can preserve all of that evidence for a learner using structured text. A tactile graph can additionally preserve the spatial interpretation if its axes, scale and line identifiers can be distinguished. Which version is appropriate depends on whether the learning goal includes recovering coordinates spatially or focuses on comparing rates from supplied values. Both can be mathematically demanding, but they assess different operations. The teacher should name that distinction in the goal contract.

A spoken response can be complete if it identifies both input and output differences, computes the quotients, states their units and compares them. A drawn slope triangle can be equally complete if its labels make those same quantities recoverable. The response mode does not excuse a missing denominator or permit reading visual angle as a unit rate without checking scales.

The proposed design preserves the comparison and warrant while allowing access to the data through different means. It does not prove that the formats have identical cognitive demands or that every learner can use them. Consult the learner's access needs and inspect the resulting mathematical work rather than treating a nominal alternative format as evidence of successful access.

## Worked access case: preserve the scope of a parity proof

Suppose the goal is to prove that the sum of any two odd integers is even. One learner can dictate an explanation more readily than handwrite algebra. A scribe or speech-to-text tool may record the learner's words, including corrections, without supplying missing mathematical reasons. A complete dictated proof can state that each odd integer is twice an integer plus one, so their sum is twice the sum of those two integer parameters plus one. Because the resulting multiplier is an integer, the sum is even.

Write the structure explicitly to avoid a verbal ambiguity: the sum is twice the quantity consisting of the two parameters plus one, not twice the parameters followed by an extra unpaired one. Symbolically it is $2(m+n+1)$. If a transcription omits parentheses, read it back so the learner can confirm the intended grouping. This is access to expression, not a reason for the scribe to correct the proof without acknowledgement.

A counter model can support the positive-count version: each odd collection contains pairs and one leftover, and the leftovers make another pair. To cover negative odd integers, extend through the arbitrary-integer definition rather than pretending that counters represent negative cardinalities. A finite numerical program that checks many odd inputs supplies those checks but does not prove the full integer claim. A symbolic derivation can supply a general argument if its rewrite laws and arbitrary parameters are explicit; using a computer does not by itself determine the evidence's status.

Now vary the target. If the lesson assesses clear written mathematical notation, dictation changes which production skill is exercised. The teacher may still accept it as access to the proof target while recording that handwritten notation was not assessed. If the target is proof validity, requiring handwriting speed adds a different demand. The appropriate accommodation follows from the stated construct, not from a universal rule about which response mode counts.

This case proposes a procedure for preserving authorship: record who supplied each mathematical step, allow the learner to inspect the transcription, and distinguish transcription corrections from conceptual hints. It does not guarantee that a particular tool is accessible or that the resulting performance generalises. The mathematical judgement remains the same question of domain, arbitrary choice and valid inference used for any proof.

## Worked access case: simplify a sentence without solving the model

A fictional task describes two water tanks. Tank A initially contains twelve litres and gains four litres per minute. Tank B initially contains thirty litres and loses two litres per minute. Both rates remain constant while the model is used. At what nonnegative time do their volumes match? A long narrative can be replaced by short sentences or a structured table containing the same initial amounts, rates, units and requested comparison. This changes language presentation while leaving the learner to formulate the equality.

The volume rules are twelve plus four times elapsed minutes and thirty minus two times elapsed minutes. Equating them gives six times elapsed minutes equal to eighteen, so the meeting time is three minutes. Both then contain twenty-four litres. B would empty at fifteen minutes under its rate, so the meeting occurs within the nonnegative-volume interval of this simplified model. A complete solution checks both the equality and the model domain.

Supplying the equation $12+4t=30-2t$ would remove the formulation step. That can be an appropriate instructional scaffold, but it changes the evidence if selecting the model is the assessment target. Supplying a glossary for “initial,” “rate,” and “equal volume” need not supply the equation, provided the definitions explain terms without directing the exact operations. A timeline or two labelled containers may preserve givens, but arrows that already encode the full algebra can introduce another hint. Examine the actual information supplied rather than declaring every diagram neutral.

A learner can answer orally, with an accessible table, or with symbolic equations. Each response should make the two changing quantities and the equality condition clear. A lone answer of three minutes can be correct without showing the formulation or domain check. Requesting those reasons preserves ambition without requiring one notation format.

Real tanks may have capacity limits, changing rates and other constraints. The example deliberately assumes constant rates and adequate capacity over the relevant interval. It reports no physical experiment or learner outcome. The design conjecture is that reducing incidental language while retaining the model choices can support access to the same mathematical target; its practical effectiveness requires actual learner evidence.

## Inspect which information an adaptation adds or removes

For each proposed alternative, compare the givens, required operations and expected warrant. Enlarging text usually changes visual access without adding a mathematical conclusion. Supplying precomputed ratios adds the result of a calculation. Supplying a formula can remove model selection. A structured data table may retain exact point values while removing spatial coordinate recovery. None of these changes is automatically appropriate or inappropriate; the intended target decides which distinctions matter.

The learner's own account is part of design evidence. A nominally accessible document can still have unusable navigation, ambiguous spoken notation or an overwhelming table. Conversely, a learner may prefer a format the teacher did not anticipate. Ask about the concrete barrier and inspect whether the alternative permits the needed mathematical choices. Do not infer inability from difficulty operating an interface, and do not infer full access merely because a file has an alternative label.

Preserve agency when assistance is involved. A partner who manipulates a graph on another learner's instruction can support participation, but the record should say who selected coordinates, chose transformations and gave the reasoning. If the partner supplies the strategy, the work is collaborative or prompted evidence. That remains valuable, while supporting a different inference from independent construction. Similar care applies to automatic equation solvers: their output may be useful for investigating a conjecture, but it does not demonstrate that the learner performed the supplied derivation.

These distinctions keep inclusion connected to mathematical goals and formative inference. They offer no new empirical claim about average achievement, efficiency, or the superiority of one access framework. The standards are inspectable: preserve the relevant choices, provide usable evidence, record supports, and judge the mathematics actually shown.

## Practice exercises

### Exercise 1

A teacher is planning a lesson on circle geometry that relies heavily on dynamic geometry software with drag-and-drop interaction. A learner in the class has limited fine motor control. Design an inclusive adaptation that preserves the mathematical goal.

**Hint 1.** Name whether the target is construction, exploration or justification.

**Hint 2.** Offer controls or specified configurations retaining the relevant choices.

**Solution.** The mathematical goal is to explore properties of circles, such as the relationship between radius, diameter, and circumference, or the angle properties of chords and tangents. Adaptations might include:

- Keyboard-operable controls that allow the learner to adjust parameters with arrow keys or voice commands;
- Pre-set configurations that the learner can select and observe, rather than constructing from scratch;
- A partner activity where one learner manipulates the software and the other records observations and conjectures;
- Static diagrams with labelled measurements that the learner can analyse and compare;
- A tactile circle with raised chords and angles for manual exploration.

The goal of forming and testing conjectures about circle properties is preserved; only the interaction mode changes.

### Exercise 2

Explain why removing graph-reading entirely for a blind learner would change the mathematical goal, while providing a tactile graph preserves it.

**Hint 1.** Distinguish spatial interpretation from interpreting an underlying relationship.

**Hint 2.** A usable tactile graph needs labels and scale information.

**Solution.** Graph reading involves interpreting the relationship between two variables from a spatial representation. If the goal is to understand that relationship, removing the graph removes the opportunity to engage with the concept spatially. A tactile graph, by contrast, makes the spatial relationship available through touch: the learner can feel the slope, the intercept, and the curvature. The cognitive demand---interpreting a two-variable relationship from a spatial display---is preserved. The intended spatial relation can be preserved through touch if the tactile display is usable, labelled and scaled, and the learner can interpret it. This is a design requirement, not a guarantee that any tactile diagram works for every blind learner. If the target concerns the underlying function rather than spatial decoding, a structured table and explicit coordinate mapping may offer another valid route.

### Exercise 3

A learner who is an English language learner struggles with word problems not because of the mathematics but because of complex syntax and unfamiliar vocabulary. Design three adaptations that preserve the mathematical demand.

**Hint 1.** Preserve all givens and the requested output.

**Hint 2.** A supplied intermediate formula can change the assessed demand.

**Solution.**

1. **Simplify syntax without simplifying mathematics:** Replace "If a train departs at 8:15 a.m. and travels at a constant speed of 60 miles per hour, at what time will it reach its destination 150 miles away?" with "A train leaves at 8:15 a.m. It travels at a constant speed of 60 miles per hour. Its destination is 150 miles away. At what clock time does it arrive?" Both versions retain the departure time, units and arrival-time target: $150/60=2.5$ hours is 2 hours 30 minutes, so arrival is 10:45 a.m. Removing 8:15 a.m. would leave the duration calculable but the arrival time undetermined; shorter wording must preserve the givens and the mathematical target. Asking for the duration first would add an intermediate-step hint; use that scaffold only when selecting the intermediate quantity is not part of the assessment target.

2. **Provide a bilingual glossary:** Key terms (rate, distance, constant speed) are provided in the learner's first language with mathematical definitions. This removes the language barrier without changing the problem.

3. **Use diagrams and symbols:** Offer a timeline and distance bar labelled with the same departure time, distance and rate. The learner can reason from the representation even if the text is difficult. Supply $d=rt$ only if selecting the relation is not part of the target; otherwise keep that choice with the learner. Record which support was used instead of assuming every scaffold leaves the assessed demand unchanged.

### Exercise 4

Critique the following statement: "Universal Design for Learning is too much work for the benefit of a few learners."

**Hint 1.** Separate a design framework from a guaranteed outcome claim.

**Hint 2.** Use concrete barriers and access routes rather than assumed learner categories.

**Solution.** This statement misunderstands both the scope and the mechanism of Universal Design for Learning. UDL is not a set of individual accommodations for specific learners; it is a design framework that creates flexible options from the outset. Captions, clear navigation, multiple response formats, and structured notation can remove barriers for learners beyond those with identified needs, provided the options suit the task and preserve its mathematical demand. Moreover, the "few learners" argument ignores the variability of all learners: any class contains learners with temporary or situational barriers (a broken arm, a noisy environment, a migraine) as well as permanent ones. Anticipating barriers is a design rationale for offering these options. Whether a particular design improves access, learning, or efficiency requires evidence about its use, outcomes, and costs; the framework alone does not establish those effects.

### Exercise 5 {#inclusion-and-design-exercise-5}

Two affine relationships pass through $(2,7),(5,16)$ and $(1,8),(5,16)$ respectively. Compare their rates using an accessible structured-data response. State what a sentence saying only “the first is steeper” would omit.

**Hint 1.** Compute both changes, including the different input intervals.

**Hint 2.** A conclusion is not the evidence needed to judge it.

**Solution.** The first rate is nine divided by three, or three output units per input unit. The second is eight divided by four, or two. Thus the first rate is larger. A structured response names each pair, both differences, both quotients and their units. “The first is steeper” supplies the conclusion without exact coordinates, scales or calculations, so it cannot support independent evaluation of the rate comparison. If spatial graph reading is itself targeted, a table also changes that part of the operation; state the intended goal before selecting the alternative.

### Exercise 6 {#inclusion-and-design-exercise-6}

A learner dictates a correct general parity proof, and a scribe inserts a missing algebraic reason without asking. Explain what should be recorded and how to preserve learner authorship in a future task.

**Hint 1.** Distinguish transcription from mathematical prompting.

**Hint 2.** Read back ambiguous grouping for the learner's confirmation.

**Solution.** Record which reason the scribe supplied and describe the completed proof as supported at that step. The learner's own valid portions remain evidence of their reasoning. In future, transcribe faithfully, read back notation and grouping, and ask the learner to supply missing reasons rather than silently adding them. Any conceptual prompt should be identified. This allows dictation to support expression while keeping authorship inspectable. It does not require handwriting when proof validity is the target, nor does it make a completed assisted derivation evidence of independent construction.

### Exercise 7 {#inclusion-and-design-exercise-7}

Solve the two-tank problem from the worked case and identify a language adaptation that preserves formulation and a scaffold that supplies it.

**Hint 1.** Track initial quantities and signed changes separately.

**Hint 2.** Equate the two volume rules and check the valid time interval.

**Solution.** Equality gives $12+4t=30-2t$, hence $6t=18$ and $t=3$ minutes. Both volumes are twenty-four litres, and the time is nonnegative and before B empties at fifteen minutes. A short-sentence description or table of initial volumes and rates can preserve formulation. Giving the equality equation supplies that operation and should be recorded as a scaffold if modelling is assessed. It may still leave meaningful equation solving and interpretation, but those are narrower claims than independently translating the situation.

### Exercise 8 {#inclusion-and-design-exercise-8}

A calculator is proposed for two tasks: investigating how a function changes across many inputs, and demonstrating unaided fluency with a specified arithmetic procedure. Explain why the same tool can have different effects on the evidence contract.

**Hint 1.** Identify which operation each goal assigns to the learner.

**Hint 2.** A tool's supplied computation may be incidental in one task and central in another.

**Solution.** In the function investigation, a calculator may supply routine evaluations while leaving selection of inputs, comparison of outputs and justification of a pattern to the learner. Record its role and retain the need for a general warrant when a universal claim is made. In the unaided procedure task, the calculator supplies the very computation being assessed, so its output does not demonstrate that unaided skill. This distinction concerns the stated target, not a judgement that calculator use is generally easier or mathematically inferior. Adaptations should be described by the choices they preserve and supply.

### Exercise 9 {#inclusion-and-design-exercise-9}

A partner controls a geometry tool while a learner with limited motor access gives instructions. What evidence would show that the learner selected and justified the construction, and what would remain uncertain?

**Hint 1.** Record who chooses each mathematical step.

**Hint 2.** Successful manipulation alone is not the construction argument.

**Solution.** Record the learner's requested points, constraints and transformations, the reasons given, and whether the partner followed those instructions or supplied additional strategy. A valid learner-directed construction with a warrant can show mathematical planning despite delegated motor action. If the partner chooses a crucial auxiliary line, that step is supported and should be labelled. Tool operation, independent strategy selection and proof of the resulting property remain separate questions. The arrangement is a possible access route, not evidence that every partnership preserves the intended demand or improves learning.

### Exercise 10 {#inclusion-and-design-exercise-10}

Design an alternative format for a graph task whose target is identifying an exact maximum from a finite set of plotted data. Explain how to preserve the evidence without supplying the answer.

**Hint 1.** Provide every relevant data pair with variable names and units.

**Hint 2.** Avoid a description that already identifies the largest output.

**Solution.** Supply a structured table containing all plotted input-output pairs, clear column headers and units, and state that the task concerns the finite displayed dataset. Ask the learner to compare the outputs and identify every input attaining the largest value, with the supporting comparison. Do not replace the graph by “the maximum is at input four,” which gives the conclusion. If the target instead requires spatial graph decoding or interpolation on a continuous curve, the table may omit a relevant operation; a usable tactile or other spatial representation may then be needed. The format follows the precise mathematical target.

## Looking backward and forward

The previous chapter, *Teacher mathematical knowledge is specialised*, showed that teaching requires knowledge beyond the mathematics itself. Inclusive design is one domain where that specialised knowledge is essential: the teacher must know how to preserve mathematical goals while adapting means of access. A later chapter, *Read educational evidence with mathematical care*, examines how to evaluate the research claims that often underpin arguments for particular teaching approaches, including inclusive ones.
