
# Derived Categories

In **Abelian Categories**, exact sequences were the basic tool for organizing morphisms. But many important functors---$\operatorname{Hom}_{R}(M,-)$, $-\otimes_{R}N$, global sections of sheaves---do not preserve exactness. They are only left or right exact. Derived categories were invented to systematize the repair of this failure by replacing modules with complexes and exact sequences with quasi-isomorphisms.

This chapter introduces chain complexes, their homology, projective and injective resolutions, derived functors $\operatorname{Ext}$ and $\operatorname{Tor}$, and finally the derived category as a localization of the homotopy category of complexes.

## 3.1 Chain complexes and homology

Let $\mathcal{A}$ be an abelian category. A **chain complex** $C_{\bullet}$ is a sequence of objects and morphisms

$$\cdots \to C_{n+1} \xrightarrow{d_{n+1}} C_{n} \xrightarrow{d_{n}} C_{n-1} \to \cdots$$

with $d_{n} \circ d_{n+1} = 0$ for all $n$. The maps $d_{n}$ are called **differentials**. A **cochain complex** $C^{\bullet}$ has arrows pointing right:

$$\cdots \to C^{n-1} \xrightarrow{d^{n-1}} C^{n} \xrightarrow{d^{n}} C^{n+1} \to \cdots$$

The computations below use homological grading and C[1]_n=C_(n−1), with negative shifted differential. A cochain complex is converted by placing Cⁿ in homological degree minus n; this convention is stated before any translation.

The **$n$-th homology** of a chain complex is

$$H_{n}(C_{\bullet}) = \operatorname{ker} d_{n} / \operatorname{im} d_{n+1}.$$

For a cochain complex, the **$n$-th cohomology** is $H^{n}(C^{\bullet}) = \operatorname{ker} d^{n} / \operatorname{im} d^{n-1}$.

**Example 3.1.** Let $R = \mathbb{Z}$ and consider

$$C_{\bullet}: \quad 0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$$

with $C_{1} = \mathbb{Z}$, $C_{0} = \mathbb{Z}$, and all other terms zero. Then $H_{1}(C_{\bullet}) = \operatorname{ker}(\times 2) = 0$ and $H_{0}(C_{\bullet}) = \mathbb{Z}/2\mathbb{Z}$.

**Example 3.2.** The **singular chain complex** of a topological space $X$ is a chain complex of abelian groups whose $n$-th homology is the singular homology $H_{n}(X; \mathbb{Z})$.

A morphism of complexes $f_{\bullet}: C_{\bullet} \to D_{\bullet}$ is a family of morphisms $f_{n}: C_{n} \to D_{n}$ commuting with differentials: $d^{D}_{n} f_{n} = f_{n-1} d^{C}_{n}$. Such a morphism induces maps $H_{n}(f): H_{n}(C_{\bullet}) \to H_{n}(D_{\bullet})$.

## 3.2 Quasi-isomorphisms and the homotopy category

A morphism $f_{\bullet}: C_{\bullet} \to D_{\bullet}$ is a **quasi-isomorphism** if $H_{n}(f)$ is an isomorphism for all $n$. Quasi-isomorphisms need not be invertible in the category of complexes.

**Example 3.3.** Let $C_{\bullet}$ be the complex $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$ and let $D_{\bullet}$ be $0 \to 0 \to \mathbb{Z}/2\mathbb{Z} \to 0$ concentrated in degree $0$. The map $C_{\bullet} \to D_{\bullet}$ sending $C_{0} = \mathbb{Z}$ to $\mathbb{Z}/2\mathbb{Z}$ by reduction modulo $2$ is a quasi-isomorphism, but there is no inverse map of complexes because reduction has no homomorphic section from $\mathbb{Z}/2\mathbb{Z}$ to $\mathbb{Z}$.

Two morphisms $f, g: C_{\bullet} \to D_{\bullet}$ are **chain homotopic**, written $f \simeq g$, if there exist maps $h_{n}: C_{n} \to D_{n+1}$ such that

$$f_{n} - g_{n} = d^{D}_{n+1} h_{n} + h_{n-1} d^{C}_{n}.$$

Chain homotopic maps induce the same map on homology.

The **homotopy category** $K(\mathcal{A})$ has the same objects as the category of complexes but morphisms are homotopy classes of chain maps. Quasi-isomorphisms in $K(\mathcal{A})$ still need not be invertible.

## 3.3 Projective and injective resolutions

An object $P$ in an abelian category is **projective** if $\operatorname{Hom}(P, -)$ is exact, equivalently if every surjection $M \to N$ induces a surjection $\operatorname{Hom}(P, M) \to \operatorname{Hom}(P, N)$. An object $I$ is **injective** if $\operatorname{Hom}(-, I)$ is exact.

In $R\text{-}\mathbf{Mod}$, free modules are projective. Over a principal ideal domain, submodules of free modules are free, so projectives are exactly free modules. Over $\mathbb{Z}/6\mathbb{Z}$, the ideal $(2) \cong \mathbb{Z}/3\mathbb{Z}$ is projective but not free.

A **projective resolution** of an object $A$ is an exact sequence

$$\cdots \to P_{2} \to P_{1} \to P_{0} \to A \to 0$$

with all $P_{i}$ projective. An **injective resolution** is an exact sequence

$$0 \to A \to I^{0} \to I^{1} \to I^{2} \to \cdots$$

with all $I^{j}$ injective.

**Proposition 3.4.** If $\mathcal{A}$ has enough projectives (every object is a quotient of a projective), then every object has a projective resolution. Dually for injectives.

*Proof sketch.* Given $A$, choose a surjection $P_{0} \to A$ with $P_{0}$ projective. Let $K_{0}$ be its kernel. Choose a surjection $P_{1} \to K_{0}$, and continue inductively. $\square$

## 3.4 Derived functors: $\operatorname{Ext}$ and $\operatorname{Tor}$

Let $F: \mathcal{A} \to \mathcal{B}$ be an additive left exact functor between abelian categories, and assume $\mathcal{A}$ has enough injectives. The **right derived functors** $R^{n}F$ are defined by choosing an injective resolution $A \to I^{\bullet}$ and setting

$$R^{n}F(A) = H^{n}(F(I^{\bullet})).$$

This is independent of the chosen resolution up to canonical isomorphism.

**Definition 3.5.** For $R$-modules $M$ and $N$,

$$\operatorname{Ext}^{n}_{R}(M,N) = R^{n}\operatorname{Hom}_{R}(M,-)(N).$$

Dually, if $G$ is additive and right exact and $\mathcal{A}$ has enough projectives, the **left derived functors** $L_{n}G$ are defined using projective resolutions. For tensor product,

$$\operatorname{Tor}^{R}_{n}(M,N) = L_{n}(M \otimes_{R} -)(N),$$

where $M$ is a right $R$-module and $N$ a left $R$-module. A flat resolution may also compute $\operatorname{Tor}$.

**Worked example 3.6.** For a positive integer $n$, compute $\operatorname{Ext}^{1}_{\mathbb{Z}}(\mathbb{Z}/n\mathbb{Z}, \mathbb{Z})$.

Take the projective resolution of $\mathbb{Z}/n\mathbb{Z}$:

$$0 \to \mathbb{Z} \xrightarrow{\times n} \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \to 0.$$

Apply $\operatorname{Hom}_{\mathbb{Z}}(-, \mathbb{Z})$ and drop the last term:

$$0 \to \operatorname{Hom}(\mathbb{Z}, \mathbb{Z}) \xrightarrow{\times n} \operatorname{Hom}(\mathbb{Z}, \mathbb{Z}) \to 0.$$

Identifying $\operatorname{Hom}(\mathbb{Z}, \mathbb{Z}) \cong \mathbb{Z}$, the differential is multiplication by $n$. Thus $H^{1}$ of this complex is $\mathbb{Z}/n\mathbb{Z}$. Hence

$$\operatorname{Ext}^{1}_{\mathbb{Z}}(\mathbb{Z}/n\mathbb{Z}, \mathbb{Z}) \cong \mathbb{Z}/n\mathbb{Z}.$$

This measures the failure of maps from the kernel nZ into Z to extend across its inclusion in Z. The corresponding Hom restriction map is multiplication by n, and its cokernel is the computed Ext group.

**Worked example 3.7.** For positive integers $m,n$, compute $\operatorname{Tor}^{\mathbb{Z}}_{1}(\mathbb{Z}/m\mathbb{Z}, \mathbb{Z}/n\mathbb{Z})$.

Use the projective resolution $0 \to \mathbb{Z} \xrightarrow{\times m} \mathbb{Z} \to \mathbb{Z}/m\mathbb{Z} \to 0$. Tensor with $\mathbb{Z}/n\mathbb{Z}$:

$$0 \to \mathbb{Z} \otimes \mathbb{Z}/n\mathbb{Z} \xrightarrow{\times m} \mathbb{Z} \otimes \mathbb{Z}/n\mathbb{Z} \to 0.$$

Identifying $\mathbb{Z} \otimes \mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/n\mathbb{Z}$, the differential is multiplication by $m$. Its kernel is the set of elements killed by $m$, which is the subgroup of $\mathbb{Z}/n\mathbb{Z}$ of order $\gcd(m,n)$. Hence

$$\operatorname{Tor}^{\mathbb{Z}}_{1}(\mathbb{Z}/m\mathbb{Z}, \mathbb{Z}/n\mathbb{Z}) \cong \mathbb{Z}/\gcd(m,n)\mathbb{Z}.$$

**Illustration script.**

```python
import math
def tor_z(m, n):
    return math.gcd(m, n)

# Check for several pairs
for m, n in [(4,6), (12,18), (7,5), (8,12)]:
    print(m, n, tor_z(m,n))
```

The retained listing encodes the proved gcd formula; no execution is claimed. It does not independently compute Tor or establish another theorem. The kernel calculation proves the result, and the current source postdates the historical draft PDF.

## 3.5 The derived category

The **derived category** $D(\mathcal{A})$ is obtained from the category of complexes (or from $K(\mathcal{A})$) by formally inverting all quasi-isomorphisms. Its objects are complexes, and its morphisms are roofs: pairs of morphisms $C_{\bullet} \xleftarrow{q} X_{\bullet} \xrightarrow{f} D_{\bullet}$ where $q$ is a quasi-isomorphism, modulo a suitable equivalence relation.

This is a categorical localization. Roofs become a convenient description after passing to the homotopy category, where quasi-isomorphisms admit the appropriate calculus of fractions. The derived category is triangulated; mapping-cone triangles are distinguished, and short exact sequences of complexes produce such triangles.

**Theorem 3.8 (imported construction).** The derived category $D(\mathcal{A})$ is triangulated. The shift is C[1]_n=C_(n−1) with minus the old differential, in the homological convention. Distinguished triangles come from mapping cones of morphisms of complexes.

*Imported theorem boundary.* The triangulated-axiom construction for the general derived category is the standard derived-category theorem in Weibel, Chapter 10, retained in the bibliography. Cone formulas alone do not prove all axioms. The next chapter develops their exactness and explicit cone comparisons; no general unbounded replacement theorem is inferred from the bounded constructions proved below.


### Formal localisation and its universal property

At a fixed larger size, the localisation can be built explicitly. Start with the homotopy category, add a formal inverse arrow for every quasi-isomorphism, and take finite paths of original and inverse arrows. Impose the original composition/identity equations and the two inverse equations as a congruence. The path-category construction from the introductory book then gives a category. Any functor that sends quasi-isomorphisms to isomorphisms extends uniquely by sending the new arrows to their forced inverses. This proves the localisation universal property. The larger-universe convention makes the object and path collections sets at that size; no same-size set of all complexes is asserted.

The roof description above is the standard calculus-of-fractions model in the homotopy category. The calculations here can instead use the proved universal property and bounded projectives, without assuming an unproved elementwise rule for roof equivalence.

### Bounded projectives detect quasi-isomorphisms

Let P be a complex of projectives, zero below some degree. Every map P→an acyclic complex A is null-homotopic. At the first degree its image consists of cycles, and A in the next degree surjects onto those cycles. Projectivity lifts the map to the first homotopy component. Inductively subtract the preceding homotopy term; the chain-map equation makes the remainder a cycle-valued map, which lifts again. This is the comparison-homotopy induction from Chapter 6, now with an acyclic target and no augmentation.

For a quasi-isomorphism s:X→Y, this makes
$$s_*:\operatorname{Hom}_{K}(P,X)\longrightarrow
\operatorname{Hom}_{K}(P,Y)$$
a bijection. For surjectivity take u:P→Y and include it into the acyclic cone of s. Its null-homotopy has components (a_n,b_n) in Y_(n+1)⊕X_n. The second coordinate equation makes b a chain map, and the first gives u=sb+d a+a d. Thus u and sb have the same homotopy class.

For injectivity suppose sv=d a+a d. The map with components (−a,v) lands in Cone(s)[−1] and is a chain map by the signed cone differential. That target is acyclic, so the map is null-homotopic. Its projection to X is v, hence v is null-homotopic. This proves injectivity and tracks the required signs.

### Derived morphisms from these projectives

It follows that Hom_K(P,−) sends quasi-isomorphisms to bijections and extends to a Set-valued functor H on the localisation. The maps sending a chain-map class to its derived morphism give a natural transformation H⇒Hom_D(P,−). Naturality for an inverse arrow follows by inverting its already commuting square. Conversely the covariant Yoneda formula sends a derived morphism u to H(u)(id_P), giving a transformation in the other direction. Its composite on a chain-map class returns that class. The other composite is a natural endomorphism of Hom_D(P,−) fixing id_P, so Yoneda makes it identity. Hence
$$\operatorname{Hom}_D(P,X)\cong\operatorname{Hom}_K(P,X).$$
This also proves these morphism collections have the original hom-set size, even though a larger-size formal localisation was used for existence. No roof-calculus theorem was needed for this bounded-projective computation.

### Every bounded-below module complex has such a model

After shifting its lower bound to zero, construct a free complex P and map f:P→C inductively. Choose P₀ surjecting onto C₀. At degree n≥1 form the module of pairs (c,p) with c in C_n, p in P_(n−1), d_Cc=f(p), and d_Pp=0. Choose a free module P_n surjecting onto this module. Its first projection defines f_n and its second defines d_P. The pair equations prove both the chain-map equation and d_P squared zero.

The map is a quasi-isomorphism. A cycle c is lifted using the pair (c,0), giving a cycle preimage in P. If a P-cycle p has image d_Cc′, the pair (c′,p) lifts in the next degree and makes p a boundary. Thus the induced homology map is onto and injective. This explicit construction establishes the replacement needed for bounded-below homological complexes over a module category.

A quasi-isomorphism between these projective models is a homotopy equivalence, by the Hom bijection just proved, applied to its source and target. Therefore any additive functor preserves its invertibility up to homotopy. Applying the functor to a chosen model defines its total left derived construction on this bounded range, independently of model choices by the same comparison. The injective statement is dual in the bounded-above homological range, or bounded-below cochain range. Extending those replacement assertions to all unbounded complexes needs additional K-projective/K-injective existence results and is not claimed from this proof.

### Ext as an actual derived morphism

For modules concentrated in degree zero and n≥0, a projective resolution P→M gives
$$\operatorname{Hom}_D(M,N[n])\cong\operatorname{Ext}^n_R(M,N).$$
Indeed M and P are isomorphic after localisation. A chain map P→N[n] is precisely a map P_n→N killing the next differential, a Hom cocycle. A chain homotopy changes it by precomposition with the preceding differential, exactly a Hom coboundary. The projective-model bijection therefore proves the formula with the declared shift. For negative n there is no overlapping nonzero P-degree, so these morphisms vanish.

For example the nonzero class in Ext¹_Z(C₂,Z) is a derived morphism C₂→Z[1]. It is represented on the free resolution by a degree-one integer map modulo its even coboundaries. It is not an ordinary module homomorphism from C₂ to Z, all of which vanish. The shifted target and localisation retain genuinely new map data.

## 3.6 Common errors

- **Confusing quasi-isomorphism with homotopy equivalence.** Every homotopy equivalence is a quasi-isomorphism, but not conversely. The complex $0 \to \mathbb{Z} \xrightarrow{\times 2} \mathbb{Z} \to 0$ is quasi-isomorphic to $\mathbb{Z}/2\mathbb{Z}$ but not homotopy equivalent to it.
- **Forgetting to remove the resolved object before taking cohomology.** For a left exact covariant functor $F$, take an injective resolution $0\to A\to I^0\to I^1\to\cdots$, apply $F$ to $I^\bullet$, and compute $R^nF(A)=H^n(F(I^\bullet))$; the object $A$ is not a term of that cochain complex. For a right exact functor, a projective resolution similarly computes its left derived functors. Variance can instead permit a projective resolution, as in $\operatorname{Ext}^n_R(M,N)$ resolved in the first variable.
- **Mixing up projective and injective resolutions.** $\operatorname{Ext}$ can be computed from either a projective resolution of the first variable or an injective resolution of the second. $\operatorname{Tor}$ can be computed from a projective resolution, and more generally from a flat resolution, of either suitably sided variable.
- **Ignoring a finite resolution.** If an object has a projective resolution of length $d$, its derived functors in degrees above $d$ vanish. A global-dimension claim requires a uniform bound for every module.

## 3.7 Exercises

### Exercise 3.1

Compute $\operatorname{Ext}^{1}_{\mathbb{Z}}(\mathbb{Z}/4\mathbb{Z}, \mathbb{Z}/6\mathbb{Z})$ using a projective resolution.

<details><summary>Hint 1</summary>
Resolve the cyclic source by multiplication by four.
</details>
<details><summary>Hint 2</summary>
Ext¹ is the cokernel of that multiplication on Z/6.
</details>
<details><summary>Solution</summary>
Resolve $\mathbb{Z}/4\mathbb{Z}$ by $0 \to \mathbb{Z} \xrightarrow{\times 4} \mathbb{Z} \to \mathbb{Z}/4\mathbb{Z} \to 0$. Apply $\operatorname{Hom}(-, \mathbb{Z}/6\mathbb{Z})$:

$$0 \to \mathbb{Z}/6\mathbb{Z} \xrightarrow{\times 4} \mathbb{Z}/6\mathbb{Z} \to 0.$$

The map $\times 4$ on $\mathbb{Z}/6\mathbb{Z}$ has kernel $\{0, 3\} \cong \mathbb{Z}/2\mathbb{Z}$ and image $\{0, 4, 2\} \cong \mathbb{Z}/3\mathbb{Z}$. The cokernel is $\mathbb{Z}/6\mathbb{Z} / \operatorname{im}(\times 4) \cong \mathbb{Z}/2\mathbb{Z}$. Hence $\operatorname{Ext}^{1}_{\mathbb{Z}}(\mathbb{Z}/4\mathbb{Z}, \mathbb{Z}/6\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$. $\square$
</details>

### Exercise 3.2

Compute $\operatorname{Tor}^{\mathbb{Z}}_{1}(\mathbb{Z}/8\mathbb{Z}, \mathbb{Z}/12\mathbb{Z})$.

<details><summary>Hint 1</summary>
Tensor the two-term resolution with Z/12.
</details>
<details><summary>Hint 2</summary>
The kernel of multiplication by eight has order four.
</details>
<details><summary>Solution</summary>
By the formula above, $\operatorname{Tor}^{\mathbb{Z}}_{1}(\mathbb{Z}/m\mathbb{Z}, \mathbb{Z}/n\mathbb{Z}) \cong \mathbb{Z}/\gcd(m,n)\mathbb{Z}$. Here $\gcd(8,12) = 4$, so the answer is $\mathbb{Z}/4\mathbb{Z}$. $\square$
</details>

### Exercise 3.3

Show that if $P$ is projective, then $\operatorname{Ext}^{n}_{R}(P, N) = 0$ for all $n \geq 1$ and all $N$.

<details><summary>Hint 1</summary>
Use the resolution concentrated in degree zero.
</details>
<details><summary>Hint 2</summary>
There are no positive Hom cochain groups.
</details>
<details><summary>Solution</summary>
The length-zero projective resolution $P\to P$ suffices. Applying $\operatorname{Hom}_{R}(-,N)$ gives a cochain complex with $\operatorname{Hom}_{R}(P,N)$ in degree $0$ and zero in every positive degree. All higher cohomology vanishes. $\square$
</details>

### Exercise 3.4

Construct an explicit chain homotopy between the zero map and the identity on the acyclic complex $0 \to \mathbb{Z} \xrightarrow{(1,-1)} \mathbb{Z}^{2} \xrightarrow{+} \mathbb{Z} \to 0$, where the first map sends $n$ to $(n, -n)$ and the second sends $(a,b)$ to $a+b$.

<details><summary>Hint 1</summary>
Split the addition map by n↦(n,0).
</details>
<details><summary>Hint 2</summary>
Use the complementary kernel coordinate to define the next homotopy.
</details>
<details><summary>Solution</summary>
Put the three nonzero groups in degrees $2,1,0$. Define

$$h_0:\mathbb Z\to\mathbb Z^2,\quad h_0(n)=(n,0),\qquad
h_1:\mathbb Z^2\to\mathbb Z,\quad h_1(a,b)=-b.$$

Then $d_1h_0=\operatorname{id}$ in degree $0$,

$$d_2h_1(a,b)+h_0d_1(a,b)=(-b,b)+(a+b,0)=(a,b),$$

and $h_1d_2(n)=h_1(n,-n)=n$ in degree $2$. Thus $dh+hd=\operatorname{id}$, so the identity is chain homotopic to zero. $\square$
</details>

### Exercise 3.5

Prove that a morphism of complexes that induces the zero map on homology is not necessarily null-homotopic.

<details><summary>Hint 1</summary>
Use a nonsplit exact integer sequence as a complex.
</details>
<details><summary>Hint 2</summary>
A contraction in degree zero would supply the impossible section.
</details>
<details><summary>Solution</summary>
Consider the exact complex

$$C_\bullet:\quad 0\longrightarrow\mathbb Z
\xrightarrow{\times2}\mathbb Z
\xrightarrow{\bmod 2}\mathbb Z/2\mathbb Z\longrightarrow0$$

in degrees $2,1,0$. Its identity map induces zero maps on homology because every homology group is zero. If the identity were null-homotopic, the degree-$0$ equation would give a homomorphism $h_0:\mathbb Z/2\mathbb Z\to\mathbb Z$ with $(\bmod 2)\circ h_0=\operatorname{id}$. That would split the displayed nonsplit exact sequence, which is impossible. Hence a map can induce zero on homology without being null-homotopic. $\square$
</details>


### HA-10-06 — The localisation universal property

If H on the homotopy category sends every quasi-isomorphism to an isomorphism, explain how it acts on a formal inverse path and why this extension is unique.

<details><summary>Hint 1</summary>
The image of an inverse is forced by its two inverse equations.
</details>
<details><summary>Hint 2</summary>
A path maps to the composite of the images of its letters.
</details>
<details><summary>Solution</summary>
Send an inverse generator for s to the inverse of Hs, which exists by hypothesis. Send each finite path to the corresponding composite. The original functor laws respect the original relations, and the chosen inverses respect both new inverse relations, so the assignment descends through the congruence. Any extension must have those inverse images and preserve composition, forcing its value on every path. This proves the universal property independently of a particular roof model.
</details>

### HA-10-07 — Projective-model equivalence

Prove a quasi-isomorphism s:P→Q between bounded-below complexes of projectives is a homotopy equivalence.

<details><summary>Hint 1</summary>
Use the Hom bijection with source Q to lift id_Q.
</details>
<details><summary>Hint 2</summary>
Then use injectivity of the Hom bijection with source P.
</details>
<details><summary>Solution</summary>
Surjectivity of Hom_K(Q,s) gives t:Q→P with st homotopic to id_Q. Hence s(ts) and s have the same homotopy class. Injectivity of Hom_K(P,s) implies ts is homotopic to id_P. Thus t supplies both required inverse equations in the homotopy category. Each use of the Hom bijection requires the corresponding source to be bounded below and projective termwise; neither property was omitted.
</details>

### HA-10-08 — Shifted integer maps

Compute Hom_D(Z/m,Z[n]) for m≥2 and every integer n.

<details><summary>Hint 1</summary>
Use the two-term projective resolution and the declared homological shift.
</details>
<details><summary>Hint 2</summary>
Hom cohomology is zero in degree zero, Z/m in degree one, and zero above it.
</details>
<details><summary>Solution</summary>
For n=1 the group is Ext¹_Z(Z/m,Z)=Z/m. For n=0 it is the ordinary Hom group, which is zero because the integers are torsion-free. For n≥2 the resolution has no corresponding cochain terms, so it is zero. For n<0 the shifted target is supported in a negative degree with no overlapping term in the nonnegative projective resolution, so it is again zero. Thus precisely the first positive shift retains the nonsplit-extension information.
</details>

### HA-10-09 — Same homology, different derived objects

Let R=k[ε]/(ε²). Compare the two-term free complex C with differential ε to B=k[0]⊕k[1]. Prove they have the same homology but are not isomorphic in D(R).

<details><summary>Hint 1</summary>
Apply the proved bounded-range left derived tensor with k.
</details>
<details><summary>Hint 2</summary>
C itself is a projective model; for B use two copies of the infinite periodic resolution of k with one shifted.
</details>
<details><summary>Solution</summary>
Both have k in homology degrees zero and one and zero elsewhere. Derived tensor of C with k is computed directly from its two free terms; its differential becomes zero and there is no degree-two homology. For B, take the direct sum of the periodic free resolution of k and its shift. After tensoring with k every differential is zero, and degree two has two copies of k. An isomorphism in the derived category would be sent by this derived functor to an isomorphism and hence induce equal homology groups, contradicting these results. Matching homology objects alone has not supplied the additional extension data of a complex.
</details>

### HA-10-10 — Flat resolutions compute Tor

Explain why a nonnegative flat resolution of a left module can replace its projective resolution when computing Tor with a right module.

<details><summary>Hint 1</summary>
Tensor it with a projective right resolution of the other module.
</details>
<details><summary>Hint 2</summary>
Use exact augmented rows and columns and the finite-diagonal elimination proved earlier.
</details>
<details><summary>Solution</summary>
Form the first-quadrant double tensor complex from the projective right resolution Q and the flat left resolution F. Each Q-term is flat, so tensoring the augmented F-resolution is exact. Each F-term is flat, so tensoring the augmented Q-resolution is exact as well. The two augmented total comparisons have acyclic quotients by the elementary total-complex lemma. Their common total homology identifies H(Q⊗M), already proved to be Tor, with H(N⊗F). This proves the claimed replacement with its sides and bounded-diagonal hypotheses.
</details>

## 3.8 Looking forward

Derived categories formalize the idea that complexes should be considered up to quasi-isomorphism, not up to isomorphism. In **Triangulated Categories**, we will study the triangulated structure abstractly, and in **Model Categories**, we will see how derived categories arise from model structures on categories of complexes.
