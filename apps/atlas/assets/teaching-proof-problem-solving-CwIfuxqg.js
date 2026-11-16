var e=`---
id: course-teaching-proof-problem-solving
title: "Teaching Problem Solving and Proof Through Visible Reasoning"
level: undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Teaching Problem Solving and Proof Through Visible Reasoning

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-teaching-proof-problem-solving/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Problem solving is not a bag of inspirational slogans, and proof is not a polished paragraph produced after the thinking is over. Both involve choosing representations, trying cases, controlling assumptions, monitoring a plan, finding an invariant or structure, and deciding what would count as a complete justification.

This course is for teachers, tutors, mentors, and learners who already know elementary algebra and the idea of a proof. It develops teaching routines through actual problems. Each routine makes a kind of reasoning visible, then gradually transfers control to the learner.

The Education Endowment Foundation discusses [thinking aloud in mathematical problem solving](https://educationendowmentfoundation.org.uk/news/eef-blog-thinking-aloud-to-support-mathematical-problem-solving) as a way to model planning, monitoring, and evaluation. The US Institute of Education Sciences' [problem-solving practice guide](https://ies.ed.gov/ncee/WWC/PracticeGuide/16/Published) synthesises evidence for specific instructional recommendations and labels the strength of that evidence. Neither source makes one routine appropriate in every context; mathematical analysis and local evidence still matter.

## Course map

1. distinguish a problem from an exercise;
2. model decisions with a disciplined think-aloud;
3. use cases to conjecture without mistaking them for proof;
4. teach invariants and representations;
5. compare proof structures and incomplete attempts;
6. fade scaffolds and assess reasoning;
7. design a task sequence with access and extension.

## 1. Exercise, problem, investigation

An exercise has a familiar route for its intended learner. A problem does not yet have a known route, even if the mathematics is elementary. The distinction depends on the learner, not the page.

Consider:

> The sum of the first $n$ odd positive numbers appears to be a square. Explain why it is always a square.

For $n=1,2,3,4$, the sums are

$1=1^{2}$, $1+3=4=2^{2}$, $1+3+5=9=3^{2}$, $1+3+5+7=16=4^{2}$.

Calculating the next sum is an exercise. Finding and justifying the general relation

$1+3+5+⋯+(2n-1)=n^{2}$

is a problem for someone who has not met it.

### A geometric proof

Build an $n$-by-$n$ square from nested L-shaped borders. The first border has 1 tile. Growing a $(k-1)$-by-$(k-1)$ square to a $k$-by-$k$ square adds a right column of $k$ tiles and a bottom row of $k-1$ new tiles, for $2k-1$ tiles. After $n$ stages the total is both the odd-number sum and $n^{2}$.

### An algebraic proof by induction

Base case: for $n=1$, both sides equal 1. Assume the sum through the $n$th odd number is $n^{2}$. The next odd number is $2(n+1)-1=2n+1$, so

$n^{2}+(2n+1)=(n+1)^{2}$.

Therefore the identity holds for every positive whole number $n$.

The two proofs expose different structure. A teaching discussion can ask which line establishes “the next odd number,” what the diagram must show for every $n$, and what induction assumes.

## 2. Think aloud about decisions, not theatrics

A useful think-aloud does not recite every thought or pretend experts never get stuck. It names decisions a learner could later make independently.

Problem:

> A rectangle has perimeter 40. Which side lengths maximise its area?

Model:

> “I need two changing lengths but the perimeter ties them together. Let one side be $x$. Because $2x+2y=40$, the other side is $y=20-x$. The area is $A=x(20-x)$. I will rewrite rather than differentiate first: $A=100-(x-10)^{2}$. A square is never negative, so the area is at most 100, achieved when $x=10$. I should check the domain: physical side lengths require $0<x<20$. Ten is allowed. The maximizing rectangle is a square.”

The model marks five moves:

1. choose a variable;
2. use the constraint to reduce the number of variables;
3. select a representation—completed square;
4. invoke a bound with its reason;
5. check the domain and equality case.

A poor think-aloud merely says, “Obviously complete the square.” A misleading one conceals selection: “I just knew to let $x$ be the side.” Pause and ask what other variables would work.

### Learner replay

Give a nearby problem: perimeter 60. Provide only the prompts “quantities,” “constraint,” “representation,” “bound,” and “check.” Then remove prompts on a later task.

**Answer.** $y=30-x$, so $A=x(30-x)=225-(x-15)^{2}\\le 225$, with equality at $x=y=15$.

## 3. Cases generate conjectures; cases do not prove universals

Problem:

> Pick any whole number. Add the next whole number, then add 1. Is the result always even?

Examples: $4+5+1=10$, $11+12+1=24$. Let the first number be $n$; the next is $n+1$. Then

$n+(n+1)+1=2n+2=2(n+1)$.

It is twice a whole number, so it is even.

Now change one word: “Multiply a whole number by the next whole number, then add 1. Is the result always prime?” Small cases give 3, 7, 13, 21. The case $n=4$ yields $4\\cdot 5+1=21$, not prime. A conjecture can fail quickly.

### Teach case choice

Random examples are not the only experiments. Ask learners to select:

- smallest values;
- zero or negative values if the domain permits;
- values that make a factor zero;
- symmetric cases;
- extreme cases;
- cases where two conditions nearly coincide.

Case selection is a mathematical skill. It can reveal a missing hypothesis even when it cannot prove the final statement.

## 4. Invariants turn motion into proof

Problem:

> Fifteen coins show heads. A move flips exactly two coins. Can a sequence of moves leave exactly fourteen heads?

Flipping two coins changes the head count by $-2$, $0$, or $+2$: two heads become tails, one of each swaps roles, or two tails become heads. Therefore the parity of the number of heads never changes. Fifteen is odd; fourteen is even. The target is impossible.

The invariant is not “the number stays the same.” It is parity: a property that stays the same while the number may change.

### Teaching sequence for invariants

1. Let learners make legal moves on a small state.
2. Record quantities that change.
3. Record coarser properties—parity, remainder, colour class, sum, product, orientation.
4. Ask what every move preserves.
5. Compare the initial and target states.

### A boundary change

If a move flips exactly three coins, parity need not be preserved: flipping three heads changes the count by −3. A proof is tied to the legal move. Altering a rule can destroy its invariant.

## 5. Represent the state, not just the story

Problem:

> At a gathering, every pair of people shakes hands once. How many handshakes occur among $n$ people?

Represent each person by a point and each handshake by an edge joining two points. Every unordered pair contributes one edge, so the count is

$n(n-1)/2$.

Why divide by 2? Counting choices “first person, second person” gives $n(n-1)$, but it counts Alice–Ben and Ben–Alice separately. A handshake has no direction.

Alternative derivation: person 1 shakes $n-1$ hands, the next has $n-2$ new handshakes, and so on:

$(n-1)+(n-2)+⋯+1 = n(n-1)/2$.

### Ask representation questions

- What does a point mean?
- What does an edge mean?
- Which story details have been discarded?
- Does the graph allow a person to shake their own hand? No loops are included.
- Does it allow repeated handshakes? The graph is simple, with at most one edge per pair.

These questions prevent a diagram from becoming decoration.

## 6. Read proof attempts as mathematical evidence

Claim: the square of every odd whole number is odd.

### Attempt A

“$3^{2}=9$, $5^{2}=25$, and $7^{2}=49$; all are odd.”

This supplies evidence but not a proof for every odd number.

### Attempt B

“Let the number be $n$. Then $n^{2}$ is odd because odd times odd is odd.”

This invokes exactly the fact needing justification unless “odd times odd is odd” has already been proved.

### Attempt C

“Let an odd whole number be $2k+1$, where $k$ is a whole number. Then

$(2k+1)^{2}=4k^{2}+4k+1=2(2k^{2}+2k)+1$.

This is two times a whole number plus one, so it is odd.”

Attempt C explicitly uses the definition of odd and closes the argument.

### A response protocol

For each attempt ask:

1. What is the claim's domain and quantifier?
2. Which line is valid?
3. Which line needs a reason?
4. Is the gap repairable without replacing the learner's whole approach?
5. What nearby false statement would expose the gap?

Feedback such as “not rigorous” is too vague. “Your three examples establish those cases; introduce a general odd number $2k+1$ to address all cases” names the bridge.

## 7. Contrast direct proof, contradiction, and counterexample

### Direct proof

If integers $a$ and $b$ are even, write $a=2r$ and $b=2s$. Then

$a+b=2r+2s=2(r+s)$,

which is even.

### Proof by contradiction

Claim: $\\sqrt{2}$ is irrational. Suppose instead $\\sqrt{2}=p/q$ in lowest terms, with integers $p,q$ and $q\\ne 0$. Then $p^{2}=2q^{2}$, so $p^{2}$ is even and hence $p$ is even. Write $p=2r$. Substitution gives $4r^{2}=2q^{2}$, hence $q^{2}=2r^{2}$, so $q$ is even. Then $p$ and $q$ share factor 2, contradicting lowest terms. Thus no such fraction exists.

The proof needs the lemma “if an integer's square is even, the integer is even.” One proof uses the contrapositive: an odd integer is $2k+1$, whose square is odd by the earlier calculation.

### Counterexample

Claim: if $ab$ is divisible by 6, then both $a$ and $b$ are divisible by 6. Take $a=2$, $b=3$. Their product is 6, but neither factor is divisible by 6. One counterexample refutes a universal statement.

Teach selection, not labels alone: direct proof follows definitions; contradiction makes the denied conclusion interact with a minimal representation; counterexample requires meeting every hypothesis while breaking the conclusion.

## 8. Fade scaffolds deliberately

Scaffolding should reveal structure and then become unnecessary. One sequence for the odd-square claim is:

1. **worked example:** annotated proof with the purpose of every line;
2. **completion:** supply $n=2k+1$; learners expand and identify the odd form;
3. **prompted proof:** headings “represent,” “transform,” “conclude” only;
4. **independent transfer:** prove the product of two odd integers is odd;
5. **variation:** decide whether the sum of two odd integers is odd and prove or repair the claim.

Transfer answers:

If $a=2r+1$ and $b=2s+1$, then

$ab=4rs+2r+2s+1=2(2rs+r+s)+1$,

so the product is odd. But

$a+b=2r+1+2s+1=2(r+s+1)$,

so the sum is even, not odd.

Fading by calendar date—“we did examples yesterday, so today no support”—is not responsive. Use evidence: can the learner select the representation, explain why it fits, and monitor the conclusion?

## 9. Assess process without rewarding verbosity

A compact proof/problem-solving rubric can ask four mathematical questions:

| Dimension | Evidence |
|---|---|
| interpretation | identifies quantities, domain, conditions, and goal |
| strategy | selects and adapts a representation or theorem with a reason |
| justification | connects claims; states hypotheses; handles all required cases |
| evaluation | checks result, boundary cases, units, or alternative interpretations |

A concise proof can satisfy all four. A long diary can satisfy none. Do not assign points for a preferred method when another correct method meets the goal.

For formative assessment, include an unfinished attempt and ask learners to locate the first unsupported step. This often reveals more than asking for a fresh polished proof.

## 10. Design an accessible task sequence

Access changes the route, not the standard of reasoning.

For the handshake problem, offer tactile points and strings, a labelled static graph, an adjacency list, and a numerical table. Define every symbol. Permit spoken proof with an exact transcript or written proof. Do not require dragging points or distinguish edges only by colour. A screen-reader route can list pairs for four people: AB, AC, AD, BC, BD, CD.

Then extend in layers:

- **entry:** count handshakes for four people in two ways;
- **structure:** explain why person order double-counts each pair;
- **generalise:** derive $n(n-1)/2$;
- **transfer:** count diagonals of an $n$-gon by subtracting the $n$ sides from all pairs of vertices;
- **extension:** if no three diagonals meet inside a convex $n$-gon, count interior intersection points by choosing their four endpoints.

Worked transfer:

All pairs of vertices number $n(n-1)/2$. Exactly $n$ pairs are sides. Therefore diagonals number

$n(n-1)/2-n = n(n-3)/2$.

For the extension, each choice of four vertices determines one intersection of the two diagonals joining opposite vertices, under the stated no-three-concurrent condition. The count is the binomial coefficient “$n$ choose 4,” written

$\\binom{n}{4}=n(n-1)(n-2)(n-3)/24$.

The hypothesis matters: without convexity or when three diagonals concur, the interpretation can fail.

## Studio exercises

### 1. Diagnose an empirical “proof”

A learner says the sum of two consecutive whole numbers is always prime because $1+2=3$, $2+3=5$, and $3+4=7$.

**Answer.** The examples motivate a conjecture but $4+5=9$ is a counterexample. In general the sum is $n+(n+1)=2n+1$, always odd but not always prime. Ask which weaker statement the algebra proves.

### 2. Find an invariant

Start with an even sum on a board. A move adds 3 to one number and subtracts 3 from another. Can the total become odd?

**Answer.** Each move changes the total by $+3-3=0$; the entire sum, not only its parity, is invariant. Therefore it cannot become odd.

### 3. Repair a proof

Claim: if $x^{2}=1$, then $x=1$. Find the issue and repair the statement over the real numbers.

**Answer.** $x=-1$ is a counterexample because $(-1)^{2}=1$. Factor: $x^{2}-1=(x-1)(x+1)=0$, so over the reals $x=1$ or $x=-1$.

### 4. Write a think-aloud checkpoint

For the coin invariant problem, write one monitoring question that does not reveal the invariant.

**Sample answer.** “After each legal move, which recorded quantities change by an even amount, an odd amount, or not at all?” This directs attention without naming parity as the answer.

### 5. Plan fading

Design four prompts that fade for proving the sum $1+2+\\cdots +n$ of the positive whole numbers from 1 through $n$ is $n(n+1)/2$.

**Sample answer.** First annotate a pairing proof; next give paired terms $(1+n),(2+n-1),\\ldots$; then ask learners to choose between pairing and induction; finally transfer to the sum of an arithmetic sequence. In a pairing proof, writing the sum forward and backward produces $n$ pairs each equal to $n+1$; doubling the sum gives $n(n+1)$, hence the original sum is half.

## Source and uncertainty note

Education studies measure particular interventions, learners, settings, and outcomes. A strategy described as promising or evidence-informed is not a theorem and should not be universalised beyond its evidence. The IES guide reports evidence levels and research details; consult those rather than treating this course's summary as a causal guarantee. The mathematical proofs here can be checked deductively. Claims about which scaffold helps a learner require observation, ethical attention, and local evaluation.

## Capstone

Choose one rich problem. Submit:

1. a complete mathematical solution with hypotheses and boundary cases;
2. two likely partial approaches and specific feedback for each;
3. a think-aloud that marks planning, monitoring, and evaluation;
4. a four-step scaffold-fading sequence;
5. a nonvisual or non-mouse route carrying equivalent information;
6. one transfer problem with a worked solution;
7. a note separating mathematical certainty from educational uncertainty.

The goal is not to make hard thinking frictionless. It is to make the productive friction mathematical—and visible enough that learners can increasingly manage it themselves.


<!-- euler-education-teaching-dossier:start -->

### Assigned programme portfolio: make the feasible set visible

This is a bounded instance of the seven-part capstone above. First complete Studio exercises 1–5 and compare their worked answers. Revisit the [integer-rectangle example and its complete exercises](#/item/book-teaching-for-mathematical-understanding?chapter=teaching-problem-solving), the [proof-teaching chapter](#/item/book-teaching-for-mathematical-understanding?chapter=proof-teaching), and the [learning-progressions chapter](#/item/book-teaching-for-mathematical-understanding?chapter=learning-progressions). The existing book solutions remain the feedback for those assignments; this portfolio does not replace or qualify the whole book.

Preparation is elementary algebra, positive integers, parity, and the meaning of a maximum over a specified set. Before starting, explain why a sum of two even integers is even and rewrite $a(17-a)$ as $289/4-(a-17/2)^2$. If needed, use Sections 2, 6 and 7 above: write even integers as $2r,2s$, expand the square, and check the domain before choosing an equality case. No differentiation is required.

The selected route has a **480-minute authored planning planning allocation**, replacing the earlier 210-minute overview estimate for this route: 210 for the original sections and Studio exercises 1–5; 45 for the book comparison and preparation; 60 for ED-TEACH-P001; 60 for ED-TEACH-P002; 45 for ED-TEACH-R001; and 60 for model comparison, feedback and revision. Count already completed work once. Breaks, repair and the elapsed return interval are additional. There are no observed workload or learning results.

Keep a first attempt, the sources or help opened, a comparison against the public model, and a revision naming the first unsupported step. Euler notes or a local document can retain this trail; reading marks do not grade it. These public tasks are self-study and reconstruction after exposure, not secure fresh assessments. All partial approaches below are authored possibilities rather than observed learner records.

### ED-TEACH-P001 — Primary mathematical and teaching portfolio

A rectangle has perimeter 34 units and **positive integer** side lengths. Find every maximizing pair, prove maximality, and distinguish the answer from the positive-real problem. Submit all seven capstone components: solution and boundaries, two partial approaches with specific feedback, think-aloud, four fading steps, equivalent access route, worked transfer and educational uncertainty. Attempt the mathematics and anticipated responses before opening the model.

#### Complete primary model

**Mathematics and hypotheses.** Write $a,b\\in\\mathbb Z_{>0}$ and $2a+2b=34$, hence $a+b=17$. Up to exchanging the sides, the feasible pairs and areas are:

| Task | a | b | Area |
| --- | ---: | ---: | ---: |
| ED-TEACH-P001 | 1 | 16 | 16 |
| ED-TEACH-P001 | 2 | 15 | 30 |
| ED-TEACH-P001 | 3 | 14 | 42 |
| ED-TEACH-P001 | 4 | 13 | 52 |
| ED-TEACH-P001 | 5 | 12 | 60 |
| ED-TEACH-P001 | 6 | 11 | 66 |
| ED-TEACH-P001 | 7 | 10 | 70 |
| ED-TEACH-P001 | 8 | 9 | 72 |

The list is exhaustive because, after choosing $a\\le b$, positivity and $a+b=17$ give $1\\le a\\le8$. Independently,

$$ab=\\left(\\frac{a+b}{2}\\right)^2-\\left(\\frac{a-b}{2}\\right)^2
=\\frac{289}{4}-\\frac{(a-b)^2}{4}.$$

The integer difference $a-b$ is odd, since $a+b=17$ is odd, so $|a-b|\\ge1$. Thus $ab\\le(289-1)/4=72$, attained precisely when $|a-b|=1$. The ordered maximizing pairs are $(8,9)$ and $(9,8)$; they describe one rectangle up to rotation. With positive real sides the bound is instead $289/4=72.25$, attained at $(8.5,8.5)$. That square is excluded by the integer hypothesis. Degenerate zero sides are excluded in both problems.

**Two partial approaches and repair.** Approach A says, “A square maximizes area, so use 8.5 by 8.5.” Its real bound is useful, but its proposed rectangle is outside the assigned set. Ask, “Which line in the problem permits each side?” Keep the completed-square argument and determine the least possible integer difference. Approach B lists $(1,16),(2,15),(3,14)$ and chooses area 42. Its entries are correct; coverage is missing. Ask for the largest possible smaller side and a reason that every feasible unordered pair appears once. Extend the table through $(8,9)$, then use the identity to explain why closeness matters. Neither response identifies a fixed learner type; a copied answer, omitted domain or incomplete record remains possible.

**Think-aloud.** Plan: “I will turn perimeter into a sum and record the side restrictions.” Monitor: “The square gives an upper bound; is its equality case allowed? Does my list cover every smaller side?” Evaluate: “Eight plus nine is seventeen, so the perimeter is 34; the area is 72 square units. The odd difference proves no integer pair improves it.”

**Four fading steps.** First annotate the real perimeter-40 proof in Section 2, marking constraint, domain and equality. Second complete the missing domain and square term for perimeter 34. Third use only the prompts “feasible set, bound, attainment” to explain the integer case. Fourth remove those prompts for ED-TEACH-P002, where the allowed integer set changes. The progression is a proposed teaching design; these pages do not show that it helped anyone.

**Equivalent access.** The table is an optional organized view of the pair list, not a required picture. A linear text route reads each row as “side a, side b, product,” followed by the same algebra and equality conditions. A typed explanation or speech with a verbatim transcript can contain all seven components. No dragging, colour distinction or speeded response is necessary.

**Worked transfer and claim boundary.** ED-TEACH-P002 below is the transfer component, with its full solution. The identity and feasible-set argument are deductive. Whether this comparison improves domain checking is a conjecture requiring actual evidence; the partial approaches, fading sequence and rubric supply no observed effectiveness, teaching qualification or individual mastery result.

### ED-TEACH-P002 — Changed admissible sides

Now use perimeter 36 units and require **positive even integer** side lengths. Rebuild the complete mathematical solution and the teaching portfolio. In particular, diagnose “9 by 9 gives area 81” and design a follow-up that distinguishes forgetting the word even from not understanding an even integer. Explain which parts of the primary feedback survive and which must change.

#### Complete changed model

Here $a+b=18$ with $a,b\\in2\\mathbb Z_{>0}$. Up to side exchange the entire feasible list is:

| Task | a | b | Area |
| --- | ---: | ---: | ---: |
| ED-TEACH-P002 | 2 | 16 | 32 |
| ED-TEACH-P002 | 4 | 14 | 56 |
| ED-TEACH-P002 | 6 | 12 | 72 |
| ED-TEACH-P002 | 8 | 10 | 80 |

The identity gives $ab=81-(a-b)^2/4$. Equal sides would be 9 and 9, which are odd and inadmissible. The difference is even and nonzero, so $|a-b|\\ge2$ and $ab\\le80$, attained only by $(8,10)$ or $(10,8)$. Positive real sides, or unrestricted positive integer sides, would instead permit the area-81 square. Changing the admissible set has changed the equality case, not the identity.

For the proposed response, preserve its correct unrestricted bound 81 and ask the author to write each permitted side as twice a positive integer. If they write $9=2k$ with integer $k$, investigate the meaning of even; if they correctly reject that equation, ask them to reread the side restriction and revise their feasible set. A second partial approach, “round 9 down to 8, so use 8 by 8,” meets parity but violates perimeter: $2(8+8)=32$. Preserve the valid even side 8 and use $b=18-a$ to obtain 10.

The changed think-aloud is: plan with $a=2r,b=2s$ and $r+s=9$; monitor both parity and sum; evaluate the bound and attained pair. Fade from that substitution, to a partially filled pair table, to “bound and attainment,” to a later problem without prompts. Read the four rows linearly or provide the same equations in speech/transcript. Apply the same seven capstone components and feedback dimensions as for the primary portfolio. The new mathematical conclusion is proved; the proposed follow-ups remain untested explanations to investigate.

### ED-TEACH-R001 — Later uncued return and full feedback

After a break, close the preceding models. A rectangle is claimed to have perimeter 30 units and **positive odd integer** side lengths. Decide whether a maximizing rectangle exists before proposing dimensions. Contrast the result with unrestricted positive integer and positive real side lengths. Write one question that would expose a missing feasibility check without giving the answer. Record any help before consulting the key.

#### Complete return model

**Full return model.** The perimeter requires $a+b=15$. Two odd integers have the form $2r+1,2s+1$, whose sum is $2(r+s+1)$, even. They cannot sum to 15, so the specified feasible set is empty. There is no maximizing rectangle, and its maximum area is not zero. If the odd restriction is removed but positive integers are retained, $ab=225/4-(a-b)^2/4\\le56$ because the difference is odd; equality occurs at $(7,8)$ and $(8,7)$. Over positive reals the maximum is $225/4=56.25$ at $(7.5,7.5)$. A discriminating question is, “Can you exhibit one pair meeting every side condition and the perimeter, before comparing areas?” This checks a necessary step without naming the parity contradiction. An unsupported numerical answer calls for a feasibility repair; a correct contradiction calls for preserving that argument rather than forcing a table.

### Descriptive portfolio rubric, revision and stopping point

For each of P001, P002 and R001, mark each applicable dimension **complete**, **revise** or **missing**, citing an actual line. Interpretation requires the exact admissible set and goal; strategy requires a reason for the identity, table or contradiction; justification requires all permitted cases, bound and feasible attainment, or proof of emptiness; evaluation requires units, boundary comparison and a check of the proposed answer. For the two portfolios also check that all seven capstone components are present, each partial approach receives a mathematical repair, and access alternatives preserve the same information. These public criteria are descriptive self-review, not validated marking or unrestricted proof verification.

A worked review of “8.5 by 8.5, because squares are best” on P001 is interpretation=revise (integer restriction omitted), strategy=revise (a useful unrestricted bound is suggested without a reason), justification=revise (attainment is inadmissible), evaluation=missing (no feasibility check). First repair the domain and parity argument; then supply the omitted teaching components. On R001, “no rectangle exists because odd plus odd is even” completes the central feasibility argument, but the assigned comparison and follow-up remain to be supplied. Preserve the first response and record what the revision changes.

If domain or parity fails, return to the preparation check and Sections 6–7. If a finite table is incomplete, return to the book's organized-case example. If an identity is asserted without a reason, expand both squared terms and cancel. Stop once the assigned cases, comparisons and revisions are complete. Continue to the [research-methods course](#/item/course-mathematics-education-research-methods) with its separate statistical and learning-progression preparation; these portfolios do not supply those prerequisites or an observed learner study.

<!-- euler-education-teaching-dossier:end -->
`;export{e as default};