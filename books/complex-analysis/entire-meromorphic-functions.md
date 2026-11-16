
# Entire and meromorphic functions

A polynomial can prescribe finitely many zeros by multiplying linear factors. A rational function can prescribe finitely many poles and their principal parts by addition. Infinite prescriptions require a new ingredient: corrections which change global convergence without changing the desired local zeros or poles. Canonical factors correct products by exponentials; Taylor polynomials correct sums by subtraction. These two parallel constructions yield the Weierstrass and Mittag-Leffler theorems on the complex plane.

Preparation: [Laurent series and singularities](laurent-series-singularities.md), [Cauchy's integral formula](cauchy-integral-formula.md), [Normal families and the Riemann mapping theorem](normal-families-riemann-mapping.md), and [The Cauchy–Goursat theorem](cauchy-goursat.md). We use the locally uniform limit theorem, elementary estimates for absolutely convergent series, and global logarithms of nonvanishing entire functions. The scope is the plane. An arbitrary-domain Mittag-Leffler theorem requires additional approximation machinery, such as Runge's theorem, which is not assumed here.

## Discrete data and normal convergence
<a id="discrete-prescriptions"></a>

**Definition 17.1 (Discrete prescription).** A prescribed collection of zeros or poles in the plane is locally finite if every compact subset meets only finitely many prescribed points, counting finite multiplicities. An infinite such collection can be listed as \(a_n\), with \(|a_n|\to\infty\). Repeated entries can encode zero multiplicities, but each point appears only finitely often.

Local finiteness is necessary for a nonzero entire function's zeros, by the identity theorem, and for a meromorphic function's poles, by local meromorphy. It permits arbitrarily close points far out in the plane, but not a finite accumulation point. A prescription at \(1/n\) for every positive integer would force an entire function with those zeros to vanish identically; it cannot describe the zeros of a nonzero entire function.

A series of holomorphic functions converging uniformly on every compact subset has a holomorphic sum, by the limit theorem. To prove a product converges without accidentally producing zero everywhere, it is better to control logarithms of its tail. The following elementary observation supplies that control.

**Lemma 17.2 (Convergent product tails).** Suppose on an open set the functions \(L_n\) are holomorphic and \(\sum_n L_n\) converges uniformly on compact subsets. Then the products \(\prod_{n=1}^N e^{L_n}\) converge locally uniformly to \(\exp(\sum_nL_n)\), which is holomorphic and never zero. Finitely many additional holomorphic factors can be multiplied in; their zeros, with their multiplicities, are then exactly the zeros of the full product.

*Proof.* The sum is holomorphic by local uniform convergence. On a compact set its partial sums are uniformly bounded and converge uniformly. The exponential is uniformly continuous on a compact neighborhood of their values, or its integral difference formula bounds \(|e^u-e^v|\) by a constant times \(|u-v|\). Thus exponentiating preserves uniform convergence there. Exponentials never vanish. Multiplying by a finite product preserves convergence and makes its local vanishing order the sum of the finite factors' orders. ∎

This lemma avoids taking logarithms through a zero. In applications one chooses the tail so that its factors have logarithms on a fixed compact region, while any nearby zeros are carried by a finite initial product. Different compact sets may require different starting indices; that is fully compatible with local uniform convergence.

## Canonical factors
<a id="canonical-factor-estimate"></a>

**Definition 17.3 (Canonical factor).** For an integer \(p\ge0\), put
\[
E_p(w)=(1-w)\exp\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right),
\]
where the sum is empty for \(p=0\). The only zero is at \(w=1\), and it is simple, because the exponential factor never vanishes.

**Lemma 17.4 (Tail estimate).** For \(|w|\le1/2\), the logarithm determined near zero satisfies
\[
L_p(w)=\log E_p(w)=-\sum_{k=p+1}^\infty\frac{w^k}{k},
\qquad |L_p(w)|\le2|w|^{p+1}.
\]

*Proof.* The power series for \(\log(1-w)\) is \(-\sum_{k\ge1}w^k/k\) for \(|w|<1\), obtained by integrating the geometric series with value zero at zero. Adding the finite polynomial in the definition cancels its first \(p\) terms. The remaining modulus is at most \(\sum_{k\ge p+1}|w|^k\le2|w|^{p+1}\) on the indicated disk. Exponentiating gives \(E_p\), so this is a valid logarithm there. ∎

The correcting exponential does not move the zero at one. It makes the factor increasingly close to one near zero. Thus distant prescribed zeros contribute less and less on a fixed compact set, even if the uncorrected linear-factor product diverges. Allowing the correction degree to grow with the index makes it possible to handle every locally finite prescription, without a growth restriction.

## The plane Weierstrass theorem
<a id="weierstrass-product-proof"></a>

**Theorem 17.5 (Weierstrass product on the plane).** Given a locally finite collection of nonzero points \(a_n\), repeated according to positive finite multiplicities, and a nonnegative integer \(m\), there is an entire function whose zeros are exactly those points and zero with multiplicity \(m\). For an infinite collection, one possible product is
\[
P(z)=z^m\prod_{n=1}^\infty E_n(z/a_n).
\]
For a finite collection, use a finite product of linear factors. The factor \(z^0\) is one and prescribes no zero at zero.

*Proof.* Fix \(R>0\). Because \(|a_n|\to\infty\), for all sufficiently large \(n\) and \(|z|\le R\), \(|z/a_n|\le1/2\). Lemma 17.4 bounds the logarithm of the \(n\)th tail factor by \(2\cdot2^{-(n+1)}\). The geometric majorant makes the logarithm series uniformly convergent on that disk. Lemma 17.2 gives a holomorphic, nonvanishing tail limit there. Multiplication by the finitely many initial factors and \(z^m\) therefore gives uniform convergence of the product on the disk. Since \(R\) is arbitrary, the product is entire.

Near any fixed point, only finitely many prescribed zeros occur. Choose the tail beyond them; it is nonvanishing on a neighborhood by the logarithm representation. Each initial factor contributes exactly one zero at its own \(a_n\) and none elsewhere. Thus their repetitions produce exactly the prescribed multiplicities. At zero the factors all equal one and the tail is nonzero, so \(z^m\) gives precisely order \(m\). No additional zeros are possible. ∎

**Corollary 17.6 (Factorization of an entire function).** Every nonzero entire function \(f\) can be written \(f=e^gP\), where \(g\) is entire and \(P\) is a product of the type above with exactly the zeros of \(f\). If \(f\) has no zeros, it is \(e^g\).

*Proof.* The zero set is locally finite by the identity theorem. Construct \(P\) with the same multiplicities. The quotient \(f/P\), initially defined off the zeros, extends holomorphically across each zero by canceling equal powers in local factorizations. The extension is nonzero at those points and everywhere else. On the simply connected plane it has a global holomorphic logarithm \(g\). Hence \(f/P=e^g\). If there are no zeros take \(P=1\). ∎

This factorization is an existence statement, not a unique formula for the exponential term. Changing the canonical factors can move entire exponential contributions between \(P\) and \(e^g\). More restrictive growth assumptions can yield finite-genus products and polynomial exponents, but such refinements require additional theorems. Nothing here claims that \(g\) is a polynomial for an arbitrary entire function.

## Prescribing principal parts
<a id="mittag-leffler-plane-proof"></a>

**Theorem 17.7 (Mittag-Leffler on the plane).** Let \(a_n\) be distinct points forming a locally finite set in the plane. At each prescribe a finite principal part
\[
P_n(z)=\sum_{k=1}^{m_n}\frac{c_{n,k}}{(z-a_n)^k}.
\]
There is a meromorphic function on the plane with exactly these principal parts and no other poles. Any two such functions differ by an entire function.

*Proof.* A finite prescription is realized by \(\sum P_n\). In the infinite case separate a possible point at zero, which contributes a single finite principal part, and enumerate the remaining nonzero points so \(|a_n|\to\infty\). Put \(r_n=|a_n|/2\). Each \(P_n\) is holomorphic on \(|z|<|a_n|\); its Taylor polynomials at zero converge uniformly on \(|z|\le r_n\). Choose a polynomial \(Q_n\) with
\[
\sup_{|z|\le r_n}|P_n(z)-Q_n(z)|<2^{-n}.
\]
Set \(F=\sum_n(P_n-Q_n)\), adding the separated principal part if present.

On a fixed closed disk \(|z|\le R\), all sufficiently large \(n\) satisfy \(r_n\ge R\), so their terms are uniformly bounded by \(2^{-n}\). The tail therefore converges uniformly and is holomorphic on a neighborhood of that disk. Finitely many initial terms have only their specified poles. Near \(a_j\), remove the \(j\)th principal part: all remaining finite terms are holomorphic there, and a sufficiently late tail converges uniformly on a surrounding closed disk. Thus \(F-P_j\) is holomorphic near \(a_j\), exactly the required principal-part assertion. Away from the prescribed points the same argument proves holomorphy, so there are no other poles.

If \(F_1,F_2\) have the same principal parts, their difference has removable singularities at every prescribed point by cancellation of their finite negative Laurent terms. Filling them in makes the difference entire. ∎

Subtracting \(Q_n\) does not alter any principal part because a polynomial is entire. It does alter the global sum enough to make it converge. This is the additive analogue of the exponential correction in a canonical product. Neither construction promises that the naive uncorrected sum or product converges. Their purpose is to modify only the globally flexible holomorphic part while preserving the local singular information.

A principal part is finite because a meromorphic singularity is a pole. Prescribing an infinite negative Laurent tail would instead prescribe an essential singularity and is outside this theorem's statement. Likewise, allowing a finite accumulation of prescribed poles would conflict with meromorphy on the plane. The theorem's freedom is enormous, but it respects these necessary local restrictions.

## Two structural consequences
<a id="meromorphic-quotient-rational-sphere"></a>

**Proposition 17.8 (Quotient representation).** Every meromorphic function on the plane is a quotient of two entire functions, with denominator not identically zero.

*Proof.* Use the Weierstrass theorem to construct an entire \(h\) having exactly the poles of \(f\) as zeros, with matching orders. Then \(g=hf\) extends holomorphically at each pole: the zero of \(h\) cancels its negative local power. Away from the poles it is holomorphic. Thus \(g\) is entire and \(f=g/h\) in the meromorphic sense. If there are no poles take \(h=1\). ∎

**Proposition 17.9 (Sphere meromorphic functions are rational).** A meromorphic function on the Riemann sphere is rational.

*Proof.* Its poles form a locally finite set on a compact space, hence a finite set. Subtract the finitely many finite principal parts to obtain an entire function \(G\). It remains meromorphic at infinity because each subtracted rational term is meromorphic there. If infinity is removable, \(G\) is bounded outside a disk and hence bounded everywhere, so Liouville makes it constant. If infinity is a pole of order \(m\), its local Laurent description gives \(|G(z)|\le C|z|^m\) for sufficiently large \(|z|\). For each \(k>m\), Cauchy's estimate at zero gives \(|G^{(k)}(0)|/k!\le C R^{m-k}\) on large circles, tending to zero. Thus the Taylor coefficients above degree \(m\) vanish and \(G\) is a polynomial. Adding back the finite principal parts gives a rational function in either case. ∎

An entire transcendental function therefore has an essential singularity at infinity: infinity can be neither removable nor a pole, by the preceding growth argument. This observation concerns its classification at one sphere point; it does not assert Picard's value-distribution theorem, which is substantially deeper and is not needed for these constructions.

## Worked examples

### Example 17.10: An entire function with zeros at the positive integers

The prescription \(a_n=n\), each simple, is locally finite. The product
\[
P(z)=\prod_{n\ge1}(1-z/n)\exp\left(\sum_{k=1}^{n}\frac{z^k}{k n^k}\right)
\]
is entire and has exactly the positive integers as simple zeros. On \(|z|\le R\), all terms with \(n\ge2R\) have logarithms bounded by \(2(R/n)^{n+1}\le2^{-n}\), up to an immaterial constant at the first index. This directly exhibits the compact convergence.

The uncorrected product \(\prod(1-z/n)\) need not converge to a nonzero function; at a fixed negative real \(z=-c\), its logarithms are comparable to \(c/n\), whose sum diverges. The correction is therefore doing genuine work, not merely changing the notation of an already convergent product.

### Example 17.11: Simple poles with residue one at the integers \(n\ge1\)

For \(P_n(z)=1/(z-n)\), subtract its constant Taylor term \(Q_n=-1/n\). The corrected term is
\[
\frac1{z-n}+\frac1n=\frac{z}{n(z-n)}.
\]
On \(|z|\le R\) and \(n>2R\), its modulus is at most \(2R/n^2\). Therefore the sum converges locally uniformly away from the positive integers and defines a meromorphic function with a simple pole of residue one at each. This particular prescription needs only constant corrections rather than the variable-degree corrections in the general theorem.

At zero every corrected term vanishes, so the resulting function takes value zero there. Adding any entire function preserves all principal parts while changing that regular value. The prescribed singular data never uniquely determine the entire holomorphic part.

### Example 17.12: Zeros do not determine an entire function

The functions \(f(z)=z^2(z-1)e^z\) and \(g(z)=z^2(z-1)e^{z^2}\) have the same zeros with the same multiplicities: order two at zero and order one at one. Their quotient is \(e^{z-z^2}\), an entire nonvanishing function. They are not constant multiples because the exponent difference is not constant.

This finite example displays the general factorization freedom without infinite products. A zero prescription determines an entire function only up to multiplication by a zero-free entire function, and such factors are exponentials of arbitrary entire functions. Additional growth or normalization conditions are needed for stronger uniqueness.

## Exercises

### Exercise 17.1
<a id="entire-meromorphic-functions-ex-1"></a>
Explain why no nonzero entire function can have a zero at every \(1/n\), \(n\ge1\).
<details><summary>Hint 1</summary>
Locate a finite accumulation point.
</details>
<details><summary>Hint 2</summary>
The identity theorem applies even if zero itself was not explicitly prescribed.
</details>
<details><summary>Solution</summary>
The zeros accumulate at zero, an interior point of the plane. The identity theorem forces an entire function with these zeros to be identically zero. Thus this is not a locally finite prescription for a nonzero function.
</details>

### Exercise 17.2
<a id="entire-meromorphic-functions-ex-2"></a>
Find the first nonzero Taylor term of \(E_1(w)-1\).
<details><summary>Hint 1</summary>
Multiply \((1-w)e^w\) through degree two.
</details>
<details><summary>Hint 2</summary>
The linear terms cancel.
</details>
<details><summary>Solution</summary>
Using \(e^w=1+w+w^2/2+O(w^3)\), one gets \(E_1(w)=1-w^2/2+O(w^3)\). Thus the first nonzero term of the difference is \(-w^2/2\), consistent with its logarithm beginning at degree two.
</details>

### Exercise 17.3
<a id="entire-meromorphic-functions-ex-3"></a>
Show that \(\prod_{n\ge1}(1-z/2^n)\) already converges locally uniformly and has simple zeros exactly at \(2^n\).
<details><summary>Hint 1</summary>
For a fixed compact disk, take a tail with \(|z/2^n|\le1/2\).
</details>
<details><summary>Hint 2</summary>
The logarithm bound for \(p=0\) is summable here.
</details>
<details><summary>Solution</summary>
On \(|z|\le R\), the tail logarithms satisfy \(|\log(1-z/2^n)|\le2R/2^n\). Their sum converges uniformly. The logarithm lemma makes the tail nonvanishing, while the finite initial product supplies exactly the stated simple zeros. No exponential corrections are necessary for this faster-growing zero sequence.
</details>

### Exercise 17.4
<a id="entire-meromorphic-functions-ex-4"></a>
Prove that a zero-free entire function has an entire logarithm, and explain why the statement fails on the punctured plane.
<details><summary>Hint 1</summary>
Use the simply connected logarithm theorem on the plane.
</details>
<details><summary>Hint 2</summary>
For failure elsewhere take the function \(z\) itself.
</details>
<details><summary>Solution</summary>
The plane is simply connected, so a nonvanishing entire \(f\) has a holomorphic logarithm \(g\) with \(f=e^g\). On the punctured plane the zero-free function \(z\) has no global logarithm, since a hypothetical logarithm would have derivative \(1/z\), whose unit-circle integral is nonzero. The domain hypothesis is essential.
</details>

### Exercise 17.5
<a id="entire-meromorphic-functions-ex-5"></a>
If entire \(f,g\) have identical zero multiplicities, prove \(f/g=e^h\) for an entire \(h\), assuming neither function is identically zero.
<details><summary>Hint 1</summary>
Cancel their local zero powers.
</details>
<details><summary>Hint 2</summary>
The extended quotient is zero-free on the plane.
</details>
<details><summary>Solution</summary>
At every common zero the quotient extends as a quotient of nonvanishing local factors, so it is entire and nonzero there. Away from zeros it is also nonzero and holomorphic. The global logarithm theorem gives an entire \(h\) whose exponential equals the quotient.
</details>

### Exercise 17.6
<a id="entire-meromorphic-functions-ex-6"></a>
Construct a meromorphic function with double poles at the positive integers and principal parts \(1/(z-n)^2\), without polynomial corrections.
<details><summary>Hint 1</summary>
Test the naive sum on a fixed compact disk.
</details>
<details><summary>Hint 2</summary>
For \(n>2R\), \(|z-n|\ge n/2\).
</details>
<details><summary>Solution</summary>
The sum \(\sum_{n\ge1}(z-n)^{-2}\) has tails bounded by \(\sum4/n^2\) on \(|z|\le R\). It converges locally uniformly away from the poles. Near a fixed positive integer, subtract its single summand; the rest is holomorphic there by the same tail argument. Hence the stated principal parts and no others occur.
</details>

### Exercise 17.7
<a id="entire-meromorphic-functions-ex-7"></a>
Why do Taylor polynomial corrections in Mittag-Leffler leave every prescribed residue unchanged?
<details><summary>Hint 1</summary>
A polynomial has no negative Laurent powers at a finite point.
</details>
<details><summary>Hint 2</summary>
The residue is the inverse first-power coefficient.
</details>
<details><summary>Solution</summary>
Subtracting an entire polynomial changes only nonnegative local Taylor terms at each point. It cannot change any finite principal part, including its inverse first-power coefficient. The correction ensures convergence while leaving the residue and every higher negative coefficient intact.
</details>

### Exercise 17.8
<a id="entire-meromorphic-functions-ex-8"></a>
Prove that two plane meromorphic functions with the same principal parts differ by an entire function.
<details><summary>Hint 1</summary>
Subtract their Laurent expansions at each pole.
</details>
<details><summary>Hint 2</summary>
All negative powers cancel.
</details>
<details><summary>Solution</summary>
The difference is holomorphic away from the poles. At each prescribed pole its Laurent expansion has no negative terms, so the singularity is removable. Filling every such point gives an entire function. Local finiteness ensures these local fillings do not conflict or create a finite accumulation problem.
</details>

### Exercise 17.9
<a id="entire-meromorphic-functions-ex-9"></a>
Show that an entire function satisfying \(|f(z)|\le C(1+|z|)^m\), with integer \(m\ge0\), is a polynomial of degree at most \(m\).
<details><summary>Hint 1</summary>
Apply Cauchy's coefficient estimate on radius \(R\).
</details>
<details><summary>Hint 2</summary>
For a coefficient of degree \(k>m\), send \(R\) to infinity.
</details>
<details><summary>Solution</summary>
Its \(k\)th Taylor coefficient satisfies \(|a_k|\le C(1+R)^m/R^k\). For \(k>m\) the right-hand side tends to zero, so \(a_k=0\). All higher coefficients vanish and the Taylor expansion is the required polynomial.
</details>

### Exercise 17.10
<a id="entire-meromorphic-functions-ex-10"></a>
Classify the singularity at infinity of \(e^z\).
<details><summary>Hint 1</summary>
Use the coordinate \(w=1/z\).
</details>
<details><summary>Hint 2</summary>
Its Laurent expansion has infinitely many negative powers.
</details>
<details><summary>Solution</summary>
In the infinity coordinate the function is \(e^{1/w}=\sum_{n\ge0}w^{-n}/n!\). The principal part is infinite, so the isolated singularity at \(w=0\), hence at infinity, is essential. This also follows because the function is entire and not a polynomial.
</details>

### Exercise 17.11
<a id="entire-meromorphic-functions-ex-11"></a>
Construct a nonzero entire function with zeros of order \(n\) at each positive integer \(n\).
<details><summary>Hint 1</summary>
Encode multiplicities by repeating entries in the zero list.
</details>
<details><summary>Hint 2</summary>
Every bounded disk still contains only finitely many repeated entries.
</details>
<details><summary>Solution</summary>
List the integer one once, two twice, three three times, and so on. This repeated sequence tends in modulus to infinity because only finitely many entries lie below any bound. Apply the canonical-product theorem to that list with no zero at zero. The resulting entire function has exactly the requested multiplicities and is not identically zero because its tail is locally nonvanishing away from the prescribed zeros.
</details>

### Exercise 17.12
<a id="entire-meromorphic-functions-ex-12"></a>
Explain why the plane proof of Mittag-Leffler does not directly prove the theorem on an arbitrary open domain with poles accumulating at its boundary.
<details><summary>Hint 1</summary>
Inspect the expanding centered disks used in the correction construction.
</details>
<details><summary>Hint 2</summary>
The pole moduli may stay bounded even though they escape all compact subsets of the domain.
</details>
<details><summary>Solution</summary>
On the plane, local finiteness forces pole moduli to tend to infinity, so the Taylor approximation disks eventually contain any fixed compact set. In a bounded domain poles can approach a finite boundary point; their moduli need not diverge, and centered Taylor disks need not exhaust the domain. A more flexible approximation theorem is needed to construct corrections there. The proof supplied here therefore establishes the plane theorem only.
</details>

## Worked example: prescribing poles without an uncorrected sum

Prescribe a simple pole of residue one at each positive integer. The formal sum \(\sum_{n\ge1}1/(z-n)\) cannot converge as written: at any fixed \(z\) away from the integers its terms behave like \(-1/n\), and the harmonic divergence remains. Subtract the constant Taylor term at zero instead, giving
\[
 F(z)=\sum_{n=1}^\infty\left(\frac1{z-n}+\frac1n\right).
\]
For \(|z|\le R\) and \(n>2R\), the summand is \(z/[n(z-n)]\), whose modulus is at most \(2R/n^2\). The tail therefore converges uniformly on the disk. Near any fixed positive integer, its own summand has principal part \(1/(z-n)\), while the other terms form a holomorphic function locally. Thus \(F\) is meromorphic with exactly the prescribed simple poles and residues. The corrections \(1/n\) are entire constants; they repair convergence without changing any principal part.

Adding an arbitrary entire function to \(F\) gives another solution with the same pole data. Conversely, two solutions with identical principal parts differ by an entire function after their removable differences are filled in. Local singular information therefore determines a meromorphic function only up to an entire summand. That freedom is the additive counterpart of the zero-free exponential factor in a Weierstrass product.

## Sources

Original exposition and exercises. The plane canonical-factor and principal-part constructions can be compared with Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), especially its Weierstrass factorization chapter. The arbitrary-domain approximation extensions are deliberately not asserted without their additional proofs.

## Summary

Locally finite zero data are realized by canonical products, whose exponential corrections force logarithmic tail convergence. Locally finite pole data are realized by Taylor-corrected sums, which preserve principal parts while making tails converge. Entire functions with the same zeros differ by a zero-free entire factor, hence an exponential. Every plane meromorphic function is an entire quotient, whereas sphere meromorphic functions are rational. The final chapter applies holomorphic integration and continuation to two central special functions.
