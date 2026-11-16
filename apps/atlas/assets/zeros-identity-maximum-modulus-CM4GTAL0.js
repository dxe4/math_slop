var e=`---
parent_id: book-complex-analysis
chapter_id: zeros-identity-maximum-modulus
title: "Zeros, Identity, and Maximum Modulus"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Zeros, Identity, and Maximum Modulus

A holomorphic function cannot have a small cluster of accidental zeros inside its domain unless it vanishes everywhere. Nor can a nonconstant holomorphic function attain a local maximum of its modulus in the interior. These facts turn local power series into global uniqueness and mapping theorems.

Read [Cauchy's Integral Formula](cauchy-integral-formula.md). The domains in this chapter are connected open sets. Continuity up to a boundary is always an additional hypothesis when a boundary maximum is mentioned.

## Local factors and the identity theorem

**Lemma 8.1 (Local zero alternative).** If \\(f\\) is holomorphic near \\(a\\) and \\(f(a)=0\\), then either it vanishes on a neighborhood of \\(a\\), or
\\[
 f(z)=(z-a)^m h(z)
\\]
near \\(a\\), for a positive integer \\(m\\) and a holomorphic \\(h\\) with \\(h(a)\\ne0\\).

**Proof.** Expand \\(f\\) in its Taylor series at \\(a\\). If all coefficients vanish, the sum is zero on its disk. Otherwise let \\(m\\) be the first index with nonzero coefficient. Factoring out \\((z-a)^m\\) leaves a convergent power series \\(h\\) with nonzero constant coefficient. \\(\\square\\)

By continuity, the latter \\(h\\) remains nonzero on a smaller disk, so the zero \\(a\\) is isolated there. The lemma's alternatives are local. Connectedness is needed to propagate the first one to a whole domain.

**Theorem 8.2 (Identity theorem).** If holomorphic functions \\(f,g\\) on a domain agree on a set having a limit point in the domain, they agree everywhere on that domain.

**Proof.** Let \\(q=f-g\\). A limit point of its zeros cannot have a first nonzero Taylor coefficient: Lemma 8.1 would make that zero isolated. Thus all derivatives of \\(q\\) vanish at the limit point.

Let \\(A\\) be the set of points where every derivative of \\(q\\), including order zero, vanishes. It is closed relative to the domain because all those derivatives are continuous. It is open because the Taylor series at such a point is zero on a disk, and all derivatives vanish throughout that disk. It is nonempty by the preceding paragraph. Connectedness forces \\(A\\) to be the whole domain, proving \\(q=0\\). \\(\\square\\)

**Definition 8.3 (Order of a zero).** For a holomorphic function not identically zero on a domain, the integer \\(m\\) in the factorization is the order or multiplicity of its zero at \\(a\\).

Every zero of such a function has finite order, and the zero set has no limit point inside the domain. On a compact subset there can only be finitely many zeros: an infinite set in a compact metric set has a limit point, which would contradict the theorem.

Orders behave algebraically. If \\(f=(z-a)^m h\\) and \\(g=(z-a)^n k\\), with nonzero factors at \\(a\\), their product has order \\(m+n\\). Differentiation gives \\(f'=(z-a)^{m-1}[mh+(z-a)h']\\), so for \\(m\\ge1\\) the derivative has order \\(m-1\\). The nonzero coefficient \\(mh(a)\\) justifies that exact conclusion.

An accumulation point on the boundary does not satisfy the identity theorem. A function need not be defined beyond that boundary, and the Taylor argument has no neighborhood there. Likewise, agreement on an entire open component does not determine values on another component of a disconnected open set.

## The strong maximum principle

The centre case of Cauchy's formula yields the mean-value identity
\\[
 f(a)=\\frac1{2\\pi}\\int_0^{2\\pi}f(a+re^{it})dt
\\]
whenever the closed disk and its neighborhood lie in the domain.

**Theorem 8.4 (Maximum modulus principle).** A nonconstant holomorphic function on a domain has no local maximum of its modulus in the domain.

**Proof.** Suppose \\(|f(z)|\\le|f(a)|=M\\) near \\(a\\). If \\(M=0\\), the function vanishes near \\(a\\) and hence everywhere by identity. If \\(M>0\\), multiply by the unit number \\(\\overline{f(a)}/M\\), producing \\(F\\) with \\(F(a)=M\\) and \\(|F|\\le M\\).

For every sufficiently small circle, the mean-value identity gives the average of \\(\\Re F\\) as \\(M\\). But \\(M-\\Re F\\) is continuous and nonnegative there. A positive value would be positive on an arc and make its integral positive, so it must be zero everywhere on the circle. Together with \\(|F|\\le M\\), the condition \\(\\Re F=M\\) forces \\(F=M\\) on that circle.

Varying the small radius makes \\(F\\) constant on a disk. Identity propagates constancy to the domain, contradicting nonconstancy. \\(\\square\\)

The statement concerns modulus, not the complex values ordered as real numbers; complex numbers have no compatible total order for such a maximum. A constant function of course attains its modulus everywhere, which is why the nonconstant hypothesis is present.

**Corollary 8.5 (Boundary maximum).** If \\(\\Omega\\) is a bounded domain and \\(f\\) is continuous on its closure and holomorphic inside, then
\\[
 \\max_{\\overline\\Omega}|f|=\\max_{\\partial\\Omega}|f|.
\\]

**Proof.** The compact closure gives an attained maximum. If a nonconstant function attained a larger value in the interior, it would violate Theorem 8.4. A constant function has the same value everywhere. \\(\\square\\)

The closure continuity supplies actual boundary values and compact attainment. A function merely holomorphic inside a bounded domain may be unbounded near its boundary, as \\(1/(1-z)\\) is on the unit disk.

If \\(f\\) is nonvanishing, an interior local minimum of \\(|f|\\) is a local maximum of \\(|1/f|\\). Thus the minimum modulus principle says such a minimum forces constancy. The nonvanishing condition matters: a nonconstant holomorphic function is allowed to have an interior zero and hence an interior minimum zero.

## Open mapping without a residue theorem

**Theorem 8.6 (Open mapping).** A nonconstant holomorphic function on a domain maps every open subset to an open subset of the plane.

**Proof.** Fix \\(a\\) and write \\(b=f(a)\\). By the isolated-zero result, choose a small radius \\(r>0\\) so the closed disk is inside the domain and \\(f(z)-b\\) has no zeros on its boundary. Let \\(\\delta=\\min_{|z-a|=r}|f(z)-b|>0\\).

Take \\(w\\) with \\(0<|w-b|<\\delta/2\\). If \\(f-w\\) had no zero in the disk, its reciprocal would be holomorphic on a neighborhood of that closed disk. On the boundary, \\(|f-w|\\ge\\delta-|w-b|>|w-b|\\), so the reciprocal's boundary values have strictly smaller modulus than its value at \\(a\\). This contradicts the boundary maximum principle. Therefore \\(w\\) belongs to the image of the disk; \\(b\\) already does as well. The image contains \\(D(b,\\delta/2)\\).

For an arbitrary open subset, choose such a disk around each of its points. The restriction cannot be locally constant unless \\(f\\) is constant on the whole domain by identity. The preceding argument therefore proves openness at every image point. \\(\\square\\)

This proof uses the minimum effect of a nonvanishing reciprocal and a strict boundary separation. It does not use the argument principle or Rouché's theorem, which are proved later. The logical order makes open mapping available to those later existence arguments.

A consequence is that a nonconstant holomorphic function cannot have its image contained in the real line or in a circle, since neither contains any nonempty planar open set. The same is true for any set with empty interior. This is stronger than simply noting that one particular derivative is nonzero.

## Injectivity and nonzero derivatives

**Proposition 8.7 (Univalent derivative and inverse).** If \\(f\\) is injective and holomorphic on a domain, then \\(f'\\ne0\\) there. Its inverse from its image is holomorphic.

**Proof.** Suppose at \\(a\\), \\(f-f(a)\\) has order \\(m\\ge2\\). Write it as \\((z-a)^mh(z)\\), with \\(h\\) nonzero on a small disk. The global-root theorem on that simply connected disk gives a holomorphic \\(m\\)th root \\(r\\) of \\(h\\). Put \\(\\phi(z)=(z-a)r(z)\\), so \\(f-f(a)=\\phi^m\\) and \\(\\phi'(a)=r(a)\\ne0\\).

Shrink to a convex disk where \\(|\\phi'(z)-\\phi'(a)|<|\\phi'(a)|/2\\). Integrating along segments gives
\\[
 |\\phi(z)-\\phi(w)|\\ge\\tfrac12|\\phi'(a)||z-w|.
\\]
Here derivative continuity and the real parameter fundamental theorem are available from Cauchy theory. Thus \\(\\phi\\) is injective on that disk. Its image is open by Theorem 8.6 and contains zero, so it contains two distinct small values \\(u\\) and \\(e^{2\\pi i/m}u\\). Their distinct preimages have equal \\(m\\)th powers and hence equal \\(f\\)-values, contradicting injectivity. Therefore \\(m=1\\), equivalent to \\(f'(a)\\ne0\\).

An injective continuous open map has continuous inverse. For \\(b=f(a)\\), write \\(k=f^{-1}(b+h)-a\\). Continuity gives \\(k\\to0\\), and
\\[
 \\frac{f^{-1}(b+h)-f^{-1}(b)}h
 =\\frac{k}{f(a+k)-f(a)}\\to\\frac1{f'(a)}.
\\]
Thus the inverse is holomorphic. \\(\\square\\)

Nonzero derivative is a necessary local condition for injectivity, but it does not guarantee global injectivity. The exponential has no zero derivative and repeats every imaginary period. The theorem gives the inverse on the actual image of a map already assumed injective.

## Schwarz's lemma

**Theorem 8.8 (Schwarz).** If \\(f:D(0,1)\\to D(0,1)\\) is holomorphic and \\(f(0)=0\\), then \\(|f(z)|\\le|z|\\) and \\(|f'(0)|\\le1\\). Equality at one nonzero point, or equality in the derivative bound, forces \\(f(z)=\\lambda z\\) for a constant \\(|\\lambda|=1\\).

**Proof.** Taylor factorization makes \\(g(z)=f(z)/z\\) holomorphic after defining \\(g(0)=f'(0)\\). On the circle of radius \\(r<1\\), \\(|g|\\le1/r\\). The boundary maximum principle gives the same bound inside. For any fixed \\(z\\), let \\(r\\uparrow1\\) through radii larger than \\(|z|\\), obtaining \\(|g(z)|\\le1\\). This proves both inequalities.

If equality occurs at a nonzero \\(z\\), or \\(|g(0)|=1\\), then \\(g\\) attains its maximum modulus inside the disk. The maximum principle makes it constant, and its modulus is one. Conversely every such rotation has the stated equalities. \\(\\square\\)

The normalization at zero matters. A general disk automorphism that does not fix zero need not satisfy \\(|f(z)|\\le|z|\\). The conformal-mapping chapter will use Möbius transformations to move an arbitrary base point to zero before applying this lemma.

## Worked example 8.1: an interior accumulation versus a boundary one

If an entire function agrees with \\(z^2\\) at \\(z=1/n\\) for all positive integers, the agreement points accumulate at zero inside the plane. Identity therefore forces \\(f(z)=z^2\\) everywhere.

By contrast \\(g(z)=\\sin(\\pi/(1-z))\\) is holomorphic on the unit disk and vanishes at \\(z=1-1/n\\), \\(n\\ge2\\). Those zeros accumulate at the boundary point one. The function is not identically zero: at \\(z=1/3\\) its value is \\(-1\\). This explicit example shows that the location of the limit point is not a minor technicality.

## Worked example 8.2: a sharp boundary maximum with an interior minimum

On the closed unit disk, \\(f(z)=z^2+2z\\) satisfies \\(|f(z)|\\le|z|^2+2|z|\\le3\\). At \\(z=1\\) it equals three, so its maximum modulus is exactly three, attained on the boundary as expected.

At zero its modulus is zero, an interior minimum. This does not contradict the minimum principle because the function vanishes there. The second zero is \\(-2\\), outside the disk. Both the maximum and the minimum conclusions require the correct version of the theorem.

## Worked example 8.3: equality and strictness in Schwarz

The map \\(f(z)=z^2\\) sends the unit disk to itself and fixes zero. For \\(0<|z|<1\\), \\(|f(z)|=|z|^2<|z|\\), and \\(f'(0)=0\\). Thus the inequality is strict away from zero.

The map \\(g(z)=e^{i\\theta}z\\) attains equality everywhere and has \\(|g'(0)|=1\\). Schwarz's equality case proves these rotations are the only possible equality maps. A numerical plot suggesting almost equal moduli is not the exact equality hypothesis.

## Worked example 8.4: a legitimate global inverse on a restricted domain

The map \\(z^2\\) is injective on the right half-plane. If two squares agree, the numbers are equal or negatives; two numbers with positive real part cannot be negatives. Its image is the slit plane with the nonpositive real ray removed, by doubling arguments in \\((-\\pi/2,\\pi/2)\\).

The inverse is the principal square root, holomorphic there. On the full punctured plane, the derivative \\(2z\\) is still nonzero but the map is not injective because \\(z\\) and \\(-z\\) have the same square. Domain restriction, rather than a change in the derivative calculation, creates the global inverse.

## Limits of the conclusions

Identity needs an interior limit point and one connected domain. Maximum modulus concerns a genuine local maximum, not a maximum over a finite sample. Open mapping excludes constant functions. Schwarz needs both disk containment and a fixed zero. These are separate contracts; omitting one can turn a correct local calculation into a false global claim.

The next chapter studies what happens when holomorphy fails at isolated points. The finite order of a zero will reappear as the finite order of a pole of a reciprocal, while Laurent series describe the more complicated possibilities.

## Exercises

### Exercise 8.1 {#zeros-identity-maximum-modulus-ex-zero-order}

Find the order at zero of exp(z)-1-z.

<details><summary>Hint 1</summary>

Use its Taylor coefficients.

</details>
<details><summary>Hint 2</summary>

The first nonzero term has degree two.

</details>
<details><summary>Solution</summary>

The series begins z^2/2+z^3/6+…, so the order is two. Factoring z^2 leaves a holomorphic factor with value 1/2 at zero. Thus the zero is isolated and the derivative has order one.

</details>

### Exercise 8.2 {#zeros-identity-maximum-modulus-ex-identity-sequence}

If f and g are holomorphic on a domain containing zero and agree at all sufficiently small positive 1/n, what follows?

<details><summary>Hint 1</summary>

The agreement points accumulate inside the domain.

</details>
<details><summary>Hint 2</summary>

Apply the identity theorem to their difference.

</details>
<details><summary>Solution</summary>

Their difference has zeros accumulating at zero, which is an interior point. Hence it vanishes throughout the connected domain, so f=g there. Agreement on another disconnected component would require separate information.

</details>

### Exercise 8.3 {#zeros-identity-maximum-modulus-ex-boundary-zeros}

Why do the zeros 1-1/n of sin(π/(1-z)) not force that function to vanish on the unit disk?

<details><summary>Hint 1</summary>

Locate their limit point.

</details>
<details><summary>Hint 2</summary>

The theorem requires that point inside the domain.

</details>
<details><summary>Solution</summary>

They accumulate at one, which is not in the open unit disk. The function is holomorphic inside but is not identically zero, as its value at one third is -1. A boundary accumulation does not meet the identity theorem's hypothesis.

</details>

### Exercise 8.4 {#zeros-identity-maximum-modulus-ex-finite-compact-zeros}

Prove a nonzero holomorphic function has only finitely many zeros in a compact subset of its domain.

<details><summary>Hint 1</summary>

An infinite subset of a compact metric set has a limit point.

</details>
<details><summary>Hint 2</summary>

That point remains inside the domain.

</details>
<details><summary>Solution</summary>

An infinite sequence of distinct zeros in the compact set has a convergent subsequence with limit in the same set. That is an interior accumulation point of zeros, forcing the function to vanish identically by identity. The contradiction proves finiteness.

</details>

### Exercise 8.5 {#zeros-identity-maximum-modulus-ex-maximum-boundary}

Find the maximum of |z^3| on the closed disk |z|≤2.

<details><summary>Hint 1</summary>

Compute the modulus directly.

</details>
<details><summary>Hint 2</summary>

Check where the radius is largest.

</details>
<details><summary>Solution</summary>

The modulus is |z|^3≤8, with equality on every boundary point |z|=2. It is strictly smaller in the interior except for the constant-function alternative, which does not apply. The function's zero at the center is an interior minimum.

</details>

### Exercise 8.6 {#zeros-identity-maximum-modulus-ex-minimum-nonzero}

If a nonvanishing holomorphic function has a local minimum of its modulus inside a domain, prove it is constant.

<details><summary>Hint 1</summary>

Take its reciprocal.

</details>
<details><summary>Hint 2</summary>

Use the maximum principle on the reciprocal.

</details>
<details><summary>Solution</summary>

The reciprocal is holomorphic near every point and has a local maximum modulus at that point. The maximum principle makes it constant on the domain, hence so is the original function. The nonvanishing assumption is needed to define that reciprocal.

</details>

### Exercise 8.7 {#zeros-identity-maximum-modulus-ex-real-image}

Prove a holomorphic function on a domain taking only real values is constant.

<details><summary>Hint 1</summary>

A nonconstant holomorphic function is open.

</details>
<details><summary>Hint 2</summary>

The real line has empty planar interior.

</details>
<details><summary>Solution</summary>

If it were nonconstant, every small open neighborhood would have a nonempty open image contained in the real line. No nonempty planar open set is contained in that line. This contradicts open mapping, so the function is constant.

</details>

### Exercise 8.8 {#zeros-identity-maximum-modulus-ex-schwarz-derivative}

A holomorphic disk self-map fixes zero and has f'(0)=i. Determine it.

<details><summary>Hint 1</summary>

Its derivative modulus equals one.

</details>
<details><summary>Hint 2</summary>

Use Schwarz's equality case.

</details>
<details><summary>Solution</summary>

The equality case gives f(z)=λz with |λ|=1. Differentiating at zero identifies λ=i, so f(z)=iz. The entire map is determined by this exact extremal derivative together with the disk hypotheses.

</details>

### Exercise 8.9 {#zeros-identity-maximum-modulus-ex-schwarz-fixed-point}

If a disk self-map fixes zero and one nonzero interior point, prove it is the identity.

<details><summary>Hint 1</summary>

At the nonzero fixed point, Schwarz has equality.

</details>
<details><summary>Hint 2</summary>

Identify the constant rotation.

</details>
<details><summary>Solution</summary>

Schwarz forces f(z)=λz with |λ|=1. At a nonzero fixed point a, λa=a implies λ=1. Hence f is the identity. The conclusion uses an interior fixed point, not an unspecified boundary limit.

</details>

### Exercise 8.10 {#zeros-identity-maximum-modulus-ex-injective-nonzero}

Why does an injective holomorphic map have no derivative zero, and why is the converse globally false?

<details><summary>Hint 1</summary>

A zero derivative would give a local power of order at least two.

</details>
<details><summary>Hint 2</summary>

Use the exponential for the converse.

</details>
<details><summary>Solution</summary>

The factorization and local-root argument in Proposition8.7 would produce two distinct nearby preimages of one value if the zero order exceeded one. Thus an injective map has nonzero derivative. Conversely exp(z) has derivative exp(z)≠0 but repeats after adding 2πi, so it is not globally injective.

</details>

### Exercise 8.11 {#zeros-identity-maximum-modulus-ex-product-orders}

If f has a zero of order two and g one of order three at a, find the product's order.

<details><summary>Hint 1</summary>

Factor each function by its exact power.

</details>
<details><summary>Hint 2</summary>

The remaining factors stay nonzero at a.

</details>
<details><summary>Solution</summary>

Write f=(z-a)^2h and g=(z-a)^3k with h(a)k(a)≠0. Their product is (z-a)^5hk, with nonzero remaining factor. Thus its order is exactly five, not merely at least five.

</details>

### Exercise 8.12 {#zeros-identity-maximum-modulus-ex-real-part-maximum}

If Re f has a local maximum inside a domain, show f is constant.

<details><summary>Hint 1</summary>

The modulus of exp f is exp(Re f).

</details>
<details><summary>Hint 2</summary>

Use nonvanishing of the exponential after differentiating.

</details>
<details><summary>Solution</summary>

The entire composition exp f is holomorphic and its modulus has a local maximum. It is therefore constant by maximum modulus. Its derivative is exp(f)f'=0; since exp(f) never vanishes, f'=0. Connected-domain constancy gives f constant.

</details>

## Worked example: comparing two candidate continuations

Suppose \\(f\\) and \\(g\\) are holomorphic on the connected disk \\(D(0,2)\\), and \\(f(1/n)=g(1/n)\\) for every integer \\(n\\ge1\\). The difference \\(h=f-g\\) has zeros accumulating at zero, which is an interior point of this disk. If \\(h\\) were not identically zero, its Taylor expansion at zero would have a first nonzero coefficient, making zero an isolated zero. That contradicts the sequence. Thus \\(f=g\\) throughout the disk. The equality need not be checked at every point or even on an arc; an interior accumulation suffices.

Change the domain to the unit disk and use the points \\(1-1/n\\). These accumulate at the boundary point one. The same argument no longer applies. For example, the zero function and a nonzero holomorphic function with zeros at a suitably chosen sequence approaching the boundary can differ inside the disk; the identity theorem's interior hypothesis is essential. One can already see the logical gap without constructing that function: no Taylor expansion about the boundary point is guaranteed by holomorphy on the open disk. The inference from an interior sequence must therefore never be copied verbatim to boundary data.

## A local maximum and the role of the mean value

Let \\(f\\) be holomorphic on a domain and assume \\(|f|\\) has a local maximum at \\(a\\). Choose a small circle around \\(a\\) on which \\(|f(z)|\\le|f(a)|\\). The mean-value identity says that \\(f(a)\\) is the average of the values on that circle. Equality in the triangle inequality for an average of vectors with bounded modulus forces those vectors to point in the same direction and attain the maximal modulus, except possibly on a set of angle measure zero. Continuity removes that exception, so \\(f\\) is constant on the circle. Cauchy's formula then makes it constant on the enclosed disk, and the identity theorem propagates constancy through the domain.

This reasoning uses complex values, not just a real maximum principle for the scalar function \\(|f|\\). The key rigidity is equality in a vector average. If only the real part \\(u=\\operatorname{Re}f\\) has a local maximum, the harmonic mean-value property similarly makes \\(u\\) constant locally; then the Cauchy–Riemann equations show both components of \\(f\\) are locally constant up to a fixed imaginary additive value. The harmonic chapter develops this viewpoint systematically.

## Schwarz equality as a normalization test

For a holomorphic map \\(f:\\mathbb D\\to\\mathbb D\\) with \\(f(0)=0\\), Schwarz's lemma gives \\(|f(z)|\\le|z|\\). If equality holds at one nonzero point, divide by \\(z\\) and extend the quotient holomorphically at zero using \\(f'(0)\\). The quotient has modulus at most one and achieves an interior modulus maximum, so it is constant. Its constant modulus is one, and \\(f(z)=e^{i\\theta}z\\) throughout the disk. For \\(f(z)=z^2\\), the strict inequality \\(|z^2|<|z|\\) holds for \\(0<|z|<1\\); equality at the boundary is irrelevant to the equality case. This concrete comparison prevents a common misuse of the theorem when examining disk maps only on their boundary.

## Sources

Original exposition and exercises. Primary references: Jiří Lebl, [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), and Stein–Shakarchi, [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). Open mapping and inverse regularity are proved here from preceding results, without using the later argument principle.

## Summary

Taylor factorization gives isolated zeros and their multiplicities. Identity propagates local agreement across a domain, while the mean-value formula rules out interior modulus maxima for nonconstant functions. Open mapping, holomorphic inverse regularity, and Schwarz's rigidity follow with their stated hypotheses. Laurent theory next extends these local factors to isolated singularities and annuli.
`;export{e as default};