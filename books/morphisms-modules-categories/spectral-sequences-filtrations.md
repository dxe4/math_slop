
# Spectral Sequences and Filtrations

This chapter adapts the retained earlier spectral-sequence source, whose original identity and mathematics remain available. Read complexes, long exact sequences and homological dimension first. Differentials lower total degree; the filtration is increasing and preserved by the differential.


In **Project: Categorical Proof**, the Grothendieck spectral sequence appeared as a tool for computing a composite derived functor. This chapter develops the algebra underneath that tool: a filtration breaks a complex into layers, page differentials record how those layers interact, and convergence reconstructs a filtered version of the total homology. Precise indexing matters because it carries the source, target, and total degree of every differential.

## 13.1 Filtered complexes

An **increasing filtration by subcomplexes** on a chain complex $C_\bullet$ is a sequence

$$\cdots\subseteq F_{p-1}C_\bullet\subseteq F_pC_\bullet
\subseteq F_{p+1}C_\bullet\subseteq\cdots.$$

It is **exhaustive** if $\bigcup_pF_pC_n=C_n$ for every $n$, and **bounded in each total degree** if, for each $n$, one has $F_pC_n=0$ for $p\ll0$ and $F_pC_n=C_n$ for $p\gg0$. The associated graded complex is

$$\operatorname{gr}_pC_\bullet=F_pC_\bullet/F_{p-1}C_\bullet.$$

**Example 13.1 (stupid filtration).** Define

$$F_pC_n=
\begin{cases}
C_n,&n\le p,\\
0,&n>p.
\end{cases}$$

Because the differential lowers degree, $F_pC_\bullet$ is a subcomplex. The graded piece $\operatorname{gr}_pC_\bullet$ is concentrated in degree $p$. This simple filtration will recover the original differential as the first page differential.

Other truncation conventions occur in cohomological grading. A formula such as “$n\ge -p$” must be checked against the direction of the differential: for a homological complex it does not generally define a subcomplex.

## 13.2 The spectral sequence of a filtered complex

Write total degree as $n=p+q$. The initial page is

$$E^0_{p,q}=\operatorname{gr}_pC_{p+q},$$

with $d_0$ induced by the part of $d$ that preserves filtration degree. Hence

$$E^1_{p,q}=H_{p+q}(\operatorname{gr}_pC_\bullet).$$

For an exact description of later pages, set $Z_0^{p,n}=F_pC_n$ and, for $r\ge1$, set

$$Z_r^{p,n}=\{x\in F_pC_n:dx\in F_{p-r}C_{n-1}\}.$$

Then

$$E_r^{p,n-p}
=\frac{Z_r^{p,n}}
{Z_{r-1}^{p-1,n}+dZ_{r-1}^{p+r-1,n+1}}.$$

The differential sends the class of $x$ to the class of $dx$:

$$d_r:E_r^{p,q}\longrightarrow E_r^{p-r,q+r-1}.$$

This formula makes both filtration and total-degree changes visible. It also prevents a common error: the denominator must consist of classes already negligible on page $r$ and actual boundaries that land in the numerator.

**Theorem 13.2 (bounded convergence).** If the filtration is exhaustive and bounded in each total degree, then the spectral sequence converges to $H_*(C_\bullet)$. More precisely, with

$$F_pH_n(C)=\operatorname{im}\bigl(H_n(F_pC)\to H_n(C)\bigr),$$

there are isomorphisms

$$E_\infty^{p,n-p}\cong
F_pH_n(C)/F_{p-1}H_n(C).$$

*Proof orientation, completed by the representative argument below.* For fixed $n$, only finitely many filtration levels occur. The groups of representatives and indeterminacies therefore stabilize pagewise. A stabilized class is represented by a cycle in $F_pC_n$, while the stabilized denominator identifies cycles differing by a boundary and by a cycle from $F_{p-1}C_n$. That is exactly the displayed associated-graded quotient. The finite filtration avoids completion and derived-limit issues that appear for unbounded filtrations. $\square$


### Page differentials and the next-page theorem

The representative formula proves more than a list of possible groups. Its denominator lies in its numerator: an element of the lower Z-term has differential in F_(p−r), while a boundary in the second term is already a cycle in F_p. Define d_r by sending the class of x to that of dx in filtration p−r and total degree n−1. A change in the lower representative term changes dx by a boundary of the exact target denominator, and a change by a boundary leaves dx unchanged. Thus d_r is well-defined and its square is zero.

A d_r-cycle satisfies dx=u+dv with u in Z_(r−1) at filtration p−r−1 and v in Z_(r−1) at filtration p−1. Replace x by x−v, which is the same r-page class. Its differential now lies in F_(p−r−1), so it belongs to Z_(r+1). Conversely every Z_(r+1) representative has zero r-page differential. Hence these representatives give all cycles.

The representatives vanishing in the page homology are precisely
$$Z_r^{p-1,n}+dZ_r^{p+r,n+1}.$$
One containment is immediate: the first term was already zero on the old page, and the second consists of r-page boundaries. Conversely if x represents an r-page boundary, write x=dy+a+db with y in Z_r at filtration p+r, a in Z_(r−1) at filtration p−1, and b in Z_(r−1) at filtration p+r−1. Since db belongs to F_p, b also belongs to Z_r at filtration p+r. Moreover da=dx lies in F_(p−r−1), making a belong to Z_r at filtration p−1. This gives the displayed denominator. The quotient is exactly the formula for E_(r+1), proving E_(r+1)=H(E_r,d_r).

For r=1, the same formula is the kernel of the associated-graded differential modulo its image, yielding the stated E¹ page. These calculations establish existence and well-definedness of the pages directly, rather than assuming that any sequence of similarly indexed groups is a spectral sequence.

### A full bounded-convergence argument

Fix total degree n and filtration p. Choose r large enough that F_(p−r)C_(n−1)=0 and F_(p+r−1)C_(n+1)=C_(n+1), using the stated degreewise bounds. The numerator is then the actual cycles in F_pC_n. The first denominator term is the cycles in F_(p−1)C_n, and the second consists of all boundaries of C that lie in F_pC_n. The quotient maps onto the image of those cycles in H_n(C), modulo the image of the lower cycles. Its kernel is exactly the boundaries just removed. Thus it is F_pH_n/F_(p−1)H_n, proving the convergence comparison as an actual isomorphism. Finite filtration in degree n supplies exhaustiveness and separation and prevents an unresolved infinite-limit operation.

## 13.3 Exact couples

An **exact couple** is a cyclic diagram of graded abelian groups

$$
\begin{array}{ccc}
D & \xrightarrow{i} & D \\
\nwarrow^{k} & & \swarrow^{j} \\
& E &
\end{array}
$$

that is exact at each vertex. The composite $d=j\circ k$ satisfies $d^2=0$. Replacing $E$ by $H(E,d)$ and $D$ by $i(D)$ produces the derived exact couple; iteration produces the pages of a spectral sequence.

For a filtered complex, take $D_{p,q}=H_{p+q}(F_pC)$ and
$E_{p,q}=H_{p+q}(\operatorname{gr}_pC)$. The maps in the long exact sequence of

$$0\longrightarrow F_{p-1}C\longrightarrow F_pC
\longrightarrow\operatorname{gr}_pC\longrightarrow0$$

form the exact couple. This construction explains why the page differentials are successive connecting maps.


### Deriving an exact couple, with its three maps

For an exact couple D→D→E→D with maps i,j,k, define D′=i(D) and E′=ker(jk)/im(jk). The differential squares to zero because kj=0. Define i′ by restriction, j′(i(a))=[j(a)], and k′([e])=k(e). The first formula is well-defined: changing a by an element of ker i=im k changes j(a) by a differential boundary. A cycle e has jk(e)=0, so k(e) lies in ker j=im i, as required; boundaries map to zero under k.

These maps form an exact couple. If j′(i(a))=0, write j(a)=jk(e), so a−k(e) lies in im i and i(a) lies in im i′. If k′([e])=0, then e=j(a), and its class is j′(i(a)). If a′ belongs to D′ with i′(a′)=0, write a′=k(e); membership in im i gives jk(e)=0, so its source e is a cycle and a′ is in im k′. The reverse containments follow from the zero composites. This verifies every exactness position and justifies iterating the construction with the appropriate graded degrees.

## 13.4 Double complexes

A homological **double complex** has maps

$$d^h:C_{p,q}\to C_{p-1,q},\qquad
d^v:C_{p,q}\to C_{p,q-1}$$

with $(d^h)^2=(d^v)^2=0$ and $d^hd^v+d^vd^h=0$. Its total complex is

$$\operatorname{Tot}(C)_n=\bigoplus_{p+q=n}C_{p,q},
\qquad d=d^h+d^v.$$

For a first-quadrant double complex, or more generally one with only finitely many terms on each total diagonal, the column and row filtrations converge to the homology of the total complex. The column filtration has

$$E^1_{p,q}=H_q^v(C_{p,\bullet}),\qquad
E^2_{p,q}=H_p^h\!\left(H_q^v(C)\right),$$

while the row filtration reverses the order of horizontal and vertical homology. Without the bounded-diagonal condition, pagewise stabilization alone is not a convergence theorem.

**Worked example 13.3.** Put a copy of $\mathbb Z$ at each $(p,q)\in\{0,1\}^2$. Let both vertical maps be multiplication by $2$, let the horizontal map in row $q=0$ be multiplication by $2$, and let the horizontal map in row $q=1$ be multiplication by $-2$. The sign makes the square anticommute. The total complex is

$$0\longrightarrow\mathbb Z\xrightarrow{d_2}\mathbb Z^2
\xrightarrow{d_1}\mathbb Z\longrightarrow0,$$

where

$$d_2(c)=(2c,-2c),\qquad d_1(a,b)=2a+2b.$$

Thus

$$H_2=0,\qquad H_1\cong
\frac{\mathbb Z(1,-1)}{2\mathbb Z(1,-1)}
\cong\mathbb Z/2,\qquad H_0\cong\mathbb Z/2.$$

Vertically, each column has only $H_0\cong\mathbb Z/2$. The induced horizontal map is multiplication by $2$ modulo $2$, hence zero. The column spectral sequence therefore has two surviving $E^2$ terms, at $(0,0)$ and $(1,0)$, which detect $H_0$ and $H_1$ respectively.


### Worked example: a genuinely nonzero second differential

Take Z in total degrees three and two, generated by a,b, with da=2b. Give a filtration weight two and b weight zero. The filtration consists of spans of basis vectors with weight at most p and is preserved by d. The E⁰ entries are Z at (2,1) and (0,2). Their filtration-preserving differential is zero. The first differential is also zero because there is no group one filtration step away. Hence E² still has those entries.

The second differential sends a to 2b, from (2,1) to (0,2), with the declared bidegree. Its kernel is zero and cokernel is C₂. Thus E³ has only C₂ at (0,2), and all later differentials vanish. The total homology is likewise C₂ in degree two and zero in degree three. This example exhibits the page at which a differential lowering filtration by two becomes visible, rather than inferring collapse from the first zero differential.

## 13.5 Reading convergence correctly

The notation $E_r\Rightarrow H$ includes more than the fact that every entry eventually stops changing. It asserts a specified filtration on an abutment $H$ and an identification of $E_\infty$ with its associated graded. Even then, $E_\infty$ may not determine $H$ up to isomorphism: the graded pieces $\mathbb Z/2$ and $\mathbb Z/2$ could assemble as $\mathbb Z/4$ or as $\mathbb Z/2\oplus\mathbb Z/2$.

For first-quadrant double complexes, the finite number of terms on each total diagonal gives the required filtration automatically. For arbitrary abstract spectral sequences or unbounded filtered complexes, one must state an abutment and verify the relevant exhaustiveness, separation, completeness, or boundedness hypotheses.

## 13.6 Common errors

- **Equating stabilization with convergence.** Stabilized pages need a specified filtered abutment.
- **Forgetting the extension problem.** $E_\infty$ is an associated graded object, not usually the abutment itself.
- **Using a non-subcomplex filtration.** Check that the differential preserves every $F_pC$.
- **Ignoring signs in a double complex.** A square must anticommute so that $(d^h+d^v)^2=0$.
- **Switching row and column pages.** State which differential is taken first and track the resulting bidegrees.

## 13.7 Exercises

### Exercise 13.1

Prove the bounded-convergence statement in Theorem 13.2 at the level of representatives.

<details><summary>Hint 1</summary>
Choose a page beyond the filtration bounds in three adjacent total degrees.
</details>
<details><summary>Hint 2</summary>
Identify the stabilised numerator and both denominator terms.
</details>
<details><summary>Solution</summary>
Fix $n$ and $p$. Boundedness makes $F_{p-r}C_{n-1}=0$ for large $r$, so a class surviving every outgoing differential is eventually represented by an actual cycle $x\in F_pC_n$. On the denominator side, boundedness makes $F_{p+r-1}C_{n+1}=C_{n+1}$ for large $r$, so all boundaries lying in $F_pC_n$ are eventually identified, together with cycles already in $F_{p-1}C_n$. Therefore the stable quotient is

$$\frac{\{x\in F_pC_n:dx=0\}}
{\{x\in F_{p-1}C_n:dx=0\}
+\{dy:y\in C_{n+1},\,dy\in F_pC_n\}},$$

which is naturally $F_pH_n(C)/F_{p-1}H_n(C)$. $\square$
</details>

### Exercise 13.2

Compute both spectral sequences of the square double complex with $C_{p,q}=\mathbb Z$ for $p,q\in\{0,1\}$, vertical differential the identity, and horizontal differential zero.

<details><summary>Hint 1</summary>
Compute vertical and horizontal homology separately.
</details>
<details><summary>Hint 2</summary>
The vertical identity kills the row computation on the next page.
</details>
<details><summary>Solution</summary>
Taking vertical homology first kills each column, so the column spectral sequence is zero from $E^1$ onward. Taking horizontal homology first leaves all four copies of $\mathbb Z$ on the row $E^1$ page because the horizontal differential is zero. Its $d_1$ is induced by the vertical identity and maps each upper copy isomorphically to the copy below it. Hence the row spectral sequence becomes zero at $E^2$. Both converge to the zero homology of the total complex, but they reach that conclusion on different pages. $\square$
</details>

### Exercise 13.3

Show that every entry of a first-quadrant spectral sequence stabilizes. Explain why this fact alone is not a convergence theorem.

<details><summary>Hint 1</summary>
Track the source and target bidegrees as r grows.
</details>
<details><summary>Hint 2</summary>
An abutment and its filtration are additional data.
</details>
<details><summary>Solution</summary>
For fixed $(p,q)$, the source or target of any entering or leaving $d_r$ lies outside the first quadrant once $r$ is large, so $E_r^{p,q}$ stabilizes. Convergence additionally requires a specified filtered abutment $H$ and isomorphisms $E_\infty^{p,q}\cong\operatorname{gr}_pH_{p+q}$. An abstract collection of stabilized pages contains no such object or comparison map. Spectral sequences produced by first-quadrant double complexes have the needed finite filtration on total homology, but first-quadrant support by itself only proves stabilization. $\square$
</details>

### Exercise 13.4

Construct a filtered complex whose $E_\infty$ page has a nontrivial extension problem.

<details><summary>Hint 1</summary>
Put a nonsplit extension in one chain degree.
</details>
<details><summary>Hint 2</summary>
Filter by its kernel subgroup.
</details>
<details><summary>Solution</summary>
Let $C_0=\mathbb Z/4$ and $C_n=0$ for $n\ne0$, with zero differential. Give it the filtration

$$F_{-1}C_0=0,\qquad F_0C_0=2\mathbb Z/4,\qquad
F_1C_0=\mathbb Z/4.$$

The spectral sequence has no possible nonzero differentials and

$$E_\infty^{0,0}\cong\mathbb Z/2,\qquad
E_\infty^{1,-1}\cong\mathbb Z/2.$$

Its abutment is nevertheless $H_0(C)=\mathbb Z/4$, realizing the nonsplit extension

$$0\longrightarrow\mathbb Z/2\longrightarrow\mathbb Z/4
\longrightarrow\mathbb Z/2\longrightarrow0.$$

The same two graded pieces would not distinguish this from the split group. $\square$
</details>

### Exercise 13.5

Compute the spectral sequence of the stupid filtration from Example 13.1.

<details><summary>Hint 1</summary>
Each associated-graded complex has only one degree.
</details>
<details><summary>Hint 2</summary>
The original differential lowers filtration exactly once.
</details>
<details><summary>Solution</summary>
The associated graded is concentrated on $q=0$. Its internal differential $d_0$ is zero because the original differential lowers the filtration from $p$ to $p-1$. Thus

$$E^1_{p,0}=C_p,\qquad d_1=d_C,$$

and consequently $E^2_{p,0}=H_p(C)$. All $d_r$ for $r\ge2$ have targets off the $q=0$ row, so the sequence collapses at $E^2$ and abuts to $H_*(C)$. $\square$
</details>


### HA-12-06 — Changing coefficients changes a page

In the worked second-differential example da=2b, compare integer coefficients with reduction modulo two. State both the E² differential and total homology after reduction.

<details><summary>Hint 1</summary>
The filtration weights stay the same, but the differential coefficient changes.
</details>
<details><summary>Hint 2</summary>
Two is zero in the binary field.
</details>
<details><summary>Solution</summary>
Over integers, d₂ is multiplication by two, leaving C₂ at the target and zero at the source on E³. After reducing the entire complex modulo two, its differential is zero. Both E² entries are F₂ and d₂ is zero, so both survive. The actual total homology is F₂ in degrees three and two, exactly matching those survivors. There is no contradiction: changing coefficients has changed the chain map, not merely recoloured the same page.
</details>

### HA-12-07 — When the extension problem splits

Suppose the final filtration of an abelian group is finite and every associated-graded piece is free abelian. Prove the group is isomorphic to their direct sum and explain whether the isomorphism is canonical.

<details><summary>Hint 1</summary>
Each next filtration quotient is projective over Z.
</details>
<details><summary>Hint 2</summary>
Split the successive short exact sequences inductively.
</details>
<details><summary>Solution</summary>
At each filtration step, its free quotient has a section by projectivity. Thus the next subgroup is the direct sum of the previous subgroup and that quotient. Starting from zero and using the finite number of steps gives an isomorphism with the sum of all graded pieces. The section choices need not be unique, so the resulting decomposition is generally not canonical. With torsion graded pieces, this argument fails and the C₄ versus V₄ example shows a genuine unresolved extension.
</details>

### HA-12-08 — Commuting versus anticommuting squares

Given commuting horizontal and vertical differentials lowering p and q respectively, prove that replacing the vertical differential at (p,q) by minus one to the p-th power times it makes the total differential square zero.

<details><summary>Hint 1</summary>
A horizontal move changes p by one.
</details>
<details><summary>Hint 2</summary>
The two mixed composites therefore acquire opposite signs.
</details>
<details><summary>Solution</summary>
Vertical followed by horizontal has sign (−1)^p, while horizontal followed by vertical has sign (−1)^(p−1). The underlying commuting composites agree, so these signed mixed terms cancel. Each pure square was already zero and remains zero after scalar signs. Thus the total square vanishes. This verifies the sign insertion needed when a double complex is initially supplied with commuting squares rather than the anticommuting convention fixed in the chapter.
</details>

### HA-12-09 — Exact-couple degrees

For D_(p,q)=H_(p+q)(F_pC) and E_(p,q)=H_(p+q)(gr_pC), identify the degrees of i,j,k and of the first and second page differentials.

<details><summary>Hint 1</summary>
The inclusion raises filtration one without changing total homology degree.
</details>
<details><summary>Hint 2</summary>
The connecting map lowers both total degree and filtration by one.
</details>
<details><summary>Solution</summary>
The map i has bidegree (1,−1), j has degree (0,0), and k has degree (−1,0). Thus jk on the initial E¹ page has degree (−1,0). In the derived couple, j′ lifts an i-image back one step before applying j, so its degree is (−1,1), while k′ retains (−1,0). Their composite has degree (−2,1), matching d₂. In both cases the sum of the bidegrees is minus one, the required change in total homological degree.
</details>

### HA-12-10 — Invisible nonexhaustive data

Put Z in chain degree zero and give it the filtration F_p=0 for every p. Describe all pages and identify the failed convergence hypothesis.

<details><summary>Hint 1</summary>
Every associated-graded quotient is zero.
</details>
<details><summary>Hint 2</summary>
The union of the filtration never reaches the original group.
</details>
<details><summary>Solution</summary>
The associated graded, every page and every differential are zero, so the pages stabilise immediately. Yet the original homology is Z. The filtration is not exhaustive and fails the upper degreewise bound requiring F_pC₀=C₀ for sufficiently large p. Hence the bounded-convergence theorem does not apply. One cannot recover the unfiltered group from these zero pieces while ignoring that failed hypothesis. The example isolates an information loss in the filtration, separate from an extension problem between nonzero pieces.
</details>

## 13.8 Looking forward

Spectral sequences are useful only when their input, differentials, and convergence are controlled. In **Homological Dimension**, resolutions and Ext groups turn those pages into dimension bounds. In **Duality and Local Cohomology**, filtrations and derived functors organize local and global information.
