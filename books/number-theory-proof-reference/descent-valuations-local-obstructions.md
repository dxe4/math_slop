
# Descent, Valuations, and Local Obstructions {#section-1-descent-valuations-and-local-obstructions}

Diophantine equations are often solved by proving that solutions cannot exist. Congruences provide local obstructions, valuations measure divisibility more sharply, and descent transforms a hypothetical least solution into a smaller one. These methods are powerful precisely because their conclusions are scoped: local solubility is usually necessary, not universally sufficient.

This chapter assumes Pythagorean parametrization, valuations, polynomial congruences, and Pell equations. After it you should be able to organize a local search, use exact valuation parity, construct and audit a descent, and distinguish a global theorem from finite modular evidence.

<a id="section-5-1-the-obstruction-ladder"></a>
## 1. The obstruction ladder {#section-7-1-the-obstruction-ladder}

For an integer equation, test in this order:

1. sign and magnitude;
2. parity and small moduli;
3. gcd and primitive reduction;
4. prime valuations;
5. factorization and parametrization;
6. minimal counterexample or infinite descent;
7. real and $p$-adic local solubility;
8. specialized global theory.

One failed local test proves no integer solution. Passing every test tried proves only that those obstructions are absent.

<a id="section-20-worked-congruence-obstruction"></a>
### Worked congruence obstruction {#section-22-worked-congruence-obstruction}

The equation $x^{2}+y^{2}=4z+3$ is impossible because squares modulo $4$ are $0,1$, so their sum is never $3$.

The modulus belongs to the proof certificate: the residue table has only four cases and can be independently checked.

<a id="section-26-2-primitive-reduction"></a>
## 2. Primitive reduction {#section-28-2-primitive-reduction}

For a homogeneous equation, divide a solution by the gcd of all coordinates to obtain a primitive one, provided each term has the same degree. Then exploit the impossibility of common prime factors.

Example: any nonzero solution to $x^{2}+y^{2}=3z^{2}$ can be made primitive. Modulo $3$, squares are $0,1$; the left side can be zero only if $3\mid x,y$. The equation then forces $3\mid z$. This contradicts primitiveness. Equivalently, division by three creates an infinite descent.

The homogeneity condition matters. Dividing coordinates in $x^{2}+y^{2}=z^{2}+1$ does not preserve the equation.

<a id="section-34-3-valuation-parity"></a>
## 3. Valuation parity {#section-36-3-valuation-parity}

Valuations strengthen congruence arguments. A rational square has even valuation at every prime. Therefore if $a/b$ in lowest terms has any odd prime valuation, it cannot be a square in $Q$.

If $v_{p}(A)<v_{p}(B)$, then $v_{p}(A+B)=v_{p}(A)$. Thus an equation can be impossible because its two sides have different exact valuations.

<a id="section-40-worked-valuation-obstruction"></a>
### Worked valuation obstruction {#section-42-worked-valuation-obstruction}

Suppose $x^{2}=12y^{2}$ with nonzero integers. Taking $v_{3}$ gives

$2v_{3}(x)=1+2v_{3}(y)$,

an even integer equal to an odd integer. Hence no solution exists; this is the irrationality of $\sqrt{12}$ in valuation form.

<a id="section-48-4-fermat-s-fourth-power-descent"></a>
## 4. Fermat's fourth-power descent {#section-50-4-fermat-s-fourth-power-descent}

The strong exponent-four case of Fermat's theorem says that no positive integers satisfy

$x^{4}+y^{4}=z^{2}$.

This classical descent is closely related to Fermat's right-triangle theorem, which says that no integer right triangle has square area. The relationship requires a separate parametrization argument, so we do not use one statement as an immediate substitute for the other here.

Assume a solution with least $z$ and reduce it to a primitive triple $(x^{2},y^{2},z)$, with one of $x,y$ even. Pythagorean parametrization gives coprime opposite-parity $m>n$ with

$x^{2}=m^{2}-n^{2}$, $y^{2}=2mn$, $z=m^{2}+n^{2}$.

The odd parameter must be $m$: if $m$ were even, then $n$ would be odd and $x^2=m^2-n^2\equiv-1\pmod4$, impossible. Because $m,n$ are coprime and $y^{2}=2mn$, unique factorization therefore gives $m=r^{2}$ and $n=2s^{2}$. The remaining equation is

$x^{2}+(2s^{2})^{2}=r^{4}$,

so $(2s^{2},x,r^{2})$ is another primitive Pythagorean triple. Parametrize it with coprime opposite-parity $u>v$:

$2s^{2}=2uv$, $x=u^{2}-v^{2}$, $r^{2}=u^{2}+v^{2}$.

Now $s^{2}=uv$ and $\gcd(u,v)=1$, so unique factorization makes $u=A^{2}$, $v=B^{2}$. Consequently

$A^{4}+B^{4}=r^{2}$.

This is another positive solution of the original type, but its hypotenuse $r$ is strictly less than $z=r^{4}+4s^{4}$. That contradicts the minimal choice of $z$.

This compressed classical descent exposes every contract—primitive reduction, parity, coprime square factors, and strict decrease. A full line-by-line version should be used before treating the theorem as a reusable lemma.

<a id="section-76-5-local-solubility"></a>
## 5. Local solubility {#section-78-5-local-solubility}

An integer solution gives a real solution and compatible integral solutions modulo every $p^k$; a nonzero homogeneous solution must be normalized primitively when testing nontrivial local solubility. Failure of the required local condition in any one place obstructs globally. Solving modulo $p$ alone may miss an obstruction at $p^2$, especially at singular roots.

For $x^{2}\equiv 3 \bmod 9$, reduction modulo $3$ has the singular root zero, but no lift exists modulo $9$. Thus prime-power tests can be strictly stronger than prime tests.

A compatible system of integral solutions modulo every $p^k$ defines a solution in $\mathbb Z_p$. For homogeneous quadratic forms, Hasse--Minkowski instead requires a nonzero vector over $\mathbb Q_p$, equivalently a primitive integral $p$-adic zero after scaling. External local-field treatments develop the topology and completeness.

<a id="section-84-6-local-global-theorems-and-failures"></a>
## 6. Local-global theorems and failures {#section-86-6-local-global-theorems-and-failures}

Some equation families have a local-global principle. The Hasse--Minkowski theorem says that a nondegenerate quadratic form over $\mathbb Q$ has a nontrivial rational zero if and only if it has a nontrivial zero over $\mathbb R$ and over every $\mathbb Q_p$. This is a named theorem with precise hypotheses, not a rule for arbitrary polynomial equations.

Higher-degree equations and curves can be locally soluble everywhere but have no rational point. Therefore a successful modular search is evidence and a source of candidate constraints, not a universal existence proof.

<a id="section-90-7-descent-maps-versus-shrinking-rhetoric"></a>
## 7. Descent maps versus shrinking rhetoric {#section-92-7-descent-maps-versus-shrinking-rhetoric}

A valid descent specifies:

- a nonempty set of allowed solutions;
- a positive-integer size measure;
- normalization preserving the equation;
- a construction of another allowed solution;
- proof that its measure is strictly smaller.

“Repeat with smaller numbers” is not a proof until integrality, positivity, and strict decrease are verified.

<a id="section-102-8-combining-local-data"></a>
## 8. Combining local data {#section-104-8-combining-local-data}

CRT combines congruence restrictions at coprime moduli into one modulus. For a search, the allowed classes modulo $M$ can be sieved before any magnitude loop. This is complete only relative to the chosen bound and modulus. If no class survives, impossibility is proved; if classes survive, candidates remain.

<a id="section-106-exercises-with-complete-solutions"></a>
## Establishing the allowed objects in fourth-power descent {#section-394-establishing-the-allowed-objects-in-fourth-power-descen}

The fourth-power argument becomes a proof only when the smaller object satisfies the original equation in the original domain. Work with positive integer triples $(x,y,z)$ satisfying $x^4+y^4=z^2$, and suppose that set is nonempty. Well-ordering chooses a triple with least positive $z$. No minimum of a vague real-valued size or of a search box is being used.

This least triple is primitive. Let $h=\gcd(x,y)$. Since $h^4\mid x^4+y^4=z^2$, prime exponents show $h^2\mid z$. Dividing gives another positive integer solution $(x/h,y/h,z/h^2)$. If $h>1$, its third coordinate is smaller, contradicting minimality. Therefore $h=1$. This is the exact scaling weight: the fourth-power inputs divide by $h$, while the square output divides by $h^2$. Dividing all three by the same factor would generally fail.

The two inputs cannot both be odd. Every odd fourth power is $1$ modulo $16$, whereas squares modulo $16$ are $0,1,4,9$. Two odd inputs would make $z^2\equiv2\pmod{16}$. They cannot both be even because they are coprime. Swap the inputs if necessary so $x$ is odd and $y$ is even. The triple $(x^2,y^2,z)$ is then a primitive positive Pythagorean triple: any common prime of the two legs would divide both $x$ and $y$.

Use the integer Pythagorean parametrization already established in Chapter 10. It supplies coprime integers $m>n>0$ of opposite parity with
$$
x^2=m^2-n^2,\qquad y^2=2mn,\qquad z=m^2+n^2.
$$
The ordering and positivity of the parameters matter later. The odd parameter is $m$. If $m$ were even and $n$ odd, then $x^2\equiv-1\pmod4$, impossible for an integer square. Thus $m$ is odd and $n$ even.

Up to this point, the descent has only normalized a hypothetical solution. It has not produced a smaller solution. This separation helps locate errors: primitiveness justifies later coprime-factor arguments, parity assigns the factor $2$, and the least $z$ makes a strict decrease decisive. None of these facts alone establishes the conclusion.

<a id="section-408-the-smaller-fourth-power-solution-and-its-strict-measur"></a>
## The smaller fourth-power solution and its strict measure {#section-410-the-smaller-fourth-power-solution-and-its-strict-measur}

Because $\gcd(m,n)=1$ and $2mn=y^2$, unique prime factorization gives
$$
m=r^2,\qquad n=2s^2
$$
for positive integers $r,s$. Here is the factor-of-two check. Every prime dividing the odd integer $m$ occurs only there in $2mn$, so its exponent in $m$ is even. Every odd prime in $n$ similarly has even exponent. At $2$, the equation gives $1+v_2(n)=2v_2(y)$, so $v_2(n)$ is odd; removing one factor $2$ makes the remaining exponent even. This proves exactly the displayed shapes, rather than assigning square factors by inspection.

Substitution gives $x^2+4s^4=r^4$, so $(x,2s^2,r^2)$ is a positive Pythagorean triple. It is primitive. If a prime divided $x$ and $2s^2=n$, it would divide $m^2=x^2+n^2$ and hence $m$, contradicting $\gcd(m,n)=1$. The first leg is odd, as already established. Therefore a second use of the same Pythagorean parametrization gives coprime opposite-parity integers $u>v>0$ with
$$
2s^2=2uv,\qquad x=u^2-v^2,\qquad r^2=u^2+v^2.
$$

Now $s^2=uv$. Coprimality implies that each prime occurs in at most one factor, so all exponents in each factor are even. Consequently $u=A^2$, $v=B^2$ for positive integers $A,B$, with $A>B$. The last equation becomes
$$
A^4+B^4=r^2.
$$
Thus $(A,B,r)$ belongs to the very same set of positive integer solutions from which the least triple was chosen. Its inputs are coprime and of opposite parity as well, though membership in the original set needs only positivity, integrality and the equation.

The measure decreases because
$$
z=m^2+n^2=r^4+4s^4>r.
$$
For $r\ge1$, $r^4\ge r$, and $s\ge1$ makes the added term strictly positive. This is the promised contradiction to least $z$. It proves nonexistence without producing a sequence numerically and without assuming that any intermediate rational number is integral.

The proof imports only the earlier primitive Pythagorean classification and unique factorization of positive integers. It proves all closure, parity and decrease steps locally. It does not substitute the separate square-area right-triangle theorem for the target statement. To deduce the exponent-four Fermat equation $x^4+y^4=w^4$, one may set $z=w^2$ in the result just proved; that direction is immediate. Other apparent equivalences need their own transformations.

A common failed variant announces $m,n$ both squares from $2mn=y^2$. It would force an even square to have an odd exponent of $2$, contradicting the very identity being used. Another variant constructs a smaller Pythagorean triple but never gets back to fourth powers. The two successive parametrizations above explain why the smaller object has the required type, not merely smaller coordinates.

<a id="section-437-valuation-arguments-identify-the-exact-arithmetic-obstr"></a>
## Valuation arguments identify the exact arithmetic obstruction {#section-439-valuation-arguments-identify-the-exact-arithmetic-obstr}

For a prime $p$ and nonzero integer $a$, write $a=p^r u$ with $p\nmid u$. The integer $r=v_p(a)$ measures the exact exponent. If $v_p(a)<v_p(b)$, factor their sum as
$$
a+b=p^{v_p(a)}(u+p^{v_p(b)-v_p(a)}v).
$$
The parenthesis is nonzero modulo $p$, so the sum has the smaller valuation. This proof shows where the unequal-valuation premise enters. For equal valuations the parenthesis may vanish modulo $p$, producing cancellation and a larger exponent.

The square test uses the same exactness. For $x^2=18y^2$ with $x,y\ne0$, one has $2v_2(x)=1+2v_2(y)$, impossible because an even integer cannot equal an odd one. The equation already excludes exactly one coordinate being zero: if either vanishes, the other must too. Thus valuation reasoning handles every putative nonzero solution without assigning an ordinary integer exponent to $v_p(0)$.

For rational inputs, write $r=a/b\ne0$ and define $v_p(r)=v_p(a)-v_p(b)$. This is unchanged by multiplying numerator and denominator by the same nonzero integer. A rational square has even valuation at every prime. Conversely, if a positive rational has every valuation even, its reduced numerator and denominator have even prime exponents, so it is a square of a rational. Positivity is essential: $-1$ has all prime valuations zero but is not a rational square. The real place supplies the missing sign condition.

Valuations therefore combine a discrete exponent test with a real-domain test. The argument does not mean that every multivariable polynomial has a complete list of obstructions of this kind. In the fourth-power descent, valuations make the coprime-square-factor step exact; they do not themselves construct the final smaller solution. Assigning each tool its specific role makes it possible to reuse the exponent lemma without claiming that it solves the entire Diophantine problem.

<a id="section-451-compatible-residue-systems-describe-integral-local-solu"></a>
## Compatible residue systems describe integral local solutions {#section-453-compatible-residue-systems-describe-integral-local-solu}

For an integer-coefficient polynomial $F$ in several variables, a compatible $p$-adic integral solution is a sequence of residue tuples $r_k$ modulo $p^k$ with $F(r_k)\equiv0\pmod{p^k}$ and $r_{k+1}\equiv r_k\pmod{p^k}$. Each coordinate is an element of $\mathbb Z_p$, the ring of $p$-adic integers. Compatibility means that the higher-precision row actually extends the lower-precision row. Two independently chosen valid rows can fail that requirement.

There is nevertheless an important existence distinction. If solutions exist at every precision, a compatible infinite branch exists, even if the first rows one happened to choose do not align. Here is the finite-branching argument. At level one there are only finitely many residue tuples, so one of them has extensions to arbitrarily high levels. Among its finitely many children at level two, one must again have arbitrarily high extensions; otherwise a maximum of their finite bounds would bound the parent. Continue choosing such a child. The resulting compatible sequence gives an integral local solution.

For a homogeneous equation, every level has the zero tuple, so this bare existence statement may say nothing about nontrivial zeros. If nontriviality is required over a local field, impose the stronger condition that at least one coordinate is a unit modulo $p$, and retain it along the branch. A different choice of a nonzero vector modulo each higher power is not enough if all its coordinates become more and more divisible by $p$. For an exact example, consider $F(X,Y)=X^2-pY^2$. Modulo $p$, use the nonzero vector $(0,1)$; for $k\ge2$, use $(p^{\lceil k/2\rceil},0)$, which is nonzero modulo $p^k$ and solves the congruence. These later rows tend toward zero instead of providing a primitive compatible branch. Over $\mathbb Q_p$ the equation has no nonzero zero: if $Y\ne0$, valuation parity would give $2v_p(X)=1+2v_p(Y)$; if $Y=0$, then $X=0$.

The compactness argument still works with the unit-coordinate condition: the level-one choices are restricted to nonzero residue vectors, and each has finitely many children. Existence of such primitive residue solutions at every level yields a compatible primitive integral zero. In contrast, checking only finitely many levels leaves open whether the surviving branches eventually die.

For an inhomogeneous equation, scaling coordinates may not preserve the target. The solutions in $\mathbb Z_p$ are then the correct local objects for integral solvability, and a solution with denominators in $\mathbb Q_p$ can be irrelevant to that integral question. “Locally soluble” must therefore specify both the coefficient field or ring and whether the zero vector is allowed. These are mathematical hypotheses, not merely choices of notation.

<a id="section-463-normalizing-a-nonzero-local-field-zero"></a>
## Normalizing a nonzero local-field zero {#section-465-normalizing-a-nonzero-local-field-zero}

The field $\mathbb Q_p$ allows negative valuations as well as the nonnegative valuations of $\mathbb Z_p$. If a homogeneous polynomial has a nonzero zero vector over $\mathbb Q_p$, let $m$ be the smallest valuation among its nonzero coordinates. Multiply the entire vector by $p^{-m}$. All coordinates then lie in $\mathbb Z_p$, and at least one has valuation zero. Homogeneity preserves the zero equation. This is the local analogue of dividing an integer solution by its coordinate gcd.

Conversely a primitive zero over $\mathbb Z_p$ is already a nonzero zero over $\mathbb Q_p$. Thus for a homogeneous form, nontrivial local-field solubility is equivalent to the existence of a compatible integral solution with a unit coordinate. It is not equivalent to existence of an arbitrary integral solution: the all-zero vector always qualifies for the latter. Rational coefficients may first be cleared by multiplying the whole polynomial by a nonzero integer; this does not change its zero vectors over either field.

Consider $Q(X,Y,Z)=X^2+Y^2-3Z^2$. Every modulus admits the zero vector, and that vector is compatible at all powers of every prime. Yet $Q$ has no nonzero zero over $\mathbb Q_3$. If one existed, normalize it primitively over $\mathbb Z_3$. Modulo $3$, the square classes $0,1$ force both $X,Y$ to be divisible by $3$. The equation then implies $3\mid Z^2$ and hence $3\mid Z$. All coordinates are divisible by $3$, contradicting primitiveness. The same short certificate excludes nontrivial rational and integer zeros.

This example isolates the defect in using all-zero modular witnesses for Hasse--Minkowski: the required local hypothesis is false at $3$, even though unrestricted residue solutions exist everywhere. A sieve intended to study nontrivial homogeneous solutions should therefore discard the zero vector modulo $p$ after appropriate primitive normalization. It should not declare success merely because a polynomial has no constant term.

Normalization may be performed separately at each prime. It does not require the local vectors at different primes to be reductions of one known integer vector. Producing a global vector from those separate local data is precisely the content of a family-specific local-global theorem, when one exists. CRT at any finite collection of prime powers is not a replacement for that theorem.

<a id="section-475-the-imported-quadratic-local-global-theorem-and-its-aff"></a>
## The imported quadratic local-global theorem and its affine boundary {#section-477-the-imported-quadratic-local-global-theorem-and-its-aff}

The theorem used here is Hasse--Minkowski for rational quadratic forms. For a nondegenerate homogeneous quadratic form with rational coefficients, a nonzero rational zero exists exactly when there is a nonzero zero over $\mathbb R$ and over $\mathbb Q_p$ for every prime $p$. This is an imported theorem, not proved by the finite residue arguments in this chapter. The nontrivial-zero convention and the role of every completion are stated in [Sutherland, Lecture 9, Theorem 9.10](https://math.mit.edu/classes/18.782/2013fa/LectureNotes9.pdf). Nondegeneracy means the associated symmetric matrix has nonzero determinant.

For a homogeneous rational equation, clearing denominators in a nonzero rational zero gives a nonzero integer zero. Dividing by its coordinate gcd gives a primitive integer zero. Therefore this theorem does answer the corresponding homogeneous integer existence question when all its hypotheses are established. It does not bound the size of a smallest solution or claim that a few residue levels suffice to verify all local fields.

The distinction changes for an affine equation with a fixed constant. The equation $2x^2+2y^2=1$ has the rational solution $(1/2,1/2)$ but no integer solution, since an integer left side is even. Homogenizing gives $2X^2+2Y^2-Z^2=0$, with primitive integer zero $(1,1,2)$. Dehomogenizing uses $x=X/Z$, $y=Y/Z$ and does not preserve integrality. One cannot require $Z=1$ merely because homogeneity permitted scaling by a rational number.

This is also a local distinction at $2$. The homogeneous vector $(1,1,2)$ is primitive over $\mathbb Z_2$, so it witnesses a nontrivial $\mathbb Q_2$ zero. But the affine coordinates $1/2$ are not $2$-adic integers. The affine integral equation is already impossible modulo $2$. Thus a valid local-field theorem can coexist with an integral affine obstruction; the two statements concern different solution domains.

The real place is not optional. A positive definite form such as $X^2+Y^2+Z^2$ has no nonzero real zero, regardless of what finite modular tests show. At a finite prime, a primitive residue condition can be decisive instead. An application must identify the actual quadratic form, check nondegeneracy, demand nonzero local vectors, and include every required place. A proof of the hard local conditions may use additional quadratic-form theory; the theorem's name does not supply those checks automatically.

For cubic or higher-degree equations the quadratic theorem supplies no conclusion. This chapter needs only that limitation, rather than an unproved catalogue of failures. Descent, a direct rational witness, or a separately verified theorem for the actual family may settle such a problem. Successful modular evidence by itself does not.

<a id="section-489-a-lift-tree-can-certify-a-branch-and-expose-its-limit"></a>
## A lift tree can certify a branch and expose its limit {#section-491-a-lift-tree-can-certify-a-branch-and-expose-its-limit}

For a one-variable integer polynomial, expand a candidate lift $r+p^kt$. Terms of degree at least two in $p^kt$ are divisible by $p^{k+1}$ for $k\ge1$, giving
$$
F(r+p^kt)\equiv F(r)+p^ktF'(r)\pmod{p^{k+1}}.
$$
If $F(r)=p^kc$, the next digit must satisfy $c+tF'(r)\equiv0\pmod p$. An invertible derivative gives exactly one next digit. A derivative divisible by $p$ gives every digit when $c\equiv0$, and none otherwise. This is the exact reason that a singular root may branch or die.

For $F(X)=X^2-2$ at $p=7$, the root $r=3$ has $F(r)=7$ and derivative $6$. The next digit solves $1+6t\equiv0\pmod7$, so $t=1$ and the lift is $10$ modulo $49$. Indeed $10^2-2=98=2\cdot49$. The following digit solves $2+20t\equiv0\pmod7$, giving $t=2$ and the lift $108$ modulo $343$; its exact residual is $11662=34\cdot343$. The derivative stays a unit, so the same argument constructs a compatible branch indefinitely.

This is a genuine $\mathbb Z_7$ square root of $2$, not a rational square root. At the prime $2$, the valuation of a nonzero rational square is even, whereas $v_2(2)=1$. Thus no rational square root exists, and the $7$-adic success cannot settle the global equation. It illustrates why different places and the target domain must remain separate.

The earlier root $0$ of $X^2-3$ modulo $3$ shows the dying alternative: $c=-1$ and derivative $0$ modulo $3$, so no next digit solves the lift equation. These two examples have the same broad description “a root modulo a prime,” but completely different continuation certificates. A lift tree records those continuation relations explicitly instead of treating the number of surviving roots as an unexplained statistic.

A finite search box and a finite lift tree also certify different things. Exhausting an integer box rules out only points in that box. An empty residue level rules out all integer solutions, without a size bound, because every integer solution would reduce to a surviving node. A nonempty finite level leaves a necessary condition; an infinite compatible primitive branch establishes the specified integral local condition. None of these statements automatically creates a global affine integer point.

<a id="section-505-exercises-primitive-local-zeros-and-affine-integrality"></a>

## Summary

<a id="section-391-chapter-summary"></a>
Local obstructions are one-way certificates: failure anywhere proves global impossibility. Valuations sharpen residue information, and primitive reduction prepares homogeneous equations for descent. A descent proof needs an explicit smaller integral solution and a well-ordered measure. Local-global principles exist for special families, never as an automatic inference from successful modular tests.
<a id="section-392-establishing-the-allowed-objects-in-fourth-power-descen"></a>

## Exercises {#section-108-exercises-with-complete-solutions}

<a id="section-108-1-modulo-four"></a>
### 1. Modulo four {#section-110-1-modulo-four}

Prove $x^{2}+y^{2}=4z+3$ is impossible.

**Hint 1.** List square residues modulo four.

**Hint 2.** Their pairwise sums never give three.

<details><summary>Full solution</summary>

**Solution.** Each square is $0$ or $1 \bmod 4$, so the sum is $0,1,2$, never $3$.

</details>

<a id="section-122-2-modulo-eight"></a>
### 2. Modulo eight {#section-124-2-modulo-eight}

Prove no odd square is $3 \bmod 8$.

**Hint 1.** Write an odd integer as twice an integer plus one.

**Hint 2.** Its square is one modulo eight because the product of consecutive integers is even.

<details><summary>Full solution</summary>

**Solution.** Write an odd integer as $2k+1$; its square is $4k(k+1)+1$. One of $k,k+1$ is even, so the first term is divisible by $8$.

</details>

<a id="section-136-3-cubes-modulo-nine"></a>
### 3. Cubes modulo nine {#section-138-3-cubes-modulo-nine}

Show $x^{3}+y^{3}=9z+3$ has no integer solutions.

**Hint 1.** List cube residues modulo nine.

**Hint 2.** The sum of two residues from zero, one and minus one cannot be three.

<details><summary>Full solution</summary>

**Solution.** Cubes modulo $9$ are $0,1,8$. Sums of two are $0,1,2,7,8$, never $3$.

</details>

<a id="section-150-4-primitive-descent"></a>
### 4. Primitive descent {#section-152-4-primitive-descent}

Prove $x^{2}+y^{2}=3z^{2}$ has only the zero solution.

**Hint 1.** Modulo three, both square terms must vanish.

**Hint 2.** Then all coordinates are divisible by three, producing a smaller nonzero solution unless all vanish.

<details><summary>Full solution</summary>

**Solution.** A nonzero solution scaled to primitive form would satisfy modulo $3$ that both squares are zero, hence $3\mid x,y$; then $9\mid x^{2}+y^{2}=3z^{2}$, so $3\mid z$. This contradicts primitive gcd one.

</details>

<a id="section-164-5-homogeneity-boundary"></a>
### 5. Homogeneity boundary {#section-166-5-homogeneity-boundary}

Why can the same gcd division fail for $x^{2}+y^{2}=z^{2}+1$?

**Hint 1.** Check whether dividing every coordinate by a gcd preserves the constant term.

**Hint 2.** The term one does not scale with the quadratic terms.

<details><summary>Full solution</summary>

**Solution.** Dividing $x,y,z$ by a common factor divides the degree-two terms by its square but leaves the constant $1$ unchanged, so the new tuple need not satisfy the equation.

</details>

<a id="section-178-6-valuation-contradiction"></a>
### 6. Valuation contradiction {#section-180-6-valuation-contradiction}

Prove $x^{2}=18y^{2}$ has no nonzero integer solutions.

**Hint 1.** Compare the exponent of two on both sides.

**Hint 2.** One side has even valuation while the other differs by one.

<details><summary>Full solution</summary>

**Solution.** Taking $v_{2}$ gives $2v_{2}(x)=1+2v_{2}(y)$, even equals odd, impossible.

</details>

<a id="section-192-7-rational-square-test"></a>
### 7. Rational square test {#section-194-7-rational-square-test}

Is $45/28$ a rational square?

**Hint 1.** Reduce the rational number and inspect prime exponent parity.

**Hint 2.** The exponent of five, for example, is odd.

<details><summary>Full solution</summary>

**Solution.** Its $v_{5}$ is $1$, odd, so it is not a square in $Q$.

</details>

<a id="section-206-8-exact-sum-valuation"></a>
### 8. Exact sum valuation {#section-208-8-exact-sum-valuation}

If $v_{p}(a)=2$ and $v_{p}(b)=5$, find $v_{p}(a+b)$.

**Hint 1.** The valuations are unequal.

**Hint 2.** The smaller valuation is the exact valuation of the sum.

<details><summary>Full solution</summary>

**Solution.** Unequal valuations make the valuation of the sum equal the smaller one, so it is $2$.

</details>

<a id="section-220-9-equal-valuation-warning"></a>
### 9. Equal valuation warning {#section-222-9-equal-valuation-warning}

Can $v_{2}(a)=v_{2}(b)=0$ determine $v_{2}(a+b)$?

**Hint 1.** Take odd summands whose sum is a chosen power of two.

**Hint 2.** Different choices give different sum valuations despite equal input valuations.

<details><summary>Full solution</summary>

**Solution.** No. For $1+1$, it is $1$; for $1+3$, it is $2$; for $1+7$, it is $3$. Cancellation can raise it arbitrarily.

</details>

<a id="section-234-10-prime-power-obstruction"></a>
### 10. Prime-power obstruction {#section-236-10-prime-power-obstruction}

Show $x^{2}\equiv 3 \bmod 9$ is insoluble.

**Hint 1.** A root must be divisible by three after reduction modulo three.

**Hint 2.** Its square is then zero modulo nine rather than three.

<details><summary>Full solution</summary>

**Solution.** Squares modulo $9$ are $0,1,4,7$; $3$ is absent. Modulo $3$ alone would not see the obstruction because zero is a root there.

</details>

<a id="section-248-11-lift-audit"></a>
### 11. Lift audit {#section-250-11-lift-audit}

Why does the root $0 \bmod 3$ of $x^{2}-3$ not lift to modulo $9$?

**Hint 1.** The formal derivative at zero vanishes modulo three.

**Hint 2.** Every candidate lift is a multiple of three and its residual value fails modulo nine.

<details><summary>Full solution</summary>

**Solution.** A lift is $x=3t$, and $x^{2}-3=3(3t^{2}-1)$ has valuation exactly one, not two.

</details>

<a id="section-262-12-local-necessity"></a>
### 12. Local necessity {#section-264-12-local-necessity}

Prove an integer solution of a polynomial equation gives a solution modulo every $m$.

**Hint 1.** Reduce the integer equality term by term.

**Hint 2.** Polynomial evaluation commutes with the quotient map.

<details><summary>Full solution</summary>

**Solution.** Reduce each coordinate and every integer-coefficient polynomial operation modulo $m$; equality over the integers remains equality of residues.

</details>

<a id="section-276-13-local-sufficiency-warning"></a>
### 13. Local sufficiency warning {#section-278-13-local-sufficiency-warning}

Why do solutions modulo $2,3,5,7$ not prove an integer solution exists?

**Hint 1.** The tested moduli are only finitely many necessary conditions.

**Hint 2.** They provide no integer witness or family-specific local-to-global theorem.

<details><summary>Full solution</summary>

**Solution.** They check only four necessary conditions, possibly with unrelated residue choices. No general theorem makes that finite list sufficient for an arbitrary polynomial equation.

</details>

<a id="section-290-14-crt-sieve"></a>
### 14. CRT sieve {#section-292-14-crt-sieve}

Combine $x\equiv 1 \bmod 4$ and $x\equiv 2 \bmod 3$.

**Hint 1.** Write the first class as one plus four times an integer.

**Hint 2.** Determine that parameter modulo three and use period twelve.

<details><summary>Full solution</summary>

**Solution.** Values $1 \bmod 4$ are $1,5,9$; $5\equiv 2 \bmod 3$, so $x\equiv 5 \bmod 12$.

</details>

<a id="section-304-15-empty-sieve"></a>
### 15. Empty sieve {#section-306-15-empty-sieve}

If an equation forces $x\equiv 0 \bmod 2$ and $x\equiv 1 \bmod 4$, what follows?

**Hint 1.** The second condition makes the variable odd.

**Hint 2.** It contradicts the first condition directly.

<details><summary>Full solution</summary>

**Solution.** The conditions are incompatible because every $1 \bmod 4$ integer is odd. Therefore the equation has no integer solution.

</details>

<a id="section-318-16-descent-measure"></a>
### 16. Descent measure {#section-320-16-descent-measure}

Why must a descent measure take positive integer values?

**Hint 1.** Strict descent needs a well-ordered set with no infinite decreasing chain.

**Hint 2.** A merely decreasing real quantity could continue indefinitely without contradiction.

<details><summary>Full solution</summary>

**Solution.** Well-ordering then forbids an infinite strictly decreasing chain. A vague real-valued “complexity” may decrease forever without contradiction.

</details>

<a id="section-332-17-integrality-check"></a>
### 17. Integrality check {#section-334-17-integrality-check}

What must be proved before replacing a solution $(x,y)$ by $(x/2,y/2)$?

**Hint 1.** Both coordinates must be even.

**Hint 2.** The transformed pair must also satisfy the same equation and any nonzero conditions.

<details><summary>Full solution</summary>

**Solution.** Both coordinates must be even, the new coordinates must remain in the allowed sign/domain conditions, and substitution must show the divided pair still solves the same normalized equation.

</details>

<a id="section-346-18-real-obstruction"></a>
### 18. Real obstruction {#section-348-18-real-obstruction}

Why has $x^{2}+y^{2}=-1$ no integer solution?

**Hint 1.** Every integer square is nonnegative in the real order.

**Hint 2.** Their sum cannot be negative.

<details><summary>Full solution</summary>

**Solution.** Over the reals the left side is nonnegative. Failure at the real place already obstructs integer and rational solutions.

</details>

<a id="section-360-19-scope-of-hasse-minkowski"></a>
### 19. Scope of Hasse-Minkowski {#section-362-19-scope-of-hasse-minkowski}

May Hasse-Minkowski be invoked for every cubic curve?

**Hint 1.** The named theorem concerns rational quadratic forms.

**Hint 2.** A general cubic curve is outside that theorem's hypotheses.

<details><summary>Full solution</summary>

**Solution.** No. It is a theorem about rational quadratic forms under stated nonsingularity and local conditions. Cubic and higher-degree varieties can violate local-global principles.

</details>

<a id="section-374-20-proof-versus-search"></a>
### 20. Proof versus search {#section-376-20-proof-versus-search}

A search finds no solutions with $\lvert x\rvert,\lvert y\rvert\le 10^{6}$. What has been proved?

**Hint 1.** Only the stated finite box has been exhausted.

**Hint 2.** An unbounded nonexistence theorem needs a further argument covering all other inputs.

<details><summary>Full solution</summary>

**Solution.** Only nonexistence inside that audited finite box, assuming exhaustive exact computation. Global nonexistence requires a theorem bounding all solutions or a separate obstruction/descent proof.

</details>


<a id="section-389-chapter-summary"></a>

<a id="section-507-exercises-primitive-local-zeros-and-affine-integrality"></a>
### 21. NTP-12-E21: trivial residues are not local isotropy {#section-509-ntp-12-e21-trivial-residues-are-not-local-isotropy}

For $Q(X,Y,Z)=X^2+Y^2-3Z^2$, explain why compatible zero residues at every power of every prime do not establish the local hypotheses of Hasse--Minkowski. Prove the required hypothesis fails at $3$.

**Hint 1.** The theorem asks for a nonzero local vector, not the zero vector.

**Hint 2.** Normalize a hypothetical three-adic vector and reduce modulo three to force all coordinates divisible by three.

<a id="section-515-ntp-12-e22-homogeneous-and-affine-domains"></a>
### 22. NTP-12-E22: homogeneous and affine domains {#section-517-ntp-12-e22-homogeneous-and-affine-domains}

Exhibit a primitive integer zero of $2X^2+2Y^2-Z^2$, then show that $2x^2+2y^2=1$ has a rational solution and no integer solution. Identify the local integral obstruction and explain why the homogeneous local-field theorem is consistent with it.

**Hint 1.** Try the homogeneous vector one,one,two.

**Hint 2.** Dividing by its last coordinate gives a rational affine solution, while parity obstructs integral affine solutions.

<a id="section-523-solutions-primitive-local-zeros-and-affine-integrality"></a>

## Solutions: primitive local zeros and affine integrality {#section-525-solutions-primitive-local-zeros-and-affine-integrality}

<a id="section-525-ntp-12-e21-trivial-residues-are-not-local-isotropy-solu"></a>
### NTP-12-E21: trivial residues are not local isotropy — solution {#section-527-ntp-12-e21-trivial-residues-are-not-local-isotropy-solu}

<details><summary>Full solution</summary>

The zero vector gives a compatible solution in $\mathbb Z_p^3$ for every $p$, but the theorem requires a nonzero vector over each $\mathbb Q_p$. If a nonzero zero existed over $\mathbb Q_3$, scale by the least coordinate valuation to get a primitive $\mathbb Z_3$ vector. Modulo $3$, $X^2+Y^2=0$ forces $3\mid X,Y$. Then $X^2+Y^2=3Z^2$ forces $3\mid Z$, contradicting that one coordinate is a unit. Thus the nontrivial local hypothesis fails at $3$.

</details>

<a id="section-533-ntp-12-e22-homogeneous-and-affine-domains-solution"></a>
### NTP-12-E22: homogeneous and affine domains — solution {#section-535-ntp-12-e22-homogeneous-and-affine-domains-solution}

<details><summary>Full solution</summary>

The vector $(1,1,2)$ is primitive and has norm $2+2-4=0$. Dividing by $Z=2$ yields the rational affine point $(1/2,1/2)$. No integer point satisfies the affine equation because its left side is even; already modulo $2$ it cannot equal $1$. At $2$, the homogeneous primitive vector is a valid nontrivial local-field zero, while the dehomogenized coordinates have valuation $-1$ and are not in $\mathbb Z_2$. The theorem concerns homogeneous rational or local-field zeros and does not force integral affine coordinates.

</details>

<a id="section-541-references-the-quadratic-local-global-import"></a>

## Sources: the quadratic local-global import {#section-543-references-the-quadratic-local-global-import}

The Hasse--Minkowski theorem is imported with its homogeneous, rational-coefficient, nontrivial-zero and all-completion hypotheses. Andrew V. Sutherland's [MIT 18.782 Lecture 9, Theorem 9.10](https://math.mit.edu/classes/18.782/2013fa/LectureNotes9.pdf) states the completion criterion; its preceding convention excludes the zero vector. William Stein's [Theorem 16.2.14](https://wstein.org/edu/Spring2004/129/ant/html/node70.html) gives the diagonal rational form with nonzero coefficients and explicitly includes the real place and every $\mathbb Q_p$. The theorem itself is not proved here. The primitive-normalization and affine-boundary arguments above are supplied locally; the Pythagorean classification and integer prime factorization used in the descent come from earlier chapters.
