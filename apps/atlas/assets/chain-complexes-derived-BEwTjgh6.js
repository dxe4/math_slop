var e=`---
id: deep-dive-chain-complexes-derived
title: "Chain Complexes, Homology, Ext, and Tor"
license: CC BY-SA 4.0
---

# Chain Complexes, Homology, Ext, and Tor

**Before reading.** Read [Modules and Exact Sequences](../books/commutative-algebra/modules-exact-sequences.md) and [Abelian Categories](../books/morphisms-modules-categories/abelian-categories.md). These are preparation for the ideas used below.

Algebra often presents a failed equation as an obstruction. A map may fail to be onto, a cycle may fail to be a boundary, or a short exact sequence may fail to split. Homological algebra does not erase these failures: it packages and measures them.

This deep dive assumes modules, kernels, quotients, and exact sequences. All constructions take place in modules over a fixed ring $R$; the same arguments work in an abelian category once kernels, cokernels, and the relevant exactness machinery are available. The goal is a reliable computational first encounter, not a claim that all derived-functor theory fits in one chapter.

## Chain complexes and the one equation that matters

A **chain complex** $C_\\bullet$ is a sequence

$$\\ldots \\to C_{n+1} \\xrightarrow{d_{n+1}} C_{n} \\xrightarrow{d_n} C_{n-1} \\to \\ldots$$

such that $d_{n} d_{n+1}=0$ for every $n$. This condition says every boundary is a cycle. Define

- the cycles $Z_{n}(C)=\\ker d_{n}$;
- the boundaries $B_{n}(C)=\\operatorname{im}d_{n+1}$;
- the homology $H_{n}(C)=Z_{n}(C)/B_{n}(C)$.

The quotient is legitimate precisely because $B_{n}(C)\\subseteq Z_{n}(C)$, which is the complex equation in disguise. A homology class is represented by a cycle; two cycles represent the same class when their difference is a boundary.

**Worked example.** Consider the complex concentrated in degrees $2,1,0$:

$$0 \\to Z --\\times 2\\to Z --mod 2\\to Z/2Z \\to 0$$

The composite is zero. At the middle copy of $Z$, the kernel of reduction modulo two is $2Z$, exactly the image of multiplication by two. At the other degrees the same kernel-image check works, so every homology group is zero. The complex is **exact**.

Now remove the final quotient map and consider $0\\to Z --\\times 2\\to Z\\to 0$, with the copies of $Z$ in degrees one and zero. Then $H_{1}=\\ker(\\times 2)=0$, while $H_{0}=Z/2Z$. That surviving group records the failure of multiplication by two to be onto.

**Exactness criterion.** A chain complex is exact at every degree if and only if every $H_{n}$ is zero. This does not mean the objects in the complex are zero; it means every cycle is already explained by an incoming boundary.

## Chain maps and induced maps

A **chain map** $f:C_\\bullet\\to D_\\bullet$ is a family $f_{n}:C_{n}\\to D_{n}$ satisfying

$$d^{D}_{n} f_{n} = f_{n-1} d^{C}_{n}$$

The commuting equation guarantees that cycles go to cycles and boundaries go to boundaries. Therefore

$$H_{n}(f)([z])=[f_{n}(z)]$$

is well defined. The brackets matter: defining a function on representatives is not enough. If $z'=z+d_{n+1}c$, then

$$f_{n}(z')-f_{n}(z)=f_{n}(d_{n+1}c)=d_{n+1}f_{n+1}(c)$$

so the two outputs differ by a boundary.

Homology is thus a functor from chain complexes and chain maps to graded modules. It forgets much information, but preserves enough to detect obstructions.

## A long exact sequence from a short one

Suppose

$$0 \\to A_\\bullet \\xrightarrow{i} B_\\bullet \\xrightarrow{p} C_\\bullet \\to 0$$

is a **degreewise short exact sequence of chain complexes**: for each $n$, the module sequence $0\\to A_{n}\\to B_{n}\\to C_{n}\\to 0$ is exact, and $i,p$ are chain maps. Then there is a long exact sequence

$$\\ldots \\to H_{n}(A) \\to H_{n}(B) \\to H_{n}(C) --\\delta\\to H_{n-1}(A) \\to \\ldots$$

The connecting map $\\delta$ is the interesting part. Start with a cycle $c\\in C_{n}$. Surjectivity of $p_{n}$ lets us lift it to $b\\in B_{n}$. Since $c$ is a cycle,

$$p_{n-1}(d b)=d(p_{n} b)=dc=0$$

Exactness says $d b$ lies in the image of $i_{n-1}$, so write $d b=i(a)$. A further differential shows $a$ is a cycle. Set $\\delta([c])=[a]$. Changing the lift or the representative changes $a$ only by a boundary, so the class is well defined.

This construction is a useful proof pattern: lift, apply a differential, use exactness, then descend to a quotient. It also shows why the hypotheses are not decoration. Without degreewise surjectivity the lift may not exist; without exactness $d b$ may not come from $A$.

## Resolutions replace an object by computable ones

A **projective resolution** of an $R$-module $M$ is an exact complex

$$\\ldots \\to P_{2} \\to P_{1} \\to P_{0} \\to M \\to 0$$

with each $P_{i}$ projective. Free modules are projective, so free resolutions are a common concrete choice. The resolution is not unique, but the derived invariants computed from it are unique up to canonical isomorphism.

For $Z/nZ$ as a $Z$-module, one short free resolution is

$$0 \\to Z --\\times n\\to Z \\to Z/nZ \\to 0$$

Injectivity of $\\times n$ uses $n\\ne 0$. Its image is $nZ$, the kernel of the quotient map. This two-term resolution makes both Ext and Tor visible.

## Ext measures a failure of exactness in Hom

Fix a module $A$. The contravariant functor $\\operatorname{Hom}_{R}(-,A)$ is left exact, but it need not preserve surjections. Apply it to a projective resolution of $M$ and take cohomology. The resulting groups are $\\operatorname{Ext}^{i}_{R}(M,A)$.

Applying $\\operatorname{Hom}_{Z}(-,A)$ to the resolution of $Z/nZ$ gives, in cochain direction,

$$0 \\to \\operatorname{Hom}(Z,A) --precompose \\times n\\to \\operatorname{Hom}(Z,A) \\to 0$$

Identify each $\\operatorname{Hom}(Z,A)$ with $A$ by evaluating at $1$. The map becomes multiplication by $n$. Hence

$$\\operatorname{Ext}^{1}_{Z}(Z/nZ,A) \\simeq A/nA$$

For example, $\\operatorname{Ext}^{1}_{Z}(Z/2Z,Z)\\simeq Z/2Z$. This is compatible with the existence of a nonsplit extension $0\\to Z\\to Z\\to Z/2Z\\to 0$, where the first map is multiplication by two. By contrast, $\\operatorname{Ext}^{1}_{Z}(Z/nZ,Q)=0$ because multiplication by $n$ is onto on $Q$.

For this particular resolution, $\\operatorname{Ext}^{i}_{Z}(Z/nZ,A)=0$ for $i\\ge 2$. That conclusion comes from the length-one resolution; it is not a universal claim that all higher Ext groups vanish over every ring.

## Tor measures a failure of exactness in tensor product

Fix $A$ and apply $(-)\\otimes_{R} A$ to a projective resolution of $M$. Tensor product is right exact but need not preserve injections. The homology groups are $\\operatorname{Tor}_{i}^{R}(M,A)$.

Tensoring the same resolution with $A$ gives

$$0 \\to A --\\times n\\to A \\to 0$$

Therefore

$$\\operatorname{Tor}_{1}^{Z}(Z/nZ,A) \\simeq A[n] = \\{a\\in A : na=0\\}$$

and $(Z/nZ)\\otimes A\\simeq A/nA$. For $A=Z$, the Tor group is zero because $Z$ has no $n$-torsion. For $A=Z/nZ$, multiplication by $n$ is zero, so $\\operatorname{Tor}_{1}^{Z}(Z/nZ,Z/nZ)\\simeq Z/nZ$.

Do not merge the two formulas mentally. $\\operatorname{Ext}^{1}_{Z}(Z/nZ,A)$ is the quotient $A/nA$; $\\operatorname{Tor}_{1}^{Z}(Z/nZ,A)$ is the subgroup killed by $n$. They can happen to be isomorphic in examples while arising from opposite parts of the same map.

## Counterexamples and diagnostic habits

- The condition $d^{2}=0$ does not imply exactness. In the zero-differential complex, every element is a cycle and only zero is a boundary, so $H_{n}(C)=C_{n}$.
- A sequence of modules and maps is not automatically a complex. Check each adjacent composite before taking “homology.”
- Exactness of $0\\to A\\to B\\to C\\to 0$ does not imply it splits. The sequence $0\\to Z/2Z\\to Z/4Z\\to Z/2Z\\to 0$, with the first map sending $1$ to $2$, is exact and nonsplit.
- Tensoring does not preserve every injection. Tensor $0\\to Z --\\times 2\\to Z$ with $Z/2Z$; the induced map is the zero map on $Z/2Z$, hence not injective.
- $\\operatorname{Ext}$ has variance: $\\operatorname{Ext}^{i}_{R}(-,A)$ is contravariant in its first variable and covariant in its second. Reversing a map reverses the induced direction in the first slot.

## Exercises with worked answers

<a id="deep-dive-chain-complexes-derived-ex-1"></a>

**Exercise 1.**

**1. Homology of a multiplication complex.** Compute the homology of $0\\to Z --\\times 6\\to Z\\to 0$, with terms in degrees one and zero.
<details>
<summary>Hint 1</summary>

Compute homology separately in each degree as cycles modulo boundaries.
</details>
<details>
<summary>Hint 2</summary>

Multiplication by six on the integers has trivial kernel; its image is the multiples of six.
</details>
<details>
<summary>Solution</summary>

The degree-one homology is $\\ker(\\times 6)=0$. The degree-zero cycles are all of $Z$, and the boundaries are $6Z$, so $H_{0}\\simeq Z/6Z$.

</details>

<a id="deep-dive-chain-complexes-derived-ex-2"></a>

**Exercise 2.**

**2. A zero differential.** Let $C_{2}=Z$, $C_{1}=Z/3Z$, and all differentials be zero. Compute $H_{2}$ and $H_{1}$.
<details>
<summary>Hint 1</summary>

With every differential equal to zero, identify cycles and boundaries before quotienting.
</details>
<details>
<summary>Hint 2</summary>

All elements are cycles and only zero is a boundary, so each homology group retains its chain group.
</details>
<details>
<summary>Solution</summary>

Every element is a cycle and every boundary is zero. Thus $H_{2}\\simeq Z$ and $H_{1}\\simeq Z/3Z$.

</details>

### Further practice

**3. Ext calculation.** Compute $\\operatorname{Ext}^{1}_{Z}(Z/4Z,Z/6Z)$.

**Answer.** The formula gives $(Z/6Z)/4(Z/6Z)$. The subgroup of multiples of four is $\\{0,2,4\\}$, so the quotient has two elements and is isomorphic to $Z/2Z$.

**4. Tor calculation.** Compute $\\operatorname{Tor}_{1}^{Z}(Z/4Z,Z/6Z)$.

**Answer.** This is the subgroup of $Z/6Z$ killed by four. Solving $4a=0 \\bmod 6$ gives $a=0,3$, so the group is isomorphic to $Z/2Z$.

**5. Why a proposed boundary fails.** In a complex, suppose $z=d_{n+1}c$. Prove that $z$ is a cycle.

**Answer.** Apply the next differential: $d_{n} z=d_{n} d_{n+1}c=0$. The last equality is exactly the chain-complex axiom. Without it, the quotient of cycles by boundaries may not even be defined.

## Where to continue

Use [Morphisms First](#/item/book-morphisms-modules-categories) for exact sequences, projectives, functors, and naturality before this construction. The [localization deep dive](#/item/deep-dive-prime-ideals-localization) shows an exact functor of a different kind. Next topics include chain homotopies, spectral sequences, derived categories, and derived functors beyond modules; each requires more infrastructure than the computations developed here.
`;export{e as default};