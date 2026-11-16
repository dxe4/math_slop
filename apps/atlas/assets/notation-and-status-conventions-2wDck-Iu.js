var e=`---
parent_id: book-algebra-patterns-structure
matter_id: notation-and-status-conventions
title: "Notation, Structure, and Status Conventions"
license: CC BY-SA 4.0
---

# Notation, Structure, and Status Conventions

Notation is part of the mathematical contract. This guide records volume-wide
defaults. A chapter may use a local convention only after declaring it.

## Sets, maps, and logic

$A \\subseteq B$ permits equality; proper inclusion is stated explicitly. The
image and kernel of a map $\\phi$ are $\\operatorname{im} \\phi$ and $\\ker \\phi$. Composition is
right to left: $(\\phi \\circ \\psi)(x)=\\phi(\\psi(x))$. An isomorphism is a bijective
homomorphism of the declared structures, not merely a bijection of underlying
sets.

$P\\Longrightarrow Q$ does not include the converse. A definition written with “if and only
if” requires both directions when used as a test. Universal claims are refuted
by one verified counterexample; examples do not prove universal claims.

## Group conventions

Generic groups use multiplicative notation: identity $e$, inverse $g^{-1}$,
and product $gh$. Familiar abelian groups such as $\\mathbb{Z}$, vector spaces, and
residue groups may use additive notation: identity $0$, inverse $-g$, and
multiple $ng$.

$H\\le G$ means subgroup. Normality is written $N \\trianglelefteq G$ in plain formulas.
The left coset is $gH$; the right coset is $Hg$. A quotient $G/N$ is a group
only after normality makes coset multiplication representative-independent.
$|G|$ is group cardinality, while $\\operatorname{ord}(g)$ is element order.

Permutations act on the left and compose right to left. Thus in $\\sigma \\tau$,
apply $\\tau$ first. Disjoint cycles commute. $S_n$ is the full symmetric group
and $A_n$ the alternating group. Dihedral-group order conventions vary in the
literature; this book states the order whenever using $D_n$-style language.

An action $G$ on $X$ is a homomorphism $G\\to \\operatorname{Sym}(X)$. Orbits and stabilizers are
$Gx$ and $G_x$; the action kernel consists of elements fixing every point.

## Ring conventions

Unless explicitly called nonunital, rings have a multiplicative identity and
ring homomorphisms preserve it. The zero ring, where $0=1$, is allowed.
Commutativity is never assumed silently. Subrings contain the ambient identity. An integral domain is a nonzero
commutative unital ring with no zero divisors. A field is a nonzero commutative
unital ring in which every nonzero element is a unit.

Ideals in a commutative ring are two-sided automatically. In a noncommutative
setting, the side must be stated. $(a_1,...,a_n)$ denotes the ideal generated
by those elements when the ambient ring is clear. $R/I$ denotes a quotient
ring, whose elements are cosets; a preferred representative is not the coset.

$R^{\\times}=U(R)$ is the unit group; in a noncommutative ring, a unit
has a two-sided inverse. $\\operatorname{char} R$ is the least positive $n$ with
$n\\cdot 1=0$, or zero if none exists. The zero ring has characteristic $1$; a domain has
$1\\ne0$ and therefore cannot have characteristic $1$. Divisibility, associates, irreducibility,
primality, gcds, and factorization are always relative to a named ring.

## Polynomial and field conventions

$R[x]$ is the polynomial ring in one indeterminate. A polynomial and its
associated function are distinguished when the coefficient ring is finite or
has zero divisors. $f'$ is the formal derivative; in positive characteristic
it can vanish for a nonconstant polynomial.

For an extension $E/F$, the larger field is written first in the degree
$[E:F]$. The notation means $E$ is a field containing an identified copy of
$F$; the degree is vector-space dimension. $F(\\alpha_1,...,\\alpha_n)$ is the
smallest subfield containing $F$ and the named elements. It differs from the
subring $F[\\alpha_1,...,\\alpha_n]$ until algebraicity or another argument proves
equality.

Every base-field embedding fixes $F$ pointwise. $\\operatorname{Gal}(E/F)$ is the group of
field automorphisms of $E$ fixing $F$. In this volume, “Galois extension” means
finite, normal, and separable. Fixed fields use $E^H$.

## Products, sums, and presentations

Finite direct products and direct sums of groups coincide as underlying sets,
but \`direct-product\` and \`direct-sum\` signal multiplicative and additive
contexts. An external semidirect product must name the action homomorphism.

A presentation lists generators and relations. It defines the quotient of a
free object by the normal closure or relation subgroup, not merely a rewriting
game. Integer presentation matrices use columns for relations unless a section
explicitly transposes the convention. Smith operations are unimodular integer
row and column operations; rational Gaussian elimination is not a substitute.

## Equality and isomorphism

Equality means the same object in the current ambient universe. Isomorphism
means structure-preserving equivalence. Two subgroups may be abstractly
isomorphic but occupy different positions and fix different subfields. Two
splitting fields are unique up to a base-preserving isomorphism, not canonical
equality inside every ambient closure.

## Stable practice identifiers

Exercise \`n\` in the present chapter order has an identifier of the form \`ALG-CHnn-Ennn\`; its separate solution heading repeats that exact identifier. A required project uses \`ALG-CHnn-Pnnn\`. The \`I\` kind is reserved for a genuinely optional investigation with a separate contract; this edition has no such contracts. The eight longer investigations in the chapter sequence are required projects, including the two-route final capstone, which has one project identifier.

These identifiers identify the current edition's contracts permanently. Their numbers record the original chapter and exercise order; later moves must retain identifiers, and retired identifiers must never be reused. Cite an identifier when reporting a correction. A solution framework gives reasoned milestones and checks for a project, not a uniquely prescribed submission.

## Theorem and proof labels

- **Definition** fixes a term and is not proved.
- **Theorem** is a central proved statement.
- **Proposition** and **lemma** are proved results with local roles.
- **Corollary** follows from an identified earlier result.
- **Example** verifies membership and relevant operations.
- **Counterexample** names the exact universal assertion refuted.
- **Computation** is exact within its declared finite or symbolic scope.
- **Heuristic** motivates but does not establish a claim.
- **Solution framework** gives required milestones for a long project; it is
  not a line-by-line unique solution.

Every quotient construction must prove representative independence. Every
classification claim must state the category and invariants. Every counting
proof must say where finiteness enters. Every cancellation must identify a
group inverse, nonzero field element, unit, or no-zero-divisor hypothesis.

## Accessible representations

Tables declare row and column labels and the operation order. Cayley graphs or
subgroup lattices require a text alternative listing vertices and edges or
cover relations. Colour never carries a unique distinction. Interactive
controls require visible labels, keyboard operation, and reduced-motion
support. A reader using only the source text must still be able to reconstruct
the mathematical claim.
`;export{e as default};