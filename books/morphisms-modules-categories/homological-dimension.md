
# Homological Dimension

This semantic reading adapts the retained numbered source, whose original mathematical content and learner identity remain registered. Read Tor/Ext and extension classification first. Rings are associative and nonzero with identity; local commutative hypotheses are stated separately.


In **Derived Functors: Tor and Ext**, we defined $\operatorname{Ext}$ and $\operatorname{Tor}$ using resolutions. A natural question arises: how long must these resolutions be? The **homological dimension** of a ring or module measures the length of the shortest projective or injective resolution. This chapter develops projective dimension, injective dimension, global dimension, and their interactions with ring-theoretic properties.

## 14.1 Projective and injective dimension

Let $R$ be a ring and $M$ a left $R$-module. The **projective dimension** $\operatorname{pd}_{R}(M)$ is the minimum length $n$ of a projective resolution

$$0 \to P_{n} \to P_{n-1} \to \cdots \to P_{0} \to M \to 0,$$

or $\infty$ if no finite resolution exists. The **injective dimension** $\operatorname{id}_{R}(M)$ is defined dually using injective resolutions.

**Example 14.1.** A module $M$ is projective if and only if $\operatorname{pd}_{R}(M) = 0$. A module is injective if and only if $\operatorname{id}_{R}(M) = 0$.

**Example 14.2.** Over a principal ideal domain, every submodule of a free module is free. Hence every module has a projective resolution of length at most $1$: $0 \to P_{1} \to P_{0} \to M \to 0$. Thus $\operatorname{pd}_{R}(M) \leq 1$ for all $M$.

**Worked example 14.3.** For $|n|\ge2$, compute $\operatorname{pd}_{\mathbb{Z}}(\mathbb{Z}/n\mathbb{Z})$.

The resolution $0 \to \mathbb{Z} \xrightarrow{\times n} \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \to 0$ shows $\operatorname{pd}_{\mathbb{Z}}(\mathbb{Z}/n\mathbb{Z}) \leq 1$. It cannot be $0$ because $\mathbb{Z}/n\mathbb{Z}$ is not projective (it is not torsion-free). Hence its projective dimension is $1$. For $n=\pm1$ the quotient is zero, and for $n=0$ it is $\mathbb Z$; both are projective.


### Dimension shifting proves finite-length criteria

For a projective resolution of M, write K₀=M and K_r for its r-th kernel. The short exact sequence from K_(r+1) into P_r onto K_r gives
$$\operatorname{Ext}^j_R(K_{r+1},L)\cong
\operatorname{Ext}^{j+1}_R(K_r,L),\qquad j\ge1,$$
because positive Ext with projective P_r in its first position vanishes. Iterating shows Ext¹(K_n,L)=Ext^(n+1)(M,L). Therefore pd M≤n exactly when Ext^(n+1)(M,L) vanishes for every L. The forward implication uses a finite resolution. For the converse, the degree-one projectivity criterion makes K_n projective and truncates the displayed resolution. This also proves every higher Ext then vanishes.

Dually, successive cokernels in an injective resolution prove id L≤n exactly when Ext^(n+1)(M,L) vanishes for every M. The argument uses the second Ext variable's exact sequence and the degree-one injectivity criterion.

Define flat dimension by the shortest flat resolution, or infinity. The same kernel shifting with Tor gives flat dimension of a left M at most n exactly when Tor_(n+1)(N,M)=0 for every right N. A projective resolution supplies the kernels; vanishing makes K_n flat by the proved degree-one criterion and gives a flat truncation. Conversely a finite flat resolution and its long exact sequences force the higher Tor vanishing by induction. The statements keep the argument positions and module sides explicit.

### Schanuel's lemma controls the first kernel

If two projective presentations of M have kernels K,K′ and sources P,P′, form their pullback over M. Projection onto P′ has kernel K and splits because P′ is projective; projection onto P has kernel K′ and also splits. Thus
$$K\oplus P'\cong K'\oplus P.$$
This proves the stable relation between the kernels without assuming they are themselves projective. In particular if one kernel is projective, so is the other, because it is a summand of the isomorphic projective direct sum. The Ext criterion generalises that invariance to all higher kernels.

### The PID bound also covers infinite free rank

To justify the earlier PID example for arbitrary modules, well-order a basis of a free module F. Intersect a submodule K with the spans of the successive initial basis segments. Each successor quotient embeds, by the new coordinate, into the PID R and is therefore a principal ideal, free of rank zero or one. The sequence onto that quotient splits. Choose a lifted generator whenever the ideal is nonzero. At limit stages every vector has finite support and already lies in an earlier span. Transfinite induction therefore expresses K as the direct sum of these lifted rank-one generators. This proves submodules of arbitrary free PID modules are free, not just the finite-rank case. Applying a free cover gives every module a projective resolution of length at most one.

## 14.2 Global dimension

The **left global dimension** $\operatorname{lgldim}(R)$ of a ring $R$ is the supremum of $\operatorname{pd}_{R}(M)$ over all left $R$-modules $M$. The **right global dimension** is defined similarly using right modules. For commutative rings, the two coincide and we write $\operatorname{gldim}(R)$.

**Theorem 14.4 (Ext characterisations).** For a ring $R$, the following are equal:

1. $\operatorname{lgldim}(R)$;
2. $\sup\{\operatorname{id}_{R}(M) : M \in R\text{-}\mathbf{Mod}\}$;
3. $\sup\{n : \operatorname{Ext}^{n}_{R}(M,N) \neq 0 \text{ for some } M,N\}$;
*Proof.* For each nonnegative integer n, every projective dimension is at most n exactly when Ext^(n+1)(M,L) vanishes for every pair, by the proved kernel criterion. The injective criterion says that this is also exactly when every injective dimension is at most n. These identical finite upper-bound conditions identify the extended suprema, including infinity. Since R is nonzero, degree-zero Hom of R with itself is nonzero, so the degree supremum includes zero. The same vanishing test identifies that supremum as well. ∎

Likewise the flat-dimension criterion identifies the weak global dimension through Tor:

$$\operatorname{w.gl.dim}(R)
=\sup\{n:\operatorname{Tor}^R_n(M,N)\ne0
\text{ for some right }M\text{ and left }N\}$$

is the **weak global dimension**, the supremum of flat dimensions. It is bounded above by the corresponding projective global dimensions and can be strictly smaller. For example, an infinite product of fields is von Neumann regular, so every module is flat and its weak global dimension is $0$, but it is not semisimple Artinian and not every module is projective.

## 14.3 Theorems of Syzygies

**Theorem 14.5 (Hilbert syzygy theorem; imported).** If $k$ is a field, then $\operatorname{gldim}(k[x_{1}, \dots, x_{n}]) = n$.

The Koszul complex on $x_1,\ldots,x_n$ resolves the residue module $k$. Applying $\operatorname{Hom}_R(-,k)$ makes every differential zero, so

$$\operatorname{Ext}^n_R(k,k)\cong k\ne0.$$

Thus $\operatorname{pd}_R(k)=n$ and the global dimension is at least $n$. The upper bound for all modules is the substantive imported part. Polynomial extension raises this dimension by one in this regular setting; it does not preserve it.

**Corollary 14.6.** Every finitely generated module over $k[x_{1}, \dots, x_{n}]$ has a finite free resolution of length at most $n$.

The finite-free conclusion includes a freeness input for finite projectives over polynomial rings: the Quillen–Suslin theorem is a named import here. The projective global-dimension bound alone supplies a projective resolution; replacing its finite projectives by free modules requires that additional statement. Gröbner-based methods construct resolutions under their own stated algorithmic hypotheses.

## 14.4 Regular local rings

In this section $(R,\mathfrak m)$ is a commutative Noetherian local ring. A sequence $x_1,\ldots,x_r$ in $R$ is **regular** if each $x_i$ is a non-zero-divisor on $R/(x_1,\ldots,x_{i-1})$ and $(x_1,\ldots,x_r)\ne R$. If $M$ is a nonzero finitely generated $R$-module, an **$M$-regular sequence** is a sequence $x_1,\ldots,x_r\in\mathfrak m$ such that multiplication by $x_i$ is injective on $M/(x_1,\ldots,x_{i-1})M$ and $M/(x_1,\ldots,x_r)M\ne0$. The **depth** $\operatorname{depth}_R(M)$ is the maximum length of an $M$-regular sequence. The ring $R$ is **regular** if

$$\dim_{R/\mathfrak m}(\mathfrak m/\mathfrak m^2)=\dim R,$$

and it is a **complete intersection** if its completion is a quotient of a regular local ring by an ideal generated by a regular sequence.

**Theorem 14.7 (Auslander--Buchsbaum--Serre; imported).** A commutative Noetherian local ring $R$ is regular if and only if $\operatorname{gldim}(R) < \infty$, in which case $\operatorname{gldim}(R) = \dim(R)$.

The Koszul resolution supplies one direction of the dimension calculation after a regular system of parameters is known. The converse and the passage from the residue field to all modules are deep parts of the imported theorem.

## 14.5 Gorenstein and Cohen-Macaulay rings

A Noetherian local ring $R$ is **Gorenstein** if it has finite injective dimension as a module over itself: $\operatorname{id}_{R}(R) < \infty$. It is **Cohen-Macaulay** if $\operatorname{depth}(R) = \dim(R)$.

**Theorem 14.8 (imported structural implications).** Regular local rings are Gorenstein, and Gorenstein local rings are Cohen--Macaulay. These are Stacks Project Lemmas 47.21.3 ([Tag 0AWX](https://stacks.math.columbia.edu/tag/0AWX)) and 47.21.2 ([Tag 0DW8](https://stacks.math.columbia.edu/tag/0DW8)).

The hierarchy is

$$\text{regular}\Rightarrow\text{complete intersection}\Rightarrow\text{Gorenstein}\Rightarrow\text{Cohen--Macaulay}.$$

For the definition in Section 14.4, the first implication uses preservation of regularity under completion (Stacks Project Lemma 15.44.4, [Tag 07NU](https://stacks.math.columbia.edu/tag/07NU)) and the empty regular sequence. For the second, Lemma 47.21.8 ([Tag 0DWA](https://stacks.math.columbia.edu/tag/0DWA)) makes the completed quotient Gorenstein, and Lemma 47.21.9 ([Tag 0BJL](https://stacks.math.columbia.edu/tag/0BJL)) transfers that property across completion. The final implication is Tag 0DW8. These exact imports replace a blanket appeal to a hierarchy whose hypotheses might otherwise be unclear.


### Koszul exactness from a regular sequence

For a commutative ring and a regular sequence x₁,…,x_d, its Koszul complex is a finite free resolution of the quotient. This can be proved by induction using the cone already constructed in Chapter 4. Start with R in degree zero. Adjoining x_r forms the cone of multiplication by x_r on the previous Koszul complex. Its long exact sequence leaves in degree zero the quotient by x_r and in degree one the kernel of that multiplication on the previous quotient. Regularity makes the latter zero, and all other degrees vanish inductively. The cone terms are finite free, so the induction proves a resolution, not just a complex with square-zero differential.

For a regular system of parameters in a Noetherian regular local ring, regularity of that sequence follows from the explicit associated-graded structure theorem imported and applied in Commutative Algebra. All its entries lie in the maximal ideal. Applying Hom into the residue field makes the Koszul differentials zero and leaves a nonzero top copy of that field. Hence the residue module has projective dimension exactly d. The general upper bound for every module in the Auslander–Buchsbaum–Serre statement remains the named imported theorem; the explicit resolution here proves the residue-field calculation and its lower bound.

### Minimal resolutions over a Noetherian local ring

For a finite module M, choose a basis of M modulo the maximal ideal and lift it to a minimal finite free surjection. Its kernel lies in the maximal ideal times the free module, because the residue map is an isomorphism. Noetherianity makes that kernel finite. Repeat the same construction on every kernel, obtaining a free resolution with all differential entries in the maximal ideal.

Tensoring with the residue field makes every differential zero. Therefore the rank of its n-th free term equals the residue-field dimension of Tor_n(k,M). If pd M≤d, the higher Tor groups vanish, forcing every free term beyond degree d to be zero; conversely a resolution terminating there gives that dimension bound. Thus the minimal resolution detects the exact projective dimension, including infinity. This argument uses finite generation and Noetherianity at every kernel step; those are additional hypotheses beyond existence of arbitrary projective resolutions.

## 14.6 Common errors

- **Confusing projective dimension with minimal number of generators.** A module generated by $n$ elements need not have projective dimension $\leq n$. The syzygies can grow.
- **Assuming global dimension is left-right symmetric.** For noncommutative rings, $\operatorname{lgldim}(R)$ and $\operatorname{rgldim}(R)$ can differ. “Noetherian” must itself be specified on the left and right, and it does not justify silently identifying the two dimensions. For commutative rings the two module-side conventions coincide.
- **Ignoring the Noetherian hypothesis.** The Auslander-Buchsbaum-Serre theorem requires Noetherianness. Non-Noetherian local rings can have infinite global dimension without being singular in any geometric sense.
- **Confusing depth and dimension.** Depth is the length of a maximal regular sequence; dimension is the Krull dimension. They coincide for Cohen-Macaulay rings but not in general.

## 14.7 Exercises

### Exercise 14.1

Compute $\operatorname{gldim}(\mathbb{Z})$.

<details><summary>Hint 1</summary>
Use the proved infinite-rank PID submodule theorem for an upper bound.
</details>
<details><summary>Hint 2</summary>
A nonzero finite cyclic module is not projective.
</details>
<details><summary>Solution</summary>
$\mathbb{Z}$ is a PID, so every submodule of a free module is free. Hence every module has a projective resolution of length at most $1$. For any $|n|\ge2$, the module $\mathbb{Z}/n\mathbb{Z}$ has projective dimension $1$, so $\operatorname{gldim}(\mathbb{Z}) = 1$. $\square$
</details>

### Exercise 14.2

Show that $\operatorname{gldim}(R \times S) = \max(\operatorname{gldim}(R), \operatorname{gldim}(S))$.

<details><summary>Hint 1</summary>
Use the two central idempotents of the product ring.
</details>
<details><summary>Hint 2</summary>
Resolutions decompose componentwise.
</details>
<details><summary>Solution</summary>
An $R \times S$-module is a pair $(M, N)$ with $M$ an $R$-module and $N$ an $S$-module. A projective resolution of $(M, N)$ is a pair of projective resolutions of $M$ and $N$. Hence $\operatorname{pd}_{R \times S}(M, N) = \max(\operatorname{pd}_{R}(M), \operatorname{pd}_{S}(N))$. Taking suprema gives the result. $\square$
</details>

### Exercise 14.3

Prove that if $R$ is a regular local ring of dimension $n$, then the Koszul complex on a regular system of parameters is a free resolution of $R/\mathfrak{m}$.

<details><summary>Hint 1</summary>
Induct on the regular sequence using its multiplication cone.
</details>
<details><summary>Hint 2</summary>
The final quotient is the residue module.
</details>
<details><summary>Solution</summary>
Let $x_{1}, \dots, x_{n}$ be a regular system of parameters. The Koszul complex $K(x_{1}, \dots, x_{n})$ is a complex of free $R$-modules of length $n$. Since $x_{1}, \dots, x_{n}$ is a regular sequence, the Koszul complex is exact except in degree $0$, where $H_{0} = R/(x_{1}, \dots, x_{n}) = R/\mathfrak{m}$. Hence it is a free resolution. $\square$
</details>

### Exercise 14.4

State an Ext-vanishing characterization of a commutative Noetherian local Gorenstein ring and identify the imported step.

<details><summary>Hint 1</summary>
Distinguish the definition using self-injective dimension from its residue-field test.
</details>
<details><summary>Hint 2</summary>
The equivalence is the precisely cited imported Bass theorem.
</details>
<details><summary>Solution</summary>
Writing $k=R/\mathfrak m$, the characterization is

$$R\text{ is Gorenstein}\quad\Longleftrightarrow\quad
\operatorname{Ext}^i_R(k,R)=0\text{ for all }i\gg0.$$

This is Stacks Project Lemma 47.21.5 ([Tag 0BJI](https://stacks.math.columbia.edu/tag/0BJI)). Its proof passes through finite self-injective dimension, so the equivalence is an imported Bass theorem rather than a consequence of one displayed Ext computation. $\square$
</details>

### Exercise 14.5

Compute $\operatorname{pd}_{k[x,y]}(k)$, where $k$ is a field and $k$ is the module with $x$ and $y$ acting as zero.

<details><summary>Hint 1</summary>
Check the two-variable Koszul resolution.
</details>
<details><summary>Hint 2</summary>
Hom into k makes its differentials zero and retains its top term.
</details>
<details><summary>Solution</summary>
The Koszul complex $0 \to k[x,y] \xrightarrow{(y, -x)} k[x,y]^{2} \xrightarrow{(x, y)} k[x,y] \to k \to 0$ is a free resolution of length $2$, so the projective dimension is at most $2$. Applying $\operatorname{Hom}_{k[x,y]}(-,k)$ makes both differentials zero because $x$ and $y$ act trivially on $k$. Hence $\operatorname{Ext}^{2}_{k[x,y]}(k,k)\cong k\ne0$, proving the lower bound and therefore $\operatorname{pd}_{k[x,y]}(k)=2$. $\square$
</details>


### HA-09-06 — A higher vanishing test

Suppose Ext³_R(M,L)=0 for every left module L. Prove pd M≤2 and explain why every higher Ext then vanishes as well.

<details><summary>Hint 1</summary>
Shift twice to Ext¹ of the second kernel in a projective resolution.
</details>
<details><summary>Hint 2</summary>
Use the degree-one projectivity criterion on that kernel.
</details>
<details><summary>Solution</summary>
The two short exact projective-kernel sequences identify Ext³(M,L) with Ext¹(K₂,L). Universal vanishing makes K₂ projective. The sequence from K₂ into P₁ into P₀ onto M is therefore a length-two projective resolution. Computing Ext from it gives zero in every degree above two. The proof does not require any finite-generation assumption or infer the bound merely from one isolated target module's vanishing.
</details>

### HA-09-07 — Two different first kernels

Compare the presentations Z→C₆ and Z²→C₆, where the second sends (a,b) to a modulo six. Verify Schanuel's stable rank identity.

<details><summary>Hint 1</summary>
The kernels are 6Z and 6Z⊕Z.
</details>
<details><summary>Hint 2</summary>
Add the opposite free source to each kernel.
</details>
<details><summary>Solution</summary>
The first kernel has rank one and the second rank two. Schanuel gives the first kernel plus Z² isomorphic to the second kernel plus Z, each free of rank three. The kernel ranks themselves need not agree because the presentations have different free-source ranks. The pullback construction proves the stable identity while preserving the quotient maps, rather than asserting invariance of an unqualified kernel module.
</details>

### HA-09-08 — A singular zero-dimensional ring

For R=k[ε]/(ε²), determine the projective dimension of k and compare the local dimension and embedding dimension.

<details><summary>Hint 1</summary>
The periodic minimal resolution has one free generator in every degree.
</details>
<details><summary>Hint 2</summary>
Every prime contains the nilpotent ε.
</details>
<details><summary>Solution</summary>
The previously computed Tor_n(k,k)=k in every degree prevents any finite projective resolution, so pd k is infinite. The only prime is the maximal ideal (ε), giving Krull dimension zero. That maximal ideal modulo its square has k-dimension one, so embedding dimension is one. The ring is not regular local by its definition. This conclusion uses explicit invariants; the imported general regularity/global-dimension theorem is consistent with it but is not needed to produce the example.
</details>

### HA-09-09 — Flat and projective dimensions differ

Compute the flat and projective dimensions of Q over Z, and describe why some Ext¹(Q,L) must be nonzero.

<details><summary>Hint 1</summary>
Q is flat but not projective by Chapter 2.
</details>
<details><summary>Hint 2</summary>
The proved PID bound gives a length-one resolution of every abelian group.
</details>
<details><summary>Solution</summary>
Flatness gives flat dimension zero. Nonprojectivity gives positive projective dimension, while the PID bound gives at most one, so its projective dimension is exactly one. The Ext criterion then ensures Ext¹(Q,L) is nonzero for some L. More concretely, take the kernel K of a free surjection onto Q. That extension is nonsplit, since a split one would make Q projective, so its Ext¹(Q,K) class is nonzero by the extension theorem. The two dimensions measure different resolution classes.
</details>

### HA-09-10 — Cyclic but not finitely presented

Let R=k[x₁,x₂,…] and I be the ideal generated by all variables. Prove R/I is not finitely presented, using Schanuel's lemma.

<details><summary>Hint 1</summary>
I is not finitely generated; a finite list of its polynomials involves only finitely many variables.
</details>
<details><summary>Hint 2</summary>
Compare its one-generator surjection with a hypothetical finite presentation.
</details>
<details><summary>Solution</summary>
Any finite list of elements of I uses finitely many variables. Setting those variables to zero kills their generated ideal but leaves a later variable nonzero, so the list cannot generate I. If R/I had a finite presentation with finite free source P and finite kernel K, compare it with 0→I→R→R/I→0. Schanuel gives I⊕P≅K⊕R, a finitely generated module. Projecting onto its summand I would make I finitely generated, a contradiction. Thus the cyclic quotient is not finitely presented. Noetherianity in the minimal-finite-resolution construction cannot be dropped solely because the first module is finite.
</details>

## 14.8 Looking forward

Homological dimension connects ring theory, algebraic geometry, and representation theory. In **Duality and Local Cohomology**, Gorenstein and Cohen--Macaulay hypotheses will control the shape of local duality.
