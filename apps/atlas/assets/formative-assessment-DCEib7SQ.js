var e=`---
parent_id: book-teaching-for-mathematical-understanding
chapter_id: formative-assessment
title: "Formative assessment is an inference process"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Formative assessment is an inference process

## From score to inference

A learner selects option B on a multiple-choice item. What does the teacher know? Only that the learner selected B. Whether the selection reflects understanding, guessing, partial knowledge, or a misreading of the question is not given. Assessment is not a direct window into the mind; it is an inference from limited evidence under specific conditions. The quality of that inference depends on the design of the task, the context of administration, and the teacher's interpretation.

This chapter examines how to design tasks that support strong inferences, how to interpret responses with appropriate uncertainty, and how to use assessment to inform the next instructional move rather than merely to rank learners.

## The hinge question

A hinge question is a brief assessment item used during instruction to decide whether the class is ready to move on. It should be quick to answer, reveal the target concept, and produce responses that are easy to interpret. Consider the expression $-(x-3)$.

**A.** $-x-3$

**B.** $-x+3$

**C.** $x-3$

**D.** $3x$

The correct answer is B, because $-(x-3)=-x+3$ by the distributive property.

Each distractor is designed to investigate a possible reasoning path. The descriptions below are hypotheses about responses, not established diagnoses:

- **A ($-x-3$):** One possible route applies the negative sign to the first term while retaining the second term's minus sign. This suggests incomplete understanding of distributing $-1$ across parentheses.

- **C ($x-3$):** One possible route ignores the outer negative sign, perhaps reading the expression as $x-3$.

- **D ($3x$):** One possible route conflates subtraction with multiplication, perhaps combining the factors as $-1\\times x\\times(-3)$. Other routes and guessing remain possible.

A well-designed hinge question makes diagnostic reasoning possible. But the selected option alone does not *prove* the reasoning path. The learner who chose A might have reasoned correctly but made a sign slip, or might have guessed. Follow-up is essential.

## Follow-up: testing the inference

After a hinge question, the teacher can strengthen the inference by asking for a brief explanation or by substituting a value. For $-(x-3)$, the teacher might say: "Choose a value of $x$ and check whether your expression matches the original."

At $x=5$, the original expression is $-(5-3)=-2$.

- A gives $-5-3=-8$, which does not match.
- B gives $-5+3=-2$, which matches.
- C gives $5-3=2$, which does not match.
- D gives $15$, which does not match.

This substitution test is powerful because it is independent of the algebraic reasoning. A learner who chose A and now sees the mismatch has evidence that their algebraic step was wrong, not merely that the teacher says so.

## Validity and its threats

Assessment validity is the degree to which evidence supports the intended inference. A task may be invalid for its purpose even if the mathematics is correct. Threats to validity include:

- **Reading load:** A mathematically simple task embedded in a complex word problem may measure reading comprehension rather than mathematical reasoning.
- **Unfamiliar context:** A task about cricket statistics may disadvantage learners unfamiliar with the sport, even if they understand percentages.
- **Inaccessible notation:** A task that requires decoding unfamiliar symbols may measure symbol recognition rather than the target concept.
- **Time pressure:** A task that is trivial with unlimited time may measure speed rather than understanding.
- **Language:** A task in a learner's second language may measure language proficiency rather than mathematics.

A teacher who interprets a low score as low mathematical understanding without considering these threats risks a false inference. The remedy is to design tasks that isolate the target concept and to interpret scores with awareness of extraneous demands.

## Formative versus summative assessment

Formative assessment is assessment *for* learning: it is used during instruction to adjust teaching and learning. Summative assessment is assessment *of* learning: it is used to evaluate achievement at the end of a unit or course. The distinction is not in the instrument but in its use. The same hinge question can be formative if used to decide the next lesson, or summative if used to compute a grade.

The power of formative assessment lies in using evidence responsively: a teacher elicits current thinking and adjusts instruction while there is still time to help. Evidence about feedback is heterogeneous. The retained source summary of the Education Endowment Foundation's Feedback toolkit page, reviewed in June 2021, reports 155 studies and an average of six months' additional progress, while warning that effects vary widely and may be negative; it treats formative assessment as one component of feedback. That months-of-progress summary is not a standardized effect size for formative assessment itself, and it does not guarantee benefit from any particular routine.

## Common errors in formative assessment

**The speed trap.** A teacher equates quick answers with understanding. A learner who answers slowly may be reasoning carefully, translating, or checking. The repair is to ask "How did you decide?" rather than "Why did it take so long?"

**The average trap.** A teacher looks at the class average and concludes that "most learners understand." The average may hide a bimodal distribution: half the class fully understands and half is lost. The repair is to examine the distribution of responses and to follow up with individuals.

**The grade trap.** A teacher uses formative assessment primarily to assign scores, which shifts learner motivation from understanding to performance. The repair is to separate formative feedback from grading, and to emphasise growth over rank.

## Worked assessment design: choose a value that distinguishes rules

Substitution can refute a proposed algebraic identity with one mismatch. A match at one input does not prove identity. To investigate the distinction, compare the target expression $-(x-3)$ with the candidate $x-3$. At input three both are zero. A learner can use that input correctly and still fail to detect the incorrect proposed identity. At input five the values are negative two and positive two, so the mismatch refutes equivalence on the real numbers.

The coincidence is not mysterious. Solving $-x+3=x-3$ gives $x=3$, the only real input where the two expressions agree. A thoughtfully selected input outside that coincidence set distinguishes them. Compare the candidate $3x$: equality with the target requires $x=3/4$. Input three would distinguish this candidate, but input three quarters would not. There is no single magical “check number” independent of the alternatives under consideration.

For these three affine candidates, one could compare values at two distinct inputs. If two affine expressions agree at two distinct real inputs, subtracting their equality equations forces the slopes equal and then the intercepts equal. That is a proof within the affine class. It does not extend to arbitrary functions: a nonlinear perturbation vanishing at the two checked inputs would agree there and differ elsewhere. The structural premise matters as much as the numerical evidence.

A fictional formative sequence asks learners first to choose a checking input, then explain why it distinguishes the expressions, and finally derive the distributive identity. This sequence separates strategy, counterexample, and universal warrant. A learner who chooses a coincident input has not performed an invalid substitution; they have chosen an uninformative one for the diagnostic comparison. That distinction supports a more precise next question than marking every matching check “correct.”

The proposed decision is to ask for another input when a check is inconclusive and for a general explanation when an identity is claimed. The source reports no classroom use or success rate for that decision. Its mathematical rationale is that falsification by mismatch and proof by a structural argument are different forms of evidence.

## Worked inference design: a correct answer does not identify a unique explanation

Construct a purely hypothetical group of one hundred response records. Assume eighty were generated using a target method and twenty using other routes. Suppose seventy-two of the first group and ten of the second group give the correct option on a particular item. These are invented counts for an inference exercise, not learners observed in a study, and the assumed grouping is not something a teacher could ordinarily know from one item.

There are eighty-two correct responses in total. Of those, seventy-two belong to the target-method group, so the conditional share is seventy-two out of eighty-two, or thirty-six forty-firsts. A correct response is therefore compatible with both groups even under this simplified construction. The ten other-route records could include guessing, a valid alternative strategy, or a coincidental rule; the construction does not distinguish them. Calling every other route “misunderstanding” would already add an unsupported assumption.

Now change only the hypothetical prevalence: twenty target-method records and eighty other-route records, retaining rates of nine tenths and one half correct within the groups. The correct counts become eighteen and forty. Of fifty-eight correct records, only eighteen are target-method records, a share of nine twenty-ninths. The same within-group response rates produce a different interpretation of correctness because the composition of the group changed.

This arithmetic illustrates why diagnostic claims require more than a plausible distractor story. Estimating an actual learner's reasoning from an answer would need justified information about alternative response processes and their prevalence under the relevant conditions. No such estimates are supplied here. The toy calculation should not be used as a classroom probability model or as a reason to assign numerical confidence to a particular learner's understanding.

A practical consequence is to collect an explanation, a changed item, or a representation that can distinguish plausible routes. A valid alternative method should be recognised as mathematical success even if it is not the target method, while any unshown target connection remains unshown. The inference should be stated as narrowly as the evidence permits, with the support conditions recorded.

## Worked decision design: the class mean hides response distributions

Two fictional classes of ten learners each complete a ten-point task. In the first class every score is five. In the second, five scores are zero and five are ten. Both class means are five, because both totals are fifty. The same average corresponds to very different distributions. A decision that assumes a uniform “half-understanding” state from the mean alone is not justified in either class.

Even the individual score is a summary. Five points could come from correct calculations with missing explanations, from strong explanations on half the topics, or from another pattern determined by the scoring rule. Examine which items and warrants were successful before deciding what to revisit. The mathematical target and the aggregation rule determine which distinctions the total has discarded.

Suppose the next lesson requires interpreting a negative sign across parentheses. In the second fictional class, the ten-point aggregate does not show whether the five high scores included that target item or whether partial credit rewarded another skill. Retrieve the relevant response or ask a brief follow-up. In the first class, a uniform total still does not establish uniform needs. The teacher might offer a short whole-class contrast and then vary follow-up tasks based on explanations; that is a proposal requiring later evidence, not a guaranteed consequence of the mean.

A threshold rule such as “move on when eighty percent answer correctly” also needs a rationale. Four out of five correct could conceal a common unaddressed issue in the remaining fifth, and correctness alone may not show the required warrant. The threshold is an operational choice, not a mathematical theorem that learning is sufficient. Explain how learners who need further access or support will still encounter the next material and how the target will be revisited.

The fictional cases are not evidence that grouping learners by scores improves attainment. They show only that different distributions can share an average and that summaries omit information. Responsive instruction must decide what omitted information matters for the immediate mathematical goal.

## Plan the action as explicitly as the question

Before using an item, specify what each broad response pattern would lead the teacher to do. A wrong sign with a correct substitution check might call for reconciling two conflicting representations. A correct answer without an explanation may call for a changed input or an identity argument. A response that names a missing domain condition may justify extending the task rather than repeating the procedure. These are distinct possibilities, not fixed response-to-treatment rules.

Keep feedback actionable and mathematically specific. “Check the sign on the constant term when multiplying by negative one” names a place to inspect; “be more careful” does not identify the mathematical issue. Yet supplying that exact location is a hint, so a later corrected answer is supported performance. Record the distinction if independent selection is part of the goal. Feedback can be useful without pretending that every correction measures unaided mastery.

Repeated work also requires an ethical and interpretive boundary. Classroom records should contain the evidence needed for teaching decisions, not speculative personality diagnoses. Do not treat a study checkmark, willingness to answer publicly, or speed alone as graded evidence of understanding. A teacher can invite the learner's account and provide accessible response modes while preserving the mathematical demand. These proposals are consistent with the inference perspective, but the chapter supplies no new empirical comparison of their effects.

## Practice exercises

### Exercise 1

Design a hinge question comparing how an extreme added value changes the mean, median, and range. Include four options and explain what each distractor reveals.

**Hint 1.** Calculate each measure before designing the options.

**Hint 2.** Treat distractors as possible routes rather than unique diagnoses.

**Solution.**

> The five scores are $60,70,80,90,100$. A sixth score of $0$ is added. Which measure changes most in absolute value?

**A.** Mean *(Distractor: the mean changes from $80$ to $400/6\\approx66.67$, about $13.33$.)*

**B.** Median *(Distractor: it changes from $80$ to $(70+80)/2=75$, a change of $5$.)*

**C.** Range *(Correct: it changes from $100-60=40$ to $100-0=100$, a change of $60$.)*

**D.** All measures change equally *(Distractor: learners who do not distinguish the measures.)*

### Exercise 2

A learner solves $2(x+3)=14$ by dividing both sides by $2$ to get $x+3=7$, then subtracting $3$ to get $x=4$. On a subsequent problem, $2(x+3)+5=19$, the learner writes $x+3+5=9.5$ and gets stuck. Diagnose the error and design a formative assessment that would have caught it earlier.

**Hint 1.** Division of an equation applies to the whole side.

**Hint 2.** A valid first step need not follow one preferred operation order.

**Solution.** The learner divided only the product term and the right side, while leaving $5$ unchanged. Division must apply to every term: dividing the equation by $2$ gives $x+3+5/2=19/2$. Subtracting $5$ first is also valid and often cleaner, but it is not the only valid first step. The error concerns equivalence and distribution of division, not a required operation order.

A formative assessment that would catch this earlier might present a sequence: $2(x+3)=14$, then $2(x+3)+1=15$, then $3(x+2)-4=11$. After each problem, ask: "What did you do first, and why?" This reveals whether the learner is attending to structure or applying a memorised sequence.

### Exercise 3

Explain why a multiple-choice item with the options "always, sometimes, never" can be more diagnostically powerful than a computation item for assessing conceptual understanding.

**Hint 1.** A selected category alone is insufficient.

**Hint 2.** Require both an example where the claim holds and a warrant for its condition.

**Solution.** A computation item supplies evidence about an execution on that task, while an “always, sometimes, never” item can investigate a claim's domain if it also requests a warrant. Selecting the category alone may be guessed and does not establish the reasoning. For example: "Is $(a+b)^{2}=a^{2}+b^{2}$ always, sometimes, or never true?" To justify “sometimes,” the learner must identify the conditions under which it holds ($ab=0$) and the conditions under which it fails. This reveals conceptual understanding of the distributive property and the role of the cross term $2ab$. A computation item such as "Expand $(3+4)^{2}$" does not reveal whether the learner knows why the middle term matters.

### Exercise 4

A teacher gives a timed quiz and finds that several learners who usually perform well scored poorly. List three validity threats that might explain the discrepancy, and suggest how to test each.

**Hint 1.** Change one administration feature at a time where feasible.

**Hint 2.** A comparison can investigate a hypothesis without proving a unique cause.

**Solution.**

1. **Time pressure:** The learners understood the material but could not work fast enough. Test by giving an untimed version of the same quiz and comparing scores.

2. **Test anxiety:** The timed, graded format triggered anxiety that interfered with reasoning. Test by administering a parallel quiz in a low-stakes, ungraded format.

3. **Misalignment:** The quiz tested procedures that were not the instructional focus. Test by comparing the quiz items to the stated learning goals and asking whether the items require knowledge not taught.

### Exercise 5 {#formative-assessment-exercise-5}

Find every real input at which $-(x-3)$ and $x-3$ agree. Explain why choosing that input is an inconclusive identity check.

**Hint 1.** Equate the two expressions and solve.

**Hint 2.** One matching value is not agreement for all values.

**Solution.** Expanding gives $-x+3=x-3$, so $2x=6$ and the only coincidence is three. At that input both expressions are zero. The substitution is correct, but it cannot distinguish the rules. At five their values are negative two and positive two, refuting the proposed identity. A matching instance supports that instance only; the distributive law establishes the actual identity $-(x-3)=-x+3$ for every real input. Feedback should distinguish a poor choice of checking input from invalid arithmetic.

### Exercise 6 {#formative-assessment-exercise-6}

Prove that two affine real functions agreeing at two distinct inputs are identical. Explain why the same two-point argument fails without the affine premise.

**Hint 1.** Subtract the two equations of agreement.

**Hint 2.** A nonlinear added factor can vanish at both checked inputs.

**Solution.** Write the functions as $mx+b$ and $nx+c$. Agreement at distinct inputs $r,s$ yields $(m-n)r+(b-c)=0$ and the same at $s$. Subtraction gives $(m-n)(r-s)=0$. Since $r-s$ is nonzero, $m=n$, then $b=c$. Without the affine premise, add $(x-r)(x-s)$ to either rule. It vanishes at the two inputs but is nonzero elsewhere. The structural class supplies the warrant, so an assessment should record that premise rather than treating two successful substitutions as a universal identity method.

### Exercise 7 {#formative-assessment-exercise-7}

In a constructed set of response records, sixty target-route records include fifty-four correct answers, and forty other-route records include twenty correct answers. Find the share of correct answers coming from the target route and state why this is not an empirical diagnostic estimate.

**Hint 1.** Condition on the total correct count, not the full population.

**Hint 2.** The route labels and frequencies were assumed.

**Solution.** There are seventy-four correct answers, of which fifty-four are target-route records. The share is twenty-seven thirty-sevenths. This is exact arithmetic within an invented construction. It estimates no actual classroom rate because the frequencies, route labels and conditional response counts were supplied rather than observed and justified. Other routes may also be valid mathematics. The example demonstrates compatibility of correctness with multiple processes; it does not license assigning that numerical probability to a learner's understanding.

### Exercise 8 {#formative-assessment-exercise-8}

Construct two four-learner score distributions with mean five on a ten-point task, one uniform and one maximally split. Explain one further distinction the totals still hide.

**Hint 1.** Both totals must be twenty.

**Hint 2.** Equal totals can come from different item-level performances.

**Solution.** The uniform distribution is five, five, five, five. The split distribution is zero, zero, ten, ten. Both total twenty and have mean five. Even an individual five can represent correct calculations without explanations or complete work on only part of the content. A decision about the negative-sign target needs the relevant response and warrant, not the mean alone. These distributions are fictional mathematical examples and supply no evidence that a particular grouping or instructional response improves outcomes.

### Exercise 9 {#formative-assessment-exercise-9}

A learner corrects an equation after the teacher points to the exact un-divided term. What should be recorded, and what follow-up could investigate independent use of equivalence?

**Hint 1.** The correction is supported performance.

**Hint 2.** Vary the equation without supplying the error location.

**Solution.** Record the original response, the teacher's location-specific hint, the corrected transformation, and the learner's explanation of dividing the whole side. The correction is valid evidence of work with that support. A changed equation, with accessible notation but no pointed term, can investigate whether the learner independently preserves equivalence. Its result should be recorded under its own conditions. Neither one supported correction nor one later success establishes every algebraic transformation skill, and neither identifies the causal effect of the hint without a suitable empirical design.

### Exercise 10 {#formative-assessment-exercise-10}

A teacher plans to move on if eighty percent select the correct option. Identify two unshown assumptions and propose a more explicit action plan.

**Hint 1.** Correctness need not establish the intended warrant.

**Hint 2.** The remaining learners still need access to later work.

**Solution.** The rule assumes that selection measures the relevant understanding and that the chosen share is sufficient for the next task's prerequisites. Neither follows mathematically from eighty percent. Ask a brief explanation or contrast where plausible routes differ, identify the unresolved mathematical issue, and plan how the next activity can revisit it with supports. State what evidence will trigger a whole-class clarification versus individual follow-up. This makes the decision inspectable without claiming a universally optimal threshold or treating those who answered incorrectly as barred from further mathematics.

## Looking backward and forward

The previous chapter, *Proof teaching coordinates examples and necessity*, showed how to establish mathematical certainty. Formative assessment is the mechanism by which a teacher determines whether learners have reached that certainty---or any other goal. The next chapter, *Teacher mathematical knowledge is specialised*, examines the mathematical demands of teaching itself: the knowledge required to interpret learner responses, choose representations, and repair misconceptions.
`;export{e as default};