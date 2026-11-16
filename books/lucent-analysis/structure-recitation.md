# Recitation: decide which hypothesis does the work

**Role:** guided recitation after the lessons on metric spaces, fixed points, and approximation. Write a first attempt at each checkpoint before opening its repair. A useful proof starts by identifying the ambient set, its distance, and the precise conclusion.

## Station 1: an attractive but incomplete completion

Someone proposes: “Every Cauchy sequence of rational numbers converges, because it is bounded and therefore has a convergent subsequence.” Their use of Bolzano–Weierstrass is almost right. A rational Cauchy sequence is bounded in \(\mathbb R\), so it has a subsequence converging *in \(\mathbb R\)*, and the whole Cauchy sequence shares that real limit. The limit need not be rational.

Construct a particular failure by taking \(q_n=\lfloor10^n\sqrt2\rfloor/10^n\). Each \(q_n\) is rational and \(0\le\sqrt2-q_n<10^{-n}\). Thus \(q_n\to\sqrt2\) in \(\mathbb R\), making it Cauchy under the usual distance. It cannot converge in \(\mathbb Q\), because \(\sqrt2\notin\mathbb Q\). The failed line was “converges” without naming the space of the limit.

**Checkpoint.** Would the same proof fail in an infinite discrete metric space? No: there a Cauchy sequence is eventually constant, so its limit is already a point of the space. Infinitude alone does not imply incompleteness.

## Station 2: a sparse tail

Let \(a_n=2-1/n\) when \(3\mid n\) and \(a_n=(-1)^n/n\) otherwise. Predict the two extreme tail levels *before* evaluating a finite table. Multiples of 3 give a subsequence approaching 2. All other terms approach 0. Hence limsup is 2 and liminf is 0. A finite table might show a negative term, but late negative values approach zero and do not force a negative liminf.

The proof that there are no other subsequential limits uses the partition into multiples and nonmultiples of 3. Any convergent subsequence has an infinite further subsequence from one part, so its limit is 2 or 0. This is stronger than saying that two candidate subsequences exist.

## Station 3: a fixed point is not a convergent orbit

Compare \(T(x)=1-x\) and \(S(x)=(x+3)/(x+2)\) on their respective closed intervals \([0,1]\) and \([1,2]\). Both have fixed points. Iteration of \(T\) from 0 alternates forever, while \(S\) has distance factor at most \(1/9\), so every orbit in \([1,2]\) converges. The proof order is: show a self-map of a complete set; derive a factor less than 1; prove iterates Cauchy; then identify the fixed point. Solving the fixed-point equation first cannot replace those steps.

**Challenge.** Let \(K=\{0\}\cup\{1/n:n\ge1\}\) with ordinary distance and define \(U(0)=0\), \(U(1/n)=1/(n+1)\). Every orbit converges to 0, yet \(U\) is not a contraction on \(K\). Indeed, for \(x=1/n,y=0\), \(d(Ux,Uy)/d(x,y)=n/(n+1)\to1\). This repairs the tempting converse “if every orbit converges, a contraction factor exists.” Compactness of \(K\) does not change the ratio.

## Station 4: how much does an approximation certificate say?

For \(f(x)=|x-1/2|\) on \([0,1]\), the Lipschitz constant is 1. The Bernstein estimate \(\|B_nf-f\|_\infty\le1/(2\sqrt n)\) guarantees error at most \(0.01\) when \(n\ge2500\). That is a sufficient threshold, not necessarily the smallest. The proof of uniform convergence certifies function values; it gives no derivative of \(f\) at \(1/2\). A plot of a smooth approximating polynomial near the corner cannot establish differentiability of the limit.

```exercise
{"id":"analysis-recitation-hypothesis","type":"written","prompt":"Choose one false inference from this recitation and repair it. State the original claim, an explicit counterexample, the exact hypothesis or ambient space that failed, and a true replacement theorem.","hints":["Options include rational Cauchy sequences, fixed points versus orbit convergence, and uniform polynomial approximation versus differentiability."],"rubric":["States the false claim precisely","Constructs and verifies an explicit counterexample","Identifies the missing hypothesis or changed ambient space","States a correct replacement with its hypotheses"],"solution":"One route: claim that a self-map with a fixed point has all iterates converging. On [0,1], T(x)=1−x has fixed point 1/2, but Tⁿ(0) alternates 0 and 1. A valid replacement is the contraction theorem: a self-map of a nonempty complete metric space satisfying d(Tx,Ty)≤q d(x,y) for some q<1 has a unique fixed point and every orbit converges to it. The factor q<1 is absent in the counterexample."}
```

For delayed review, close this recitation and write down one example for each of these three distinctions: bounded versus totally bounded, Cauchy in \(\mathbb R\) versus complete in \(\mathbb Q\), and a fixed point versus convergence of iteration.
