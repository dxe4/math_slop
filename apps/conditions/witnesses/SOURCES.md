# Elimination equations and common root witnesses

Sources inspected 20 October 2026. The polynomial families, proofs, diagrams
and task sequence below are original. The named sources supply the imported
theorems and the documented meanings of the optional computation commands.

## Three parameter sets

Let a and b be real or complex parameters, and let u be an unknown in the same
field. Set

\[
f=au^2+u+b,\qquad g=au+1.
\]

The polynomial identity f−ug=b proves that a common root requires b=0. When
a=0, g=1 makes a common root impossible. When a≠0 and b=0, the value u=−1/a
satisfies both polynomials and is forced by g=0. Thus the exact existence
condition over either field is b=0 and a≠0, with one common root. This proof
classifies every parameter pair; the controls substitute only rational probes.

For generic degrees two and one, the Sylvester matrix is

\[
S=\begin{pmatrix}a&1&b\\a&1&0\\0&a&1\end{pmatrix},
\qquad \det S=a^2b.
\]

Its vanishing set is the union of a=0 and b=0. The identity f−ug=b eliminates
every point of the first line except the origin. At the origin, however,
g=1 still excludes every witness. A resultant candidate, an elimination
equation and an actual common root therefore answer different questions.

At a=0 the specialized polynomials are u+b and 1, of actual degrees one and
zero. Their resultant is 1. Substituting a=0 into the generic determinant
instead gives zero. The determinant retains the original degree pattern;
recomputing after specialization changes that pattern. The factor a² is not
a count of affine solutions. As an optional projective explanation, fixed
degree homogenization gives F=aU²+UV+bV² and G=aU+V. At a=0 they share the
point [1:0], which is not an affine value of u=U/V.

In the polynomial ring Q[u,a,b],

\[
(f,g)=(b,au+1),\qquad (f,g)\cap\mathbb Q[a,b]=(b).
\]

The first equality follows in both directions from f=ug+b. To prove the
second, take h(a,b) in the intersection. Substituting b=0 and u=−1/a for
every nonzero rational a shows h(a,0)=0 at infinitely many inputs. A nonzero
univariate polynomial has only finitely many roots, so h(a,0) is the zero
polynomial. Hence b divides h. The reverse inclusion follows from f−ug=b.
The elimination variety is therefore the line b=0. Over C this is the Zariski
closure of the actual image, the line with its origin removed.

## Imported elimination theorems

[Linus Setiabrata, notes of Karola Mészáros's Math 4370 Computational Algebra
course](https://pi.math.cornell.edu/~ls823/4370fa19.pdf), printed page 48,
Theorem 6.15.5, states the lexicographic elimination theorem, with eliminated
variables ordered before retained variables: the basis elements
in the retained variables form a Gröbner basis of the corresponding elimination
ideal. This is an algebraic statement about polynomial consequences.

In the same notes, printed page 50, Theorem 6.16.2, gives the extension theorem
over C. Write each generator as a polynomial in the eliminated variable with
leading coefficient c_i in the retained coordinates. A point of the elimination
variety extends if not all c_i vanish there. This sufficient condition gives
no conclusion on their common zero set. In particular, failure of that test
does not prove failure to extend. Printed page 51, Corollary 6.16.5, explains
the useful special case of a nonzero constant leading coefficient and positive
degree in the eliminated variable.

Printed pages 51–53, Theorems 6.16.7 and 6.17.1, identify the elimination
variety with the Zariski closure of the projection over an algebraically closed
field. They do not identify the projection with the elimination variety in
general. Printed pages 61–63 discuss resultant specialization, including the
effect of a vanished leading term. The workshop proves its concrete cases
directly rather than requiring learners to prove these general theorems.

The current [Cox, Little and O'Shea author site](https://www.idealsvarietiesalgorithms.org/)
identifies the fifth edition of *Ideals, Varieties, and Algorithms* (2025).
It states that theorem and exercise numbering remains compatible with the
fourth edition. The fourth-edition
[contents on Cox's author site](https://dacox.people.amherst.edu/iva/toc.html)
locate the elimination and extension theorems in Chapter 3 Section 1, geometry
of elimination in Section 2, and resultants in Section 6. The precise lecture
page references above provide the verified theorem statements used here.

## A changed projection over two fields

The written transfer asks for parameter pairs admitting u and v such that

\[
u^2+v^2=x,\qquad uv=y.
\]

For real u,v, the identities (u+v)²=x+2y and (u−v)²=x−2y require both
right sides to be nonnegative. Conversely, if x±2y≥0, choose
s=√(x+2y), t=√(x−2y), then u=(s+t)/2, v=(s−t)/2. Direct expansion gives
u²+v²=x and uv=y. Thus the real projection is the closed cone x≥2|y|,
including its boundary. At (x,y)=(1,1), the equation (u−v)²=−1 rules out
real witnesses.

Over C both square roots exist for every x,y, and the same construction
produces witnesses. At (1,1), u=(√3+i)/2 and v=(√3−i)/2 are one pair.
Thus the complex projection is all C², and the elimination ideal in Q[x,y]
is zero: every polynomial in that ideal vanishes on every complex pair and
must be the zero polynomial. No choice of a principal branch is needed; choose
any square roots separately for each pair. This exercise concerns existence,
not a globally continuous choice of witnesses.

This is outside the controls because its proof changes from a forbidden
division and degree loss to real positivity and a second unknown. Merely
copying the main parameter formula cannot solve it.

## Optional Wolfram Language commands

[Eliminate documentation](https://reference.wolfram.com/language/ref/Eliminate.html),
Properties and Relations and Possible Issues, distinguishes equations-only
elimination from exact projection. Its equations-only example returns the
Zariski closure; the page separately documents inputs containing inequations,
which can return equations and inequations. Do not generalize this into a
claim that Eliminate always discards restrictions.

[Resolve documentation](https://reference.wolfram.com/language/ref/Resolve.html),
Details and Options, describes elimination of quantifiers and explicit domain
arguments. Use Reals or Complexes in this lesson. A formula with free variables
may remain unsolved; Reduce can describe its solution set more explicitly.
The commands encode a mathematical question, so checking that encoding remains
part of the argument.

[GroebnerBasis documentation](https://reference.wolfram.com/language/ref/GroebnerBasis.html)
documents variable order, coefficient domains and elimination variables.
The companion explicitly includes u,a,b when computing the ideal in
Q[u,a,b]. Treating parameters as rational-function coefficients asks a
different generic question and can invert quantities that vanish on special
parameter strata.

[PolynomialReduce documentation](https://reference.wolfram.com/language/ref/PolynomialReduce.html)
describes the polynomial identity represented by quotients and remainder. A
zero remainder gives an ideal-membership certificate; a nonzero remainder
against an arbitrary generating list does not establish nonmembership. The
companion checks against a Gröbner basis with the same order. The elementary
identity f−ug=b can also be checked by expansion alone.

[Resultant documentation](https://reference.wolfram.com/language/ref/Resultant.html)
supplies the native polynomial command. The degree-loss distinction is proved
above and treated explicitly in the lecture notes. It must accompany a
parameter interpretation of the generic resultant.

The [companion source](witnesses.wl) has not been executed here. No Wolfram
runtime was found in this environment. Its expected mathematical statements
are proved independently above; a future run should retain $Version, results
and messages. The author's current textbook site also notes that older
Mathematica and Maple add-on packages are unsupported; none is required.

## Teaching and verification scope

The workshop extends the existing [symbolic computation research](../../lectures/research/computation-and-proof.md)
and [Conditions workshop](../index.html) without repeating their main domain
examples. Its prediction, independently entered witness, revision and changed
task are teaching choices, not an empirical effectiveness claim. Assess the
direction of each implication and the construction or exclusion of witnesses
separately from command syntax.

The browser diagrams are schematic representations of the three proved sets.
They do not infer membership from pixels. The model reuses the frozen parent
rational module and accepts only bounded rational text. A small companion
parser admits at most 256 raw characters and at most 120 digits in each
normalized numerator and denominator. Canonical input strings therefore have
at most 242 characters; taking −1/a swaps the two component magnitudes without
enlarging either digit budget. Saved parameters and every allowed exact root
remain enterable. All decisions use exact integer arithmetic. Software tests,
finite probes and browser reviews
check the implementation; the identities and case proofs establish the
mathematical claims for every admitted field value.


## Saved-input closure and interpretation

The parser accepts at most 256 raw characters and 120 digits in each reduced
numerator and denominator. Canonical signed rational text has at most 242
characters. The exact reported root −1/a swaps those two component magnitudes
and changes a sign, so every admitted solvable case has an enterable reported
root and saved canonical inputs remain admissible. This closure argument is
separate from finite tests of parameter or witness pairs. The controls classify
one authored family; changed real/complex tasks remain written work. Finite
software probes and exact diagrams do not automatically certify a learner's proof.


## Numerical-check provenance and limits

Earlier transient checks covered 3,481 rational parameter pairs and 3,481
rational-witness pairs in the changed real/complex problem; a separate SymPy
inspection checked the ideal basis and resultants. Those observations are
distinct from the retained Node/browser gates and do not establish a universal
claim by enumeration. The written identity, elimination ideal, degree-loss and
projection arguments above supply the proof. The optional Wolfram source remains
unexecuted. The [current exact model](model.js) and its retained model/content/import tests
supply repeatable implementation checks separately from those historical observations.


## Restoration observation order

An earlier synthetic maximum-note diagnostic first inspected the restored state
at 5,530 ms, after its default load wait: `readyState` was `complete`, and the
load event was recorded at 5,525 ms. All seven 6,000-character notes and the
recomputed f=g=0 result were present; a later observation at 5,557 ms also showed
completed load. This establishes restored state and successful load, not that
restoration completed before the load event. These timings are observations of
that QA run, not a performance contract or a learner-origin record.
