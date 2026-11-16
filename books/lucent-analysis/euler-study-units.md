# Return to analysis: justify the method and its assumptions

These public written companions extend the [proof bridge](proof-bridge.md) and [completeness chapter](completeness.md). They are unassessed self-study with public hints, solutions and descriptive rubrics. No automated proof grade, hidden assessment status or qualified human approval is claimed.

Return after a gap from the original unit, start without the old proof, and preserve your first attempt before opening help. Record the actual date, earlier exposure and assistance. If the answer has been read before, call the activity reconstruction or supported practice. A suggested later sitting is not an observed delay or a claim of retained mastery.

## First proof return

Choose a method from the claim's logical structure. The tasks do not prescribe a proof method. A counterexample settles a false universal statement; examples alone do not settle a true one.

```exercise
{"id":"euler-proof-method-return","type":"written","prompt":"For an arbitrary integer n, decide whether this claim is true: if n²+2n is odd, then n is odd. Give a complete proof or counterexample. A colleague then replaces both occurrences of ‘is odd’ by ‘is divisible by 4’. Decide the new claim separately and justify your decision. State the domain of every auxiliary integer you introduce.","hints":["To prove the original implication, consider what its contrapositive says for an even n. The changed divisibility claim is a different statement.","An even input n=2k makes n²+2n=4k²+4k. For the changed claim, inspect a small even integer that is not a multiple of four."],"rubric":["Starts with arbitrary integer n rather than a finite list of examples","Uses a logically valid direct, contrapositive or equivalent argument for the oddness claim","Keeps the auxiliary parity witness integral and justifies the conclusion by a definition","Separately refutes the changed divisibility-by-four claim with a valid integer witness","Does not transfer the original parity proof to a stronger unsupported modulus claim"],"solution":"The oddness claim is true. Prove its contrapositive: if n is even, write n=2k for an integer k. Then n²+2n=4k²+4k=2(2k²+2k), an even integer. Thus n²+2n cannot be odd when n is even, so an odd value requires n odd. This argument covers negative, zero and positive integers. The changed claim is false: n=2 gives n²+2n=8, which is divisible by 4, but n=2 is not divisible by 4. The original proof only excluded even n when the output is odd; it did not prove that every divisibility condition transfers from the expression to n.","transfer":"At a later sitting, decide whether 3^n≥2n+1 for every integer n≥0. Give a complete argument and determine every equality case. Do not use a finite table as a proof. A correct alternative method is welcome if its hypotheses and any theorem used are stated.","transferSolution":"The claim is true. At n=0 it reads 1≥1. Suppose 3^n≥2n+1 for an arbitrary integer n≥0. Then 3^(n+1)=3·3^n≥3(2n+1)=6n+3≥2n+3=2(n+1)+1, since 4n≥0. Induction proves all n≥0. Equality holds at n=0 and n=1. For a transition with n≥1 the last comparison is strict because 4n>0, so 3^(n+1)>2(n+1)+1. Every exponent at least two has that form; there are no other equality cases. The argument verifies the starting case, uses an arbitrary induction hypothesis and derives rather than assumes the next case."}
```

## First proof feedback and repair

<details>
<summary>Use after an attempt: find the first unsupported implication</summary>

- **Several successful inputs were called a proof.** Introduce an arbitrary integer and use its definition or a valid general theorem. A single counterexample is enough only when refuting the changed false claim.
- **The converse was substituted for the contrapositive.** Write the implication and its negations before calculating. Proving odd n gives an odd expression is not by itself a proof of the requested implication.
- **Parity reasoning was carried into divisibility by four.** A stronger-looking hypothesis can require a new argument. The explicit n=2 witness diagnoses the failed claim.
- **The induction started at one and ignored zero.** The stated domain includes zero. Check it, keep the induction index arbitrary and justify the inequality in the step.
- **Only one equality case was retained.** Inspect when every inequality in the step can be an equality. The transition from zero to one preserves equality; subsequent transitions are strict.

Use the rubric descriptively: justified, incomplete or not yet justified, with a line of evidence. Do not turn these self-ratings into a numerical pass threshold or an external proof grade.

</details>

Repair quantifiers or contraposition in the [logic refresher](../lucent-refresher/logic-proof.md); repair arbitrary-object and induction structure in the [proof bridge](proof-bridge.md). Then retry without copying the reference argument.

## Completeness and bisection return

Here n counts completed bisections, starting at n=0. Use the already proved nested-interval theorem over ℝ and the Archimedean property. Do not assume the desired square root exists or invoke continuity to create it.

```exercise
{"id":"euler-completeness-root-return","type":"written","prompt":"Let S={x∈ℝ:x≥0 and x²<5}. Begin with [a_0,b_0]=[2,3]. At each midpoint m, replace a by m if m²<5; otherwise replace b by m. Compute the first two retained brackets. Prove the endpoint invariant, nesting and width after n bisections. Use completeness to obtain a common real point c, prove c=sup S and c²=5 without presuming a square root or continuity, and bound the midpoint error. Finally repeat the finite construction over ℚ and identify precisely the failed infinite conclusion.","hints":["Maintain 0≤a_n<b_n, a_n²<5≤b_n². To show that a_n is not an upper bound, choose h>0 from the positive residual budget 5−a_n².","Both c² and 5 lie between a_n² and b_n². Their distance is at most (b_n−a_n)(b_n+a_n)≤6·2^(−n). For the rational failure, use lowest terms and the square residues modulo 5."],"rubric":["Computes the first brackets and proves the sign/non-upper/upper endpoint invariant","Derives nesting and width 2^(−n) for all n≥0","Uses real completeness for existence and shrinking widths for uniqueness","Proves leastness and c²=5 without assuming attainment, a square root or continuity","Obtains midpoint error at most 2^(−n−1)","Preserves finite rational-stage facts while proving that no common rational point exists"],"solution":"Initially 2²<5≤3². The first midpoints are 5/2 and 9/4, whose squares exceed 5; the retained brackets are [2,5/2] and [2,9/4]. Midpoint classification preserves 0≤a_n<b_n and a_n²<5≤b_n². A left endpoint a is not an upper bound for S: choose 0<h<min(1,(5−a²)/(2a+1)); then (a+h)²<a²+h(2a+1)<5. Each right endpoint b bounds S, since x≥b≥0 implies x²≥b²≥5. The brackets nest and halve their initial width one, giving b_n−a_n=2^(−n). Real completeness through the nested-interval theorem supplies a unique common c. Every x∈S satisfies x<b_n for every n. If x>c, choose 2^(−n)<x−c; then b_n≤c+2^(−n)<x, a contradiction. Thus c bounds S. If M<c, choose 2^(−n)<c−M; then a_n≥c−2^(−n)>M with a_n∈S, so M cannot bound S. Hence c=sup S. Because c and the endpoints lie in [2,3], both c² and 5 lie in [a_n²,b_n²]. Therefore |c²−5|≤(b_n−a_n)(b_n+a_n)≤6·2^(−n) for every n, forcing c²=5 by the Archimedean property. This does not use continuity. A midpoint is within half its bracket width of c, so its error is at most 2^(−n−1). All finite endpoints remain rational. But if c=p/q in lowest integer terms with q≠0, p²=5q² forces 5 to divide p: squares modulo 5 are 0,1,4. Writing p=5r then forces 5 to divide q too, a contradiction. Thus the rational intervals have no common rational point. Their finite invariants and error widths survive; existence of a common point in ℚ does not.","transfer":"On a later return, find the complete intersection of J_n=[−1/n,2+1/n] for integers n≥1. Prove both inclusions and state what happens to the interval lengths. Then treat these same rational-endpoint intervals as subsets of ℚ and identify their intersection there. Explain why the root construction's failed rational existence step does not imply that every nested rational interval family has empty intersection.","transferSolution":"Every x∈[0,2] lies in every J_n. If x<0, choose n>1/(−x); then −1/n>x, so x is excluded. If x>2, choose n>1/(x−2); then 2+1/n<x, again excluding x. Thus the real intersection is exactly [0,2]. The intervals are nonempty, closed, bounded and nested, but their lengths are 2+2/n, tending to 2 rather than zero. Closed bounded nested intervals over ℝ still have a common point; shrinking length is the extra condition used to obtain uniqueness. In ℚ the intersection is exactly ℚ∩[0,2], which is nonempty and has many points, by the same inclusions. Incompleteness means the universal rational existence guarantee fails, not that every particular family fails. The earlier root brackets force a unique irrational real point; these different brackets retain rational points throughout."}
```

## Completeness feedback and repair

<details>
<summary>Use after an attempt: separate finite control, existence and uniqueness</summary>

- **A negative residual was called the whole endpoint argument.** In this polynomial construction, justify a strictly larger member using the displayed positive perturbation budget. Membership and failure to be an upper bound are different claims.
- **Shrinking widths were said to create a point.** Name the real completeness/nested-interval step. The rational construction preserves the widths while losing that existence guarantee.
- **A continuous square function was invoked before continuity was available.** Use the exact factorization b²−a²=(b−a)(b+a) and the uniform bound a+b≤6 instead.
- **The square root was assumed in the definition or error estimate.** Obtain c from completeness first. Only after proving c²=5 is it legitimate to identify c as the positive square root.
- **Nonshrinking intervals were called disjoint or empty.** Prove an actual exclusion. In the changed task all of [0,2] survives; failure of a uniqueness hypothesis is not failure of existence.
- **Incompleteness was interpreted as universal failure.** Compare the forced irrational singleton with the rational points explicitly retained by J_n.

Retain the first proof and mark where each rubric condition is actually justified. Correct midpoint arithmetic without the existence/leastness argument is partial work. A complete self-comparison is still not a qualified external proof decision.

</details>

Return to [Bounds, completeness, Archimedean estimates and nested intervals](completeness.md). If the difficulty is the order of an arbitrary tolerance and its chosen index, use [the proof bridge](proof-bridge.md) before retrying the changed family.
