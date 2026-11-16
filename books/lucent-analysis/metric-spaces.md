# Distances beyond the real line

**Prerequisites.** Real-line topology, sequences, and continuity. **Outcome.** Transfer definitions to a metric space while stating which real-line theorems require new hypotheses.

A metric is a function \(d:X\times X\to[0,\infty)\) satisfying \(d(x,y)=0\) exactly when \(x=y\), symmetry \(d(x,y)=d(y,x)\), and the triangle inequality \(d(x,z)\le d(x,y)+d(y,z)\). It formalizes what “near” means. The same collection of points can behave differently under different choices of metric; theorems must name the metric.

Examples include \(d(x,y)=|x-y|\) on \(\mathbb R\); Euclidean distance on \(\mathbb R^2\); and the **discrete metric** on any set \(X\), where \(d(x,y)=1\) for distinct points. If \(f,g\) are continuous functions on \([0,1]\), the supremum metric \(d_\infty(f,g)=\sup_{0\le t\le1}|f(t)-g(t)|\) measures worst-case deviation. The supremum exists because continuous functions attain maxima on the compact interval.

## Session 1: choosing a distance changes a question

On \(\mathbb R^2\), compare \(d_2(p,q)=\sqrt{(p_1-q_1)^2+(p_2-q_2)^2}\) with \(d_\infty(p,q)=\max(|p_1-q_1|,|p_2-q_2|)\). A \(d_2\)-ball is round and a \(d_\infty\)-ball is square, but \(d_\infty\le d_2\le\sqrt2d_\infty\). Thus an \(\varepsilon\)-ball for one distance contains a sufficiently small ball for the other. They give the same convergent sequences, open sets, and Cauchy sequences, although their numerical distances differ. When comparing metrics, an inequality in *both* directions often settles several questions at once.

Before moving the radius below, predict the nesting of the three boundaries. The filled square is the boundary scale for \(d_\infty\); the blue circle has the same numerical radius in \(d_2\), and the teal circle has radius \(\sqrt2r\). Changing \(r\) should dilate every object without changing the containments.

```mathviz
scene "Three boundaries behind comparable metrics";
domain -3 3;
range -3 3;
coordinates equal;
param r = 1.2 from 0.5 to 2;
scalar distance2(x,y) = x^2+y^2;
polygon max_ball = (-r,-r), (r,-r), (r,r), (-r,r) color amber;
contour distance2 level r^2 color blue as euclidean_ball;
contour distance2 level 2*r^2 color teal as comparison_ball;
```

The picture exposes the inclusions \(B_2(0,r)\subset B_\infty(0,r)\subset B_2(0,\sqrt2r)\). It does not prove them: the contours use a fixed finite grid. The proof is the inequality \(\max(|x|,|y|)^2\le x^2+y^2\le2\max(|x|,|y|)^2\). Explain which half of that inequality proves each inclusion, then test the boundary point \((r,r)\).

The sup metric asks a different question from pointwise convergence. Let \(f_n(t)=t^n\) on \([0,1]\). At each \(t<1\), the values tend to zero, while \(f_n(1)=1\). The sequence is not Cauchy in \(d_\infty\): if \(m=2n\), evaluate at \(t=2^{-1/n}\) to get \(|f_n(t)-f_{2n}(t)|=1/4\). One input chosen *after* the indices defeats a proposed common Cauchy threshold. This is why a function-space metric is useful later in Picard iteration: convergence there means one error bound controls the entire interval.

**Checkpoint.** For \(p=(0,0)\) and \(q=(3,4)\), compute both distances. If a sequence is \(d_\infty\)-Cauchy, which displayed inequality makes it \(d_2\)-Cauchy? If you only had \(d_\infty\le d_2\), the reverse conclusion would not follow from that inequality alone.

## Rebuild the familiar definitions

An open ball is \(B_d(x,r)=\{y\in X:d(x,y)<r\}\). A set is open if every member has a ball contained in it; it is closed when its complement is open. A sequence \(x_n\) converges to \(x\) if \(d(x_n,x)\to0\). It is Cauchy if, for every \(\varepsilon>0\), there is \(N\) such that \(d(x_m,x_n)<\varepsilon\) whenever \(m,n\ge N\). A space is **complete** if every Cauchy sequence converges to a point of the space.

A map \(F:X\to Y\) between metric spaces is continuous at \(x\) if every \(\varepsilon>0\) admits \(\delta>0\) such that \(d_X(x,x')<\delta\) implies \(d_Y(Fx,Fx')<\varepsilon\). Equivalently, \(x_n\to x\) implies \(F(x_n)\to F(x)\). For the reverse implication, if epsilon–delta continuity fails, choose \(x_n\) within \(1/n\) of \(x\) whose images stay at least a fixed \(\varepsilon\) away. This constructs a sequence contradicting sequential continuity.

Why does the other direction hold? Given \(x_n\to x\), take the \(\delta\) supplied by continuity for a chosen \(\varepsilon\). Eventually \(d_X(x_n,x)<\delta\), so eventually \(d_Y(Fx_n,Fx)<\varepsilon\). Both directions need the metric's first-countable balls; the construction of a bad sequence uses radii \(1/n\).

The closure \(\overline A\) consists exactly of points \(x\) for which some sequence in \(A\) converges to \(x\): choose \(a_n\in A\cap B(x,1/n)\) when every ball meets \(A\). Conversely, every ball around a sequential limit eventually meets \(A\). This proves the closed-set fact used below rather than treating it as a new axiom. Notice that the balls, closure, and convergence all refer to the chosen metric.

## Session 2: completeness is about where the limit lands

The real interval \((0,1)\) and the rationals \(\mathbb Q\) fail completeness in different visible ways. In \((0,1)\), \(x_n=1/(n+1)\) approaches an omitted endpoint. In \(\mathbb Q\), decimal truncations of \(\sqrt2\) have no rational limit even though every rational interval around \(\sqrt2\) contains terms. Each sequence is Cauchy because it converges in the larger real space; completeness asks whether the limiting point belongs to the *specified* space.

In contrast, the infinite discrete space is complete despite having infinitely many points. For \(\varepsilon=1/2\), the Cauchy condition forces every pair of sufficiently late terms to be equal. It has no analogous escaping sequence. This case also shows why ordinary boundedness cannot substitute for a finite small-scale cover in the next lesson.

In the discrete metric, any sequence converging to \(x\) is eventually equal to \(x\): use \(\varepsilon=1/2\). Every Cauchy sequence is eventually constant, so every discrete metric space is complete. Every subset is both open and closed. If \(X\) is infinite, it is still *not* compact: the cover by singleton open balls has no finite subcover. All distances are at most 1, so this is a bounded complete space that is not compact.

## A theorem that survives, with its hypothesis

**Theorem 34.1.** A closed subset \(F\) of a complete metric space \(X\), with the inherited metric, is complete.

**Proof.** A Cauchy sequence in \(F\) is Cauchy in \(X\), so it converges to some \(x\in X\). Closedness is equivalent to containing the limits of its convergent sequences: if \(x\notin F\), an open ball around \(x\) misses \(F\), contradicting convergence. Hence \(x\in F\). ∎

The converse also holds: a complete subset of any metric space is closed. If \(x\) lies in its closure, choose a point of the subset within \(1/n\) of \(x\). This sequence is Cauchy; completeness gives a limit inside the subset, and uniqueness of limits identifies it as \(x\).

The rationals with their usual distance are incomplete: a rational sequence approximating \(\sqrt2\) is Cauchy but has no rational limit. The interval \((0,1)\) with the usual distance is also incomplete, since \(1/n\) for \(n\ge2\) approaches an omitted endpoint. Both examples become complete if their missing limit points are added appropriately; the metric and ambient set matter.

**Hypothesis audit.** The closed-subset theorem begins with a complete *ambient* space. It does not prove \(\mathbb Q\cap[0,1]\) complete: that set is closed relative to \(\mathbb Q\), but \(\mathbb Q\) is not complete. The converse theorem does not require a complete ambient space; a complete subset already contains the limits of all sequences approaching its closure points.

```exercise
{"id":"analysis-metric-discrete","type":"choice","prompt":"An infinite set has the discrete metric. Which pair of claims is correct?","options":[{"label":"It is complete and bounded, but not compact.","correct":true,"feedback":"Cauchy sequences are eventually constant; singleton balls give an open cover without a finite subcover."},{"label":"It is compact because all distances are at most 1.","correct":false,"feedback":"Boundedness does not imply compactness in a general metric space."},{"label":"It is incomplete because it has infinitely many points.","correct":false,"feedback":"Infinitude does not stop Cauchy sequences from converging."}],"hints":["Test Cauchy at ε=1/2; then cover the space by radius-1/2 balls."]}
```

```exercise
{"id":"analysis-metric-sequential-choice","type":"choice","prompt":"To disprove continuity of F at x by a sequence, which construction is enough?","options":[{"label":"Find ε₀>0 and xₙ with d(xₙ,x)<1/n but d(Fxₙ,Fx)≥ε₀.","correct":true,"feedback":"The inputs converge while the outputs stay separated by one fixed amount."},{"label":"Find a single y with d(Fy,Fx)>0.","correct":false,"feedback":"Continuity does not require a map to be constant near x."},{"label":"Find xₙ with d(Fxₙ,Fx)→0.","correct":false,"feedback":"That sequence supports continuity, not a failure of it."}],"hints":["Negate the ε–δ definition, then use δ=1/n."]}
```

```exercise
{"id":"analysis-metric-comparable","type":"written","prompt":"On \\(\\mathbb R^2\\), prove \\(d_\\infty\\le d_2\\le\\sqrt2\\,d_\\infty\\). Use both inequalities to show that \\(d_2\\) and \\(d_\\infty\\) have the same convergent and Cauchy sequences. Explain why the balls can still have different shapes.","hints":["Set \\(a=|p_1-q_1|\\) and \\(b=|p_2-q_2|\\); compare \\(\\max(a,b)^2\\) with \\(a^2+b^2\\).","For each \\(\\varepsilon\\) in one metric, choose a threshold in the other using the constant \\(\\sqrt2\\)."],"rubric":["Proves both distance inequalities","Transfers convergence in both directions with explicit thresholds","Transfers the Cauchy condition in both directions","Separates equality of topology from equality of numerical distances"],"solution":"If \\(M=\\max(a,b)\\), then \\(M^2\\le a^2+b^2\\le2M^2\\). Taking square roots gives \\(d_\\infty\\le d_2\\le\\sqrt2d_\\infty\\). If \\(d_\\infty(p_n,p)\\to0\\), then \\(d_2(p_n,p)\\le\\sqrt2d_\\infty(p_n,p)\\to0\\); the other direction uses \\(d_\\infty\\le d_2\\). The same inequalities, applied to pairs \\(p_m,p_n\\), transfer the Cauchy condition. A \\(d_2\\)-ball is round and a \\(d_\\infty\\)-ball is square; the metrics have the same convergent sequences without identical balls.","transfer":"On \\(\\mathbb R^2\\), define \\(d_1(p,q)=|p_1-q_1|+|p_2-q_2|\\). Compare \\(d_1\\) with \\(d_\\infty\\) using two constants. Can a \\(d_1\\)-Cauchy sequence fail to be \\(d_\\infty\\)-Cauchy?","transferSolution":"For \\(a,b\\ge0\\), \\(\\max(a,b)\\le a+b\\le2\\max(a,b)\\). Hence \\(d_\\infty\\le d_1\\le2d_\\infty\\). Every \\(d_1\\)-Cauchy sequence is \\(d_\\infty\\)-Cauchy, and conversely; the proposed failure is impossible."}
```

```exercise
{"id":"analysis-metric-closed-complete","type":"written","prompt":"Let \\(A\\) be a nonempty subset of a metric space \\(X\\). Prove that completeness of \\(A\\) in its inherited metric implies that \\(A\\) is closed in \\(X\\). Explain why the converse needs \\(X\\) complete, using an explicit counterexample.","hints":["For \\(x\\in\\overline A\\), select \\(a_n\\in A\\) with \\(d(a_n,x)<1/n\\).","Try \\(A=X=\\mathbb Q\\) with ordinary distance for the converse."],"rubric":["Builds an A-valued sequence from closure","Shows it is Cauchy and invokes completeness of A","Uses uniqueness of metric limits to put x in A","Gives a closed subset of an incomplete ambient space that is incomplete"],"solution":"For \\(x\\in\\overline A\\), choose \\(a_n\\in A\\) with \\(d(a_n,x)<1/n\\). The triangle inequality makes \\((a_n)\\) Cauchy. Completeness of \\(A\\) gives \\(a\\in A\\) with \\(a_n\\to a\\). It also converges to \\(x\\) in \\(X\\); uniqueness of metric limits gives \\(x=a\\in A\\). Thus \\(A\\) is closed. The converse fails without ambient completeness: \\(A=X=\\mathbb Q\\) is closed relative to itself but rational approximations to \\(\\sqrt2\\) are Cauchy with no limit in \\(\\mathbb Q\\).","transfer":"Is \\(\\mathbb Z\\), with its usual distance, a complete subset of \\(\\mathbb Q\\)? Prove your answer without claiming \\(\\mathbb Q\\) complete.","transferSolution":"Yes. An integer-valued Cauchy sequence has all late pairwise distances below \\(1/2\\). Distinct integers are at least distance \\(1\\) apart, so the sequence is eventually constant and converges in \\(\\mathbb Z\\). Its completeness does not depend on completeness of \\(\\mathbb Q\\)."}
```

**Independent transfer.** On \(\mathbb R\), define \(d_*(x,y)=\min(1,|x-y|)\). Prove it is a metric. Determine whether its convergent sequences and Cauchy sequences differ from those of the usual metric. Is \((\mathbb R,d_*)\) compact? Give reasons for each claim.

<details><summary>Worked solution</summary>

Only the triangle inequality needs work: \(\min(1,a+b)\le\min(1,a)+\min(1,b)\) for \(a,b\ge0\), and apply the usual triangle inequality before truncating. For \(0<\varepsilon<1\), \(d_*(x,y)<\varepsilon\) exactly when \(|x-y|<\varepsilon\). Therefore convergence and the Cauchy property agree with the usual metric; \((\mathbb R,d_*)\) is complete. It is bounded by 1 but not compact: its integer sequence has pairwise \(d_*\)-distance 1 and no convergent subsequence. This changed metric makes the precise failure of “complete and bounded implies compact” visible.

</details>
