# Recitation A. From a candidate answer to a proof of convergence

**Role:** guided recitation. Work after the proof, completeness, and sequences lessons. Bring paper: the point is to make every choice in an argument visible before reading the polished proof.

## A numerical guess is the beginning of the question

Define c₁=0 and cₙ₊₁=(cₙ+2)/2. The first terms are 0, 1, 3/2, 7/4. They suggest 2. A common attempt substitutes L=(L+2)/2 and gets L=2. That computation identifies the only *possible* finite limit; it has not shown that the terms approach one.

We first prove an invariant. If 0≤cₙ≤2, then 1≤(cₙ+2)/2≤2. The base term is in [0,2], so all terms are. Next, cₙ₊₁−cₙ=(2−cₙ)/2≥0. The sequence is increasing and bounded above; monotone convergence gives a real limit. Now continuity of the affine map permits the fixed-point equation and yields L=2. Each line has a different job: induction keeps the map in range, monotonicity orders the terms, completeness supplies the limit, and algebra identifies it.

We can go further without relying on a graph. Let eₙ=2−cₙ. Then e₁=2 and eₙ₊₁=eₙ/2, so eₙ=2/2ⁿ⁻¹. To guarantee |cₙ−2|<0.01, choose n with 2/2ⁿ⁻¹<0.01; n=9 works. This error estimate is a proof of convergence on its own. It also supplies an algorithmic stopping rule: compute until the bound, not merely until two displayed decimals happen to agree.

## An argument that breaks under a small change

Set d₁=0 and dₙ₊₁=1−dₙ. Its fixed-point equation gives L=1/2, but the actual sequence alternates 0,1,0,1,… . The earlier proof fails at the monotonicity step; the map reverses order and supplies no shrinking error. A fixed-point equation is an implication from known convergence to a candidate value, not a general convergence theorem.

For a second repair, suppose someone writes: “The terms of (aₙ) eventually lie in [0,1], so the sequence converges by completeness.” Completeness says every nonempty bounded set has a supremum, not that arbitrary bounded sequences converge. The sequence (−1)ⁿ is a counterexample after shifting and scaling it to [0,1]. What boundedness *does* supply is a convergent subsequence. If a proof needs convergence of the entire sequence, it must add monotonicity, Cauchy control, or another argument that makes all late terms agree.

## The quantifier drill

Convergence to L says: given ε>0, choose N, then **every** n≥N works. Cauchy convergence says: given ε>0, choose N, then **every pair** m,n≥N works. A graph can show finitely many terms after a displayed N; it cannot check all later indices. In the recursion cₙ the explicit bound handles those indices because 2/2ⁿ⁻¹ decreases with n.

```exercise
{"id": "analysis-recitation-cauchy", "type": "choice", "prompt": "Which statement is sufficient to show \\((a_n)\\) is Cauchy?", "options": [{"label": "For every ε>0, some pair m,n has |aₘ−aₙ|<ε.", "correct": false, "feedback": "One close pair says nothing about the rest of the tail."}, {"label": "For every ε>0, some N makes |aₘ−aₙ|<ε for all m,n≥N.", "correct": true, "feedback": "Yes. A single threshold controls every late pair."}, {"label": "Every aₙ lies in a bounded interval.", "correct": false, "feedback": "Bounded oscillating sequences need not be Cauchy."}], "hints": ["Keep the order: choose tolerance, choose threshold, test all late pairs."], "solution": "The Cauchy condition says that for every ε>0 there exists N such that all m,n≥N satisfy \\(|a_m-a_n|<\\varepsilon\\). A single close pair does not control a tail, and boundedness alone permits oscillation.", "transfer": "Changed case: for a_n=1/n, give an explicit N(ε) proving the Cauchy condition for all late pairs. Do not use the value of the limit as a substitute for the pair estimate.", "transferSolution": "For m,n≥N, both 1/m and 1/n lie in (0,1/N], so |1/m−1/n|<1/N. Choose any integer N>1/ε. Then 1/N<ε, and every late pair meets the Cauchy bound."}
```

```exercise
{"id": "analysis-recitation-fixedpoint", "type": "written", "prompt": "Explain in four sentences why solving a fixed-point equation cannot by itself establish convergence of an iteration. Use \\(d_{n+1}=1-d_n\\), d₁=0 as your counterexample, then name one valid extra route to convergence.", "hints": ["List four terms and two subsequences.", "A fixed-point identity may be passed to the limit only after convergence is established."], "rubric": ["Identifies 1/2 as a candidate fixed point", "Shows the generated sequence alternates 0 and 1", "Explains that passing to a limit presupposes convergence", "Names and accurately describes a sufficient route such as a contraction, monotone boundedness, or Cauchy estimate"], "solution": "If the iteration converged, continuity would force its limit to solve \\(L=1-L\\), so L=1/2 is only a candidate. The actual terms are 0,1,0,1 and have subsequences with different limits. Therefore this iteration does not converge. A contraction estimate |dₙ₊₁−L|≤q|dₙ−L| with q<1 would have supplied a valid additional convergence argument, but it does not hold here.", "transfer": "Changed case: u₁=0 and uₙ₊₁=2−uₙ/2. The orbit alternates around its fixed point. Prove it nevertheless converges and give an explicit error bound.", "transferSolution": "The fixed point solves L=2−L/2, so L=4/3. Subtracting L from the recurrence gives uₙ₊₁−L=−(uₙ−L)/2. Therefore |uₙ−L|=(4/3)2^{−(n−1)}→0. The sign alternates but the error shrinks geometrically; monotonicity was not needed."}
```

**Discussion prompt:** Compare the direct error proof for cₙ with the monotone-convergence proof. Which one gives a stopping index for an assigned tolerance? Which proof exposes the precise use of completeness?
