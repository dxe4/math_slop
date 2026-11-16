# Mathematics learning research and an introductory homotopy lecture

The mathematics projects in this workspace can share a teaching structure while preserving their different mathematical subjects and visual styles. A useful lesson asks the learner to make a prediction, investigate a controlled example, explain what changed, and justify the result. A later problem should require the same idea in a different setting. The research below supports active participation, retrieval, spacing, and explicit mathematical reasoning; it does not establish that any particular animation or software framework improves learning.

This synthesis is for authors of university mathematics lessons and interactive applications. The homotopy lecture assumes continuity, vectors, elementary complex numbers, and experience reading short proofs. Its core examples are suitable for advanced undergraduates before a formal algebraic topology course. The extension on winding uses a stated lifting theorem; it should not be presented as if an animation proves that theorem.

## Evidence and its implications for these projects

The entries distinguish an observed result from an application to lesson design. Applications are design inferences to evaluate locally.

| Research | What the research establishes in its setting | Application to these projects |
| --- | --- | --- |
| [Freeman and colleagues 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4060654/) | A meta-analysis of 225 undergraduate STEM studies found an average examination and concept inventory advantage of 0.47 standard deviations for active learning. The included activities and study designs varied. | Put mathematical decisions inside lessons: predict an outcome, compare examples, explain a failure, or construct a proof. Moving a slider by itself does not establish that the learner is reasoning. The pooled effect is not a prediction of this site's effect. |
| [Theobald and colleagues 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7104254/) | Across the included undergraduate STEM studies, active learning was associated with narrower examination and passing gaps between the groups studied. The proportion of class time in activities mattered; the strongest gap reductions appeared in high-intensity implementations. | Provide repeated opportunities to contribute, explicit task instructions, useful feedback, and accessible controls. This evidence does not show that adding a single interaction closes gaps, or that an identical effect applies to every learner group. |
| [Roediger and Karpicke 2006](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/) | In experiments with prose passages, retrieval practice improved delayed recall relative to repeated study, while immediate performance could favor repeated study. | Ask learners to reconstruct a definition or explain a counterexample before revealing it. Check conceptual understanding and proof ability separately; remembering a definition is not the same outcome as proving a theorem. |
| [Cepeda and colleagues 2006](https://digitalcommons.usf.edu/psy_facpub/1771/) | A quantitative synthesis of verbal learning studies found that spacing effects depend jointly on the interval between study sessions and the interval before assessment. | Revisit an earlier idea in later lessons. A proposed schedule such as two days, one week, and three weeks is a practical starting point, not an experimentally established optimum for topology. |
| [Rohrer and Taylor 2006](https://digitalcommons.usf.edu/psy_facpub/1770/) | In two experiments involving 216 college students learning one kind of mathematics procedure, distributing practice across sessions helped retention after four weeks in the first experiment; extra immediate practice did not improve delayed scores in the second. | Spread mathematically varied review problems across later lessons. The study concerns one procedure and particular intervals; it does not imply that all immediate practice is useless or that proof learning follows exactly the same pattern. |
| [Sweller and Cooper 1985](https://onderwijs.felienne.nl/vakdidactiek/materiaal/sweller_worked_examples.pdf) | Experiments on algebra manipulation found advantages in processing time and subsequent structurally similar problems when learners studied worked examples. The paper explicitly limits the observed transfer to related problem structures. | Show one fully justified construction, then remove some scaffolding, then ask for an independent construction in a different domain. Do not infer that reading a solution guarantees broad transfer. |
| [Weber 2001](https://link.springer.com/article/10.1023/A:1015535614355) | An exploratory comparison of undergraduates and doctoral students in abstract algebra identified difficulties choosing useful facts and strategies despite possession of relevant factual knowledge. | Explain why a proof strategy is chosen. For homotopy, teach the choice between constructing an explicit homotopy and obstructing one with an invariant. This is a small qualitative study, not an effect estimate for an intervention. |
| [Laursen and colleagues 2014](https://www.colorado.edu/eer/sites/default/files/2024-09/LaursenIBLbenefits2014authorMS.pdf) | A study across more than 100 mathematics course sections at four universities examined inquiry-based instruction using a quasi-experimental design. Several outcomes included student reports, with measured controls for some pre-existing differences. | Use structured mathematical inquiry with guidance and critique. Keep self-reported gains distinct from assessed mathematical performance. Selection and instructor differences constrain causal conclusions. |
| [Kogan and Laursen 2014](https://link.springer.com/article/10.1007/s10755-013-9269-9) | Academic records from two institutions linked some inquiry-based mathematics experiences with later outcomes, with especially notable later-grade patterns among previously lower-achieving students. Overall differences were modest, and selection could not be fully removed. | Evaluate whether learners can use an idea later, rather than measuring only completion of today's lesson. Do not promise the same persistence or grade effects from a short independent web lesson. |
| [Deslauriers and colleagues 2019](https://pubmed.ncbi.nlm.nih.gov/31484770/) | A randomized comparison in introductory college physics separated perceived learning from performance on immediate learning tests. Students in active classes performed better while reporting a lower feeling of learning. | Collect both perceived difficulty and mathematical performance. A fluent-looking explanation or enthusiastic rating is insufficient evidence of learning; productive effort should still receive clear guidance and feedback. |

These findings support a combination of explanation and learner work. A carefully chosen worked example can prepare someone for inquiry. A guided investigation can expose a conjecture that a proof then settles. The balance should depend on the learner's prerequisites and the mathematical goal.

## A shared lesson structure

Each project should expose a short, inspectable learning contract: prerequisite knowledge, one or two mathematical goals, and what the learner should produce. For example, “construct a homotopy and verify its boundary conditions” is assessable; “understand topology visually” is too vague to guide design.

A lesson can use the following sequence without imposing a new application architecture:

1. **Retrieve a prerequisite.** Ask for a definition, a small calculation, or a distinction needed now. Reveal a concise correction after an attempt.
2. **Predict before manipulating.** Present a specific question whose answer can be right or wrong. Record the learner's reasoning locally or let them write it elsewhere.
3. **Investigate a constrained example.** Give controls a mathematical meaning and keep invalid parameter ranges visible. Allow pause, step, reset, and direct numeric input.
4. **Connect representations.** Relate the displayed curve to its parameter, formula, domain, codomain, and assumptions. Show what an individual point does as time changes.
5. **Justify the result.** Supply or elicit an argument that covers every permitted parameter value. Distinguish a proof from numerical evidence.
6. **Change an assumption.** Replace a plane with a punctured plane, a convex set with a nonconvex one, or a fixed endpoint with a moving endpoint. Explain why the earlier argument does or does not survive.
7. **Transfer and revisit.** Give an unseen problem now and another after a delay. Let the learner recover the key idea before reopening the worked solution.

Hints should identify the next useful mathematical action: “check the norm of this point” or “evaluate the two vertical edges of the parameter square.” A sequence of hints can move from strategy to a partial calculation to a full solution. Showing the full solution immediately removes the opportunity to inspect the learner's reasoning.

For computational notebooks and computer algebra tools, ask for a prediction before evaluation and interpretation afterwards. Compare the symbolic expression, assumptions, and a numerical or graphical check. A symbolic answer with an omitted domain condition can be mathematically wrong even when the displayed formula looks plausible. Verification by substitution, special cases, units where relevant, and proof where required should be part of the mathematical task.

## Homotopy lecture goals and prerequisites

At the end of the core lecture a learner should be able to:

- State the domain, codomain, and boundary conditions of a homotopy, including path homotopy relative to endpoints.
- Construct and verify a straight-line homotopy when the codomain is convex.
- Find the exact point where a proposed contraction leaves a punctured plane.
- Verify a strong deformation retraction of the punctured plane onto a circle.
- Explain why homotopy equivalence is weaker than homeomorphism.
- Use winding to distinguish based loops in the punctured plane, while stating its scope.

A short prerequisite check should ask what continuity of a function of two variables means, what the segment between two vectors is, and what the equation exp(2πiθ)=1 implies about real θ. If complex notation is unfamiliar, replace exp(iθ) with (cos θ, sin θ). No group theory is required for the core examples.

The standard definitions align with [Hatcher Chapter 0](https://pi.math.cornell.edu/~hatcher/AT/ATch0.pdf). Path homotopy and the computation of the fundamental group of the circle appear in [Hatcher Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf). The formulas, questions, and solution sequence below form a lesson built around those standard notions.

## A possible ninety minute sequence

| Time | Mathematical work | Learner contribution |
| --- | --- | --- |
| 0–8 minutes | Compare a circle drawn in the plane with the same circle in the punctured plane. State a prediction about contraction. | Give a reason before seeing an animation. |
| 8–20 minutes | Define homotopy and path homotopy using a parameter square. | Identify which edges must stay fixed and explain the roles of the two parameters. |
| 20–32 minutes | Construct a straight-line homotopy in a convex set. | Verify endpoints and codomain membership; supply a counterexample without convexity. |
| 32–43 minutes | Try to contract the unit circle to its basepoint. | Locate an exact forbidden point, then explain why one failed formula is not a proof of impossibility. |
| 43–57 minutes | Construct the radial deformation retraction. | Verify the four defining properties, especially avoidance of the origin. |
| 57–69 minutes | Compare homotopy equivalence and homeomorphism. | Build the maps in both directions and give a reason the spaces are not homeomorphic. |
| 69–83 minutes | Define winding by a continuous lifted angle and state the lifting theorem. | Classify examples, including negative and zero winding; identify what remains to be proved. |
| 83–90 minutes | Complete an exit task without the worked example visible. | Reject a bad homotopy and construct a valid related one. |

For a sixty minute meeting, teach through homotopy equivalence and assign the winding section as a second lesson. The lifting theorem deserves time; rushing through it can replace a substantive argument with a misleading picture.

## Definitions and the parameter square

Let I=[0,1]. For continuous maps f,g:X→Y, a **homotopy from f to g** is a continuous map

H:X×I→Y

such that H(x,0)=f(x) and H(x,1)=g(x) for every x∈X. Write f≃g when such a map exists. The requirement is continuity in the pair (x,t), not merely continuity of each individual frame.

A path is a continuous map α:I→X. Two paths α and β from a to b are **homotopic relative to their endpoints** when there is a continuous H:I×I→X satisfying

H(s,0)=α(s),    H(s,1)=β(s),

H(0,t)=a,       H(1,t)=b

for every s,t∈I. Here s moves along a path and t moves through the deformation. The horizontal edges of the parameter square hold the starting and finishing paths; the vertical edges hold their endpoints. A based loop at b has a=b.

A homotopy of maps I→X need not keep endpoints fixed. For the fundamental group, the endpoint conditions are part of the definition. Free homotopy of loops permits a moving common basepoint but still requires H(0,t)=H(1,t). These are different conditions and should receive different labels in an interface.

A useful first exercise is to ask learners to translate each edge condition into a sentence. A second is to give a formula and ask for a boundary table at s=0, s=1, t=0, and t=1 before asking whether it is valid.

## Straight line homotopy and convexity

Suppose Y is a convex subset of R^m and f,g:X→Y are continuous. Define

H(x,t)=(1−t)f(x)+t g(x).

The formula is jointly continuous. Convexity puts every intermediate point in Y. At t=0 and t=1 it gives f and g. If f and g agree on a subset A⊆X, then H(a,t)=f(a)=g(a) for every a∈A, so the homotopy is relative to A.

For example, let α(s)=(s,0) and β(s)=(s,s(1−s)). Both go from (0,0) to (1,0), and

H(s,t)=(s,t s(1−s))

is a path homotopy relative to the endpoints in R².

The strategy is broader than this example: blend outputs when the codomain contains the segments you need. The hypothesis belongs to the codomain. The domain X does not have to be convex. A nonconvex codomain does not make every straight-line homotopy fail; it removes a general guarantee, so a particular formula needs its own membership check.

## A contraction that fails in the punctured plane

Let c(s)=exp(2πis), based at 1=(1,0). The formula

C(s,t)=(1−t)exp(2πis)+t

contracts c to the constant loop at 1 in the whole plane. The endpoints remain 1 throughout.

In X=C∖{0}, however,

C(1/2,1/2)=(1/2)(−1)+(1/2)=0.

The formula fails to take values in X. The failure occurs at an exact parameter pair, even if the rendering misses that sample. At each fixed t the image is a circle with center t and radius 1−t. It winds once around 0 for t<1/2 and zero times for t>1/2; at t=1/2 it passes through 0, where winding about 0 is undefined.

This establishes that this proposed formula is invalid in X. It does not, by itself, rule out every other possible contraction. Winding supplies the obstruction later in the lecture.

Use an origin marker and a mathematical status such as “outside the codomain at s=1/2, t=1/2.” A small disk drawn around the origin can help visibility but represents a point puncture only if the caption says so. Removing a disk of radius ε defines a different domain; every formula must be checked against the actual domain used.

## Radial deformation retraction

Take X=R²∖{0} and A=S¹={x∈R²:||x||=1}. Define r:X→A by r(x)=x/||x|| and let i:A→X be inclusion. Set

D(x,t)=((1−t)+t/||x||)x.

Check the properties in a fixed order:

1. D is jointly continuous because the norm is continuous and its denominator is nonzero on X.
2. D(x,0)=x and D(x,1)=x/||x||.
3. The scalar (1−t)+t/||x|| is strictly positive, so D(x,t)≠0 for every x∈X and t∈I.
4. If x∈S¹, then ||x||=1 and D(x,t)=x at every time.

Thus D is a **strong deformation retraction** of X onto A. Some texts, including Hatcher's convention, call this simply a deformation retraction and require the fixed-subspace condition as part of that term.

The radial coordinate changes by

||D(x,t)||=(1−t)||x||+t.

Consequently points inside the circle move outwards and points outside move inwards. Points on the circle remain fixed. A demonstration that moves only points outside the circle illustrates a restriction of this map, not its entire domain.

For integer n, a safe based loop for an interactive example is

γ_n(s)=(1+0.45 sin²(πs))exp(2πins).

It has γ_n(0)=γ_n(1)=1, and its radius is at least 1. Applying D gives

D(γ_n(s),t)=(1+0.45(1−t)sin²(πs))exp(2πins).

This keeps the basepoint fixed, keeps every point away from 0, and finishes at the standard n-turn loop. For n=0 it is an outward-and-returning radial loop rather than the constant loop until t=1. The minimum radius is exactly 1; a code check should test that fact, not infer it from plotted pixels.

## Homotopy equivalence and homeomorphism

A map f:X→Y is a **homotopy equivalence** when there exists a continuous g:Y→X with g∘f≃id_X and f∘g≃id_Y. A homeomorphism instead has a continuous inverse with the compositions equal to the identities. A homotopy equivalence need not be injective, surjective, or dimension preserving.

For the radial example, r∘i=id_A and i∘r≃id_X via the reversal of D. Therefore X≃S¹. They are not homeomorphic: S¹ is compact, X is not, and a homeomorphism preserves compactness. This gives a clean mathematical distinction without relying on the visual impression of dimension.

Likewise, a nonempty convex subset of R^m is contractible: choose y₀ in it and use (1−t)y+t y₀. In particular [0,1] is homotopy equivalent to a point, but it is not homeomorphic to a point because no bijection exists. “Contractible” means that the identity map is homotopic to a constant map; it does not mean that the space originally has only one point.

It is maps that are homotopic and spaces that are homotopy equivalent. A lesson should avoid using these expressions interchangeably.

## Winding number and the theorem behind the picture

For a continuous based loop γ:I→C∖{0} with γ(0)=γ(1)=1, normalize it:

u(s)=γ(s)/|γ(s)| ∈ S¹.

The **path lifting theorem for the circle** says that there is a unique continuous θ:I→R with θ(0)=0 and

u(s)=exp(2πiθ(s)).

Because u(1)=1, θ(1) is an integer. Define wind(γ,0)=θ(1). The lift θ records complete turns rather than resetting the displayed angle whenever it crosses a chosen branch cut. A single principal atan2 value is not a continuous angle around the whole circle.

State the two claims separately:

- Winding is unchanged under a based homotopy through loops avoiding 0.
- In the punctured plane, two based loops at 1 are homotopic relative to endpoints if and only if they have the same winding number.

The first claim uses homotopy lifting. Given a based homotopy, lift its normalized loops with starting angle 0. The final lifted angle varies continuously with homotopy time and is always an integer, so it is constant. The existence of that continuous lifted homotopy is the theorem doing the work. Hatcher's Chapter 1, Theorem 1.7 and its lifting argument, supplies a rigorous route to this result.

The second claim has a useful explicit construction once path lifting is available. Write

γ(s)=ρ(s)exp(2πiθ(s)),    n=θ(1),

where ρ(s)=|γ(s)|>0. Then

F(s,t)=((1−t)ρ(s)+t)exp(2πi((1−t)θ(s)+t n s))

is a based homotopy from γ to ω_n(s)=exp(2πins). Its radius is positive; at s=0 and s=1 the radius is 1 and the exponential is 1. Thus every based loop has a representative ω_n. Two loops with the same n can be joined by following one such homotopy and then the reverse of the other.

For piecewise continuously differentiable loops, a computational expression is

wind(γ,0)=(1/(2π))∫₀¹ (x(s)y′(s)−y(s)x′(s))/(x(s)²+y(s)²) ds.

The lifting definition applies to all continuous loops; this derivative formula needs its regularity hypothesis. A numerical approximation to the integral is not the definition of homotopy invariance.

A once-around loop has winding 1 and a constant loop has winding 0, so no based contraction of the former exists in the punctured plane. Its contraction in the whole plane remains valid because the origin is allowed there.

## What winding does and does not classify

For loops in R²∖{0}, winding about the missing point classifies the based homotopy classes, and concatenation adds winding numbers. This is the statement π₁(R²∖{0},1)≅Z. Reversing a loop changes the sign; traversing it twice doubles the integer. In this particular space, winding also classifies free loop homotopy classes because the fundamental group is abelian.

The same integer is not a universal measure of all holes in all spaces. In the plane with two points removed, a loop that goes around the first hole, then the second, then reverses the first, then reverses the second has zero total winding around each puncture but is not nullhomotopic. The fundamental group is a free group on two generators; the order of the traversals matters. Treat this as an extension requiring an additional theorem, not as a consequence established by the single-hole demo.

A knotted circle drawn in three dimensions is still homeomorphic to S¹ as a space. Questions about deforming an embedded knot while preserving its embedding concern a different equivalence relation. Ordinary homotopies allow different points of a loop to meet. “No tearing” alone does not specify what is permitted; the domain, codomain, and constraints do.

## Exercises

These are original lesson exercises, ordered from verification to transfer. Learners should attempt them before opening solutions.

### Exercise 1 Translate the definition

For H:I×I→X, identify the conditions that make it a homotopy from a path α to a path β relative to their common endpoints a and b. Explain the difference between s and t.

### Exercise 2 Build a homotopy in the plane

For α(s)=(s,0) and β(s)=(s,s(1−s)), construct a path homotopy relative to endpoints in R² and verify its boundary conditions.

### Exercise 3 Find the failure

For C(s,t)=(1−t)exp(2πis)+t, decide whether C is a contraction relative to the basepoint in R² and in R²∖{0}. Give an exact witness for any failure. Explain why the failure of this formula alone is not an impossibility proof.

### Exercise 4 Verify the retraction

Show that D(x,t)=((1−t)+t/||x||)x defines a strong deformation retraction R²∖{0}→S¹. Find the motion of a point with initial norm 1/3 and of a point with initial norm 3.

### Exercise 5 Change the radius

Let A_R={x∈R²:||x||=R} for R>0. Construct a strong deformation retraction R²∖{0} onto A_R. State what changes when the puncture is at a∈R² instead of 0.

### Exercise 6 Separate the equivalences

Give one pair of homotopy equivalent spaces that are not homeomorphic. Supply maps, homotopies, and a reason no homeomorphism exists.

### Exercise 7 Read winding from a formula

For integer n, compute the winding of γ_n(s)=(1+0.45 sin²(πs))exp(2πins). Can γ_2 and γ_−1 be based homotopic in the punctured plane? Can γ_0 be contracted there?

### Exercise 8 Repair a proof

A learner writes: “Every nonzero point can be moved radially to the circle. Therefore the disk deformation retracts onto its boundary.” Identify the missing point and explain why assigning that point any convenient value does not fix the proof.

### Exercise 9 Check a tempting interpolation

Someone proposes H(s,t)=exp(2πi((1−t)n+t m)s) as a based homotopy from ω_n to ω_m for distinct integers n,m. Identify the boundary condition that fails, and choose one intermediate t where it fails.

### Exercise 10 Transfer to a new space

Show that R³∖{0} strongly deformation retracts onto S². Does the radial argument alone prove that π₁(S²) is trivial? Explain what it does establish.

### Exercise 11 Evaluate numerical evidence

A program samples a proposed H at 10,000 parameter pairs and finds no value with norm less than 0.01. What has it shown? What additional information could turn a finite computation into a rigorous avoidance certificate?

## Solutions and mathematical feedback

### Solution 1

H(s,0)=α(s), H(s,1)=β(s), H(0,t)=a, and H(1,t)=b for every s,t∈I, and H must be jointly continuous with values in X. The path parameter is s; the homotopy time is t. A list of individually continuous frames omits the continuity of the full two-parameter map.

### Solution 2

Use H(s,t)=(1−t)α(s)+tβ(s)=(s,t s(1−s)). It is continuous and lies in R². At t=0 and t=1 it gives α and β. At s=0 it is (0,0); at s=1 it is (1,0), independently of t. If a learner checks only t=0 and t=1, prompt them to check the other two edges.

### Solution 3

C is a valid based contraction in R²: its boundary values are c(s), 1, 1, and 1. It is invalid in the punctured plane because C(1/2,1/2)=0. Another formula might conceivably work; ruling out all formulas requires an invariant or another general argument. The winding theorem rules them all out here.

### Solution 4

The denominator is defined and continuous for x≠0. The positive multiplier prevents 0, t=0 gives x, t=1 gives x/||x||, and ||x||=1 makes D(x,t)=x. The norm changes linearly: for initial norm 1/3 it is 1/3+2t/3, and for initial norm 3 it is 3−2t. Both stay positive and finish at 1.

### Solution 5

Use D_R(x,t)=((1−t)+tR/||x||)x. Its norm is (1−t)||x||+tR>0, and all points of A_R remain fixed. For a puncture at a, use

D_{a,R}(x,t)=a+((1−t)+tR/||x−a||)(x−a)

on R²∖{a}; it fixes the circle centered at a with radius R. The formula has to translate both the norm and the vector, not only one of them.

### Solution 6

Take X=R²∖{0} and Y=S¹. Let f(x)=x/||x|| and g be inclusion. Then f∘g=id_Y and g∘f≃id_X by radial deformation, with the time direction reversed if necessary. Y is compact but X is not, so they cannot be homeomorphic. Another example is [0,1] and a point, using a constant projection, inclusion of 0, and H(x,t)=(1−t)x.

### Solution 7

The normalized loop is exp(2πins), so θ(s)=ns is its lift beginning at 0, and the winding is n. Winding 2 differs from −1, so those loops are not based homotopic in the punctured plane. The n=0 loop contracts through D to the constant loop at 1; its positive radial factor does not create a turn.

### Solution 8

The radial formula is undefined at 0. It cannot be continuously extended to 0 while agreeing with x/||x|| away from 0: approaching 0 along different rays gives different boundary points. That invalidates this construction. To exclude every retraction of the disk onto its boundary, use the winding theorem: compose any proposed retraction with the disk's based linear contraction of its boundary loop, producing a forbidden contraction in S¹. Separate the invalid formula from the broader nonexistence argument.

### Solution 9

At s=1 the value is exp(2πi((1−t)n+t m)), which need not be 1. Choose t=1/(2|m−n|); it lies in (0,1) and makes the coefficient n±1/2, so H(1,t)=−1 while H(0,t)=1. Intermediate paths are not closed loops. The formula stays on S¹, but codomain membership alone does not check the boundary conditions.

### Solution 10

Use the same formula D(x,t)=((1−t)+t/||x||)x for vectors in R³. Its verification is unchanged, so R³∖{0}≃S². This transfers questions about homotopy groups from one space to the other. It does not itself compute either fundamental group; proving π₁(S²)=0 needs an additional argument. A point removed from three-dimensional space is not classified by the planar single-hole winding integer.

### Solution 11

It has shown clearance at the sampled points, subject to numerical error. A continuous map can approach or hit 0 between them. A rigorous bound on how quickly H varies, together with a covering mesh, can certify a lower bound everywhere. For example, a known Lipschitz constant L, a mesh whose every parameter pair is within δ of a sample, and certified sampled norm greater than Lδ imply positivity throughout. Interval arithmetic with valid enclosures is another route. Ordinary floating-point sampling without these bounds does not supply that certificate.

## Requirements for an interactive homotopy demonstration

The mathematical model should be explicit enough that its validity can be checked independently of the rendering.

- Display the space, the parameter interval, and whether endpoints are fixed. A punctured plane, a plane with a removed disk, and a circle are different codomains.
- Keep the basepoint visibly fixed for based loops. A positive oscillating radius is insufficient if it changes the endpoint value with homotopy time; a factor sin²(πs) correctly vanishes at both endpoints.
- Restrict turn count n to integers when presenting closed standard loops. Interpolating between distinct integer turn counts can break closure even when every point remains on a circle.
- Distinguish the path parameter from deformation time. A marker at one chosen s should help reveal that each point follows its own trajectory.
- Use an analytic status for the exact origin crossing in the failed contraction. Do not call an almost-zero sampled value a proof, and do not describe a valid single-hole homotopy when the formula has already left the codomain.
- When drawing polygonal samples of a circle, the line segments are an approximation to the analytic loop. A badly undersampled high-turn loop can alias into the wrong apparent geometry. Use a sufficient sample count tied to turn count, or reduce the permitted count.
- If winding is estimated from polygonal data, first verify that the polygon is closed and that no segment crosses the puncture. The result concerns that polygon, not an arbitrary unseen curve between samples. atan2 angle unwrapping needs adequate sampling and a policy for near-origin segments.
- Repeated traversal can have the same geometric image but a different parameterized loop. Include direction markers or lifted-angle readouts so a once-around and twice-around circle are distinguishable.
- Self-intersections are allowed for ordinary loop homotopy. A drawing that crosses itself has not automatically violated continuity or puncture avoidance.
- Provide static endpoints, a formula, and a written explanation beside any animation. Support keyboard controls, direct time entry, reduced motion, and a pause control. Validity and errors should not depend on color alone.
- Reset must restore both parameters and mathematical status. Every control should have a visible label, an admissible range, and a predictable effect.

A useful correctness review checks the endpoints, joints between formula branches, domain exclusions, and parameter extremes. For these explicit formulas, an algebraic verification is stronger than dense random sampling. Small numerical checks remain useful for detecting transcription errors in the implementation.

## Evaluating learning in this workspace

Begin with mathematical and usability quality before making an efficacy claim. Have a mathematically qualified reviewer check definitions, formulas, solutions, and the distinction between proof and illustration. Run keyboard and narrow-screen checks. Then observe a small set of learners attempting tasks; this can expose ambiguous wording and controls but cannot estimate a reliable population learning effect.

A first formative study could involve roughly eight to twelve learners from the intended audience, each using one lesson while explaining their reasoning. This is a proposed usability sample, not a power calculation. Record where they confuse parameters, infer that sampling is proof, or conflate different spaces. Revise those failures before planning a comparative study. Do not recruit, contact, or record learners automatically as part of development.

For a comparison, define one specific intervention. For example, compare the same homotopy lesson with prediction and explanation prompts against the same lesson with the same formulas and controls but without those prompts. Equalize content and exposure time as far as practical. This addresses the prompts; comparing unrelated sites would confound instruction, prior knowledge, design, and content.

Use an initial prerequisite assessment, an immediate assessment, and an assessment after a stated delay such as one week. The delay is a design choice to test retention, not an optimal schedule established by the cited studies. Random assignment helps causal interpretation. A crossover design can improve efficiency but needs counterbalanced topics and attention to carryover; the same concept cannot be made unfamiliar again.

The primary outcome should be performance on unseen mathematical tasks scored with a rubric fixed before collecting outcomes. For the homotopy lesson, useful task types are:

| Outcome | Example unseen task | What a strong response includes |
| --- | --- | --- |
| Definition use | Inspect a new two-parameter formula with one moving endpoint. | Identifies the violated edge condition and gives a witness. |
| Construction | Retract a punctured plane onto a circle centered at a nonzero point. | Correct translated formula, continuity, positivity, endpoint, and fixed-circle checks. |
| Proof evaluation | Critique a claim supported by many sampled frames. | Distinguishes observations from a universal argument and proposes a valid bound or proof. |
| Transfer | Analyze whether the same radial formula works in R³. | Verifies the retraction while avoiding an unsupported conclusion about fundamental groups. |
| Scope | Compare a one-hole winding claim with a two-hole claim. | States the single-hole classification and recognizes the need for additional invariants or structure. |

A simple initial rubric can award 0 for an incorrect or absent argument, 1 for a correct idea with a material gap, and 2 for a complete correct argument on each task. Calibrate it with real examples and use a second scorer on a subset without revealing lesson allocation. Report agreement and disagreements, rather than treating scoring as automatic ground truth.

Record completion, time, hint use, and confidence as secondary outcomes. More time can mean effort or confusion; fewer hints can mean independence or disengagement. Interpret those traces alongside responses. Avoid treating clicks, time spent, satisfaction, or a generated progress badge as direct measures of understanding.

A small randomized feasibility pilot can reveal recruitment, timing, missing-data, and scoring problems, but its effect estimate will be imprecise. Choose the sample for a later effectiveness study through a power or precision calculation based on a prespecified meaningful difference, plausible variance, and the actual assignment structure. Do not use Freeman's pooled STEM effect as the assumed effect of one feature without a justification. Report denominators, missing follow-ups, uncertainty intervals, prior knowledge, and the actual implementation tested.

## Further topology study

After the core lecture, a productive sequence is path concatenation and reversal, the fundamental group, the lifting argument for S¹, examples from graphs and multiple punctures, and applications such as the no-retraction theorem for the disk. Hatcher Chapters 0 and 1 provide the principal next reading. The [complete book page](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html) supplies the rest of the text.

[MIT OpenCourseWare Algebraic Topology I notes by Haynes Miller](https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/resources/mit18_905f16_lecture_notes/) offer a more advanced continuation. The course is labeled graduate level and develops substantially more machinery; it is not a prerequisite for this introductory lesson.

## Source details

The links below identify the primary studies and authoritative mathematical materials used above. Publication years refer to the work, not to a repository's later crawl or upload date. Sources were checked on 20 October 2026.

1. Freeman, S., et al. (2014). *Active learning increases student performance in science, engineering, and mathematics.* PNAS 111, 8410–8415. [Full article](https://pmc.ncbi.nlm.nih.gov/articles/PMC4060654/). DOI 10.1073/pnas.1319030111.
2. Theobald, E. J., et al. (2020). *Active learning narrows achievement gaps for underrepresented students in undergraduate science, technology, engineering, and math.* PNAS 117, 6476–6483. [Full article](https://pmc.ncbi.nlm.nih.gov/articles/PMC7104254/). DOI 10.1073/pnas.1916903117.
3. Roediger, H. L., and Karpicke, J. D. (2006). *Test-enhanced learning: Taking memory tests improves long-term retention.* Psychological Science 17, 249–255. [Publisher abstract](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/). DOI 10.1111/j.1467-9280.2006.01693.x.
4. Cepeda, N. J., et al. (2006). *Distributed practice in verbal recall tasks: A review and quantitative synthesis.* Psychological Bulletin 132, 354–380. [University repository](https://digitalcommons.usf.edu/psy_facpub/1771/). DOI 10.1037/0033-2909.132.3.354.
5. Rohrer, D., and Taylor, K. (2006). *The effects of overlearning and distributed practise on the retention of mathematics knowledge.* Applied Cognitive Psychology 20, 1209–1224. [University repository](https://digitalcommons.usf.edu/psy_facpub/1770/). [Author-hosted article](https://uweb.cas.usf.edu/~drohrer/pdfs/Rohrer%26Taylor2006ACP.pdf). DOI 10.1002/acp.1266.
6. Sweller, J., and Cooper, G. A. (1985). *The use of worked examples as a substitute for problem solving in learning algebra.* Cognition and Instruction 2, 59–89. [Primary article copy](https://onderwijs.felienne.nl/vakdidactiek/materiaal/sweller_worked_examples.pdf). DOI 10.1207/s1532690xci0201_3.
7. Weber, K. (2001). *Student difficulty in constructing proofs: The need for strategic knowledge.* Educational Studies in Mathematics 48, 101–119. [Publisher abstract](https://link.springer.com/article/10.1023/A:1015535614355). DOI 10.1023/A:1015535614355.
8. Laursen, S. L., Hassi, M.-L., Kogan, M., and Weston, T. J. (2014). *Benefits for women and men of inquiry-based learning in college mathematics: A multi-institution study.* Journal for Research in Mathematics Education 45, 406–418. [Author accepted manuscript](https://www.colorado.edu/eer/sites/default/files/2024-09/LaursenIBLbenefits2014authorMS.pdf). DOI 10.5951/jresematheduc.45.4.0406.
9. Kogan, M., and Laursen, S. L. (2014; first published online 2013). *Assessing long-term effects of inquiry-based learning: A case study from college mathematics.* Innovative Higher Education 39, 183–199. [Open access article](https://link.springer.com/article/10.1007/s10755-013-9269-9). DOI 10.1007/s10755-013-9269-9.
10. Deslauriers, L., et al. (2019). *Measuring actual learning versus feeling of learning in response to being actively engaged in the classroom.* PNAS 116, 19251–19257. [Primary abstract and publication record](https://pubmed.ncbi.nlm.nih.gov/31484770/). DOI 10.1073/pnas.1821936116.
11. Hatcher, A. (2002). *Algebraic Topology*, Chapter 0, geometric notions, homotopy, deformation retraction, and homotopy equivalence. [Author-hosted chapter](https://pi.math.cornell.edu/~hatcher/AT/ATch0.pdf).
12. Hatcher, A. (2002). *Algebraic Topology*, Chapter 1, path homotopy and the fundamental group; see especially Theorem 1.7 and its lifting proof. [Author-hosted chapter](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf).
13. Miller, H. (2016 course). *Algebraic Topology I lecture notes.* MIT OpenCourseWare 18.905. [Course resource](https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/resources/mit18_905f16_lecture_notes/).


## Homotopy proof obligations and numerical normalization

The homotopy constructions use the angle and homotopy lifting results stated
in the lecture. Convexity supplies the interpolation argument in ℝᵈ (or a real
topological vector space with continuous vector operations); it is not by itself
a continuity hypothesis for an arbitrary algebraic vector space. The interval
comparison uses [0,1], since a singleton interval is homeomorphic to a point.

A numerical radial normalization should scale coordinates by their maximum
absolute coordinate before taking a directional norm. For example, the original
norm of [Number.MIN_VALUE, Number.MIN_VALUE] is subnormal and rounds so coarsely
that dividing its coordinates by that norm gives [1,1], whose norm is √2 rather
than 1. Scaling first also avoids overflow for maximum finite coordinates.
These are implementation limits, independent of the written topological proof.

### Basepoints, retracing and the winding arguments


Exercise 8 uses two facts for arbitrary distinct endpoints: changing a loop's basepoint along a connecting path, and cancellation of a path followed by its reverse. Both dependencies are explicit in the worked solution.

One explicit loop of winding one based at any nonzero point a is λ_a(s)=rotation(2πs)a. For a path σ starting at a, the retraced loop σ followed by its reverse contracts by traversing a progressively shorter initial portion of σ. In a parameter formula, use σ((1−t)h(s)), where h(s)=2s for s≤1/2 and h(s)=2−2s for s≥1/2. This stays based at a throughout. These observations justify the cancellation used in the solution.

### Central constructions and hypotheses

- The plane paths share their stated endpoints, and straight-line interpolation fixes those endpoints.
- The failed circle contraction fixes its basepoint, has exact minimum radius |1−2t|, and meets the origin at (s,t)=(1/2,1/2). Its winding is 1 before that time, undefined at it, and 0 afterwards.
- The radial deformation has positive radius (1−t)||x||+t and fixes every point of S¹. It therefore supplies a strong deformation retraction, not a contraction to one point.
- The chosen γ_n loops are based at (1,0), stay at radius at least 1, and retract to the standard n-turn representative. At n=0 the loop is radial out-and-back before the end of the deformation.
- The compactness argument distinguishes the punctured plane from S¹ up to homeomorphism, while the displayed maps establish homotopy equivalence.
- The based winding argument correctly requires a continuous lifted angle across the homotopy. Its constancy follows from continuity and integer values, rather than integer values alone.
- The free-contraction argument correctly uses the lifted endpoint difference θ(1,t)−θ(0,t). A free homotopy does not generally keep θ(0,t)=0.
- Interpolation of the lifted angle θ(s) with 2πns keeps both endpoint angles fixed and remains circle-valued. Together with radial retraction it proves that equal winding is sufficient for based homotopy in this space.
- The warning about two punctures is correct: winding around each puncture gives an abelian invariant that does not fully classify based loops.
- Exercises 1–7 have correct constructions and conclusions, subject to the interval wording noted above for the separate multiple-choice check. The pasting argument in Exercise 2 and input interpolation in Exercise 6 are valid for general topological targets.

The constructions and formulas establish the stated mathematical conclusions under these hypotheses; they do not establish browser behavior, accessibility or measured educational effectiveness.
