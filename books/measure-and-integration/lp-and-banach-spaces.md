
# Lp Spaces, Norms, and Completeness

This chapter has moved from Real Analysis into the Measure and Integration primary with all original mathematical sections, exercise identities, hints, solutions and its project or investigation preserved. Its preparation is [The Lebesgue Integral](lebesgue-integral.md) and [the convergence theorems](measure-convergence-theorems.md).

Uniform convergence measures worst-case error. Lebesgue integration supports a family of average-error geometries. For \(1\le p<\infty\), the \(L^p\) norm is

\(\lVert f\rVert_p=(\int |f|^p)^{1/p}\),

while

\(\lVert f\rVert_\infty=\operatorname{ess\,sup} |f|\).

These spaces are large enough for discontinuous and weakly defined objects, yet complete enough for approximation sequences to have limits. At \(p=2\), the norm comes from an inner product, adding orthogonality and projection.

This chapter has three intertwined goals. First, it builds the inequalities that make these formulas into usable geometries. Second, it proves that Cauchy approximation processes do not leave the space. Third, it states honestly which density and duality conclusions depend on the underlying measure space. Unless a statement says otherwise, functions are real-valued and \((X,\Sigma,\mu)\) is a measure space. Complex-valued functions require conjugation in the inner product but no change to the norm arguments.

### A hypothesis ledger

Some results below hold on every measure space, while others need additional structure.

- Hölder, Minkowski, and completeness hold without assuming that \(\mu(X)\) is
  finite. For \(1\le p<\infty\), integrable simple functions are dense in \(L^p\) without
  a finite-total-measure assumption.
- The inclusion \(L^q\subseteq L^p\) for \(q>p\) needs \(\mu(X)<\infty\).
- The familiar representation \((L^p)*=L^q\) is safe here under sigma-finiteness for \(1\le p<\infty\). More general measure spaces require qualifications such as semifiniteness or localizability.
- Approximation by continuous compactly supported functions is a statement about spaces such as \(R^d\) with regular Borel measure, not about arbitrary measure spaces.

Keeping this ledger visible prevents a common functional-analysis mistake: silently importing topological or finiteness assumptions that were never given.

## 1. Functions equal almost everywhere are one point

If \(\lVert f-g\rVert_p=0\), then \(f=g\) almost everywhere, not necessarily everywhere. To obtain a genuine normed space, \(L^p\) consists of equivalence classes of measurable functions under almost-everywhere equality.

This quotient has a practical consequence on spaces where the point in question
is null, such as Lebesgue measure: point values are not intrinsic. Two
representatives of the same \(L^p\) element may differ at zero or on a dense null
set. On a space with positive-measure atoms, changing a value at an atom can
change the \(L^p\) class. Statements about continuity or boundary values require
a selected representative and extra regularity.

Algebra and order descend to the quotient. If \(f=f'\) almost everywhere and \(g=g'\) almost everywhere, then \(af+bg=af'+bg'\) almost everywhere. Likewise, \(|f|\), \(\max(f,g)\), and integrals are independent of the chosen representative. When \(\mu(\{x_0\})=0\), point evaluation does not descend: the proposed map \([f]\mapsto f(x_0)\) changes when a representative is altered at \(x_0\).

For \(p=\infty\), the **essential supremum** is

\(\operatorname{ess\,sup} |f|=\inf\{M\ge 0:|f|\le M \text{ almost everywhere}\}\).

An unbounded value on a null set does not change this norm.

The word *essential* can be tested through level sets:

\(\lVert f\rVert_\infty\le M\) if and only if \(\mu(\{x:|f(x)|>M\})=0\).

Thus \(\lVert f\rVert_\infty\) is the smallest almost-everywhere bound. It need not be a value attained by \(|f|\).

## 2. Young's inequality

Let \(1<p,q<\infty\) satisfy

\(1/p+1/q=1\).

Then for \(a,b\ge 0\),

\(ab\le a^p/p+b^q/q\).

One proof uses convexity of the exponential or the concavity of the logarithm. Equality holds exactly when \(a^p=b^q\).

A direct proof makes the equality condition transparent. The convex function \(\varphi(t)=t^p/p\) has derivative \(\varphi'(t)=t^{p-1}\). Its tangent-line inequality at \(t=a\) gives Young's inequality after the conjugate-power substitution. Scaling gives the flexible form, valid for every \(\varepsilon>0\),

\(ab\le \varepsilon a^p/p+\varepsilon^{-q/p}b^q/q\).

This adjustable version is often used to absorb one term into the left side of an estimate.

Young's inequality converts a product into a sum of integrable powers. It is the scalar engine behind Hölder's inequality.

## 3. Hölder's inequality

For conjugate exponents \(p,q\),

\(\int |fg|\le \lVert f\rVert_p\lVert g\rVert_q\).

For \(f\in L^p\) and \(g\in L^q\), both norms are finite. If either norm is zero, the
corresponding function is zero almost everywhere and the claim is immediate.
Otherwise normalize:

\(F=|f|/\lVert f\rVert_p\), \(G=|g|/\lVert g\rVert_q\).

Young gives

\(FG\le F^p/p+G^q/q\).

Integrating yields \(\int FG\le 1\), and rescaling proves Hölder.

For \(p=q=2\), this is Cauchy–Schwarz:

\(|\int fg|\le \lVert f\rVert_2\lVert g\rVert_2\).

Hölder shows that pairing an \(L^p\) function with an \(L^q\) function produces an absolutely integrable product.

The endpoint forms are part of the theorem. If \(p=1\) and \(q=\infty\), then

\(\int |fg|\le \lVert g\rVert_\infty\int |f|=\lVert f\rVert_1\lVert g\rVert_\infty\).

The symmetric case is identical. On a finite-measure space, taking \(g=1\) recovers \(\lVert f\rVert_1\le \mu(X)^{1-1/p}\lVert f\rVert_p\).

For nonzero finite norms and \(1<p,q<\infty\), equality requires equality in Young almost everywhere after normalization. Equivalently, \(|f|^p\) and \(|g|^q\) are proportional almost everywhere, with compatible signs if the absolute value is removed from the integral.

## 4. Minkowski's inequality

For \(1\le p<\infty\),

\(\lVert f+g\rVert_p\le \lVert f\rVert_p+\lVert g\rVert_p\).

For \(p=1\), integrate \(|f+g|\le |f|+|g|\). For \(p>1\), write

\(|f+g|^p\le |f||f+g|^{p-1}+|g||f+g|^{p-1}\).

Apply Hölder to each term. Since \((p-1)q=p\),

\(\lVert |f+g|^{p-1}\rVert_q=\lVert f+g\rVert_p^{p-1}\).

Divide by this factor when nonzero. Minkowski is the triangle inequality that makes \(L^p\) a normed vector space.

There is a small logical detail in this proof. The use of Hölder presumes \(f+g\in L^p\); that already follows from the scalar bound

\(|f+g|^p\le 2^{p-1}(|f|^p+|g|^p)\).

Thus the displayed integrals are finite before division occurs. For \(p=\infty\), the triangle inequality follows by choosing almost-everywhere bounds for \(f\) and \(g\), adding them, and then taking infima.

For \(p<1\), the formula \((\int |f|^p)^{1/p}\) generally fails the triangle inequality, so it is not a norm.

## 5. Finite-measure inclusions

If \(\mu(X)<\infty\) and \(1\le p<q\le \infty\), then

\[L^q(X)\subseteq L^p(X)\]

and

\(\lVert f\rVert_p\le \mu(X)^{1/p-1/q}\lVert f\rVert_q\).

For finite \(q\), apply Hölder to \(|f|^p\cdot 1\) with exponents \(q/p\) and \(q/(q-p)\). For \(q=\infty\), use \(|f|\le \lVert f\rVert_\infty\) almost everywhere.

The finite-measure hypothesis is essential. On \(R\), neither inclusion generally holds. Tail behavior and local singularities can be tuned separately.

The two failures have different sources. At infinity, slow decay can place a function in a larger-exponent space but not a smaller-exponent space. Near zero, a power singularity can belong to the smaller-exponent space but fail to belong to the larger one. A reliable inclusion argument must identify whether it uses finite total measure, finite support, or an independent essential bound.

On a measurable set \(E\) of finite measure, the localized inequality

\[\lVert f\,1_E\rVert_p\le \mu(E)^{1/p-1/q}\lVert f\,1_E\rVert_q\]

remains useful even when \(X\) has infinite measure.

## 6. Testing power singularities and tails

Throughout this section, \(1\le p<\infty\). On \((0,1)\), let \(f(x)=x^{-\alpha}\). Then

\(f\in L^p(0,1)\) exactly when \(\alpha p<1\).

Indeed, \(\int _0^1x^{-\alpha p}dx\) converges exactly at that threshold.

On \((1,\infty)\), the same function belongs to \(L^p\) exactly when \(\alpha p>1\).

Near zero, smaller exponents are easier to integrate; at infinity, larger decay exponents are needed. A whole-domain audit must check every singular point and every tail.

### Worked audit: two competing defects

**Worked Example 19.1 (Singularity and tail thresholds).**

Consider \(f(x)=x^{-\alpha}(1+x)^{-\beta}\) on \((0,\infty)\). Near zero, \((1+x)^{-\beta}\) stays comparable to \(1\), so local integrability of \(|f|^p\) requires \(\alpha p<1\). At infinity, \(f(x)\) is comparable to \(x^{-\alpha-\beta}\), so tail integrability requires \((\alpha+\beta)p>1\). Both strict inequalities are necessary and sufficient. At equality the relevant comparison is \(\int dx/x\), so the boundary diverges. This two-region procedure is more dependable than manipulating a global antiderivative.

## 7. Completeness: the Riesz–Fischer theorem

**Theorem 7.1.** \(L^p\) is complete for every \(1\le p\le \infty\). Thus it is a Banach space.

For \(p<\infty\), take an \(L^p\)-Cauchy sequence \((f_n)\). Select a subsequence \((f_{n_k})\) satisfying

\(\lVert f_{n_{k+1}}-f_{n_k}\rVert_p\le 2^{-k}\).

Let

\(g_k=|f_{n_{k+1}}-f_{n_k}|\) and \(G=\sum g_k\).

Minkowski and monotone convergence give

\(\lVert G\rVert_p\le \sum\lVert g_k\rVert_p\le 1\),

so \(G<\infty\) almost everywhere. Therefore the telescoping series of function differences converges absolutely almost everywhere; define its pointwise limit \(f\).

Here is the justification hidden in the infinite sum. For \(G_N=\sum_{k=1}^N g_k\), finite Minkowski gives \(\lVert G_N\rVert_p\le 1\). Since \(G_N\uparrow G\), monotone convergence applied to \(G_N^p\) yields

\(\int G^p=\lim_N\int G_N^p\le 1\).

Therefore \(G\in L^p\), so it is finite outside a null set. Choose representatives of the countably many subsequence terms and define, off that null set,

\(f=f_{n_1}+\sum_{k=1}^\infty(f_{n_{k+1}}-f_{n_k})\).

Set \(f=0\) on the exceptional set. The measurable partial sums converge pointwise, so \(f\) is measurable.

The tail is bounded by \(\sum_{k\ge m}g_k\), whose \(L^p\) norm is at most \(\sum_{k\ge m}2^{-k}\). Hence the selected subsequence converges to \(f\) in \(L^p\). Since the original sequence is Cauchy, the whole sequence converges to the same \(f\) in norm.

The final passage uses a three-term argument. Given \(\varepsilon>0\), first use
the Cauchy property to choose \(N_0\) so indices at least \(N_0\) are within
\(\varepsilon/2\). Then choose \(m\) with \(n_m\ge N_0\) and
\(\lVert f_{n_m}-f\rVert_p<\varepsilon/2\). For every \(n\ge N_0\), Minkowski gives
\(\lVert f_n-f\rVert_p\le \lVert f_n-f_{n_m}\rVert_p+
\lVert f_{n_m}-f\rVert_p<\varepsilon\). This also confirms that the constructed
limit belongs to \(L^p\), since it differs in \(L^p\) from the known element
\(f_{n_m}\).

For \(p=\infty\), choose a subsequence with \(\lVert f_{n_{k+1}}-f_{n_k}\rVert_\infty\le 2^{-k}\). For each \(k\), discard a null set outside which the corresponding pointwise difference is at most \(2^{-k}\). The union of these exceptional sets is still null. Off it, the telescoping series converges uniformly by comparison with \(\sum2^{-k}\), producing an essentially bounded measurable limit. The same Cauchy argument brings back the full sequence. This proof explains why one cannot choose a new exceptional set separately for uncountably many comparisons: the countable subsequence is essential.

### Why completeness matters

A normed space is useful for approximation only if every norm-Cauchy process has a limit inside it. Partial Fourier sums, numerical approximants, and variational minimizing sequences are commonly shown Cauchy before their limit has a pointwise formula. Completeness turns such estimates into existence statements. A closed linear subspace of \(L^p\) is complete in the inherited norm; conversely, a complete linear subspace of a normed space must be closed. Thus symmetry or boundary constraints should usually be encoded as closed subspaces when one wants limiting arguments to preserve them.

## 8. \(L^p\) convergence and subsequences

For \(1\le p<\infty\), norm convergence does not necessarily imply pointwise convergence of the whole sequence. It does imply convergence in measure, and one can extract a subsequence converging almost everywhere.

To construct it, choose a subsequence with

\(\sum\lVert f_{n_k}-f\rVert_p^p<\infty\).

Markov's inequality and Borel–Cantelli show that for each rational \(\varepsilon>0\), only finitely many deviations exceed \(\varepsilon\) at almost every point. Hence the subsequence converges pointwise almost everywhere.

Conversely, almost-everywhere convergence does not imply \(L^p\) convergence without domination or uniform integrability.

For example, \(f_n=n^{1/p}\,1_{(0,1/n)}\) converges to zero almost everywhere on \((0,1)\) but has \(\lVert f_n\rVert_p=1\) for every \(n\). Its mass concentrates into a shrinking set. Conversely, norm convergence need not force the whole sequence to converge pointwise: one may enumerate the indicators of all dyadic intervals level by level. Their measures tend to zero, so their finite \(L^p\) norms tend to zero, while each point outside the dyadic endpoints belongs to one interval at every level and hence sees infinitely many values equal to \(1\).

If \(\lVert f_n-f\rVert_\infty\to 0\), the situation is stronger. After modifying representatives on one countable union of null sets, convergence is uniform. This is the essential-uniform analogue of ordinary uniform convergence.

## 9. \(L^2\) is a Hilbert space

Define

\[\langle f,g\rangle =\int f g\]

for real-valued \(L^2\) functions. Cauchy–Schwarz makes this finite, and

\(\lVert f\rVert_2^2=\langle f,f\rangle \).

Completeness of \(L^2\) makes it a Hilbert space. Orthogonality means \(\langle f,g\rangle =0\). The Pythagorean identity follows:

\[\lVert f+g\rVert_2^2=\lVert f\rVert_2^2+\lVert g\rVert_2^2\]

when \(f\perp g\).

If \(V\) is a closed linear subspace of a Hilbert space, every \(f\) has a unique closest point \(P_Vf\in V\), characterized by

\(f-P_Vf\perp V\).

Least squares and Fourier coefficients are instances of orthogonal projection.

For complex-valued functions, the conventional inner product is

\(\langle f,g\rangle =\int f \overline{g}\),

linear in one variable and conjugate-linear in the other according to convention. Orthogonality and projection remain unchanged. On a measure space containing two disjoint sets of positive finite measure, no inner product produces the \(L^p\) norm when \(p\ne 2\); indicator functions on those sets violate the parallelogram identity. A one-dimensional \(L^p\) space is an elementary exception. This is why orthogonal projection is special to the quadratic exponent in general function spaces even though best-approximation questions make sense in other \(L^p\) spaces.

## 10. Equality cases carry structure

Equality in Cauchy–Schwarz holds exactly when \(f\) and \(g\) are linearly dependent almost everywhere, excluding zero cases. Equality in Minkowski for \(1<p<\infty\) similarly requires compatible proportionality and sign.

These are not decorative refinements. In variational problems, an equality condition often identifies every optimizer. In probability, equality in Cauchy–Schwarz diagnoses perfect linear dependence.

## 11. Duality, with the endpoint caveats exposed

If \(1\le p<\infty\), \(q\) is conjugate to \(p\), and \(g\in L^q\), then

\[T_g(f)=\int fg\]

defines a bounded linear functional on \(L^p\), with

\(|T_g(f)|\le \lVert g\rVert_q\lVert f\rVert_p\).

For \(1<p<\infty\), in fact \(\lVert T_g\rVert=\lVert g\rVert_q\). For nonzero \(g\), test against

\(f=\operatorname{sign}(g)|g|^{q-1}/\lVert g\rVert_q^{q/p}\).

The exponent identities \((q-1)p=q\) and \(q-q/p=1\) give \(\lVert f\rVert_p=1\) and \(T_g(f)=\lVert g\rVert_q\). If \(p=1\) and the space is sigma-finite, indicators of finite-measure subsets where \(|g|\) is close to its essential supremum, with the appropriate sign, show \(\lVert T_g\rVert=\lVert g\rVert_\infty\); an exact maximizing function need not exist. On a pathological non-semifinite space, even this endpoint norm identity needs qualification.

**Representation theorem in the setting used here.** If the measure space is sigma-finite and \(1\le p<\infty\), every bounded linear functional \(T\) on \(L^p\) has the form \(T=T_g\) for a unique \(g\in L^q\), modulo almost-everywhere equality, and \(\lVert T\rVert=\lVert g\rVert_q\).

For finite measure, the proof starts by defining a signed measure \(\nu(E)=T(1_E)\). Boundedness gives countable additivity and \(\nu≪\mu\); Radon–Nikodym produces a density \(g\). One first obtains \(T(f)=\int fg\) for simple \(f\), then uses their density. For \(1<p<\infty\), testing with truncated versions of \(\operatorname{sign}(g)|g|^{q-1}\) proves \(g\in L^q\) and the norm identity. For \(p=1\), sign indicators of the sets \(\{|g|>\lVert T\rVert+\varepsilon\}\) show those sets are null, hence \(g\in L^\infty\) with the required norm bound. Sigma-finite spaces are handled by an increasing exhaustion by finite-measure sets and consistency of the local densities. This proof outline identifies exactly where measure theory enters.

Two endpoints must not be merged:

- \((L^1)*\) is represented by \(L^\infty\) in the sigma-finite setting.
- Each \(g\in L^1\) represents a bounded functional on \(L^\infty\), but generally not every element of \((L^\infty)*\) arises this way. The full dual contains finitely additive phenomena invisible to ordinary integration.

On measure spaces lacking suitable structural hypotheses, even representation
of \((L^p)*\) can require qualifications. Accordingly, the safe slogan is not
“the dual is always \(L^q\),” but “Hölder maps \(L^q\) contractively into
\((L^p)*\); in the sigma-finite setting this map is isometric and onto for
finite \(p\).” The conjugate exponent is the natural space of integral
measurements, but the ambient measure space controls whether those are all
measurements.

## 12. Interpolation between norms

If \(f\in L^p\cap L^q\) and

\(1/r=\theta/p+(1-\theta)/q\), \(0\le \theta\le 1\),

then

\(\lVert f\rVert_r\le \lVert f\rVert_p^\theta\lVert f\rVert_q^{1-\theta}\).

Write \(|f|^r=|f|^{\theta r}|f|^{(1-\theta)r}\) and apply Hölder with exponents chosen so the two powers integrate to \(p\) and \(q\). This log-convexity lets estimates at two endpoints control every intermediate exponent.

For the proof, suppose first that \(p<r<q\). Set \(a=p/(\theta r)\) and \(b=q/((1-\theta)r)\). The defining relation for \(r\) says \(1/a+1/b=1\). Hölder applied to the two displayed factors yields the result. Endpoint values of \(\theta\) are identities, and cases involving \(q=\infty\) follow from \(|f|^r\le \lVert f\rVert_\infty^{(1-\theta)r}|f|^{\theta r}\) with \(\theta r=p\).

Interpolation is not itself an inclusion theorem on infinite spaces: it begins with the hypothesis \(f\in L^p\cap L^q\). It fills gaps between two known estimates for the same function.

## 13. Density: a proof ladder

For \(1\le p<\infty\), integrable simple functions are dense in \(L^p\). Here is a proof that records each approximation.

1. **Remove large values.** Set \(f^{M}=\max(-M,\min(f,M))\) for real \(f\). Then \(|f-f^{M}|^p\le |f|^p 1_{\{|f|>M\}}\), so dominated convergence sends the error to zero.
2. **Remove the region where values are tiny.** For bounded \(f\), set \(f_{M,m}=f^{M}\,1_{\{|f|>1/m\}}\). The discarded error is bounded by \(|f|^p\) and tends pointwise to zero. Moreover, \(\{|f|>1/m\}\) has finite measure because \(m^{-p}\mu(\{|f|>1/m\})\le \lVert f\rVert_p^p\).
3. **Quantize the range.** Divide \([-M,M]\) into intervals of width \(\delta\) and replace \(f_{M,m}\) by one endpoint on each inverse image. The result is a simple function \(s\) supported on a finite-measure set, and \(|f_{M,m}-s|\le \delta\) there. Hence \(\lVert f_{M,m}-s\rVert_p\le \delta \mu(\text{support})^{1/p}\).

Choosing the three parameters successively proves density. Notice that sigma-finiteness of the whole space was not needed: integrability itself supplied finite-measure level sets.

On \(R^d\), there is a second ladder. Indicators of finite-measure measurable sets are approximated in \(L^p\) by indicators of bounded sets. Regularity of Lebesgue measure sandwiches such a bounded set between a compact \(K\) and open \(U\) with small \(\mu(U\setminus K)\), and a continuous cutoff \(\varphi\) satisfying \(1_K\le \varphi\le 1_U\) has small \(L^p\) error. Linear combinations show that \(C_c(R^d)\) is dense in \(L^p(R^d)\) for \(p<\infty\). Mollification can then approximate a continuous compactly supported function by a smooth compactly supported one, giving density of \(C_c^\infty(R^d)\).

The finite-exponent restriction matters. Simple functions are dense in \(L^\infty\): quantizing the bounded range gives essential-uniform error at most \(\delta\). But \(C_c(R^d)\) is not dense in \(L^\infty(R^d)\); the constant function \(1\) stays essential-supremum distance at least \(1\) from every compactly supported function. Even on a bounded interval, a discontinuous step function cannot be uniformly approximated arbitrarily closely by continuous functions across its jump.

Density is always density in a named norm. It does not promise pointwise convergence, preservation of boundary values, or approximation by a subclass incompatible with that norm.

### Separability and the exceptional supremum norm

On \(R^d\), \(L^p\) is separable for \(1\le p<\infty\): step functions on rational boxes with rational coefficients form a countable dense family. In contrast, \(L^\infty(0,1)\) is not separable. For each \(t\in (0,1)\), the indicator \(1_{(0,t)}\) is at essential-supremum distance \(1\) from \(1_{(0,s)}\) whenever \(s\ne t\). An uncountable family with pairwise distance \(1\) cannot fit inside a separable metric space. This difference is one reason finite-exponent approximation theory behaves more gently than the \(\infty\) endpoint.

### Bounded operators extend from dense sets

Suppose \(D\) is dense in a normed space \(E\), \(F\) is Banach, and a linear map \(T:D\to F\) satisfies \(\lVert Tf\rVert_F\le C\lVert f\rVert_E\). Given \(f\in E\), choose \(f_n\in D\) converging to \(f\). The estimate makes \((Tf_n)\) Cauchy, so it converges in \(F\); the limit is independent of the chosen approximating sequence. This produces a unique bounded extension to all of \(E\). In analysis one can therefore define an operator first on simple or smooth functions, prove a norm estimate, and use completeness plus density to extend it. The norm estimate, not a pointwise formula, is the bridge.

## 14. Misconceptions and boundaries

- **\(L^p\) elements have well-defined point values.** They are equivalence classes modulo null sets.
- **A larger \(p\) always means a smaller space.** That inclusion requires finite measure; it fails generally on infinite spaces.
- **\(L^p\) convergence is pointwise convergence.** Only subsequential almost-everywhere convergence is guaranteed.
- **\(p<1\) gives another Banach norm.** The triangle inequality fails.
- **Bounded in \(L^p\) means pointwise bounded.** Norm mass can concentrate on small sets.
- **Every bounded functional on \(L^\infty\) is integration against an \(L^1\) function.** The full dual is larger.
- **Dense approximation preserves every property.** Norm approximation may ignore point values and fine discontinuities.


## Additional worked applications

**Worked Example 19.2 (Norms on a two-atom space).** Give a space two atoms of measures one and three. Let $f$ take values two and minus one on them. Then $\|f\|_1=2+3=5$, $\|f\|_2=\sqrt{4+3}=\sqrt7$, and $\|f\|_\infty=2$. Both atoms have positive measure, so neither value can be discarded as a null exception. The finite-measure estimate $\|f\|_1\le\sqrt{\mu(X)}\|f\|_2$ becomes $5\le2\sqrt7$, which is true. It would be wrong to use a probability-space comparison without normalizing the total measure four.

**Worked Example 19.3 (The best constant on that space).** For the same $f$, the squared error from a constant $c$ is
$$\|f-c\|_2^2=(2-c)^2+3(-1-c)^2=4(c+1/4)^2+27/4.$$
The unique minimizing constant is therefore $-1/4$, equal to the weighted mean $(2\cdot1-1\cdot3)/4$. The minimum squared error is $27/4$. Using the ordinary unweighted average of the two displayed values would give a different number and ignore the unequal atom measures. The calculation is a concrete orthogonal-projection problem with the measure included in the inner product.


## Exercises with complete solutions

### ANA-CH19-E001 — Exercise 1: Null changes

Let \(f=0\) except \(f(0)=10^9\). Under Lebesgue measure on \(R\), compute \(\lVert f\rVert_p\) for every finite \(p\) and \(p=\infty\).


<details>
<summary>Hint 1</summary>

Norms in these spaces ignore changes on null sets.

</details>
<details>
<summary>Hint 2</summary>

Essential supremum also disregards the exceptional singleton.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E001 — Solution

The function is zero almost everywhere. Thus every \(L^p\) norm, including the essential-supremum norm, is zero. It represents the zero element.


</details>

### ANA-CH19-E002 — Exercise 2: Indicator norms

If \(\mu(E)<\infty\), compute \(\lVert 1_E\rVert_p\).


<details>
<summary>Hint 1</summary>

For finite exponents, raising the indicator to that power leaves it unchanged.

</details>
<details>
<summary>Hint 2</summary>

For the infinite exponent, distinguish positive measure from a null support.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E002 — Solution

For finite \(p\), \(\lVert 1_E\rVert_p=(\int 1_E)^{1/p}=\mu(E)^{1/p}\). If \(\mu(E)>0\), \(\lVert 1_E\rVert_\infty=1\); if \(E\) is null, it is zero.


</details>

### ANA-CH19-E003 — Exercise 3: Conjugate exponent

Find the conjugate of \(p=3\).


<details>
<summary>Hint 1</summary>

Use the reciprocal-exponent equation.

</details>
<details>
<summary>Hint 2</summary>

Solve for the other reciprocal before taking its reciprocal.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E003 — Solution

Solve \(1/3+1/q=1\), giving \(1/q=2/3\) and \(q=3/2\).


</details>

### ANA-CH19-E004 — Exercise 4: Hölder estimate

If \(\lVert f\rVert_3=2\) and \(\lVert g\rVert_{3/2}=5\), bound \(\int |fg|\).


<details>
<summary>Hint 1</summary>

Check that the supplied exponents are conjugate.

</details>
<details>
<summary>Hint 2</summary>

Multiply the two given norms in Holder’s inequality.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E004 — Solution

Hölder gives \(\int |fg|\le 2\cdot 5=10\).


</details>

### ANA-CH19-E005 — Exercise 5: Cauchy–Schwarz average

Show \(|\int _0^1 f|\le \lVert f\rVert_2\).


<details>
<summary>Hint 1</summary>

Pair the function with the constant function one.

</details>
<details>
<summary>Hint 2</summary>

The latter has unit square-integral norm on this interval.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E005 — Solution

Apply Cauchy–Schwarz to \(f\) and the constant function 1. Its \(L^2\) norm on \([0,1]\) is 1, so \(|\int f\cdot 1|\le \lVert f\rVert_2\).


</details>

### ANA-CH19-E006 — Exercise 6: Finite-measure inclusion

On a set of measure 9, bound \(\lVert f\rVert_2\) by \(\lVert f\rVert_4\).


<details>
<summary>Hint 1</summary>

Apply the finite-measure inclusion estimate with larger exponent four and smaller exponent two.

</details>
<details>
<summary>Hint 2</summary>

The measure factor has exponent one half minus one quarter.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E006 — Solution

The inclusion formula gives \(\lVert f\rVert_2\le 9^{1/2-1/4}\lVert f\rVert_4=9^{1/4}\lVert f\rVert_4=\sqrt{3}\lVert f\rVert_4\).


</details>

### ANA-CH19-E007 — Exercise 7: Local singularity

For which finite \(p\ge 1\) is \(x^{-1/4}\) in \(L^p(0,1)\)?


<details>
<summary>Hint 1</summary>

Raise the singular function to the chosen power.

</details>
<details>
<summary>Hint 2</summary>

Compare its exponent at zero with the threshold one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E007 — Solution

The threshold is \(p/4<1\), so \(p<4\). It belongs for \(1\le p<4\) and not for \(p\ge 4\).


</details>

### ANA-CH19-E008 — Exercise 8: Tail decay

For which finite \(p\ge 1\) is \(1/x\) in \(L^p(1,\infty)\)?


<details>
<summary>Hint 1</summary>

Raise the tail function to the chosen power.

</details>
<details>
<summary>Hint 2</summary>

The integral of a negative power at infinity converges only when that power exceeds one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E008 — Solution

We need \(p>1\) for \(\int _1^\infty x^{-p}\) to converge. Thus membership holds exactly for \(p>1\).


</details>

### ANA-CH19-E009 — Exercise 9: Whole-line audit

For finite \(p\ge1\), is \(1/(1+|x|)\) in \(L^p(R)\)?


<details>
<summary>Hint 1</summary>

Separate a bounded neighbourhood of zero from the two tails.

</details>
<details>
<summary>Hint 2</summary>

At large magnitude the function is comparable to the reciprocal of the coordinate magnitude.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E009 — Solution

It is bounded near zero, so only tails matter. There it behaves like \(|x|^{-1}\), whose \(p\)th power is integrable exactly when \(p>1\). Thus it belongs precisely for \(p>1\).


</details>

### ANA-CH19-E010 — Exercise 10: Minkowski use

If \(\lVert f\rVert_p\le 3\) and \(\lVert g\rVert_p\le 4\), bound \(\lVert 2f-g\rVert_p\).


<details>
<summary>Hint 1</summary>

Combine homogeneity with the triangle inequality.

</details>
<details>
<summary>Hint 2</summary>

A minus sign does not change the norm of the second function.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E010 — Solution

Homogeneity and Minkowski give \(\lVert 2f-g\rVert_p\le 2\lVert f\rVert_p+\lVert g\rVert_p\le 10\).


</details>

### ANA-CH19-E011 — Exercise 11: Failure below one

Show the \(p=1/2\) formula fails the triangle inequality using disjoint unit-measure sets \(E,F\).


<details>
<summary>Hint 1</summary>

Use indicators of disjoint equal-measure sets.

</details>
<details>
<summary>Hint 2</summary>

Compute the quasi-norm of their union before comparing it with the sum of the two individual values.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E011 — Solution

Each indicator has quasi-norm \((\int 1)^2=1\). Their sum is 1 on a set of measure 2, so its quasi-norm is \((2)^2=4\), which exceeds \(1+1=2\).


</details>

### ANA-CH19-E012 — Exercise 12: \(L^p\) to measure

If \(1\le p<\infty\) and \(\lVert f_n-f\rVert_p\to 0\), prove convergence in measure.


<details>
<summary>Hint 1</summary>

Apply Markov to the error raised to the power p.

</details>
<details>
<summary>Hint 2</summary>

The error superlevel threshold becomes the tolerance raised to that same power.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E012 — Solution

Markov applied to \(|f_n-f|^p\) gives
\(\mu(|f_n-f|>\varepsilon)\le \varepsilon^{-p}\lVert f_n-f\rVert_p^p\to 0\).


</details>

### ANA-CH19-E013 — Exercise 13: Orthogonal Pythagoras

Prove the Pythagorean identity for \(f\perp g\) in \(L^2\).


<details>
<summary>Hint 1</summary>

Expand the square of the norm using the inner product.

</details>
<details>
<summary>Hint 2</summary>

Orthogonality removes the cross term in the real-valued setting of the chapter.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E013 — Solution

Expand
\(\lVert f+g\rVert_2^2=\langle f+g,f+g\rangle =\lVert f\rVert_2^2+2\langle f,g\rangle +\lVert g\rVert_2^2\).
The middle term is zero.


</details>

### ANA-CH19-E014 — Exercise 14: Best constant approximation

For \(f\in L^2(E)\) and \(0<\mu(E)<\infty\), find the constant \(c\) minimizing \(\lVert f-c\rVert_2\).


<details>
<summary>Hint 1</summary>

View constants as the one-dimensional span of the set’s indicator.

</details>
<details>
<summary>Hint 2</summary>

The minimizing error must have zero inner product with that indicator.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E014 — Solution

Constants form the span of \(1_E\). Orthogonal projection requires \(\langle f-c,1_E\rangle =0\), so \(\int _E f-c\mu(E)=0\). Hence \(c=(1/\mu(E))\int _E f\), the mean, assuming \(\mu(E)>0\).


</details>

### ANA-CH19-E015 — Exercise 15: Equality in Cauchy–Schwarz

When does equality hold for nonzero \(f,g\in L^2\)?


<details>
<summary>Hint 1</summary>

Subtract the optimal scalar multiple of one function from the other.

</details>
<details>
<summary>Hint 2</summary>

Its squared norm vanishes exactly in the equality case.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E015 — Solution

Equality holds exactly when \(f=cg\) almost everywhere for some scalar \(c\). This follows by choosing \(c=\langle f,g\rangle /\lVert g\rVert^2\) and expanding \(\lVert f-cg\rVert^2\).


</details>

### ANA-CH19-E016 — Exercise 16: A bounded functional

For \(g\in L^q\), show \(T_g(f)=\int fg\) is continuous on \(L^p\).


<details>
<summary>Hint 1</summary>

Use the integral pairing and conjugate exponents.

</details>
<details>
<summary>Hint 2</summary>

Holder bounds its output by a fixed constant times the input norm.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E016 — Solution

Hölder gives \(|T_g(f)|\le \lVert g\rVert_q\lVert f\rVert_p\). Thus the operator norm is at most \(\lVert g\rVert_q\), which is a continuity bound at zero and hence everywhere.


</details>

### ANA-CH19-E017 — Exercise 17: Interpolation example

If \(f\in L^1\cap L^\infty\), prove \(\lVert f\rVert_2\le \lVert f\rVert_1^{1/2}\lVert f\rVert_\infty^{1/2}\).


<details>
<summary>Hint 1</summary>

Bound one factor of the squared absolute value by the essential supremum.

</details>
<details>
<summary>Hint 2</summary>

Integrate the resulting inequality and take square roots.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E017 — Solution

Pointwise, \(|f|^2\le \lVert f\rVert_\infty|f|\). Integrate and take square roots: \(\lVert f\rVert_2^2\le \lVert f\rVert_\infty\lVert f\rVert_1\).


</details>

### ANA-CH19-E018 — Exercise 18: Completeness subsequence

For \(1\le p<\infty\), why does \(\sum\lVert g_k\rVert_p<\infty\) imply \(\sum|g_k|<\infty\) almost everywhere?


<details>
<summary>Hint 1</summary>

Apply Minkowski to finite sums of absolute values.

</details>
<details>
<summary>Hint 2</summary>

Monotone convergence passes the uniform finite norm bound to their increasing limit.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E018 — Solution

Minkowski for finite sums and monotone convergence give
\(\lVert\sum|g_k|\rVert_p\le \sum\lVert g_k\rVert_p<\infty\). A function with finite \(L^p\) norm is finite almost everywhere, so the absolute series is finite almost everywhere.


</details>

### ANA-CH19-E019 — Exercise 19: Dense truncation

For \(1\le p<\infty\) and \(f\in L^p\), show \(f_n=f\,1_{\{|f|\le n\}}\) converges to \(f\) in \(L^p\).


<details>
<summary>Hint 1</summary>

Write the error power as the original power restricted to the high-value tail.

</details>
<details>
<summary>Hint 2</summary>

It tends to zero almost everywhere and is dominated by the original integrable power.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E019 — Solution

The error power is \(|f|^p 1_{\{|f|>n\}}\), which decreases pointwise to zero and is dominated by the integrable \(|f|^p\). DCT gives \(\lVert f-f_n\rVert_p^p\to 0\).


</details>

### ANA-CH19-E020 — Exercise 20: Non-pointwise norm convergence

When \(\mu(\{x_0\})=0\), why does norm convergence not assign a canonical value to the limit at \(x_0\)?


<details>
<summary>Hint 1</summary>

Change a representative only at the declared null point.

</details>
<details>
<summary>Hint 2</summary>

Such a change leaves its equivalence class and every norm distance unchanged.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH19-E020 — Solution

Changing any term or the limit at the null point \(x_0\) does not alter its \(L^p\) class or norm distances. Point evaluation there therefore cannot be recovered continuously or even well-defined from equivalence classes without extra regularity. This conclusion does not apply at a positive-measure atom.


</details>

## ANA-CH19-P001 — Project: map an \(L^p\) phase diagram

Study \(f_{\alpha,\beta}(x)=x^{-\alpha}(1+x)^{-\beta}\) on \((0,\infty)\). For \(1\le p<\infty\), determine the region of triples \((\alpha,\beta,p)\) for which it lies in \(L^p\), separating behavior near zero from behavior at infinity. Treat \(p=\infty\) separately through essential boundedness. Choose boundary cases and prove divergence rather than relying on plots. Then numerically approximate selected norms with declared truncation of both the singular end and the tail, attaching analytical bounds to both discarded regions.

## Chapter synthesis

\(L^p\) spaces turn average size into geometry. Young produces Hölder, Hölder produces Minkowski, and Minkowski supports completeness. Finite-measure inclusions, singularity thresholds, and dual pairing explain how the exponent changes what behavior is visible.

The quotient by null equality is indispensable but changes the questions one may ask. Norm convergence controls integrated error, not point values. At \(p=2\), orthogonality adds a projection language that will organize Fourier approximation in the next stages of the book.

## Summary

Lp geometry identifies functions that agree almost everywhere and measures integrated size rather than selected point values. Young’s inequality leads to Holder, Holder to Minkowski, and summable increments to completeness. Exponent inclusions depend on domain measure, while singularities and tails impose different integrability thresholds. At exponent two, orthogonality selects best approximations; the retained Fourier chapter applies that structure to periodic modes. None of these equivalence-class statements supplies point evaluations at null points without additional regularity.
