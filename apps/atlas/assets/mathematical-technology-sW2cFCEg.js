var e=`---
parent_id: book-mathematics-teaching-learning-evidence-reader
chapter_id: mathematical-technology
title: "Technology as a Mathematical Instrument"
level: undergraduate
estimated_minutes: 650
license: CC BY-SA 4.0
---

# Technology as a mathematical instrument

A calculator, dynamic construction, spreadsheet, simulation, proof assistant, or generative system is not a pedagogy. It is an environment that redistributes mathematical work among learner, interface, and machine. The central audit is:

\`\`\`text
goal -> learner action -> system action -> visible result -> learner interpretation -> evidence
\`\`\`

At every arrow, ask what is exposed, automated, constrained, or concealed. This chapter evaluates classes of tools rather than endorsing products. Interfaces, policies, prices, models, and privacy terms change; inspect the actual version in the actual setting.

## 1. Start tool-free

Write a mathematical target that does not name the tool.

- Weak: "Use sliders to explore lines."
- Stronger: "Predict and justify the separate effects of $m$ and $b$ in $y=mx+b$, connecting symbolic change, a table of values, and geometric slope/intercept."

Now assign labor:

| Decision or action | Learner | Machine | Risk |
| --- | --- | --- | --- |
| choose $m,b$ to test a prediction | yes | no | random trials without prediction |
| compute plotted pixels | no | yes | window and resolution hidden |
| relate $m$ to constant first differences | intended | displays values | pattern noticed but not justified |
| explain why changing $b$ adds the same amount to every output | yes | may format response | generated wording mistaken for understanding |

Automation can be useful when it frees attention for the stated target. It undermines assessment when it performs the very work being assessed. A computer algebra system can automate expansion while learners compare structure; its output alone cannot be evidence of a learner's expansion fluency if the machine performed every transformation.

## 2. Dynamic geometry: dragging creates cases, not proof

Construct triangle $ABC$. Let $D$ and $E$ be midpoints of $AB$ and $AC$; draw $DE$. Drag the vertices. A dynamic system may keep $DE$ visually parallel to $BC$ and report $DE/BC=0.5$ over many cases.

### What the tool can reveal

- an invariant survives continuous changes in shape;
- degenerate or near-degenerate cases can be sought;
- measurements can suggest the exact ratio;
- constrained objects differ from drawings that only look constrained.

### What remains mathematical work

Dragging gives finitely many rendered cases at finite precision. A proof must cover every nondegenerate triangle allowed by the statement. With vectors, let position vectors be $a,b,c$. Then

\\[
d=\\frac{a+b}{2},\\qquad e=\\frac{a+c}{2},
\\]

so

\\[
e-d=\\frac{c-b}{2}.
\\]

Thus segment $DE$ has a direction vector one half of $BC$; it is parallel and half as long. The tool generated a conjecture and cases. The vector argument establishes the theorem.

### Worked lesson design

1. Learners construct or receive a correctly constrained figure.
2. Before dragging, they predict which relations will remain invariant.
3. They seek a counterexample, including thin triangles.
4. They classify claims as "observed so far," "conjectured," or "proved."
5. They write a vector, similarity, or coordinate proof.
6. They inspect a fake construction where $D$ merely looks like a midpoint; dragging exposes the missing constraint.

Teaching conjecture: contrasting constrained and appearance-only constructions will foreground dependence on definitions. Evidence: explanations before and after the contrast, not the quantity of dragging.

## 3. Locus and construction dependencies

A second dynamic geometry theorem illustrates the cases-versus-proof distinction more sharply. Construct a segment with distinct endpoints $A\\ne B$ and a point $P$ such that $PA=PB$. Dragging $P$ traces the perpendicular bisector of $AB$.

### What the tool shows

The locus of points equidistant from $A$ and $B$ appears as a line perpendicular to $AB$ through its midpoint. The software may label this as the "perpendicular bisector" and offer it as a construction tool.

### What a proof requires

The claim has two parts. First, every point on the perpendicular bisector of $AB$ is equidistant from $A$ and $B$. Let $M$ be the midpoint of $AB$ and let $P$ lie on the line through $M$ perpendicular to $AB$. If $P=M$, then $PA=MA=MB=PB$. Otherwise triangles $PMA$ and $PMB$ are right triangles with sides $PM$ shared and $AM=BM$; SAS makes them congruent, so $PA=PB$. Second, every point equidistant from $A$ and $B$ lies on the perpendicular bisector. If $P=M$, this is immediate. Otherwise $PA=PB$ makes triangle $PAB$ isosceles; the median from $P$ to $AB$ is also an altitude, so it meets $AB$ at $M$ and is perpendicular to $AB$. Thus $P$ lies on the perpendicular bisector. The tool traces cases; the proof establishes a biconditional for every plane point when $A\\ne B$.

### Dependency audit

In a dynamic construction, the perpendicular bisector may be defined as a locus (all points satisfying $PA=PB$) or as a macro (line through midpoint perpendicular to segment). If the macro is used to prove the locus property, the argument is circular. Learners should identify which definition is primitive and which is derived.

## 4. Graphs: windows are part of the claim

A graph is a sampled, scaled representation. For

\\[
f(x)=\\frac{x^2-1}{x-1},
\\]

automatic simplification may display the line $y=x+1$ while concealing that the original function is undefined at $x=1$. An accessible numerical alternative is a table near the hole:

| $x$ | original expression | simplified expression |
| ---: | ---: | ---: |
| 0.9 | 1.9 | 1.9 |
| 1 | undefined | 2 |
| 1.1 | 2.1 | 2.1 |

Ask learners to record domain, window, scale, sampling density, angle unit, rounding, and whether the software plots a simplified form. A polished curve is not an exact mathematical object.

**Aliasing example.** Sampling $\\sin(100x)$ only at multiples of $2\\pi/100$ returns zero every time. The table can falsely suggest the zero function. Change sampling points and prove the actual range. This demonstrates why computational evidence includes a sampling design.

## 5. Spreadsheets as mathematical instruments

A spreadsheet cell is a variable. A formula is a function definition. The grid enforces a visual syntax that can support or obscure mathematical reasoning.

### Relative and absolute references as substitution

In cell B2, the formula \`=A2^2\` uses a relative reference: copied down, it becomes \`=A3^2\`, \`=A4^2\`, and so on. This is iterated substitution. An absolute reference such as \`$A$1\` remains fixed; it behaves like a constant parameter. Teaching conjecture: asking learners to predict the result of copying a formula before executing it may strengthen their understanding of variable binding.

### Fill-down as recursion

A column that computes factorials can be built by placing \`1\` in C1 and \`=C1*A2\` in C2, then filling down. Each row refers to the previous row. This is a recursive definition unfolded into iteration. The mathematical object is the recurrence $a_n = n \\cdot a_{n-1}$ with $a_1 = 1$; the spreadsheet computes values without exposing the closed form. Learners can conjecture the closed form and prove it by induction.

### Circular references and fixed points

A circular reference occurs when a formula refers to its own cell, directly or indirectly. Some spreadsheet systems can iterate circular references to convergence. If cell D1 contains \`=(D1+2/D1)/2\` starting from 1, successive iterations approximate $\\sqrt{2}$. This is the Babylonian method, a special case of Newton's method. The fixed point satisfies $x = (x + 2/x)/2$, which simplifies to $x^2 = 2$. The spreadsheet iterates; the proof of convergence requires showing the sequence is bounded and monotone, or appealing to the contraction mapping theorem for this interval.

## 6. Computer algebra systems: equivalence, domains, and audits

A computer algebra system (CAS) manipulates symbolic expressions. Its output is only as valid as the conventions and domain assumptions built into its simplification rules.

### Equivalence versus equality

The expressions $(x^2-1)/(x-1)$ and $x+1$ are equal where both are defined, but they are not identical: their domains differ. A CAS that simplifies the first to the second may drop the domain restriction silently. Teaching conjecture: requiring learners to state the domain before and after simplification may reduce overgeneralization.

### Domains of validity

The identity $\\sqrt{x^2} = x$ is false for negative $x$; the correct identity is $\\sqrt{x^2} = |x|$. A CAS may return the simpler form under an assumption such as $x \\geq 0$. If the assumption is hidden, the result is mathematically incomplete. Always ask: under what conditions on the variables does this transformation preserve equivalence?

### Simplification conventions

Different systems choose different canonical forms. One may prefer $(x+1)(x-1)$; another may expand to $x^2-1$. Neither is "simpler" without a purpose. In assessment, a CAS-autograded answer that enforces one canonical form may mark equivalent expressions incorrect. The mathematical error is conflating canonical form with equivalence.

### Worked CAS-audit lesson

**Problem:** A CAS reports that $\\int_{-1}^{1} \\frac{1}{x^2}\\,dx = -2$. Verify or refute.

**Audit steps:**
1. The integrand $1/x^2$ is undefined at $x=0$, which lies inside $[-1,1]$. The integral is improper.
2. Split at the singularity: $\\int_{-1}^{0} + \\int_{0}^{1}$.
3. Compute $\\lim_{a \\to 0^-} \\int_{-1}^{a} x^{-2}\\,dx = \\lim_{a \\to 0^-} [-x^{-1}]_{-1}^{a} = \\lim_{a \\to 0^-} (-1/a - 1) = +\\infty$.
4. Since one side diverges, the whole integral diverges. The CAS result of $-2$ is incorrect; it likely applied the antiderivative rule without checking the singularity.

**Teaching point:** a CAS performs symbolic manipulation; it does not automatically verify hypotheses. The learner must check continuity on the interval, domain of the integrand, and behavior at singularities.

## 7. Numerical solvers and root finding

A numerical solver for $f(x)=0$ returns an approximate value $x^*$ such that $|f(x^*)|$ is small. What the solver certifies is a small residual, not necessarily a small error.

### Residual versus error

The residual is $f(x^*)$. The error is $|x^* - r|$ where $r$ is the true root. Near a multiple root, a small residual can accompany a large error. Near a steep root, a large residual can accompany a small error. The solver's output must be interpreted with the derivative or local Lipschitz constant in mind.

### Worked exact computation

Solve $x^2 - 2 = 0$ numerically. The Babylonian iteration $x_{n+1} = (x_n + 2/x_n)/2$ with $x_0 = 1$ gives:

| step | $x_n$ | residual $|x_n^2 - 2|$ |
| ---: | ---: | ---: |
| 0 | 1.000000 | 1.000000 |
| 1 | 1.500000 | 0.250000 |
| 2 | 1.416667 | 0.006944 |
| 3 | $577/408\\approx1.414215686$ | $1/166464\\approx0.000006007$ |

The exact root is $\\sqrt{2} \\approx 1.414213562$. At step 3, the exact residual is $1/166464\\approx6.007\\times10^{-6}$ and the error is about $2.124\\times10^{-6}$. Because $f'(x)=2x\\approx2.83$ near the root, the error is roughly the residual divided by $2.83$. The solver exhibits rapid convergence on these iterates; a convergence proof supplies the hypotheses under which Newton errors square near the root.

## 8. Programming externalizes a process

Code can expose state, iteration, invariant, and error. Consider Euclid's algorithm:

\`\`\`text
while b != 0:
    (a, b) = (b, a mod b)
return abs(a)
\`\`\`

The mathematical invariant is $\\gcd(a,b)=\\gcd(b,a \\bmod b)$. Termination follows because, for positive $b$, the remainder lies in $\\{0,...,b-1\\}$. Running examples can reveal bugs, but correctness needs invariant plus termination.

### Trace before run

For $(a,b)=(84,30)$:

| step | $a$ | $b$ | invariant gcd |
| ---: | ---: | ---: | ---: |
| 0 | 84 | 30 | 6 |
| 1 | 30 | 24 | 6 |
| 2 | 24 | 6 | 6 |
| 3 | 6 | 0 | 6 |

Ask learners to predict the next state before execution and explain why the gcd is preserved. If syntax is not the goal, provide runnable code, blocks, a trace table, or cards representing states. A screen-reader-compatible textual trace can carry the same information as an animation.

### Loop invariants beyond gcd

Consider summing the first $n$ positive integers:

\`\`\`text
s = 0
k = 1
while k <= n:
    s = s + k
    k = k + 1
\`\`\`

The invariant is: after each iteration, $s = \\sum_{i=1}^{k-1} i$. Initialization gives $s=0$ and $k=1$, so the sum from 1 to 0 is 0. Maintenance: adding $k$ to $s$ and incrementing $k$ preserves the invariant. At termination, $k=n+1$, so the invariant proves that the program returns $s=\\sum_{i=1}^{n}i$. The closed form $\\sum_{i=1}^{n}i=n(n+1)/2$ is a separate arithmetic identity, proved for example by induction. Combining those two results establishes the displayed formula for the returned value.

### Testing versus proof

A test checks specific inputs and outputs. A proof covers all inputs in the stated domain. Testing can detect bugs; it cannot guarantee absence of bugs unless the input space is exhaustively enumerable and the test suite covers it. In education, testing is a valuable activity that can motivate the need for proof, but it is not a substitute.

## 9. Simulation estimates a model, not reality

To estimate the probability of at least one six in four independent fair rolls, a simulation repeats:

1. generate four integers uniformly in $\\{1,...,6\\}$;
2. record 1 if any equals 6, otherwise 0;
3. average indicators.

The exact model probability is

\\[
p=1-(5/6)^4\\approx0.5177.
\\]

For $n$ independent simulated repetitions with indicator mean $\\hat p$, the Monte Carlo standard error is approximately

\\[
\\sqrt{\\hat p(1-\\hat p)/n}.
\\]

At $n=10,000$ and $\\hat p=0.520$, this is about $0.005$. More repetitions reduce Monte Carlo error, not model error. A biased random generator, dependence, an incorrect event, or an unrealistic fair-die assumption remains.

Require a seed for reproducibility, inspect pseudocode, compare with an exact case, and report run count and uncertainty. Do not teach "the computer proved the probability."

### The law of large numbers as warrant

The weak law of large numbers states that for independent, identically distributed random variables $X_1, X_2, \\dots$ with mean $\\mu$ and finite variance, the sample mean $\\bar{X}_n$ converges in probability to $\\mu$: for every $\\epsilon > 0$,

\\[
\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\geq \\epsilon) = 0.
\\]

This is the mathematical result that licenses Monte Carlo estimation. It does not say that $\\bar{X}_n$ equals $\\mu$ for any finite $n$, nor that the next batch of simulations will be closer. It says that large deviations become unlikely as $n$ grows.

### Convergence rate

The standard deviation of $\\bar{X}_n$ is $\\sigma/\\sqrt{n}$. To halve the Monte Carlo error, quadruple the sample size. At $n=1,000,000$ and $\\hat p = 0.518$, the standard error is approximately $0.0005$. The convergence rate $1/\\sqrt{n}$ is slow compared to deterministic methods; its value is flexibility, not speed.

### Constructed seed and uncertainty illustration

The following values are deliberately constructed to illustrate how a report
should separate seeds, run counts, estimates, and Monte Carlo uncertainty. They
are not presented as an execution log; a real report must name and archive its
generator and runnable command.

| seed | $n$ | $\\hat p$ | approximate standard error | 95% interval (approximate) |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 10,000 | 0.520 | 0.0050 | $0.520 \\pm 0.010$ |
| 2 | 10,000 | 0.515 | 0.0050 | $0.515 \\pm 0.010$ |
| 1 | 1,000,000 | 0.5178 | 0.0005 | $0.5178 \\pm 0.0010$ |

Both seeds at $n=10,000$ produce intervals that contain the exact value $0.5177$. A seed change alone should not change the modeled estimand; if it does, the generator or event definition is suspect.

## 10. Automated feedback and generated responses

Green/red answer checks can be fast but under-informative. For $2(x+3)=2x+6$, a system should distinguish:

- an equivalent expression in a different form;
- a non-equivalent answer with a distributive error;
- a correct expression accompanied by invalid reasoning;
- a response the parser cannot interpret.

Useful feedback gives the learner agency: compare a counterexample, inspect an intermediate step, revise a claim, or request a hint. It does not infer a stable misconception from one keystroke.

Generative systems can produce examples, hints, code, diagrams, and fluent explanations, but fluency is not a correctness certificate. Validate every theorem hypothesis, computation, citation, accessibility description, and supposed learner diagnosis. Do not submit identifiable learner work unless authorization, contract, policy, and informed expectations allow it. UNESCO's guidance on generative AI in education emphasizes human-centered governance, privacy, and age-appropriate use; it is policy guidance, not evidence that a particular tool improves learning.

### Verification protocol for a generated solution

1. Restate the problem and domain.
2. Check each algebraic or logical implication independently.
3. Test boundary and counterexamples.
4. Verify cited sources at their originals.
5. Mark any claim supported only by generated text as unverified.
6. Require the learner to explain or reconstruct the decisive step without the output.

### Worked example: catching a fabricated citation

A generative system produces the following "proof" that every even integer greater than 2 is the sum of two primes:

> "This follows from the Goldbach-Euler theorem (Goldbach, 1742), which was proved by Ramanujan (1918) using modular forms."

**Audit:**
1. The Goldbach conjecture is an unsolved problem in number theory. It is not a theorem.
2. An [Oxford Mathematical Institute overview](https://www.maths.ox.ac.uk/node/30003) classifies the Goldbach conjecture as unsolved; the generated attribution does not identify a verifiable proof.
3. The citation "Goldbach, 1742" points to the historical conjecture rather than a proof, while the unsupported "Ramanujan, 1918" proof citation is fabricated or misattributed.
4. The implication "it was proved" is false. The claim is unverified and should be rejected.

**Teaching point:** a generative system can produce plausible-sounding but false citations. Step 4 of the verification protocol (verify cited sources at their originals) is essential. Do not accept a citation because it is formatted correctly; check the source.

## 11. Accessibility is mathematical fidelity

An alternative must preserve the information and action needed for the goal, not merely announce that a graphic exists.

For a function plot, provide:

- domain and range window;
- a structured value table;
- intercepts, extrema, discontinuities, and end behavior in text;
- keyboard-accessible parameter entry rather than drag-only controls;
- named controls and visible focus;
- a reduced-motion or stepwise mode;
- status updates that do not rely only on color.

For a geometry construction, offer coordinates, incidence and constraint lists, a textual change log, and numeric invariants. For sonification, also provide a visual/textual route. W3C's WCAG 2.2 is a testable web accessibility standard; conformance improves access but does not guarantee every learner can access the mathematical relation, so test with users and the actual task.

## 12. The full adoption audit

Before use, complete this record:

1. **Goal:** exact mathematical performance expected.
2. **Affordance:** action the tool makes possible or easier.
3. **Automation:** reasoning or labor transferred to the system.
4. **Hidden conventions:** domain, precision, defaults, training data, or constraints.
5. **Evidence:** tool-independent performance showing the intended learning.
6. **Failure state:** likely wrong input and informative response.
7. **Access:** keyboard, text/numeric alternative, contrast, motion, language, device, bandwidth.
8. **Data:** fields collected, recipients, retention, deletion, account and age requirements.
9. **Fallback:** equivalent no-account or no-device route.
10. **Stop condition:** harm, inaccessibility, unreliable output, or failure to expose the target.

**Research boundary.** A systematic review and meta-analysis by Rakes and colleagues reported small average associations/effects for mathematics achievement and orientation in its selected educational-technology literature, while publication-bias and clustering adjustments materially changed estimates and much included work emphasized procedures. That finding argues against both "technology always works" and "technology never works." Tool, task, pedagogy, outcome, comparison, and implementation define the claim.

## Exercises

1. In a computer algebra lesson on factoring, divide work between learner and machine so structural reasoning remains assessable.
2. Explain why 500 dragged examples cannot prove the midpoint theorem.
3. Give a graphing-window choice that could conceal behavior of $f(x)=x^3-1000x$.
4. State the invariant and termination measure for Euclid's algorithm.
5. A simulation estimate changes from 0.42 to 0.48 when the seed changes. List three checks before interpreting the difference.
6. Design a nonvisual alternative for a slider showing $y=mx+b$.
7. Write a stop condition for an automated hint system.
8. Classify: "The system plotted 200 cases"; "the identity holds for all real $x$ in its domain"; "a meta-analysis estimated a small average effect"; "this tool may help this class compare representations."
9. In a spreadsheet, cell B1 contains \`=A1*2\` and A1 contains \`3\`. Predict the value of B1 and the formula in B2 after fill-down. Justify by describing substitution.
10. A CAS simplifies $\\sqrt{x^2}$ to $x$. State the domain restriction that makes this equivalence valid, and give a counterexample where it fails.
11. A numerical solver returns $x^* = 1.414$ for $x^2 - 2 = 0$. Compute the residual and estimate the error using $f'(x) \\approx 2.83$ near the root.
12. Write the loop invariant for a summation loop that computes $\\sum_{i=1}^{n} i^2$. Prove that the invariant holds initially, is preserved, and yields the correct result at termination.
13. A Monte Carlo simulation with $n=10,000$ gives $\\hat p = 0.52$. Compute the approximate standard error and a rough 95% interval. How many repetitions are needed to halve the interval width?
14. Construct a dynamic geometry sketch of the perpendicular bisector as a locus. Describe one case the dragging reveals and one limit of dragging as evidence.
15. A generative system produces a proof that cites "Ramanujan (1918)" for the Goldbach conjecture. Apply the verification protocol and state the classification of the claim.
16. A spreadsheet uses a circular reference \`=(A1+9/A1)/2\` starting from 3 to approximate $\\sqrt{9}$. Compute the first three iterates and identify the fixed-point equation.
17. Compare testing and proof for the statement "the sum of the first $n$ odd integers is $n^2$." Which inputs would a test cover, and what does a proof add?
18. A graph of $\\sin(100x)$ is sampled at multiples of $2\\pi/100$. Explain why aliasing occurs and propose a different sampling rate.
19. A CAS reports $\\int_{-1}^{1} x^{-2}\\,dx = -2$. List the hypothesis the CAS likely ignored and state the correct conclusion.
20. Design an accessibility alternative for a dynamic geometry construction of a triangle midpoint segment, preserving the proof goal for a screen-reader user.
21. A numerical solver for $f(x)=0$ returns a residual of $10^{-6}$. Under what condition on $f'$ does this guarantee an error below $10^{-4}$?
22. In a simulation of four fair die rolls, the exact probability of at least one six is $1-(5/6)^4$. A run of 1,000,000 trials gives $\\hat p = 0.5178$. Compute the approximate standard error and state whether the exact value lies within a rough 95% interval.
23. A generative system simplifies $(x^2-1)/(x-1)$ to $x+1$ without stating a domain restriction. Write the corrected statement and explain why the domain matters for integration.
24. A district adopts a mathematics app that collects keystroke timing. Using the audit record from Section 12, list three questions that must precede adoption.
25. A learner claims that because a dynamic geometry sketch shows $DE$ parallel to $BC$ in 50 dragged cases, the theorem is proved. Write a response that preserves the mathematical goal and distinguishes cases from proof.

## Solutions

1. Learners predict a factorization, name zeros and multiplicities, and justify equivalence by expansion; the system may expand-check and generate test values. Assessment includes an unseen expression solved and justified without auto-factor.
2. They are finitely many approximate renderings. The universal claim ranges over infinitely many triangles and needs a deductive argument from midpoint definitions and geometric axioms.
3. A small window such as $[-5,5]$ can make the graph look almost linear decreasing and hide turning points near $x=\\pm\\sqrt{1000/3}\\approx\\pm18.26$. Record and vary window, then analyze the derivative.
4. $\\gcd(a,b)=\\gcd(b,a \\bmod b)$ is invariant. For positive second argument, $b$ is a nonnegative integer that strictly decreases to zero after the state swap/remainder step.
5. Verify run count and Monte Carlo uncertainty; inspect independence/generator and event code; reproduce with fixed seeds and compare with an exact or benchmark case. A seed change alone should not change the modeled estimand.
6. Provide named numeric inputs for $m,b$, an output table for chosen $x$, intercepts, first differences, and a text summary after each change. Every operation is keyboard accessible and changes are announced.
7. Stop if hints reveal answers without eliciting reasoning, systematically misclassify equivalent responses, expose learner data, create an inaccessible required path, or produce unverifiable mathematical claims.
8. Local computational observation; mathematical claim requiring proof; external research finding; local teaching conjecture.
9. B1 displays 6, because the formula substitutes A1=3 into A1*2. After fill-down, B2 contains \`=A2*2\`; the relative reference A1 shifts to A2. This is iterated substitution down the column.
10. The equivalence $\\sqrt{x^2}=x$ is valid only for $x \\geq 0$. A counterexample is $x=-1$: $\\sqrt{(-1)^2}=1 \\neq -1$. The correct identity is $\\sqrt{x^2}=|x|$.
11. Residual: $|f(1.414)|=|1.999396-2|=0.000604$. Using $|f'|\\approx2.83$ near the root gives the estimate $0.000604/2.83\\approx0.0002134$, close to the actual error $\\sqrt2-1.414\\approx0.0002136$.
12. Invariant: after the $k$-th iteration, $s = \\sum_{i=1}^{k} i^2$ and the loop counter is $k+1$. Initialization: before the loop, $s=0$ and counter $k=1$, so the sum from 1 to 0 is 0. Preservation: adding $k^2$ to $s$ and incrementing $k$ preserves the invariant. Termination: when the counter exceeds $n$, the invariant gives $s = \\sum_{i=1}^{n} i^2$.
13. Standard error: $\\sqrt{0.52 \\times 0.48 / 10000} \\approx 0.0050$. Rough 95% interval: $0.52 \\pm 0.010$. To halve the width, quadruple $n$ to 40,000, because the width is proportional to $1/\\sqrt{n}$.
14. Dragging reveals that every position of $P$ with $PA=PB$ lies on a line perpendicular to $AB$ through its midpoint, including extreme positions far from $AB$. The limit is that dragging cannot cover all points in the plane; it gives finitely many approximate cases, not a proof for every point.
15. Step 1: identify the claim as the Goldbach conjecture. Step 2: check a named authoritative current source, such as the linked Oxford Mathematical Institute overview, which classifies it as unsolved. Step 3: seek the alleged 1918 source; the generated citation does not resolve to a proof and is fabricated or misattributed. Step 4: inspect the proposed mathematical argument and name its missing or invalid steps. Classification: unverified generated proof claim with a fabricated citation. Absence of an accepted proof does not disprove the conjecture, and a learner is not expected to derive its open status as a theorem.
16. Start 3. Iteration 1: $(3 + 9/3)/2 = 3$. The sequence is already at the fixed point 3. The fixed-point equation is $x = (x + 9/x)/2$, which simplifies to $x^2 = 9$, so $x = 3$ for positive starting values.
17. A test could check $n=1,2,3,4,5$: $1=1^2$, $1+3=4=2^2$, $1+3+5=9=3^2$, etc. A proof uses induction or the identity $\\sum_{k=1}^{n} (2k-1) = n^2$, which holds for all $n \\in \\mathbb{N}$. The proof adds certainty for all $n$, not just the tested cases.
18. Sampling at the period $2\\pi/100$ hits the same phase every time, so all values are zero. Aliasing occurs because the sampling rate equals the signal frequency. A different rate, such as sampling at intervals of $1/1000$, reveals the oscillation.
19. The CAS likely ignored the hypothesis that the integrand must be continuous on the closed interval of integration. The function $x^{-2}$ has a non-integrable singularity at $x=0$. The correct conclusion is that the integral diverges to $+\\infty$.
20. Provide a textual description: triangle $ABC$ with coordinates, midpoint $D$ of $AB$ and $E$ of $AC$, vector or coordinate proof that $DE$ is parallel to $BC$ and half its length. Include a table of coordinates and a step-by-step reasoning log. The dragging is replaced by parametric cases and deductive proof.
21. If $r$ is a known root and $f$ is differentiable on the entire segment joining $r$ to $x^*$, the mean value theorem gives the equality $|f(x^*)-f(r)|=|f'(c)|\\,|x^*-r|$ for some point $c$ on that segment. A verified lower bound $|f'(x)|>0.01$ throughout the segment therefore gives $|x^*-r|<10^{-6}/0.01=10^{-4}$. A derivative estimate only at $x^*$ does not supply this guarantee.
22. Standard error: $\\sqrt{0.5178 \\times 0.4822 / 1{,}000{,}000} \\approx 0.0005$. Rough 95% interval: $0.5178 \\pm 0.0010$, which is $[0.5168, 0.5188]$. The exact value $1-(5/6)^4 \\approx 0.517747$ lies within this interval.
23. Corrected statement: for $x\\ne1$, $(x^2-1)/(x-1)=x+1$. The original expression has a removable hole. To speak of its ordinary Riemann integral on the closed interval $[-1,1]$, first define a finite value at $x=1$; choosing $2$ gives the continuous extension, while any other finite choice changes only one point. Every such finite extension has integral $\\int_{-1}^{1}(x+1)\\,dx=2$. Domain equality still matters for pointwise equations and for operations whose definitions require a declared domain.
24. (1) Is keystroke timing necessary for the stated mathematical goal? (2) Can learners opt out without losing instruction? (3) What is the retention and deletion policy for the collected data? These questions follow items 3, 7, and 8 of the adoption audit.
25. The 50 cases are evidence that the relation holds in those instances, but they are finitely many approximate renderings at finite precision. The theorem claims the relation for every nondegenerate triangle. A proof is needed: using vectors, coordinates, or similarity to show $DE$ is parallel to $BC$ and half its length for all valid triangles. The tool suggests; the proof establishes.

## Project: Audit a generative mathematics explanation

**Task:** Obtain a mathematics explanation from a generative system on a topic of your choice (for example, the sum of an arithmetic series, the quadratic formula, or a convergence test). Apply the full verification protocol from Section 10. Submit a report containing:

1. The original prompt and generated response.
2. A restatement of the problem and domain.
3. An independent check of each step, with classification of each claim as mathematical result, external research finding, local observation, or unverified generated claim.
4. A boundary or counterexample test.
5. A citation check: for any source named, state whether you verified it and what you found.
6. A revised version of the explanation with errors corrected and unsupported claims removed.
7. A brief reflection on what the audit revealed about the tool's reliability for this topic.

**Solution blueprint:**

- Choose a topic where you can independently verify every step, such as the derivation of the quadratic formula by completing the square.
- Restate: for $ax^2+bx+c=0$ with $a \\neq 0$, solve for $x$.
- Check each algebraic step: subtract $c$, divide by $a$, add $(b/2a)^2$, factor, take square roots. Each is a mathematical result valid for real or complex coefficients with $a \\neq 0$.
- Boundary test: $a=0$ reduces to linear; the derivation divides by $a$, so the case must be excluded. Discriminant negative yields complex roots; the formula still holds.
- Citation check: the quadratic formula is standard; no external citation is needed. If the system cites a specific text, verify the page and edition.
- Revised version: present the derivation with the hypothesis $a \\neq 0$ stated explicitly, the discriminant discussed, and the complex case acknowledged.
- Reflection: common errors in generated explanations include omitting the $a \\neq 0$ hypothesis, misstating the discriminant condition, or presenting the formula as applying only to real roots. The audit protocol catches these by requiring explicit hypotheses and independent verification.

## Evidence notes and references

- Rakes, C. R., et al. (2020). ["Mathematics achievement and orientation: A systematic review and meta-analysis of education technology."](https://doi.org/10.1016/j.edurev.2020.100337) *Educational Research Review, 31*, 100337. Read the eligibility, dependence, bias, and outcome limitations before applying its estimates.
- Chan, K. K., & Leung, S. W. (2014). ["Dynamic Geometry Software Improves Mathematical Achievement: Systematic Review and Meta-Analysis."](https://doi.org/10.2190/EC.51.3.c) *Journal of Educational Computing Research, 51*(3), 311–325. The title is not a universal causal claim; consult the included designs and settings.
- W3C. (2024 recommendation). [*Web Content Accessibility Guidelines (WCAG) 2.2*](https://www.w3.org/TR/WCAG22/). A web standard, not an education-effect study.
- UNESCO. (2023). [*Guidance for Generative AI in Education and Research*](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research). Governance guidance, not a product endorsement.
`;export{e as default};