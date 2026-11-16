
# Families of Functions and Equicontinuity

Analysis often studies not one function but a sequence or family of functions: approximating polynomials, numerical trajectories, candidate minimizers, or solutions to regularized problems. Pointwise information treats each input separately and is usually too weak to make the family compact. Uniform bounds control height but not oscillation. Equicontinuity supplies the missing shared control over variation.

This chapter places continuous functions inside a metric space, proves completeness under the uniform norm, and develops the Arzelà–Ascoli theorem as a machine for extracting uniformly convergent subsequences. The theme mirrors Heine–Cantor: compactness converts many local requirements into finitely many controls.

## 1. Continuous functions form a normed space

Let \(K\) be a nonempty compact metric space. Write \(C(K)\) for the real-valued continuous functions on \(K\). Every \(f\in C(K)\) is bounded and attains its extrema, so

\[\lVert f\rVert_\infty=\max_{x\in K}|f(x)|\]

is finite. It is a norm:

1. \(\lVert f\rVert_\infty\ge 0\), and it vanishes only for the zero function;
2. \(\lVert \alpha f\rVert_\infty=|\alpha|\lVert f\rVert_\infty\);
3. \(\lVert f+g\rVert_\infty\le \lVert f\rVert_\infty+\lVert g\rVert_\infty\).

The induced metric is

\(d_\infty(f,g)=\lVert f-g\rVert_\infty\).

Convergence in this metric is exactly uniform convergence. A statement about a sequence of functions has become an ordinary sequence statement in a metric space.

## 2. The uniform function space is complete

**Theorem 14.1.** If \(K\) is compact, then \((C(K),\lVert \cdot \rVert_\infty)\) is complete.

Let \((f_n)\) be Cauchy in the uniform norm. For each fixed \(x\),

\(|f_m(x)-f_n(x)|\le \lVert f_m-f_n\rVert_\infty\),

so \((f_n(x))\) is Cauchy in \(R\). Define

\(f(x)=\lim_{n\to \infty}f_n(x)\).

We must prove uniform convergence, not merely pointwise existence. Given \(\varepsilon>0\), choose \(N\) so \(m,n\ge N\) implies \(\lVert f_m-f_n\rVert_\infty<\varepsilon\). Fix \(n\ge N\) and let \(m\to \infty\) in

\(|f_m(x)-f_n(x)|<\varepsilon\).

For every \(x\), this gives \(|f(x)-f_n(x)|\le \varepsilon\). Hence \(\lVert f-f_n\rVert_\infty\le \varepsilon\), so \(f_n\to f\) uniformly. The uniform limit theorem makes \(f\) continuous, placing the limit back in \(C(K)\).

Completeness of the scalar field builds pointwise limits; the Cauchy estimate upgrades them uniformly; preservation of continuity closes the space.

## 3. Other metrics ask other questions

On \([0,1]\), one can also define

\(\lVert f\rVert_1=\int _0^1|f(x)|dx\).

The uniform norm measures worst-case error, while the integral norm measures average absolute error. Uniform convergence implies \(L^1\) convergence because

\(\lVert f-g\rVert_1\le \lVert f-g\rVert_\infty\).

**Worked example 1 (small area with a fixed peak).**

The converse fails. For \(n\ge2\), let \(f_n(x)=\max(1-n|x-1/2|,0)\). These triangular spikes have height 1, so \(\lVert f_n\rVert_\infty=1\), but their area is \(1/n\), so \(\lVert f_n\rVert_1\to 0\).

The space \(C([0,1])\) is not complete under \(\lVert \cdot \rVert_1\). Continuous functions can converge in integral norm to a discontinuous step function. Completion requires equivalence classes of integrable functions, developed in the \(L^p\) chapter.

## 4. Pointwise and uniform boundedness

A family \(F\subseteq C(K)\) is **pointwise bounded** if for each \(x\in K\) there is \(M_x\) such that \(|f(x)|\le M_x\) for every \(f\in F\). It is **uniformly bounded** if one \(M\) works for every function and every point:

\(\sup_{f\in F}\lVert f\rVert_\infty\le M\).

Uniform boundedness implies pointwise boundedness. The converse fails even for continuous functions on a compact interval. Let

\[f_n(x)=n \max(1-n|x-1/n|,0)\]

on \([0,1]\), with narrow peaks of height \(n\) around \(1/n\) and supports chosen so each fixed positive point lies in only finitely many supports; define the value at zero to be zero. Each point sees bounded values across the family, but \(\lVert f_n\rVert_\infty=n\).

Pointwise boundedness permits peaks to move and grow. A compactness theorem needs common control.

## 5. Equicontinuity is continuity shared by a family

A family \(F\) of functions from a metric space \(K\) to a metric space \(Y\) is **equicontinuous at** \(x\in K\) if

\(\forall \varepsilon>0 \exists \delta>0 \forall f\in F \forall y\in K: d_K(x,y)<\delta \Rightarrow d_Y(f(x),f(y))<\varepsilon\).

It is equicontinuous if this holds at every \(x\). The radius may depend on \(x\) and \(\varepsilon\), but not on the selected function.

The family is **uniformly equicontinuous** if one \(\delta\) works for every base point as well:

\(\forall \varepsilon>0 \exists \delta>0 \forall f\in F \forall x,y\in K: d_K(x,y)<\delta \Rightarrow d_Y(f(x),f(y))<\varepsilon\).

On a compact domain, equicontinuity implies uniform equicontinuity. Cover \(K\) by local balls using \(\varepsilon/2\) control, take a finite subcover, and choose a sufficiently small common radius using a Lebesgue-number argument.

### Shared Lipschitz control

If every \(f\in F\) is Lipschitz with the same constant \(L\), the family is uniformly equicontinuous. For \(L>0\), choose \(\delta=\varepsilon/L\); for \(L=0\), every member is constant on each metric component and any positive \(\delta\) works. Individual Lipschitz constants that grow without bound do not provide shared control.

**Worked example 2 (bounded heights, growing oscillation).**

The family \(\{\sin(nx):n\ge 1\}\) on \([0,2\pi]\) is uniformly bounded but not equicontinuous. Take \(x=0\) and \(y_n=\pi/(2n)\). The input distance tends to zero, while \(|\sin(ny_n)-\sin(0)|=1\).

## 6. Pointwise bounds plus equicontinuity give global bounds

Suppose \(K\) is compact, \(F\subseteq C(K)\) is equicontinuous, and the family is pointwise bounded. Then \(F\) is uniformly bounded.

For the general statement, use equicontinuity with \(\varepsilon=1\). Each \(x\) has a neighborhood \(U_x\) on which all family members change from their value at \(x\) by less than 1. Pointwise boundedness supplies \(M_x\) at the center. A finite subcover \(U_{x_1},\ldots,U_{x_m}\) gives

\[|f(y)|\le \max_j M_{x_j}+1\]

for every \(y\) and every \(f\).

Thus on a compact domain, pointwise boundedness plus equicontinuity upgrades to uniform boundedness.

If \(K\) is also connected, it is enough to assume boundedness at one fixed
point \(x_0\). Compactness upgrades equicontinuity to uniform equicontinuity.
Using the shared scale for output error (1), a finite-net argument connects
every point to \(x_0\) by a chain with a uniformly bounded number of short
steps. The triangle inequality then propagates the bound at \(x_0\) across the
whole family.

Connectedness cannot be dropped from this one-point variant. On the compact
space \(K=\{0,1\}\), the constant-on-components family given by
\(f_n(0)=0\) and \(f_n(1)=n\) is equicontinuous and bounded at \(0\), but it is
not uniformly bounded. The general theorem avoids this failure by requiring a
pointwise bound on every component.

## 7. Total boundedness is finite approximation at every scale

A metric space \(S\) is **totally bounded** if for every \(\varepsilon>0\), finitely many \(\varepsilon\)-balls cover \(S\). Compact metric spaces are totally bounded. A complete and totally bounded metric space is compact.

Boundedness alone does not imply total boundedness in general spaces. In \(C([0,2\pi])\), the functions \(\sin(nx)\) all lie in the unit ball, but their rapid oscillations prevent finite uniform approximation at small scale.

For a uniformly bounded, equicontinuous family \(F\subseteq C(K)\), total boundedness is plausible because two finite discretizations suffice:

1. compactness gives finitely many domain sample points fine enough to control variation;
2. boundedness lets us quantize the possible function values at those points into finitely many bins.

Functions falling in the same finite bin pattern are uniformly close. This is the finite-information heart of Arzelà–Ascoli.

## 8. Arzelà–Ascoli

**Theorem 14.2 (Arzelà–Ascoli, real compact form).** Let \(K\) be a compact metric space. A family \(F\subseteq C(K)\) has compact closure in the uniform norm if and only if it is uniformly bounded and equicontinuous.

Equivalently, every sequence in a uniformly bounded equicontinuous family has a uniformly convergent subsequence.

### Necessity

If the closure is compact, it is bounded in the uniform norm. For equicontinuity, cover the compact closure by finitely many small uniform balls around continuous functions. Each center is uniformly continuous on \(K\). A common input scale for the finitely many centers, plus the small uniform approximation error, controls every member of the family.

### Sufficiency by a diagonal subsequence

Compact metric spaces have a countable dense subset \(\{q_1,q_2,\ldots\}\). Given a sequence \((f_n)\) in \(F\), boundedness of the scalar sequence \((f_n(q_1))\) yields a convergent subsequence. From it extract a further subsequence converging at \(q_2\), and continue. The diagonal subsequence \((g_n)\) converges at every \(q_j\).

To upgrade to uniform Cauchyness, fix \(\varepsilon>0\). Uniform equicontinuity gives \(\delta>0\) making all function changes below \(\varepsilon/3\) over input distances below \(\delta\). Compactness supplies a finite \(\delta\)-net chosen from the dense set. The values of \(g_n\) are eventually Cauchy at those finitely many net points. For arbitrary \(x\), choose a nearby net point \(q_j\) and write

\(|g_m(x)-g_n(x)|\le |g_m(x)-g_m(q_j)|+|g_m(q_j)-g_n(q_j)|+|g_n(q_j)-g_n(x)|<\varepsilon\).

Thus \((g_n)\) is uniformly Cauchy. Completeness of \(C(K)\) supplies a uniform continuous limit. This proves the subsequence claim for sequences in \(F\). To obtain compactness of the closure, take any sequence \((h_n)\) in \(\overline F\) and choose \(f_n\in F\) with \(\lVert h_n-f_n\rVert_\infty<1/n\). An extracted uniformly convergent subsequence of \((f_n)\) forces the corresponding subsequence of \((h_n)\) to the same limit in \(\overline F\). Hence \(\overline F\) is sequentially compact and therefore compact as a metric space.

## 9. Diagnosing failed compactness

**Worked example 3 (failure at a boundary point).**

For \(f_n(x)=x^n\) on \([0,1]\), the family is uniformly bounded. It is not equicontinuous at 1: choose \(x_n=1-1/n\), so \(x_n\to 1\), but

\(|f_n(x_n)-f_n(1)|=1-(1-1/n)^n\to 1-e^{-1}\).

No subsequence can converge uniformly, because every subsequence has the same discontinuous pointwise limit: zero on \([0,1)\) and one at 1.

For \(\sin(nx)\), oscillation destroys equicontinuity everywhere. For moving narrow spikes, pointwise convergence to zero may hold, but uniform norms remain large. Arzelà–Ascoli identifies the shared defect: no single local scale controls every function.

## 10. Dini's theorem: monotonicity upgrades convergence

**Theorem 14.3 (Dini's).** Let \(K\) be compact, let \(f_n\in C(K)\), and suppose \(f_n(x)\) decreases pointwise to a continuous function \(f(x)\). Then \(f_n\to f\) uniformly. The same holds for increasing sequences.

Set \(g_n=f_n-f\ge 0\). For \(\varepsilon>0\), the open sets

\[U_n=\{x:g_n(x)<\varepsilon\}\]

increase with \(n\) and cover \(K\) by pointwise convergence. Compactness gives a finite subcover. Because the sets are nested, the largest index in that finite collection already covers all of \(K\). Hence \(g_N<\varepsilon\) everywhere, and monotonicity keeps the bound for later \(n\).

Continuity of the limit is essential. The functions \(x^n\) decrease pointwise on \([0,1]\) to a discontinuous limit and do not converge uniformly.

## 11. Application pattern: compactness without a formula

Suppose \((u_n)\) are approximate solutions on \([0,T]\) satisfying

\[|u_n(t)|\le M\]

and

\[|u_n(t)-u_n(s)|\le L|t-s|\]

with constants independent of \(n\). The family is uniformly bounded and equicontinuous. Arzelà–Ascoli supplies a uniformly convergent subsequence.

If the approximation equation can be written in integral form and its integrands also converge appropriately, pass to the limit in that integral equation. This pattern proves existence without an explicit solution formula:

\(uniform estimates \to compact subsequence \to limit equation\).

The theorem provides subsequential existence, not uniqueness. A separate Lipschitz or energy estimate may show that all convergent subsequences have the same limit and thereby force the whole sequence to converge.

## 12. Misconceptions and boundaries

- **Uniform boundedness makes a family compact.** Oscillation can still increase without limit.
- **Each function being uniformly continuous makes the family equicontinuous.** The individual moduli may deteriorate with the function index.
- **Pointwise bounded means one global bound.** Moving peaks separate the notions.
- **Pointwise convergence plus equicontinuity always gives uniform convergence.** Compactness of the domain and continuity/uniqueness of the limiting behavior matter; subsequence arguments must be checked.
- **Arzelà–Ascoli proves the whole sequence converges.** It initially extracts a subsequence.
- **All natural norms on function spaces give the same convergence.** Uniform and integral norms encode different errors.
- **Dini's theorem works for arbitrary pointwise convergence.** Monotonicity, compact domain, and continuous limit are essential.

## Compact integral operators and a nonclosed image

Let \(K(s,t)\) be continuous on \([a,b]^2\), and set \((Tf)(s)=\int_a^bK(s,t)f(t)\,dt\) for continuous \(f\). If \(\|f\|_\infty\le M\), the output is bounded by \((b-a)M\|K\|_\infty\). Moreover,
\[
 |Tf(s)-Tf(u)|\le(b-a)M\sup_t|K(s,t)-K(u,t)|.
\]
Uniform continuity of the kernel on its compact rectangle makes this an equicontinuity estimate independent of the chosen input. Arzelà–Ascoli therefore gives compact closure of the output of every bounded input family. This is the meaning of calling the linear map a compact operator in this setting. Its linearity follows from the integral, and the height estimate also proves norm continuity of the operator itself.

The Volterra map \((Vf)(s)=\int_0^sf(t)\,dt\) on \([-1,1]\) gives a related example even though its indicator-style kernel is not jointly continuous. Its outputs have height at most \(M\) and share Lipschitz constant \(M\), directly from the integral bound on the interval between two inputs. Thus its bounded outputs also have compact closure.

Compact closure is distinct from a closed image. Take \(f_n(t)=\tanh(nt)\), which are continuous with supremum norm at most one. Their outputs are \(n^{-1}\log\cosh(ns)\). The inequalities \(e^{|u|}/2\le\cosh u\le e^{|u|}\) show that these converge uniformly to \(|s|\), with error at most \((\log2)/n\). But every output of \(V\) on a continuous input is continuously differentiable, whereas \(|s|\) is not differentiable at zero. The limit therefore lies in the compact closure of the image of the unit ball without lying in that image. Arzelà–Ascoli supplies the closure statement needed for subsequences; it does not silently preserve every stronger property of the approximating outputs.

This example also locates the role of the chosen topology. The output derivatives are the original inputs and need not converge uniformly. Uniform convergence of the primitives alone does not give convergence in a derivative norm. To preserve that stronger conclusion one would need additional control on the derivative family and a theorem connecting the two limits.

Compactness also survives uniform approximation of operators in their operator norm. Suppose compact linear maps \(T_n:C(K)\to C(K)\) approach a bounded linear map \(T\) in that norm. For the unit input ball and any positive tolerance, choose one \(T_n\) whose output differs uniformly from \(T\)'s output by less than a third of the tolerance. The relatively compact image of that chosen map has a finite net at the same scale. The triangle inequality makes those finitely many centers a net for the image under \(T\). Thus that image is totally bounded. Its closure is complete as a closed subset of \(C(K)\), hence compact. Scaling handles every bounded input ball. This finite-net proof is useful when an integral kernel is approximated uniformly by simpler kernels: the kernel supremum error bounds the operator norm error by the interval length, making the compactness conclusion stable under that approximation.

## Exercises with complete solutions

### ANA-CH09-E001 — Exercise 1: Supremum norm triangle inequality

Prove \(\lVert f+g\rVert_\infty\le \lVert f\rVert_\infty+\lVert g\rVert_\infty\).

<details><summary>Hint 1</summary>

Start with the ordinary triangle inequality at one point x.

</details>

<details><summary>Hint 2</summary>

Replace each magnitude by its supremum norm and then take the supremum of the left side.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E001 — Solution

For each \(x\), \(|f(x)+g(x)|\le |f(x)|+|g(x)|\le \lVert f\rVert_\infty+\lVert g\rVert_\infty\). Taking the supremum over \(x\) preserves the bound.

</details>

### ANA-CH09-E002 — Exercise 2: Uniform convergence as metric convergence

Show \(f_n\to f\) uniformly exactly when \(\lVert f_n-f\rVert_\infty\to 0\).

<details><summary>Hint 1</summary>

Translate a uniform error bound into a bound for its supremum.

</details>

<details><summary>Hint 2</summary>

When strict inequalities matter, use epsilon/2 before taking that supremum.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E002 — Solution

Uniform convergence says that for every \(\varepsilon>0\), eventually \(|f_n(x)-f(x)|<\varepsilon\) for every \(x\). This is equivalent to the supremum over \(x\) tending to zero, which is precisely norm convergence.

</details>

### ANA-CH09-E003 — Exercise 3: Uniform implies integral convergence

On \([0,1]\), prove \(\lVert f\rVert_1\le \lVert f\rVert_\infty\).

<details><summary>Hint 1</summary>

Bound |f(x)| pointwise by its supremum norm.

</details>

<details><summary>Hint 2</summary>

Integrate that constant bound over an interval of length one.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E003 — Solution

Since \(|f(x)|\le \lVert f\rVert_\infty\), integration gives \(\int _0^1|f(x)|dx\le \int _0^1\lVert f\rVert_\infty dx=\lVert f\rVert_\infty\).

</details>

### ANA-CH09-E004 — Exercise 4: Spike norms

For \(n\ge2\), let \(f_n(x)=\max(1-n|x-1/2|,0)\). Compute \(\lVert f_n\rVert_\infty\) and \(\lVert f_n\rVert_1\).

<details><summary>Hint 1</summary>

Find the triangle's height and support endpoints.

</details>

<details><summary>Hint 2</summary>

Its uniform norm is the height; its integral norm is the area of the triangle.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E004 — Solution

The height at \(1/2\) is 1, so the uniform norm is 1. The graph is a triangle with base length \(2/n\) and height 1, so its area and \(L^1\) norm are \((1/2)(2/n)(1)=1/n\).

</details>

### ANA-CH09-E005 — Exercise 5: Completeness step

If \((f_n)\) is uniform-Cauchy and \(f_n(x)\to f(x)\) pointwise, show \(f_n\to f\) uniformly.

<details><summary>Hint 1</summary>

Fix a late n in the uniform Cauchy estimate and let the other index tend to infinity.

</details>

<details><summary>Hint 2</summary>

The threshold is independent of x; start with epsilon/2 to absorb the non-strict inequality after passage to the limit.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E005 — Solution

Given \(\varepsilon>0\), choose \(N\) so \(m,n\ge N\) gives \(\lVert f_m-f_n\rVert_\infty<\varepsilon\). Fix \(n\ge N\) and let \(m\to \infty\) pointwise in \(|f_m(x)-f_n(x)|<\varepsilon\). Then \(|f(x)-f_n(x)|\le \varepsilon\) for every \(x\), so the supremum is at most \(\varepsilon\).

</details>

### ANA-CH09-E006 — Exercise 6: Shared Lipschitz family

Show \(\{f:|f(0)|\le 2 \text{ and } f \text{ is 3-Lipschitz on } [0,1]\}\) is uniformly bounded and equicontinuous.

<details><summary>Hint 1</summary>

Use the shared Lipschitz constant for equicontinuity.

</details>

<details><summary>Hint 2</summary>

Compare every value to f(0) to obtain a single height bound valid for the entire family.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E006 — Solution

Shared 3-Lipschitz control gives equicontinuity with \(\delta=\varepsilon/3\). Also \(|f(x)|\le |f(0)|+3|x|\le 5\), so the family is uniformly bounded.

</details>

### ANA-CH09-E007 — Exercise 7: Growing slopes

Why is \(\{x\mapsto nx:n\ge 1\}\) not equicontinuous at zero on \([0,1]\)?

<details><summary>Hint 1</summary>

Let the function index grow as the test input approaches zero.

</details>

<details><summary>Hint 2</summary>

For slope n choose input 1/n, obtaining output gap one despite vanishing input distance.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E007 — Solution

Fix \(\varepsilon=1/2\). For every \(\delta>0\), choose \(n\) with \(1/n<\delta\) and set \(y=1/n\). Then \(|y-0|<\delta\), but \(|ny-n\cdot 0|=1\ge \varepsilon\). No common \(\delta\) works.

</details>

### ANA-CH09-E008 — Exercise 8: Trigonometric oscillation

Show \(\{\sin(nx)\}\) is not equicontinuous at zero.

<details><summary>Hint 1</summary>

Choose an input where the nth sine reaches its first maximum.

</details>

<details><summary>Hint 2</summary>

The points pi/(2n) approach zero while the corresponding values remain one.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E008 — Solution

Let \(y_n=\pi/(2n)\). Then \(y_n\to 0\), while \(|\sin(ny_n)-\sin(0)|=1\). This violates the sequential form of shared continuity.

</details>

### ANA-CH09-E009 — Exercise 9: Pointwise limit of powers

Find the pointwise limit of \(x^n\) on \([0,1]\) and explain why convergence is not uniform.

<details><summary>Hint 1</summary>

Determine the limit separately at one and below one.

</details>

<details><summary>Hint 2</summary>

The discontinuous pointwise limit rules out uniform convergence of continuous functions.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E009 — Solution

The limit is zero for \(x<1\) and one at \(x=1\). It is discontinuous. A uniform limit of continuous functions would be continuous, so convergence is not uniform. Directly, the supremum error is 1.

</details>

### ANA-CH09-E010 — Exercise 10: Equicontinuity of powers away from one

Show \(\{x^n:n\ge 1\}\) is equicontinuous on \([0,r]\) when \(0<r<1\).

<details><summary>Hint 1</summary>

Bound all derivatives n x^(n-1) on the shorter interval.

</details>

<details><summary>Hint 2</summary>

Show n r^(n-1) stays bounded, then apply the mean value theorem with that common bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E010 — Solution

The derivatives satisfy \(n x^{n-1}\le n r^{n-1}\). The sequence \(n r^{n-1}\) is bounded; call its supremum \(L\). The mean value theorem makes every member \(L\)-Lipschitz on \([0,r]\), giving equicontinuity.

</details>

### ANA-CH09-E011 — Exercise 11: Compact closure implies boundedness

Why must a relatively compact subset of \(C(K)\) be uniformly bounded?

<details><summary>Hint 1</summary>

A compact closure is bounded in the uniform metric.

</details>

<details><summary>Hint 2</summary>

Translate its ball bound about a possibly nonzero center into a common supremum-norm bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E011 — Solution

Its closure is compact in the uniform metric. Every compact metric set is bounded, so there are a center \(g\) and radius \(R\) with \(\lVert f-g\rVert_\infty\le R\). Then \(\lVert f\rVert_\infty\le R+\lVert g\rVert_\infty\) for the whole family.

</details>

### ANA-CH09-E012 — Exercise 12: Finite net estimate

Suppose all \(f\) in a family change by less than \(\varepsilon/3\) within distance \(\delta\). If \(q_1,\ldots,q_m\) form a \(\delta\)-net and \(|f(q_j)-g(q_j)|<\varepsilon/3\) for every \(j\), prove \(\lVert f-g\rVert_\infty<\varepsilon\).

<details><summary>Hint 1</summary>

For an arbitrary x choose a nearby net point q_j.

</details>

<details><summary>Hint 2</summary>

Insert f(q_j) and g(q_j) between f(x) and g(x) to split the error into three controlled pieces.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E012 — Solution

For any \(x\), choose \(q_j\) within \(\delta\). Then
\(|f(x)-g(x)|\le |f(x)-f(q_j)|+|f(q_j)-g(q_j)|+|g(q_j)-g(x)|<\varepsilon\).
Taking the supremum proves the claim.

</details>

### ANA-CH09-E013 — Exercise 13: Arzelà–Ascoli application

Suppose \(|f_n(0)|\le 1\) and \(|f_n'|\le 4\) on \([0,1]\). Show a uniformly convergent subsequence exists.

<details><summary>Hint 1</summary>

Use the derivative bound to obtain a shared Lipschitz constant.

</details>

<details><summary>Hint 2</summary>

Bound heights from the value at zero, then check the hypotheses of Arzela-Ascoli.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E013 — Solution

The mean value theorem gives a shared Lipschitz constant 4, so the family is equicontinuous. Also \(|f_n(x)|\le |f_n(0)|+4|x|\le 5\), giving uniform boundedness. Arzelà–Ascoli supplies a uniformly convergent subsequence.

</details>

### ANA-CH09-E014 — Exercise 14: What the theorem does not give

Give a bounded equicontinuous sequence with two different uniformly convergent subsequences.

<details><summary>Hint 1</summary>

Consider constant functions whose values alternate.

</details>

<details><summary>Hint 2</summary>

The even and odd subsequences can converge uniformly to different constants despite shared bounds and continuity.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E014 — Solution

Let \(f_n\) be the constant function \((-1)^n\). The family is uniformly bounded and equicontinuous. The even subsequence converges uniformly to 1 and the odd subsequence to -1. Compactness does not imply uniqueness of subsequential limits.

</details>

### ANA-CH09-E015 — Exercise 15: Dini for an increasing sequence

Derive the increasing version of Dini's theorem from the decreasing version.

<details><summary>Hint 1</summary>

Negate the functions and their limit.

</details>

<details><summary>Hint 2</summary>

Increasing convergence becomes decreasing convergence, and the uniform error is unchanged.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E015 — Solution

If \(f_n\uparrow f\), then \(-f_n\downarrow -f\). All functions and the limit remain continuous. Apply the decreasing theorem to obtain uniform convergence of \(-f_n\) to \(-f\), equivalent to uniform convergence of \(f_n\) to \(f\).

</details>

### ANA-CH09-E016 — Exercise 16: Dini hypothesis failure

Why does Dini's theorem not apply to \(x^n\) on \([0,1]\)?

<details><summary>Hint 1</summary>

Compute the pointwise limit before invoking Dini.

</details>

<details><summary>Hint 2</summary>

Its discontinuity at one violates a separate hypothesis even though monotonicity and compactness hold.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E016 — Solution

The sequence decreases pointwise, and the domain is compact, but the pointwise limit is discontinuous at 1. The continuous-limit hypothesis fails, and convergence is indeed not uniform.

</details>

### ANA-CH09-E017 — Exercise 17: Preserve a common modulus under limits

Suppose \(f_n\to f\) pointwise and every \(f_n\) satisfies \(|f_n(x)-f_n(y)|\le ω(d(x,y))\). Prove \(f\) satisfies the same bound.

<details><summary>Hint 1</summary>

Fix the two input points before passing to the limit.

</details>

<details><summary>Hint 2</summary>

Both scalar endpoint values converge, while the proposed modulus bound remains fixed.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E017 — Solution

Fix \(x,y\) and pass to the limit in the scalar inequality. Since both endpoint values converge, \(|f_n(x)-f_n(y)|\to |f(x)-f(y)|\), while the right side is fixed. Thus \(|f(x)-f(y)|\le ω(d(x,y))\).

</details>

### ANA-CH09-E018 — Exercise 18: Whole-sequence convergence from uniqueness

Suppose every subsequence of \((f_n)\) has a further subsequence converging uniformly to the same \(f\). Prove \(f_n\to f\) uniformly.

<details><summary>Hint 1</summary>

Assume uniform convergence of the whole sequence fails.

</details>

<details><summary>Hint 2</summary>

Extract a subsequence staying a fixed norm distance from f, then apply the asserted further-subsequence property.

</details>

<details><summary>Solution</summary>

#### ANA-CH09-E018 — Solution

If not, some \(\varepsilon>0\) and a subsequence satisfy \(\lVert f_{n_k}-f\rVert_\infty\ge \varepsilon\) for all \(k\). By hypothesis this subsequence has a further subsequence converging uniformly to \(f\), eventually making the norm difference below \(\varepsilon\), a contradiction.

</details>

## ANA-CH09-I001 — Investigation: compactness as an existence engine

Construct or select a sequence of approximate functions on \([0,1]\). Prove a shared height bound and a shared modulus of continuity, extract a uniformly convergent subsequence by Arzelà–Ascoli, and identify a limit equation that survives uniform convergence. Then audit uniqueness: either prove it by a separate estimate and upgrade to whole-sequence convergence, or exhibit two possible subsequential limits. Record exactly which conclusion comes from compactness and which comes from uniqueness.

## Chapter synthesis

Uniform boundedness controls where function values can live; equicontinuity controls how quickly they can move. Compactness of the domain compresses those controls to finite information, and completeness turns uniform Cauchy behavior into a continuous limit. Arzelà–Ascoli packages the chain into a subsequence theorem.

Whenever a family of approximations appears, ask for estimates that are independent of the index. Individual continuity and individual bounds are not enough. Shared constants and shared moduli are the currency that buys compactness.

## Summary

The uniform norm makes continuous functions on a compact domain a complete metric space. Uniform height bounds and a shared modulus of continuity give compact closure through Arzela–Ascoli; neither condition by itself is enough. Finite domain nets convert pointwise information into uniform control. Dini adds another route when pointwise convergence is monotone and its limit is continuous. Compactness first gives subsequences, while uniqueness requires a separate argument.
