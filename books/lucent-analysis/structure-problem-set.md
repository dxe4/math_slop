# Problem set: structure, tails, and approximation

**Role:** independent proof set and cumulative assessment of A2, A4, A5, A11, and A12. Suggested time: two sessions of 75 minutes, followed by a separate review session. Write proofs before opening hints. The eight problems total 80 points. Each submitted response is saved for self-review; numerical checks cannot certify a proof.

## 1. Density does not count points (8 points)

Prove that the algebraic numbers in \([0,1]\) are countable. Then prove that the transcendental numbers in \([0,1]\) are uncountable. Explain why density of the algebraic numbers would not alter the second conclusion.

```exercise
{"id":"analysis-structure-pset-cardinality","type":"written","prompt":"Problem 1: Prove countability of algebraic points and uncountability of the transcendental remainder in [0,1]. Explain the role of density.","hints":["Count finite integer coefficient tuples, then finitely many roots per nonzero polynomial.","If both pieces were countable, what would their union imply about [0,1]?"],"rubric":["Counts nonzero integer polynomials via finite tuples","Uses finite root sets","Uses uncountability of [0,1] and countable-union closure","Distinguishes density from cardinality"],"solution":"For each degree d, integer coefficient tuples form Z^(d+1), a finite product of countable sets and hence countable. The union over d is countable. Each nonzero polynomial has at most d roots, so the union of its finite root sets is countable. The algebraic points of [0,1] are a subset. If the transcendental remainder were also countable, their union would make [0,1] countable, contrary to the nested-interval diagonal proof. Density asks whether every interval contains a point of a set; it does not count how many other points the interval contains."}
```

## 2. A rare high branch (10 points)

For positive integers \(n\), define \(a_n=2-1/n\) when \(n\) is a multiple of 3, and \(a_n=(-1)^n/n\) otherwise. Find limsup and liminf. Determine **all** subsequential limits, and explain why a finite sample cannot rule out a new branch appearing later.

```exercise
{"id":"analysis-structure-pset-limsup","type":"written","prompt":"Problem 2: Find both tail limits and all subsequential limits of the branch-defined sequence.","hints":["Partition indices into multiples and nonmultiples of 3.","A convergent subsequence has an infinite further subsequence from one of these two index sets."],"rubric":["Shows a subsequence approaches 2","Shows nonmultiple terms approach 0","Proves no other subsequential limit can occur","States limsup 2 and liminf 0 from tail or subsequential characterization"],"solution":"Along n=3k, a_n=2−1/(3k)→2. Along n=3k+1, a_n=(-1)^n/n→0. All nonmultiple terms have absolute value at most 1/n and hence approach 0. Any convergent subsequence has an infinite further subsequence consisting either of multiples of 3 or of nonmultiples; its limit must therefore be 2 or 0. Both are realized, so limsup=2 and liminf=0. No finite table settles the quantified statement about every future tail."}
```

## 3. A subseries is not a rearrangement (8 points)

Let \(\sum a_n\) converge absolutely. Prove that the subseries along any infinite set of indices \(E\subseteq\mathbb N\), listed in increasing order, converges. Produce a convergent series with a divergent subseries and identify the hypothesis lost.

```exercise
{"id":"analysis-structure-pset-subseries","type":"written","prompt":"Problem 3: Prove arbitrary subseries convergence under absolute convergence; give a conditional counterexample.","hints":["Bound every finite selected tail by the full absolute tail.","For a conditional example, separate positive and negative terms of the alternating harmonic series."],"rubric":["Uses the series Cauchy criterion on a selected tail","Controls that tail by the full absolute tail","Gives a convergent parent series and divergent selected subseries","Identifies absolute convergence as the lost hypothesis"],"solution":"Given ε>0, choose N with ∑_{n>N}|a_n|<ε. Any finite tail of the selected subseries whose original indices all exceed N has absolute sum at most that full tail, so it satisfies the Cauchy criterion. For ∑_{n≥1}(-1)^(n+1)/n, the alternating theorem gives convergence, but the odd-index subseries ∑_{k≥1}1/(2k−1) diverges by comparison with (1/2)∑1/k. The parent lacks absolute convergence."}
```

## 4. A missing point can split a dense set (8 points)

Let \(D=\mathbb Q\cap[0,2]\), with the usual distance inherited from \(\mathbb R\). Show \(D\) is disconnected by constructing a separation. Then explain why the same cut does not separate \([0,2]\) itself.

```exercise
{"id":"analysis-structure-pset-connected","type":"written","prompt":"Problem 4: Give a separation of the rational subspace at an irrational cut and explain why the real interval resists it.","hints":["Use √2 and specify relative openness.","In the real interval, ask which piece would contain the cut point."],"rubric":["Constructs two disjoint nonempty relatively open pieces of D","Proves their union is D using irrationality of √2","Distinguishes D from [0,2] as ambient spaces","Uses connectedness of a real interval or its supremum proof"],"solution":"Set U=D∩(−∞,√2) and V=D∩(√2,∞). They are relatively open, disjoint, nonempty (for example 1∈U, 2∈V), and cover D because √2 is irrational. In [0,2], the cut point √2 belongs to the interval. Assigning it to either side prevents that side and its complement from both being relatively open at the cut. More generally the interval connectedness proof rules out any separation."}
```

## 5. Change the space and recover compactness (12 points)

Take \(X=\mathbb N\) with \(d(m,n)=|1/m-1/n|\). Prove this is a metric. Decide whether \(X\) is totally bounded, complete, or compact. Add one new point \(\infty\) and define \(d(n,\infty)=1/n\). Prove the enlarged space is compact.

```exercise
{"id":"analysis-structure-pset-completion","type":"written","prompt":"Problem 5: Analyse the metric d(m,n)=|1/m−1/n| on N and the space completed by one point ∞.","hints":["Identify X isometrically with {1/n:n≥1} in R.","For total boundedness, cover a finite prefix separately and the tail with one small ball.","Map ∞ to 0 to use a familiar compact set."],"rubric":["Verifies the metric by an injective map into R","Proves total boundedness","Exhibits the Cauchy sequence n with no limit in X","Identifies the enlarged space with {0}∪{1/n} and proves compactness"],"solution":"The map φ(n)=1/n is injective and d(m,n)=|φ(m)−φ(n)|, so the usual metric axioms transfer. For ε>0, choose N with 1/N<ε/2; all n≥N lie within ε of N under d, while the finite prefix needs finitely many balls. Thus X is totally bounded. The sequence of points n is Cauchy since 1/n→0, but no point m∈X can be its limit: d(n,m)→1/m>0. Hence X is incomplete and noncompact. Extend φ by φ(∞)=0. Then the enlarged space is isometric to K={0}∪{1/n}, closed and bounded in R, hence compact. The extension formula satisfies all metric axioms because it is pulled back from the real distance."}
```

## 6. A certified iteration budget (12 points)

On \([0,1]\), let \(T(x)=\sqrt{1+x}/3\) and start \(x_0=0\). Verify the conditions of the contraction theorem, find its fixed point, and give the least \(n\) certified by the theorem's **a priori bound** to make \(|x_n-x_*|<10^{-5}\). Explain why this sufficient count does not, by itself, identify the actual first successful iterate.

```exercise
{"id":"analysis-structure-pset-contract","type":"written","prompt":"Problem 6: Verify self-map and contraction for T(x)=√(1+x)/3, solve the fixed point, and certify an iteration count below 10⁻⁵.","hints":["Use the mean-value theorem to bound |T'| by 1/6.","Compute x₁ and use qⁿd(x₁,x₀)/(1−q)."],"rubric":["Checks T([0,1])⊂[0,1] and completeness","Derives a global contraction factor q=1/6","Chooses the admissible quadratic root","Computes the a priori bound (2/5)6⁻ⁿ and the smallest certified n=6","Does not equate a sufficient bound with the exact error"],"solution":"T([0,1])=[1/3,√2/3]⊂[0,1]. The interval is complete. T'(x)=1/(6√(1+x)), so |T'|≤1/6 and the mean-value theorem gives q=1/6. Solving 3x=√(1+x) and squaring gives 9x²−x−1=0. The root in [0,1] is x*=(1+√37)/18; the other root is negative and fails 3x≥0. Since x₁=1/3, the a priori bound is (1/6)ⁿ(1/3)/(5/6)=(2/5)6⁻ⁿ. At n=5 it is about 5.14×10⁻⁵; at n=6 it is about 8.57×10⁻⁶. Thus six is the least n certified by this bound. It need not be the first iterate whose actual error falls below the target."}
```

## 7. A local ODE operator (12 points)

For \(y'=t+y\), \(y(0)=0\), use the rectangle \(|t|\le1/4,\ |y|\le1\). Check explicit \(M,L,h,b\) conditions that make the Picard operator a contraction. Starting with \(g_0(t)=0\), calculate \(g_1\) and \(g_2\), and state exactly what solution interval and uniqueness claim follow. Do not claim a global result from these local bounds.

```exercise
{"id":"analysis-structure-pset-picard","type":"written","prompt":"Problem 7: Check Picard conditions for y'=t+y on the stated rectangle and compute two function iterates.","hints":["On the rectangle, |t+y|≤1/4+1.","The operator integrates s+g(s) from 0 to t; the integral orientation handles negative t."],"rubric":["Gives M=5/4, L=1, h=1/4, b=1 and checks Mh≤b and Lh<1","Computes g₁(t)=t²/2","Computes g₂(t)=t²/2+t³/6","States unique solution within the prescribed continuous-function rectangle on [−1/4,1/4]","Avoids a global conclusion"],"solution":"On the rectangle, |F(t,y)|=|t+y|≤5/4, and |F(t,y)−F(t,z)|=|y−z|, so take M=5/4,L=1,h=1/4,b=1. Then Mh=5/16≤1 and Lh=1/4<1. P(g)(t)=∫₀ᵗ(s+g(s))ds. Thus g₁(t)=t²/2 and g₂(t)=t²/2+t³/6. The complete closed set of continuous functions on [−1/4,1/4] satisfying |g(t)|≤1 is invariant, and P is a contraction there. Its unique fixed point gives a differentiable solution on that interval; the stated theorem proves uniqueness among solutions staying in that rectangle, not global uniqueness for all time."}
```

## 8. Approximation is a quantified guarantee (10 points)

For \(f(x)=|x-1/2|\) on \([0,1]\), use the Bernstein construction to give an \(n\) that guarantees \(\|B_nf-f\|_\infty\le0.01\). State the theorem used for a shared bound over all \(x\). Explain why polynomial differentiability does not prove \(f\) differentiable at \(1/2\).

```exercise
{"id":"analysis-structure-pset-bernstein","type":"written","prompt":"Problem 8: Certify Bernstein uniform error for the cusp function and assess an invalid derivative inference.","hints":["The function is 1-Lipschitz.","Use L/(2√n)≤0.01; then inspect the left and right difference quotients at the cusp."],"rubric":["Establishes Lipschitz constant 1","Uses the uniform Bernstein error certificate","Finds n≥2500 as a sufficient threshold","Separates uniform value convergence from derivative convergence","Checks opposite one-sided slopes at 1/2"],"solution":"The reverse triangle inequality gives ||x−1/2|−|y−1/2||≤|x−y|, so L=1. The proved Bernstein estimate is uniform: ||B_nf−f||∞≤1/(2√n). To make it at most 0.01, √n≥50, so n≥2500 suffices. Each B_nf is differentiable, but f has left difference quotient −1 and right difference quotient +1 at 1/2. Uniform convergence of values does not transfer differentiability."}
```

**After marking.** Revisit Problems 5 and 7 a day later. In one paragraph, identify the complete space used in each and the exact point where that completeness turns an approximation process into an existence result.
