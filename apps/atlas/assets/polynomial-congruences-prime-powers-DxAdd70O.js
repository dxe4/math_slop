var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: polynomial-congruences-prime-powers
title: "Polynomial Congruences and Prime-Power Lifting"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
---

# Polynomial Congruences and Prime-Power Lifting {#section-1-polynomial-congruences-and-prime-power-lifting}

Solving $f(x)\\equiv 0 \\bmod n$ is not ordinary real root-finding. Composite moduli have zero divisors, repeated roots can split or disappear during lifting, and division by a derivative is legal only when it is a unit. Prime moduli restore field structure; prime powers are then handled one precision layer at a time.

Prerequisites are CRT, units, and finite exponent theorems. This chapter proves the field root bound, develops the simple-root lifting theorem directly, and gives a complete workflow for composite moduli.

<a id="section-5-1-polynomial-functions-modulo-a-modulus"></a>
## 1. Polynomial functions modulo a modulus {#section-7-1-polynomial-functions-modulo-a-modulus}

An integer polynomial respects congruence: $a\\equiv b \\bmod n$ implies $f(a)\\equiv f(b) \\bmod n$. Thus it defines a function on residue classes. Different polynomials can define the same function: modulo $p$, Fermat gives $x^p-x=0$ at every residue although the polynomial is not the zero formal polynomial.

Over a field, the factor theorem holds: if $f(a)=0$, then $f(x)=(x-a)q(x)$. Consequently a nonzero polynomial of degree $d$ over a field has at most $d$ roots. The proof removes one root and inducts on degree.

This bound can fail over a composite modulus. Modulo $8$, $x^{2}\\equiv 1$ has four roots $1,3,5,7$, more than its degree.

<a id="section-13-2-linear-and-quadratic-examples"></a>
## 2. Linear and quadratic examples {#section-15-2-linear-and-quadratic-examples}

Linear congruences were classified by gcd. For $x^{2}\\equiv a \\bmod p$, a quick table handles small $p$; exponent criteria and reciprocity handle large odd primes in the next chapter.

<a id="section-17-worked-factorization-over-a-prime"></a>
### Worked factorization over a prime {#section-19-worked-factorization-over-a-prime}

Solve $x^{2}-5x+6\\equiv 0 \\bmod 7$. Factor as $(x-2)(x-3)$. Because $\\mathbb{Z}/7\\mathbb{Z}$ has no zero divisors, a zero product forces $x\\equiv 2$ or $3$. The same inference would be unsafe modulo a composite number.

Modulo $6$, $(x-2)(x-3)\\equiv 0$ also has $x\\equiv 0$ because the factors become $4$ and $3$, whose product is zero modulo $6$ although neither is.

<a id="section-23-3-taylor-expansion-at-integer-precision"></a>
## 3. Taylor expansion at integer precision {#section-25-3-taylor-expansion-at-integer-precision}

For an integer polynomial and integers $a,t$,

$f(a+p^k t)\\equiv f(a)+p^k t f'(a) (\\bmod p^{2k})$.

Expanding each monomial by the binomial theorem shows every omitted term contains $(p^k t)^{2}$. For $k\\ge 1$, the inequality $2k\\ge k+1$ makes these terms vanish modulo $p^{k+1}$, which is all a one-step lift needs.

Suppose $f(a)=p^k c$. A lift has form $a+p^k t$, with $t$ considered modulo $p$. It must satisfy

$c+t f'(a)\\equiv 0 \\bmod p$.

This is a linear congruence controlling the next digit.

<a id="section-37-4-simple-root-hensel-lifting"></a>
## 4. Simple-root Hensel lifting {#section-39-4-simple-root-hensel-lifting}

**Theorem 6.1.** Let $p$ be prime, $k\\ge1$, and $f\\in\\mathbb Z[x]$. If $f(a)\\equiv 0 \\bmod p^k$ and $p$ does not divide $f'(a)$, then exactly one residue $t \\bmod p$ makes $a+p^k t$ a root modulo $p^{k+1}$.

The derivative is a unit modulo $p$, so the lifting equation has exactly one solution. Repetition produces a unique compatible root modulo every higher power.

<a id="section-43-worked-lift"></a>
### Worked lift {#section-45-worked-lift}

Lift the root $x\\equiv 3 \\bmod 7$ of $x^{2}-2$ to modulus $49$. Here $f(3)=7$, so $c=f(3)/7=1$, and $f'(3)=6$ is a unit modulo $7$. Write $x=3+7t$ and solve $1+6t\\equiv 0 \\bmod 7$, giving $t\\equiv 1$. Thus $x=10$, and $10^{2}-2=98$ is divisible by $49$. (The other root modulo $7$ is $4$; starting from a nonroot such as $2$ would not satisfy the theorem's hypothesis.)

<a id="section-47-5-singular-roots"></a>
## 5. Singular roots {#section-49-5-singular-roots}

If $p\\mid f'(a)$, the linear lifting equation may have no solutions or all $p$ choices. There is no simple-root uniqueness.

For $f(x)=x^{2}$ and root $0 \\bmod p$, lifts from $p$ to $p^{2}$ are $pt$ for all $t \\bmod p$; all work because $p^{2}t^{2}$ is divisible by $p^{2}$. In contrast, $x^{2}-p$ has root $0 \\bmod p$ but no root mod $p^{2}$: $(pt)^{2}-p=p(pt^{2}-1)$ has exact valuation one.

The derivative test is sufficient for unique lifting, not a declaration that singular roots never lift.

<a id="section-55-6-composite-moduli-via-prime-powers"></a>
## 6. Composite moduli via prime powers {#section-57-6-composite-moduli-via-prime-powers}

Factor $n=\\prod p_{i}^{e_{i}}$. Solve the polynomial congruence separately modulo every prime power and combine every tuple of local roots using CRT. The number of roots modulo $n$ is the product of local root counts.

<a id="section-59-worked-reconstruction"></a>
### Worked reconstruction {#section-61-worked-reconstruction}

Solve $x^{2}\\equiv 1 \\bmod 40$. Modulo $5$, roots are $\\pm 1$. Modulo $8$, all odd classes $1,3,5,7$ are roots. CRT therefore produces eight roots modulo $40$: $1,9,11,19,21,29,31,39$.

<a id="section-63-7-repeated-root-and-computation-audits"></a>
## 7. Repeated-root and computation audits {#section-65-7-repeated-root-and-computation-audits}

An exhaustive search modulo a small number proves completeness because every residue was checked. A lifting algorithm proves completeness only if it branches over every solution of the next-digit equation. Factorization must be interpreted in the correct ring, and a degree root bound requires a field or another stated no-zero-divisor hypothesis.

For large inputs, a root list should include direct substitution certificates. When factoring the modulus is part of the algorithm, distinguish the conditional result “given this factorization” from a full end-to-end complexity claim.

<a id="section-69-exercises-with-complete-solutions"></a>
## Project: a prime-power root tree {#section-354-project-a-prime-power-root-tree}

Choose three polynomials exhibiting a simple root, a singular root that branches, and a singular root that dies. Build the complete tree of roots from modulo $p$ through modulo $p^{4}$, showing the next-digit congruence at every edge. Independently exhaust all residues at the final modulus to verify completeness. Report root representatives canonically, count comparisons, and explain why the field degree bound applies only at the first level.

<a id="section-356-chapter-summary"></a>
## 8. A polynomial expression carries more information than its first residue function {#section-361-8-a-polynomial-expression-carries-more-information-than}

An integer polynomial gives a compatible family of functions modulo all positive moduli. Reducing its values at one prime does not determine that entire family. Modulo three, $x^3-x$ vanishes at every residue, so its function agrees with the zero polynomial's function. Modulo nine those two functions differ: at two the first gives six while the zero polynomial gives zero. Replacing an integer polynomial by an arbitrary expression for its first finite-field function can therefore destroy the later lifting problem.

The degree bound concerns the reduced formal polynomial, not the number of symbols in an unreduced expression. If reduction makes every coefficient zero, the nonzero-polynomial hypothesis fails. For instance $3x+3$ is the zero polynomial modulo three and vanishes at every residue despite its integer degree one. By contrast, the nonzero degree-three polynomial $x^3-x$ has exactly three roots modulo three, consistent with the bound rather than contradicting it.

The factor theorem itself is algebraic. For any coefficient ring,
\\[
 x^j-a^j=(x-a)(x^{j-1}+x^{j-2}a+\\cdots+a^{j-1}),
\\]
so $f(x)-f(a)$ is divisible by $x-a$. To bound distinct roots, however, one needs cancellation: from $0=f(b)=(b-a)q(b)$ with $b\\ne a$, a field permits $q(b)=0$. A composite residue ring may have nonzero factors whose product is zero. This is the precise point where the usual induction can fail.

The derivative in this chapter is also formal. For $f(x)=\\sum c_jx^j$ define $f'(x)=\\sum j c_jx^{j-1}$ by integer coefficients. No limit or real differentiability is used. Reduction modulo $p$ can make a coefficient $j$ vanish, as happens for $x^p$. The next-digit theorem depends on the value of that formal polynomial, not a numerical slope estimated from nearby real points.

These distinctions are useful before any arithmetic begins. Retain the integer expression being solved, declare its modulus at each stage, and check whether the reduced polynomial is nonzero and whether its coefficient ring is a field. A finite table can validate the function at one level; it cannot erase the formal data needed to predict another level.

<a id="section-375-9-the-lifting-expansion-has-an-integer-remainder"></a>
## 9. The lifting expansion has an integer remainder {#section-377-9-the-lifting-expansion-has-an-integer-remainder}

Write $f(x)=\\sum_{j=0}^d c_jx^j$ with integer coefficients. Expanding each monomial gives the exact identity
\\[
 f(a+h)=f(a)+hf'(a)+h^2R(a,h),
\\]
where $R(a,h)$ is an integer polynomial in $a,h$. For a monomial, collect the terms
\\[
 (a+h)^j=a^j+ja^{j-1}h+
 \\sum_{\\ell=2}^j\\binom j\\ell a^{j-\\ell}h^\\ell.
\\]
Every term in the last sum has two factors of $h$, and all coefficients are integers. Summing over $j$ proves the identity, including negative integer values of $a$ and $h$.

Set $h=p^kt$, with $k\\ge1$. The remainder is divisible by $p^{2k}$ and therefore by $p^{k+1}$. If $f(a)=p^kc$, division of this exact integer equality by $p^k$ gives
\\[
 f(a+p^kt)/p^k\\equiv c+t f'(a)\\pmod p.
\\]
There are no hidden denominators such as factorials. This is why the proof works at small primes where an analytic-looking Taylor formula could suggest an illegal division.

The quotient $c$ must be obtained from the integer polynomial value or its sufficiently precise residue. Knowing only $f(a)\\equiv0\\pmod{p^k}$ does not say $c\\equiv0\\pmod p$. That zero congruence has discarded exactly the next digit the calculation needs. Knowing $f(a)$ modulo $p^{k+1}$ is sufficient to recover $c$ modulo $p$, but a residue modulo only $p^k$ is not.

For example, if $f(a)=p^k$ then $c=1$, not zero. The derivative term must cancel that one at the next level. If $f(a)$ is divisible by $p^{k+1}$ already, then $c=0$ modulo $p$, and digit zero is a valid lift whenever the other terms permit it. These are different arithmetic situations despite the same statement that $a$ is a root at the old precision.

The one-step linearisation is deliberately limited. It determines roots above one fixed residue at the next power. It does not justify dividing by a nonunit derivative, jumping to arbitrary precision without further calculation, or treating a real approximation as an exact starting root. Its strength comes from a fully controlled integer remainder at the precise modulus being used.

<a id="section-400-10-a-simple-root-has-one-child-and-no-missing-alternati"></a>
## 10. A simple root has one child and no missing alternatives {#section-402-10-a-simple-root-has-one-child-and-no-missing-alternati}

Fix a root class $a\\bmod p^k$. Exactly the $p$ classes
\\[
 a,\\ a+p^k,\\ldots,a+(p-1)p^k
\\]
reduce to it modulo $p^k$. They are distinct modulo $p^{k+1}$, and every possible child is on this list by ordinary division. The lifting equation therefore checks an exhaustive family of children, not just a promising candidate.

Put $d=f'(a)\\bmod p$ and $c=f(a)/p^k\\bmod p$. When $d\\ne0$, multiplication by $d$ is invertible in the prime field. The unique next digit is $t=-cd^{-1}\\bmod p$. Substituting this digit into the expansion proves existence. If another digit worked, subtracting their two equations would give $(t_1-t_2)d=0$ and hence $t_1=t_2$, proving uniqueness.

The derivative premise persists. Formal differentiation produces another integer polynomial, so any lift congruent to $a$ modulo $p$ has the same derivative value modulo $p$. Starting from a simple root at the first level therefore permits the argument to repeat at every subsequent level. No branch can suddenly become singular while remaining above that initial class.

Completeness across the whole level follows by reduction. Any root modulo $p^{k+1}$ reduces to a root modulo $p^k$, because polynomial evaluation respects congruence. Thus lifting every old root and retaining every successful digit produces every new root. This reduction argument is essential: uniqueness above a selected root is not a proof that there were no other roots at the starting level.

For an example with a function that vanishes everywhere at its first level, take $x^3-x$ at $p=3$. Its three roots modulo three are all simple, because its derivative $3x^2-1$ is always minus one modulo three. Each has one child at every higher level. The integer roots zero, one and minus one supply those compatible children, so the roots modulo $3^k$ are exactly $0,1,3^k-1$. The zero polynomial has instead all $3^k$ residues as roots. Their identical first-level functions did not determine identical root trees.

A root certificate should consequently name its initial root, every chosen digit and the derivative premise. The final substitution is a separate useful check on the printed representative. It validates that candidate directly, while the reduction-and-children proof establishes that the list is complete.

<a id="section-418-11-singular-roots-branch-or-die-at-each-single-step"></a>
## 11. Singular roots branch or die at each single step {#section-420-11-singular-roots-branch-or-die-at-each-single-step}

When $d=f'(a)\\equiv0\\pmod p$, the next-digit equation becomes $c\\equiv0\\pmod p$. If $c\\ne0$, none of the $p$ digits works. If $c=0$, every digit works. Thus a singular parent has either zero or $p$ immediate children. The word immediate matters: its children may have different quotients at the next stage and therefore different futures.

For $f(x)=x^2$ at an odd prime, a root modulo $p^k$ is exactly a class divisible by $p^{\\lceil k/2\\rceil}$. Indeed $p^k\\mid x^2$ exactly when twice the valuation of $x$ is at least $k$; zero satisfies the same divisibility statement directly. Canonical roots are
\\[
 x=p^{\\lceil k/2\\rceil}t,\\qquad
 0\\le t<p^{\\lfloor k/2\\rfloor}.
\\]
There are $p^{\\lfloor k/2\\rfloor}$ of them. This formula counts all classes, including zero, without treating the valuation of zero as a finite integer.

The counts at levels one through four are $1,p,p,p^2$. The unchanged count between levels two and three does not mean every parent had one child. At level two only those parents already divisible by $p^2$ can continue; some parents die while another branches into $p$ children. A total root count can hide that internal branching structure.

For $f(x)=x^2-p$, the only root modulo $p$ is zero. Every candidate child is $pt$, and its polynomial value is $p(pt^2-1)$, with exact valuation one. Consequently every branch dies at level two, and no roots exist at any higher level. An initial singular root by itself predicts neither persistence nor failure; the next quotient supplies the distinction.

This classification also explains a tempting error in numerical reasoning. A derivative divisible by $p$ is not merely a “small denominator” to be approximated away. It is noninvertible in the field governing the next digit. Choosing an arbitrary inverse or rounding a quotient invents a different equation. One must enumerate the actual digit solutions, whether there are none or all of them.

The complete tree records survival information that the original root list does not contain. The reference model below displays both pruning and later branching for the square polynomial, alongside a simple tree and a dying tree. The three patterns are theorem-driven consequences of the same one-step equation.

<a id="section-437-12-changing-a-root-representative-changes-its-digit-coo"></a>
## 12. Changing a root representative changes its digit coordinates {#section-439-12-changing-a-root-representative-changes-its-digit-coo}

A root is a class, while the integer quotient used in lifting is evaluated at a representative. These statements are compatible because changing the representative changes the meaning of the next digit in a predictable way.

Replace $a$ by $a'=a+p^ku$. The integer expansion gives
\\[
 c'=f(a')/p^k\\equiv c+u f'(a)\\pmod p,
 \\qquad f'(a')\\equiv f'(a)\\pmod p.
\\]
A child written $a+p^kt$ has the same class modulo $p^{k+1}$ as $a'+p^kt'$ exactly when $t'\\equiv t-u\\pmod p$. Substitution shows
\\[
 c'+t'f'(a')\\equiv
 c+u f'(a)+(t-u)f'(a)=c+t f'(a)\\pmod p.
\\]
Thus the set of actual child classes is unchanged even though the printed digit and quotient may differ.

This is a well-definedness check for the algorithm. A careless report can claim two different answers by comparing digits obtained from different parents representing the same old class. Canonical representatives $0\\le a<p^k$ avoid that ambiguity, but the mathematics does not depend on that convention. The conversion formula explains how another convention must be transported.

For a concrete linear example, solve $2x-1=0$ above the root two modulo three. Using $a=2$ gives $c=1$, derivative two and next digit one, hence child five modulo nine. Using $a'=5=2+3$ gives $c'=3\\equiv0$ and next digit zero; the child is again five. The differing digits describe the same residue, not a contradiction to simple-root uniqueness.

Canonical reduction is also needed after writing a negative lift. A root represented as minus one is displayed as $p^k-1$ in the range $0,\\ldots,p^k-1$. Both forms are legitimate, but a root list must not count them twice. Integer representatives, residue classes and digit coordinates are three layers of description; keeping their conversion rules visible prevents accidental duplication or omission in an exhaustive tree.

This reasoning uses only integer congruences and the formal polynomial expansion. No continuity, calculus or metric notion is needed. The uniqueness statement is exact in a finite fibre of the reduction map.

<a id="section-461-13-local-valuation-constraints-and-crt-give-a-global-ro"></a>
## 13. Local valuation constraints and CRT give a global root certificate {#section-463-13-local-valuation-constraints-and-crt-give-a-global-ro}

Suppose the modulus has a supplied prime-power factorization. Every global root gives one local root in each factor, and CRT bijects every tuple of local roots with one global residue. Polynomial evaluation commutes with these reductions. Consequently a global list is complete exactly when the local lists and the tuple reconstruction are complete. A missing local branch can remove many global roots at once.

For a concrete valuation-controlled example solve $x^2\\equiv0\\pmod{72}$, with $72=8\\cdot9$. Modulo eight, twice the two-adic valuation must be at least three, so $x$ is divisible by four; the local roots are zero and four. Modulo nine, $x$ is divisible by three; the roots are zero, three and six. CRT predicts $2\\cdot3=6$ roots.

The simultaneous divisibility conditions are equivalent to $12\\mid x$, since four and three are coprime. Hence the canonical global list is
\\[
 0,\\ 12,\\ 24,\\ 36,\\ 48,\\ 60\\pmod{72}.
\\]
Every listed square is divisible by 72, because $(12t)^2=144t^2$. Conversely every root satisfies both necessary local conditions and therefore is one of those six classes. This supplies both candidate certificates and a completeness proof without confusing a degree-two polynomial with a two-root bound in a nonfield.

The factorization matters to the status of the result. Given $72=8\\cdot9$, the local arithmetic and reconstruction are exact and small. For a large unknown modulus, an algorithm that first requires its complete factorization has not thereby solved the factorization problem. A proof conditional on supplied factors and an end-to-end complexity claim are different assertions.

The same caution applies to counts. Multiplying local counts is legitimate only for coprime factors and complete local sets. Multiplying counts for overlapping moduli may double-count compatibility conditions. Choosing one root from each factor instead of every tuple produces a subset, not a full solution set. CRT is a bijection with specified inputs, not a slogan that licenses arbitrary local combinations.

These local/global distinctions link the unit and lifting chapters. Units allow inverses and order reduction inside the local multiplicative groups. Nonunits require valuation or singular-branch information first. CRT combines the resulting exact statements after those local domains have been respected.

<a id="section-479-14-compatible-finite-roots-need-not-be-integer-zeros"></a>
## 14. Compatible finite roots need not be integer zeros {#section-481-14-compatible-finite-roots-need-not-be-integer-zeros}

A simple root at the first level determines compatible roots at every finite higher precision. That does not claim there is an ordinary integer $x$ with $f(x)=0$ exactly. For $f(x)=x^2+1$ and $p=5$, the root two is simple because its derivative is four modulo five. The lifting theorem therefore provides one compatible root above it modulo every $5^k$.

Yet no integer has square equal to minus one. If one fixed integer $A$ represented roots at arbitrarily large powers, then every sufficiently large $5^k$ would divide the fixed positive integer $A^2+1$. Taking $5^k>A^2+1$ gives a contradiction. Thus exact finite compatibility is a different kind of existence statement from an integer zero.

Even the behavior of canonical representatives needs care. Their growth alone does not disprove an integer root: the fixed integer minus one is represented modulo $p^k$ by the growing sequence $p^k-1$. Conversely a long initial sequence that happens to change little does not establish an exact zero. Divisibility at a specified precision and equality in the integers are different predicates.

The future inverse-limit language packages compatible residue families into a new number system. That construction is not needed for the finite proof here, and it should not be smuggled in as a calculus prerequisite. At this point the established conclusion is precisely that each finite level has a unique child above the chosen simple parent, with all reductions compatible.

For singular roots, even a nonempty list at one level supplies less information. It may die at the next level, or branch and later prune. To claim roots at all finite levels one must verify continued existence, not merely inspect one singular derivative. The three-polynomial model makes this distinction finite and checkable.

This also clarifies what a final substitution certifies. Checking $f(a)\\equiv0\\pmod{p^4}$ proves membership at that fourth level. The tree proof establishes how it connects to earlier levels and whether other fourth-level roots were missed. Neither assertion alone is a theorem about an exact integer zero. A careful root certificate states its modulus as part of the claim.

<a id="section-493-solutions-complete-three-polynomial-prime-power-root-tr"></a>

## Summary

<a id="section-358-chapter-summary"></a>
Over a prime field, factorization and the degree root bound behave as expected. A root modulo $p^k$ lifts by solving one linear next-digit congruence. An invertible derivative guarantees a unique lift; a singular derivative demands explicit branching analysis. General composite moduli reduce to prime powers and reassemble through CRT.
<a id="section-359-8-a-polynomial-expression-carries-more-information-than"></a>

## Exercises {#section-71-exercises-with-complete-solutions}

<a id="section-71-1-root-bound"></a>
### 1. Root bound {#section-73-1-root-bound}

Why can a nonzero cubic over $\\mathbb{F}_{p}$ not have four roots?

**Hint 1.** Use repeated division by the monic linear factors of distinct roots.

**Hint 2.** The degree drops once per root in a field.

<details><summary>Full solution</summary>

**Solution.** Repeated factor-theorem division by four distinct linear factors would make their degree-four product divide the cubic, impossible for a nonzero polynomial.

</details>

<a id="section-85-2-formal-versus-functional-equality"></a>
### 2. Formal versus functional equality {#section-87-2-formal-versus-functional-equality}

Give a nonzero polynomial that vanishes at every residue modulo $5$.

**Hint 1.** Use Fermat's all-residue polynomial.

**Hint 2.** The polynomial X to the fifth minus X has five distinct zeros but is not the zero formal polynomial.

<details><summary>Full solution</summary>

**Solution.** $f(x)=x^{5}-x$ is nonzero formally, while Fermat gives $a^{5}-a\\equiv 0$ for every residue $a$.

</details>

<a id="section-99-3-prime-quadratic"></a>
### 3. Prime quadratic {#section-101-3-prime-quadratic}

Solve $x^{2}-1\\equiv 0 \\bmod 11$.

**Hint 1.** Factor the difference of squares.

**Hint 2.** A zero product over the prime field forces one linear factor to vanish.

<details><summary>Full solution</summary>

**Solution.** $(x-1)(x+1)=0$ in a field, so $x\\equiv 1$ or $10$.

</details>

<a id="section-113-4-zero-divisor-surprise"></a>
### 4. Zero-divisor surprise {#section-115-4-zero-divisor-surprise}

Find all roots of $x^{2}-1 \\bmod 8$.

**Hint 1.** List the odd residues modulo eight.

**Hint 2.** Their squares are all one because the ring has zero divisors.

<details><summary>Full solution</summary>

**Solution.** Direct checking gives all odd residues $1,3,5,7$. An odd square is $1 \\bmod 8$; no even square is.

</details>

<a id="section-127-5-cubic-roots"></a>
### 5. Cubic roots {#section-129-5-cubic-roots}

Solve $x^{3}-x\\equiv 0 \\bmod 7$.

**Hint 1.** Factor the polynomial as the product of three linear factors.

**Hint 2.** Over the field the roots are zero, one and minus one.

<details><summary>Full solution</summary>

**Solution.** Factor $x(x-1)(x+1)$. The field has no zero divisors, giving roots $0,1,6$.

</details>

<a id="section-141-6-taylor-congruence"></a>
### 6. Taylor congruence {#section-143-6-taylor-congruence}

For $f(x)=x^{3}+2x$, expand $f(a+pt)$ modulo $p^{2}$.

**Hint 1.** Expand the cubic by the binomial theorem.

**Hint 2.** Terms with at least two copies of the increment vanish modulo the square of the prime.

<details><summary>Full solution</summary>

**Solution.** Expansion gives $a^{3}+3a^{2}pt+$ terms divisible by $p^{2}$, plus $2a+2pt$. Thus it is $f(a)+pt(3a^{2}+2)=f(a)+pt f'(a) \\bmod p^{2}$.

</details>

<a id="section-155-7-lift-a-square-root"></a>
### 7. Lift a square root {#section-157-7-lift-a-square-root}

Lift $x\\equiv 2 \\bmod 5$, a root of $x^{2}+1$, to modulo $25$.

**Hint 1.** Write the new root as two plus five times a residue.

**Hint 2.** Divide the expanded value by five and solve the resulting linear congruence.

<details><summary>Full solution</summary>

**Solution.** $f(2)=5$, so $c=1$; $f'(2)=4$. Solve $1+4t\\equiv 0 \\bmod 5$, giving $t=1$. The lift is $7$, and $50$ is divisible by $25$.

</details>

<a id="section-169-8-other-lift"></a>
### 8. Other lift {#section-171-8-other-lift}

Lift the other root $3 \\bmod 5$ of $x^{2}+1$ to modulo $25$.

**Hint 1.** Write the new root as three plus five times a residue.

**Hint 2.** The derivative at three is a nonzero class modulo five.

<details><summary>Full solution</summary>

**Solution.** $f(3)=10$, so $c=2$; derivative $6\\equiv 1$. Solve $2+t\\equiv 0$, giving $t=3$. The lift is $18$, and $18^{2}+1=325=13*25$.

</details>

<a id="section-183-9-lift-again"></a>
### 9. Lift again {#section-185-9-lift-again}

Lift $7 \\bmod 25$ from Exercise 7 to a root modulo $125$.

**Hint 1.** Write the next lift as seven plus twenty-five times a residue.

**Hint 2.** Use the divided residual value and derivative modulo five.

<details><summary>Full solution</summary>

**Solution.** Write $7+25t$. Since $(7^{2}+1)/25=2$ and derivative is $14\\equiv 4 \\bmod 5$, solve $2+4t\\equiv 0$, giving $t=2$. The lift is $57$; $57^{2}+1=3250=26*125$.

</details>

<a id="section-197-10-singular-many-lifts"></a>
### 10. Singular many lifts {#section-199-10-singular-many-lifts}

How many roots of $x^{2}\\equiv 0 \\bmod 9$ are there?

**Hint 1.** A square divisible by nine must have its base divisible by three.

**Hint 2.** List those residue classes modulo nine.

<details><summary>Full solution</summary>

**Solution.** Divisibility by $9$ requires $v_{3}(x)\\ge 1$, so residues $0,3,6$ work. There are three.

</details>

<a id="section-211-11-singular-no-lift"></a>
### 11. Singular no lift {#section-213-11-singular-no-lift}

Show $x^{2}\\equiv 3 \\bmod 9$ has no solution despite $x\\equiv 0 \\bmod 3$ solving it modulo $3$.

**Hint 1.** Any root modulo nine would reduce to zero modulo three.

**Hint 2.** Squaring a multiple of three gives zero, not three, modulo nine.

<details><summary>Full solution</summary>

**Solution.** Squares modulo $9$ are $0,1,4,7$; $3$ is absent. Equivalently any lift $x=3t$ has square divisible by $9$, not congruent to $3$.

</details>

<a id="section-225-12-roots-modulo-twelve"></a>
### 12. Roots modulo twelve {#section-227-12-roots-modulo-twelve}

Solve $x^{2}\\equiv 1 \\bmod 12$.

**Hint 1.** Solve separately modulo four and three.

**Hint 2.** Use CRT to combine every pair of local roots.

<details><summary>Full solution</summary>

**Solution.** Modulo $4$ roots are $1,3$; modulo $3$ roots are $1,2$. CRT gives $1,5,7,11$ modulo $12$.

</details>

<a id="section-239-13-root-count-product"></a>
### 13. Root-count product {#section-241-13-root-count-product}

If a polynomial has $r$ roots modulo $m$ and $s$ modulo coprime $n$, prove it has $rs$ roots modulo $mn$.

**Hint 1.** CRT is a bijection on residue classes.

**Hint 2.** A polynomial vanishes at the global class exactly when it vanishes in both coordinates.

<details><summary>Full solution</summary>

**Solution.** CRT bijects each pair of local root classes with one class modulo $mn$. Polynomial evaluation respects reduction in both directions.

</details>

<a id="section-253-14-solve-modulo-fifteen"></a>
### 14. Solve modulo fifteen {#section-255-14-solve-modulo-fifteen}

Find all roots of $x^{2}+x-2 \\bmod 15$.

**Hint 1.** Factor the polynomial as the product of x minus one and x plus two.

**Hint 2.** Find local roots modulo three and five, then combine the distinct local classes.

<details><summary>Full solution</summary>

**Solution.** Modulo $3$, $(x-1)(x+2)$ has the single root $1$ because the factors coincide. Modulo $5$, roots are $1,3$. CRT gives $x\\equiv 1,13 \\bmod 15$.

</details>

<a id="section-267-15-derivative-condition"></a>
### 15. Derivative condition {#section-269-15-derivative-condition}

For $f(x)=x^{2}-a$ and odd prime $p$, why is every nonzero root modulo $p$ simple?

**Hint 1.** The formal derivative is twice the root.

**Hint 2.** Both factors are nonzero modulo the odd prime.

<details><summary>Full solution</summary>

**Solution.** The derivative is $2x$. Since both $2$ and nonzero $x$ are units modulo odd $p$, the derivative is nonzero.

</details>

<a id="section-281-16-unique-compatible-tower"></a>
### 16. Unique compatible tower {#section-283-16-unique-compatible-tower}

Explain why a simple root modulo $p$ determines one root modulo every $p^k$.

**Hint 1.** A simple root has one allowed next digit at each stage.

**Hint 2.** Induct on the precision, checking that the derivative remains nonzero modulo the prime.

<details><summary>Full solution</summary>

**Solution.** The derivative remains nonzero modulo $p$ for every congruent lift. The theorem gives exactly one next digit at each stage, so induction constructs a unique compatible tower.

</details>

<a id="section-295-17-a-degree-bound-misuse"></a>
### 17. A degree-bound misuse {#section-297-17-a-degree-bound-misuse}

Refute “a degree-two congruence has at most two roots modulo every integer.”

**Hint 1.** Use the quadratic difference of squares modulo eight.

**Hint 2.** Its four distinct roots exceed the proposed degree bound.

<details><summary>Full solution</summary>

**Solution.** $x^{2}-1 \\bmod 8$ has four roots. The usual degree bound relies on coefficient arithmetic in a field.

</details>

<a id="section-309-18-direct-certificate"></a>
### 18. Direct certificate {#section-311-18-direct-certificate}

Verify that $x=57$ is a root of $x^{2}+1 \\bmod 125$ without trusting the lift calculation.

**Hint 1.** Substitute the proposed integer directly.

**Hint 2.** The value need only be divisible by 125, independent of how the candidate was discovered.

<details><summary>Full solution</summary>

**Solution.** $57^{2}+1=3249+1=3250=26*125$, so direct division certifies the claim.

</details>

<a id="section-323-19-count-roots-modulo-twenty-four"></a>
### 19. Count roots modulo twenty-four {#section-325-19-count-roots-modulo-twenty-four}

How many roots has $x^{2}\\equiv 1 \\bmod 24$?

**Hint 1.** Use CRT at eight and three.

**Hint 2.** Multiply the four local roots at eight by the two at three.

<details><summary>Full solution</summary>

**Solution.** Modulo $8$ there are four roots, and modulo $3$ there are two. Since the moduli are coprime, CRT gives $4*2=8$ roots modulo $24$.

</details>

<a id="section-337-20-a-simple-linear-lift"></a>
### 20. A simple linear lift {#section-339-20-a-simple-linear-lift}

Lift the root $x\\equiv 2 \\bmod 3$ of $2x-1$ to a root modulo $9$.

**Hint 1.** Write the root as two plus three times a residue.

**Hint 2.** Substitute into twice x minus one and solve modulo nine.

<details><summary>Full solution</summary>

**Solution.** Write $x=2+3t$. Then $2x-1=3+6t=3(1+2t)$, so require $1+2t\\equiv 0 \\bmod 3$. This gives $t\\equiv 1$, hence $x\\equiv 5 \\bmod 9$; indeed $2*5-1=9$.

</details>


<a id="section-352-project-a-prime-power-root-tree"></a>

<a id="section-567-exercises-optional-lifting-extensions"></a>
### 21. NTP-06-E21: compare representative-dependent digits {#section-569-ntp-06-e21-compare-representative-dependent-digits}

For $f(x)=x^2-1$ at $p=3$, use parent representatives $a=2$ and $a'=8$ of the same class modulo three. Find the next digit for each and show that both produce the same root modulo nine. State the general digit-conversion rule.

**Hint 1.** Write both lifts as their chosen parent plus three times a digit.

**Hint 2.** Changing the parent by three times an integer subtracts that integer from the new digit modulo three.

<a id="section-575-ntp-06-e22-distinguish-counts-from-branch-histories"></a>
### 22. NTP-06-E22: distinguish counts from branch histories {#section-577-ntp-06-e22-distinguish-counts-from-branch-histories}

For $f(x)=x^2$ at $p=3$, explain why the root counts modulo 9 and 27 are both three even though a singular parent cannot have exactly one immediate child. Identify which parents survive and give all final roots modulo 81.

**Hint 1.** A singular branch can die while another branch has three children.

**Hint 2.** Track the actual multiples of the required power of three rather than inferring branches from total counts.

<a id="section-583-solutions-optional-lifting-extensions"></a>

## Solutions: complete three-polynomial prime-power root trees {#section-495-solutions-complete-three-polynomial-prime-power-root-tr}

This is one complete hand-derived reference model for the original project. Choose $p=3$ and
\\[
 f(x)=x^2-1,\\qquad g(x)=x^2,\\qquad h(x)=x^2-3.
\\]
Use canonical parents $0\\le a<3^k$ and digits $t=0,1,2$, testing every child $a+3^kt$. In each row below, $c$ means the residue of the exact quotient $F(a)/3^k$ modulo three and $d$ means $F'(a)$ modulo three. The three entries in the digit-test column are $c+td$ for $t=0,1,2$, in that order; zero marks precisely a retained child. These are mathematical tables, not program output.

At the first level, direct tests of residues zero, one and two give values $(2,0,0)$ for $f$, $(0,1,1)$ for $g$, and $(0,1,1)$ for $h$, all modulo three. Thus the initial root sets are $\\{1,2\\}$, $\\{0\\}$ and $\\{0\\}$.

For the simple polynomial the complete edge table is:

| old modulus | parent $a$ | $(c,d)$ | digit-test residues | candidate children in digit order | retained child |
| --- | --- | --- | --- | --- | --- |
| $3$ | $1$ | $(0,2)$ | $0,2,1$ | $1,4,7$ | $1$ |
| $3$ | $2$ | $(1,1)$ | $1,2,0$ | $2,5,8$ | $8$ |
| $9$ | $1$ | $(0,2)$ | $0,2,1$ | $1,10,19$ | $1$ |
| $9$ | $8$ | $(1,1)$ | $1,2,0$ | $8,17,26$ | $26$ |
| $27$ | $1$ | $(0,2)$ | $0,2,1$ | $1,28,55$ | $1$ |
| $27$ | $26$ | $(1,1)$ | $1,2,0$ | $26,53,80$ | $80$ |

The quotients for the nontrivial parents are $f(2)/3=1$, $f(8)/9=7$ and $f(26)/27=25$, each one modulo three. The successive complete root sets are therefore
\\[
 \\{1,2\\},\\quad\\{1,8\\},\\quad\\{1,26\\},\\quad\\{1,80\\}.
\\]
Both final roots are directly certified: $f(1)=0$ and $f(80)=6399=79\\cdot81$.

For the branching polynomial every derivative is zero modulo three at a root. Its complete table is:

| old modulus | parent $a$ | $(c,d)$ | digit-test residues | candidate children | retained children |
| --- | --- | --- | --- | --- | --- |
| $3$ | $0$ | $(0,0)$ | $0,0,0$ | $0,3,6$ | $0,3,6$ |
| $9$ | $0$ | $(0,0)$ | $0,0,0$ | $0,9,18$ | $0,9,18$ |
| $9$ | $3$ | $(1,0)$ | $1,1,1$ | $3,12,21$ | none |
| $9$ | $6$ | $(1,0)$ | $1,1,1$ | $6,15,24$ | none |
| $27$ | $0$ | $(0,0)$ | $0,0,0$ | $0,27,54$ | $0,27,54$ |
| $27$ | $9$ | $(0,0)$ | $0,0,0$ | $9,36,63$ | $9,36,63$ |
| $27$ | $18$ | $(0,0)$ | $0,0,0$ | $18,45,72$ | $18,45,72$ |

Here $g(3)/9=1$, $g(6)/9=4$, $g(9)/27=3$ and $g(18)/27=12$, explaining the differing singular outcomes. The complete sets are
\\[
 \\{0\\},\\quad\\{0,3,6\\},\\quad\\{0,9,18\\},\\quad
 \\{0,9,18,27,36,45,54,63,72\\}.
\\]
Every final root is $9q$ and has square $81q^2$.

For the dying polynomial there is just one parent to test: at modulus three, $a=0$ gives $c=-1\\equiv2$, $d=0$. The tests for digits zero, one and two are $2,2,2$, with candidate children $0,3,6$, so none survives modulo nine. The next two levels have no parents and no children. Directly, every multiple of three has square zero modulo nine and hence $h(x)\\equiv6$, while a nonmultiple has nonzero square modulo three. Thus no final residue can be a root.

The independent final exhaustion uses all 81 residues, not the retained tree nodes alone. In the table, row $q$ covers $x=9q+r$ for all $r=0,\\ldots,8$. Each nine-character string is a list of nine Boolean membership results in increasing $r$; one means the polynomial is zero modulo 81. These are flags, not binary-encoded integers.

| $q$ | residues covered | $f$ flags | $g$ flags | $h$ flags |
| --- | --- | --- | --- | --- |
| $0$ | $0$ through $8$ | $010000000$ | $100000000$ | $000000000$ |
| $1$ | $9$ through $17$ | $000000000$ | $100000000$ | $000000000$ |
| $2$ | $18$ through $26$ | $000000000$ | $100000000$ | $000000000$ |
| $3$ | $27$ through $35$ | $000000000$ | $100000000$ | $000000000$ |
| $4$ | $36$ through $44$ | $000000000$ | $100000000$ | $000000000$ |
| $5$ | $45$ through $53$ | $000000000$ | $100000000$ | $000000000$ |
| $6$ | $54$ through $62$ | $000000000$ | $100000000$ | $000000000$ |
| $7$ | $63$ through $71$ | $000000000$ | $100000000$ | $000000000$ |
| $8$ | $72$ through $80$ | $000000001$ | $100000000$ | $000000000$ |

The flags have proofs independent of the digit recursion. For $f$, the factors $x-1,x+1$ cannot both be divisible by three, since their difference is two. Divisibility of their product by 81 therefore forces one factor to be divisible by 81, giving exactly residues one and 80. For $g$, $81\\mid x^2$ exactly when $9\\mid x$. For $h$, the preceding modulo-nine obstruction rules out all residues. These equivalences certify every cell of the 81-entry scans and all nonroot entries, as well as the final candidates. No assumption that the tree was complete enters this check.

Count a comparison as one Boolean test of a polynomial residue, or its equivalent next-digit residue, against zero; arithmetic operations inside a test are not counted separately. The lifting route uses three initial tests for each polynomial, then three tests for every existing parent. It therefore uses $3+3(2+2+2)=21$ comparisons for $f$, $3+3(1+3+3)=24$ for $g$, and $3+3(1)=6$ for $h$: 51 in total. The independent final scans have 81 entries each, adding 243 comparisons. Direct scans of all four moduli would instead test $3+9+27+81=120$ residues per polynomial,360 total. These are exact counts in the declared logical comparison model, not observed runtime or bit-operation complexity.

At the prime level each reduced polynomial is nonzero of degree two over a field, so the field root bound applies. At levels nine,27 and 81 the residue rings have zero divisors. In particular $g$ has nine roots at the final level, exceeding two without contradicting a field theorem. The simple derivative governs uniqueness only for $f$; the singular tables show actual branching and death rather than assigning an inverse to zero.

<a id="section-561-rubric-for-the-original-root-tree-investigation"></a>
### Rubric for the original root-tree investigation {#section-563-rubric-for-the-original-root-tree-investigation}

Check six components separately: all three polynomials and the common prime; complete first-level tests; every digit of every existing parent through $3^4$; canonical final representatives and direct certificates; an independent final 81-residue exhaustion with all nonroots covered; and comparison counts with an explicit cost unit plus the field-bound explanation. A missing digit requires rebuilding that parent's full three-child list. A correct final list without a completeness argument needs the reduction/independent-exhaustion repair. Treating flags as observed software output needs an evidence correction: this reference is a hand proof/table and supplies no program run, timing, human assessment or learner result.

<a id="section-565-exercises-optional-lifting-extensions"></a>

## Solutions: optional lifting extensions {#section-585-solutions-optional-lifting-extensions}

<a id="section-585-ntp-06-e21-compare-representative-dependent-digits-solu"></a>
### NTP-06-E21: compare representative-dependent digits — solution {#section-587-ntp-06-e21-compare-representative-dependent-digits-solu}

<details><summary>Full solution</summary>

At $a=2$, the quotient is one and the derivative is four, giving $1+t=0\\pmod3$, so $t=2$ and child eight. At $a'=8$, the quotient $(64-1)/3=21$ is zero modulo three and the derivative 16 is one modulo three. Its next digit is zero, again giving child eight modulo nine. Here $a'=a+3u$ with $u=2$, so the conversion is $t'=t-u\\pmod3$. Generally at level $p^k$ that rule follows from $a'+p^kt'=a+p^k(u+t')$.

</details>

<a id="section-593-ntp-06-e22-distinguish-counts-from-branch-histories-sol"></a>
### NTP-06-E22: distinguish counts from branch histories — solution {#section-595-ntp-06-e22-distinguish-counts-from-branch-histories-sol}

<details><summary>Full solution</summary>

At modulus nine the parents are zero, three and six. Above zero the quotient $a^2/9$ is zero modulo three, so all children $0,9,18$ survive modulo 27. Above three and six the quotient is one modulo three, so neither has a child. The new total is still three: it came from one three-way branch and two deaths. At modulus 27 all three parents have quotient zero modulo three and each branches three ways, giving canonical final roots $0,9,18,27,36,45,54,63,72$ modulo 81.

</details>

`;export{e as default};