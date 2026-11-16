
# Why Hahn–Banach and Baire matter

Two recurring questions in functional analysis are whether enough continuous measurements exist, and whether separate bounds can be replaced by one bound for an entire family. Hahn–Banach answers an extension question that supplies measurements. Baire's theorem supplies an interior region from which linearity can turn pointwise bounds into a uniform operator bound. Their assumptions are different, and keeping their roles separate prevents a common misuse of completeness.

This **Year 4 / Master's (L4)** article assumes normed spaces, [bounded linear maps](#/books/functional-analysis/bounded-operators-duals) and the [complete-metric Baire theorem](#/books/topology-proof-counterexample/complete-metric-spaces-baire-category). [Normed spaces and completeness](#/articles/functional-analysis-normed-spaces-completeness) introduces the sequence-space example used below. We work over the real numbers. The full [Hahn–Banach chapter](#/books/functional-analysis/hahn-banach) proves extension; here extension and Baire are named inputs whose useful consequences we derive.

## Extension supplies measurements that see vectors

A bounded linear functional on a normed space $X$ is a linear map $\phi:X\to\mathbb R$ for which some finite $C$ satisfies $|\phi(x)|\le C\|x\|$ for all $x$. Its norm is $\|\phi\|=\sup_{\|x\|\le1}|\phi(x)|$.

**Hahn–Banach extension theorem, normed-space form.** A bounded linear functional on any linear subspace $M$ of a real normed space $X$ extends to a bounded linear functional on $X$ with the same norm.

Neither completeness of $X$ nor closedness of $M$ is required. This is an existence theorem, not a promise of a numerical algorithm for an arbitrary extension. Its one-new-direction construction and choice principle are developed in the linked chapter.

Here is a concrete consequence. Fix $x\ne0$ and define a functional on its one-dimensional span by $f(tx)=t\|x\|$. It has norm one: $|f(tx)|=\|tx\|$, so the upper bound is attained on $x/\|x\|$. Extend it by Hahn–Banach to a functional $\phi$ on $X$ of norm one. Then $\phi(x)=\|x\|$.

Thus no nonzero vector is invisible to all bounded linear functionals. More precisely,

$$\|x\|=\sup_{\|\phi\|\le1}|\phi(x)|.$$

The upper bound follows from the definition of functional norm. The constructed functional attains the lower bound for $x\ne0$; at zero every functional vanishes. This turns an extension theorem into an exact statement that scalar measurements recover vector size.

## Baire changes the order of quantifiers

For a bounded linear operator $T:X\to Y$ between normed spaces, define $\|T\|=\sup_{\|x\|\le1}\|Tx\|$. Consider a family $\mathcal F$ of such operators. **Pointwise boundedness** means

$$\text{for each }x\in X,\quad \sup_{T\in\mathcal F}\|Tx\|<\infty.$$

The finite bound may depend on $x$. A uniform operator bound instead says that a single finite $C$ works in $\|Tx\|\le C\|x\|$ for every $T$ and every $x$. The latter does not follow merely by swapping the words “for each” and “there exists”.

**Uniform boundedness theorem.** If $X$ is Banach, $Y$ is normed, and $\mathcal F$ is a pointwise bounded family of bounded linear operators from $X$ to $Y$, then $\sup_{T\in\mathcal F}\|T\|<\infty$. Completeness of $Y$ is unnecessary.

To derive this from Baire, put

$$E_n=\{x:\|Tx\|\le n\text{ for every }T\in\mathcal F\},\qquad n=1,2,\ldots.$$

Every $E_n$ is closed, because each operator is continuous and arbitrary intersections of closed sets are closed. Pointwise boundedness implies $X=\bigcup_nE_n$. Baire's theorem, applied to complete $X$, gives one $E_n$ with nonempty interior. Thus some open ball $B(x_0,r)$ lies in it, with $r>0$.

For $\|u\|\le1$, both $x_0$ and $x_0+(r/2)u$ belong to this ball. For every $T\in\mathcal F$, linearity and the triangle inequality give

$$\frac r2\|Tu\|=\|T(x_0+(r/2)u)-Tx_0\|\le2n.$$

Therefore $\|T\|\le4n/r$ for every member of the family. This proves the uniform bound. If the family is empty, its uniform control is immediate and the argument is unnecessary.

Closedness came from continuity, the interior ball from completeness through Baire, and the global estimate from linearity. The theorem identifies existence of a bound; a direct calculation may produce a sharper numerical constant.

## Worked example: what incomplete input spaces can hide

Let $X=c_{00}$, the finitely supported real sequences with supremum norm, and define $T_n(x)=nx_n$. Each $T_n$ is linear and bounded. Since $|x_n|\le\|x\|_\infty$, its norm is at most $n$. Testing the unit vector $e_n$ gives $|T_n(e_n)|=n$, so its norm is exactly $n$.

Nevertheless the family is pointwise bounded on $X$. For any fixed finitely supported $x$, the outputs $T_n(x)$ are zero beyond its last nonzero coordinate. The remaining finitely many values have a finite maximum. Thus every fixed input has a bound, while the operator norms grow without bound.

There is no contradiction: $c_{00}$ with this norm is incomplete. The finite truncations of $(1,1/2,1/3,\ldots)$ are Cauchy but have no finitely supported limit, as proved in the opening article. Completeness is the missing hypothesis in uniform boundedness, not a technical condition that may be discarded because individual operators are continuous.

The norming-functional consequence of Hahn–Banach still applies on this incomplete space. The two theorems perform different jobs: the existence of enough scalar functionals does not make every pointwise bounded family uniformly bounded.

## Why these principles recur

Hahn–Banach lets a measurement defined on a subspace extend without increasing its norm. This makes it useful for detecting vectors and separating points from closed linear constraints. Baire supports several Banach-space principles, including uniform boundedness, open mapping and closed graph results. Those later conclusions require their own hypotheses and proofs; they are not alternative names for one theorem.

For an application, ask which missing step is present. Do you need one scalar functional with prescribed behaviour? An extension theorem may supply it. Do you need to turn bounds depending on each vector into one family-wide linear estimate? Check the completeness and continuity hypotheses of uniform boundedness. Naming the missing step is more reliable than appealing vaguely to “infinite-dimensional geometry”.

## Exercises

### Exercise 1
<a id="deep-dive-functional-analysis-hahn-banach-baire-ex-1"></a>
On $\mathbb R^2$ with Euclidean norm, show that $\phi(a,b)=(3a+4b)/5$ has norm one and that $\phi(3,4)=\|(3,4)\|$. Explain how this illustrates norm detection.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Apply Cauchy–Schwarz to the dot product with $(3,4)$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
An upper bound for the functional norm is not enough; find a unit vector where it is attained.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Cauchy–Schwarz gives $|3a+4b|\le5\sqrt{a^2+b^2}$, so $|\phi(a,b)|\le\|(a,b)\|$ and $\|\phi\|\le1$. At the unit vector $(3/5,4/5)$ the value is one, so the norm equals one. Also $\phi(3,4)=25/5=5=\|(3,4)\|$. A norm-one scalar functional therefore records the entire norm of this nonzero vector, as guaranteed abstractly by the extension argument.
</details>

### Exercise 2
<a id="deep-dive-functional-analysis-hahn-banach-baire-ex-2"></a>
On the incomplete space $c_{00}$ with supremum norm, consider instead $S_n(x)=x_n$. Find the operator norms and a pointwise bound. Does incompleteness force every pointwise bounded family to have unbounded norms?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare a single coordinate with the supremum norm, then test a unit coordinate vector.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A hypothesis needed for a general guarantee need not be necessary for every particular family to satisfy the conclusion.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For all $n$, $|S_nx|\le\|x\|_\infty$, and testing $e_n$ gives equality. Thus $\|S_n\|=1$ for every $n$ and $\sup_n|S_nx|\le\|x\|_\infty$. This family is uniformly bounded despite the incomplete domain. Incompleteness permits failures such as the worked example; it does not require every family to fail. The Banach hypothesis guarantees the conclusion for every family meeting the other assumptions.
</details>

## Continue into the book

Extension supplies enough scalar measurements; Baire and completeness upgrade pointwise information to a shared bound for linear operators. Continue to [Hahn–Banach](#/books/functional-analysis/hahn-banach), [Uniform Boundedness](#/books/functional-analysis/uniform-boundedness) and [Open Mapping and Closed Graph](#/books/functional-analysis/open-mapping-closed-graph) for the full route and further applications.
