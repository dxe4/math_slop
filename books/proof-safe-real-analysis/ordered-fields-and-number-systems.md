
# Ordered Fields and the Architecture of the Real Numbers

Calculus often treats the real line as a familiar stage on which functions move. Analysis asks what holds that stage up. Why is there always an integer beyond a given real number? Why can a rational number be squeezed between any two distinct reals? Why does every positive real number have a square root, while the corresponding statement fails inside the rationals? None of these facts follows from decimal notation alone.

This chapter separates three layers that are easy to blur:

1. **algebra**, supplied by the field operations;
2. **order**, which makes inequalities compatible with those operations;
3. **completeness**, which rules out gaps.

The distinction matters. The rational numbers satisfy the same ordered-field rules as the real numbers, so any conclusion proved from algebra and order alone must hold in both. A theorem that is true in \(R\) but false in \(Q\) must use something more. Usually that extra ingredient is completeness.

The local prerequisite is [Quantifiers, Suprema, and Completeness](quantifiers-completeness.md), especially the definitions of upper bound and supremum. No construction of the real numbers is assumed.

## 1. Axioms are a dependency ledger

An axiom system is not a ceremonial list. It is a compact declaration of which operations exist and which transformations are licensed. When a theorem is proved from those axioms, it travels to every structure satisfying them.

A **field** is a set \(F\) with two operations, addition and multiplication, satisfying the familiar laws. For all \(a,b,c\in F\):

- \(a+b=b+a\) and \(ab=ba\);
- \((a+b)+c=a+(b+c)\) and \((ab)c=a(bc)\);
- there are distinct elements \(0\) and \(1\) with \(a+0=a\) and \(a\cdot 1=a\);
- every \(a\) has an additive inverse \(-a\) with \(a+(-a)=0\);
- every nonzero \(a\) has a multiplicative inverse \(a^{-1}\) with \(aa^{-1}=1\);
- multiplication distributes over addition: \(a(b+c)=ab+ac\).

Subtraction and division are derived operations: \(a-b\) means \(a+(-b)\), and \(a/b\) means \(ab^{-1}\) when \(b\ne 0\). This makes restrictions visible. Division by zero is not an exotic value that the field forgot to name; it is impossible within the field laws. If \(0\) had an inverse, then \(0\cdot 0^{-1}\) would equal both \(0\) and \(1\).

An **ordered field** is a field equipped with a strict order \(<\) such that:

1. exactly one of \(a<b\), \(a=b\), or \(b<a\) holds;
2. \(a<b\) and \(b<c\) imply \(a<c\);
3. adding the same number preserves order: \(a<b\) implies \(a+c<b+c\);
4. multiplying positive numbers preserves positivity: \(0<a\) and \(0<b\) imply \(0<ab\).

The non-strict relation is defined by \(a\le b\) when \(a<b\) or \(a=b\). The compatibility laws let algebra and order cooperate, but they do not supply least upper bounds.

Both \(Q\) and \(R\) are ordered fields. The complex numbers are a field but cannot be ordered in a way compatible with the field operations. Indeed, in any ordered field every nonzero square is positive. If \(C\) admitted such an order, then \(i^2=-1\) would be positive, while \(1=1^2\) would also be positive. Their sum \(0\) would be positive, a contradiction.

### Worked example 1 (squares and order)

### Worked derivation: why squares are nonnegative

Let \(a\) be in an ordered field. If \(a=0\), then \(a^2=0\). If \(a>0\), compatibility gives \(a^2>0\). If \(a<0\), adding \(-a\) to both sides gives \(0<-a\); hence \((-a)^2>0\). But \((-a)^2=a^2\), so again \(a^2>0\).

This tiny proof is worth auditing. Trichotomy divided the problem into cases. Additive compatibility turned a negative element into a positive inverse. Multiplicative compatibility handled the square. Completeness played no role, so the conclusion holds in every ordered field.

## 2. Familiar rules are theorems, not extra permissions

Once the axioms are fixed, many school-algebra rules can be derived rather than assumed.

**Cancellation.** If \(a+c=b+c\), add \(-c\) to both sides and use associativity to obtain \(a=b\). If \(ac=bc\) and \(c\ne 0\), multiply by \(c^{-1}\) to obtain \(a=b\).

**Zero-product property.** If \(ab=0\) and \(a\ne 0\), multiply by \(a^{-1}\) to obtain \(b=0\). Thus \(ab=0\) implies \(a=0\) or \(b=0\).

**Sign reversal.** If \(a<b\), add \(-a-b\) to obtain \(-b<-a\). Negation reverses an inequality; it does not preserve it.

**Multiplication by a negative number.** If \(a<b\) and \(c<0\), then \(-c>0\), so \(a(-c)<b(-c)\). Negating both sides gives \(bc<ac\). The reversal is derived from the positive multiplication rule.

**Reciprocal order.** If \(0<a<b\), then \(ab>0\), and

\(1/a-1/b=(b-a)/(ab)>0\).

Therefore \(1/b<1/a\). The common slogan “taking reciprocals reverses inequalities” requires both quantities to be positive, or both negative with a careful case analysis. It is not safe across zero.

### Worked example 2 (a sharp quadratic bound)

### Worked inequality: completing a square

For every real \(x\),

\(x^2-6x+13=(x-3)^2+4\ge 4\).

Equality holds exactly when \(x=3\). The proof uses only ordered-field facts and therefore holds in every ordered field. It does not require differentiation, a graph, or completeness.

This illustrates a reliable method: convert an inequality into a claim that a square is nonnegative. But it also exposes a boundary. Not every positive expression is visibly a sum of squares, and the existence of a minimizer on an arbitrary domain may require compactness or completeness.

## 3. Natural numbers inside an ordered field

Starting from \(1\), define

\(2=1+1\), \(3=1+1+1\), and so on.

In an ordered field, \(1>0\): it cannot be negative because then \(1^2\) would be positive while equaling \(1\), and it cannot be zero because field identities require \(0\ne 1\). Sums of positive elements are positive, so

\(0<1<2<3<\ldots\).

The symbol \(n\) can therefore denote both a natural number and its embedded field element. This identification is harmless when remembered and confusing when forgotten. A statement about all natural indices is discrete; a statement about all real values is continuous.

The **principle of mathematical induction** says that if a property \(P(n)\) holds at a starting natural number and \(P(n)\) implies \(P(n+1)\), then it holds for every later natural number. The **well-ordering principle** says every nonempty subset of the natural numbers has a least element. In standard foundations these principles are equivalent, given the usual construction of \(N\).

### Worked example 3 (geometric cancellation)

### Worked proof: the finite geometric sum

For \(r\ne 1\), prove

\(1+r+r^2+\ldots+r^n=(1-r^{n+1})/(1-r)\).

At \(n=0\), both sides equal \(1\). Suppose the formula holds at \(n\). Adding \(r^{n+1}\) gives

\[(1-r^{n+1})/(1-r)+r^{n+1}\]

\[=[1-r^{n+1}+r^{n+1}(1-r)]/(1-r)\]

\(=(1-r^{n+2})/(1-r)\).

Thus the statement holds at \(n+1\), completing induction. Notice the excluded case \(r=1\). The original sum remains meaningful there and equals \(n+1\); only the displayed quotient fails. A formula’s denominator restriction is not necessarily a restriction on the underlying object.

## 4. Completeness forces the Archimedean property

The natural numbers increase without bound in \(R\). Formally:

**Archimedean property.** For every real \(x\), there is a natural number \(n\) with \(n>x\).

This may feel too obvious to prove. Yet some ordered fields contain positive **infinitesimals** smaller than \(1/n\) for every natural \(n\), along with infinitely large elements greater than every natural number. The Archimedean property is not an ordered-field axiom.

### Proof from completeness

Suppose instead that \(N\) were bounded above in \(R\). Completeness would give \(s=\sup N\). Since \(s-1\) is smaller than the least upper bound, it cannot itself be an upper bound. Therefore some natural number \(n\) satisfies \(n>s-1\). Adding \(1\) gives \(n+1>s\). But \(n+1\) is another natural number, contradicting that \(s\) is an upper bound of \(N\). Hence \(N\) is unbounded above.

The proof is short because the dependency is concentrated. Ordered-field algebra rearranges \(n>s-1\); completeness supplies \(\sup N\); the successor operation produces a larger natural number. If completeness is removed, the argument stops at its first sentence.

Several useful forms follow.

- For every \(\varepsilon>0\), some natural \(n\) satisfies \(1/n<\varepsilon\). Choose \(n>1/\varepsilon\) and take reciprocals of positive quantities.
- For every positive \(y\) and every real \(x\), some natural \(n\) satisfies \(ny>x\). Apply the property to \(x/y\).
- For every real \(x\), some integer \(m\) satisfies \(m\le x<m+1\). This is the floor theorem proved next.

The first consequence is the engine behind countless epsilon proofs. It says reciprocal natural scales can be made arbitrarily fine.

## 5. Floors turn continuous location into a discrete index

For each real \(x\), the **floor** \(⌊x⌋\) is the unique integer \(m\) such that

\(m\le x<m+1\).

Existence is not merely a notation convention. We prove it using the Archimedean property and well-ordering.

For this proof, \(\mathbb{N}=\{1,2,3,\ldots\}\). Choose
\(M\in\mathbb{N}\) with \(M>1-x\), so \(x+M>1\). The set

\[A=\{n\in\mathbb{N}:n>x+M\}\]

is nonempty by the Archimedean property. Let \(k\) be its least member. Since
\(x+M>1\), we have \(k\ge 2\), so \(k-1\in\mathbb{N}\). Minimality of \(k\)
then gives

\[k-1\le x+M<k.\]

Set \(m=k-M-1\). This is an integer, and subtracting \(M\) from the displayed
inequalities gives

\[m\le x<m+1.\]

The shift by \(M\) is what makes well-ordering usable for negative \(x\);
applying it directly to positive natural numbers greater than \(x\) would lose
the lower inequality. Uniqueness follows because two distinct integers cannot
both bracket \(x\) in half-open intervals of unit length.

For negative values, floor points left, not toward zero. Thus \(⌊-1.2⌋=-2\). The integer \(-1\) is greater than \(-1.2\), so it cannot satisfy the defining lower inequality.

### Worked use: locating a decimal scale

Let \(x>0\). Apply the floor theorem to \(\log_{10} x\) if logarithms are available: there is an integer \(m\) such that \(m\le \log_{10} x<m+1\), hence \(10^m\le x<10^{m+1}\). Without logarithms, an analogous conclusion follows by applying the Archimedean property to powers and using a least-index argument. This locates the scientific-notation exponent before any digits are computed.

## 6. Rational numbers are dense

A subset \(D\) of \(R\) is **dense** when every open interval contains a point of \(D\). Equivalently, whenever \(a<b\), there exists \(d\in D\) with \(a<d<b\).

**Density of \(Q\).** If \(a<b\) are real, then some rational number lies strictly between them.

### Proof

Because \(b-a>0\), choose a natural number \(n\) such that

\(n>1/(b-a)\).

Then \(1/n<b-a\), so \(na+1<nb\). By the floor theorem, let \(m=⌊na⌋+1\). We have \(na<m\), while

\(m=⌊na⌋+1\le na+1<nb\).

Dividing by positive \(n\) gives

\(a<m/n<b\).

The number \(m/n\) is rational, as required.

This proof is a reusable machine. First choose a mesh \(1/n\) finer than the interval width. Then select the first grid point to the right of \(a\). Fineness prevents that point from jumping past \(b\).

### Quantitative version

The argument proves more than existence. Given \(a<b\), every \(n\) with \(n>1/(b-a)\) produces at least one rational of denominator \(n\) between them. Consequently every interval contains infinitely many rationals: after finding one rational \(q\) between \(a\) and \(b\), apply density again inside \((a,q)\) and \((q,b)\), or use arbitrarily large denominators.

Density does not mean most real numbers are rational. The rationals are countable, while the reals are uncountable. A set can be small in cardinality or measure and still meet every interval. Topological ubiquity, cardinal size, and measure size are different notions.

## 7. Irrational numbers are dense too

Every open interval also contains an irrational number. One proof transforms rational density.

Let \(a<b\). Divide by positive \(\sqrt{2}\) to obtain \(a/\sqrt{2}<b/\sqrt{2}\). Choose a nonzero rational \(q\) strictly between these two numbers. Then

\(a<q\sqrt{2}<b\).

The number \(q\sqrt{2}\) is irrational: if it were rational, dividing by nonzero rational \(q\) would make \(\sqrt{2}\) rational. Thus an irrational lies between \(a\) and \(b\).

There is a mild circularity to avoid. This proof presumes that \(\sqrt{2}\) exists as a real number and is irrational. Existence uses completeness; irrationality uses number theory. Once those are established, the density proof is valid.

Alternatively, start with a rational \(r\) in \((a,b)\) and choose a natural \(n\) so large that \(\sqrt{2}/n\) is smaller than the distance from \(r\) to the nearer endpoint. Then \(r+\sqrt{2}/n\) is irrational and remains inside the interval.

### Consequence: no interval has a number type

There is no nontrivial interval consisting only of rationals, and none consisting only of irrationals. Any plot that colors rational and irrational points separately would have both colors in every pixel-scale neighborhood, no matter how far one zooms. Yet functions can behave entirely differently on the two dense sets. The Dirichlet function

\[f(x)=1 \text{ if } x \text{ is rational, and } f(x)=0 \text{ if } x \text{ is irrational}\]

is discontinuous at every real number, because every neighborhood contains inputs of both types.

## 8. Completeness creates roots

Ordered-field algebra proves uniqueness of a positive square root if one exists. Completeness proves existence in \(R\).

**Theorem 2.1 (Square-root).** For every real \(a>0\), there is a unique real \(r>0\) with \(r^2=a\).

### Existence by supremum

Let

\(S=\{x\in R: x\ge 0 \text{ and } x^2<a\}\).

The set is nonempty because \(0\in S\). It is bounded above; for example, \(a+1\) is an upper bound because if \(x\ge a+1\), then \(x^2\ge (a+1)^2>a\). Completeness supplies \(r=\sup S\).

We show \(r^2=a\) by ruling out both strict alternatives.

Suppose \(r^2<a\). Choose a positive \(h\) small enough that

\(2rh+h^2<a-r^2\).

For instance, it is enough to take

\(0<h<\min(1,(a-r^2)/(2r+1))\).

Then \((r+h)^2=r^2+2rh+h^2<a\), so \(r+h\in S\), contradicting that \(r\) is an upper bound.

Suppose instead \(r^2>a\). Choose positive \(h<r\) small enough that

\(2rh<r^2-a\).

Then

\((r-h)^2=r^2-2rh+h^2>r^2-2rh>a\).

Every \(x\in S\) must satisfy \(x<r-h\); otherwise \(x\ge r-h>0\) would give \(x^2\ge (r-h)^2>a\), contradicting membership in \(S\). Thus \(r-h\) is an upper bound for \(S\) smaller than \(r\), contradicting leastness. Therefore neither strict inequality is possible, and \(r^2=a\).

### Uniqueness

If \(r,s>0\) and \(r^2=s^2\), then \((r-s)(r+s)=0\). Since \(r+s>0\), the zero-product property gives \(r=s\).

The proof ledger is revealing. Algebra establishes factorization and uniqueness. Order lets us compare squares and choose positive perturbations. Completeness supplies the boundary point \(r\). In \(Q\), the same construction for \(a=2\) describes a cut but does not produce a rational member at the boundary.

## 9. Rational powers and their domain

For positive real \(x\) and integer \(n>0\), the root theorem extends to a unique positive \(n\)th root. One can prove this with a similar supremum argument applied to \(\{t\ge 0:t^n<x\}\). Define

\(x^{1/n}\) as that root, and for rational \(p/q\) with \(q>0\), define

\(x^{p/q}=(x^{1/q})^p\).

Two checks are essential:

1. the definition must not depend on which fraction represents the rational number;
2. familiar exponent laws must be proved from root uniqueness.

For example, if \(p/q=r/s\), then \(ps=rq\). Raising both candidate positive values to the power \(qs\) yields \(x^{ps}=x^{rq}\), so uniqueness of the positive \(qs\)th root makes the candidates equal.

The restriction \(x>0\) supports a uniform definition for every rational exponent. Negative bases permit some rational exponents, such as \((-8)^{1/3}=-2\), but not others as real numbers, and equivalent fraction notation can obscure the domain. Analysis therefore states the domain before manipulating exponent laws.

Real exponents require another limiting or completeness argument, often through logarithms or suprema of rational powers. Writing \(x^\alpha\) for irrational \(\alpha\) silently invokes more structure than the finite multiplication used for integer powers.

## 10. Decimal expansions are representations, not foundations

A finite decimal is rational. A repeating decimal is rational because a geometric-series calculation converts it into a fraction. For example, if \(x=0.272727\ldots\), then

\(100x=27.272727\ldots\),

so \(99x=27\) and \(x=3/11\).

Conversely, long division shows that every rational has a terminating or eventually repeating decimal expansion: only finitely many remainders are possible, so either remainder zero appears or a remainder repeats.

Real numbers need not have repeating expansions. But a decimal string does not automatically establish a real number unless infinite limits have already been justified. Given digits \(d_1,d_2,\ldots\), the partial decimals

\[x_n=d_1/10+d_2/10^2+\ldots+d_n/10^n\]

form a Cauchy sequence because the remaining tail is at most \(10^{-n}\). Completeness supplies its real limit.

### The double-representation boundary

Some real numbers have two decimal expansions:

\(1.0000\ldots=0.9999\ldots\).

Let \(s_n=0.99\ldots9\) with \(n\) digits. Then \(s_n=1-10^{-n}\), so \(s_n\to 1\). The infinite decimal is defined as this limit, hence equals \(1\). There is no positive real gap “after all the 9s,” because a positive gap would exceed \(1/n\) for some scale and would eventually be larger than the actual tail \(10^{-n}\).

To make decimal representation unique, adopt a convention such as forbidding expansions that are eventually all \(9\). Representation conventions should not be mistaken for new arithmetic facts.

## 11. Two constructions of the real numbers

An analysis course can use the completeness axiom without constructing \(R\), just as linear algebra can use vector-space axioms without constructing every vector from sets. Still, two standard constructions explain what kinds of gaps are being filled.

### Dedekind cuts: fill order gaps

A **Dedekind cut** divides the rational numbers into a lower part and an upper part so that the lower part is nonempty, not all of \(Q\), downward closed, and has no greatest member. A rational \(r\) determines the cut of all rationals less than \(r\). The would-be number \(\sqrt{2}\) determines the lower set

\(\{q\in Q:q<0 \text{ or } q^2<2\}\).

There is no rational boundary point for this cut, but the cut itself can serve as the new real number. Addition, multiplication, and order are defined on cuts and then checked against the field axioms. Completeness becomes built into the order construction.

### Cauchy completion: fill metric gaps

Alternatively, consider all rational Cauchy sequences. Two sequences are declared equivalent when their difference tends to zero. The truncations \(1,1.4,1.41,\ldots\) and a rational Newton iteration for \(\sqrt{2}\) are different sequences but represent the same real number if their difference tends to zero.

Addition and multiplication are performed term by term on equivalence classes. A great deal of careful checking is hidden in that sentence: operations must not depend on the chosen representative, and the resulting structure must satisfy the field and order laws. Completeness then follows because Cauchy behavior has been promoted into actual points.

The two constructions emphasize different geometry. Cuts complete the order; Cauchy classes complete the distance. The resulting complete ordered fields are isomorphic: there is essentially one real-number system once the rational copy and order are respected.

This uniqueness is why analysts usually work axiomatically. Theorems depend on the complete ordered-field structure, not on whether a real was implemented as a cut or an equivalence class.

## 12. The extended real line is not a field

Measure theory and optimization often adjoin symbols \(+\infty\) and \(-\infty\) to obtain the **extended real line**

\([-\infty,+\infty]=R\cup \{-\infty,+\infty\}\).

The order extends naturally: \(-\infty<x<+\infty\) for every real \(x\). This makes every subset have a supremum and infimum in the extended sense, including unbounded and empty cases under standard conventions.

But the extended real line is not a field. Expressions such as

\(\infty-\infty\), \(0\cdot \infty\), and \(\infty/\infty\)

are left undefined because no single value preserves the desired limiting behavior. For instance, as \(x\to \infty\), the difference \(x-x\) is \(0\), while \((x+1)-x\) is \(1\), and \(2x-x\) diverges. The symbol \(\infty-\infty\) does not remember which competing growth mechanisms produced it.

Treat \(\infty\) as an ordered endpoint or limiting direction, not as an ordinary real number. Whenever an extended-real calculation reaches an indeterminate form, return to the underlying functions, sequences, or sets.

## 13. A map of which assumption does what

The following table is a compact hypothesis ledger.

| Claim | Algebra/order contribution | Completeness contribution | Failure without completeness |
| --- | --- | --- | --- |
| Squares are nonnegative | Entire proof | None | Does not fail in ordered fields |
| Positive square roots are unique | Factorization and sign | None | Uniqueness survives if a root exists |
| Every positive real has a square root | Defines and orders candidate set | Supplies its supremum | \(2\) has no square root in \(Q\) |
| Naturals are unbounded | Successor algebra | Rules out a finite supremum | Non-Archimedean fields have infinite elements |
| Rationals are dense in \(R\) | Fractions and inequality manipulation | Via Archimedean property | May fail relative to non-Archimedean gaps |
| Decimal Cauchy strings have limits | Controls finite tails | Supplies a point for the Cauchy sequence | A rational Cauchy sequence may leave \(Q\) |

When studying a new theorem, build a similar table. Ask whether its conclusion is algebraic, order-theoretic, topological, metric, or complete. This prevents accidental use of a stronger ambient space than the theorem promises.

## 14. Common errors and their repairs

**Error: “It is true on the number line, so it follows from the field axioms.”** A picture of \(R\) may be using connectedness or completeness. Test the claim in \(Q\); if it fails there, ordered-field axioms were insufficient.

**Error: “Between two reals, take their average; that proves rationals are dense.”** The average \((a+b)/2\) need not be rational. It proves only that another real lies between them. Rational density needs an integer grid or another rational-selection argument.

**Error: “Let \(r=\sqrt{a}\)” while proving roots exist.** That notation assumes the desired object. Define a candidate set, use completeness, and prove its supremum has the required property.

**Error: multiplying an inequality without checking a sign.** Positive multiplication preserves order, negative multiplication reverses it, and multiplication by zero destroys strictness.

**Error: treating \(0.999\ldots\) as a very long finite decimal.** An infinite decimal is a limit of partial decimals. The limit is exactly \(1\), not a finite string below it.

**Error: treating infinity as a field element.** Extended-real notation is useful precisely because its undefined combinations are kept visible. Cancelling infinities erases essential rate information.

**Error: calling \(Q\) incomplete because it is missing “irrational symbols.”** Incompleteness is structural: a rational Cauchy sequence can lack a rational limit, or a bounded rational set can lack a rational supremum. The issue is not notation.

## 15. Exercises

Try each problem with a dependency ledger: mark every use of algebra, order, natural-number reasoning, and completeness. Full solutions follow the set.

### ANA-CH02-E001 — Exercise 1: zero times anything

Prove from the field axioms that \(0a=0\) for every \(a\).

<details><summary>Hint 1</summary>

Apply distributivity to (0+0)a.

</details>

<details><summary>Hint 2</summary>

Cancel one copy of 0a using its additive inverse.

</details>

### ANA-CH02-E002 — Exercise 2: signs of a product

Prove that if \(a<0\) and \(b<0\), then \(ab>0\). Do not cite a memorized sign table.

<details><summary>Hint 1</summary>

Replace each negative factor by its positive opposite.

</details>

<details><summary>Hint 2</summary>

Use positivity of the product of the opposites, then establish the field identity relating that product to ab.

</details>

### ANA-CH02-E003 — Exercise 3: reciprocal boundary

Give a true theorem describing reciprocal order for two negative numbers, and explain why no single reciprocal-order statement can cross zero.

<details><summary>Hint 1</summary>

First translate two negative numbers to positive opposites.

</details>

<details><summary>Hint 2</summary>

Apply reciprocal order there and negate again; test a pair on opposite sides of zero separately.

</details>

### ANA-CH02-E004 — Exercise 4: a polynomial lower bound

Find the greatest constant \(C\) such that \(x^2+4x+9\ge C\) for every real \(x\), and prove equality is possible.

<details><summary>Hint 1</summary>

Complete the square in the quadratic.

</details>

<details><summary>Hint 2</summary>

Evaluate at the point where the square vanishes to prove the bound is greatest.

</details>

### ANA-CH02-E005 — Exercise 5: geometric sum at the excluded parameter

State and prove the finite geometric-sum formula in a form that includes \(r=1\) without division by zero.

<details><summary>Hint 1</summary>

Multiply the finite sum by 1-r without dividing.

</details>

<details><summary>Hint 2</summary>

Use telescoping for the identity, then discuss r=1 and r unequal to 1 separately.

</details>

### ANA-CH02-E006 — Exercise 6: small reciprocal scale

Using the Archimedean property, prove that for every \(\varepsilon>0\) and every positive real \(M\), some natural \(n\) satisfies \(M/n<\varepsilon\).

<details><summary>Hint 1</summary>

Rewrite the target as a lower bound on n.

</details>

<details><summary>Hint 2</summary>

Apply the Archimedean property to M/epsilon, keeping positivity visible when multiplying.

</details>

### ANA-CH02-E007 — Exercise 7: integer between shifted bounds

Prove that if \(b-a>1\), there is an integer \(m\) with \(a<m<b\).

<details><summary>Hint 1</summary>

Start with the first integer strictly greater than a.

</details>

<details><summary>Hint 2</summary>

Use the floor inequalities to put that integer at most a+1, which is strictly below b.

</details>

### ANA-CH02-E008 — Exercise 8: floor identities

Prove \(⌊x+k⌋=⌊x⌋+k\) for every real \(x\) and integer \(k\). Show by counterexample that \(⌊x+y⌋=⌊x⌋+⌊y⌋\) need not hold.

<details><summary>Hint 1</summary>

Translate the defining pair of floor inequalities by the integer k.

</details>

<details><summary>Hint 2</summary>

For failure of general additivity, try two fractional parts whose sum exceeds one.

</details>

### ANA-CH02-E009 — Exercise 9: a prescribed mesh can be too coarse

Determine whether a rational of the form \(m/1000\) lies strictly between \(\sqrt{2}\) and \(1.415\). Prove the answer, then find one with denominator \(10000\).

<details><summary>Hint 1</summary>

Locate the consecutive thousandths surrounding the interval.

</details>

<details><summary>Hint 2</summary>

Compare their squares with 2; then try the next finer decimal grid without using rounded square-root values as proof.

</details>

### ANA-CH02-E010 — Exercise 10: infinitely many rationals

Prove that every nonempty open interval contains infinitely many distinct rational numbers.

<details><summary>Hint 1</summary>

After choosing one rational, apply density to a smaller interval.

</details>

<details><summary>Hint 2</summary>

Choose each new rational between the left endpoint and the previous choice, ensuring distinctness.

</details>

### ANA-CH02-E011 — Exercise 11: irrational perturbation

Prove that the sum of a rational number and an irrational number is irrational. Use the result to construct an irrational in \((2,2.001)\).

<details><summary>Hint 1</summary>

Suppose the sum were rational and subtract the rational summand.

</details>

<details><summary>Hint 2</summary>

Scale a known irrational by a large rational denominator before adding 2.

</details>

### ANA-CH02-E012 — Exercise 12: uniqueness before existence

Let \(n\) be a positive integer. Prove that a positive \(n\)th root of a positive number, if it exists, is unique.

<details><summary>Hint 1</summary>

Show positive nth powers strictly preserve order.

</details>

<details><summary>Hint 2</summary>

If two candidate roots were distinct, order them and compare their nth powers.

</details>

### ANA-CH02-E013 — Exercise 13: cube-root candidate set

For \(a>0\), describe a supremum construction that produces \(a^{1/3}\). Identify the two perturbation inequalities that a complete proof must establish.

<details><summary>Hint 1</summary>

Use the set of nonnegative x with x cubed below a.

</details>

<details><summary>Hint 2</summary>

Expand (r+h)^3 and (r-h)^3 to identify the small-perturbation bounds needed on either side.

</details>

### ANA-CH02-E014 — Exercise 14: repeating expansion

Convert \(0.123123123\ldots\) to a reduced fraction and verify by a geometric series as well as by subtraction.

<details><summary>Hint 1</summary>

Shift one entire repeating block by multiplying by 1000.

</details>

<details><summary>Hint 2</summary>

Subtract the original expansion; independently sum the geometric series with first term 123/1000.

</details>

### ANA-CH02-E015 — Exercise 15: two binary names

Show that \(0.1111\ldots\) in base two equals \(1\). More generally, explain why every positive number with a terminating base-\(b\) expansion has a second expansion ending in repeated digit \(b-1\), allowing an integer place in the terminating expansion.

<details><summary>Hint 1</summary>

Begin with the finite binary geometric sum and then take its limit.

</details>

<details><summary>Hint 2</summary>

For a terminating expansion, reduce the last nonzero digit and sum the following tail of digits b-1.

</details>

### ANA-CH02-E016 — Exercise 16: a rational Cauchy sequence escaping \(Q\)

Define rational numbers \(q_n=⌊10^n\sqrt{2}⌋/10^n\). Prove \((q_n)\) is Cauchy and explain why it does not converge in \(Q\).

<details><summary>Hint 1</summary>

Translate the floor inequality into an explicit error below 10 to the power -n.

</details>

<details><summary>Hint 2</summary>

Use the real square root as an intermediate point to prove Cauchy control; uniqueness excludes any rational limit.

</details>

### ANA-CH02-E017 — Exercise 17: indeterminate infinity

Give three pairs of sequences \((a_n,b_n)\) with both \(a_n\to \infty\) and \(b_n\to \infty\), but with \(a_n-b_n\) tending respectively to \(0\), to \(7\), and to \(-\infty\).

<details><summary>Hint 1</summary>

Start with two equal sequences growing like n.

</details>

<details><summary>Hint 2</summary>

Modify one by a constant or change its linear growth rate to obtain the other difference limits.

</details>

### ANA-CH02-E018 — Exercise 18: hypothesis classification

For each statement, decide whether it follows in every ordered field or needs completeness of \(R\): (a) \(a^2+1>0\); (b) every bounded increasing sequence converges; (c) between \(a<b\) lies \((a+b)/2\); (d) every positive element has a square root; (e) a nonempty finite set has a maximum. Justify each classification.

<details><summary>Hint 1</summary>

Distinguish finite algebraic order arguments from existence of limits or roots.

</details>

<details><summary>Hint 2</summary>

Use the rational field as a countermodel for assertions that require completeness.

</details>

## 16. Complete solutions

<details><summary>Solution</summary>

### ANA-CH02-E001 — Solution 1

Distributivity gives

\(0a=(0+0)a=0a+0a\).

Add the inverse of \(0a\) to both sides. The left becomes \(0\), and one copy remains on the right, so \(0=0a\). This uses only field axioms.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E002 — Solution 2

From \(a<0\), add \(-a\) to obtain \(0<-a\); similarly \(0<-b\). Positive multiplication gives \(0<(-a)(-b)\). Field algebra gives \((-a)(-b)=ab\), so \(ab>0\). The sign rule has been derived from order compatibility.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E003 — Solution 3

If \(a<b<0\), then \(-a>-b>0\). For positive numbers, reciprocal order reverses, so \(1/(-a)<1/(-b)\). Negating both sides yields \(1/a>1/b\). Thus for two negative numbers, \(a<b<0\) implies \(1/a>1/b\), just as for two positive numbers. No statement can cross zero because reciprocal is undefined at zero and the function changes from arbitrarily negative to arbitrarily positive across it. For example, \(-1<1\) but \(1/(-1)=-1<1=1/1\), so the direction is not reversed across zero.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E004 — Solution 4

Complete the square:

\(x^2+4x+9=(x+2)^2+5\ge 5\).

At \(x=-2\), equality holds. Therefore \(C=5\) works and no larger constant can work.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E005 — Solution 5

A division-free statement is

\[(1-r)(1+r+\ldots+r^n)=1-r^{n+1}\]

for every field element \(r\). Expanding the left produces a telescoping difference. When \(r\ne 1\), division by \(1-r\) yields the usual quotient. When \(r=1\), both sides of the division-free identity equal zero, while the original sum has \(n+1\) terms and equals \(n+1\).

</details>

<details><summary>Solution</summary>

### ANA-CH02-E006 — Solution 6

Apply the Archimedean property to positive \(M/\varepsilon\). Choose \(n>M/\varepsilon\). Multiplying by positive \(\varepsilon\) and dividing by positive \(n\) gives \(M/n<\varepsilon\). The proof makes the sign requirements explicit.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E007 — Solution 7

Let \(m=⌊a⌋+1\). Then \(a<m\). Also \(m\le a+1<b\) because \(b-a>1\). Therefore \(a<m<b\). Strict width greater than one is sufficient. At width exactly one, the interval \((0,1)\) shows that an integer need not occur.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E008 — Solution 8

Let \(m=⌊x⌋\), so \(m\le x<m+1\). Adding integer \(k\) gives \(m+k\le x+k<m+k+1\). By uniqueness of the floor, \(⌊x+k⌋=m+k\). Additivity fails: with \(x=y=0.6\), the left side is \(⌊1.2⌋=1\), while the right side is \(0+0=0\).

</details>

<details><summary>Solution</summary>

### ANA-CH02-E009 — Solution 9

The requested denominator in the literal form \(m/1000\) leaves no solution. Indeed, \(1414/1000=1.414\) satisfies \(1.414^2=1.999396<2\), so it lies below \(\sqrt{2}\), while the next thousandth, \(1415/1000=1.415\), is the excluded upper endpoint. This is a deliberate mesh-size trap. A denominator of \(10000\) does work: \(14143/10000=1.4143\), because \(1.4143^2=2.00024449>2\), while \(1.4143<1.415\). Thus \(\sqrt{2}<1.4143<1.415\). The exercise shows why density requires a sufficiently fine denominator rather than an arbitrarily prescribed one.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E010 — Solution 10

Choose one rational \(q_1\) in \((a,b)\). Then choose \(q_2\) in \((a,q_1)\), \(q_3\) in \((a,q_2)\), and so on using rational density. The sequence is strictly decreasing, so all selected rationals are distinct and remain inside \((a,b)\). Alternatively, choose arbitrarily large denominators in the grid proof.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E011 — Solution 11

Let \(r\) be rational and \(x\) irrational. If \(r+x\) were rational, subtracting rational \(r\) would make \(x\) rational, a contradiction. Choose a natural \(n\) so large that \(\sqrt{2}/n<0.001\); for example \(n=2000\) works because \(\sqrt{2}<2\). Then \(2+\sqrt{2}/2000\) is irrational and lies strictly between \(2\) and \(2.001\).

</details>

<details><summary>Solution</summary>

### ANA-CH02-E012 — Solution 12

Suppose \(0<r<s\). Multiplying the inequality by positive factors shows successively \(r^2<rs<s^2\), and induction gives \(r^n<s^n\). Therefore two distinct positive numbers cannot have equal positive \(n\)th powers. Hence a positive \(n\)th root, if present, is unique. This is purely ordered-field reasoning.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E013 — Solution 13

Let \(S=\{x\ge 0:x^3<a\}\) and set \(r=\sup S\). The set is nonempty and bounded above. To rule out \(r^3<a\), choose \(h>0\) so small that

\(3r^2h+3rh^2+h^3<a-r^3\),

which makes \((r+h)^3<a\) and contradicts upper-boundedness. To rule out \(r^3>a\), choose \(0<h<r\) so small that

\(3r^2h<r^3-a\) after allowing for the positive correction terms in \((r-h)^3=r^3-3r^2h+3rh^2-h^3\); a direct sufficiently small bound makes \((r-h)^3>a\), contradicting leastness of \(r\). The architecture matches the square-root proof; only the perturbation estimates change.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E014 — Solution 14

Let \(x=0.123123\ldots\). Then \(1000x=123.123123\ldots\), so \(999x=123\) and \(x=123/999=41/333\). By a series,

\(x=123/1000+123/1000^2+\ldots=(123/1000)/(1-1/1000)=123/999=41/333\).

The two calculations encode the same geometric cancellation.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E015 — Solution 15

The \(n\)th partial binary expansion is

\(1/2+1/2^2+\ldots+1/2^n=1-1/2^n\),

which tends to \(1\). A positive number with a terminating base-\(b\) expansion has a last nonzero digit, possibly in an integer place. Reducing that digit by one and following it by infinitely many digits \(b-1\) adds the tail

\((b-1)/b^{k+1}+(b-1)/b^{k+2}+\ldots=1/b^k\),

exactly restoring the removed unit in the \(k\)th place.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E016 — Solution 16

By the floor definition,

\(q_n\le \sqrt{2}<q_n+10^{-n}\).

Thus \(|q_n-\sqrt{2}|<10^{-n}\). For \(m,n\ge N\), the triangle inequality in \(R\) gives

\(|q_m-q_n|\le |q_m-\sqrt{2}|+|\sqrt{2}-q_n|<2\cdot 10^{-N}\).

Given \(\varepsilon>0\), choose \(N\) so large that \(2\cdot 10^{-N}<\varepsilon\); hence \((q_n)\) is Cauchy. Every \(q_n\) is rational. If the sequence converged in \(Q\) to rational \(q\), it would also converge in \(R\) to \(q\). But the displayed error shows its real limit is \(\sqrt{2}\); uniqueness would give \(q=\sqrt{2}\), impossible in \(Q\).

</details>

<details><summary>Solution</summary>

### ANA-CH02-E017 — Solution 17

For limit \(0\), take \(a_n=n\) and \(b_n=n\). For limit \(7\), take \(a_n=n+7\) and \(b_n=n\). For limit \(-\infty\), take \(a_n=n\) and \(b_n=2n\). In all three cases both component sequences tend to positive infinity, while their differences have incompatible behavior. Therefore \(\infty-\infty\) cannot be assigned a single value.

</details>

<details><summary>Solution</summary>

### ANA-CH02-E018 — Solution 18

(a) Every ordered field: \(a^2\ge 0\), so \(a^2+1\ge 1>0\). (b) Needs completeness; increasing rational approximations to \(\sqrt{2}\) give a bounded increasing sequence in \(Q\) without a rational limit. (c) Every ordered field: from \(a<b\), adding and dividing by positive \(2\) gives \(a<(a+b)/2<b\). (d) Needs completeness and is not true in \(Q\), where \(2\) lacks a square root. (e) Every ordered field: compare finitely many elements successively and retain the larger one; no limiting process is involved.

</details>

## 17. What this chapter unlocks

The real line is now more than a picture. It is a complete ordered field whose natural-number scales become arbitrarily fine, whose rational and irrational points are both dense, and whose gaps are filled well enough to support roots and limits.

The next step is to study how sequences reveal the geometry of sets. Continue to [Sequences, Subsequences, and Compactness](sequences-compactness.md), where completeness combines with boundedness and closedness to produce convergent subsequences and global theorems.

## Summary

Field algebra explains cancellation and sign rules; order explains inequalities and finite comparisons; completeness supplies limiting boundary points. The Archimedean property produces fine integer scales, floors select discrete indices, and density places rational and irrational numbers inside every real interval. Root and expansion constructions must keep existence separate from uniqueness and representation. The next sequence arguments use this structure without confusing the real field with the extended symbols for infinity.
