
# Continuity, Uniform Control, and Extension

Continuity is often introduced by a picture: a graph has no jump, tear, or sudden break. The picture is useful, but it hides the central logical issue. Ordinary continuity lets the input tolerance depend on the point. Uniform continuity requires one tolerance to work everywhere. That change in quantifier order decides whether a function respects Cauchy sequences, extends across missing boundary points, and supports reliable global approximation.

This chapter treats continuity as a transport principle between metric spaces. It develops four equivalent lenses—epsilon–delta control, sequences, open sets, and closed sets—and then separates local, pointwise, uniform, Lipschitz, and Hölder control. Compactness will upgrade pointwise continuity to uniform continuity. Completeness will let uniformly continuous functions extend from dense subsets. The emphasis throughout is on reading the quantifiers before choosing a proof.

Prerequisites are metric neighborhoods, sequential compactness, and connectedness. Later chapters use the results here to justify derivatives, Riemann integration, uniform convergence, fixed-point iteration, and approximation in function spaces.

## 1. Continuity transports closeness at a point

Let \((X,d_X)\) and \((Y,d_Y)\) be metric spaces, let \(E\subseteq X\), and let \(f:E\to Y\). The function \(f\) is **continuous at** \(a\in E\) if

\(\forall \varepsilon>0 \exists \delta>0 \forall x\in E: d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon\).

The domain condition \(x\in E\) matters. Continuity is measured with the subspace metric on \(E\); points outside the domain do not participate. The function is continuous on \(E\) if it is continuous at every point of \(E\).

The dependencies are the heart of the definition:

- \(\varepsilon\) is chosen first;
- \(\delta\) may depend on \(\varepsilon\), the point \(a\), and the function;
- after \(\delta\) is fixed, it must work for every allowed \(x\).

### Worked example 2 (a local polynomial estimate)

### Worked proof: a quadratic

Let \(f(x)=x^2\) on \(R\), and fix \(a\in R\). We want \(|x^2-a^2|<\varepsilon\). Factor:

\(|x^2-a^2|=|x-a||x+a|\).

The second factor depends on \(x\), so first impose \(|x-a|<1\). Then \(|x|<|a|+1\), and hence

\(|x+a|\le |x|+|a|<2|a|+1\).

Choose

\(\delta=\min(1, \varepsilon/(2|a|+1))\).

If \(|x-a|<\delta\), then

\(|x^2-a^2|<\delta(2|a|+1)\le \varepsilon\).

The preliminary bound \(\delta\le 1\) is not decoration. It turns the uncontrolled factor into a constant depending only on the fixed point.

### Isolated points

If \(a\) is isolated in \(E\), so some ball about \(a\) meets \(E\) only at \(a\), every function \(f:E\to Y\) is continuous at \(a\). Choose that ball’s radius as \(\delta\); the only possible input is \(x=a\), and the output distance is zero. Continuity can therefore be vacuous at isolated domain points.

## 2. Negating continuity produces a bad sequence

The function \(f\) is not continuous at \(a\) exactly when

\(\exists \varepsilon_0>0 \forall \delta>0 \exists x\in E: d_X(x,a)<\delta \text{ and } d_Y(f(x),f(a))\ge \varepsilon_0\).

Once the negation is written, set \(\delta=1/n\). For each \(n\), choose a bad point \(x_n\). Then \(x_n\to a\), but the images remain at least \(\varepsilon_0\) away from \(f(a)\). This observation leads to a powerful equivalence.

**Sequential criterion.** A function \(f:E\to Y\) is continuous at \(a\in E\) if and only if every sequence \((x_n)\) in \(E\) satisfying \(x_n\to a\) also satisfies \(f(x_n)\to f(a)\).

### Proof: epsilon–delta implies sequential

Let \(\varepsilon>0\). Continuity supplies \(\delta>0\). Since \(x_n\to a\), eventually \(d_X(x_n,a)<\delta\), and continuity then gives \(d_Y(f(x_n),f(a))<\varepsilon\).

### Proof: sequential implies epsilon–delta

Argue contrapositively. If continuity fails, the negation above produces \(x_n\in E\) with

\[d_X(x_n,a)<1/n\]

but

\(d_Y(f(x_n),f(a))\ge \varepsilon_0\).

Thus \(x_n\to a\) while \(f(x_n)\) does not converge to \(f(a)\), contradicting sequential continuity.

The sequential criterion is especially efficient for proving discontinuity. To disprove continuity at one point, find one domain sequence approaching that point whose images approach the wrong value or fail to converge.

### Worked example: the Dirichlet function

Define \(f:R\to R\) by \(f(x)=1\) for rational \(x\) and \(f(x)=0\) for irrational \(x\). At any \(a\), choose rational \(r_n\to a\) and irrational \(s_n\to a\). The image sequences are constantly 1 and 0. At least one fails to approach \(f(a)\), so \(f\) is discontinuous at every real number.

The criterion is often the fastest way to disprove continuity. For the sign function \(s(x)=1\) when \(x\ge 0\) and \(s(x)=-1\) when \(x<0\), take \(x_n=-1/n\to 0\). Then \(s(x_n)=-1\) does not approach \(s(0)=1\).

## 3. Continuity is an inverse-image property

The pointwise definition can be reorganized into a global topological statement.

**Open-set criterion.** A function \(f:X\to Y\) is continuous on \(X\) if and only if \(f^{-1}(V)\) is open in \(X\) for every open set \(V\subseteq Y\).

Here

\(f^{-1}(V)=\{x\in X:f(x)\in V\}\).

The inverse image is defined even when \(f\) is not one-to-one and has no inverse function.

### Proof from pointwise continuity

Take \(a\in f^{-1}(V)\). Because \(V\) is open and contains \(f(a)\), there is an \(\varepsilon>0\) with \(B_\varepsilon(f(a))\subseteq V\). Continuity at \(a\) gives \(\delta>0\) such that

\(f(B_\delta(a))\subseteq B_\varepsilon(f(a))\subseteq V\).

Hence \(B_\delta(a)\subseteq f^{-1}(V)\), making the inverse image open.

### Proof back to pointwise continuity

Fix \(a\in X\) and \(\varepsilon>0\). The ball \(V=B_\varepsilon(f(a))\) is open. Its inverse image is open and contains \(a\), so some ball \(B_\delta(a)\) lies inside it. This is exactly the epsilon–delta condition.

Taking complements gives the **closed-set criterion**: \(f\) is continuous exactly when the inverse image of every closed set is closed.

Do not reverse the arrow. Continuous functions need not send open sets to open sets: the constant map sends every nonempty open set to a singleton. Nor must they send closed sets to closed sets: \(\arctan:R\to R\) sends the closed set \(R\) to the nonclosed interval \((-\pi/2,\pi/2)\).

## 4. Composition and algebra are structural consequences

If \(f:X\to Y\) is continuous at \(a\) and \(g:Y\to Z\) is continuous at \(f(a)\), then \(g\circ f\) is continuous at \(a\). Given an output tolerance for \(g\), use continuity of \(g\) to request a tolerance in \(Y\), then use continuity of \(f\) to obtain a tolerance in \(X\).

The open-set proof is even shorter:

\((g\circ f)^{-1}(W)=f^{-1}(g^{-1}(W))\).

Inverse images compose in the correct order, and each stage preserves openness.

For real-valued functions continuous at \(a\), sums and products are continuous at \(a\). If \(g(a)\ne 0\), the quotient \(f/g\) is continuous at \(a\). The quotient condition is local: continuity of \(g\) keeps it bounded away from zero near \(a\). Specifically, choose a neighborhood where

\(|g(x)-g(a)|<|g(a)|/2\).

Then \(|g(x)|>|g(a)|/2\), so reciprocals are controlled.

### Local boundedness and sign preservation

If \(f:E\to R\) is continuous at \(a\), then it is bounded on some neighborhood of \(a\) within \(E\). Set \(\varepsilon=1\); near \(a\),

\(|f(x)|\le |f(a)|+|f(x)-f(a)|<|f(a)|+1\).

If \(f(a)>0\), continuity also implies \(f(x)>0\) near \(a\). Choose \(\varepsilon=f(a)/2\), yielding \(f(x)>f(a)/2\). This modest fact powers arguments about quotients, logarithms, roots, and inequality constraints.

## 5. Relative continuity and removable gaps

Suppose \(E\subseteq X\). A function \(f:E\to Y\) is continuous when inverse images of open sets are open **relative to \(E\)**. Endpoint continuity on \([a,b]\) is one-sided automatically because no domain points lie to the left of \(a\) or right of \(b\).

For \(f(x)=\sqrt{x}\) on \([0,\infty)\), continuity at zero asks only about \(x\ge 0\). Given \(\varepsilon>0\), choose \(\delta=\varepsilon^2\). If \(0\le x<\delta\), then \(|\sqrt{x}-0|<\varepsilon\).

A missing point raises a different question. Let \(f:E\to Y\) and let \(a\in cl(E)\setminus E\). We say \(f(x)\to L\) as \(x\to a\) through \(E\) if

\(\forall \varepsilon>0 \exists \delta>0 \forall x\in E: 0<d_X(x,a)<\delta \Rightarrow d_Y(f(x),L)<\varepsilon\).

If such an \(L\) exists, define the extension \(F:E\cup \{a\}\to Y\) by \(F|E=f\) and \(F(a)=L\). Then \(F\) is continuous at \(a\). A removable discontinuity is therefore a missing or incorrectly assigned limiting value, not merely a hole in a drawing.

For \(f(x)=\sin(x)/x\) on \(R\setminus\{0\}\), the limit at zero is 1, so setting \(F(0)=1\) gives a continuous extension. For \(f(x)=\sin(1/x)\), no limit exists at zero: sequences approaching zero can force the sine values to 1 or -1.

## 6. Uniform continuity reverses no quantifier—but moves one

A function \(f:E\to Y\) is **uniformly continuous** if

\(\forall \varepsilon>0 \exists \delta>0 \forall x,y\in E: d_X(x,y)<\delta \Rightarrow d_Y(f(x),f(y))<\varepsilon\).

Compare ordinary continuity on \(E\):

\(\forall a\in E \forall \varepsilon>0 \exists \delta>0 \forall x\in E: d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon\).

For continuity, \(\delta\) may depend on \(a\). For uniform continuity, one \(\delta\) must serve every pair of points in the domain. Uniform continuity implies continuity by fixing \(y=a\); the converse is false.

### Worked example 3 (global failure of uniformity)

### Worked counterexample: \(x^2\) on the whole line

The function \(x^2\) is continuous on \(R\) but not uniformly continuous there. Take

\(x_n=n\) and \(y_n=n+1/n\).

Then \(|x_n-y_n|=1/n\to 0\), while

\(|y_n^2-x_n^2|=2+1/n^2\to 2\).

Inputs can become arbitrarily close far from the origin while outputs remain separated. The earlier epsilon–delta proof exposed the problem: its choice depended on \(a\) through \(2|a|+1\).

### Worked counterexample: \(1/x\) near a missing boundary

On \((0,1)\), let \(x_n=1/n\) and \(y_n=1/(n+1)\). Their distance tends to zero, but

\(|1/x_n-1/y_n|=|n-(n+1)|=1\).

Thus \(1/x\) is not uniformly continuous. The failure is caused by increasingly steep behavior near the excluded endpoint.

## 7. The paired-sequence criterion

The negation of uniform continuity is

\(\exists \varepsilon_0>0 \forall \delta>0 \exists x,y\in E: d_X(x,y)<\delta \text{ and } d_Y(f(x),f(y))\ge \varepsilon_0\).

Choosing \(\delta=1/n\) gives the following characterization.

**Paired-sequence criterion.** A function \(f:E\to Y\) is uniformly continuous if and only if, for every two sequences \((x_n)\) and \((y_n)\) in \(E\),

\(d_X(x_n,y_n)\to 0 \Rightarrow d_Y(f(x_n),f(y_n))\to 0\).

The forward direction applies the uniform definition to every pair. For the reverse direction, failure of uniform continuity directly constructs a violating pair of sequences.

Notice that neither input sequence must converge. In the \(x^2\) example, both escape to infinity. This is why the ordinary sequential criterion for pointwise continuity cannot detect the failure.

## 8. Quantitative continuity: Lipschitz, Hölder, and moduli

A function is **Lipschitz** with constant \(L\ge 0\) when

\[d_Y(f(x),f(y))\le L d_X(x,y)\]

for all \(x,y\) in its domain. If \(L>0\), choosing \(\delta=\varepsilon/L\) proves uniform continuity. When \(L=0\), the function is constant.

A function is **Hölder continuous** with exponent \(\alpha\in (0,1]\) and constant \(C\) when

\(d_Y(f(x),f(y))\le C d_X(x,y)^\alpha\).

Choose \(\delta=(\varepsilon/C)^{1/\alpha}\) when \(C>0\). Lipschitz continuity is the case \(\alpha=1\).

The square-root function on \([0,\infty)\) is Hölder with exponent \(1/2\) because

\(|\sqrt{x}-\sqrt{y}|\le \sqrt{|x-y|}\).

If \(x=y=0\), the inequality is immediate. Otherwise, assume \(x\ge y\ge 0\), so \(x>0\) and the following denominator is nonzero. Then

\(\sqrt{x}-\sqrt{y}=(x-y)/(\sqrt{x}+\sqrt{y})\).

Also \(\sqrt{x}+\sqrt{y}\ge \sqrt{x-y}\), so the quotient is at most \(\sqrt{x-y}\).

A **modulus of continuity** is an increasing function \(ω:[0,\infty)\to [0,\infty)\) with \(ω(t)\to 0\) as \(t\downarrow 0\) and

\(d_Y(f(x),f(y))\le ω(d_X(x,y))\).

For a Lipschitz function, take \(ω(t)=Lt\); for the square root, take \(ω(t)=\sqrt{t}\). A modulus preserves more information than the bare statement of uniform continuity and can be propagated through numerical error estimates.

## 9. Compactness creates a uniform scale

**Theorem 8.1 (Heine–Cantor).** If \(K\) is a compact metric space and \(f:K\to Y\) is continuous, then \(f\) is uniformly continuous.

### Sequential proof

Suppose uniform continuity fails. The paired-sequence criterion provides \(\varepsilon_0>0\) and sequences \((x_n),(y_n)\) in \(K\) such that

\[d_X(x_n,y_n)\to 0\]

but

\(d_Y(f(x_n),f(y_n))\ge \varepsilon_0\).

Compactness gives a convergent subsequence \(x_{n_k}\to x\in K\). The triangle inequality yields

\(d_X(y_{n_k},x)\le d_X(y_{n_k},x_{n_k})+d_X(x_{n_k},x)\to 0\).

Continuity at \(x\) gives both \(f(x_{n_k})\to f(x)\) and \(f(y_{n_k})\to f(x)\). Their mutual distance must tend to zero, contradicting the fixed separation \(\varepsilon_0\).

The proof reveals the mechanism. Compactness forces any attempted sequence of bad locations to accumulate at a domain point. Ordinary continuity then supplies one local scale near that point and defeats the bad pairs.

### Why each hypothesis matters

Compactness cannot simply be replaced by boundedness: \((0,1)\) is bounded, yet \(1/x\) is not uniformly continuous there. Continuity cannot be dropped: the step function on \([0,1]\) with a jump at \(1/2\) is not uniformly continuous. The conclusion is global; neither a finite sketch nor bounded output values is enough.

## 10. Uniform continuity preserves Cauchy structure

**Theorem 8.2.** If \(f:E\to Y\) is uniformly continuous and \((x_n)\) is Cauchy in \(E\), then \((f(x_n))\) is Cauchy in \(Y\).

Given \(\varepsilon>0\), choose the uniform \(\delta>0\). Since \((x_n)\) is Cauchy, eventually \(d_X(x_m,x_n)<\delta\) for all large \(m,n\). Uniform continuity then gives

\(d_Y(f(x_m),f(x_n))<\varepsilon\).

Ordinary continuity does not suffice. The sequence \(x_n=1/n\) is Cauchy in \((0,1)\), while its image under \(f(x)=1/x\) is the divergent, non-Cauchy sequence \(n\).

If the codomain \(Y\) is complete, the image of every Cauchy sequence under a uniformly continuous map has a limit in \(Y\). This is the engine behind extension from dense subsets.

## 11. Extension from a dense subset

Let \(D\) be dense in a metric space \(X\), let \(Y\) be complete, and suppose \(f:D\to Y\) is uniformly continuous.

**Theorem 8.3 (Uniform extension).** There is a unique continuous function \(F:X\to Y\) with \(F|D=f\). In fact, \(F\) is uniformly continuous.

### Constructing the value

For \(x\in X\), density supplies a sequence \((d_n)\) in \(D\) with \(d_n\to x\). The sequence \((d_n)\) is Cauchy. Uniform continuity makes \((f(d_n))\) Cauchy, and completeness of \(Y\) gives a limit. Define

\(F(x)=\lim f(d_n)\).

### Why the definition is independent of the approximating sequence

If \(e_n\to x\) is another sequence in \(D\), then

\(d_X(d_n,e_n)\le d_X(d_n,x)+d_X(x,e_n)\to 0\).

The paired-sequence criterion gives \(d_Y(f(d_n),f(e_n))\to 0\), so both image sequences have the same limit.

### Why the extension is uniformly continuous and agrees with \(f\)

Given \(\varepsilon>0\), choose \(\delta>0\) so that points of \(D\) less than \(\delta\) apart have images less than \(\varepsilon/3\) apart. If \(d_X(x,y)<\delta/3\), choose sequences \(d_n\to x\) and \(e_n\to y\) in \(D\). Eventually both \(d_X(d_n,x)<\delta/3\) and \(d_X(e_n,y)<\delta/3\), so

\(d_X(d_n,e_n)<\delta\)

and hence \(d_Y(f(d_n),f(e_n))<\varepsilon/3\). Passing to the limits gives \(d_Y(F(x),F(y))\le\varepsilon/3<\varepsilon\). Thus one input scale works for every \(x,y\), and \(F\) is uniformly continuous. When \(x\in D\), the constant approximating sequence \(d_n=x\) gives \(F(x)=f(x)\), so \(F|D=f\).

### Why the extension is unique

If continuous \(F,G:X\to Y\) agree on \(D\), fix \(x\in X\) and take \(d_n\in D\) with \(d_n\to x\). Then

\(F(x)=\lim F(d_n)=\lim f(d_n)=\lim G(d_n)=G(x)\).

Density leaves no freedom. The theorem explains why a uniformly continuous function on the rationals determines a unique continuous real function, provided the codomain contains the needed limits.

Completeness is essential. The identity map from \(Q\) to \(Q\) is uniformly continuous, but it cannot extend to a \(Q\)-valued continuous map on \(R\) that agrees with every rational: approaching an irrational would demand a rational limit equal to that irrational.

## 12. Compact bijections have continuous inverses

A continuous bijection need not be a homeomorphism. For example, the map from \([0,2\pi)\) to the unit circle given by \(t\mapsto (\cos t,\sin t)\) is a continuous bijection, but the inverse fails to be continuous near \((1,0)\): points approaching from one side have parameters near \(2\pi\), not near 0.

Compactness repairs the problem.

**Theorem 8.4 (Compact-to-Hausdorff inverse).** If \(K\) is compact, \(Y\) is a metric space, and \(f:K\to Y\) is a continuous bijection onto \(f(K)\), then \(f^{-1}:f(K)\to K\) is continuous.

A closed subset \(C\subseteq K\) is compact. Its continuous image \(f(C)\) is compact, hence closed in the metric space \(Y\). Therefore \(f\) is a closed map. For any closed \(C\subseteq K\),

\[(f^{-1})^{-1}(C)=f(C)\]

is closed in \(f(K)\). The closed-set criterion proves continuity of the inverse.

This result lets compact parameter spaces describe geometric objects without hidden inverse discontinuities, provided the parametrization is genuinely one-to-one.

## 13. Oscillation diagnoses continuity point by point

For a real-valued function \(f:E\to R\), define its oscillation at \(a\in E\) by the following extended nonnegative value in \([0,\infty]\):

\(osc_f(a)=\inf_{r>0} \sup\{|f(x)-f(y)|:x,y\in E\cap B_r(a)\}\).

As the radius shrinks, the local spread cannot increase. The function is continuous at \(a\) exactly when \(osc_f(a)=0\).

If \(f\) is continuous at \(a\), choose a ball on which every value lies within \(\varepsilon/2\) of \(f(a)\); then every pair of values differs by less than \(\varepsilon\). Conversely, if local oscillation is below \(\varepsilon\), compare \(f(x)\) with \(f(a)\), one of the allowed pairs.

Oscillation separates two phenomena:

- a removable error can have positive oscillation only because the value at the point is wrong;
- essential local fluctuation, as in \(\sin(1/x)\) near zero, keeps oscillation bounded away from zero at every scale.

It also supports a deeper theorem: the set of continuity points of any real-valued function on a metric space is a countable intersection of open sets. That result belongs to a later chapter, but the oscillation formula already shows how continuity can be encoded geometrically.

## Continuous interval images and bisection

The **intermediate value theorem** says: if \(f\) is continuous on the closed interval \([a,b]\) and \(y\) lies between \(f(a)\) and \(f(b)\), then some \(c\in [a,b]\) satisfies \(f(c)=y\).

The interval-image statement is proved by the connected-image theorem: an interval is connected, its continuous image is connected, and a connected real subset contains every value between two of its points. Thus no intermediate target can be omitted. This proof uses the preceding connectedness chapter, not a differentiability assumption.

For a root, apply the theorem with \(y=0\): if a continuous function changes sign across an interval, it has a zero in that interval. The theorem proves existence, not uniqueness and not an explicit formula.

**Bisection as proof and algorithm.** Suppose \(f(x)=x^3+x-1\). We have \(f(0)=-1\) and \(f(1)=1\), so a root lies in \([0,1]\). Test the midpoint. Since \(f(1/2)=-3/8\), retain \([1/2,1]\). Continue retaining a half-interval across which the signs differ. The nested intervals have lengths \(1,1/2,1/4,\ldots\), so completeness supplies a common point. Continuity forces the value there to be zero.

A text-only record of endpoints, signs, and interval lengths contains everything a graph would show. For example, the first brackets are \([0,1]\), \([0.5,1]\), and \([0.5,0.75]\) because \(f(0.75)>0\). A plot may suggest the root, but the sign table plus continuity certifies it.

Connectedness is hidden inside the word “interval.” On the disconnected domain \([-2,-1]\cup [1,2]\), the function \(f(x)=x\) is continuous and takes negative and positive values, but never takes \(0\) because \(0\) is absent from the domain.

## Extreme values and their failure boundaries

The **extreme value theorem** says a continuous real-valued function on a nonempty compact set attains a maximum and a minimum. On a closed bounded real interval, Heine–Borel supplies compactness.

The compact-domain theorem follows directly from sequential compactness. If the image were unbounded, choose inputs whose absolute outputs tend to infinity. A convergent subsequence of those inputs would, by continuity, give finite convergent outputs, a contradiction. Once boundedness is known, choose inputs whose outputs tend to the supremum. A convergent input subsequence again has its limit in the compact domain, and continuity makes that limit attain the supremum. Apply the same argument to the negative function for the minimum. The theorem assumes a nonempty compact domain so there is an input sequence and an attained point to discuss.

This theorem is not merely the statement that suprema exist. Completeness can provide \(\sup f(K)\) once the image is bounded; compactness and continuity produce a point where the supremum is attained.

Audit three failures:

- On \((0,1)\), \(f(x)=x\) is continuous and bounded but does not attain its supremum.
- On \([0,\infty)\), \(f(x)=x\) is continuous but unbounded.
- On \([0,1]\), define \(f(x)=1/(1-x)\) for \(x<1\) and \(f(1)=0\); the compact domain remains, but discontinuity permits unbounded behavior.

An optimization proof should therefore state the feasible set, show it is nonempty and compact, and show the objective is continuous before announcing an optimizer.

## 14. A proof-selection guide

When asked to prove continuity, first inspect the claim.

1. For an explicit formula at a fixed point, use epsilon–delta estimates.
2. For a function built by composition, use structural closure rules.
3. For a proposed discontinuity, choose a sequence approaching the point.
4. For continuity on an entire metric space, inverse images may expose the geometry.
5. For uniform continuity on a compact set, invoke Heine–Cantor after verifying compactness.
6. For non-uniformity, construct pairs whose input distances vanish while output distances do not.
7. For extension across a dense set, prove uniform continuity and check completeness of the codomain.

The wrong proof tool often reveals a false claim. If every epsilon–delta estimate forces \(\delta\) to shrink with the base point, uniform continuity may fail. If a limit definition depends on which approximating sequence is chosen, no continuous extension exists.

## 15. Misconceptions and failure boundaries

- **Continuous means one global \(\delta\).** That is uniform continuity. Ordinary continuity permits point-dependent scales.
- **Bounded continuous functions are uniformly continuous.** The bounded function \(\sin(x^2)\) on \(R\) is not uniformly continuous; its oscillations accelerate.
- **A continuous image of an open set is open.** Constant maps disprove this.
- **If \(x_n-y_n\to 0\), continuity makes \(f(x_n)-f(y_n)\to 0\).** Only uniform continuity gives this without assuming the sequences converge to a common domain point.
- **Every continuous function on a dense subset extends continuously.** Values must approach compatible limits; uniform continuity plus complete codomain is a sufficient guarantee.
- **A continuous bijection always has a continuous inverse.** Compact domain and Hausdorff codomain supply a useful sufficient condition; without them the claim fails.
- **A derivative is needed for a quantitative continuity bound.** Lipschitz and Hölder estimates can be proved directly, including for nondifferentiable functions.

## Exercises with complete solutions

### ANA-CH08-E001 — Exercise 1: Negate continuity precisely

Write the logical negation of continuity of \(f:E\to Y\) at \(a\).

<details><summary>Hint 1</summary>

Write out the quantifiers and the final implication in continuity.

</details>

<details><summary>Hint 2</summary>

Negating the implication keeps the small input distance and requires an output distance at least one fixed positive tolerance.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E001 — Solution

Continuity is \(\forall \varepsilon>0 \exists \delta>0 \forall x\in E\), followed by an implication. Negating changes the quantifiers and the implication. Thus there exists \(\varepsilon_0>0\) such that for every \(\delta>0\), there exists \(x\in E\) with \(d_X(x,a)<\delta\) and \(d_Y(f(x),f(a))\ge \varepsilon_0\).

</details>

### ANA-CH08-E002 — Exercise 2: Prove absolute value is Lipschitz

Show \(f(x)=|x|\) is uniformly continuous on \(R\).

<details><summary>Hint 1</summary>

Apply the reverse triangle inequality to absolute values.

</details>

<details><summary>Hint 2</summary>

A Lipschitz constant of one lets you choose delta equal to epsilon.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E002 — Solution

The reverse triangle inequality gives \(||x|-|y||\le |x-y|\). Thus \(f\) is Lipschitz with constant 1. Given \(\varepsilon>0\), choose \(\delta=\varepsilon\); then \(|x-y|<\delta\) implies \(||x|-|y||<\varepsilon\).

</details>

### ANA-CH08-E003 — Exercise 3: A polynomial at one point

Prove \(f(x)=x^3\) is continuous at a fixed \(a\in R\) with an explicit \(\delta\).

<details><summary>Hint 1</summary>

Factor the cubic difference and first restrict |x-a| below one.

</details>

<details><summary>Hint 2</summary>

Bound the remaining quadratic factor using |x| below |a|+1, then impose a second restriction on delta.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E003 — Solution

If \(|x-a|<1\), then \(|x|<|a|+1\). Factor
\(|x^3-a^3|=|x-a||x^2+ax+a^2|\).
The second factor is at most \((|a|+1)^2+|a|(|a|+1)+a^2\); call this positive number \(M\). Choose \(\delta=\min(1,\varepsilon/M)\). Then \(|x-a|<\delta\) makes the product less than \(\varepsilon\).

</details>

### ANA-CH08-E004 — Exercise 4: Sequential discontinuity of a floor function

Show the greatest-integer function \(\lfloor x \rfloor\) is discontinuous at every integer \(m\).

<details><summary>Hint 1</summary>

Approach the integer from the left.

</details>

<details><summary>Hint 2</summary>

Use m-1/n and compare its eventual floor with the floor value at m.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E004 — Solution

Let \(x_n=m-1/n\). Then \(x_n\to m\), but \(\lfloor x_n \rfloor=m-1\) for all sufficiently large \(n\), while \(\lfloor m \rfloor=m\). Therefore the image sequence does not converge to the value at \(m\), violating the sequential criterion.

</details>

### ANA-CH08-E005 — Exercise 5: Its other continuity points

Show \(\lfloor x \rfloor\) is continuous at every noninteger \(a\).

<details><summary>Hint 1</summary>

Keep x between the two integers surrounding a.

</details>

<details><summary>Hint 2</summary>

Take delta no larger than either distance from a to those integer boundaries.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E005 — Solution

Let \(m=\lfloor a \rfloor\), so \(m<a<m+1\). Choose \(\delta=\min(a-m,m+1-a)\), which is positive. If \(|x-a|<\delta\), then \(m<x<m+1\), so \(\lfloor x \rfloor=m=\lfloor a \rfloor\). The output difference is zero for every \(\varepsilon>0\).

</details>

### ANA-CH08-E006 — Exercise 6: Inverse image of a closed set

Let \(f:X\to R\) be continuous. Prove \(\{x:f(x)\ge c\}\) is closed.

<details><summary>Hint 1</summary>

Express the set as an inverse image.

</details>

<details><summary>Hint 2</summary>

Use the closed ray [c,infinity) and the closed-set criterion for continuity.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E006 — Solution

The interval \([c,\infty)\) is closed in \(R\). The set in question is \(f^{-1}([c,\infty))\), which is closed by the closed-set criterion for continuity.

</details>

### ANA-CH08-E007 — Exercise 7: Zero sets

Prove \(\{x:f(x)=g(x)\}\) is closed when \(f,g:X\to R\) are continuous.

<details><summary>Hint 1</summary>

Subtract the two functions.

</details>

<details><summary>Hint 2</summary>

The equality set is the inverse image of the closed singleton zero under that continuous difference.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E007 — Solution

The difference \(h=f-g\) is continuous. The equality set is \(h^{-1}(\{0\})\). Since \(\{0\}\) is closed, its inverse image is closed.

</details>

### ANA-CH08-E008 — Exercise 8: Continuity of distance to a set

For nonempty \(A\) in a metric space, prove \(x\mapsto d(x,A)\) is continuous.

<details><summary>Hint 1</summary>

Compare d(x,A) with d(x,y)+d(y,A).

</details>

<details><summary>Hint 2</summary>

Reverse x,y to obtain a Lipschitz bound on the difference of distances.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E008 — Solution

The distance-to-a-set inequality is \(|d(x,A)-d(y,A)|\le d(x,y)\). Hence the map is 1-Lipschitz and therefore uniformly continuous.

</details>

### ANA-CH08-E009 — Exercise 9: A continuous image need not preserve closedness

Give a continuous \(f:R\to R\) and closed \(C\subseteq R\) such that \(f(C)\) is not closed.

<details><summary>Hint 1</summary>

Look for a continuous function whose range has missing finite boundary points.

</details>

<details><summary>Hint 2</summary>

Arctan on the closed domain R has an open interval as its image.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E009 — Solution

Take \(f(x)=\arctan x\) and \(C=R\). The set \(C\) is closed, but \(f(C)=(-\pi/2,\pi/2)\), which omits its limit points \(\pm \pi/2\) and is not closed. Continuity controls inverse images, not arbitrary direct images.

</details>

### ANA-CH08-E010 — Exercise 10: Non-uniformity of an exponential

Show \(e^x\) is not uniformly continuous on \(R\).

<details><summary>Hint 1</summary>

Look for nearby inputs far out on the positive axis.

</details>

<details><summary>Hint 2</summary>

Use n and n+exp(-n), then apply exp(t) at least 1+t to keep the output gap at least one.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E010 — Solution

Let \(x_n=n\) and \(y_n=n+e^{-n}\). Then \(|x_n-y_n|=e^{-n}\to 0\). By direct calculation,
\(e^{y_n}-e^{x_n}=e^n(e^{e^{-n}}-1)\).
Since \(e^t\ge 1+t\), this difference is at least 1. The paired-sequence criterion rules out uniform continuity.

</details>

### ANA-CH08-E011 — Exercise 11: Uniformity on a bounded interval

Show \(x^2\) is Lipschitz on \([-M,M]\).

<details><summary>Hint 1</summary>

Factor the squared-output difference.

</details>

<details><summary>Hint 2</summary>

On the prescribed interval |x+y| is bounded by 2M.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E011 — Solution

For \(x,y\in [-M,M]\),
\(|x^2-y^2|=|x-y||x+y|\le 2M|x-y|\).
Thus the restriction is Lipschitz with constant \(2M\) and uniformly continuous. The estimate explains why compact restriction repairs the whole-line failure.

</details>

### ANA-CH08-E012 — Exercise 12: Hölder continuity of a power

For \(0<\alpha<1\), show \(x\mapsto x^\alpha\) is Hölder with exponent \(\alpha\) on \([0,\infty)\).

<details><summary>Hint 1</summary>

Assume x at least y and write x=y+h.

</details>

<details><summary>Hint 2</summary>

Use subadditivity of the alpha power to bound the output increment by h^alpha.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E012 — Solution

Assume \(x\ge y\ge 0\) and write \(x=y+h\). For \(0<\alpha<1\), subadditivity follows without differentiation: for \(a,b\ge0\) and \(a+b>0\), set \(t=a/(a+b)\); then \(t^\alpha\ge t\) and \((1-t)^\alpha\ge1-t\), so \(a^\alpha+b^\alpha\ge(a+b)^\alpha\). The zero case is immediate. Thus \((y+h)^\alpha\le y^\alpha+h^\alpha\). Hence \(0\le x^\alpha-y^\alpha\le (x-y)^\alpha\). Swapping the points gives \(|x^\alpha-y^\alpha|\le |x-y|^\alpha\).

</details>

### ANA-CH08-E013 — Exercise 13: A bounded non-uniformly continuous function

Show \(f(x)=\sin(x^2)\) is not uniformly continuous on \(R\).

<details><summary>Hint 1</summary>

Choose input squares at alternating maxima and minima of sine.

</details>

<details><summary>Hint 2</summary>

Rationalize the difference of those square roots to show the inputs approach each other.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E013 — Solution

Set \(x_n=\sqrt{2\pi n+\pi/2}\) and \(y_n=\sqrt{2\pi n+3\pi/2}\). Then \(f(x_n)=1\) and \(f(y_n)=-1\). Also
\(y_n-x_n=\pi/(y_n+x_n)\to 0\).
The outputs stay distance 2 apart, violating the paired-sequence criterion. Bounded range does not control the rate of oscillation.

</details>

### ANA-CH08-E014 — Exercise 14: Uniform continuity and Cauchy sequences

Suppose \(f:E\to Y\) is uniformly continuous and \((x_n)\) is Cauchy. Prove \((f(x_n))\) is Cauchy without assuming either ambient space is complete.

<details><summary>Hint 1</summary>

Receive epsilon and obtain one delta from uniform continuity.

</details>

<details><summary>Hint 2</summary>

Use the Cauchy condition with that delta for every pair of sufficiently late input terms.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E014 — Solution

Given \(\varepsilon>0\), uniform continuity gives \(\delta>0\). Cauchyness supplies \(N\) such that \(m,n\ge N\) implies \(d_X(x_m,x_n)<\delta\). Therefore \(d_Y(f(x_m),f(x_n))<\varepsilon\). Completeness concerns whether this Cauchy image converges, not whether it is Cauchy.

</details>

### ANA-CH08-E015 — Exercise 15: Why pointwise continuity is insufficient

Give a continuous function and a Cauchy input sequence whose image is not Cauchy.

<details><summary>Hint 1</summary>

Allow a Cauchy input to approach a missing endpoint of the function domain.

</details>

<details><summary>Hint 2</summary>

On (0,1), the reciprocal maps 1/n to the unbounded sequence n.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E015 — Solution

On \(E=(0,1)\), take \(f(x)=1/x\) and \(x_n=1/n\) for \(n\ge 2\). The sequence is Cauchy because it converges to zero in \(R\), but \(f(x_n)=n\) is not Cauchy. The function is continuous but not uniformly continuous on its domain.

</details>

### ANA-CH08-E016 — Exercise 16: A removable extension

Define \(f(x)=(x^2-1)/(x-1)\) on \(R\setminus\{1\}\). Find and prove the unique continuous extension to \(R\).

<details><summary>Hint 1</summary>

Cancel the removable factor away from the omitted point.

</details>

<details><summary>Hint 2</summary>

The simplified function forces the missing value to be 2; continuity also proves uniqueness.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E016 — Solution

For \(x\ne 1\), factor to get \(f(x)=x+1\). Thus \(\lim_{x\to 1}f(x)=2\). Define \(F(1)=2\) and \(F(x)=f(x)\) otherwise; then \(F(x)=x+1\) everywhere, so it is continuous. Uniqueness follows because continuity at 1 forces the assigned value to equal the limit 2.

</details>

### ANA-CH08-E017 — Exercise 17: No extension for an oscillation

Show \(\sin(1/x)\) on \(R\setminus\{0\}\) has no continuous extension at zero.

<details><summary>Hint 1</summary>

Construct two sequences approaching zero with opposite sine values.

</details>

<details><summary>Hint 2</summary>

Choose reciprocal phases pi/2+2pi n and 3pi/2+2pi n.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E017 — Solution

Let \(x_n=1/(\pi/2+2\pi n)\) and \(y_n=1/(3\pi/2+2\pi n)\). Both tend to zero, but \(\sin(1/x_n)=1\) and \(\sin(1/y_n)=-1\). A continuous extension would force both image sequences to converge to the same assigned value, impossible.

</details>

### ANA-CH08-E018 — Exercise 18: Uniform limits preserve uniform continuity

Suppose every \(f_n:E\to Y\) is uniformly continuous and \(f_n\to f\) uniformly, where \(Y\) is a normed space. Prove \(f\) is uniformly continuous.

<details><summary>Hint 1</summary>

Freeze one approximating function close to f everywhere.

</details>

<details><summary>Hint 2</summary>

Split the output difference into two uniform-approximation errors and one uniform-continuity error, each below epsilon/3.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E018 — Solution

Given \(\varepsilon>0\), choose \(N\) so that \(\lVert f_N-f\rVert_\infty<\varepsilon/3\). Uniform continuity of \(f_N\) gives \(\delta>0\) such that \(d_X(x,y)<\delta\) implies \(\lVert f_N(x)-f_N(y)\rVert<\varepsilon/3\). Then
\(\lVert f(x)-f(y)\rVert\le \lVert f(x)-f_N(x)\rVert+\lVert f_N(x)-f_N(y)\rVert+\lVert f_N(y)-f(y)\rVert<\varepsilon\).

</details>

### ANA-CH08-E019 — Exercise 19: Compact bijection

Let \(f:[0,1]\to R\) be continuous and one-to-one. Prove its inverse from \(f([0,1])\) to \([0,1]\) is continuous.

<details><summary>Hint 1</summary>

Show images of relatively closed subsets of [0,1] are closed.

</details>

<details><summary>Hint 2</summary>

Use compactness of the subset and its image, then apply the closed-set criterion to the inverse.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E019 — Solution

The interval \([0,1]\) is compact, and \(R\) is a metric space. A closed subset of \([0,1]\) is compact; its image under \(f\) is compact and therefore closed in \(R\). Hence \(f\) is a closed bijection. Inverse images of closed sets under \(f^{-1}\) are direct images under \(f\), so the inverse is continuous.

</details>

### ANA-CH08-E020 — Exercise 20: Uniqueness on a dense set

Let continuous maps \(F,G:X\to Y\) agree on a dense subset \(D\subseteq X\). Prove \(F=G\).

<details><summary>Hint 1</summary>

Approximate an arbitrary x by a sequence from D.

</details>

<details><summary>Hint 2</summary>

Apply both continuous maps to that same sequence and invoke uniqueness of limits in the codomain.

</details>

<details><summary>Solution</summary>

#### ANA-CH08-E020 — Solution

For any \(x\in X\), choose \(d_n\in D\) with \(d_n\to x\). Continuity gives \(F(d_n)\to F(x)\) and \(G(d_n)\to G(x)\). But \(F(d_n)=G(d_n)\) for every \(n\), so uniqueness of limits in \(Y\) yields \(F(x)=G(x)\). Since \(x\) was arbitrary, the maps agree everywhere.

</details>

## ANA-CH08-I001 — Investigation: construct a modulus

Choose one function from each class below and derive an explicit modulus of continuity on the stated domain:

1. a polynomial on a compact interval;
2. \(\log x\) on \([a,\infty)\) with \(a>0\);
3. \(\sqrt{x}\) on \([0,\infty)\);
4. the distance from a point to a fixed nonempty set in a metric space.

For each modulus, identify whether it is sharp near zero, state the resulting error-transfer rule, and explain what changes if the domain is enlarged. A complete investigation must distinguish a bound that merely proves continuity from a bound that captures the true scale of variation.

## Chapter synthesis

Continuity at a point transports convergence into convergence. Uniform continuity transports arbitrarily close pairs into arbitrarily close image pairs and therefore preserves Cauchy structure. Compactness turns the first promise into the second; completeness turns Cauchy image data into actual extension values. These are different jobs performed by different hypotheses.

The proof-safe habit is to ask where the control lives. Does \(\delta\) depend on the point? Can bad points escape toward infinity or a missing boundary? Does an approximating sequence have a limit in the codomain? Once those questions are explicit, continuity stops being a vague property of graphs and becomes a precise mechanism for moving information between spaces.

## Summary

Continuity controls behavior near each specified point; uniform continuity chooses one input scale across the entire domain. Compactness supplies that common scale, and uniform maps preserve Cauchy sequences even before completeness is considered. Completeness of the codomain permits extension from a dense domain; continuity then makes such an extension unique. Moving bad pairs expose failures near missing endpoints or at infinity, where individual continuity alone provides insufficient control.
