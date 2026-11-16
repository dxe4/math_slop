
# Weight Enumerators and MacWilliams Identities

Preparation is Chapter 2’s finite-field duality, finite group sums, polynomial coefficients and elementary likelihood bounds. The MacWilliams theorem is for field-linear codes; symmetric-channel applications state their additional probability law.

## Counting words by weight

For a linear code $C\subseteq\mathbb F_q^n$, let $A_i$ be the number of words of weight $i$. Its homogeneous weight enumerator is
$$
W_C(X,Y)=\sum_{i=0}^nA_iX^{n-i}Y^i.
$$
The coefficients are nonnegative integers, $A_0=1$, and $\sum_iA_i=|C|=q^k$. Minimum distance is the smallest positive index with nonzero coefficient.

The weight enumerator forgets which positions are nonzero and which field values appear. Non-equivalent codes can share it. Nevertheless it contains more metric information than minimum distance alone and is enough for several channel probability bounds.

We prove the MacWilliams identity through additive characters. The proof handles every finite field and makes the normalising factor explicit. The subsequent consequences distinguish an exact algebraic identity from a code classification or a decoder performance equality.

## Additive characters without a hidden trace assumption

Write $q=p^m$ and choose a nonzero $\mathbb F_p$-linear functional $\ell:\mathbb F_q\to\mathbb F_p$. Define
$$
\chi(a)=\exp(2\pi i\,\ell(a)/p).
$$
Then $\chi(a+b)=\chi(a)\chi(b)$ and the character is nontrivial. Its sum over the additive field group is zero: choose $b$ with $\chi(b)\ne1$; translating the sum multiplies it by $\chi(b)$ while leaving the index set unchanged, forcing the sum to vanish.

For any nonzero $u$, multiplication by $u$ permutes the field, so $\sum_a\chi(ua)=0$. Omitting $a=0$ therefore gives $\sum_{a\ne0}\chi(ua)=-1$.

No complex approximation is involved. These are finite exact character sums. The field can be represented by a basis over its prime field; a trace character is a standard alternative, but its extra formula is unnecessary for this proof.

## Orthogonality over a linear subspace

For a word $v\in\mathbb F_q^n$,
$$
\frac1{|C|}\sum_{c\in C}\chi(c\cdot v)
=1_{\{v\in C^\perp\}}.
$$
If $v\in C^\perp$, every summand is one. If not, some $c_0\in C$ has $c_0\cdot v=a\ne0$. Since scalar multiples of $c_0$ remain in $C$ and multiplication by $a$ ranges over the field, one such multiple has nontrivial character value.

Translating the sum by that codeword multiplies it by a factor different from one and leaves the sum unchanged as a permutation of $C$. Hence the sum is zero.

The scalar-closure step matters. The orthogonal complement here uses the full field pairing, while the character sees one prime-field functional. Linearity over $\mathbb F_q$ bridges those notions. An arbitrary nonlinear subset does not satisfy this averaging identity.

## MacWilliams’ identity

**Theorem 9.1.**
$$
W_{C^\perp}(X,Y)
=\frac1{|C|}W_C(X+(q-1)Y,\ X-Y).
$$

**Proof.** Insert the subspace indicator into the sum over all ambient words:
$$
W_{C^\perp}(X,Y)
=\frac1{|C|}\sum_{c\in C}\sum_{v\in\mathbb F_q^n}
\chi(c\cdot v)X^{n-\operatorname{wt}(v)}Y^{\operatorname{wt}(v)}.
$$
The inner sum factors over coordinates. If $c_i=0$, its factor is $X+(q-1)Y$. If $c_i\ne0$, the nonzero-symbol character sum is $-1$, giving factor $X-Y$.

A word $c$ of weight $i$ therefore contributes $(X+(q-1)Y)^{n-i}(X-Y)^i$. Summing by weight gives exactly the claimed substitution. ∎

This is a polynomial identity, so it holds for formal variables and needs no convergence assumptions. The apparent complex numbers disappeared through exact orthogonality. The output coefficients count dual codewords and must be nonnegative integers.

The normalisation is $|C|$, not $|C^\perp|$. Applying the transform in the reverse direction uses the latter. Their product is $q^n$, consistent with the linear substitution applied twice giving $(qX,qY)$.

## Coefficients and Krawtchouk polynomials

Let $B_j$ be the dual weight counts. Expanding the substitution gives
$$
B_j=\frac1{|C|}\sum_{i=0}^nA_iK_j(i),
$$
where
$$
K_j(i)=\sum_{s=0}^j(-1)^s(q-1)^{j-s}
\binom is\binom{n-i}{j-s},
$$
with binomial coefficients outside their range taken as zero.

Each term chooses $s$ factors of $Y$ from the $i$ factors $(X-Y)$ and the remaining $j-s$ from the other factors. This coefficient derivation fixes the sign and power conventions.

In particular $K_0(i)=1$ and $K_1(i)=(q-1)n-qi$. The equation $B_0=1$ recovers the code-size sum. If the dual has no weight-one word, $B_1=0$ gives the familiar average-weight identity.

A proposed weight sequence must satisfy positivity, integrality, size and all these dual conditions. They can rule out parameters or distributions that pass simpler counts. Passing them still need not prove a code exists; they are necessary algebraic constraints.

## Projection moments and dual distance

A coordinate is active if some codeword has a nonzero symbol there. Its projection is then a nonzero linear functional, hence surjective onto $\mathbb F_q$, with equally sized fibres. Thus a fraction $(q-1)/q$ of codewords are nonzero at that coordinate.

If every coordinate is active,
$$
\sum_i iA_i=|C|n\frac{q-1}{q}.
$$
An inactive coordinate corresponds exactly to a weight-one dual word on that position.

More generally, if dual distance exceeds $s$, projection onto any $s$ distinct coordinates is surjective. Otherwise a nonzero linear functional on the image’s proper subspace would give a dual word supported on those coordinates. Surjective linear maps have equal-size fibres, so the projection is uniform under a uniform codeword.

For $s=2$, the two-coordinate nonzero probability is $((q-1)/q)^2$. Counting ordered nonzero-position pairs gives
$$
\sum_i i(i-1)A_i=|C|n(n-1)\left(\frac{q-1}{q}\right)^2.
$$
These moments supplied the Golay enumerator derivation in Chapter 3. They do not require enumerating every word.

## Undetected-error probability on a symmetric channel

Suppose independent coordinate errors leave a symbol unchanged with probability $1-p$ and add each nonzero field value with probability $p/(q-1)$. For any transmitted codeword, an error is undetected by membership testing precisely when the error word belongs to $C$.

Including the zero error, that probability is
$$
W_C(1-p,\ p/(q-1)).
$$
Subtract the no-error event to obtain the probability of a nonzero undetected error:
$$
P_{\rm ue}=W_C(1-p,\ p/(q-1))-(1-p)^n.
$$
The formula is independent of the transmitted codeword because the code and channel are additive.

This is a detector probability, not the block error of a correcting decoder. An error not in the code may be detected yet miscorrected by a particular decoder, while an undetected error necessarily changes one valid word into another. The distinction must remain visible when interpreting the enumerator.

For nonsymmetric channels, support positions and actual nonzero values can matter, so the ordinary weight enumerator may be insufficient. Complete or input-output weight enumerators retain more detailed information.

## A binary maximum-likelihood union bound

Transmit zero on a BSC with $0<p<1/2$. For a competitor $c$ of weight $w$, compare its likelihood with that of zero. Markov applied to the square root of the likelihood ratio gives
$$
P(L(c;Y)\ge L(0;Y))
\le E\sqrt{\frac{L(c;Y)}{L(0;Y)}}
=[2\sqrt{p(1-p)}]^w.
$$
Only the $w$ differing positions contribute a factor; each contributes the binary sum $\sqrt{p(1-p)}+\sqrt{p(1-p)}$. Independence multiplies them.

A union bound over all nonzero competitors gives
$$
P_e\le W_C(1,\ 2\sqrt{p(1-p)})-1,
$$
capped by one if the expression exceeds one. Ties are included on the right, so any fixed tie rule is covered. Additive symmetry gives the same bound for every transmitted word.

This bound can be loose because competitor events overlap. It does not claim equality, and its small-noise behaviour can depend on many low-weight coefficients beyond the minimum-distance term.

## What the enumerator can and cannot identify

Two codes with the same weight enumerator have the same displayed undetected-error formula on the symmetric additive channel. They can nevertheless have different implementation costs, automorphism groups or behaviour on coordinate-dependent channels.

Likewise, a dual enumerator is determined by the primal enumerator through MacWilliams, but individual dual codewords and their coordinate incidences are not reconstructed by that polynomial. The identity is a global counting transform.

This scope is useful when assessing a claimed “verification”: matching an enumerator is a mathematical invariant, not an independent proof that a particular implementation encodes or decodes the intended coordinates. Here the identities are derived in source, and no enumeration or execution is being reported.

## Complete weight enumerators and nonuniform error values

The ordinary enumerator records only zero versus nonzero. Define instead
$$
\operatorname{cwe}_C((z_a)_{a\in\mathbb F_q})
=\sum_{c\in C}\prod_{i=1}^n z_{c_i}.
$$
This records how often each field symbol occurs, while still forgetting its position. The same character proof gives
$$
\operatorname{cwe}_{C^\perp}(z)
=\frac1{|C|}\operatorname{cwe}_C(\widehat z),
\qquad
\widehat z_b=\sum_{a\in\mathbb F_q}\chi(ba)z_a.
$$
For each fixed primal coordinate value $b$, summing over the ambient coordinate gives exactly the displayed transformed variable. Finite product factorisation then completes the proof.

Set $z_0=X$ and every other $z_a=Y$ to recover the ordinary MacWilliams formula. For $b=0$, the transformed variable is $X+(q-1)Y$; for nonzero $b$, it is $X-Y$ by character orthogonality. Thus the ordinary identity is a controlled specialisation of the complete one.

If independent additive errors have an identical but nonuniform symbol law $r_a$, the probability of a nonzero undetected error is
$$
\operatorname{cwe}_C((r_a))-r_0^n.
$$
This can distinguish error values that the Hamming weight alone treats identically. It still assumes the same error law at every coordinate.

For coordinate-dependent laws, even the complete enumerator above can be insufficient because it has forgotten positions. One can introduce separate variables $z_{i,a}$ and sum $\prod_i z_{i,c_i}$. Substituting each coordinate’s error probabilities then gives the corresponding exact membership-passing probability. The object becomes larger precisely because it retains more of the experiment.

This hierarchy illustrates a general information principle within an algebraic calculation. A coarse invariant can support exactly the questions that survive its aggregation. When the channel distinguishes features that were discarded, a more detailed invariant or the code itself is needed; no theorem about the coarse polynomial restores that lost detail.

Two substitutions check the normalisation analytically. At $(X,Y)=(1,0)$, the transform gives $W_C(1,1)/|C|=1$, the unique zero word. At $(1,1)$, it gives $W_C(q,0)/|C|=q^n/|C|$, the dual code size. These specialisations also show why a normalisation error affects both the unique zero word and the total cardinality. Neither can be repaired by merely rescaling selected positive-weight coefficients, because all coefficients belong to one homogeneous polynomial identity.

A code with zero inactive coordinates has no weight-one dual word, but it may still have weight-two dual words from proportional coordinate functionals. The first weight moment alone therefore cannot imply pairwise uniform projections. The second moment requires the separate dual-distance condition proved above.

## Worked example 9.1: Repetition and even parity

For binary length three, repetition has $W_C=X^3+Y^3$ and size two. MacWilliams gives
$$
W_{C^\perp}=\tfrac12[(X+Y)^3+(X-Y)^3]=X^3+3XY^2.
$$
This is exactly the even-parity code’s zero word and three weight-two words. The factor one-half is essential: omitting it would double every count and incorrectly give two zero words.

## Worked example 9.2: A ternary self-dual enumerator shape

The ternary length-two repetition code consists of $(0,0),(1,1),(2,2)$ and has enumerator $X^2+2Y^2$. Its dual is $\{(a,-a)\}$ and has the same enumerator, although the two subspaces are different over $\mathbb F_3$. The transform gives $\tfrac13[(X+2Y)^2+2(X-Y)^2]=X^2+2Y^2$. Equal weight enumerators therefore do not imply equality of codes or self-duality.

## Worked example 9.3: An impossible proposed distribution

Suppose a binary length-four linear code of size four were claimed to have one zero word and three weight-three words. Then $K_1(i)=4-2i$, so MacWilliams would give $B_1=(4+3(-2))/4=-1/2$. A dual word count cannot be negative or fractional. Thus that proposed distribution is impossible. This is a necessary-constraint contradiction; it is not a generated enumeration of possible codes.

## Pairwise uniformity does not imply a Gaussian weight law

If dual distance exceeds two, code coordinates under a uniform codeword are pairwise independent and uniform. Their nonzero indicators therefore have a common mean and zero pairwise covariances. Summing gives mean weight equal to length times the nonzero probability and variance equal to length times that indicator variance.

Those first two moments do not establish a central limit theorem. Consider the binary simplex code whose generator columns are all nonzero vectors of a growing-dimensional binary space. Every nonzero message produces a codeword of weight exactly half the size of that entire space.

Writing length as one less than that space size, the weight distribution has one zero word and all other words at weight one-half greater than length divided by two. The probability of the zero word is the reciprocal of length plus one. Distinct nonzero generator columns are independent as binary coordinate functionals, so every pair of coordinates is indeed uniform.

Its mean weight is length divided by two and its variance is length divided by four, as the pairwise calculation requires. Yet the standardised weight converges in probability to zero: with probability tending to one it differs from its mean by only one-half before division by a standard deviation growing like the square root of length.

A rare zero word carries a large negative standardised value and preserves the variance, even though its probability tends to zero. There is no contradiction: convergence in distribution alone does not force convergence of unbounded second moments. Uniform integrability is missing.

Thus these pairwise independent binary coordinates do not have a normal sum. A normal approximation needs additional independence or dependence control beyond the dual-distance-two moment condition.

This example also explains why an enumerator can matter more than a few moments. The exact distribution shows an atom containing almost all codewords and a vanishing-probability exceptional atom. A mean and variance summary conceals that geometry.

The lesson is specific and mathematical: coordinate projection theorems provide the joint uniformity up to their declared order. They do not silently extend to full independence or to every limit theorem proved for independent trials.

## Ordinary and complete enumerators react differently to scaling

A permutation of coordinates and multiplication of each coordinate by a nonzero field element preserve Hamming weights. Codes related by these invertible monomial transformations therefore have the same ordinary weight enumerator and minimum distance. The dual transforms by the inverse transpose, which is also monomial, so its ordinary enumerator is preserved too.

The complete weight enumerator records which field symbols occur, not only which coordinates are zero. Coordinate-specific multiplication can change it. Over the three-element field, compare the one-dimensional codes spanned by the words with coordinates one, one and by the word with coordinates one, two. Both have one zero word and two words of weight two. But the first has two equal nonzero symbols in each nonzero word, while the second has one symbol of each nonzero kind. Their complete enumerator monomials consequently differ. This explicit example shows why the ordinary enumerator can support symmetric-channel calculations while being insufficient for channel laws that assign different probabilities to different nonzero error values.

## Exercises

### Exercise 9.1
<a id="weight-enumerators-macwilliams-ex-1"></a>

Show a nontrivial additive character sums to zero over the field.

<details>
<summary>Hint 1</summary>

Translate the sum by an element with character not one.

</details>
<details>
<summary>Hint 2</summary>

Compare the translated and original sums.

</details>
<details>
<summary>Solution</summary>

Translation permutes the additive group, so the sum is unchanged. The character property also multiplies it by $\chi(b)\ne1$. Hence $(1-\chi(b))$ times the sum is zero, forcing the sum to vanish.

</details>

### Exercise 9.2
<a id="weight-enumerators-macwilliams-ex-2"></a>

Why is full field-linearity needed in the subspace indicator proof?

<details>
<summary>Hint 1</summary>

A nonzero pairing may lie in the kernel of the chosen functional.

</details>
<details>
<summary>Hint 2</summary>

Scalar multiplication lets that pairing range over the field.

</details>
<details>
<summary>Solution</summary>

If $c_0\cdot v=a\ne0$, multiplying $c_0$ by field scalars produces every scalar multiple of $a$. Some has nontrivial character because the functional is nonzero. Closure under those scalars supplies the translation that kills the sum. An arbitrary nonlinear set need not have it.

</details>

### Exercise 9.3
<a id="weight-enumerators-macwilliams-ex-3"></a>

Derive the coordinate factor for a nonzero code symbol.

<details>
<summary>Hint 1</summary>

Sum the character over nonzero possible ambient symbols.

</details>
<details>
<summary>Hint 2</summary>

The full sum is zero and the zero term is one.

</details>
<details>
<summary>Solution</summary>

The factor is $X+Y\sum_{a\ne0}\chi(c_i a)=X-Y$. Multiplication by nonzero $c_i$ permutes the field, so the nonzero character sum is $-1$.

</details>

### Exercise 9.4
<a id="weight-enumerators-macwilliams-ex-4"></a>

Explain the MacWilliams normalising factor.

<details>
<summary>Hint 1</summary>

The dual membership indicator averages over the primal code.

</details>
<details>
<summary>Hint 2</summary>

Its denominator is the number of primal terms.

</details>
<details>
<summary>Solution</summary>

The orthogonality indicator is $|C|^{-1}\sum_{c\in C}\chi(c\cdot v)$. Therefore the transform divides by $|C|$. Using the dual size instead would generally give the wrong zero coefficient and total count.

</details>

### Exercise 9.5
<a id="weight-enumerators-macwilliams-ex-5"></a>

Compute $K_1(i)$ from the coefficient formula.

<details>
<summary>Hint 1</summary>

Select one factor of $Y$.

</details>
<details>
<summary>Hint 2</summary>

Separate choices from zero and nonzero coordinates.

</details>
<details>
<summary>Solution</summary>

Choosing from the $n-i$ first factors gives $(q-1)(n-i)$, while choosing from the $i$ second factors gives $-i$. The sum is $(q-1)n-qi$.

</details>

### Exercise 9.6
<a id="weight-enumerators-macwilliams-ex-6"></a>

Prove dual distance above two makes every two-coordinate projection uniform.

<details>
<summary>Hint 1</summary>

A deficient image would have a nonzero annihilating functional.

</details>
<details>
<summary>Hint 2</summary>

Lift it to a short dual word.

</details>
<details>
<summary>Solution</summary>

If projection rank were below two, a nonzero linear functional on the pair would vanish on its image, giving a dual word supported on those two positions. The distance hypothesis forbids it. Rank two makes every output pair have $q^{k-2}$ preimages.

</details>

### Exercise 9.7
<a id="weight-enumerators-macwilliams-ex-7"></a>

Why is the undetected-error formula not a correcting-decoder error formula?

<details>
<summary>Hint 1</summary>

It tests only whether the error is a codeword.

</details>
<details>
<summary>Hint 2</summary>

A correcting decoder has extra decision regions.

</details>
<details>
<summary>Solution</summary>

Membership testing misses precisely nonzero codeword errors. A correcting decoder can fail on other patterns or recover some detected corruptions. Its block error depends on its chosen regions, so the detector enumerator formula cannot simply be relabelled as decoder error.

</details>

### Exercise 9.8
<a id="weight-enumerators-macwilliams-ex-8"></a>

For binary repetition length three, write its nonzero undetected-error probability.

<details>
<summary>Hint 1</summary>

Only the all-one error is a nonzero codeword.

</details>
<details>
<summary>Hint 2</summary>

Use its weight.

</details>
<details>
<summary>Solution</summary>

The probability is $p^3$. The full membership-passing probability is $(1-p)^3+p^3$, and subtracting the zero-error event leaves $p^3$. Majority decoding has a different block-error probability, including weight-two errors.

</details>

### Exercise 9.9
<a id="weight-enumerators-macwilliams-ex-9"></a>

Why must the union bound be capped by one when interpreted as a probability bound?

<details>
<summary>Hint 1</summary>

The sum can count overlapping events many times.

</details>
<details>
<summary>Hint 2</summary>

Probabilities themselves never exceed one.

</details>
<details>
<summary>Solution</summary>

The union inequality remains algebraically valid even if its right side exceeds one, but then it is weaker than the universal bound one. Reporting their minimum gives the meaningful bound without pretending the overlap count is an exact probability.

</details>

### Exercise 9.10
<a id="weight-enumerators-macwilliams-ex-10"></a>

Can equal weight enumerators prove two codes are equal?

<details>
<summary>Hint 1</summary>

They discard coordinate and symbol arrangements.

</details>
<details>
<summary>Hint 2</summary>

Use the ternary example.

</details>
<details>
<summary>Solution</summary>

No. Ternary repetition and its opposite-sign dual have the same word-weight counts but different literal subspaces. Weight enumeration is a global invariant, insufficient to recover coordinate incidence or equality of codes.

</details>

## Summary

Finite additive-character orthogonality proves MacWilliams’ transform with its exact normalisation. Coefficient constraints and projection moments connect primal and dual distances. Weight enumeration yields undetected-error formulas and a binary likelihood union bound, without identifying the whole code or a decoder’s exact performance.
