var e=`---
parent_id: book-finite-algebra-computation
chapter_id: project-small-computer-algebra-kernel
title: "Project: A Small Computer Algebra Kernel"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Project: A Small Computer Algebra Kernel

Build a small exact kernel for finite fields, univariate polynomials and finite-field linear systems. Its outputs should explain their mathematical meaning through reconstruction identities, factor multiplicities, free coordinates and inconsistency witnesses. The goal is a coherent composition of the preceding algorithms, with explicit coefficient domains at every layer.

Prepare Chapters 1–9. The lattice chapter supplies an optional final comparison with integer arithmetic. The required project uses only F₂, F₃ and the four-element extension F₄; it does not require a general-purpose algebra system, a user-interface framework or a cryptographic application. The supplied calculations below give exact reference results and their proofs.

## 1. The mathematical data and required operations

Fix F₂ and F₃ as prime fields. Fix
$$F_4=F_2[\\alpha]/(\\alpha^2+\\alpha+1).$$
The polynomial has no root in F₂, so is irreducible, proving this quotient is a field. Encode a₀+a₁α by a₀+2a₁, with a₀,a₁∈{0,1}. Thus the encodings zero,one,two,three mean 0,1,α,α+1. These integers are labels for coordinates, not residues in Z/4Z.

Your scalar layer supplies exact zero,one, addition, negation, multiplication, equality and nonzero inversion. Every scalar carries its field interpretation. A polynomial in the separate variable t has a coefficient field and a finite coefficient list from low degree upward. Its canonical zero is the empty list, whose implemented degree is −1. Trim trailing zero coefficients after every operation.

The polynomial layer supplies addition, convolution multiplication, division with remainder by a nonzero polynomial, monic gcd, extended gcd, modular powering and complete factorisation with a leading unit and multiplicities. A nonmonic divisor can be scaled using its nonzero leading coefficient in the field. The matrix layer supplies exact reduction, pivot indices, kernel bases and solutions or left-null inconsistency witnesses.

Use the algorithms already proved in the book. The project asks you to implement their contracts consistently, not invent an unproved replacement for every component. In particular an extension-field constructor needs an irreducible modulus, whereas a general quotient-ring constructor must not promise that every nonzero element has an inverse.

## 2. Stage one: establish scalar meaning

Represent F₄ by two binary coordinates and derive multiplication before programming it. The relation α²=α+1 gives
$$(a_0+a_1\\alpha)(b_0+b_1\\alpha)
=(a_0b_0+a_1b_1)+(a_0b_1+a_1b_0+a_1b_1)\\alpha,$$
with every coefficient reduced modulo two. This equation proves that the bit-coordinate implementation in the arithmetic chapter computes the desired field product.

**Worked reference 12.1 (Inverse and a Bézout identity).** The product α(α+1)=1 shows inverse(2)=3 and inverse(3)=2 in the fixed encoding. In the polynomial presentation, the same certificate is
$$x(x+1)+(x^2+x+1)=1$$
over F₂. Thus extended Euclid can return coefficients x+1 and one for the pair x and its modulus. Reducing that identity proves the inverse without searching through possible truth values.

Zero must have no inverse. A program returning zero for inverse(0) would make a false field assertion, since 0·0≠1. Reject a coordinate encoding outside zero through three rather than silently reducing it modulo four. If a separate function embeds an ordinary integer into the field, it should explicitly mean repeated addition of the identity, so integer four maps to zero in characteristic two. That is a different conversion from interpreting an existing coordinate encoding.

Deliver this stage with the field equation, coordinate convention and inverse reconstruction identities. An operation table can be derived from the formula, but its labels must retain the same interpretation through later polynomial and matrix layers.

## 3. Stage two: factor the same polynomial over two bases

Take
$$P(t)=t^2+t+1.$$
Over F₂ it has no root and is irreducible. Over F₄ its behaviour changes because both conjugate roots are already present.

**Worked reference 12.2 (A coefficient-domain change).** In F₄[t],
$$P(t)=(t+\\alpha)(t+\\alpha+1).$$
The constant product is α(α+1)=1. The linear coefficient is α+(α+1)=1, and the leading coefficient is one. These three coefficient calculations reconstruct P exactly. The two roots are distinct because their difference is one; equivalently P′=1. Thus each factor has multiplicity one.

The factors' low-degree coefficient lists are [2,1] and [3,1] in the fixed F₄ encoding. They are not valid F₂ coefficient lists. A factorisation result must therefore retain its base-field identity. Copying these lists into an F₂ result record changes the statement from a true factorisation to malformed data.

As a second polynomial use
$$Q(t)=P(t)^2=t^4+t^2+1$$
in characteristic two. Squarefree decomposition must recover P with multiplicity two before it separates P's two F₄-linear factors. The final factorisation there is (t+α)²(t+α+1)². A list omitting those multiplicities would reconstruct P rather than Q.

Use a division transcript with explicit quotient and remainder for each gcd. For instance, reducing P by t+α leaves zero precisely because α is a root. A nonzero remainder can disprove that particular factor, but an unfinished search finding no factor is not an irreducibility certificate. The complete finite-field criteria in Chapter 3 distinguish those outcomes.

An inert result-auditor outline is:

\`\`\`text
check_factorisation(input, result):
    require input and every output factor use the same coefficient field
    require result.leading_unit is nonzero
    product = constant_polynomial(result.leading_unit)
    for factor, multiplicity in result.factors:
        require factor is monic and degree(factor) > 0
        require multiplicity is a positive integer
        require an irreducibility certificate for factor
        product *= factor ^ multiplicity
    accept exactly when product == input
\`\`\`

The irreducibility requirement is a mathematical condition, supplied by degree-one status, a no-root quadratic argument or the Frobenius/gcd theorem. Reconstruction without it would accept the useless single entry “input polynomial”. Conversely an irreducible list with an incorrect leading unit or multiplicity can still fail reconstruction.

## 4. Stage three: solve a singular extension-field system

Over the same F₄ use
$$A=\\begin{pmatrix}1&\\alpha\\\\\\alpha&\\alpha+1\\end{pmatrix}.$$
Its second row is α times its first, because α²=α+1. It is therefore singular even though every displayed entry is nonzero.

**Worked reference 12.3 (A solution space and a contradiction).** The kernel equation is x+αy=0, so
$$\\ker A=\\operatorname{span}_{F_4}\\{(\\alpha,1)\\}.$$
It has four vectors. A one-entry nonzero minor proves rank at least one, while the nonzero kernel vector proves rank at most one, certifying rank exactly one.

For b=(1,α), take x₀=(1,0). Every solution is
$$(1,0)+s(\\alpha,1),\\qquad s\\in F_4.$$
At s=0,1,α,α+1 the solutions are respectively (1,0), (α+1,1), (α,α) and (0,α+1). Substitution in the first row gives one; the second row is α times it and gives α. Thus the parametrisation is complete and its cardinality agrees with one free F₄ parameter.

For c=(1,0), the row vector λᵀ=(α,1) satisfies λᵀA=0 but λᵀc=α≠0. Therefore Ax=c has no solution. Returning a least-squares vector would solve a different problem: this finite-field system asks for exact equality and has an exact inconsistency certificate.

The kernel layer should return a basis and a dimension, not enumerate its whole span by default. A client can form all four vectors here because the example is tiny. The same interface can represent a dimension-twenty binary kernel without eagerly allocating its million vectors.

## 5. A coherent result record

Each result must name the input domain and exact mathematical object. For a factorisation, record its leading unit, monic factors, multiplicities and supporting irreducibility statements. For a linear system, record either a particular solution with a kernel basis and pivot count, or a left-null witness. A partial symbolic search is a separate result type and cannot masquerade as a complete answer.

**Proposition 12.4 (Sound composition).** Suppose scalar operations realise the specified field, polynomial routines preserve their division identities, and the factor and matrix certificates satisfy the conditions above. Then the assembled result states a correct factorisation or a complete exact linear-system answer.

*Proof.* Correct scalar operations make every coefficient calculation an equality in the named field. Polynomial reconstruction therefore proves equality to the original input, and irreducibility plus positive multiplicities gives a complete factorisation. For a consistent system, Ax₀=b and Av_j=0 give only solutions; independent free coordinates and the proved rank give all of them uniquely. For an inconsistent system, λᵀA=0 and λᵀb≠0 make any proposed solution contradictory. These are the preceding theorems applied to the composed outputs. ∎

The hypotheses cannot be replaced by checking the same incorrect multiplication routine twice. The derivations above independently specify what the smallest field and matrix results mean. For larger outputs, certificate identities must still be interpreted in a correctly constructed coefficient domain. A label saying “field” cannot repair a reducible modulus or an integer encoding used with the wrong operations.

Treat source values as immutable mathematical inputs. Creating a monic copy of a polynomial must retain its leading unit rather than silently replace the original polynomial. Transforming a matrix must transform its right side at the same time, while retaining the original system for the final reconstruction. These are object-preservation conditions, not merely programming preferences.

## 6. Optional integer and lattice extension

A further finite-field construction can extend the project beyond its required four-element model. Over the established $F_4$, consider $T(t)=t^2+t+\\alpha$. Its values at $0,1,\\alpha,\\alpha+1$ are respectively $\\alpha,\\alpha,\\alpha+1,\\alpha+1$, all nonzero. A quadratic with no root is irreducible, so adjoining a root $\\beta$ produces a field of sixteen elements, with unique coordinates $a+b\\beta$ for $a,b\\in F_4$.

**Worked reference 12.6 (A second-level extension).** The defining relation is $\\beta^2=\\beta+\\alpha$. Squaring again gives $\\beta^4=\\beta+1$, and hence $\\beta^5=\\beta(\\beta+1)=\\alpha$. In particular $\\beta$ is nonzero and
$$\\beta^{-1}=(\\alpha+1)(\\beta+1),$$
since multiplying by $\\beta$ gives $(\\alpha+1)\\alpha=1$. These are reductions over the declared base $F_4$, whose coefficient arithmetic itself uses the earlier $F_2$ modulus.

The element $\\beta$ is also multiplicatively primitive. Its order divides fifteen by the finite-field multiplicative group theorem, while $\\beta^5=\\alpha$ has order three. The order is therefore divisible by three and is not five or one. It cannot be three either: reducing gives $\\beta^3=(\\alpha+1)\\beta+\\alpha$, which cannot equal one because $\\beta\\notin F_4$ and $\\alpha+1\\ne0$. Thus its order is fifteen. The generator and inverse statements follow from exact identities, not a numerical search through unspecified field presentations.

This optional extension requires the polynomial constructor to accept an already constructed coefficient field. It also shows why separate symbols are useful: $\\alpha$ is a base element in $F_4$, while $\\beta$ is the new residue class of $t$. Treating them as one unlabelled array index would destroy the defining equations.

Once the finite-field kernel is coherent, add an explicitly separate integer domain. Integer modules cannot use division by every nonzero scalar, and reducing an integer matrix modulo a prime loses information about its integer kernel and cokernel.

**Worked reference 12.5 (A complete Smith certificate).** For
$$M=\\begin{pmatrix}4&6\\\\2&4\\end{pmatrix},\\quad
U=\\begin{pmatrix}0&1\\\\-1&2\\end{pmatrix},\\quad
V=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix},$$
direct multiplication gives UM=[[2,4],[0,2]] and UMV=diag(2,2). Both U and V have determinant one. Hence the integer cokernel is C₂×C₂, of order four. Modulo two the coefficient matrix is zero, whose binary kernel is all F₂². That is a true statement about a different map, not the integer kernel of M, which is zero because its determinant is nonzero over Q.

For a lattice comparison, let B have columns (5,1),(1,0). The integer matrix W with columns (0,1),(1,−5) has determinant −1 and gives BW=I₂. Thus the reduced basis generates the same lattice, Z². Its orthogonal unit vectors satisfy the LLL conditions and its first vector has exact shortest length one. This certificate combines integer reconstruction with the geometric inequalities, rather than asserting that a short displayed vector must belong to the intended lattice.

The optional extensions need their own domain operations and result contracts. They should not make a field division routine accept a nonunit integer or reinterpret a modular matrix result as an integer normal form.

## 7. Deliverables and mathematical explanation

Submit the scalar and polynomial representations, algorithms and result records, followed by a worked dossier for P,Q and both right sides of A. Explain why the field modulus is irreducible, why changing P's coefficient field changes its factorisation, why Q's multiplicities are two, and why the two matrix right sides have different consistency outcomes.

For each routine identify its invariant and stopping reason. Polynomial division lowers remainder degree. Euclid lowers successive nonzero degrees. Squarefree p-th rooting lowers degree. Berlekamp refinement separates a finite set of irreducible components. Elimination advances a bounded pivot list. Those arguments belong with the algorithm, not only with a happy-path output list.

Separate complete answers from unsupported possibilities. A factor found by gcd is exact but may leave an unfactored cofactor. A set of kernel vectors is useful but is not a complete basis without independence and a dimension argument. A candidate inverse needs its product equation. When a result cannot be completed within an implementation's chosen resource bound, preserve the partial information and report that bound rather than changing the mathematical question.

## Scalar extensions change enumeration, while preserving linear structure

The project can distinguish a field embedding from an arbitrary recoding by comparing one system over two bases. Embed F₂ into the constructed F₄ through the constant residues. For the matrix with both rows equal to (1,1) and right side (1,1), all solutions are
$$(t,1+t),\\qquad t\\text{ in the declared coefficient field}.$$
The two equations coincide, so either one gives the second coordinate uniquely from the first. Over F₂ there are two solutions. Over F₄ there are four. The same particular solution (0,1), kernel generator (1,1), and rank-one certificate work over both fields; the range of the free parameter changes. Therefore extending the field preserves the certified linear description but does not preserve an exhaustive solution list as an exhaustive list.

This comparison gives a precise requirement for an extension map: it must preserve zero, one, addition and multiplication, and the target's operations must interpret the embedded coefficients accordingly. A unital map from a field is injective, because its kernel is an ideal and cannot be the whole field when one is preserved. Such an embedding exists here because both fields have characteristic two.

There is no unital ring map from F₃ into F₄. In the source, adding one three times gives zero. Any such map would send that equation to the same equation in F₄, where adding one three times gives one, a contradiction. Consequently a routine cannot reinterpret ternary scalar codes as binary extension-field values while claiming a coefficient extension. The domain tag must determine a real homomorphism before polynomial or matrix objects are transported. This is an algebraic requirement with a short impossibility proof, independent of how the finite carriers happen to be stored.

An extension record should also distinguish the embedded subfield from a chosen embedding into it. The sixteen-element field has one four-element subfield, but there are two embeddings of the binary four-element field into that subfield. One sends its chosen generator α to a selected root of its irreducible quadratic; the other sends it to the conjugate α². Squaring fixes the binary base and exchanges those roots, proving the two maps are different yet equally valid embeddings. The nested quotient construction selects one by naming its base generator. Transporting a polynomial or a linear system must use that recorded map on every coefficient. A unique subfield therefore does not supply a unique coordinate conversion for its individually named elements.

## Exercises

### Exercise 1 — The wrong four-element ring
<a id="finite-kernel-project-ex-1"></a>

A scalar routine reports encoded 2·3=2 by multiplying modulo four. Reject or accept this F₄ result, with a mathematical reason.

<details>
<summary>Hint</summary>

Translate the encodings back to α and α+1.

</details>

<details>
<summary>Solution</summary>

Reject it. The claimed inputs are α and α+1, whose field product is α²+α=(α+1)+α=1, encoded one. Integer multiplication modulo four instead describes Z/4Z, which has zero divisors and is not F₄. The result has used the wrong domain operation, not merely a different display convention.

</details>

### Exercise 2 — Different base, different factors
<a id="finite-kernel-project-ex-2"></a>

Why are the factor coefficient lists [2,1] and [3,1] valid over the specified F₄ but invalid over F₂?

<details>
<summary>Hint</summary>

The constants are extension-field elements.

</details>

<details>
<summary>Solution</summary>

They represent t+α and t+α+1, using the F₄ encodings two and three. F₂ contains only zero and one, so these coefficients are not F₂ scalars. Over F₂, t²+t+1 is irreducible, while over F₄ those factors reconstruct it. A result record must retain the coefficient field rather than copying raw integers between presentations.

</details>

### Exercise 3 — Repeated factors
<a id="finite-kernel-project-ex-3"></a>

Give the complete factorisation of t⁴+t²+1 over F₄, with multiplicities.

<details>
<summary>Hint</summary>

It is the square of the project polynomial P.

</details>

<details>
<summary>Solution</summary>

In characteristic two, (t²+t+1)²=t⁴+t²+1. Since P=(t+α)(t+α+1), the full factorisation is (t+α)²(t+α+1)². The factors are distinct monic linears and each has multiplicity two. Omitting multiplicities changes the reconstructed degree from four to two and gives the wrong input polynomial.

</details>

### Exercise 4 — A changed inconsistent right side
<a id="finite-kernel-project-ex-4"></a>

For the project matrix A, prove Ax=(0,1) is inconsistent.

<details>
<summary>Hint</summary>

Reuse a left-null vector but compute its new right-side product.

</details>

<details>
<summary>Solution</summary>

The row λᵀ=(α,1) still satisfies λᵀA=0. Its product with (0,1) is one, nonzero. Multiplying any hypothetical equation by λᵀ would give 0=1. The old witness remains useful, but its product with the changed right side must actually be calculated rather than inherited from another problem.

</details>

### Exercise 5 — A changed consistent right side
<a id="finite-kernel-project-ex-5"></a>

Solve Ax=(α,α+1) completely.

<details>
<summary>Hint</summary>

The right side is A's second column.

</details>

<details>
<summary>Solution</summary>

A particular solution is (0,1). The kernel is the span of (α,1), so all solutions are (0,1)+s(α,1)=(αs,1+s), with s∈F₄. The four values of s give all solutions because rank one leaves one free coordinate. Direct multiplication verifies the particular solution and the homogeneous direction.

</details>

### Exercise 6 — A complete rank argument
<a id="finite-kernel-project-ex-6"></a>

Give separate lower and upper bounds proving rank(A)=1.

<details>
<summary>Hint</summary>

Use one nonzero entry and one nonzero kernel vector.

</details>

<details>
<summary>Solution</summary>

The entry one is a nonzero one-by-one minor, proving rank at least one. The nonzero vector (α,1) lies in the kernel of this two-column matrix, so rank–nullity gives rank at most one. Thus rank equals one. Either fact alone gives only one inequality and would not establish the exact rank.

</details>

### Exercise 7 — Coordinate conversion versus integer embedding
<a id="finite-kernel-project-ex-7"></a>

Why should a function reading the F₄ coordinate encoding reject four, although an integer-to-field embedding sends four to zero?

<details>
<summary>Hint</summary>

They are different input interpretations.

</details>

<details>
<summary>Solution</summary>

A coordinate encoding has exactly two binary coefficients, so its allowed integer labels are zero through three. Four is outside that representation. The integer embedding instead maps n to n times the field identity, giving four→0 in characteristic two. Explicitly different conversions prevent an invalid coordinate record from being silently accepted under a different meaning.

</details>

### Exercise 8 — An unfinished factorisation
<a id="finite-kernel-project-ex-8"></a>

A routine returns one irreducible factor and an unclassified cofactor. What must its result say before it can be called a complete factorisation?

<details>
<summary>Hint</summary>

Reconstruction is not proof that the remaining cofactor is irreducible.

</details>

<details>
<summary>Solution</summary>

It must either split the cofactor further or provide an irreducibility certificate for it, and record all multiplicities and the leading unit. Until then the result is partial, even if multiplying the known factor and cofactor reconstructs the input. Reporting the unclassified piece explicitly preserves useful exact information without making a false completeness claim.

</details>

### Exercise 9 — Integer versus modular kernels
<a id="finite-kernel-project-ex-9"></a>

Explain why the optional matrix M has zero integer kernel but its reduction modulo two has four kernel vectors.

<details>
<summary>Hint</summary>

Compare its nonzero rational determinant with its even entries.

</details>

<details>
<summary>Solution</summary>

Its determinant is four, so M is invertible over Q and no nonzero integer vector can be in its kernel. Every entry reduces to zero modulo two, giving the zero map F₂²→F₂² and hence all four vectors in its modular kernel. These are statements about different coefficient domains. Modular kernel size cannot be copied back as an integer-kernel dimension.

</details>

### Exercise 10 — A lattice output certificate
<a id="finite-kernel-project-ex-10"></a>

For B with columns (5,1),(1,0), verify that W with columns (0,1),(1,−5) gives the same lattice and the standard basis.

<details>
<summary>Hint</summary>

Multiply the matrices and calculate det W.

</details>

<details>
<summary>Solution</summary>

The first output column is B(0,1)=(1,0), and the second is B(1,−5)=(5,1)−5(1,0)=(0,1). Thus BW=I₂. The determinant of W=[[0,1],[1,−5]] is −1, so it is unimodular and preserves the integer lattice. The output basis is orthogonal with unit lengths and satisfies the LLL conditions. Its first vector is shortest in Z², since every nonzero integer vector has length at least one.

</details>

## Summary

A small exact kernel is built by composing precise field, polynomial and linear-algebra contracts. The same polynomial factors differently over different bases; repeated powers require multiplicities; singular systems require either affine parametrisations or inconsistency witnesses. Reconstruction identities and domain labels preserve meaning through those layers. Optional integer and lattice computations reinforce the same principle: an answer belongs to a specified algebraic problem, and its evidence must establish that problem's stated conclusion.
`;export{e as default};