var e=`---
parent_id: book-complex-analysis
chapter_id: normal-families-riemann-mapping
title: Normal families and the Riemann mapping theorem
level: graduate
license: CC BY-SA 4.0
---

# Normal families and the Riemann mapping theorem

Explicit formulas map half-planes, disks, and sectors to one another. A simply connected domain can have a boundary far too complicated to suggest any formula. Nevertheless, unless it is the whole plane, it is conformally equivalent to the disk. The proof is an existence argument: construct at least one bounded injection, maximize its derivative at a chosen point, extract a convergent subsequence, and show that a missing target value would improve the maximizer.

Preparation: [Conformal maps and Möbius transformations](conformal-mobius.md), [Argument principle and Rouché](argument-principle-rouche.md), and [The Cauchy–Goursat theorem](cauchy-goursat.md). The compactness input is the proved Arzelà–Ascoli theorem in [Function spaces and equicontinuity](../proof-safe-real-analysis/function-spaces-and-equicontinuity.md): an equicontinuous uniformly bounded sequence on a compact metric space has a uniformly convergent subsequence. We apply it to complex-valued functions by treating real and imaginary parts successively. All convergence called local uniform convergence is uniform on every compact subset of the stated domain.

## Compactness from holomorphy
<a id="montel-local-boundedness"></a>

**Definition 15.1 (Normality).** A family of holomorphic functions on a domain is normal in the finite-valued sense if every sequence in it has a subsequence converging locally uniformly to a holomorphic function. A family is locally bounded if for every compact subset \\(K\\) there is \\(M_K<\\infty\\) bounding every family member on \\(K\\).

This finite-valued definition is sufficient for bounded disk maps. Other treatments allow convergence to infinity in the spherical metric and use a broader definition of normality. We will not switch between those meanings. The locally bounded hypothesis below rules out escape to infinity and gives an ordinary holomorphic limit.

**Lemma 15.2 (Locally uniform limit theorem).** A locally uniform limit of holomorphic functions is holomorphic. Their derivatives converge locally uniformly to the derivative of the limit.

*Proof.* Fix a closed disk inside the domain and a slightly smaller concentric disk. Cauchy's formula represents every function at an interior point as its boundary integral divided by \\(2\\pi i\\). Uniform convergence on the outer circle permits passage to the limit. The resulting integral defines a holomorphic function inside, because the denominator remains uniformly separated from zero on compact smaller disks and can be differentiated under the finite integral. Its derivative formula is the limit of the Cauchy derivative formulas. Uniform denominator bounds show derivative convergence uniformly on the smaller disk. A finite covering proves the assertion on any compact subset. ∎

**Theorem 15.3 (Montel for locally bounded families).** A locally bounded family of holomorphic functions is normal.

*Proof.* On a closed disk of radius \\(2r\\) contained in the domain, local boundedness gives a common bound \\(M\\). Cauchy's derivative estimate bounds \\(|f'|\\) by \\(M/r\\) on its radius-\\(r\\) subdisk. Along a segment in that subdisk, integration of the derivative gives \\(|f(z)-f(w)|\\le(M/r)|z-w|\\). Thus the family is locally equicontinuous, with common constants on each of finitely many neighborhoods covering a compact set. Choosing a common small separation scale in that finite cover proves equicontinuity on the compact set itself.

Take an increasing compact exhaustion \\(K_n=\\{z:|z|\\le n,\\operatorname{dist}(z,\\mathbb C\\setminus D)\\ge1/n\\}\\); for \\(D=\\mathbb C\\), use closed disks instead. Empty initial sets may be ignored. Every compact subset of \\(D\\) lies in some \\(K_n\\), and the interiors of these sets eventually contain each point. Arzelà–Ascoli gives a subsequence converging uniformly on \\(K_1\\), a further subsequence on \\(K_2\\), and so on. The diagonal subsequence converges uniformly on every \\(K_n\\), with consistent limits because the sets are nested. It therefore converges locally uniformly on \\(D\\). Lemma 15.2 makes its limit holomorphic. ∎

Compactness here has a geometric source: uniform modulus bounds imply derivative bounds, hence prevent rapid oscillation on smaller regions. A bounded sequence of arbitrary continuous functions does not have this property. Holomorphy supplies the missing equicontinuity through Cauchy's estimates. The diagonal argument is also essential: one compact set at a time does not automatically produce one subsequence valid on the entire open domain.

## Zeros and injectivity survive in the right form
<a id="hurwitz-univalent-limit"></a>

**Theorem 15.4 (Hurwitz, zero-free form).** If zero-free holomorphic functions on a domain converge locally uniformly to \\(f\\), then \\(f\\) is either identically zero or zero-free.

*Proof.* Suppose \\(f\\) is not identically zero and has a zero at \\(a\\). The identity theorem makes it isolated, of some finite positive order. Choose a small circle with no boundary zeros and no other interior zeros. Uniform convergence and Rouché imply that the approximating functions have that same positive zero count inside for all sufficiently large indices. This contradicts their zero-free hypothesis. ∎

**Corollary 15.5 (Limit of injections).** A locally uniform limit of injective holomorphic functions is either constant or injective.

*Proof.* Suppose \\(f\\) is nonconstant. Fix \\(a\\in D\\), and for each approximant define
\\[
g_n(z)=\\begin{cases}(f_n(z)-f_n(a))/(z-a),&z\\ne a,\\\\ f'_n(a),&z=a.\\end{cases}
\\]
The removable extension is holomorphic and zero-free: away from \\(a\\) this follows from injectivity, and at \\(a\\) from the nonvanishing derivative of an injection. These functions converge locally uniformly to the corresponding quotient \\(g\\). Away from \\(a\\) this is immediate; near \\(a\\), write the quotient as \\(\\int_0^1 f'_n(a+t(z-a))dt\\) on a small disk and use derivative convergence. The function \\(g\\) is not identically zero because \\(f\\) is nonconstant. Hurwitz makes it zero-free. Hence \\(f(z)\\ne f(a)\\) for every \\(z\\ne a\\). Since \\(a\\) was arbitrary, \\(f\\) is injective. ∎

The constant alternative cannot be omitted. The injections \\(z/n\\) on the disk converge to zero. Normality alone therefore does not preserve the feature needed for a conformal map. In the extremal argument below, a positive limiting derivative will exclude precisely that alternative.

## Finding a bounded injection
<a id="bounded-injection-square-root"></a>

**Lemma 15.6 (A bounded injection exists).** If \\(D\\subsetneq\\mathbb C\\) is simply connected, then it admits a holomorphic injection into the unit disk.

*Proof.* Choose \\(a\\notin D\\). The nonvanishing function \\(z-a\\) has a holomorphic square root \\(h\\) on \\(D\\), by the simply connected logarithm theorem: choose a logarithm and divide it by two before exponentiating. The map \\(h\\) is injective, since equality of its values implies equality of their squares and hence of the original points. Also \\(h(D)\\) cannot contain both \\(w\\) and \\(-w\\): those would have the same square, and \\(w=0\\) never occurs.

Choose \\(z_0\\in D\\) and write \\(w_0=h(z_0)\\ne0\\). The open mapping theorem supplies \\(r>0\\) with \\(B(w_0,r)\\subset h(D)\\). The reflected disk \\(B(-w_0,r)\\) is disjoint from \\(h(D)\\). Indeed, if \\(w\\in h(D)\\) lay there, then \\(-w\\in B(w_0,r)\\subset h(D)\\), contrary to the preceding observation. Consequently \\(|h(z)+w_0|\\ge r\\) for every \\(z\\in D\\).

The function \\(q(z)=1/(h(z)+w_0)\\) is therefore holomorphic, bounded by \\(1/r\\), and injective. Multiplying by \\(r/2\\) puts its image strictly inside the unit disk. This proves existence without assuming that the complement of \\(D\\) contains an open disk: it might contain only a slit or an isolated configuration at this stage of the argument. ∎

The square root is the crucial construction. The simpler expression \\(1/(z-a)\\) need not be bounded when points of \\(D\\) approach \\(a\\). The reflected omitted disk in the square-root image creates a definite distance from a pole, which is what the reciprocal actually needs. This is why a missing point alone cannot justify the boundedness of a reciprocal.

## The extremal map and surjectivity
<a id="riemann-mapping-full-proof"></a>

**Theorem 15.7 (Riemann mapping theorem).** Let \\(D\\) be a nonempty simply connected proper domain in the complex plane, and let \\(z_0\\in D\\). There exists a unique biholomorphism \\(F:D\\to\\mathbb D\\) satisfying \\(F(z_0)=0\\) and \\(F'(z_0)>0\\), where the inequality means a positive real number.

*Proof.* Let \\(\\mathcal F\\) consist of all holomorphic injections \\(f:D\\to\\mathbb D\\) with \\(f(z_0)=0\\). Lemma 15.6 and a disk automorphism show it is nonempty. Every member has nonzero derivative. A rotation of its target makes that derivative positive real without changing its modulus.

Choose \\(r>0\\) with \\(\\overline{B(z_0,r)}\\subset D\\). Cauchy's estimate gives \\(|f'(z_0)|\\le1/r\\), so
\\(M=\\sup_{f\\in\\mathcal F}|f'(z_0)|\\)
is finite and strictly positive. Choose \\(f_n\\in\\mathcal F\\) with positive derivatives tending to \\(M\\). The family is bounded by one, so Montel gives a locally uniformly convergent subsequence with holomorphic limit \\(F\\). It satisfies \\(F(z_0)=0\\), \\(|F|\\le1\\), and \\(F'(z_0)=M>0\\) by derivative convergence. Thus it is nonconstant. The maximum modulus principle makes \\(|F|<1\\) throughout \\(D\\), and Corollary 15.5 makes it injective. Hence \\(F\\in\\mathcal F\\) and attains the supremum.

Suppose a point \\(b\\in\\mathbb D\\) is missing from \\(F(D)\\). Since \\(F(z_0)=0\\), we have \\(0<|b|<1\\). Let \\(\\phi_b(w)=(w-b)/(1-\\overline b w)\\). The function \\(\\phi_b\\circ F\\) is nonvanishing on the simply connected domain \\(D\\), so it has a holomorphic square root \\(g\\). Its modulus is less than one, and \\(g\\) is injective because equality of its values implies equality after squaring and then injectivity of \\(\\phi_b\\circ F\\). Put \\(c=g(z_0)\\), so \\(|c|=\\sqrt{|b|}\\). The map \\(H=\\phi_c\\circ g\\) belongs to \\(\\mathcal F\\).

Differentiate \\(g^2=\\phi_b(F)\\) at \\(z_0\\). The moduli give
\\[
|g'(z_0)|=\\frac{(1-|b|^2)|F'(z_0)|}{2\\sqrt{|b|}}.
\\]
Also \\(|\\phi'_c(c)|=1/(1-|c|^2)=1/(1-|b|)\\). Therefore
\\[
|H'(z_0)|=\\frac{1+|b|}{2\\sqrt{|b|}}M>M,
\\]
because \\(1+s>2\\sqrt s\\) for \\(0<s<1\\). This contradicts the definition of \\(M\\). Thus no point of the disk is missing and \\(F\\) is surjective. An injective holomorphic map has holomorphic inverse, so \\(F\\) is a biholomorphism.

For uniqueness, two normalized equivalences differ by a disk automorphism fixing zero, hence by a rotation. The positive derivative normalization forces that rotation to be one. ∎

The plane itself is excluded necessarily. A disk equivalence from the plane would be a bounded nonconstant entire function, contrary to Liouville. Simple connectedness is also necessary for equivalence to the disk: a biholomorphism is a homeomorphism and transports loop contractions. The theorem is an interior statement. It does not assert a continuous or one-to-one extension to an arbitrary boundary, nor does it provide an elementary formula for the map.

## Worked examples

### Example 15.8: Why a punctured disk is different

The punctured unit disk has noncontractible circles around zero: their index about zero is one, whereas a constant loop has index zero, and index is invariant under a homotopy avoiding zero. It therefore cannot be equivalent to the disk. This is a topological obstruction, not a failure to find the right formula. The Riemann mapping theorem's simply connected hypothesis excludes exactly this example.

A slit disk with a radius removed is different: its argument can be chosen in a single interval, and the slit prevents a loop from circling the removed center without crossing the slit. Such a domain is simply connected and proper, so it does have a disk equivalence, even though its boundary is not a circle.

### Example 15.9: Normality does not force a unique limit

On the unit disk let \\(f_n(z)=(-1)^n z\\). The sequence is uniformly bounded and therefore has locally uniformly convergent subsequences. Its even subsequence converges to \\(z\\), and its odd subsequence to \\(-z\\). The entire sequence does not converge, as evaluation at any nonzero point shows.

If instead \\(f_n(z)=z/n\\), the full sequence converges to zero and every term is injective. These examples isolate two limitations: normality guarantees subsequences rather than a unique limit, and preservation of injectivity requires excluding a constant limit. The extremal derivative normalization handles both issues in the existence proof by extracting a subsequence with a specifically controlled derivative.

### Example 15.10: The normalized map for a half-plane

For \\(D=\\{\\operatorname{Im}z>0\\}\\) and \\(z_0=i\\), the Cayley map \\(T(z)=(z-i)/(z+i)\\) sends \\(i\\) to zero, but \\(T'(i)=-i/2\\). Multiplying by \\(i\\) gives \\(F(z)=i(z-i)/(z+i)\\), with \\(F'(i)=1/2>0\\). The Riemann mapping uniqueness theorem identifies this as the normalized equivalence.

If \\(G\\) is any holomorphic injection from this half-plane into the disk with \\(G(i)=0\\), compose with \\(F^{-1}\\). Schwarz's lemma gives \\(|G'(i)/F'(i)|\\le1\\), hence \\(|G'(i)|\\le1/2\\). Thus the explicit map realizes the extremal derivative considered abstractly in the proof.

## Exercises

### Exercise 15.1
<a id="normal-families-riemann-mapping-ex-1"></a>
Show that a uniformly bounded family on a domain is locally bounded, but the converse need not give one global bound.
<details><summary>Hint 1</summary>
For the converse consider the family with the single function \\(z\\) on the plane.
</details>
<details><summary>Hint 2</summary>
Every compact set is bounded, while the whole plane is not.
</details>
<details><summary>Solution</summary>
A global bound restricts to every compact set. The singleton family \\({z}\\) is bounded on each compact subset of the plane but has no finite bound valid on the entire plane. Local boundedness is exactly what Montel needs because its conclusion is local uniform convergence.
</details>

### Exercise 15.2
<a id="normal-families-riemann-mapping-ex-2"></a>
For \\(|f|\\le1\\) on the unit disk, bound \\(|f'(z)|\\) when \\(|z|\\le r<1\\).
<details><summary>Hint 1</summary>
Center a Cauchy circle at \\(z\\) with radius smaller than \\(1-r\\).
</details>
<details><summary>Hint 2</summary>
Then let its radius approach \\(1-r\\).
</details>
<details><summary>Solution</summary>
Cauchy's estimate gives \\(|f'(z)|\\le1/\\rho\\) for every \\(\\rho<1-r\\). Taking \\(\\rho\\uparrow1-r\\) yields \\(1/(1-r)\\). This uniform interior derivative bound implies equicontinuity on each closed subdisk.
</details>

### Exercise 15.3
<a id="normal-families-riemann-mapping-ex-3"></a>
Explain why \\(e^{nz}\\) on the plane is not locally bounded as a family.
<details><summary>Hint 1</summary>
A singleton compact set already tests local boundedness.
</details>
<details><summary>Hint 2</summary>
Evaluate at one.
</details>
<details><summary>Solution</summary>
At \\(z=1\\), the values are \\(e^n\\), unbounded. Thus no common bound exists even on the compact set \\({1}\\). Montel's locally bounded theorem is inapplicable to this family on the plane.
</details>

### Exercise 15.4
<a id="normal-families-riemann-mapping-ex-4"></a>
Give zero-free holomorphic functions converging locally uniformly to the identically zero function.
<details><summary>Hint 1</summary>
Use constants.
</details>
<details><summary>Hint 2</summary>
Choose positive constants tending to zero.
</details>
<details><summary>Solution</summary>
The functions \\(f_n=1/n\\) are zero-free and converge uniformly everywhere to zero. This shows that Hurwitz must allow an identically zero limit; it cannot conclude that every limit is zero-free.
</details>

### Exercise 15.5
<a id="normal-families-riemann-mapping-ex-5"></a>
Prove that a nonconstant locally uniform limit of disk automorphisms is injective and maps into the disk.
<details><summary>Hint 1</summary>
Use the injection-limit corollary.
</details>
<details><summary>Hint 2</summary>
The modulus bound first gives the closed disk; use the maximum modulus principle to exclude its boundary.
</details>
<details><summary>Solution</summary>
The corollary gives injectivity. Pointwise limits have modulus at most one. If the limit had modulus one at an interior point, the maximum modulus principle would make it constant, contrary to the hypothesis. Hence its image lies in the open disk. This argument alone does not establish surjectivity.
</details>

### Exercise 15.6
<a id="normal-families-riemann-mapping-ex-6"></a>
In Lemma 15.6, prove carefully why the disk centered at \\(-w_0\\) is omitted by the square-root image.
<details><summary>Hint 1</summary>
Reflect a hypothetical point in that disk through zero.
</details>
<details><summary>Hint 2</summary>
Its reflection belongs to the known disk centered at \\(w_0\\).
</details>
<details><summary>Solution</summary>
If \\(w\\in h(D)\\cap B(-w_0,r)\\), then \\(-w\\in B(w_0,r)\\subset h(D)\\). Equality of the squares of \\(w,-w\\) and injectivity of \\(h^2(z)=z-a\\) would force these image values to coincide, giving \\(w=0\\). But zero is absent from \\(h(D)\\). This contradiction proves omission.
</details>

### Exercise 15.7
<a id="normal-families-riemann-mapping-ex-7"></a>
Verify the strict derivative-improvement factor in the Riemann mapping proof.
<details><summary>Hint 1</summary>
Put \\(s=|b|\\in(0,1)\\).
</details>
<details><summary>Hint 2</summary>
Subtract \\(2\\sqrt s\\) from \\(1+s\\) and factor.
</details>
<details><summary>Solution</summary>
One has \\(1+s-2\\sqrt s=(1-\\sqrt s)^2>0\\). Thus \\((1+s)/(2\\sqrt s)>1\\), exactly the factor multiplying the extremal positive derivative. The strict inequalities \\(0<s<1\\) are ensured because zero is attained and \\(b\\) is an interior missing value.
</details>

### Exercise 15.8
<a id="normal-families-riemann-mapping-ex-8"></a>
Find the normalized disk map from \\(|z-a|<R\\) at its center \\(a\\).
<details><summary>Hint 1</summary>
Translate the center to zero and scale the radius to one.
</details>
<details><summary>Hint 2</summary>
The derivative should be positive real.
</details>
<details><summary>Solution</summary>
The map is \\(F(z)=(z-a)/R\\), with \\(F(a)=0\\) and \\(F'(a)=1/R>0\\). It is visibly a bijection onto the unit disk, and uniqueness of the normalized Riemann map excludes any other map with those properties.
</details>

### Exercise 15.9
<a id="normal-families-riemann-mapping-ex-9"></a>
Why cannot the whole plane be biholomorphic to the disk?
<details><summary>Hint 1</summary>
A map into the disk is bounded.
</details>
<details><summary>Hint 2</summary>
Apply Liouville to a hypothetical equivalence.
</details>
<details><summary>Solution</summary>
A holomorphic map from the plane into the disk is a bounded entire function and is constant by Liouville. A constant is not bijective onto the disk. This is why “proper” is indispensable in the theorem.
</details>

### Exercise 15.10
<a id="normal-families-riemann-mapping-ex-10"></a>
Show that the extremal supremum in the proof is positive and finite before compactness is used.
<details><summary>Hint 1</summary>
Use the bounded injection for positivity.
</details>
<details><summary>Hint 2</summary>
Use a fixed source disk about the base point for finiteness.
</details>
<details><summary>Solution</summary>
The constructed injection, normalized by a disk automorphism, belongs to the extremal family and has nonzero derivative, so the supremum is positive. On a fixed closed disk of radius \\(r\\) about the base point, every family member is bounded by one. Cauchy's estimate bounds each derivative by \\(1/r\\), making the supremum finite.
</details>

### Exercise 15.11
<a id="normal-families-riemann-mapping-ex-11"></a>
Explain why convergence at each individual point is insufficient for the derivative-convergence step of the extremal argument.
<details><summary>Hint 1</summary>
Cauchy's derivative formula integrates over a circle.
</details>
<details><summary>Hint 2</summary>
Passing a limit through that integral needs a justified uniform or dominated control.
</details>
<details><summary>Solution</summary>
Pointwise convergence alone supplies no uniform bound on the differences around the circle and hence no immediate bound on the derivative integral difference. Locally uniform convergence supplies exactly such a bound: multiply its boundary supremum by the finite contour length and the fixed kernel bound. Montel provides this stronger mode of convergence, not merely pointwise convergence.
</details>

### Exercise 15.12
<a id="normal-families-riemann-mapping-ex-12"></a>
If \\(D_1,D_2\\) are proper simply connected domains with chosen base points, prove they are conformally equivalent.
<details><summary>Hint 1</summary>
Map each to the unit disk.
</details>
<details><summary>Hint 2</summary>
Compose the first map with the inverse of the second.
</details>
<details><summary>Solution</summary>
Let \\(F_j:D_j\\to\\mathbb D\\) be normalized Riemann maps. Then \\(F_2^{-1}\\circ F_1\\) is a bijective holomorphic map with holomorphic inverse and sends the first base point to the second. Its derivative at that point is the positive ratio \\(F'_1/F'_2\\). The construction proves existence without requiring explicit formulas for either domain.
</details>

## A quantitative look at the compactness step

Suppose a family is bounded by \\(M\\) on a disk of radius \\(2r\\) about \\(a\\). Cauchy's estimate on circles of radius at least \\(r\\) gives a derivative bound \\(M/r\\) on the smaller radius-\\(r\\) disk. For points \\(z,w\\) in a still smaller convex disk, integrate along their joining segment to obtain \\(|f(z)-f(w)|\\le(M/r)|z-w|\\), with the same constant for every family member. Given an accuracy \\(\\varepsilon\\), choosing \\(|z-w|<\\varepsilon r/M\\) makes all values close. This is exactly the common modulus of continuity needed by Arzelà–Ascoli. Pointwise boundedness with a bound depending on both \\(f\\) and \\(z\\) would not supply such a common constant, so it cannot replace local boundedness.

The domain may be unbounded or have a rough boundary. A single compact set cannot cover it, which is why the proof takes a nested exhaustion and a diagonal subsequence. For each fixed compact \\(K\\), it eventually lies inside one exhaustion set, and the diagonal sequence is a subsequence of the convergent sequence chosen for that set after finitely many initial terms. Thus convergence on every member of the exhaustion is simultaneous. No boundary compactness is claimed; all estimates retain an interior margin.

## Why a missing value improves the extremal map

The square-root step in the Riemann mapping proof can be read geometrically. If \\(F(D)\\) omits \\(b\\), a disk automorphism moves \\(b\\) to zero. The transformed image avoids zero, so on simply connected \\(D\\) it has a holomorphic square root. Taking this root spreads the image away from a reflected copy of itself. A final automorphism returns the chosen base point to zero. The derivative gain is the factor \\((1+|b|)/(2\\sqrt{|b|})\\), strictly above one for \\(0<|b|<1\\). The strictness follows from \\((\\sqrt{|b|}-1)^2>0\\). If \\(b=0\\), it could not be omitted because the normalized map sends the base point to zero. The contradiction therefore covers every possible missing disk value.

This derivative gain depends on the existence of a *holomorphic* square root on the whole source domain. A pointwise choice of one of the two roots would not be enough; discontinuous sign changes would destroy both holomorphy and injectivity. Simple connectedness supplies the global logarithm from which the square root is constructed. The same topological condition appears twice in the proof: first to create one bounded injection and then to improve a supposedly nonsurjective extremal injection.

## A normalized map can still approach the boundary

The extremal sequence \\(f_n:D\\to\\mathbb D\\) is normalized at \\(z_0\\), with derivatives tending to a positive supremum. Montel provides a locally uniform subsequential limit \\(F\\) satisfying \\(|F|\\le1\\). The strict interior inequality \\(|F|<1\\) is a separate step: if \\(|F(a)|=1\\) at one interior point, maximum modulus makes \\(F\\) constant, contradicting \\(F'(z_0)>0\\). The positive derivative also rules out the constant alternative in the univalent-limit theorem. Thus both properties needed for membership in the admissible family survive the limit for stated reasons. One cannot simply assume that the set of injective maps into an open disk is closed under locally uniform convergence; the examples \\(z/n\\to0\\) and constants of modulus tending to one show the two possible failures.

The normalized derivative bound comes from a fixed source disk around \\(z_0\\), not from any boundary regularity of \\(D\\). Cauchy's estimate is therefore available even when the domain boundary is irregular. The final bijection concerns interior points only; whether its boundary values exist or are one-to-one is governed by additional geometric hypotheses and is outside the theorem proved here.

## Sources

Original exposition and exercises. Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), Chapter 6, is a primary textbook reference for Montel and Riemann mapping. The real compactness input is linked above. No boundary extension theorem or Picard theorem is used in the argument.

## Summary

Cauchy estimates turn local boundedness into equicontinuity, and Arzelà–Ascoli plus a diagonal argument gives Montel compactness. Rouché makes zero-free and injective limits controllable. A square root creates a bounded injection of every proper simply connected domain; maximizing a normalized derivative then yields a map onto the whole disk, because any missing value permits a strict improvement. The theorem concerns interior conformal geometry, while the next chapter studies how local analytic formulas continue along paths.
`;export{e as default};