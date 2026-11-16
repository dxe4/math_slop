var e=`---
parent_id: book-morphisms-modules-categories
chapter_id: derived-functors-tor-ext
title: "Derived Functors: Tor and Ext"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Derived Functors: Tor and Ext

Tensor and Hom can lose exactness. Replacing an input by projective or injective modules creates a complex whose new homology records that loss. A construction using a chosen resolution is not yet an invariant: comparison maps and their homotopies must first prove independence and functoriality.

Read [special modules](projective-injective-flat-modules.md), [tensor/Hom](tensor-products-hom.md) and [complexes](complexes-and-homology.md). R is associative and unital. Ext uses left modules. Tor uses a right module N and left module M. Projective resolutions have homological degrees zero and higher; Hom applied to them gives cohomological degrees zero and higher. All total complexes below are first-quadrant with finite sums on each diagonal. Ordinary choice supplies the resolutions already constructed.

## 1. Comparison maps exist and are unique up to homotopy

**Theorem 6.1 (Projective comparison).** For projective resolutions P→M and Q→M′, every map f:M→M′ lifts to a chain map P→Q. Any two such lifts are chain homotopic.

*Proof.* Lift f composed with the augmentation of P through Q₀→M′ using projectivity of P₀. Suppose the components have been constructed through degree n−1. The required map f_(n−1)d_P from P_n lands in the cycles of Q_(n−1), because the previous chain equation makes its next differential zero. For n=1, use the augmentation equation to see that it lands in its kernel. Exactness makes Q_n surject onto those cycles. Projectivity of P_n supplies the next lift, proving existence by induction.

For two lifts a,b, the difference in degree zero lands in the augmentation kernel, so projectivity lifts it to h₀:P₀→Q₁. Suppose the homotopy equation has been achieved below degree n. The map a_n−b_n−h_(n−1)d_P lands in the cycles of Q_n: differentiating it and substituting the preceding equation cancels all terms, with the remaining successive P-differential zero. Lift it through Q_(n+1) onto those cycles to define h_n. Then a−b=d_Qh+hd_P in every degree. ∎

In particular, comparison maps in both directions for the identity of M compose to lifts of the identity, hence are homotopic to identities. The projective resolutions are homotopy equivalent as augmented resolutions. The same proof with all arrows reversed gives comparison and homotopy uniqueness for injective resolutions and maps of their augmented modules.

Applying tensor to a homotopy preserves its equation by additivity. Applying Hom reverses its maps and turns the homotopy into the corresponding degree-lowering cochain homotopy; precomposition of the equation gives the same two terms. Both therefore induce equal maps on the resulting homology or cohomology. This is the independence mechanism used throughout the chapter.

## 2. Definitions and degree-zero comparisons

Choose a projective resolution P→M. Define
$$\\operatorname{Tor}^R_n(N,M)=H_n(N\\otimes_R P),\\qquad n\\ge0.$$
A comparison lift for a map M→M′ induces a homology map independent of that lift, by Theorem 6.1. A map of N acts directly by tensoring. Composition and identity laws follow because composite lifts lift the composite augmentation and all competing lifts are homotopic. Thus Tor is covariant in both arguments. Comparing two resolutions of the same module gives canonical isomorphisms on homology, compatible with these maps: another comparison yields the same isomorphism.

For left modules M,L, define the cochain complex Hom_R(P,L), with differential from degree n to n+1 given by precomposition with d_(n+1). Its square is zero. Set
$$\\operatorname{Ext}^n_R(M,L)=H^n\\operatorname{Hom}_R(P,L).$$
The same comparison argument makes it independent of the resolution, contravariant in M and covariant in L. These are abelian groups for arbitrary R. Extra module structures require extra ring hypotheses and are not silently assumed.

Right exactness of tensor identifies Tor₀ with N⊗_R M, because M is the cokernel of P₁→P₀. A degree-zero Hom cocycle is a map P₀→L killing the image of P₁, hence factoring uniquely through M. Thus Ext⁰ identifies with Hom_R(M,L), naturally. Higher groups measure failures that those degree-zero constructions cannot detect alone.

## 3. Why the other resolutions give the same result

We prove balance without invoking a spectral sequence. The elementary total-complex fact needed is this: a first-quadrant double cochain complex with acyclic columns has acyclic direct-sum total complex. For a total cocycle of degree n, inspect its smallest horizontal index. Its vertical component is a cycle, so subtract the total differential of a vertical preimage. This removes that component and introduces only a component one horizontal step farther. Repeat. At the last possible index, degree-zero vertical acyclicity says the remaining cycle is zero. There are only n+1 positions, so the process terminates. Acyclic rows give the analogous argument interchanging the directions. For chain complexes, start with the largest horizontal index and remove it by a vertical preimage; the new component moves one index smaller. The same finite argument proves the homological version.

For an injective resolution L→I, form the double cochain complex Hom_R(P_i,I^j), i,j≥0. Precomposition increases i and postcomposition increases j. They commute, so take total differential horizontal plus minus one to the i-th power times vertical, making the square zero.

The complex Hom(P,L) injects into the bottom row via L→I⁰. Its columnwise quotient is acyclic, because each P_i is projective and Hom(P_i,−) takes the injective resolution's augmented exact sequence to an exact sequence. The total-complex fact and the long exact sequence therefore make this inclusion a quasi-isomorphism. Likewise Hom(M,I) injects at horizontal degree zero via P₀→M; the rowwise quotient is acyclic because I^j is injective. Hence its inclusion in the same total complex is a quasi-isomorphism. We obtain natural isomorphisms
$$\\operatorname{Ext}^n_R(M,L)\\cong H^n\\operatorname{Hom}_R(M,I).$$
Comparison maps and the same homotopy calculation make the result independent of the chosen P and I. Both constructions describe the common total-complex comparison, rather than an unexplained matching of group sizes.

Tor is balanced too. Choose a projective resolution Q→N of right modules and form Q_i⊗_R P_j with the same alternating total sign. Projectives on either side are flat by Chapter 2. Thus tensoring each augmented resolution with the projective term on the other side is exact. The augmented row and column comparisons have acyclic quotients, and the homological total-complex argument identifies both total homologies. Consequently
$$\\operatorname{Tor}^R_n(N,M)\\cong H_n(Q\\otimes_R M).$$
This also proves naturality in both arguments and permits choosing whichever side has the simpler projective resolution. No commutativity of R was used; Q and P retain their right and left sides.

## 4. Long exact sequences and their directions

A short exact sequence in the second Ext variable gives a short exact sequence of Hom cochain complexes using P: projectivity of every P_i makes each degree sequence exact. The cochain form of the connecting-map theorem therefore gives
$$\\cdots\\to\\operatorname{Ext}^n(M,L')\\to\\operatorname{Ext}^n(M,L)
\\to\\operatorname{Ext}^n(M,L'')\\to\\operatorname{Ext}^{n+1}(M,L')\\to\\cdots.$$
For a short exact sequence in M, use the injective model. Injectivity of each I^j gives the degreewise exact sequence with the first argument reversed, and the long exact sequence begins Hom(M″,L)→Hom(M,L)→Hom(M′,L), followed by Ext¹(M″,L). Its connecting arrows increase the cohomological degree.

For Tor, a short exact sequence of right modules stays degreewise exact after tensoring with each flat P_j. The homological connecting theorem gives arrows from Tor_n(N″,M) to Tor_(n−1)(N′,M). A short exact sequence of left modules is handled with the flat right resolution Q. Thus both Tor variables have covariant long exact sequences, with connecting maps lowering degree. These directions are forced by the complexes, not guessed from similar notation.

These proofs require no horseshoe construction: balance supplies a degreewise exact model for each variable. Naturality of the connecting maps follows from the proved representative construction and the resolution comparisons. A different projective resolution cannot change the resulting exact sequence up to its canonical comparison.

## 5. Cyclic integer calculations

**Worked example 6.2.** Resolve Z/a for a≥2 by Z→Z in degrees one and zero with differential multiplication by a. Tensor with Z/b. The differential becomes multiplication by a on Z/b. Its kernel and cokernel are both cyclic of order gcd(a,b), and there are no higher terms. Thus Tor₁ and Tor₀ are abstractly C_gcd(a,b), while higher Tor groups vanish.

Applying Hom into Z/b gives the same multiplication as a cochain differential. Therefore Ext⁰ and Ext¹ are also abstractly that cyclic group, and higher Ext groups vanish. The kernel and cokernel are different constructions with different natural maps; the coinciding isomorphism types do not identify their functors. The introductory capstone's reduction C_(n²)→C_n explicitly disproved such a general natural identification.

With target Z instead, Ext⁰(Z/a,Z)=0 because there is no nonzero map from a finite cyclic group to the torsion-free integers, while Ext¹(Z/a,Z)=Z/a. By contrast Tor₁(Z/a,Z)=0 because Z is flat. This calculation distinguishes the two functors using their specified variables and an actual resolution.

## 6. Infinite projective dimension in a small ring

**Worked example 6.3.** Let R=k[ε]/(ε²) and let k=R/(ε). The infinite free resolution
$$\\cdots\\xrightarrow{\\varepsilon}R\\xrightarrow{\\varepsilon}R
\\xrightarrow{\\varepsilon}R\\longrightarrow k\\longrightarrow0$$
is exact: the augmentation kernel and every later kernel/image are (ε). Tensoring with k makes every differential zero, so Tor_n^R(k,k)≅k for every n≥0. Applying Hom_R(−,k) also makes every differential zero, giving Ext^n_R(k,k)≅k for every n≥0.

The modules and ring are finite-dimensional over k, but the higher groups do not eventually vanish. A hypothetical finite projective resolution would make Ext zero above its length, contradicting the proved independence and this computation. Thus finiteness of generators or vector-space dimension does not ensure finite projective dimension. A later chapter states the additional regularity and global-dimension hypotheses needed for such conclusions.

## 7. Vanishing detects the module classes

Projectivity of M makes its length-zero resolution available, so Ext^n(M,L)=0 for every L and n>0. Injectivity of L gives the same conclusion from its length-zero injective resolution. Conversely if Ext¹(M,L)=0 for every L, take a free presentation 0→K→F→M→0. The contravariant long exact sequence makes Hom(F,K)→Hom(K,K) onto. Lift id_K to a retraction F→K; the sequence splits and M is projective.

If Ext¹(M,L)=0 for every M, apply the same long exact sequence to 0→J→R→R/J→0 for each left ideal J. Every map J→L extends to R. Baer's criterion proves L injective. Thus these degree-one tests recover exactly the two lifting properties, with their correct argument positions.

For flatness, a flat left M gives exactness of Q⊗M and hence vanishing of all positive Tor. Conversely suppose Tor₁(N,M)=0 for every right module N. For an arbitrary inclusion A→B of right modules with quotient N, its Tor long exact sequence contains Tor₁(N,M)→A⊗M→B⊗M. The assumed vanishing makes the latter injection, which is exactly flatness of M. The right-module criterion is dual in the two variables. These are derived characterisations proved after, rather than assumed before, the resolution constructions.

## 8. Exercises

### HA-06-01 — First comparison lift

For f:M→M′ and projective resolutions P,Q, explain why P₀→M→M′ lifts to Q₀ and why its composite with d:P₁→P₀ lands in the augmentation kernel.

<details><summary>Hint 1</summary>
Use the surjection Q₀→M′ and projectivity.
</details>
<details><summary>Hint 2</summary>
The augmentation of P kills the first differential.
</details>
<details><summary>Solution</summary>
Projectivity of P₀ supplies the lift through Q₀→M′. Its composite from P₁ has zero image in M′ because the original augmentation followed by d is zero. Exactness therefore places it in the image of Q₁. Projectivity of P₁ then lifts to Q₁. This begins the induction without confusing the augmentation kernel with the zero differential out of an unaugmented degree-zero complex.
</details>

### HA-06-02 — Uniqueness up to homotopy

In the homotopy induction, why can a_n−b_n−h_(n−1)d_P be lifted to Q_(n+1)?

<details><summary>Hint 1</summary>
Differentiate that map using the previously constructed homotopy equation.
</details>
<details><summary>Hint 2</summary>
Exactness gives a surjection onto the cycle module, and P_n is projective.
</details>
<details><summary>Solution</summary>
The chain-map equations turn its differential into the previous difference times d_P minus d_Qh_(n−1)d_P. The prior homotopy identity leaves only a term containing two consecutive P-differentials, hence zero. Thus its image lies in Q_n's cycles. Exactness makes Q_(n+1) surject onto those cycles, and projectivity of P_n gives the lift h_n. This proves the complete homotopy equation in that degree.
</details>

### HA-06-03 — Degree zero

Prove Ext⁰_R(M,L)=Hom_R(M,L) directly from the projective complex.

<details><summary>Hint 1</summary>
A degree-zero cocycle is a map P₀→L killing im d₁.
</details>
<details><summary>Hint 2</summary>
M is the quotient P₀/im d₁.
</details>
<details><summary>Solution</summary>
Such a map factors uniquely through that quotient, giving a homomorphism M→L. Conversely precomposing any homomorphism M→L with the augmentation gives a degree-zero cocycle. There are no incoming degree-minus-one cochains, so no further quotient of these cocycles occurs. The formulas are inverse and commute with maps of both modules, proving the stated natural identification.
</details>

### HA-06-04 — A cyclic Tor group

Compute Tor₁^Z(Z/12,Z/18), identifying its kernel inside the tensored degree-one group.

<details><summary>Hint 1</summary>
Use the resolution with differential multiplication by twelve.
</details>
<details><summary>Hint 2</summary>
Solve 12x=0 modulo eighteen.
</details>
<details><summary>Solution</summary>
The tensored differential is multiplication by twelve on Z/18. Its kernel consists of multiples of three and has six elements, generated by the residue three. Therefore Tor₁ is C₆, with that explicit kernel model. Degree-zero Tor is the quotient by the image of multiplication by twelve and is also C₆, but its quotient map and generator interpretation differ. Higher groups vanish because the resolution has only two nonzero terms.
</details>

### HA-06-05 — A cyclic Ext group

Compute Ext¹_Z(Z/5,Z) and Ext¹_Z(Z/5,Q).

<details><summary>Hint 1</summary>
Both are cokernels of multiplication by five on the second argument.
</details>
<details><summary>Hint 2</summary>
That multiplication is onto Q but not onto Z.
</details>
<details><summary>Solution</summary>
The integer cokernel is Z/5, so the first group is C₅. Multiplication by five is a bijection of Q, so its cokernel is zero and the second Ext group vanishes. This agrees with Q being injective over Z. The same projective resolution computes both answers, and the change comes from the actual target homomorphism rather than a change of first-module presentation.
</details>

### HA-06-06 — Balanced Tor sides

In the double tensor complex Q_i⊗_R P_j, identify the module property making the augmented columns and rows exact.

<details><summary>Hint 1</summary>
Each resolution consists of projectives on its own side.
</details>
<details><summary>Hint 2</summary>
Projectives are flat, and flatness preserves the other side's exact sequence.
</details>
<details><summary>Solution</summary>
A fixed projective right Q_i is flat as a right module, so tensoring the augmented left resolution P→M with it is exact. A fixed projective left P_j is flat, so tensoring the augmented right resolution Q→N with it is exact. These two statements make the row and column comparison quotients acyclic. The finite-diagonal total-complex argument then identifies the two resolution computations of Tor without interchanging untyped left and right modules.
</details>

### HA-06-07 — Why finite diagonals matter

Explain why the acyclic-column total-complex proof terminates in each total degree.

<details><summary>Hint 1</summary>
First-quadrant degree n has only n+1 component positions.
</details>
<details><summary>Hint 2</summary>
Each subtraction moves the remaining component in one fixed direction.
</details>
<details><summary>Solution</summary>
The elimination removes the component at the smallest horizontal index for a cochain total cocycle, creating at most a component at the next index. Since the indices range only from zero to n, finitely many steps remove every component. The chain argument moves from the largest index downward. Without this bounded range, an infinite sequence of corrections need not define an element of the direct-sum total complex, so the proof would not justify acyclicity in that unbounded setting.
</details>

### HA-06-08 — Long exact directions

For 0→N′→N→N″→0 of right modules, state the portion of the Tor sequence reaching degree zero.

<details><summary>Hint 1</summary>
Homological connecting arrows lower degree.
</details>
<details><summary>Hint 2</summary>
Degree-zero Tor is ordinary tensor.
</details>
<details><summary>Solution</summary>
The relevant portion is Tor₁(N,M)→Tor₁(N″,M)→N′⊗M→N⊗M→N″⊗M→0. The connecting map starts at the quotient term's degree-one homology and lands in the submodule term's degree-zero homology. This is the same lift-and-differentiate construction as for complexes. It explicitly recovers right exactness at the final two tensor terms while retaining the possible obstruction to the first tensor injection.
</details>

### HA-06-09 — An infinite family

For R=k[ε]/(ε²), compute Ext²_R(k,k) and explain why a projective resolution of length one cannot exist.

<details><summary>Hint 1</summary>
Apply Hom into k to the periodic free resolution.
</details>
<details><summary>Hint 2</summary>
Every differential becomes zero and degree two is still k.
</details>
<details><summary>Solution</summary>
The Hom cochain complex has k in every nonnegative degree and zero differentials, so Ext² is k and is nonzero. A length-one projective resolution would produce a complex with no degree-two term and hence zero degree-two cohomology. Resolution independence would identify these conflicting answers, an impossibility. Therefore no such short projective resolution exists; the argument uses the proved invariant, not merely the length of one displayed resolution.
</details>

### HA-06-10 — Detecting projectivity

If Ext¹_R(M,L)=0 for every L, explain why taking L equal to the kernel of a free presentation proves M projective.

<details><summary>Hint 1</summary>
The long exact sequence makes a Hom restriction onto that kernel surjective.
</details>
<details><summary>Hint 2</summary>
Extend the identity of the kernel to obtain a retraction.
</details>
<details><summary>Solution</summary>
For 0→K→F→M→0, the sequence contains Hom(F,K)→Hom(K,K)→Ext¹(M,K). The last group vanishes, so id_K extends to a map F→K restricting to identity. This retracts the inclusion and splits the presentation. Hence M is a summand of free F and is projective. The universal vanishing hypothesis has supplied exactly the needed target K for this particular presentation.
</details>

### HA-06-11 — Detecting injectivity

If Ext¹_R(M,L)=0 for all left modules M, use left ideals to prove L injective.

<details><summary>Hint 1</summary>
Use M=R/J for a left ideal J.
</details>
<details><summary>Hint 2</summary>
The contravariant sequence gives extension of every map J→L.
</details>
<details><summary>Solution</summary>
The short exact sequence 0→J→R→R/J→0 gives Hom(R,L)→Hom(J,L)→Ext¹(R/J,L). Vanishing makes the first map onto, so every ideal map extends to R. Baer's criterion proves injectivity of L. The variable order is essential: the assumption concerns Ext with L fixed in its second position, whereas the projectivity criterion fixes its first position.
</details>

### HA-06-12 — Flatness from degree one

Suppose Tor₁^R(N,M)=0 for every right module N. Prove directly that tensoring any right-module injection with M is injective.

<details><summary>Hint 1</summary>
Take the quotient of that injection.
</details>
<details><summary>Hint 2</summary>
Use the degree-one connecting portion of its long exact sequence.
</details>
<details><summary>Solution</summary>
For an inclusion A→B with quotient N, exactness gives Tor₁(N,M)→A⊗M→B⊗M. The first group is zero by assumption, so the kernel of the second map is zero. This works for every injection and is precisely flatness of the left module M. The proof does not require finite generation, commutativity or a finite projective resolution; the long exact sequence and its sides already carry the necessary hypotheses.
</details>

## 9. Next connection

Tor and Ext now have independent resolution constructions, balance, natural long exact sequences and explicit nonvanishing examples. The next chapter identifies Ext¹ with equivalence classes of short exact extensions and proves how its group law corresponds to Baer sum.
`;export{e as default};