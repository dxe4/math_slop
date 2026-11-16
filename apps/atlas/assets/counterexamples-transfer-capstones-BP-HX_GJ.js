var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: counterexamples-transfer-capstones
title: "Counterexamples, Transfer Principles, and Capstones"
level: undergraduate
estimated_minutes: 340
license: CC BY-SA 4.0
---

# Counterexamples, Transfer Principles, and Capstones

Abstract algebra becomes durable when its proof patterns transfer and its
hypotheses do not blur. Kernels produce normal subobjects in groups and ideals
in rings. Quotients encode deliberate identification. Actions turn structure
into permutations. Factorization and field extensions turn arithmetic into
symmetry. But each transfer has a boundary. This chapter builds a compact
counterexample atlas, then asks you to design arguments spanning the volume.

## 1. The hypothesis ledger

**Definition 21.1 (A typed hypothesis ledger).**

Before applying a theorem, write a ledger with four lines:

1. the ambient objects and operations;
2. every hypothesis, including finiteness and commutativity;
3. the map or construction and its typing;
4. the exact conclusion, no stronger.

For Lagrange, the ledger says finite group $G$, subgroup $H$, conclusion
$|H|$ divides $|G|$. The converse is absent. For the Galois correspondence it
says finite, normal, separable $E/F$; intermediate fields correspond to
subgroups, and only normal subgroups correspond to normal intermediate
extensions. A familiar-looking conclusion is never permission to erase its
ambient hypotheses.

## 2. Kernel, quotient, image: a transfer spine

**Theorem 21.1 (Kernel–quotient–image factorization in the declared category).**

For groups, $\\ker \\phi$ is normal and $G/\\ker \\phi \\cong \\operatorname{im} \\phi$. For
unital rings, $\\ker \\phi$ is an ideal and the analogous quotient is a ring. In
both settings the proof has the same architecture:

- equality of images is equivalence modulo the kernel;
- define the quotient map using representatives;
- prove representative independence;
- establish injectivity and surjectivity separately.

The nouns differ for a reason. Every group subgroup supports cosets, but only
normal subgroups support group quotients. Every additive subgroup of a ring
supports additive cosets, but two-sided absorption is needed for quotient
multiplication. Transfer the proof skeleton, then re-prove closure appropriate
to the operations present.

## 3. Actions, embeddings, and faithful models

A group action is a homomorphism $G\\to \\operatorname{Sym}(X)$. Its kernel contains the elements
acting trivially everywhere; the action is faithful exactly when that kernel
is trivial. Cayley's theorem uses left translation on $G$ to embed every group
in a symmetric group. A Galois group acts faithfully on a generating root set.

These are representation principles, not claims that the represented objects
become identical. An embedding preserves all declared operations and is
injective, but the image may sit inside a much larger ambient object with many
irrelevant symmetries.

## 4. Counterexample atlas

Each entry isolates one tempting false transfer.

- **Converse to Lagrange:** $A_4$ has order twelve but no subgroup of order six.
- **Product of subgroups:** in $S_3$, two distinct transposition subgroups have
  a set product that is not a subgroup.
- **Quotient by any subgroup:** a transposition subgroup of $S_3$ is not normal,
  so coset multiplication is not well-defined.
- **Finite group must be abelian:** $S_3$ has six elements and is nonabelian.
- **Cancellation in every ring:** $2\\cdot 1=2\\cdot 4$ in $\\mathbb{Z}/6\\mathbb{Z}$, but $1\\ne 4$.
- **Irreducible means prime everywhere:** the implication can fail outside a
  UFD; coefficient ring hypotheses matter.
- **Prime ideal means maximal:** $(0)$ is prime but not maximal in $\\mathbb{Z}$.
- **All finite extensions are normal:** $Q(\\sqrt[3]{2})/Q$ is not normal.
- **All irreducibles are separable:** $x^p-t$ over $\\mathbb{F}_{p}(t)$ is inseparable.
- **Degree determines an extension:** distinct quadratic fields all have
  degree two over $Q$.
- **Order classifies finite abelian groups:** $\\mathbb{Z}/4$ and $\\mathbb{Z}/2 \\oplus \\mathbb{Z}/2$
  have the same order and different exponents.
- **Torsion-free abelian means free:** this needs finite generation; $Q$ under
  addition is torsion-free and not free abelian.

A counterexample should be accompanied by a verification dossier: establish
that the object lies in the claimed category, compute the decisive invariant,
and name the exact assertion it refutes.

## 5. Local-to-global and decomposition patterns

Several volume-wide arguments split an object into controlled pieces:

- disjoint cosets partition a finite group;
- orbits partition an acted-on set;
- Chinese remainders split quotients by comaximal ideals;
- primary decomposition splits a finite abelian group prime by prime;
- a polynomial splitting field collects all conjugate roots;
- a Galois subgroup lattice organizes all intermediate fields.

The common pattern is to define local pieces, prove they do not interfere, and
show they reconstruct the whole. The proof of noninterference differs:
disjointness, comaximality, coprime orders, or fixed-field degree equations are
not interchangeable.

## 6. Invariants as impossibility certificates

To disprove an isomorphism, search for data preserved by every isomorphism:
cardinality, commutativity, element orders, center, number of solutions to an
equation, ideal lattice, characteristic, unit group, extension degree under an
isomorphism preserving the specified base field, or invariant
factors. Choose the cheapest decisive invariant. Cardinality cannot separate
two groups of order eight, but the existence of an element of order eight
separates $C_8$ from $C_4 \\times C_2$; commutativity then separates
both from $D_8$ when the order convention is declared.

An invariant can fail to be complete. Equal order, characteristic, or degree
may be necessary for isomorphism without being sufficient. Classification
theorems identify special settings where a named collection is complete.

## 7. Computation as finite proof

An exhaustive operation-table check can prove a claim about one finite object
when the enumeration, operation, and checked predicate are exact. It cannot by
itself prove a theorem for all groups. A trustworthy computational certificate
states:

- the finite universe and representation;
- the operation and convention;
- the property tested;
- why every case was enumerated;
- a human-checkable summary or witness.

For a proposed homomorphism between small finite groups, a table can check all
input pairs. A shorter proof may use generators, but only after proving those
generators generate and their relations are preserved.

## 8. Proof-repair workflow

When an argument fails, do not merely replace its conclusion. Locate the first
unsupported transition.

1. Type every expression.
2. Expand the definition used at that line.
3. Mark the hypothesis that justifies it.
4. If missing, either strengthen the statement or build a counterexample.
5. Re-run the proof on a boundary case: trivial object, smallest nontrivial
   object, infinite example, or positive-characteristic example.

This workflow catches division by a nonunit, cancellation by a zero divisor,
an unproved normality assumption, a choice of coset representative, and a
finite-counting proof silently applied to an infinite set.

## 9. Synthesis map

The course has four recurring moves. **Generate:** replace an object by data
that produces it. **Relate:** identify equations among generators. **Quotient:**
package relations as a universal map. **Act:** reveal structure through
permutations or automorphisms. Cyclic presentations, normal closures, quotient
rings, field adjunctions, Smith form, and Galois groups are different instances
of this map.

The deepest habit is conditional transfer: recognize a familiar architecture,
then rebuild its legality in the new category.

## Exercises with full solutions

### ALG-CH22-E001 — Exercise 1: Audit Lagrange's converse
Refute: if $d$ divides $|G|$, then $G$ has a subgroup of order $d$.

<details>
<summary>Hint 1</summary>

Use A₄ and the divisor six.

</details>

<details>
<summary>Hint 2</summary>

An index-two subgroup would be normal; inspect the conjugacy or quotient obstruction established earlier.

</details>

#### ALG-CH22-E001 — Solution

<details>
<summary>Solution</summary>


Take $G=A_4$, order twelve, and $d=6$. A subgroup of index two
would be normal and produce a quotient homomorphism $A_4\\to C_2$. Every 3-cycle
must map to the identity because its image has order dividing both three and
two. But the 3-cycles generate $A_4$, so the quotient map would be trivial,
contradicting surjectivity. Thus divisibility is necessary, not sufficient.



</details>

### ALG-CH22-E002 — Exercise 2: Normality from a kernel
Why is the kernel of a group homomorphism normal?

<details>
<summary>Hint 1</summary>

Conjugate a kernel element and apply the homomorphism.

</details>

<details>
<summary>Hint 2</summary>

Its image becomes φ(g)eφ(g)^{-1}=e.

</details>

#### ALG-CH22-E002 — Solution

<details>
<summary>Solution</summary>


If $k$ is in the kernel and $g$ is in the domain, then
$\\phi(gkg^{-1})=\\phi(g)e \\phi(g)^{-1}=e$. Hence conjugation preserves the kernel,
which is the normality criterion.



</details>

### ALG-CH22-E003 — Exercise 3: Ideals versus additive subgroups
Give an additive subgroup of a ring that is not an ideal.

<details>
<summary>Hint 1</summary>

Work in a ring where multiplication can leave an additive subgroup.

</details>

<details>
<summary>Hint 2</summary>

For example Z⊆Q is an additive subgroup containing one but is not all of Q.

</details>

#### ALG-CH22-E003 — Solution

<details>
<summary>Solution</summary>


In $\\mathbb{Z}[x]$, the constant polynomials $\\mathbb{Z}$ form an additive
subgroup. It is not an ideal because $1$ belongs to it but $x\\cdot 1=x$ does not.
Absorption by arbitrary ring elements fails.



</details>

### ALG-CH22-E004 — Exercise 4: Representative independence
What must be shown before defining $(gN)(hN)=ghN$?

<details>
<summary>Hint 1</summary>

Replace both representatives by elements in their same cosets.

</details>

<details>
<summary>Hint 2</summary>

Show the resulting products differ by N; normality supplies the needed conjugation closure.

</details>

#### ALG-CH22-E004 — Solution

<details>
<summary>Solution</summary>


If $gN=g'N$ and $hN=h'N$, one must prove $ghN=g'h'N$.
Normality lets the intervening subgroup elements move across arbitrary group
elements, establishing this independence from representatives.



</details>

### ALG-CH22-E005 — Exercise 5: A nonfaithful action
Give a nonfaithful action of a nontrivial group.

<details>
<summary>Hint 1</summary>

Let every group element fix every point.

</details>

<details>
<summary>Hint 2</summary>

For a nontrivial group the kernel of this trivial action is the whole group.

</details>

#### ALG-CH22-E005 — Solution

<details>
<summary>Solution</summary>


Let any nontrivial $G$ act on a one-point set. Every element
induces the identity permutation, so the action homomorphism has kernel all of
$G$ and is not faithful.



</details>

### ALG-CH22-E006 — Exercise 6: An invariant certificate
Prove $S_3$ is not isomorphic to $C_6$.

<details>
<summary>Hint 1</summary>

Compare commutativity.

</details>

<details>
<summary>Hint 2</summary>

C₆ is abelian, whereas two transpositions in S₃ fail to commute.

</details>

#### ALG-CH22-E006 — Solution

<details>
<summary>Solution</summary>


$C_6$ is abelian, while in $S_3$ the transpositions $(12)$ and
$(23)$ do not commute. Isomorphisms preserve commutativity, so none exists.



</details>

### ALG-CH22-E007 — Exercise 7: An incomplete invariant
Why does equal cardinality not prove two finite groups are isomorphic?

<details>
<summary>Hint 1</summary>

Compare C₄ and C₂×C₂.

</details>

<details>
<summary>Hint 2</summary>

They have the same order but different element-order distributions.

</details>

#### ALG-CH22-E007 — Solution

<details>
<summary>Solution</summary>


$C_4$ and $C_2 \\times C_2$ both have four elements. The
first has an element of order four; every nonidentity element of the second has
order two. Thus equal cardinality is not complete.



</details>

### ALG-CH22-E008 — Exercise 8: Cancellation failure
Identify the invalid step in $2x=2y \\Longrightarrow  x=y$ over $\\mathbb{Z}/6\\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

The scalar two is a zero divisor and not a unit modulo six.

</details>

<details>
<summary>Hint 2</summary>

Use x=0,y=3 to see why cancellation fails.

</details>

#### ALG-CH22-E008 — Solution

<details>
<summary>Solution</summary>


Two is a zero divisor and not a unit modulo six, so it cannot be
cancelled. Indeed $x=1,y=4$ gives $2x=2y=2$ but $x\\ne y$.



</details>

### ALG-CH22-E009 — Exercise 9: Prime not maximal
Show $(0)$ is prime but not maximal in $\\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Apply the quotient criteria.

</details>

<details>
<summary>Hint 2</summary>

Z/(0)=Z is a domain but not a field.

</details>

#### ALG-CH22-E009 — Solution

<details>
<summary>Solution</summary>


The quotient $\\mathbb{Z}/(0)=\\mathbb{Z}$ is an integral domain, so $(0)$ is prime.
It is not a field, or equivalently $(0)$ is properly contained in $(2)$, so it
is not maximal.



</details>

### ALG-CH22-E010 — Exercise 10: Normality failure
Explain precisely why $Q(\\sqrt[3]{2})/Q$ is not normal.

<details>
<summary>Hint 1</summary>

Use the retained splitting-fields preparation before this optional question.

</details>

<details>
<summary>Hint 2</summary>

The real cubic-root field contains one root of x³−2 but not its two nonreal conjugates.

</details>

#### ALG-CH22-E010 — Solution

<details>
<summary>Solution</summary>


The irreducible polynomial $x^3-2$ has one root in the real
field $Q(\\sqrt[3]{2})$, but its two nonreal roots are absent. An irreducible
polynomial with one root therefore fails to split in the extension.



</details>

### ALG-CH22-E011 — Exercise 11: Separability boundary
Why does the characteristic-zero separability proof fail for $x^p-t$ over
$\\mathbb{F}_{p}(t)$?

<details>
<summary>Hint 1</summary>

Compute the formal derivative in characteristic p.

</details>

<details>
<summary>Hint 2</summary>

It is zero; the characteristic-zero proof cannot deduce coprimality with the polynomial.

</details>

#### ALG-CH22-E011 — Solution

<details>
<summary>Solution</summary>


Its derivative is $px^{p-1}=0$. The characteristic-zero proof
relies on a nonconstant irreducible polynomial having a nonzero derivative of
smaller degree; that premise fails in characteristic $p$.



</details>

### ALG-CH22-E012 — Exercise 12: Primary decomposition
Find the primary components of $\\mathbb{Z}/60\\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Factor sixty into pairwise coprime prime powers.

</details>

<details>
<summary>Hint 2</summary>

Use CRT to obtain the four-, three- and five-primary cyclic components.

</details>

#### ALG-CH22-E012 — Solution

<details>
<summary>Solution</summary>


Since $60=4\\cdot 3\\cdot 5$ with pairwise coprime factors, Chinese
remainders give $\\mathbb{Z}/60 \\cong \\mathbb{Z}/4 \\oplus \\mathbb{Z}/3 \\oplus \\mathbb{Z}/5$.
These are respectively the 2-, 3-, and 5-primary components.



</details>

### ALG-CH22-E013 — Exercise 13: A quotient invariant
Distinguish $\\mathbb{Z}/8$ from $\\mathbb{Z}/4 \\oplus \\mathbb{Z}/2$ using exponent.

<details>
<summary>Hint 1</summary>

Find the largest possible element order in each group.

</details>

<details>
<summary>Hint 2</summary>

The first has exponent eight and the second exponent four.

</details>

#### ALG-CH22-E013 — Solution

<details>
<summary>Solution</summary>


The exponent of $\\mathbb{Z}/8$ is eight. Every element of the product is
killed by four, and $(1,0)$ has order four, so its exponent is four.
Isomorphic groups have equal exponent.



</details>

### ALG-CH22-E014 — Exercise 14: Degree is not complete
Give two nonisomorphic degree-two extensions of $Q$.

<details>
<summary>Hint 1</summary>

Choose Q(√2) and Q(√3) as extensions of Q.

</details>

<details>
<summary>Hint 2</summary>

An isomorphism fixing Q would send √2 to a root of x²−2 inside Q(√3); compare coefficients to rule this out.

</details>

#### ALG-CH22-E014 — Solution

<details>
<summary>Solution</summary>


$Q(\\sqrt{2})$ and $Q(\\sqrt{3})$ both have degree two. If equal,
write $\\sqrt{2}=a+b \\sqrt{3}$ with rational $a,b$; squaring and comparing the
irrational part forces $2ab=0$. If $b=0$, then $a^2=2$; if $a=0$, then
$b^2=2/3$. Each equation is impossible for a rational square, by parity of the
prime valuations in a reduced numerator and denominator. Hence the fields are not
equal as subfields of $R$; their base-preserving isomorphism would likewise
send a root of $x^2-2$ to such a root in the second field, which has none.



</details>

### ALG-CH22-E015 — Exercise 15: Finite computation scope
A program checks associativity for a six-element table. What has it proved?

<details>
<summary>Hint 1</summary>

State the exact table and finite set being checked.

</details>

<details>
<summary>Hint 2</summary>

Exhaustion proves associativity for that specified operation, but does not verify other axioms or a theorem for arbitrary tables.

</details>

#### ALG-CH22-E015 — Solution

<details>
<summary>Solution</summary>


Provided it enumerates all $6^3$ triples exactly and the table
is the declared operation, it proves associativity for that particular finite
operation. It has not proved that every six-element operation, or every member
of an infinite family, is associative.



</details>

### ALG-CH22-E016 — Exercise 16: Find the hidden finiteness
Where does the proof “injective implies surjective” require finiteness?

<details>
<summary>Hint 1</summary>

Locate the step equating cardinalities after injection.

</details>

<details>
<summary>Hint 2</summary>

For an infinite set a proper subset can have the same cardinality, as a shift of the nonnegative integers shows.

</details>

#### ALG-CH22-E016 — Solution

<details>
<summary>Solution</summary>


For a self-map of a finite set, an injective image has the same
finite cardinality as the domain and hence is the whole codomain. On $N$, the
map $n\\to n+1$ is injective and not surjective, exposing the missing hypothesis.



</details>

### ALG-CH22-E017 — Exercise 17: Transfer a quotient proof
What replaces normality when moving from group quotients to commutative-ring
quotients?

<details>
<summary>Hint 1</summary>

The additive subgroup must absorb multiplication from the ambient ring.

</details>

<details>
<summary>Hint 2</summary>

That ideal condition is what makes quotient multiplication independent of representatives.

</details>

#### ALG-CH22-E017 — Solution

<details>
<summary>Solution</summary>


An ideal replaces a normal subgroup. Its additive subgroup gives
cosets, and absorption $rI \\subseteq I$ makes multiplication independent of
representatives. Normality alone belongs to group conjugation and does not
state ring absorption.



</details>

### ALG-CH22-E018 — Exercise 18: Classify before comparing
Are $\\mathbb{Z}/6 \\oplus \\mathbb{Z}/10$ and $\\mathbb{Z}/2 \\oplus \\mathbb{Z}/30$ isomorphic?

<details>
<summary>Hint 1</summary>

Convert to primary factors and right-align.

</details>

<details>
<summary>Hint 2</summary>

Both groups have invariant factors two and thirty.

</details>

#### ALG-CH22-E018 — Solution

<details>
<summary>Solution</summary>


Split the first into elementary divisors $2,3,2,5$. Aligning
prime powers gives invariant factors $2,30$, exactly the second group. Thus
they are isomorphic.



</details>

### ALG-CH22-E019 — Exercise 19: Galois inclusion reversal
If $F \\subseteq K \\subseteq L \\subseteq E$ in finite Galois $E/F$, compare the
fixing subgroups.

<details>
<summary>Hint 1</summary>

An automorphism fixing a larger intermediate field fixes a smaller one.

</details>

<details>
<summary>Hint 2</summary>

Thus the fixing subgroup for L is contained in the fixing subgroup for K; equality or strictness needs the correspondence hypotheses.

</details>

#### ALG-CH22-E019 — Solution

<details>
<summary>Solution</summary>


Fixing every element of the larger field $L$ is a stronger
condition than fixing $K$. Hence $\\operatorname{Gal}(E/L)\\le \\operatorname{Gal}(E/K)$: field inclusion reverses
to subgroup inclusion.



</details>

### ALG-CH22-E020 — Exercise 20: Repair an overclaim
Repair: “Every irreducible polynomial has distinct roots.”

<details>
<summary>Hint 1</summary>

State the field hypothesis that makes irreducible polynomials separable.

</details>

<details>
<summary>Hint 2</summary>

Characteristic zero suffices; more generally use perfect fields or explicitly require a nonzero derivative coprime to the polynomial.

</details>

#### ALG-CH22-E020 — Solution

<details>
<summary>Solution</summary>


One valid repair is: every irreducible polynomial over a perfect
field is separable and therefore has distinct roots in its splitting field.
Characteristic-zero and finite fields are perfect. Without perfection,
$x^p-t$ over $\\mathbb{F}_{p}(t)$ is an irreducible counterexample.



</details>

## ALG-CH22-P001 — Project: one object, four lenses

Choose either the splitting field of $x^3-2$ over $Q$ or the ring
$\\mathbb{Z}[x]/(x^2-1,6)$. Produce a dossier with four lenses:

1. generators, relations, and canonical representatives;
2. kernels, quotients, and at least one isomorphism theorem;
3. a symmetry action with kernel, orbits, and stabilizers;
4. two invariants and one near-miss counterexample.

The dossier must include a dependency graph for every theorem used, exact
calculations that another reader can reproduce, and a paragraph separating
finite computation from general proof.

### Deliverables

Choose one route. Submit canonical representatives and defining relations; an explicit homomorphism with kernel, image, quotient, and an isomorphism theorem; a specified group action with kernel, orbit and stabilizer data; two justified invariants and a near-miss counterexample; a dependency graph of theorems; reproducible exact calculations; and an account of which conclusions require proof beyond finite computation.

### Solution framework and rubric

#### Field route

Let $\\rho$ be the real cube root of two and let $\\omega$ be a
primitive cube root of one. Eisenstein gives $[Q(\\rho):Q]=3$; reality shows
$\\omega$ is absent, so adjoining it gives degree six. The field
$E=Q(\\rho,\\omega)$ is the splitting field of $x^3-2$, hence finite Galois in
characteristic zero. Its automorphisms permute the three roots faithfully and
realize $S_3$. The kernel of this root action is trivial. Stabilizers of a root
have order two and fix the corresponding cubic field; $A_3$ fixes the unique
quadratic field $Q(\\omega)$. Restriction to that field has kernel $A_3$, so the
first isomorphism theorem gives $S_3/A_3 \\cong C_2$. Degree and Galois
group are useful invariants of extensions over the named base, while $Q(\\rho)/Q$ is the near miss: it has degree
three but is not normal and has only the identity base automorphism. A complete
submission must prove each assertion rather than infer it from the diagram. Choose the real cube root $\\rho$ for the reality argument. With $X\\mapsto\\rho$ and $Y\\mapsto\\omega$, one quotient presentation is $E\\cong\\mathbb Q[X,Y]/(X^3-2,Y^2+Y+1)$: the quadratic remains irreducible over the real field $\\mathbb Q(\\rho)$, so the quotient has degree six. Each element has a unique normal form $a+b\\rho+c\\rho^2+(d+e\\rho+f\\rho^2)\\omega$ with rational coefficients. The root action has one orbit of size three, stabilizers of order two, and trivial kernel. A reproducible submission reduces products by $\\rho^3=2$ and $\\omega^2=-\\omega-1$, lists generators of $S_3$ as their root permutations, and traces the dependency from Eisenstein and the tower law through normality, separability, and Galois correspondence. The nonnormal real cubic field is a counterexample to inferring normality from finite degree alone.

For explicit symmetry generators, take $r(\\rho)=\\rho\\omega$,
$r(\\omega)=\\omega$, and $s(\\rho)=\\rho$, $s(\\omega)=\\omega^2$.
Substitution respects both quotient relations and defines automorphisms:
$r^3=s^2=1$ and $srs=r^{-1}$. On the three cubic roots, $r$ is a
three-cycle and $s$ exchanges the two nonreal roots. This verifies the
claimed faithful $S_3$ action from concrete maps.

#### Ring route

First reduce coefficients modulo
six and powers by $x^2=1$, obtaining representatives $a+bx$ with $a,b \\in \\mathbb{Z}/6$.
The evaluation map to pairs $(f(1),f(-1))$ has subtleties because two is not a
unit modulo six; compute its kernel and image rather than assuming the usual
Chinese-remainder isomorphism. Decompose coefficients through
$\\mathbb{Z}/6 \\cong \\mathbb{Z}/2 \\times \\mathbb{Z}/3$, then analyze the polynomial
relation in each factor. Compare units, idempotents, and zero divisors. The
near miss is the field-coefficient claim that $(x-1)$ and $(x+1)$ are always
comaximal: over characteristic two they coincide. This route earns full credit
only when representative independence and each claimed product decomposition
are proved explicitly.

Explicitly, $R=(\\mathbb Z/6)[x]/(x^2-1)$ has 36 unique classes $a+bx$. The evaluation map $\\operatorname{ev}(a+bx)=(a+b,a-b)$ has kernel $\\{0,3+3x\\}$ and image $\\{(u,v)\\in(\\mathbb Z/6)^2:u\\equiv v\\pmod2\\}$, of order 18. Its quotient by the kernel is isomorphic to that image. A full product decomposition is

$$R\\cong\\mathbb F_2[\\varepsilon]/(\\varepsilon^2)\\times\\mathbb F_3\\times\\mathbb F_3,$$

via $a+bx\\mapsto((a+b)+b\\varepsilon,a+b,a-b)$, with coefficients reduced in each target field. The relation $x^2=1$ holds in every target factor, so this is a well-defined homomorphism. To prove joint surjectivity, prescribe a target $(c+d\\varepsilon,u,v)$. Modulo two choose $b=d$ and $a=c-d$; modulo three choose $a=(u+v)/2$ and $b=(u-v)/2$. Coefficient CRT supplies unique $a,b$ modulo six with these residues. This constructs an inverse and proves bijectivity; surjectivity onto the factors separately would not suffice. The involution $x\\mapsto-x$ gives a faithful $C_2$ action on $R$: 12 elements with $b=0$ or $3$ are fixed; the other 24 form 12 two-element orbits. Hence there are 24 orbits; fixed-point stabilizers are $C_2$, and all others are trivial. The ring has characteristic six, eight units and eight idempotents. A dependency graph should name coefficient CRT, polynomial quotient normal forms, the first isomorphism theorem, and orbit–stabilizer. A reproducible calculation enumerates $a,b\\in\\mathbb Z/6$ and checks the kernel, image, and action; the proofs of quotient and product claims must explain why the enumeration covers every class.

## Final perspective

Algebra is not a catalogue of similarly shaped formulas. It is a discipline of
declaring structure, preserving it through maps, measuring what kernels erase,
and knowing which hypotheses make a transfer legal. A successful first course
ends not with the ability to quote every theorem, but with the ability to
reconstruct why it is true, detect when it is unavailable, and design the
smallest decisive example.

## Worked transfer dossiers

**Worked example 21.1 (A residue map with a proper compatibility image).** Solve $x\\equiv3\\pmod8$ and $x\\equiv7\\pmod{12}$. The residues agree modulo four, the gcd of the moduli, so compatibility is possible. Write $x=3+8k$. The second condition becomes $8k\\equiv4\\pmod{12}$, equivalently $2k\\equiv1\\pmod3$. Since two is invertible modulo three, $k\\equiv2\\pmod3$, giving $x\\equiv19\\pmod{24}$. Direct checks give remainders three and seven. Any two solutions differ by a multiple of both eight and twelve and hence by their lcm twenty-four, proving uniqueness at the stated modulus.

The map $\\mathbb Z/24\\to\\mathbb Z/8\\times\\mathbb Z/12$ is injective, since its zero fiber consists of multiples of twenty-four. Its image contains exactly the pairs agreeing modulo four. For each of the four common residues, there are two choices modulo eight and three modulo twelve, giving twenty-four compatible pairs. The whole product has ninety-six elements. Thus the kernel calculation survives without coprimality, while surjectivity onto the full product fails. The pair $(3,6)$ is impossible because its reductions modulo four disagree.

**Worked example 21.2 (Equal size and characteristic do not identify a ring).** Compare
$$
R=\\mathbb F_2[t]/(t^2+t+1),\\qquad
S=\\mathbb F_2[t]/(t^2).
$$
Each quotient has the four representatives $0,1,t,t+1$ and characteristic two. In the first, write $\\alpha$ for the class of $t$. The quadratic has no root in $\\mathbb F_2$, so it is irreducible and $R$ is a field. The relation $\\alpha^2=\\alpha+1$ gives $\\alpha(\\alpha+1)=1$; the three nonzero elements all have inverses.

In $S$, the class $\\varepsilon$ of $t$ is nonzero because a degree-one polynomial is not divisible by $t^2$, but $\\varepsilon^2=0$. Thus $S$ has a nonzero nilpotent and is not a field. A ring isomorphism preserves zero, nonzero elements and every power equation, so it would carry this nonzero nilpotent to one in $R$. A field has no such element, as repeated cancellation of a nonzero factor shows. No isomorphism exists, even though cardinality, characteristic and additive-group type agree.

**Worked example 21.3 (Certify an abelian-group isomorphism with coordinates).** Let
$$
G=C_{12}\\oplus C_{18},\\qquad H=C_6\\oplus C_{36}.
$$
Both primary lists are $(2,4)$ for the prime two and $(3,9)$ for the prime three. Right alignment gives the invariant factors $6,36$, so the classification predicts an isomorphism. Construct one explicitly: for $(x\\bmod12,y\\bmod18)$ choose
$$
u\\equiv y\\pmod2,\\quad u\\equiv x\\pmod3,
\\qquad
v\\equiv x\\pmod4,\\quad v\\equiv y\\pmod9.
$$
The coprime CRT pairs define $u$ modulo six and $v$ modulo thirty-six uniquely. They depend only on the input classes, and addition of residue pairs proves the resulting map is a homomorphism.

For the inverse, recover $x$ modulo twelve from its values $v$ modulo four and $u$ modulo three; recover $y$ modulo eighteen from $u$ modulo two and $v$ modulo nine. The same coprime CRT supplies unique answers. Substitution restores every original coordinate, proving that the maps are mutual inverses. Their common order is $216$, exponent thirty-six and minimum number of generators two. These numerical checks agree with the certificate but do not replace its well-definedness and inverse proofs.

## Preparation for retained field-symmetry questions

Exercises ALG-CH22-E010, E011, E019 and E020 retain their original stable identities and solutions. Their normality, separability and Galois-correspondence language requires the retained [Splitting Fields, Separability, and Finite Extensions](#/item/book-algebra-patterns-structure?chapter=splitting-fields-separability) reading and, for the correspondence, [Galois Groups and the Subgroup–Subfield Correspondence](#/item/book-algebra-patterns-structure?chapter=galois-groups-correspondence). They are optional extensions of the main twenty-one-chapter route. Work them after that stated preparation; completing the main route alone does not supply an unproved correspondence theorem.

The existing project can likewise be undertaken with a group or ring object using the main route, or with a field-symmetry object after the retained preparation. State the chosen category and its prerequisites before making a claim about the supplied object.

## Sources

The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) retains the original edition references. The added residue, quotient-ring and abelian-group dossiers are original exact calculations; the retained field-symmetry preparation is linked separately above.

## Summary

Transfer a proof together with its object types, hypotheses and well-definedness checks. Kernels, quotients, actions, arithmetic and classification share mechanisms but retain different conditions. Exact finite certificates support only their declared scope. Optional normality, separability and Galois questions require the retained preparation readings explicitly identified above.

## Primary continuation for the optional Galois questions

The complete [Galois Theory](/books/library-book-galois-theory/) supplies the primary preparation for the Galois-dependent exercises identified above. Read its Chapters 1–5 for splitting fields, separability, automorphisms and the finite correspondence, then Chapter 6 for the cubic splitting-field group used in the capstone. The original exercise IDs, questions and solutions here are unchanged; their earlier preparation readings remain accessible under their original chapter identities.
`;export{e as default};