
# Reed–Solomon Codes

Preparation is finite-field polynomial interpolation, Chapter 2’s duality and Chapter 5’s root viewpoint. Evaluation points are distinct, multipliers are nonzero, and error decoding assumes $2t+e\le n-k$.

## Evaluation rather than coefficient constraints

Fix distinct points $a_1,\ldots,a_n$ in $\mathbb F_q$, nonzero multipliers $v_1,\ldots,v_n$, and an integer $1\le k\le n\le q$. The generalised Reed–Solomon code is
$$
\operatorname{GRS}_k(a,v)
=\{(v_1f(a_1),\ldots,v_nf(a_n)):\deg f<k\}.
$$
Messages are the $k$ coefficients of $f$. The code is linear because evaluation and multiplication by fixed scalars are linear.

A nonzero polynomial of degree below $k$ has at most $k-1$ roots. It therefore cannot vanish at all $n$ distinct evaluation points, so encoding is injective and the code has dimension $k$.

This evaluation definition works for arbitrary distinct field points, including zero. It is not identical by definition to every cyclic BCH presentation. We prove the precise full-length cyclic connection later instead of silently interchanging the two conventions.

## Exact distance and the MDS property

**Theorem 6.1.** A generalised Reed–Solomon code with the stated parameters has minimum distance $n-k+1$.

**Proof.** A nonzero $f$ of degree below $k$ vanishes on at most $k-1$ evaluation points. Nonzero multipliers preserve whether a coordinate is zero, so every nonzero word has weight at least $n-k+1$.

For equality, choose any $k-1$ evaluation points and take $f(x)$ to be the product of their linear factors. For $k=1$, use the empty product one. The polynomial vanishes exactly at those selected points and nowhere else among the evaluation set. Its codeword has weight $n-k+1$. ∎

The code therefore meets Singleton’s bound and is maximum distance separable. In particular, any $k$ unerased coordinates determine the message: divide out their multipliers and interpolate a degree-below-$k$ polynomial. A smaller set generally cannot determine all $k$ coefficients.

The distance theorem gives unique correction whenever $2t+e<n-k+1$, or equivalently $2t+e\le n-k$. The equality of these integer formulations is useful when allocating an error-and-erasure budget.

## Lagrange interpolation is a decoding proof

For distinct points $b_1,\ldots,b_k$ and values $z_1,\ldots,z_k$, the polynomial
$$
f(x)=\sum_{i=1}^kz_i
\prod_{j\ne i}\frac{x-b_j}{b_i-b_j}
$$
has degree below $k$ and takes the required values. Every denominator is nonzero because the points are distinct.

Uniqueness follows because the difference of two possible polynomials would have degree below $k$ and at least $k$ roots. Thus an erasure decoder needs no probabilistic argument: use any $k$ known-correct positions, divide by $v_i$, and interpolate.

If unmarked errors are present among those positions, interpolation still produces a polynomial but need not produce the transmitted one. A formula that always returns a result is not automatically an error-correcting algorithm. The next argument supplies the missing robustness under a stated error budget.

## A bounded-error decoder by a linear system

Assume at most $t$ of the received coordinates are corrupted and $2t\le n-k$. Divide by the nonzero multipliers to obtain $z_i=y_i/v_i$. Seek a monic polynomial $E$ of degree exactly $t$ and a polynomial $N$ with $\deg N<k+t$ satisfying
$$
N(a_i)=z_iE(a_i)\qquad(1\le i\le n).
$$
The unknowns are the $t$ lower coefficients of $E$ and the $k+t$ coefficients of $N$, so this is a system of $n$ linear equations in $k+2t$ unknowns over the field.

**Existence.** Let the true error set have size $s\le t$. Its locator $\prod_{i\ {\rm erroneous}}(x-a_i)$ has degree $s$. Multiply it by any monic polynomial of degree $t-s$ to obtain a monic degree-$t$ polynomial $E_0$. Then $N_0=fE_0$ has degree below $k+t$ and satisfies every equation: at good positions $z_i=f(a_i)$, and at bad positions both sides vanish.

**Correctness of every solution.** At each good position, $N(a_i)-f(a_i)E(a_i)=0$. This polynomial has degree at most $k+t-1$ and at least $n-s\ge n-t\ge k+t$ roots. It must be zero. Hence $N=fE$ as polynomials, and division recovers the true $f$.

The monic normalisation prevents the useless all-zero pair. Solutions need not be unique in $E$ when fewer than $t$ errors occur, but every solution has the same quotient. This is the Berlekamp–Welch decoding argument, including the case of fewer errors than the chosen budget.

## What to do outside the guaranteed radius

The linear equations may be inconsistent outside the radius. Even if they have a solution, the quotient might fail to be a polynomial of the required degree. A mathematically specified decoder returns failure in those cases.

If a suitable polynomial quotient is found, compare its encoded word with the received word and require at most $t$ mismatches. That requirement certifies a codeword within the chosen radius. It does not certify that the physical channel made at most $t$ errors relative to the unknown transmitted word; beyond the guaranteed model a different nearby codeword can be returned.

The proof above guarantees success only when the true word is in the code and the actual error count respects the budget. These hypotheses cannot be inferred solely from the existence of a plausible output.

With erasures, remove their positions and run the same construction on the remaining evaluation set. It remains a Reed–Solomon code with the same message degree bound, provided at least $k$ coordinates remain. The condition becomes $2t+e\le n-k$, exactly matching the distance theorem.

## The dual is another generalised evaluation code

Let $P(x)=\prod_{i=1}^n(x-a_i)$ and define
$$
w_i=\frac1{v_iP'(a_i)}.
$$
Each denominator is nonzero since $P'(a_i)=\prod_{j\ne i}(a_i-a_j)$. Then
$$
\operatorname{GRS}_k(a,v)^\perp
=\operatorname{GRS}_{n-k}(a,w).
$$
For $k=n$, the right side means the zero code.

To prove orthogonality, take $\deg f<k$ and $\deg g<n-k$. Their coordinate pairing is
$$
\sum_i\frac{f(a_i)g(a_i)}{P'(a_i)}.
$$
The product polynomial has degree at most $n-2$. Lagrange interpolation on all $n$ points shows that the coefficient of $x^{n-1}$ in that product is the displayed sum, because each Lagrange basis polynomial has leading coefficient $1/P'(a_i)$. That coefficient is zero.

Thus the proposed dual is contained in the actual dual and has the same dimension $n-k$. Equality follows. A parity-check matrix therefore has entries $w_i a_i^j$ for $j=0,\ldots,n-k-1$.

The multipliers matter. Writing the dual with the original multipliers without the derivative factors generally gives the wrong checks, even though the two codes may share similar parameter formulas.

## The full-length cyclic presentation

Let $n=q-1$, choose a primitive element $\alpha$ of $\mathbb F_q$, and use evaluation points $\alpha^i$ for $i=0,\ldots,n-1$ with all multipliers one. For $c_i=f(\alpha^i)$, form the coefficient polynomial $c(x)=\sum_i c_ix^i$.

For $j=1,\ldots,n-k$,
$$
c(\alpha^j)=\sum_{r=0}^{k-1}f_r\sum_{i=0}^{n-1}\alpha^{i(r+j)}=0.
$$
The inner geometric sum vanishes because $1\le r+j\le n-1$, so its ratio is not one but its $n$th power is one. Therefore the evaluation code lies in the cyclic code with roots $\alpha,\ldots,\alpha^{n-k}$.

Those roots are already in the base field, so the cyclic generator is their product and has degree $n-k$. Its code has dimension $k$, giving equality of the two subspaces. This proves the conventional Reed–Solomon-as-BCH connection under exact evaluation and coefficient-order conventions.

An arbitrary punctured or rescaled evaluation code need not be cyclic in its displayed coordinate order. It remains MDS because the root-count proof is independent of cyclicity.

## A projective extension and length limits

Ordinary evaluation at distinct field elements allows at most $q$ coordinates. One can add a point at infinity, evaluating a degree-below-$k$ polynomial there by its coefficient of $x^{k-1}$. On all $q$ finite points plus infinity, this gives an extended code of length $q+1$, for $1\le k\le q+1$.

If the top coefficient is nonzero, infinity is not a zero and the finite polynomial has at most $k-1$ zeros. If the top coefficient is zero, infinity contributes one zero while finite degree is at most $k-2$, again giving at most $k-1$ total zeros. Thus the same MDS distance lower bound holds, and Singleton supplies equality once injectivity is observed by the same zero bound.

This extension explains a common difference between length conventions. It does not establish a classification of all MDS codes or allow an unlimited number of distinct evaluation points over a fixed field.

## Computational and modelling limits

Straight Gaussian elimination solves the decoder’s field system using at most a cubic-order number of field operations when dimensions are of order $n$. This is a field-operation count; representing a field element and performing its arithmetic also have a cost.

A field symbol may represent a byte or a larger packet. A “single-symbol error” can therefore change many binary bits. The metric counts corrupted symbols under the declared grouping, not the number of flipped physical bits. Interleaving and packet framing affect how the physical noise maps into that model.

The decoder proof is exact algebra. No floating-point least-squares approximation is appropriate for a finite-field consistency problem, and no numerical execution is claimed here.

## Systematic evaluation encoding

Any chosen $k$ evaluation positions form an information set. To make those transmitted coordinates equal a desired message tuple $(m_1,\ldots,m_k)$, interpolate the polynomial with values $f(a_i)=m_i/v_i$ on the chosen positions. Then evaluate it at all remaining points and multiply by their specified multipliers.

If $L_i$ are the Lagrange basis polynomials for that information set, the resulting coordinates are
$$
c_j=v_j\sum_{i=1}^k(m_i/v_i)L_i(a_j).
$$
For a chosen message position $j$, the interpolation identity gives $c_j=m_j$. The other positions are fixed linear combinations and provide parity redundancy.

This changes the message basis rather than the set of codewords. Thus systematic encoding preserves dimension, distance and all decoder guarantees. It can be convenient for storage, where unchanged data symbols and separately stored parity symbols have different operational roles, without claiming that systematic form improves the code’s intrinsic distance.

## Worked example 6.1: A line over five elements

Take evaluation points $0,1,2,3$ in $\mathbb F_5$, $k=2$ and $f=1+2x$. The codeword is $(1,3,0,2)$. The code has parameters $[4,2,3]$. If only positions at zero and three survive, values one and two give slope $(2-1)/(3-0)=1/3=2$ in the field and intercept one. Thus two erasures are recoverable from any two surviving coordinates, with exact finite-field division.

## Worked example 6.2: Two errors in a constant code

Over $\mathbb F_5$, use all five field points and $k=1$. Send constant $f=2$, but receive $(2,3,2,4,2)$. The two error locations are one and three. A locator is $E=(x-1)(x-3)=x^2+x+3$, and $N=2E=2x^2+2x+1$. The equations $N(a_i)=z_iE(a_i)$ hold at good positions by equality of values and at bad positions because $E$ vanishes. Dividing gives the original constant. Here $k+2t=5=n$, exactly the guaranteed boundary.

## Worked example 6.3: A dual check with derivative weights

Use points $0,1,2$ over $\mathbb F_5$ and $k=2$, all multipliers one. The products $P'(a_i)$ are $2,4,2$, whose inverses are $3,4,3$. Thus $(3,4,3)$ generates the one-dimensional dual. Its pairing with evaluation of one is $3+4+3=0$, and with evaluation of $x$ is $0+4+6=0$ modulo five. These two independent message polynomials span the primal code, proving the displayed check annihilates it.

## Shortening has an explicit evaluation description

Choose a set of fewer than $k$ evaluation coordinates and require their transmitted symbols to be zero before deleting them. Since all coordinate multipliers are nonzero, the message polynomial must vanish at the chosen evaluation points.

It is therefore divisible by the product of their linear factors. Write it as that product times a new polynomial of degree below the original dimension minus the number of shortened positions. Conversely every such new polynomial gives a valid shortened word.

At each surviving evaluation point, the factor product is nonzero. It can be absorbed into the existing nonzero coordinate multiplier. Thus the shortened code is another generalised Reed–Solomon code on the surviving points, with both length and dimension reduced by the number of shortened positions.

Its exact minimum distance stays the same. This follows either from the new MDS formula or directly by choosing the remaining polynomial to vanish at enough additional surviving points. The construction provides an explicit basis and multipliers, rather than merely a lower dimension bound from generic shortening.

Puncturing without forcing zeros is different. If at least $k$ evaluation points remain, the same degree-below-$k$ polynomials still encode injectively, and distance decreases by the number punctured. When fewer than $k$ points remain, interpolation can attain every remaining value tuple, so the image has the full remaining dimension and distance one.

These formulas locate exactly where the common shorthand “puncturing preserves dimension” stops being valid. It is correct only while enough distinct evaluation points remain for polynomial injectivity.

They also clarify an implementation convention. A shortened decoder can restore known zeros in those coordinates and use the original algebraic code, while a punctured decoder restores erasures. Treating the known zeros as unknown erasures wastes information; treating punctured unknown values as known zeros changes the received-word model.

The same field and original point identities must be retained in either embedding. A coordinate deletion is not a licence to reindex error locations by their displayed array position and silently change which evaluation point a syndrome refers to.

## Expanding extension-field symbols into smaller-field coordinates

Suppose a code over a field with q to the m elements has length n and dimension k over that extension field. Choose a basis of the extension over its q-element subfield and expand each symbol into its m coordinates. The expansion is a linear bijection from each symbol space to the m-dimensional smaller-field vector space. The expanded code has length m n and dimension m k over the smaller field, so its rate remains k divided by n.

Every nonzero symbol expands to at least one and at most m nonzero coordinates. Consequently the expanded minimum Hamming distance is at least the original symbol distance and at most m times it. An extension-field Reed–Solomon code meeting the symbol-level Singleton bound therefore need not meet the smaller-field Singleton bound after expansion. Error models must also distinguish a corrupted extension symbol from independent coordinate-bit corruptions. The basis expansion preserves linear information but not the unit in which channel errors are counted, which is why symbol-error correction guarantees should not be silently relabelled as bit-error guarantees.

## Exercises

### Exercise 6.1
<a id="reed-solomon-codes-ex-1"></a>

Prove evaluation encoding is injective.

<details>
<summary>Hint 1</summary>

A nonzero degree-below-$k$ polynomial has at most $k-1$ roots.

</details>
<details>
<summary>Hint 2</summary>

There are at least $k$ distinct evaluation points.

</details>
<details>
<summary>Solution</summary>

If two message polynomials had the same codeword, their difference would vanish at every point because all multipliers are nonzero. Its degree is below $k$ and it has at least $k$ distinct roots, so it is zero. Hence the two messages coincide.

</details>

### Exercise 6.2
<a id="reed-solomon-codes-ex-2"></a>

Give a word attaining the Reed–Solomon minimum distance.

<details>
<summary>Hint 1</summary>

Choose $k-1$ evaluation points.

</details>
<details>
<summary>Hint 2</summary>

Multiply their linear factors.

</details>
<details>
<summary>Solution</summary>

The polynomial product over those points has degree $k-1$ and vanishes exactly there among the evaluation set. Its codeword has $n-(k-1)$ nonzero positions. Together with the root-count lower bound this proves distance $n-k+1$.

</details>

### Exercise 6.3
<a id="reed-solomon-codes-ex-3"></a>

Why do nonzero multipliers not alter the distance proof?

<details>
<summary>Hint 1</summary>

They cannot create or remove a zero evaluation.

</details>
<details>
<summary>Hint 2</summary>

They rescale each coordinate independently.

</details>
<details>
<summary>Solution</summary>

A coordinate $v_if(a_i)$ is zero exactly when $f(a_i)=0$ because $v_i\ne0$. Thus every word’s weight is unchanged relative to the unscaled evaluation word, and all minimum-distance conclusions persist.

</details>

### Exercise 6.4
<a id="reed-solomon-codes-ex-4"></a>

Why may the decoder fix locator degree $t$ when the actual error count is smaller?

<details>
<summary>Hint 1</summary>

Multiply the true locator by a monic padding polynomial.

</details>
<details>
<summary>Hint 2</summary>

The zero conditions at actual errors remain.

</details>
<details>
<summary>Solution</summary>

If the true count is $s<t$, multiply its degree-$s$ locator by any monic degree-$t-s$ polynomial. Taking numerator $fE$ then satisfies all equations. The correctness proof shows every solution still has quotient $f$, even though the padded locator is not unique.

</details>

### Exercise 6.5
<a id="reed-solomon-codes-ex-5"></a>

Explain the root count in correctness of Berlekamp–Welch.

<details>
<summary>Hint 1</summary>

Use only the genuinely correct received positions.

</details>
<details>
<summary>Hint 2</summary>

Compare their number with the polynomial degree.

</details>
<details>
<summary>Solution</summary>

The polynomial $N-fE$ has degree at most $k+t-1$ and vanishes at at least $n-s\ge n-t\ge k+t$ distinct points. Therefore it is zero. The strict excess of root count over degree is exactly where the error budget is used.

</details>

### Exercise 6.6
<a id="reed-solomon-codes-ex-6"></a>

How does erasure removal change the decoding inequality?

<details>
<summary>Hint 1</summary>

The remaining length is $n-e$.

</details>
<details>
<summary>Hint 2</summary>

Keep the same message degree bound.

</details>
<details>
<summary>Solution</summary>

Run the decoder on the $n-e$ surviving evaluation points. Its condition is $2t\le(n-e)-k$, equivalent to $2t+e\le n-k$. The remaining points must still be distinct and at least $k$ in number.

</details>

### Exercise 6.7
<a id="reed-solomon-codes-ex-7"></a>

Derive the dual multiplier formula.

<details>
<summary>Hint 1</summary>

Apply Lagrange interpolation to a polynomial of degree at most $n-2$.

</details>
<details>
<summary>Hint 2</summary>

Its coefficient of degree $n-1$ is zero.

</details>
<details>
<summary>Solution</summary>

The leading-coefficient identity is $\sum_i h(a_i)/P'(a_i)=0$. With $h=fg$, primal multiplier $v_i$ and dual multiplier $w_i$ must satisfy $v_iw_i=1/P'(a_i)$. Hence $w_i=[v_iP'(a_i)]^{-1}$. Dimension then identifies the full dual.

</details>

### Exercise 6.8
<a id="reed-solomon-codes-ex-8"></a>

Why is ordinary evaluation length limited by $q$?

<details>
<summary>Hint 1</summary>

Evaluation points must be distinct field elements.

</details>
<details>
<summary>Hint 2</summary>

There are only $q$ such elements.

</details>
<details>
<summary>Solution</summary>

Repeated points would duplicate evaluation constraints and invalidate the stated root-count dimension and distance argument. The ordinary construction has at most $q$ points. Adding a projective infinity coordinate is a separate explicitly defined extension.

</details>

### Exercise 6.9
<a id="reed-solomon-codes-ex-9"></a>

Does an arbitrary punctured evaluation code remain cyclic?

<details>
<summary>Hint 1</summary>

Cyclic shift depends on coordinate ordering and the whole evaluation set.

</details>
<details>
<summary>Hint 2</summary>

MDS distance does not require that symmetry.

</details>
<details>
<summary>Solution</summary>

Not generally. Puncturing can destroy the full multiplicative evaluation cycle, and nonuniform multipliers can also change displayed shift invariance. The evaluation root-count proof still gives the corresponding MDS parameters on the retained distinct points.

</details>

### Exercise 6.10
<a id="reed-solomon-codes-ex-10"></a>

Why should a finite-field decoder not use floating-point least squares?

<details>
<summary>Hint 1</summary>

Its equations are exact in a finite field.

</details>
<details>
<summary>Hint 2</summary>

Real arithmetic has different addition, multiplication and zero tests.

</details>
<details>
<summary>Solution</summary>

The consistency and polynomial identities use the declared field operations. Treating residues as real numbers changes the system and can return values unrelated to a codeword. Exact field linear algebra supplies the proved decoder; numerical approximation is not a substitute.

</details>

## Summary

Generalised Reed–Solomon evaluation codes meet Singleton by the polynomial root bound. Lagrange interpolation recovers erasures, and the Berlekamp–Welch linear system corrects bounded errors with an explicit every-solution proof. Derivative weights identify the dual, and geometric sums establish the exact full-length cyclic connection.
