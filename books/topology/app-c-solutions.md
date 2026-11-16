# Appendix C — Additional selected solutions {#sec-topology-solutions}

## Closure through neighborhoods

To prove $x\in\overline A$ exactly when every neighborhood of $x$ meets $A$,
suppose first that some open neighborhood misses $A$. Its closed complement
contains $A$ but not $x$, so $x$ is not in the smallest closed superset.
Conversely, if $x\notin\overline A$, the open complement of $\overline A$ is a
neighborhood of $x$ disjoint from $A$.

## Compact-to-Hausdorff bijection

Let $f:X\to Y$ be a continuous bijection, with $X$ compact and $Y$ Hausdorff.
For closed $C\subseteq X$, the set $C$ is compact; its image is compact and
therefore closed in $Y$. Thus $f$ is a closed map. The inverse image under
$f^{-1}$ of closed $C$ is $f(C)$, which is closed, so the inverse is continuous.

## Circle homology

Give the circle one vertex and one oriented edge whose endpoints are that
vertex. The boundary map $C_1\to C_0$ is zero. There are no two-cells, so
$B_1=0$ and $H_1\cong\mathbb Z$. In degree zero, quotienting $C_0$ by edge
boundaries still leaves one copy of $\mathbb Z$, recording one component.

## Euler characteristic cancellation

Over a field, write
$\dim C_k=\dim B_{k-1}+\dim H_k+\dim B_k$ using cycles and rank–nullity.
In the alternating sum, every boundary dimension appears twice with opposite
sign. What remains is $\sum_k(-1)^k\dim H_k$.

## Mayer–Vietoris sphere shift

Cover $S^n$ by two open sets deforming to the hemispheres. Both are
contractible, while their intersection deforms to $S^{n-1}$. In positive
reduced degrees, all terms from the two pieces vanish, so exactness makes the
connecting map
$\widetilde H_k(S^n)\to\widetilde H_{k-1}(S^{n-1})$ an isomorphism.

## Künneth for a torus

Over a field, $S^1$ has Betti vector $(1,1)$. Convolution gives
$(1,1)*(1,1)=(1,2,1)$ for $S^1\times S^1$. The alternating sum is zero,
agreeing with multiplicativity of Euler characteristic.

## Sign monodromy on a circle

For a one-dimensional rational local system with $T=-1$, the cellular boundary
is $T-I=-2$. It is an isomorphism of $\mathbb Q$, so both its kernel and
cokernel vanish. Thus twisted $H_1$ and $H_0$ are zero.

## Persistence changed task: calculate the composite {#sec-topology-persistence-composite-solution}

This is the complete key to the
[changed filtration task in Chapter 22](22-computational-persistence.md#sec-topology-persistence-composite-task).
All homology here is ordinary, unreduced homology over $\mathbb F_2$.
Use the chapter's vertex order $(0,1,2,3,4)$, edge order
$(01,12,02,03,34,04)$ and cycles

$$
a=e_{01}+e_{12}+e_{02},
\qquad
b=e_{03}+e_{34}+e_{04}.
$$

These calculations use actual inclusion images of those chains; their
coordinate labels are not choices that can be swapped independently from
stage to stage.

### 1. Counts, cycles and quotients {#sec-topology-persistence-composite-spaces}

The connected initial graph has five vertices and five edges. At $1$ it has
six edges and still no faces. At $2$ exactly one face is present. Thus the
simplex counts are

$$
(5,5,0),\quad(5,6,0),\quad(5,6,1).
$$

The boundary $\partial_1$ has rank four at every stage, by the explicit tree
and boundary matrix in the chapter. The ranks of $\partial_2$ are $0,0,1$.
Both choices of the final face therefore give

$$
(\beta_0,\beta_1,\beta_2)
=(1,1,0),\quad(1,2,0),\quad(1,1,0).
$$

Indeed, $\beta_1=n_1-4-\operatorname{rank}\partial_2$. A present face has
a nonzero boundary, so its one-dimensional $C_2$ has zero boundary kernel:
$\beta_2=0$. No higher simplices are present.

At $0$, $Z_1=\operatorname{span}(a)$ and $B_1=0$. At $1$,
$Z_1=\operatorname{span}(a,b)$ and $B_1=0$. Use bases $([a])$ and
$([a],[b])$ for those first two groups. The independent vectors $a,b$ are
cycles with disjoint edge supports, not boundaries of absent faces.

If face $A$ is added at $2$, then
$B_1=\operatorname{span}(a)$ while $Z_1=\operatorname{span}(a,b)$.
The last quotient has basis $([b])$. If face $B$ is added instead, its
boundary space is $\operatorname{span}(b)$ and the last quotient has
basis $([a])$. The cycle space is unchanged; the two different quotients
kill different lines.

### 2. Fill $A$: the old class dies {#sec-topology-persistence-composite-fill-a}

With columns denoting images of domain basis vectors, the first inclusion
has matrix

$$
I_{01}=\begin{pmatrix}1\\0\end{pmatrix},
$$

because the old class $[a]$ reaches the first vector of the middle basis.
The second inclusion sends
$u[a]+v[b]$ to $v[b]$, with matrix

$$
P_A=\begin{pmatrix}0&1\end{pmatrix}.
$$

Both adjacent maps have rank one, but their composite is

$$
P_A I_{01}
=\begin{pmatrix}0&1\end{pmatrix}
 \begin{pmatrix}1\\0\end{pmatrix}
=(0),
$$

of rank zero. The first image is precisely the line that the second map
kills. The explicit generators give

$$
H_1:\ \{[0,2),[1,\infty)\}.
$$

The chain $a$ is born at $0$ and becomes a boundary at $2$. The chain $b$
is born with edge $04$ at $1$ and remains a nonzero class in the declared
constant final complex. It is not necessary to infer those endpoints from
dimensions alone: the two displayed maps verify both lifetimes.

### 3. Fill $B$: the old class survives {#sec-topology-persistence-composite-fill-b}

Keep the same middle basis and the same matrix $I_{01}$. The last quotient
now has basis $([a])$, and the second map is

$$
P_B=\begin{pmatrix}1&0\end{pmatrix}.
$$

Its rank is still one. This time

$$
P_B I_{01}
=\begin{pmatrix}1&0\end{pmatrix}
 \begin{pmatrix}1\\0\end{pmatrix}
=(1),
$$

so the composite has rank one. The intervals are

$$
H_1:\ \{[0,\infty),[1,2)\}.
$$

The old $a$ survives, whereas the new $b$ becomes a boundary at $2$.
Both filtrations have dimensions $1,2,1$ in degree one and adjacent ranks
$1,1$. Those data do not determine how the first image meets the second
kernel. Their composite ranks $0$ and $1$ are different. Under compatible
changes of basis, the matrix of the composite is multiplied by invertible
matrices on the left and right, so its rank cannot change. The two modules
therefore cannot be isomorphic.

At all three stages the complex is connected. In ordinary degree zero,
use the class of vertex $0$ as basis. Each inclusion sends that class to
itself, so both $H_0$ interval lists are $\{[0,\infty)\}$. Both have
$H_2=0$ and no positive-duration intervals in higher degrees.

### 4. A finite observation is not a declared future {#sec-topology-persistence-composite-future}

The infinite endpoints above are exact for the stated constant extension.
If only stages $0,1,2$ are observations, another increasing continuation is
possible: at time $3$, add the missing face and then hold the result constant.

- After filling $A$ at $2$, add $B$ at $3$. The intervals become
  $\{[0,2),[1,3)\}$.
- After filling $B$ at $2$, add $A$ at $3$. The intervals become
  $\{[0,3),[1,2)\}$.

The observations, vector spaces, adjacent maps and composite through $2$
are unchanged. The later filling kills the remaining one-cycle. Thus those
finite observations do not force an infinite $H_1$ endpoint. Constant
extension is a different possible future; it must be declared rather than
inferred from a picture or from a missing observation.

Ordinary $H_0$ has a separate constraint. Define an augmentation on
zero-chains by

$$
\epsilon\left(\sum_i c_i v_i\right)=\sum_i c_i\in\mathbb F_2.
$$

Every edge boundary is $v_i+v_j$, whose augmentation is $1+1=0$.
Consequently every zero-boundary has augmentation zero, while a single
included vertex has augmentation one and cannot be a boundary. In every
later complex of an increasing filtration that vertex still exists, so
its homology class remains nonzero. New components may appear or merge,
but not every ordinary component class can disappear. This argument concerns
unreduced $H_0$; it is not an assertion about reduced component bars or about
statistical recovery of a source space.

### Descriptive rubric and repair {#sec-topology-persistence-composite-rubric}

Compare each criterion with the first response; mark it as justified or
needing repair rather than treating a read answer as a grade.

- **The assigned complex is respected.** Retain every required face and
  distinguish an absent two-simplex from its present boundary cycle. State
  $\mathbb F_2$, the edge order and the half-open time convention. If an
  extra filled triangle was inserted from adjacency alone, restart from
  the declared simplex list.
- **The groups are quotients, not just dimensions.** Give $Z_1$ and $B_1$
  at every stage and identify the last quotient basis for each choice of
  face. If a cycle was called zero because its support was familiar,
  exhibit the actual present two-chain whose boundary it is.
- **The actual maps are computed.** Show $I_{01}$, $P_A$, $P_B$ and both
  products, with the domain/target basis conventions. If both adjacent
  ranks were reported as a complete answer, check which middle line is
  the image and which is the kernel.
- **The lifetimes match the maps.** Attach the intervals to $a$ and $b$,
  keep birth times included and death times excluded, and omit empty
  same-time intervals. Explain the common ordinary $H_0$ class and the
  vanishing $H_2$, rather than listing only loop counts.
- **The future claim is bounded.** Supply the explicit extra face at $3$,
  its changed interval endpoint and the unchanged observations through
  $2$. Use the augmentation argument to distinguish the ordinary
  component constraint from the freely chosen future death of a loop.

A complete answer must justify the zero-versus-one composite rank; a
correct Betti vector or a plausible barcode drawing alone is partial work.
For repair, return to
[cycles, boundaries and induced maps](14-homology.md#sec-topology-homology)
and then redo the image/kernel comparison before rereading this key. This
finite calculation does not establish a general barcode theorem, a
point-cloud reconstruction result, a noise cutoff or qualified individual
assessment.
