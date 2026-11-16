
# Audit a mathematical technology by its affordances

**Before reading.** Read [Functions, Domains, and Graphs](#/books/algebra-and-functions/functions-domain-graphs).

“Uses technology” is not an instructional design. A graphing system, dynamic geometry construction, computer algebra tool, simulation, video, or AI interface can make some mathematical actions easier, some feedback faster, and some errors harder to notice. This recipe evaluates that **affordance chain** without treating novelty or screen time as evidence of learning.

The output is a short audit with a bounded trial plan. It is not a product endorsement, a privacy review by counsel, or a claim that one tool works for every learner.

## The audit in one line

```text
mathematical goal -> learner action -> system response -> interpretation -> evidence
                         |                 |
                    access cost       hidden assumptions
```

If an auditor cannot fill every arrow, the tool's role is still underspecified.

## Step 1: Write the mathematical target without the tool

Use a statement that could be assessed independently:

- weak: “Students will explore sliders.”
- stronger: “Students will predict and justify how changing $m$ and $b$ affects the graph of $y=mx+b$, distinguishing slope from vertical intercept.”

Name prerequisite knowledge and the grain of the intended outcome. Is the goal an observation, a conjecture, a proof, a fluent procedure, a model, or transfer to a new representation? A tool that is excellent for generating conjectures may provide no proof.

## Step 2: Inventory the learner's mathematical actions

Record verbs, not features. Does the learner:

- construct, drag, calculate, code, classify, annotate, predict, compare, or explain;
- choose inputs or merely press “next”;
- see an invariant across cases or only a polished final object;
- externalize intermediate reasoning;
- recover from an error without restarting?

Then name what the system does on the learner's behalf. Automatic scaling, simplification, snapping, answer checking, regression, or theorem lookup can free attention for another target. It can also remove the very decision the task was meant to reveal.

## Step 3: Trace representations and invariants

List each representation—symbolic, graphical, numerical, verbal, geometric,
sonified, tactile—and the exact relation the learner must make between them.

For a dynamic triangle, dragging can make an invariant visible across many
instances. But the screen still shows finitely many instances and numerical
rounding may conceal exceptions. The audit must distinguish:

1. **generated evidence:** what cases the tool displays;
2. **conjecture:** the regularity the learner proposes;
3. **mathematical justification:** the argument that covers all allowed cases.

Write down hidden conventions: angle units, window bounds, numeric precision,
random seeds, default domain, whether an object is constrained or merely drawn
to look constrained, and what happens at undefined inputs.

## Step 4: Inspect feedback, including wrong states

Good feedback is timely only if it points attention to the intended structure.
For every expected error, record:

| Learner state | Tool response | Information revealed | Possible bad inference |
| --- | --- | --- | --- |
| changes $b$, predicts a rotation | graph translates | intercept changes every output equally | “the graph moved, so I am done” |
| enters an undefined expression | warning or gap | domain restriction matters | “the software is broken” |
| gives equivalent unsimplified form | exact equivalence check | form and value can differ | “only the tool's form is correct” |

Avoid feedback that collapses reasoning to green/red. Ask whether the learner
can inspect a counterexample, revise a prediction, and explain the repair.

## Step 5: Run an access and participation pass

The mathematical target should survive more than one input or output channel.
Check:

- keyboard completion of every essential action;
- visible labels and programmatic names for controls;
- text or numerical alternatives for plots, animations, color, and sound;
- zoom, contrast, reflow, and reduced-motion behavior;
- alternatives to precise dragging, rapid response, or sustained pointer use;
- language load and symbol pronunciation;
- saved work, low-bandwidth/offline constraints, account requirements, and
  shared-device conditions.

Multiple representations are useful when their connections are designed; they
are not useful merely because the screen is busy. The CAST UDL Guidelines are
a design framework for considering engagement, representation, and action or
expression. They do not by themselves demonstrate that a particular lesson
causes a particular learning outcome.

## Step 6: Audit data, automation, and authority

Before classroom use, document what data leave the device, who can access them,
retention and deletion controls, age/account constraints, and whether a learner
can complete the mathematical task without exposing unnecessary information.
Follow the applicable institutional and legal process rather than treating this
recipe as approval.

If the tool generates solutions, hints, classifications, or natural-language
explanations, sample adversarial and boundary cases. Record:

- whether output is deterministic;
- when the system refuses, guesses, or silently changes notation;
- how a learner checks a claim independently;
- whether the interface blurs generated suggestion and established result;
- what teacher monitoring is feasible at the intended scale.

Automation is an object of audit, not a mathematical authority.

## Step 7: Design a bounded comparison

Do not begin with “Did students like it?” Choose observable evidence aligned to
the target. A modest classroom trial can use:

1. one pre-task that does not require the tool;
2. a saved trace of predictions, actions, and revisions during use;
3. one near-transfer task in a changed representation;
4. one delayed or independent explanation if feasible;
5. access notes and missing-data reasons;
6. a decision rule stated before inspecting results.

A simple before/after comparison, without a defensible counterfactual design,
reliable measurement, and analysis matched to the assignment or observation
structure, does not isolate the tool's causal effect. Random assignment is one
route; justified quasi-experimental assumptions are another. The observed
change may still support a local design decision if the claim remains
descriptive and contextual.

## Worked audit: a slope-intercept slider

### Worked example: distinguish parameter manipulation from explanation

**Target.** Learners distinguish how $m$ and $b$ affect $y=mx+b$ and explain
the changes using two points, not appearance alone.

**Action.** Predict, move one parameter while holding the other fixed, inspect
a value table and graph, select two points, compute rise/run, then explain.

**Affordance.** Linked table and graph update immediately, permitting many
controlled comparisons. Locking one parameter supports variation of one
quantity at a time.

**Risk.** Automatic graph rescaling can make different slopes look similar.
Dragging may replace prediction, and a nearly vertical display can invite the
false idea that a line's slope is infinite merely because it looks steep.

**Repair.** Fix the viewing window during the comparison; require a prediction
before enabling a slider; provide keyboard increments and numeric entry; show
the two selected coordinates and the exact quotient; include a text table as a
complete alternative.

**Evidence.** Use a paper or accessible-text transfer task with a new line and
ask the learner to predict parameter changes without the slider. Report the
population, lesson duration, missing responses, rubric, and uncertainty. Do
not claim that “dynamic tools improve algebra” from this single trial.

## A reusable audit record

```text
Mathematical target:
Prerequisites:
Learner actions:
Automated actions:
Representations and required connections:
Invariants and domain boundaries:
Expected wrong states and feedback:
Keyboard/text/numerical alternatives:
Data and account flow:
Independent checking method:
Trial population and setting:
Outcome measure and decision rule:
Claim permitted by the evidence:
Claim explicitly not permitted:
```

## Common audit failures

**Starting with a brand name.** Begin with the mathematical target; products
change faster than the underlying design question.

**Counting cases as proof.** Dynamic evidence can motivate a conjecture but
cannot replace a general argument.

**Calling access a later accommodation.** If an essential action has no
keyboard or nonvisual route, the mathematical task was not fully specified.

**Using engagement as a synonym for learning.** Time, clicks, or favorable
comments may be useful process evidence. They are not automatically evidence of
mathematical understanding or transfer.

**Quoting an average without its setting.** A study of one intervention, age
range, comparison, and outcome does not establish a universal effect of a
technology category.

## Transfer practice: audit an automatic equation solver

### Exercise 1
<a id="mathematics-education-technology-affordance-audit-ex-1"></a>

Audit a tool that solves quadratic equations and displays a graph. Use the
target “connect factorization, roots, and x-intercepts while preserving domain
and multiplicity.” Run at least these inputs:

- $x^2-5x+6=0$, with two distinct real roots;
- $(x-2)^2=0$, with a repeated root;
- $x^2+1=0$, first over the reals and then over the complexes;
- $0x^2+2x-4=0$, where the advertised quadratic input degenerates.

Record what the learner must do, what the tool does automatically, how it
labels the number system, and whether the graph alone communicates
multiplicity. Design keyboard and text routes for every essential action.
Finally write one transfer item that withholds the tool and asks the learner to
explain why a root has multiplicity two.

A complete audit does not score the interface by preference. It supplies an
action inventory, a representation map, one wrong-state feedback trace, an
access check, and a bounded comparison whose outcome could challenge the
claim that the tool supports conceptual connection.

<details><summary>Hint 1</summary>

Solve the four equations independently before deciding what the interface must reveal.

</details>
<details><summary>Hint 2</summary>

A real graph's x-intercepts cannot display complex roots as real intercepts.

</details>
<details><summary>Solution</summary>

The first polynomial factors as $(x-2)(x-3)$ and has two real intercepts.
The second has only root 2, with multiplicity two; it touches the axis there
and keeps the same sign on either side. The third has no real roots and
complex roots $i,-i$, which must not be represented as real x-intercepts.
The fourth is linear, giving $x=2$; a quadratic routine must detect the zero
leading coefficient before dividing by it.

Require text input for coefficients and domain, keyboard alternatives to graph
manipulation, and a table of factors, roots and multiplicities. A wrong-state
trace can start with the claim that the repeated root is two distinct
intercepts; feedback should connect the single coordinate 2 to the repeated
factor, rather than merely show an error colour. An independent transfer item
is $(x+1)^2=0$: the learner should explain that the factor occurs twice but
the root coordinate is only $-1$. Correct responses on these cases show local
mathematical use; a conceptual-learning effect requires a stated comparison
and outcome, not a preference rating for the tool.

</details>

### Exercise 2
<a id="mathematics-education-technology-affordance-audit-ex-2"></a>

A slider displays fifty examples satisfying a claimed identity. What should
the learner do before calling it a proof?

<details><summary>Hint 1</summary>

Identify the variable's full domain and whether the displayed values exhaust it.

</details>
<details><summary>Hint 2</summary>

A general symbolic argument can cover inputs that the slider never displayed.

</details>
<details><summary>Solution</summary>

State the identity, domain and exceptional values, then derive the equality
for an arbitrary allowed input using justified transformations. Fifty cases
over an infinite domain are evidence for a conjecture, not exhaustive coverage.
If the actual domain is finite, exhaustive enumeration can be a proof only
after completeness and exactness are established. A useful tool asks learners
to explain the invariant relation and supplies accessible exact data rather
than treating the number of clicks as mathematical justification.

</details>

## Evidence and source scope

CAST's official UDL Guidelines version 3.0 organize design considerations
around multiple means of engagement, representation, and action/expression.
This recipe uses them as accessibility and participation prompts, not as an
effect-size claim. [CAST UDL Guidelines](https://udlguidelines.cast.org/)
(accessed 2026-08-31).

The NCTM *Principles to Actions* executive summary frames mathematical tools
and technology as resources to help learners make sense of ideas. It is a
professional guidance document, not a controlled evaluation of any named
product. [NCTM executive summary](https://www.nctm.org/uploadedFiles/Standards_and_Positions/PtAExecutiveSummary.pdf)
(accessed 2026-08-31).

Jiang, White, and Rosenwasser reported initial analyses from randomized
classroom assignment in a particular high-school dynamic-geometry approach,
with geometry achievement as the reported outcome. That study illustrates how
an intervention, comparison, population, and outcome can be named. It does not
license the generic claim that dynamic software, all technology, or every
implementation improves learning. [Primary article and DOI](https://doi.org/10.7916/jmetc.v2i2.718)
(accessed 2026-08-31).
