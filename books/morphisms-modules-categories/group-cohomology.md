
# Cohomology of Groups

This chapter adapts the retained Computational Algebra group-cohomology reading. That original source and its learner identity remain registered. Read the resolution-comparison and Ext chapter first. Coefficients are left Z[G]-modules, written additively; the prescribed group action is part of each assertion.


## Why cohomology?

Group cohomology measures the obstructions to constructing objects with prescribed symmetry. It classifies group extensions, determines whether a group action can be lifted to a covering space, and appears in algebraic number theory and topology. For finite groups, the cohomology groups $H^{n}(G, M)$ can be computed explicitly from a projective resolution, and low-degree cases have concrete interpretations.

## Group actions on modules

Let $G$ be a group and $M$ an abelian group. A **$G$-module** structure on $M$ is a group homomorphism $G \to \operatorname{Aut}(M)$, or equivalently an action satisfying $g \cdot (m_{1} + m_{2}) = g \cdot m_{1} + g \cdot m_{2}$. If $M$ is a module over a ring $R$, we often require the $G$-action to be $R$-linear.

**Examples.**
- The trivial module: $g \cdot m = m$ for all $g \in G$.
- For a subgroup $H \leq G$, the permutation module $\mathbb{Z}[G/H]$.
- For a Galois extension $K/F$, the multiplicative group $K^{\times}$ is a $\operatorname{Gal}(K/F)$-module.

## The bar resolution and cohomology

The **standard bar resolution** is a free $\mathbb{Z}[G]$-resolution of the trivial module $\mathbb{Z}$:

$$\dots \to B_{2} \to B_{1} \to B_{0} \to \mathbb{Z} \to 0$$

where $B_{n}$ is the free $\mathbb{Z}[G]$-module on symbols $[g_{1} | \dots | g_{n}]$. The boundary maps are

$$\partial_{n}([g_{1} | \dots | g_{n}]) = g_{1}[g_{2} | \dots | g_{n}] + \sum_{i=1}^{n-1} (-1)^{i} [g_{1} | \dots | g_{i} g_{i+1} | \dots | g_{n}] + (-1)^{n} [g_{1} | \dots | g_{n-1}].$$

Applying $\operatorname{Hom}_{\mathbb{Z}[G]}(-, M)$ yields the **cochain complex** $C^{n}(G, M) = \operatorname{Hom}_{\mathbb{Z}[G]}(B_{n}, M)$, whose cohomology is $H^{n}(G, M)$.

After identifying equivariant maps out of the bar resolution with inhomogeneous cochains, an $n$-cochain is simply a function $f:G^n\to M$; it has no further equivariance condition. The $G$-action instead appears in the coboundary:

$$(\delta f)(g_{1}, \dots, g_{n+1}) = g_{1} \cdot f(g_{2}, \dots, g_{n+1}) + \sum_{i=1}^{n} (-1)^{i} f(g_{1}, \dots, g_{i} g_{i+1}, \dots, g_{n+1}) + (-1)^{n+1} f(g_{1}, \dots, g_{n}).$$

## Low-degree interpretations

**$H^{0}(G, M)$.** The $0$-cocycles are elements $m \in M$ with $g \cdot m = m$ for all $g$. Thus $H^{0}(G, M) = M^{G}$, the $G$-invariants.

**$H^{1}(G, M)$.** A $1$-cocycle is a function $f : G \to M$ with $f(gh) = f(g) + g \cdot f(h)$. Such functions are **crossed homomorphisms**. A $1$-coboundary has the form $f(g) = g \cdot m - m$ for some $m \in M$. If $G$ acts trivially, crossed homomorphisms are ordinary homomorphisms and coboundaries are zero, so $H^{1}(G, M) = \operatorname{Hom}(G, M)$.

**$H^{2}(G, M)$.** A $2$-cocycle is a function $f : G \times G \to M$ satisfying

$$g \cdot f(h, k) + f(g, hk) = f(gh, k) + f(g, h).$$

Two cocycles differ by a coboundary if $f'(g, h) = f(g, h) + g \cdot \alpha(h) - \alpha(gh) + \alpha(g)$ for some $\alpha : G \to M$. The group $H^{2}(G, M)$ classifies equivalence classes of extensions

$$0 \to M \to E \to G \to 1$$

where the $G$-action on $M$ by conjugation in $E$ is the given module structure.

**Worked example.** Compute $H^{2}(C_{2}, \mathbb{Z}/2\mathbb{Z})$ with trivial action.

**Solution.** Every cohomology class has a normalized representative with $f(e,-)=f(-,e)=0$; these equalities are a normalization choice, not a consequence for every cocycle. A normalized cocycle is determined by $a=f(g,g)\in\mathbb{Z}/2\mathbb{Z}$, and the cocycle equation on $(g,g,g)$ imposes no further condition. Normalized coboundaries have value $2\alpha(g)=0$ at $(g,g)$, so the two values of $a$ give the two classes. Hence $H^2(C_2,C_2)\cong C_2$. The zero class gives the split extension $V_4$ and the nonzero class gives $C_4$; these are extension-equivalence classes with the specified kernel, quotient, and action, not merely a classification of abstract middle groups.

## Group homology

Dually, for a left $\mathbb{Z}[G]$-module $M$, **group homology** uses the standard bar resolution as a complex of free right $\mathbb{Z}[G]$-modules and tensors it with $M$:

$$H_{n}(G, M) = H_{n}(B_{\bullet} \otimes_{\mathbb{Z}[G]} M).$$

In particular, $H_{0}(G, M) = M / \langle g \cdot m - m \rangle = M_{G}$, the **coinvariants**.

## Common errors

- **Confusing cohomology with homology.** Group restriction gives contravariant group functoriality with restricted coefficients, while cohomology is covariant in its coefficient-module maps. Cohomology uses $\operatorname{Hom}$ and homology uses $\otimes$, with their stated module sides.
- **Forgetting the $G$-action in the cocycle condition.** The term $g \cdot f(h, k)$ is essential when the action is non-trivial.
- **Assuming $H^{n}(G, M) = 0$ for $n$ large.** Cohomology can be non-trivial in arbitrarily high degree, though for finite groups it is periodic in certain cases.


## Why the bar complex is a resolution

A homogeneous model makes exactness visible. In degree n take the free abelian group on tuples (g₀,…,g_n), with diagonal left G-action. It is free over Z[G]: every tuple is uniquely g₀ times a tuple whose first entry is identity. The boundary is the alternating sum deleting one entry; the augmentation sends each one-entry tuple to one in the trivial module Z.

The square of the boundary is zero because each pair of deleted entries occurs twice with opposite signs. As an augmented complex of abelian groups, insert identity as a new first entry to define a degree-raising map. Deleting that new entry returns the original tuple. Every other deletion cancels the corresponding term obtained by first deleting an original entry and then inserting identity. Together with the map Z→B₀ selecting the identity tuple, this gives ds+sd=id. It need not be G-linear, but it proves exactness of the underlying groups and therefore of the module sequence. Freeness and exactness make it a projective resolution.

The inhomogeneous symbol [g₁|…|g_n] corresponds to the tuple of partial products (1,g₁,g₁g₂,…,g₁⋯g_n). Deleting the first coordinate gives the initial g₁-action term after renormalising; internal deletions multiply adjacent entries; the last removes the last entry. This derives the earlier boundary formula. Equivariant maps out of these free basis symbols are arbitrary functions of their n entries, deriving the cochain interpretation and its coboundary. In particular the coboundary squares to zero because it is precomposition with this proved differential.

Thus H^n(G,M) is Ext^n_Z[G](Z,M). A right bar resolution is obtained by reversing the action through group inversion, retaining the exact underlying groups, and gives the stated Tor description of homology. Neither construction assumes a finite group.

## Why two-cocycles classify the specified extensions

Every two-cocycle can be normalized. The equation with identity entries shows f(e,h)=a and f(g,e)=ga for a=f(e,e). Subtract the coboundary of the constant one-cochain a; its value at (g,h) is ga. The new cocycle is zero whenever either entry is identity.

For a normalized f, define a product on M×G by
$$(m,g)(n,h)=(m+gn+f(g,h),gh).$$
Associativity is exactly the two-cocycle equation after expanding both sides. Normalisation makes (0,e) the identity. An inverse uses first coordinate minus g inverse applied to m+f(g,g inverse). The cocycle equation at (g,g inverse,g) gives f(g,g inverse)=g f(g inverse,g), proving that the same formula is a left inverse too. The subgroup M and projection onto G give an extension with the prescribed conjugation action.

Conversely choose an identity-preserving section of any such extension. Multiplying its representatives defines f by their discrepancy from the representative of the product. Associativity gives the cocycle equation. Changing the section by a one-cochain α changes f by the displayed coboundary gα(h)−α(gh)+α(g). The coordinate map (m,g) to m times its chosen representative is an extension isomorphism. Conversely an endpoint-fixing isomorphism changes these representatives by exactly such a cochain. This proves the classification with its action and endpoint data, including independence from the chosen section.

For degree one, the semidirect product has sections g↦(u(g),g) precisely when u is a crossed homomorphism. Conjugation by (a,e) changes u(g) by a−ga, a coboundary with its sign reversed. Hence H¹ classifies these sections modulo conjugation by the specified kernel, rather than all arbitrary subgroups of the middle group.

## An exact periodic resolution for cyclic groups

Let G=C_m with generator g and put Λ=Z[G], m≥2. Alternate multiplication by g−1 in odd degrees and by the norm element N=1+g+⋯+g^(m−1) in positive even degrees, ending in the augmentation Λ→Z. The products are zero since (g−1)N=g^m−1=0.

This is exact. A coefficient vector killed by g−1 has all its cyclically shifted coefficients equal, so it is an integer multiple of N; these are exactly the images under multiplication by N. The kernel of N consists of coefficient sums zero, because aN is the augmentation of a times N. Every such polynomial in g is divisible by g−1: evaluate at one and use polynomial division in Z[t] before passing to the group ring. This is also exactly the augmentation kernel. All terms are free, proving a periodic projective resolution.

Applying Hom into M gives alternating maps g−1 and N on M. Consequently positive odd cohomology is ker N divided by (g−1)M, and positive even cohomology is the invariant subgroup divided by NM. Degree zero remains the invariant subgroup itself.

**Worked example.** For trivial integer coefficients, N acts as multiplication by m and g−1 as zero. Positive odd groups vanish and every positive even group is C_m. For the sign action of C₂ on Z, the maps are instead minus two and zero. The invariant subgroup is zero, every positive odd group is C₂ and positive even groups vanish. The action has changed the answer even though the underlying coefficient group is still Z.

**Worked example.** Over a field k whose characteristic does not divide the order of a finite group G, the trivial k[G]-module k is projective. The augmentation splits by sending one to the average of all group elements; this is G-invariant and its augmentation is one. Thus it is a summand of a free module, and positive cohomology vanishes for every k[G]-module. The homogeneous bar contraction remains valid after extending coefficients to k, so the cochain description agrees with this Ext calculation. The characteristic condition supplies the required inverse of the group order; the modular cyclic examples show its necessity.

## Coinduced coefficients are acyclic

There is a useful coefficient example without an invertible-order hypothesis. For any abelian group A, let M be all functions from G to A, with action sending a function φ to the function x↦φ(xg) for g acting. This is the coinduced Z[G]-module Hom_Z(Z[G],A), using the right-translation action proved in Chapter 2. Its invariant functions are precisely the constant functions, so H⁰ identifies with A.

Every positive cohomology group vanishes. The coinduction adjunction identifies equivariant Hom from the bar resolution into M with ordinary abelian-group Hom from its underlying resolution into A. The insertion-of-identity contraction constructed above is a homotopy of that augmented underlying complex. Precomposing with its maps gives a contraction of the augmented Hom cochain complex. Therefore that cochain complex is exact in positive degrees, regardless of whether A is injective. This uses an actual split contraction, which remains valid after Hom, rather than assuming that Hom into an arbitrary group preserves every exact sequence.

For finite G and A=Z, all functions on G form a finite free abelian group. Sending the function supported at y to the group-basis element y inverse identifies this action with left multiplication on Z[G]. Thus positive cohomology of the regular coefficient module vanishes for finite G, even with integer coefficients where the group order is not invertible. For infinite G, the function module is a product and the regular group ring has only finite support; they cannot be substituted for one another in this argument. This is a different reason for vanishing from the characteristic condition in the preceding example.

## Practice exercises

### Exercise 1

Compute $H^{0}(S_{3}, \mathbb{Z})$ where $\mathbb{Z}$ is the trivial $S_{3}$-module.

<details><summary>Hint 1</summary>
Degree zero consists of invariant elements.
</details>
<details><summary>Hint 2</summary>
The action fixes every integer.
</details>
<details><summary>Solution</summary>
$H^{0}(S_{3}, \mathbb{Z}) = \mathbb{Z}^{S_{3}} = \mathbb{Z}$ because every integer is fixed by the trivial action.
</details>

### Exercise 2

Compute $H^{1}(C_{n}, \mathbb{Z})$ with trivial action.

<details><summary>Hint 1</summary>
A crossed homomorphism becomes an ordinary homomorphism for the trivial action.
</details>
<details><summary>Hint 2</summary>
There is no nonzero finite-order integer.
</details>
<details><summary>Solution</summary>
With trivial action, $H^{1}(C_{n}, \mathbb{Z}) = \operatorname{Hom}(C_{n}, \mathbb{Z})$. Since $\mathbb{Z}$ is torsion-free and $C_{n}$ is finite, every homomorphism is trivial. Thus $H^{1}(C_{n}, \mathbb{Z}) = 0$.
</details>

### Exercise 3

Show that $H^{2}(C_{p}, C_{p}) \cong C_{p}$ for a prime $p$, with trivial action on both sides.

<details><summary>Hint 1</summary>
Choose a lift of the cyclic generator and examine its p-th power.
</details>
<details><summary>Hint 2</summary>
Normalised carry cocycles realise each possible kernel value.
</details>
<details><summary>Solution</summary>
Write exponents in $\{0,\dots,p-1\}$. For each $a\in C_p$, the normalized carry function

$f_a(g^i,g^j)=a\left\lfloor\frac{i+j}{p}\right\rfloor$

is a $2$-cocycle: both sides of the cocycle identity count the same carry in adding $i,j,k$ modulo $p$. Given an extension, choose a lift $u$ of $g$; then $u^p=a$ lies in the kernel and is unchanged by replacing $u$ by another lift because the kernel has exponent $p$. This invariant gives every $a$, and two extensions are equivalent exactly when their invariants agree. Hence $H^2(C_p,C_p)\cong C_p$. The zero class is split. The nonzero classes have abstract middle group $C_{p^2}$, but remain distinct as extensions with fixed kernel and quotient identifications.
</details>

### Exercise 4

Let $G$ act on $M = \mathbb{Z}[G]$ by left multiplication. Compute $H^{0}(G, M)$ and $H_{0}(G, M)$.

<details><summary>Hint 1</summary>
Invariance makes all group-basis coefficients equal.
</details>
<details><summary>Hint 2</summary>
Finite support distinguishes finite and infinite groups; coinvariants identify all basis elements.
</details>
<details><summary>Solution</summary>
If $G$ is finite, the invariants are $\mathbb{Z}\cdot\sum_{g\in G}g\cong\mathbb{Z}$: invariance forces all coefficients to agree. If $G$ is infinite, finite support forces that common coefficient to be zero, so the invariants vanish. In either case the coinvariant relations identify every group-basis element, and the augmentation induces $M_G\cong\mathbb{Z}$.
</details>


### HA-08-05 — The contraction need not be equivariant

Why does inserting identity in the homogeneous bar model prove exactness even though it does not usually define a G-linear homotopy?

<details><summary>Hint 1</summary>
Compare inserting identity after translating a tuple with translating after insertion.
</details>
<details><summary>Hint 2</summary>
Module exactness is equality of the same kernel and image underlying abelian groups.
</details>
<details><summary>Solution</summary>
Inserting after translation gives first entry identity, while diagonal translation after insertion gives first entry the translating group element, so the two operations generally differ. Nevertheless the relation ds+sd=id holds on the underlying groups, proving every underlying cycle is a boundary. Since the differentials themselves are G-linear, these kernels and images are the module kernels and images as well. Exactness follows without an equivariant contraction, which would be a substantially stronger splitting statement.
</details>

### HA-08-06 — Cyclic integer coefficients

Compute H³(C₃,Z) and H⁴(C₃,Z) for the trivial action, explaining why periodicity starts with positive degrees rather than replacing H⁰.

<details><summary>Hint 1</summary>
The cochain maps alternate zero and multiplication by three.
</details>
<details><summary>Hint 2</summary>
There is no incoming differential to degree zero.
</details>
<details><summary>Solution</summary>
Degree three is the kernel of multiplication by three modulo the preceding zero image, hence zero in Z. Degree four is Z modulo three Z, hence C₃. Positive even degrees repeat this quotient, but degree zero is all invariant integers, namely Z, because there is no preceding coboundary map whose image is three Z. The unaugmented cochain endpoint must remain part of the calculation.
</details>

### HA-08-07 — Sign coefficients

For C₂ acting by negation on Z, compute H⁰,H¹,H² and compare with the trivial action.

<details><summary>Hint 1</summary>
The first action difference is minus two and the norm is zero.
</details>
<details><summary>Hint 2</summary>
Use the periodic formulas with these actual maps.
</details>
<details><summary>Solution</summary>
The invariant subgroup is zero, so H⁰=0. Degree one is ker norm modulo the action-difference image, giving Z/2Z. Degree two is invariants modulo the norm image, hence zero. For the trivial action the answers are Z, zero and C₂ instead. The underlying coefficient group has not changed; the prescribed group action has exchanged the kernel and quotient behaviors responsible for positive odd and even cohomology.
</details>

### HA-08-08 — A characteristic boundary

Compare positive cohomology of C₃ and C₂ with trivial F₂ coefficients.

<details><summary>Hint 1</summary>
The norm on trivial coefficients multiplies by the group order.
</details>
<details><summary>Hint 2</summary>
Three is one in F₂, while two is zero.
</details>
<details><summary>Solution</summary>
For C₃, the action difference is zero and the norm is identity, so its kernel and its cokernel vanish; all positive cohomology is zero. For C₂, both maps are zero, so every nonnegative cohomology group is F₂. This verifies the invertible-order theorem in the first case and its failed hypothesis in the second. It also shows why the order's invertibility in the coefficient field, rather than the field merely being finite, is the relevant condition.
</details>

### HA-08-09 — Two reflection sections

For the sign action of C₂ on Z, classify sections of Z semidirect C₂ modulo conjugation by the kernel Z.

<details><summary>Hint 1</summary>
A section sends the nonidentity element to (a,g).
</details>
<details><summary>Hint 2</summary>
Conjugation by (n,e) changes a by two n.
</details>
<details><summary>Solution</summary>
Every a works because (a,g) squared is (a−a,e), the identity. Conjugating by (n,e) changes its first coordinate to a+2n. Thus there are exactly two kernel-conjugacy classes, determined by parity. They correspond to H¹(C₂,Z_sign)=C₂ from the periodic calculation. This is a classification of sections inside the fixed semidirect extension, with the specified conjugating kernel, rather than all abstract subgroups of the infinite dihedral group.
</details>

### HA-08-10 — Inflation keeps endpoint data

Pull back the extension 0→Z→Z→C₂→0, with inclusion multiplication by two, along reduction C₄→C₂. Identify its class in H²(C₄,Z)=C₄.

<details><summary>Hint 1</summary>
A middle pair consists of an integer and a residue modulo four with matching parity.
</details>
<details><summary>Hint 2</summary>
Lift the C₄ generator by (1,1) and take its fourth power additively.
</details>
<details><summary>Solution</summary>
The pullback kernel is identified with Z by n↦(2n,0). The lift (1,1) has fourfold multiple (4,0), equal to kernel value two. Thus the cyclic extension parameter is two modulo four. The nonzero class in H²(C₂,Z) therefore inflates to the order-two element of H²(C₄,Z), rather than its chosen generator. The computation uses the kernel identification and quotient map; the abstract middle group alone would not specify this natural cohomology map.
</details>

## Looking backward and forward

Group cohomology now has proved resolution and extension models. Homological dimension next measures how far projective and injective resolutions can be shortened. Coding applications remain a separate continuation in [Linear Codes](#/books/error-correcting-codes/linear-codes), rather than an undeclared next step of this homological route.
