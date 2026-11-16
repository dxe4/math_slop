var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: quadratic-residues-reciprocity
title: "Quadratic Residues and Reciprocity"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Quadratic Residues and Reciprocity {#section-1-quadratic-residues-and-reciprocity}

Whether $x^{2}\\equiv a \\bmod p$ is solvable is a local existence question with a remarkably symmetric answer as $a$ and $p$ exchange roles. Quadratic reciprocity turns a potentially long square table into a short chain of sign decisions. Every step, however, needs odd-prime and coprimality hypotheses.

This chapter assumes units, orders, polynomial root bounds, and CRT. It develops the Legendre symbol, Euler's criterion, Gauss's lemma, the supplementary laws, and quadratic reciprocity, then reconstructs solutions for composite squarefree moduli.

<a id="section-5-1-squares-in-a-prime-field"></a>
## 1. Squares in a prime field {#section-7-1-squares-in-a-prime-field}

For odd prime $p$, a nonzero $a \\bmod p$ is a **quadratic residue** if $x^{2}\\equiv a \\bmod p$ for some $x$; otherwise it is a nonresidue. The map $x \\to x^{2}$ on $U(p)$ identifies exactly the pair $x,-x$. Hence among the $p-1$ nonzero classes, exactly $(p-1)/2$ are residues.

Define the Legendre symbol

$(a/p)=0$ if $p\\mid a$, $1$ if $a$ is a nonzero residue, and $-1$ otherwise.

If a nonzero root exists, exactly two roots $\\pm x$ exist, since a quadratic over a field has at most two roots.

<a id="section-15-2-euler-s-criterion"></a>
## 2. Euler's criterion {#section-17-2-euler-s-criterion}

**Theorem 7.1.** For odd prime $p$,

$a^{(p-1)/2}\\equiv(a/p) \\bmod p$.

For nonzero $a$, Fermat shows the left side squares to one, so it is $\\pm 1$. If $a=x^{2}$, it equals $x^{p-1}=1$. Exactly half the nonzero classes satisfy the polynomial $X^{(p-1)/2}-1$; the root bound says there are at most half, and the known squares supply half. Every remaining class therefore gives $-1$.

Euler's criterion immediately proves multiplicativity:

$(ab/p)=(a/p)(b/p)$.

<a id="section-27-worked-test"></a>
### Worked test {#section-29-worked-test}

Is $3$ a square modulo $13$? Compute $3^{6}\\equiv 729\\equiv 1 \\bmod 13$, so yes. Indeed $4^{2}=16\\equiv 3$ and the roots are $4,9$.

<a id="section-31-3-gauss-s-lemma"></a>
## 3. Gauss's lemma {#section-33-3-gauss-s-lemma}

Let $p$ be an odd prime and assume $p\\nmid a$. Take the least positive residues of

$a,2a,\\ldots,((p-1)/2)a \\bmod p$.

Let $N$ be the number exceeding $p/2$. Replace each such residue $r$ by $p-r$, recording a minus sign. The resulting absolute residues are exactly $1,\\ldots,(p-1)/2$ in some order: equality up to sign would otherwise make two indices congruent up to sign in an impossible range.

Multiplying and cancelling the factorial gives

$a^{(p-1)/2}\\equiv(-1)^N \\bmod p$.

Euler's criterion yields **Gauss's lemma**:

$(a/p)=(-1)^N$.

<a id="section-47-4-supplementary-laws"></a>
## 4. Supplementary laws {#section-49-4-supplementary-laws}

Gauss's lemma with $a=-1$ gives

$(-1/p)=(-1)^{(p-1)/2}$.

Thus $-1$ is a square exactly when $p\\equiv 1 \\bmod 4$.

For $a=2$, the least positive residues in Gauss's lemma are $2j$ with $1\\le j\\le h=(p-1)/2$; none needs reduction modulo $p$. The condition $2j>p/2$ is exactly $j>p/4$, so the count is $N=h-\\lfloor p/4\\rfloor$. For $p\\equiv 1,3,5,7\\bmod 8$, this count is respectively even, odd, odd, even. These are the parities of $(p^{2}-1)/8$, hence Gauss's lemma gives

$(2/p)=(-1)^{(p^{2}-1)/8}$.

Thus $2$ is a square exactly when $p\\equiv 1$ or $7 \\bmod 8$.

<a id="section-61-5-quadratic-reciprocity"></a>
## 5. Quadratic reciprocity {#section-63-5-quadratic-reciprocity}

**Quadratic reciprocity.** For distinct odd primes $p,q$,

$(p/q)(q/p)=(-1)^{((p-1)/2)((q-1)/2)}$.

Equivalently, the symbols are equal unless both primes are $3 \\bmod 4$, in which case their signs are opposite.

<a id="section-69-proof-by-lattice-parity"></a>
### Proof by lattice parity {#section-71-proof-by-lattice-parity}

Count lattice points $(i,j)$ with $1\\le i\\le (p-1)/2$, $1\\le j\\le (q-1)/2$ relative to the line $qi=pj$. No point lies on the line because distinct primes would force $p\\mid i$. For fixed $i$, write $qi=p f_i+r_i$ with $1\\le r_i<p$. Folding $r_i$ into $(0,p/2)$ changes its sign exactly for the $N$ residues counted by Gauss's lemma. Comparing the sum of the folded residues with $q\\sum_i i$ modulo $2$ (both $p$ and $q$ are odd) gives $\\sum_i f_i\\equiv N\\pmod2$. Thus the floor sum below the line has the parity of the Gauss count for $(q/p)$. Counting from the other direction similarly records $(p/q)$. Every point of the rectangle lies on exactly one side, so the two counts sum to $((p-1)/2)((q-1)/2)$. Taking $(-1)$ to these counts proves the formula.

The proof's geometry is only a counting device. The numerical alternative is the two finite floor sums, whose complementary total is the rectangle size.

<a id="section-75-6-reciprocity-algorithm"></a>
## 6. Reciprocity algorithm {#section-77-6-reciprocity-algorithm}

To compute $(a/p)$:

1. reduce $a \\bmod p$ and factor it;
2. use multiplicativity;
3. remove factors $-1$ and $2$ with supplementary laws;
4. swap odd primes using reciprocity;
5. reduce again and repeat.

<a id="section-85-worked-symbol"></a>
### Worked symbol {#section-87-worked-symbol}

Compute $(37/101)$. Both primes are $1 \\bmod 4$, so it equals $(101/37)=(27/37)=(3/37)^{3}$. Since $37\\equiv 1 \\bmod 4$, $(3/37)=(37/3)=(1/3)=1$. Thus $37$ is a residue modulo $101$.

The symbol decides existence but does not by itself construct a root. Root construction is a separate algorithmic problem.

<a id="section-91-7-composite-moduli-and-jacobi-symbols"></a>
## 7. Composite moduli and Jacobi symbols {#section-93-7-composite-moduli-and-jacobi-symbols}

For odd positive $n=\\prod p_{i}^{e_{i}}$, the Jacobi symbol is

$(a/n)=\\prod (a/p_{i})^{e_{i}}$.

Jacobi symbol $-1$ proves $a$ is not a square modulo $n$. Jacobi symbol $1$ does not prove it is a square. For example $(2/15)=(2/3)(2/5)=(-1)(-1)=1$, but $2$ is a nonresidue modulo both prime factors and hence not a square modulo $15$.

For squarefree $n$, roots exist exactly when roots exist modulo every prime factor, and CRT combines the local choices. If there are $r$ prime factors and $a$ is a unit residue everywhere, there are $2^r$ roots.

<a id="section-101-exercises-with-complete-solutions"></a>
## 8. A half-system of residues carries the sign information {#section-389-8-a-half-system-of-residues-carries-the-sign-informatio}

Put $h=(p-1)/2$ for an odd prime p, and assume $p\\nmid a$. The numbers $ai$ for $1≤i≤h$ have nonzero residues $r_i$ in the interval from one to $p-1$. Fold the upper half down by setting $s_i=r_i$ when $r_i≤h$ and $s_i=p-r_i$ otherwise. Record a sign $\\epsilon_i$, equal to one in the first case and minus one in the second. Then $ai\\equiv\\epsilon_i s_i\\pmod p$.

Why are the folded values a permutation of one through h? Each lies in that interval. If $s_i=s_j$, the original residues are equal or opposite, so cancellation of the unit a gives $i\\equiv j$ or $i\\equiv-j\\pmod p$. The first possibility gives i=j because both indices lie between one and h. The second would require $i+j=p$, but $2≤i+j≤p-1$. Thus there are h distinct values in a set of size h.

Multiplying the h congruences gives
\\[
a^h h!\\equiv\\left(\\prod_i\\epsilon_i\\right)\\prod_i s_i
=(-1)^N h!\\pmod p.
\\]
Every factor of $h!$ is nonzero modulo p, so it has an inverse in the field. Cancelling it proves $a^h\\equiv(-1)^N$. Euler's criterion identifies that sign with the Legendre symbol. The proof's two cancellations both need units; neither is justified merely because an integer looks nonzero before reduction.

The fold deliberately forgets order but remembers orientation. Multiplication by a permutes the pairs $\\{i,-i\\}$ of nonzero residues. Choosing one representative from each pair makes the permutation visible, while the number of representatives crossing to the negative half contributes the sign. This explains why a much smaller list can decide a square-class question without listing every square.

For p=11 and a=7, the residues of $7,14,21,28,35$ are $7,3,10,6,2$. Folding gives $4,3,1,5,2$. Exactly the first, third and fourth residues cross the midpoint, so N=3 and $(7/11)=-1$. The permutation and its three signs form a complete finite certificate; no numerical approximation enters the calculation.

The method allows any integer a coprime to p, including a negative representative. Reducing a first can shorten arithmetic without changing its residue class. If p divides a, the residues are all zero and the half-system argument collapses. The correct symbol is then zero, and the equation $x^2\\equiv a\\pmod p$ has the single root zero rather than a pair of nonzero roots.

<a id="section-406-9-derive-the-floor-parity-before-counting-the-rectangle"></a>
## 9. Derive the floor parity before counting the rectangle {#section-408-9-derive-the-floor-parity-before-counting-the-rectangle}

The lattice proof requires one additional parity fact, with an odd multiplier. Let q be a positive odd integer coprime to the odd prime p. For each $1≤i≤h$, write
\\[
qi=pf_i+r_i,\\qquad f_i=\\left\\lfloor\\frac{qi}{p}\\right\\rfloor,\\qquad 1≤r_i≤p-1.
\\]
Use the same folded values $s_i$ and high-residue indicators $\\delta_i\\in\\{0,1\\}$ as above. As integers,
$r_i=(-1)^{\\delta_i}s_i+\\delta_i p$.

Reduce the sum of these identities modulo two. Minus one and one have the same parity, while p is odd, so $\\sum r_i\\equiv\\sum s_i+N\\pmod2$. Summing the division equations gives $q\\sum i\\equiv\\sum f_i+\\sum r_i\\pmod2$. Since q is odd and the s values permute the indices, the two copies of $\\sum i$ cancel, leaving
\\[
\\sum_{i=1}^h\\left\\lfloor\\frac{qi}{p}\\right\\rfloor\\equiv N\\pmod2.
\\]
This supplies the explicit sum calculation behind the shorter argument in the original proof.

Oddness of q matters here. With p=5 and q=2, both floor values are zero, but the residues two and four have one high entry. Gauss's lemma remains valid for that even multiplier; the displayed floor-parity formula does not. Removing factors of two with the supplementary law is a principled step, not merely an arithmetic convenience.

Now let p and q be distinct odd primes and put $k=(q-1)/2$. Consider the hk integer points with $1≤i≤h$ and $1≤j≤k$. None lies on $qi=pj$: such an equality would make p divide i, impossible in the given range.

For fixed i, $qi/p<q/2$, so its floor is at most k. The points satisfying $pj<qi$ in that column have exactly the j values one through $\\lfloor qi/p\\rfloor$. Thus the first floor sum counts one side of the line without including points outside the rectangle.

For fixed j, the points satisfying $qi<pj$ have exactly $\\lfloor pj/q\\rfloor$ possible i values. The second floor sum counts the other side. Every rectangle point lies on precisely one side, hence
\\[
\\sum_{i=1}^h\\left\\lfloor\\frac{qi}{p}\\right\\rfloor+
\\sum_{j=1}^k\\left\\lfloor\\frac{pj}{q}\\right\\rfloor=hk.
\\]
Applying the parity formula and Gauss's lemma to both sums proves reciprocity. The factors are the two Legendre symbols, and the rectangle size determines whether their signs agree.

This argument uses a finite set and two exact enumerations. A diagram can help locate the regions, but area is not the proof: a rectangle's Euclidean area is not generally its number of integer points. The integer side lengths h and k, and the absence of points on the dividing line, are what make the count exact.

<a id="section-436-10-a-complete-reciprocity-certificate-and-supplementary"></a>
## 10. A complete reciprocity certificate and supplementary counts {#section-438-10-a-complete-reciprocity-certificate-and-supplementary}

Take p=11 and q=7. The five columns of the rectangle give the following data.

| i | $7i$ | $\\lfloor7i/11\\rfloor$ | residue modulo 11 | folded residue |
| --- | --- | --- | --- | --- |
| 1 | 7 | 0 | 7 | 4 |
| 2 | 14 | 1 | 3 | 3 |
| 3 | 21 | 1 | 10 | 1 |
| 4 | 28 | 2 | 6 | 5 |
| 5 | 35 | 3 | 2 | 2 |

The floor sum is seven and the high-residue count is three, agreeing in parity. In the reverse direction, the floors of $11j/7$ for j=1,2,3 are one, three and four, summing to eight. The total is fifteen, the size of the five-by-three rectangle.

Consequently $(7/11)=(-1)^7=-1$ and $(11/7)=(-1)^8=1$. Both primes are three modulo four, so their symbol product is minus one, exactly the reciprocity sign. Independently, $11\\equiv4\\pmod7$ is visibly a square. The independent check verifies which symbol is positive rather than trusting the sign product alone.

The sign product by itself does not decide both symbols. If its value is one, the symbols could both be one or both be minus one. Reciprocity exchanges one solvability question for another with a known correction; the terminal small calculation still matters.

For the minus-one law, every residue $p-i$ with $1≤i≤h$ lies above the midpoint. Thus the Gauss count is h. For the two-law count, the original adopted formula is $N=h-\\lfloor p/4\\rfloor$. Writing p as $8t+r$ makes its parity completely explicit:

| r | h | $\\lfloor p/4\\rfloor$ | N |
| --- | --- | --- | --- |
| 1 | $4t$ | $2t$ | $2t$ |
| 3 | $4t+1$ | $2t$ | $2t+1$ |
| 5 | $4t+2$ | $2t+1$ | $2t+1$ |
| 7 | $4t+3$ | $2t+1$ | $2t+2$ |

These are even, odd, odd and even. The same parity is obtained by expanding $(p^2-1)/8$: its terms involving t are even and its constant term has the listed parity. This table develops the already correct count without changing the original supplementary-law proof.

A useful consequence links the count to group order without assuming primitive roots. If $x^2=-1$ modulo an odd prime, x has order four, so four divides $p-1$. Conversely the supplementary law supplies such a root when p is one modulo four. The existence direction here was obtained from quadratic residues; no cyclicity theorem from the next chapter was required.

<a id="section-467-11-turn-sign-arithmetic-into-a-prime-field-conclusion"></a>
## 11. Turn sign arithmetic into a prime-field conclusion {#section-469-11-turn-sign-arithmetic-into-a-prime-field-conclusion}

The Legendre symbol takes the integer values zero, one and minus one. Euler's criterion expresses those values as residues, but the conclusion is still an integer sign. For odd p, one and minus one are distinct modulo p, so equality of their residues determines which sign occurred.

Multiplicativity includes the zero cases. If p divides one factor, it divides the product and both sides of the symbol identity are zero. If both factors are units, Euler's criterion gives equality modulo p between two signs, and oddness makes that equality an equality of signs. This explains why separate unit and nonunit branches prevent accidental cancellation.

A reciprocity computation can be written as a chain of identities, with one stated reason per change: reducing a numerator, removing a square factor, extracting two, multiplying symbols, or swapping two distinct odd primes. A minus sign introduced at a swap belongs to the accumulated product; it cannot be discarded at the next reduction.

For example,
\\[
(43/67)=-(67/43)=-(24/43)=-(6/43)=-(2/43)(3/43).
\\]
Here $(2/43)=-1$ because 43 is three modulo eight. Also $(3/43)=-(43/3)=-(1/3)=-1$. The product of those two factors is one, leaving the leading minus sign. Thus $x^2\\equiv43\\pmod{67}$ has no solution.

A positive symbol gives a different kind of certificate: it proves nonzero roots exist, but supplies neither root explicitly. Searching a small table, using a special exponent formula or applying a justified square-root algorithm is another step. The distinction between deciding existence and constructing witnesses appears again in primitive-root and discrete-log questions.

The hypotheses also decide when to stop before swapping. If the numerator is divisible by the prime denominator, the symbol is zero. If the two primes are equal, reciprocity's nonzero-sign equation cannot apply: $(p/p)=0$, while its right side is a sign. Denominator two is outside the odd-prime definition being used. These are domain checks, not exceptions to be handled by an unexplained sign convention.

<a id="section-485-12-jacobi-arithmetic-keeps-the-signs-but-loses-informat"></a>
## 12. Jacobi arithmetic keeps the signs but loses information {#section-487-12-jacobi-arithmetic-keeps-the-signs-but-loses-informat}

For odd positive n, the Jacobi symbol multiplies local Legendre symbols with prime-factor multiplicities; set $(a/1)=1$. If $\\gcd(a,n)=1$, its value is a sign. If a prime divisor of n divides a, the value is zero. Neither case changes n into a prime.

The product can conceal local failures. For example $(2/9)=(2/3)^2=1$, although two is not a square modulo three and therefore cannot be a square modulo nine. Even multiplicity hides the obstruction. In the earlier example modulo fifteen, two separate negative local signs cancel instead. The two mechanisms explain why Jacobi one is weaker than prime-field residue one.

The reciprocity sign extends to coprime positive odd a,b:
\\[
(a/b)(b/a)=(-1)^{((a-1)/2)((b-1)/2)}.
\\]
To see why, factor a and b into odd primes, apply prime reciprocity to each pair, and multiply with the factor multiplicities. The parity function $\\epsilon(n)=(n-1)/2\\pmod2$ is additive under multiplication of odd integers, since the difference from additivity is $(a-1)(b-1)/2$, an even integer. Thus the product of all prime-pair signs is exactly the displayed sign.

The supplementary laws extend similarly. For two, the difference
$((ab)^2-1)/8-(a^2-1)/8-(b^2-1)/8$
equals $(a^2-1)(b^2-1)/8$, which is even for odd a,b. This verifies multiplicativity of the two-law sign through prime-power factorizations. The minus-one law uses the preceding epsilon identity.

These identities give a factorization-free evaluation procedure for the Jacobi symbol. Reduce a modulo the odd denominator, remove powers of two while recording the supplementary sign, swap the remaining positive odd numerator with the denominator while recording reciprocity, and reduce again. The invariant is that the original symbol equals the recorded sign times the current symbol.

After a nontrivial swap and reduction, the positive denominator decreases. Hence the process terminates by the same descending-integer mechanism as Euclid's algorithm. A terminal denominator one contributes one. A zero numerator at a larger denominator contributes zero and detects a common factor rather than a square-root conclusion.

For instance $(19/45)=(45/19)=(7/19)=-(19/7)=-(5/7)=-(7/5)=-(2/5)=1$. Every swap here has either an explicit minus sign or a factor congruent to one modulo four. The procedure evaluates a symbol without factoring forty-five; interpreting it as solvability still needs the separate local conditions.

This distinction is computationally valuable. A fast symbol calculation can rule out a square when it returns minus one, but returning one is not a general square-root algorithm and is not a primality certificate. The theorem concerns the declared arithmetic function, not a stronger unproved inference about its denominator.

<a id="section-509-13-reconstruct-roots-and-keep-the-singular-cases-separa"></a>
## 13. Reconstruct roots and keep the singular cases separate {#section-511-13-reconstruct-roots-and-keep-the-singular-cases-separa}

For squarefree odd $n=p_1\\cdots p_r$ and a unit a, local solvability at every prime gives two roots at each prime. CRT identifies the global residue classes with tuples of local classes, so the independent sign choices give exactly $2^r$ global roots. Completeness comes from the bijection, not from how many candidates happened to be found.

For $x^2\\equiv4\\pmod{35}$, the local roots are two and three modulo five, and two and five modulo seven. The CRT coefficients 21 and 15 are respectively one modulo five/zero modulo seven and zero modulo five/one modulo seven. Thus $x=21r_5+15r_7\\pmod{35}$ gives the complete root list $2,12,23,33$.

Direct squaring gives residues four for all four values. Conversely every root must have one of the four local pairs, so none is missing. This is both a construction and a completeness proof, while the Legendre symbols alone would have supplied only the local existence statements.

For an odd prime power and a unit square, the derivative of $x^2-a$ is $2x$, a unit at every local root. The simple-root lifting theorem from Chapter 6 therefore gives one compatible lift of each of the two prime roots. Consequently there are still exactly two roots at each higher power, provided a is a unit. This is an explicit import of that theorem's derivative hypothesis.

When a is zero modulo p, the derivative can vanish and the count changes. For $x^2\\equiv0\\pmod{p^k}$, the valuation condition is $2v_p(x)≥k$. Thus x must be a multiple of $p^{\\lceil k/2\\rceil}$ and there are $p^{\\lfloor k/2\\rfloor}$ such residue classes. For example the roots modulo nine are zero, three and six, not a nonzero plus/minus pair.

There is also a precise intermediate case between a unit and zero. Assume $a\\not\\equiv0\\pmod{p^k}$ and write $t=v_p(a)<k$ for the valuation of its residue class. This t is independent of the chosen representative because adding a multiple of $p^k$ cannot change a lower valuation.

If $x^2\\equiv a\\pmod{p^k}$, two integers congruent modulo $p^k$ and having valuation below k must have that same valuation. Therefore $2v_p(x)=t$. An odd t rules out every root. For $t=2s$, write $a=p^{2s}u$ with u a unit and $x=p^s y$. Dividing the integer congruence by $p^{2s}$ gives
\\[
y^2\\equiv u\\pmod{p^{k-2s}}.
\\]
The resulting y is a unit. Conversely every such y gives an x solving the original congruence.

The Legendre symbol $(u/p)$ now makes the decision. A negative value gives no roots. A positive value gives two unit roots modulo $p^{k-2s}$ by the simple-root theorem. But x is a class modulo $p^k$, so y is recorded modulo $p^{k-s}$; each of those two root classes has $p^s$ lifts to that larger modulus. Multiplication by $p^s$ is a bijection from y classes modulo $p^{k-s}$ to x classes divisible by $p^s$ modulo $p^k$. The complete count is therefore $2p^s$, not merely two.

For example $x^2\\equiv9\\pmod{81}$ has t=2 and s=1. The reduced unit equation is $y^2\\equiv1\\pmod9$, with roots one and eight. Their lifts modulo twenty-seven are $1,10,19$ and $8,17,26$. Multiplying by three yields $3,30,57,24,51,78$ modulo eighty-one. Each square differs from nine by a multiple of eighty-one, and the preceding bijections prove completeness without searching the other residue classes.

The zero case is excluded from the finite-t deduction: its valuation is at least k rather than a fixed t<k. Keeping that branch separate explains why its root count is $p^{\\lfloor k/2\\rfloor}$ rather than an attempted substitution into $2p^s$.

At modulus two the unit group has one element, and at higher powers of two a unit square can have four roots. These cases cannot be justified by a proof that cancels two in an odd prime field. The next chapter will distinguish cyclic unit groups from the ambient field hypothesis just as carefully.

<a id="section-537-14-construct-some-roots-after-the-symbol-has-decided-ex"></a>
## 14. Construct some roots after the symbol has decided existence {#section-539-14-construct-some-roots-after-the-symbol-has-decided-ex}

A positive Legendre symbol need not end the calculation. Suppose p is an odd prime, a is a unit and $(a/p)=1$. For $p\\equiv3\\pmod4$, define $b=a^{(p+1)/4}$ modulo p. The exponent is an integer, and Euler's criterion gives
\\[
b^2=a^{(p+1)/2}=a\\,a^{(p-1)/2}=a.
\\]
Thus b and −b are the two roots. This argument constructs witnesses using powers whose values can be certified by repeated squaring; it is not merely another existence proof.

For example p=11 and a=5 give $b=5^3\\equiv4$. Squaring four gives five modulo eleven, and the second root is seven. Completeness follows from the degree-two field bound, while the formula supplies the witnesses. If a were a nonresidue, the same exponent would instead square to −a; checking the symbol is an essential premise.

For $p\\equiv5\\pmod8$, put $b=a^{(p+3)/8}$ and $c=a^{(p-1)/4}$. Then $b^2=ac$ and $c^2=1$ by Euler's criterion. In an odd prime field c is one or minus one. If c=1, b is already a root.

If c=−1, put $i=2^{(p-1)/4}$. The supplementary two-law gives
$i^2=2^{(p-1)/2}=(2/p)=-1$.
Consequently $(ib)^2=(-1)(-a)=a$, so multiplying by this certified square root of minus one repairs b. No primitive-root theorem or discrete logarithm is used.

For p=13 and a=10, $c=10^3\\equiv-1$, $b=10^2\\equiv9$, and $i=2^3=8$. Hence $ib\\equiv7$, whose square is ten; the other root is six. These exact residues can be checked locally at every step, making an incorrect intermediate sign visible.

The two formulas cover stated congruence classes of primes. At $p\\equiv1\\pmod8$, their exponents or correction argument do not apply; that is a boundary of these constructions, not a claim that no square-root algorithm exists. After constructing either prime root, Chapter 6's simple-root lift applies at odd prime powers because the derivative $2b$ is nonzero modulo p. At composite moduli, construct the local roots and use CRT, retaining all local choices.

<a id="section-557-exercises-reciprocity-extensions"></a>

## Summary

<a id="section-386-chapter-summary"></a>
The Legendre symbol records nonzero quadratic solvability modulo an odd prime. Euler's criterion converts it to an exponent, Gauss's lemma to a parity count, and quadratic reciprocity swaps numerator and denominator with one controlled sign. The Jacobi symbol extends the calculation to composite denominators but not the full existence interpretation.
<a id="section-387-8-a-half-system-of-residues-carries-the-sign-informatio"></a>

## Exercises {#section-103-exercises-with-complete-solutions}

<a id="section-103-1-squares-modulo-eleven"></a>
### 1. Squares modulo eleven {#section-105-1-squares-modulo-eleven}

List the nonzero quadratic residues modulo $11$.

**Hint 1.** Square the residues from one through five.

**Hint 2.** Their negatives have the same squares, so no further nonzero values appear.

<details><summary>Full solution</summary>

**Solution.** Squares of $1,2,3,4,5$ are $1,4,9,5,3$. Thus the set is $\\{1,3,4,5,9\\}$.

</details>

<a id="section-117-2-root-pairs"></a>
### 2. Root pairs {#section-119-2-root-pairs}

If $x^{2}\\equiv a \\bmod p$ for nonzero $a$, prove the only roots are $x,-x$.

**Hint 1.** Factor the difference of the two squares.

**Hint 2.** The field property leaves only the root and its negative.

<details><summary>Full solution</summary>

**Solution.** If $y$ is another root, $(y-x)(y+x)\\equiv 0$. A field has no zero divisors, so $y\\equiv x$ or $y\\equiv-x$.

</details>

<a id="section-131-3-euler-criterion"></a>
### 3. Euler criterion {#section-133-3-euler-criterion}

Compute $(5/11)$.

**Hint 1.** Use Euler's criterion or list nonzero squares modulo eleven.

**Hint 2.** Five occurs among those squares.

<details><summary>Full solution</summary>

**Solution.** $5^{5}\\equiv 1 \\bmod 11$, so Euler's criterion gives $1$. The square table confirms $4^{2}\\equiv 5$.

</details>

<a id="section-145-4-a-nonresidue"></a>
### 4. A nonresidue {#section-147-4-a-nonresidue}

Compute $(2/5)$.

**Hint 1.** List the nonzero squares modulo five.

**Hint 2.** The residue two is absent.

<details><summary>Full solution</summary>

**Solution.** Nonzero squares are $1,4$, so $2$ is absent and the symbol is $-1$. Also the supplementary law uses $5\\equiv 5 \\bmod 8$.

</details>

<a id="section-159-5-multiplicativity"></a>
### 5. Multiplicativity {#section-161-5-multiplicativity}

Compute $(15/17)$.

**Hint 1.** Split the numerator into three and five.

**Hint 2.** Evaluate the two Legendre symbols and multiply their signs.

<details><summary>Full solution</summary>

**Solution.** $(15/17)=(3/17)(5/17)$. Reciprocity gives $(17/3)=(2/3)=-1$ and $(17/5)=(2/5)=-1$; their product is $1$.

</details>

<a id="section-173-6-minus-one"></a>
### 6. Minus one {#section-175-6-minus-one}

For which odd primes can $x^{2}\\equiv-1 \\bmod p$ be solved?

**Hint 1.** Use the supplementary law for minus one.

**Hint 2.** Its sign is positive exactly when the prime is one modulo four.

<details><summary>Full solution</summary>

**Solution.** The supplementary law gives a solution exactly for $p\\equiv 1 \\bmod 4$.

</details>

<a id="section-187-7-two"></a>
### 7. Two {#section-189-7-two}

Compute $(2/41)$.

**Hint 1.** Reduce forty-one modulo eight.

**Hint 2.** The supplementary sign for two is positive at residues one and seven.

<details><summary>Full solution</summary>

**Solution.** $41\\equiv 1 \\bmod 8$, so the symbol is $1$.

</details>

<a id="section-201-8-gauss-count"></a>
### 8. Gauss count {#section-203-8-gauss-count}

Use Gauss's lemma to compute $(3/7)$.

**Hint 1.** Take the least residues of three times one, two and three modulo seven.

**Hint 2.** Count how many exceed seven-halves.

<details><summary>Full solution</summary>

**Solution.** The least residues of $3,6,9$ are $3,6,2$; only $6$ exceeds $7/2$. Thus $N=1$ and the symbol is $-1$.

</details>

<a id="section-215-9-both-primes-three-modulo-four"></a>
### 9. Both primes three modulo four {#section-217-9-both-primes-three-modulo-four}

Relate $(7/11)$ and $(11/7)$.

**Hint 1.** Both primes are three modulo four.

**Hint 2.** The reciprocity sign reverses one symbol relative to the other.

<details><summary>Full solution</summary>

**Solution.** Both primes are $3 \\bmod 4$, so reciprocity says the symbols are negatives. Since $(11/7)=(4/7)=1$, $(7/11)=-1$.

</details>

<a id="section-229-10-a-reciprocity-chain"></a>
### 10. A reciprocity chain {#section-231-10-a-reciprocity-chain}

Compute $(19/43)$.

**Hint 1.** Swap numerator and denominator with the reciprocity sign recorded.

**Hint 2.** Reduce the new numerator and continue to small supplementary symbols.

<details><summary>Full solution</summary>

**Solution.** Both are $3 \\bmod 4$, so $(19/43)=-(43/19)=-(5/19)$. Since $5\\equiv 1 \\bmod 4$, $(5/19)=(19/5)=(4/5)=1$; answer $-1$.

</details>

<a id="section-243-11-another-chain"></a>
### 11. Another chain {#section-245-11-another-chain}

Compute $(29/53)$.

**Hint 1.** At each swap check whether both current odd primes are three modulo four.

**Hint 2.** Reduce fifty-three modulo twenty-nine before the next step.

<details><summary>Full solution</summary>

**Solution.** Both primes are $1 \\bmod 4$, so $(29/53)=(53/29)=(24/29)=(6/29)$ because $24=4*6$. Now $(2/29)=-1$ since $29\\equiv 5 \\bmod 8$, while $(3/29)=(29/3)=(2/3)=-1$. Therefore $(6/29)=(-1)(-1)=1$.

</details>

<a id="section-257-12-spot-the-correction"></a>
### 12. Spot the correction {#section-259-12-spot-the-correction}

Why is explicit sign bookkeeping in Exercise 11 mathematically important?

**Hint 1.** A lost minus sign can reverse the final solvability conclusion.

**Hint 2.** A correct endpoint computation does not repair an earlier incorrect reciprocity swap.

<details><summary>Full solution</summary>

**Solution.** Reciprocity computations are products of signs; a sign error can reverse the solvability conclusion. Writing each factor and multiplying explicitly is part of the certificate. Here both factors are $-1$, so their product is $1$, asserting that roots exist.

</details>

<a id="section-271-13-jacobi-false-positive"></a>
### 13. Jacobi false positive {#section-273-13-jacobi-false-positive}

Verify $(2/15)=1$ while $x^{2}\\equiv 2 \\bmod 15$ is insoluble.

**Hint 1.** Multiply the local symbols at three and five.

**Hint 2.** The two negative local signs multiply to a positive Jacobi sign despite local obstructions.

<details><summary>Full solution</summary>

**Solution.** Both $(2/3)$ and $(2/5)$ are $-1$, so their product is $1$. But a solution modulo $15$ would reduce to a solution modulo $3$, where squares are $0,1$; impossible.

</details>

<a id="section-285-14-jacobi-obstruction"></a>
### 14. Jacobi obstruction {#section-287-14-jacobi-obstruction}

If $(a/n)=-1$, prove $a$ is not a square modulo odd $n$, assuming $\\gcd(a,n)=1$.

**Hint 1.** A unit square has positive Legendre symbol at every prime divisor.

**Hint 2.** The product defining its Jacobi symbol must therefore be positive.

<details><summary>Full solution</summary>

**Solution.** A square modulo $n$ is a square modulo each prime divisor, so every local Legendre symbol is $1$; their product, with multiplicity, would be $1$, contradiction.

</details>

<a id="section-299-15-roots-modulo-sixty-five"></a>
### 15. Roots modulo sixty-five {#section-301-15-roots-modulo-sixty-five}

How many roots has $x^{2}\\equiv 1 \\bmod 65$?

**Hint 1.** Use the two roots at five and the two at thirteen.

**Hint 2.** CRT combines the choices independently.

<details><summary>Full solution</summary>

**Solution.** $65=5*13$. There are two local roots at each prime, and CRT combines them independently, giving four roots.

</details>

<a id="section-313-16-list-those-roots"></a>
### 16. List those roots {#section-315-16-list-those-roots}

List the roots from Exercise 15.

**Hint 1.** Construct all four sign combinations at the two prime moduli.

**Hint 2.** Choose canonical representatives modulo sixty-five.

<details><summary>Full solution</summary>

**Solution.** Solving the four sign pairs gives $1,-1,14,-14$, hence $1,64,14,51 \\bmod 65$. Direct squaring verifies them.

</details>

<a id="section-327-17-solvability-modulo-a-product"></a>
### 17. Solvability modulo a product {#section-329-17-solvability-modulo-a-product}

Is $x^{2}\\equiv 3 \\bmod 35$ solvable?

**Hint 1.** Check the equation modulo five or seven first.

**Hint 2.** One local nonsquare obstructs a global root.

<details><summary>Full solution</summary>

**Solution.** Modulo $5$, $(3/5)=-1$, so no local root exists. Therefore no root exists modulo $35$.

</details>

<a id="section-341-18-symbol-zero"></a>
### 18. Symbol zero {#section-343-18-symbol-zero}

Compute $(21/7)$ and interpret it.

**Hint 1.** The numerator is zero modulo the prime denominator.

**Hint 2.** A zero symbol signals nonunit input, not a nonzero quadratic residue.

<details><summary>Full solution</summary>

**Solution.** The symbol is $0$ because $7\\mid 21$. It says the residue is nonunit; it is neither classified as a nonzero residue nor a nonresidue.

</details>

<a id="section-355-19-existence-versus-construction"></a>
### 19. Existence versus construction {#section-357-19-existence-versus-construction}

What does $(a/p)=1$ provide, and what does it omit?

**Hint 1.** The symbol certifies existence in the field.

**Hint 2.** It does not itself provide a chosen root or an algorithm for finding it.

<details><summary>Full solution</summary>

**Solution.** It proves that two square-root classes exist modulo odd prime $p$. It does not identify them. A square-root algorithm or search is needed for construction.

</details>

<a id="section-369-20-reciprocity-boundary"></a>
### 20. Reciprocity boundary {#section-371-20-reciprocity-boundary}

Why may the reciprocity formula not be applied directly with denominator $15$?

**Hint 1.** The Legendre reciprocity formula names distinct odd prime denominators.

**Hint 2.** Factor the composite denominator and use Jacobi arithmetic with its separate interpretation.

<details><summary>Full solution</summary>

**Solution.** The Legendre reciprocity theorem requires distinct odd prime denominators. For composite $15$, first use the Jacobi definition and factor into symbols modulo $3$ and $5$; a Jacobi value then has weaker solvability meaning.

</details>


<a id="section-384-chapter-summary"></a>

<a id="section-559-exercises-reciprocity-extensions"></a>
### 21. NTP-07-E21. Build both floor counts {#section-563-ntp-07-e21-build-both-floor-counts}

For p=13 and q=5, list the floors $\\lfloor5i/13\\rfloor$ for $1≤i≤6$ and $\\lfloor13j/5\\rfloor$ for $1≤j≤2$. Give the Gauss high-residue count for $(5/13)$, verify the rectangle total, and reconcile the two Legendre symbols.

**Hint 1.** List the indicated finite floor sequences directly.

**Hint 2.** The sum counts every rectangle point on one side or the other of a line with no interior lattice points.

<a id="section-569-ntp-07-e22-a-square-denominator-can-conceal-a-local-fai"></a>
### 22. NTP-07-E22. A square denominator can conceal a local failure {#section-571-ntp-07-e22-a-square-denominator-can-conceal-a-local-fai}

Compute $(2/25)$ and decide whether two has a square root modulo twenty-five. Then count and list the roots of $x^2\\equiv0\\pmod{25}$. Explain which unit hypothesis prevents applying the ordinary two-root conclusion to that last equation.

**Hint 1.** The Jacobi symbol at a squared denominator squares the local sign.

**Hint 2.** A root of the zero congruence is a multiple of five and is not a unit.

<a id="section-577-solutions-reciprocity-extensions"></a>

## Solutions: Reciprocity extensions {#section-579-solutions-reciprocity-extensions}

<a id="section-579-ntp-07-e21-build-both-floor-counts-solution"></a>
### NTP-07-E21. Build both floor counts — solution {#section-581-ntp-07-e21-build-both-floor-counts-solution}

<details><summary>Full solution</summary>

The first list is $0,0,1,1,1,2$, summing to five. The second is two and five, summing to seven. Their total twelve is $6\\cdot2$. The residues $5,10,2,7,12,4$ modulo thirteen have three values above $13/2$, so $(5/13)=-1$. Also $(13/5)=(3/5)=-1$. Their product is one, as required since both primes are one modulo four.

</details>

<a id="section-587-ntp-07-e22-a-square-denominator-can-conceal-a-local-fai"></a>
### NTP-07-E22. A square denominator can conceal a local failure — solution {#section-589-ntp-07-e22-a-square-denominator-can-conceal-a-local-fai}

<details><summary>Full solution</summary>

The Jacobi symbol is $(2/5)^2=(-1)^2=1$. But two is not a square modulo five, so no root exists modulo twenty-five. For zero, the condition is that x be a multiple of five, giving $0,5,10,15,20$. The right-hand side zero is not a unit, and the simple-root derivative $2x$ vanishes modulo five there. Thus neither the nonzero prime-root pair nor its unique-lift conclusion applies.

</details>

<a id="section-595-references-scope-of-the-reciprocity-development"></a>

## Sources: Scope of the reciprocity development {#section-597-references-scope-of-the-reciprocity-development}

The detailed parity, counting, sign, Jacobi and reconstruction arguments above are supplied here. The finite Gauss/floor and reciprocity scopes were checked against [Ben Lynn's Stanford notes on Gauss's lemma](https://crypto.stanford.edu/pbc/notes/numbertheory/gausslemma.html) and [quadratic reciprocity](https://crypto.stanford.edu/pbc/notes/numbertheory/quadrecip.html). The simple-root lift is the explicitly scoped Chapter 6 input.
`;export{e as default};