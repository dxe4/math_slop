
# Diophantine Equations: From Congruence Obstructions to Curves

**Before reading.** Read [Divisibility and Modular Arithmetic](../books/introduction-to-proof/divisibility-modular-arithmetic.md), [Polynomials and the Factor Theorem](../books/algebra-and-functions/polynomials-factor-theorem.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md). These are preparation for the ideas used below.

An equation changes character when its solutions must be integers or rationals. Over the real numbers, continuity and graphs often find points. Over the integers, factorization and congruence can forbid them. Over the rationals, geometry organizes them into lines, conics, and higher-genus curves. This deep dive follows that escalation while marking where general decision procedures end.

## 1. Start with invariants cheaper than search

Before trying values, ask:

- sign: can both sides have the required sign?
- size: can a factor or square lie in the necessary interval?
- gcd: must a common divisor divide the target?
- parity and valuations: how many powers of a prime divide each term?
- residues: which classes occur modulo a useful m?

**Example.** Prove $x^{2}+y^{2}=4z+3$ has no integer solution. Squares modulo 4 are 0 or 1, so the left side is 0,1,2 modulo 4, never 3. One four-row residue fact replaces infinite search.

Modulus choice is creative. Cubes modulo 9 are 0,±1. Therefore if $x^{3}+y^{3}+z^{3}=n$, then n cannot be congruent to ±4 modulo 9. This gives a necessary obstruction, not a solution method for all remaining n.

## 2. Linear equations are completely classified

For $ax+by=c$, let g=gcd(a,b). Bézout gives integers u,v with $au+bv=g$.

- If g does not divide c, no solution exists because g divides every left side.
- If g divides c, $(x₀,y₀)=((c/g)u,(c/g)v)$ is one solution.
- Every solution is

$x=x₀+(b/g)t$, $y=y₀-(a/g)t$, $t\in Z$.

To prove completeness, subtract two solutions: $a(x-x₀)=-b(y-y₀)$. After dividing by g, the remaining coefficients are coprime, so each divides the corresponding difference.

**Worked example.** For $35x+22y=1$, Euclid yields $1=8\cdot 22-5\cdot 35$; one solution is x=−5,y=8. All are $x=-5+22t$, $y=8-35t$.

## 3. Factorization can turn addition into cases

Solve $x^{2}-y^{2}=45$ in positive integers. Factor:

$$(x-y)(x+y)=45$$

The two factors have the same parity; since 45 is odd, every positive factor pair works. Pairs $(1,45),(3,15),(5,9)$ give $(x,y)=(23,22),(9,6),(7,2)$.

The same move can prove finiteness when a fixed nonzero product has finitely many divisors. It fails when the equation does not factor in the chosen ring; enlarging the ring may help, but factorization there must be justified.

## 4. Primitive Pythagorean triples are rational points on a circle

The equation $x^{2}+y^{2}=z^{2}$ with z≠0 becomes

$X^{2}+Y^{2}=1$, where $X=x/z$, $Y=y/z$.

Draw a line of rational slope t through the rational point (−1,0): $Y=t(X+1)$. Its second intersection is

$X=(1-t^{2})/(1+t^{2})$, $Y=2t/(1+t^{2})$.

Writing t=n/m and clearing denominators gives

$x=m^{2}-n^{2}$, $y=2mn$, $z=m^{2}+n^{2}$.

If m>n are coprime and of opposite parity, the triple is primitive. Conversely, every primitive triple appears this way up to swapping x,y. Geometry explains why a one-parameter formula exists: a conic with one rational point is rationally parametrized by lines through that point.

## 5. Infinite descent proves nonexistence

Descent assumes a positive solution minimal under a well-order such as denominator or hypotenuse, then constructs a smaller solution.

To show √2 is irrational, suppose $a^{2}=2b^{2}$ in lowest positive terms. Then a² is even, so a=2c. Substitution gives $b^{2}=2c^{2}$, so b is even. Both a,b share factor 2, contradicting lowest terms. This is a one-step descent embedded in a parity proof.

More elaborate descent proves that no positive square is the area of a rational right triangle. The structure also enters elliptic-curve descent, where maps to finite quotient groups bound possible rational generators. Descent does not mean “try smaller numbers”; the proof must define a strict measure and construct the smaller valid object.

## 6. Pell equations and units

For positive nonsquare D,

$$x^{2}-Dy^{2}=1$$

has nontrivial integer solutions. If $(x₁,y₁)$ is a solution, then

$$(x₁+y₁\sqrt{D})^{k}=x_{k}+y_{k}\sqrt{D}$$

has norm 1 and yields further solutions. Continued fractions of √D find a fundamental positive solution.

For D=2, the first is $(3,2)$. Squaring $3+2\sqrt{2}$ gives $17+12\sqrt{2}$, and indeed $17^{2}-2\cdot 12^{2}=1$.

The equation with right side N, negative Pell equation, and simultaneous conditions require separate solvability analysis. Periodicity of the continued fraction gives criteria, not a promise that every variant has a solution.

## 7. Local information: powerful, not universally complete

A rational solution gives a real solution and a solution over every p-adic field Q_p, hence solutions modulo every p^k after clearing denominators appropriately. These are **local** tests.

For quadratic forms, important local-global theorems exist. The Hasse–Minkowski theorem says a quadratic form over Q represents zero nontrivially exactly when it does so over R and every Q_p. But “local solutions imply a rational solution” fails for general higher-degree varieties.

The failure can be measured by obstructions such as Brauer–Manin, but even that is not a universal complete decision mechanism for every variety. A computational report should say “no obstruction found up to these moduli” unless a theorem makes the tested family complete.

## 8. Cubics acquire a group law

Let

$$E: y^{2}=x^{3}+Ax+B$$

over a field of characteristic not 2 or 3, with $4A^{3}+27B^{2}\ne 0$. Add a point at infinity $𝒪$. A nonvertical line through two points meets the cubic at a third point counting multiplicity; reflect the third point in the x-axis. This defines P+Q. Tangency handles P=Q, and a vertical line gives $P+(-P)=𝒪$.

The coordinate formulas are rational. For distinct x-coordinates,

$$\lambda=(y₂-y₁)/(x₂-x₁)$$

$x₃=\lambda^{2}-x₁-x₂$, $y₃=\lambda(x₁-x₃)-y₁$.

For doubling, replace the slope by $(3x₁^{2}+A)/(2y₁)$. If y₁=0, the tangent is vertical and 2P=$𝒪$.

Associativity is not visually obvious; it is a theorem, proved algebraically or geometrically with suitable care. A diagram motivates the rule but does not establish the group axioms.

## 9. Exact rational group calculation

On $E:y^{2}=x^{3}-2$, the point P=(3,5) lies on the curve because 25=27−2. Double it:

$$\lambda=3\cdot 3^{2}/(2\cdot 5)=27/10$$

Then

$$x(2P)=729/100-6=129/100$$

$$y(2P)=(27/10)(3-129/100)-5 = -383/1000$$

Check:

$$(-383/1000)^{2} = (129/100)^{3}-2$$

Both sides equal 146689/1000000. Rational denominators grow rapidly, motivating projective coordinates and height functions in computation.

## 10. Finite fields turn geometry into exact tables

Over $F_{p}$, enumerate x and test whether $x^{3}+Ax+B$ is a square. The group has finitely many points. Hasse’s theorem bounds

$$|\#E(\mathbb F_{p})-(p+1)|\le 2\sqrt{p}$$

On $y^{2}=x^{3}+2x+1$ over F₅, the six affine points are

$$(0,1),(0,4),(1,2),(1,3),(3,2),(3,3)$$

plus $𝒪$. The point (0,1) has order 7, so this group is cyclic. This claim comes from a complete table in this tiny case; a large curve needs algorithms and proofs rather than enumeration.

Reduction modulo good primes gives information about rational points. Torsion injects into many finite reductions under suitable good-reduction hypotheses, which can bound rational torsion. A point count at one prime does not determine the rational rank.

## 11. Mordell–Weil and heights

Mordell’s theorem says $E(Q)$ is finitely generated:

$$E(Q)\simeq E(Q)_{\mathrm{tors}}\oplus Z^{r}$$

The finite torsion subgroup and rank r answer different questions. Nagell–Lutz gives an integral-coordinate restriction on torsion for an integral short Weierstrass model, but does not list all nontorsion points.

A height measures arithmetic complexity of a rational point. The canonical height satisfies

$$\hat h(nP)=n^{2}\hat h(P)$$

and differs from a naive logarithmic height by a bounded amount. Descent maps and height bounds can reduce generator search to finitely many cases. “Finitely generated” is not itself an easy generator algorithm; effective bounds and saturation are substantive computational work.

## 12. Arithmetic geometry widens the question

Arithmetic geometry studies schemes or varieties over number fields, finite fields, and local fields. It asks about:

- existence and distribution of rational/integral points;
- reduction at primes and Galois action;
- heights and Diophantine approximation;
- local-global principles and obstructions;
- zeta and L-functions;
- families, moduli, and cohomological invariants.

Faltings’s theorem says a smooth projective curve of genus greater than one over a number field has finitely many rational points. It is a finiteness theorem, not a universal procedure listing them. Genus zero with a rational point can have a parametrization; genus one with a rational point is an elliptic curve and can have positive rank; genus greater than one is qualitatively different.

The Birch and Swinnerton-Dyer conjecture predicts that the rank of an elliptic curve equals the order of vanishing of its L-function at s=1 and refines this with a leading-coefficient formula. It remains open in general. Computed agreement for examples is not a proof of the full conjecture.

## Exercises

<a id="deep-dive-diophantine-curves-local-global-ex-1"></a>

### Exercise 1

1. Solve $84x+30y=6$ and parametrize every solution.

<details>
<summary>Hint 1</summary>

A linear integer equation is solvable when its coefficient gcd divides the right-hand side.
</details>

<details>
<summary>Hint 2</summary>

Find one Bezout solution after dividing by six, then add every solution of the homogeneous equation.
</details>

<details>
<summary>Solution</summary>

Divide by 6: $14x+5y=1$. Since $1=3\cdot 5-1\cdot 14$, one solution is x=−1,y=3. All are $x=-1+5t$, $y=3-14t$.

</details>

<a id="deep-dive-diophantine-curves-local-global-ex-2"></a>

### Exercise 2

2. Prove $x^{2}-y^{2}=2$ has no integer solution using parity of the two factors.

<details>
<summary>Hint 1</summary>

Factor the difference of squares into two integer factors.
</details>

<details>
<summary>Hint 2</summary>

Those factors have the same parity, but a product of two needs one odd and one even factor.
</details>

<details>
<summary>Solution</summary>

$(x-y)(x+y)=2$. The two factors have the same parity. They cannot be the factor pair 1,2 because that pair has different parity; negative pairs give the same obstruction.

</details>

### Further exercises

3. Derive the Pythagorean triple from t=2/3.
4. Compute the next Pell solution after (3,2) for D=2.
5. Verify P=(3,5) and 2P=(129/100,−383/1000) lie on $y^{2}=x^{3}-2$.
6. On the F₅ curve above, compute 2(0,1) and its inverse.
7. Explain why points modulo 5 and modulo 7 do not by themselves prove a rational point exists.
8. Classify what Mordell, Hasse, Faltings, and BSD respectively assert.

## Solutions


3. $X=(1-4/9)/(1+4/9)=5/13$, $Y=(4/3)/(13/9)=12/13$, giving (5,12,13).
4. $(3+2\sqrt{2})^{2}=17+12\sqrt{2}$, so (17,12).
5. Direct substitution gives 25=27−2. For 2P, both squared y and $x^{3}-2$ equal 146689/1000000.
6. Doubling slope is $(3\cdot 0^{2}+2)/(2\cdot 1)=2\cdot 3=1 \bmod 5$, so 2P=(1,3). Its inverse is (1,2).
7. These are necessary local shadows of a rational solution, but general varieties can have compatible local points without a rational point. A local-global theorem for the named family would be needed.
8. Mordell: E(Q) is finitely generated. Hasse: finite-field point count lies within 2√p of p+1. Faltings: genus-greater-than-one curves over number fields have finitely many rational points. BSD: a still-conjectural link between elliptic rank and L-function behavior, with a refined formula.

## Continue

Use the live lab for finite-field addition and the prime/ideal/L-function deep dive for analytic and algebraic bridges. Future material should develop conics and quadratic forms, p-adic numbers, Thue and Mordell equations, effective Siegel questions, descent and Selmer groups, heights, Chabauty–Coleman methods, Brauer–Manin obstructions, Galois representations, modular curves, and explicit arithmetic-geometry software with independently audited certificates.
