
# Spectral Sequences and Filtrations

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

*Proof sketch.* For fixed $n$, only finitely many filtration levels occur. The groups of representatives and indeterminacies therefore stabilize pagewise. A stabilized class is represented by a cycle in $F_pC_n$, while the stabilized denominator identifies cycles differing by a boundary and by a cycle from $F_{p-1}C_n$. That is exactly the displayed associated-graded quotient. The finite filtration avoids completion and derived-limit issues that appear for unbounded filtrations. $\square$

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

**Solution.** Fix $n$ and $p$. Boundedness makes $F_{p-r}C_{n-1}=0$ for large $r$, so a class surviving every outgoing differential is eventually represented by an actual cycle $x\in F_pC_n$. On the denominator side, boundedness makes $F_{p+r-1}C_{n+1}=C_{n+1}$ for large $r$, so all boundaries lying in $F_pC_n$ are eventually identified, together with cycles already in $F_{p-1}C_n$. Therefore the stable quotient is

$$\frac{\{x\in F_pC_n:dx=0\}}
{\{x\in F_{p-1}C_n:dx=0\}
+\{dy:y\in C_{n+1},\,dy\in F_pC_n\}},$$

which is naturally $F_pH_n(C)/F_{p-1}H_n(C)$. $\square$

### Exercise 13.2

Compute both spectral sequences of the square double complex with $C_{p,q}=\mathbb Z$ for $p,q\in\{0,1\}$, vertical differential the identity, and horizontal differential zero.

**Solution.** Taking vertical homology first kills each column, so the column spectral sequence is zero from $E^1$ onward. Taking horizontal homology first leaves all four copies of $\mathbb Z$ on the row $E^1$ page because the horizontal differential is zero. Its $d_1$ is induced by the vertical identity and maps each upper copy isomorphically to the copy below it. Hence the row spectral sequence becomes zero at $E^2$. Both converge to the zero homology of the total complex, but they reach that conclusion on different pages. $\square$

### Exercise 13.3

Show that every entry of a first-quadrant spectral sequence stabilizes. Explain why this fact alone is not a convergence theorem.

**Solution.** For fixed $(p,q)$, the source or target of any entering or leaving $d_r$ lies outside the first quadrant once $r$ is large, so $E_r^{p,q}$ stabilizes. Convergence additionally requires a specified filtered abutment $H$ and isomorphisms $E_\infty^{p,q}\cong\operatorname{gr}_pH_{p+q}$. An abstract collection of stabilized pages contains no such object or comparison map. Spectral sequences produced by first-quadrant double complexes have the needed finite filtration on total homology, but first-quadrant support by itself only proves stabilization. $\square$

### Exercise 13.4

Construct a filtered complex whose $E_\infty$ page has a nontrivial extension problem.

**Solution.** Let $C_0=\mathbb Z/4$ and $C_n=0$ for $n\ne0$, with zero differential. Give it the filtration

$$F_{-1}C_0=0,\qquad F_0C_0=2\mathbb Z/4,\qquad
F_1C_0=\mathbb Z/4.$$

The spectral sequence has no possible nonzero differentials and

$$E_\infty^{0,0}\cong\mathbb Z/2,\qquad
E_\infty^{1,-1}\cong\mathbb Z/2.$$

Its abutment is nevertheless $H_0(C)=\mathbb Z/4$, realizing the nonsplit extension

$$0\longrightarrow\mathbb Z/2\longrightarrow\mathbb Z/4
\longrightarrow\mathbb Z/2\longrightarrow0.$$

The same two graded pieces would not distinguish this from the split group. $\square$

### Exercise 13.5

Compute the spectral sequence of the stupid filtration from Example 13.1.

**Solution.** The associated graded is concentrated on $q=0$. Its internal differential $d_0$ is zero because the original differential lowers the filtration from $p$ to $p-1$. Thus

$$E^1_{p,0}=C_p,\qquad d_1=d_C,$$

and consequently $E^2_{p,0}=H_p(C)$. All $d_r$ for $r\ge2$ have targets off the $q=0$ row, so the sequence collapses at $E^2$ and abuts to $H_*(C)$. $\square$

## 13.8 Looking forward

Spectral sequences are useful only when their input, differentials, and convergence are controlled. In **Homological Dimension**, resolutions and Ext groups turn those pages into dimension bounds. In **Duality and Local Cohomology**, filtrations and derived functors organize local and global information.
