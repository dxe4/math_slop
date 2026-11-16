
# Sheaf Cohomology and Local Systems

## Sheaves

A **presheaf** $\mathcal{F}$ on a topological space $X$ assigns to each open set $U \subseteq X$ an abelian group $\mathcal{F}(U)$ and to each inclusion $V \subseteq U$ a restriction map $\rho_{UV}:\mathcal{F}(U) \to \mathcal{F}(V)$. These satisfy $\rho_{UU}=\operatorname{id}$ and, for $W\subseteq V\subseteq U$,

$$\rho_{UW}=\rho_{VW}\circ\rho_{UV}.$$

A presheaf is a **sheaf** if it satisfies:
- **Local identity:** If $s \in \mathcal{F}(U)$ and $\{U_i\}$ covers $U$ with $s|_{U_i}=0$ for all $i$, then $s=0$.
- **Local gluing:** If $\{U_i\}$ covers $U$ and $s_i \in \mathcal{F}(U_i)$ satisfy $s_i|_{U_i \cap U_j}=s_j|_{U_i \cap U_j}$, then there exists $s \in \mathcal{F}(U)$ with $s|_{U_i}=s_i$.

**Examples.**
- The sheaf of continuous functions $C^0_X$.
- The constant sheaf $\underline{G}$ for an abelian group $G$.
- The sheaf of sections of a vector bundle.

## Sheaf cohomology

Sheaf cohomology $H^*(X;\mathcal{F})$ is the right derived functor of the global sections functor $\Gamma(X,-)$. Concretely, take an injective resolution $0 \to \mathcal{F} \to \mathcal{I}^0 \to \mathcal{I}^1 \to \cdots$ and define

$$H^k(X;\mathcal{F}) = H^k(\Gamma(X,\mathcal{I}^*)).$$

For the constant sheaf $\underline{G}$, sheaf cohomology agrees with singular cohomology when $X$ is locally contractible and paracompact.

## Local systems

A **local system** (or locally constant sheaf) on $X$ is a sheaf locally isomorphic to a constant sheaf. On a path-connected, locally path-connected, semilocally simply connected space it is equivalent to a representation of $\pi_1(X,x_0)$ on a stalk $G$; more generally one uses the fundamental groupoid. Monodromy around loops gives automorphisms of the stalk.

**Example.** The orientation local system $\mathcal{O}_X$ on a manifold $X$ has stalk $\mathbb{Z}$ and monodromy given by the orientation character $\pi_1(X) \to \{\pm 1\}$. For non-orientable $X$, this is a nontrivial local system.

For a closed $n$-manifold $M$ and local system $\mathcal{L}$, Poincaré duality with local coefficients states

$$H^k(M;\mathcal{L}) \cong H_{n-k}(M;\mathcal{L} \otimes \mathcal{O}_M).$$

This removes the orientability hypothesis: even for non-orientable closed manifolds, duality holds with the orientation system. Manifolds with boundary require relative groups, and noncompact manifolds require compactly supported cohomology or locally finite homology.

## Germs, local exactness and sheafification

**L5 preparation.** Use [Covering Spaces](../algebraic-topology-chains-spaces/coverings-and-monodromy.md), [Cellular Cohomology](#/books/algebraic-topology-chains-spaces), and the coefficient distinctions in [Obstruction Theory](obstruction-theory.md). Spaces in comparison statements below are Hausdorff. The existence of enough injective sheaves, the stated Čech comparison theorems and manifold local-coefficient duality are imported structural theorems. The local constructions, resolution independence argument, transport equivalence and explicit cochain computations are developed here.

A germ of a section at $x$ records its values on some neighborhood, identifying two sections when they agree on a smaller neighborhood of $x$. The stalk is the group of these germs. A sheaf section is zero if and only if all its germs vanish: each zero germ gives a neighborhood of vanishing, and the local identity axiom then applies to their cover. The same argument identifies sections when their germs agree.

The constant presheaf is not generally the constant sheaf. Assigning one group element to every nonempty open set cannot glue different values on two disjoint open pieces. Its sheafification consists of locally constant functions, which can take different values on different open components. On a connected open set such a function is constant, but a disconnected set exposes the difference. This distinction is needed even before discussing cohomology.

For a general presheaf, form the disjoint union of its stalks and project a germ to its point. Give it basic open sets consisting of the germs of one section over one open set. The projection is locally a homeomorphism on these basic sets. Continuous local sections of that projection form a sheaf: matching functions glue pointwise, and continuity is local. The presheaf maps to it by sending a section to its germ function. Any presheaf morphism to a sheaf factors uniquely through this construction, because locally represented germs can be sent to local sections and glued. This proves the relevant universal property and shows the stalks are unchanged.

A short sequence of sheaves is exact when its stalk sequences are exact. Kernels are computed sectionwise; cokernels require sheafification of the presheaf quotient. The stalk criterion follows directly from germs: each equation or local preimage needs only finitely many restrictions to a common smaller neighborhood. Thus surjectivity of a sheaf morphism means local lifting of sections, not necessarily lifting on the whole open set. This difference is the source of the derived global obstructions.

## Worked example 2: an exact sheaf sequence without global surjectivity

On the circle consider locally constant integer functions, continuous real functions and continuous circle-valued functions. Exponentiation by $\exp(2\pi i t)$ gives an exact sheaf sequence: the kernel consists of integer-valued continuous functions, and every circle-valued function has a logarithm locally by choosing a small target arc. Yet the identity circle-valued function on the whole circle has no continuous real logarithm.

To prove the failure, parameterize the circle by $\exp(2\pi it)$ for $0\le t\le1$. A hypothetical logarithm would give a continuous $a(t)$ with $a(t)-t$ an integer, hence constant. It would follow that $a(1)-a(0)=1$, contradicting equality of the function values at the same circle point. Local exactness is therefore compatible with a nontrivial global obstruction. The global sections functor is left exact, but not right exact.

The integer constant sheaf on a cover by two proper arcs can be computed explicitly. Their intersection has two arc components. Degree-zero Čech cochains are pairs of integers and degree-one cochains are two more integers, one per overlap component. The coboundary sends $(a,b)$ to $(b-a,b-a)$. Its kernel is one diagonal copy of the integers, while its cokernel is another copy, measured by the difference of the overlap values. The standard acyclic-cover comparison identifies these with the degree-zero and degree-one sheaf groups. Using only the one-set cover consisting of the whole circle would incorrectly produce zero in degree one: that cover is not acyclic for the constant sheaf.

## Why the resolution definition is independent of choices

The category of abelian sheaves has enough injectives, an imported existence theorem. An injective object means that a morphism from a subsheaf extends across any containing sheaf. Given two injective resolutions of the same sheaf, extend its identity into the first degree of a map between the resolutions. At the next stage the required composite vanishes on the preceding image, so it factors through the appropriate quotient, identified by exactness with a subsheaf in the next source degree. Injectivity of the next target extends that map. Induction constructs a cochain map over the identity.

Two choices of that cochain map are homotopic. Their difference in degree zero vanishes on the original sheaf, so it factors through the next source image; extend this factor to a map from source degree one into target degree zero. Subtract its coboundary from the degree-one difference and repeat. At each step the remaining difference kills the previous image and the next target's injectivity supplies the extension. The resulting maps satisfy the cochain-homotopy equation. Applying the additive global sections functor preserves that equation. Maps in both directions between the resolutions have composites homotopic to the identities, so their global-section cohomology groups are canonically isomorphic. This proves independence, while keeping the existence theorem itself as an input.

The same derived construction gives the long exact cohomology sequence of a short exact sheaf sequence. One may obtain compatible resolutions by the injective horseshoe construction and then use the ordinary cochain connecting homomorphism. This structural resolution construction is an additional homological-algebra input. It explains why the failure of global surjectivity in the logarithm example can be measured by a first cohomology class instead of contradicting exactness of the original sheaves.

## Fine modules and the actual Čech hypothesis

On a paracompact manifold, a locally finite cover admits a subordinate partition of unity. For a sheaf of modules over continuous or smooth functions, define a degree-lowering operation on alternating Čech cochains by
$$(hc)_{i_0\ldots i_{p-1}}=\sum_j\phi_j c_{j i_0\ldots i_{p-1}}.$$
Each term is extended by zero outside its supporting open set. This is legitimate because the support of the scalar multiplier lies there, and local finiteness makes the sum locally finite. Expanding the alternating coboundary shows all mixed sums cancel, leaving $(\delta h+h\delta)c=(\sum_j\phi_j)c=c$ in positive degrees. Thus the positive Čech groups vanish for such module sheaves.

The standard paracompact comparison between the full Čech theory and derived sheaf cohomology then gives their acyclicity. Alternatively a particular cover computes derived cohomology when all its finite nonempty intersections are acyclic for the sheaf, the Leray-cover hypothesis. Neither assertion says every single cover works. The one-set circle cover in the preceding example is the simplest warning. Likewise agreement of a constant sheaf's cohomology with singular cohomology uses the separate locally contractible, paracompact comparison theorem; it is not valid on every pathological topological space by definition.

A bundle's section sheaf is locally free over the function sheaf, not usually constant. If it is globally isomorphic to a free module sheaf of rank $r$, the images of the standard basis are global sections. At each point, quotient their stalk module by the ideal of function germs vanishing there. A function germ is a unit exactly when its value there is nonzero, so this quotient is the fiber and the sheaf isomorphism gives a fiber basis. Those sections form a global frame, yielding bundle triviality. This supplies the fiber justification in the retained exercise, rather than conflating stalks with fibers.

## Local systems as actual transport data

A local system of abelian groups has locally constant trivializations with discrete fibers. Transport a germ along a path by subdividing its parameter interval into trivializing neighborhoods. The transition identifications give an isomorphism of endpoint stalks. Refining the subdivision changes nothing. A homotopy of paths fixes transport too: subdivide its compact parameter square finely enough that each small rectangle lies in one pulled-back trivializing neighborhood; transport commutes around each rectangle, and cancellations across internal sides leave equality along the two outside paths. Thus transport depends only on the endpoint-fixed homotopy class and defines a functor from the fundamental groupoid to abelian groups.

For a connected, locally path-connected, semilocally simply connected space, fix a base stalk $A$. Restricting that functor to loops gives a representation $\rho$ of its fundamental group into automorphisms of $A$, with composition meaning successive path transport. Conversely construct the local system from such a representation using pairs $(\alpha,a)$, where $\alpha$ is a path from the basepoint to some $x$ and $a\in A$. At the same endpoint declare
$$(\alpha,a)\sim(\beta,b)\quad\text{if}\quad b=\rho([\beta^{-1}\circ\alpha])a.$$
Here a composite traverses the right-hand path first. Reflexivity and symmetry follow from identity and inverse transport. Transitivity follows by canceling the retraced middle path in $\gamma^{-1}\circ\beta\circ\beta^{-1}\circ\alpha$. A path from $x$ to $y$ sends the class to the one represented by its concatenation with $\alpha$, leaving $a$ unchanged. This is well-defined by the same path cancellation.

Neighborhoods in which all loops have trivial image in the fundamental group provide local trivializations of these classes: transport from one point identifies the stalks independently of the chosen neighborhood path. They give the discrete-fiber topology and the locally constant sheaf. At the basepoint its loop return action is exactly $\rho$ by the displayed relation. A homomorphism of base stalks extends to a local-system morphism exactly when it commutes with every return action; the path-pair formula proves sufficiency, and transport naturality proves necessity. This establishes the representation equivalence with its stated topological hypotheses. Outside that setting one should keep the fundamental groupoid or use a more appropriate local description rather than assume a universal-cover formula applies.

Global sections are precisely invariant elements of the base stalk. A section transports its value consistently around every loop, so that value is invariant. Conversely an invariant value transports independently of the path chosen to any point and gives a locally constant section. This computes the degree-zero group directly before any resolution or higher-cohomology theorem is used.

## Worked example 3: two rank-two return maps on a circle

For a circle local system with stalk $A$ and return automorphism $T$, cellular cochains have one copy of $A$ in degrees zero and one, with differential $T-1$. This follows by comparing the terminal edge value transported around the loop with its initial value. Hence degree-zero cohomology is the invariant kernel and degree one is the coinvariant cokernel. Reversing the cell orientation replaces this differential by an isomorphic convention; no group changes.

Take $A=\mathbb Z^2$ and let $T$ swap its coordinates. The kernel is the diagonal integers, and the image consists of pairs $(a,-a)$, so the cokernel is the integers measured by the coordinate sum. If instead $T$ is diagonal with entries minus one and one, the kernel is the second-coordinate integers and the cokernel is $\mathbb Z/2\oplus\mathbb Z$. The stalk ranks are identical but the first cohomology groups differ. Transport, rather than just the abstract stalk group, is essential data.

## Orientation coefficients and the duality input

The orientation stalk at $x$ of an $n$-manifold is its local group $H_n(M,M\setminus\{x\};\mathbb Z)$. Local charts identify it with the integers, and changing charts may negate that identification. This is the orientation local system. Tensoring it with itself gives a canonically trivial integer system, since every orientation sign is squared. A global choice of generator is precisely an orientation.

We import the closed-manifold local-coefficient duality theorem in the form stated above. Its cap product with the twisted fundamental class identifies degree-$k$ cohomology with homology in complementary degree with the orientation factor. It is not proved by the sheaf definition alone. For a connected closed manifold, it gives top cohomology with orientation coefficients equal to the integers. Ordinary top integral homology vanishes in the nonorientable case: it is identified with global sections of the orientation system, and a reversing loop forces an invariant integer to equal its negative, hence to be zero.

For a closed smooth manifold use a finite CW model to compute Euler characteristics with a rank-one rational local system. Each cell contributes one rational dimension regardless of its return signs, so the alternating cochain dimension sum equals the ordinary Euler characteristic. The equality of that sum with the alternating cohomology dimensions follows by canceling boundary dimensions in a finite complex. Duality reverses the degree order and contributes the sign of the dimension. Therefore an odd-dimensional closed smooth manifold has zero Euler characteristic, without assuming orientability. General closed topological manifolds use the separate finite-CW-type theorem for this argument, not an invented triangulation.

## Common errors

**Error: confusing sheaf cohomology with Cech cohomology.** A particular Čech cover computes derived sheaf cohomology under its acyclic-intersection hypothesis. The paracompact comparison theorem concerns the full Čech construction; an arbitrary single cover need not compute the result.

**Error: assuming constant sheaf cohomology equals singular cohomology without hypotheses.** The agreement used here assumes $X$ is locally contractible and paracompact Hausdorff. For pathological spaces, sheaf cohomology of the constant sheaf may differ from singular cohomology.

**Error: forgetting that local systems encode monodromy.** A local system is not just a collection of groups; the monodromy representation is part of the data. Two local systems with isomorphic stalks but different monodromy are different.

## Worked example: cohomology with local coefficients on $\mathbb{RP}^n$

For $n\ge2$, the orientation local system $\mathcal O$ on $\mathbb{RP}^n$ is trivial when $n$ is odd and has the nontrivial sign monodromy when $n$ is even. Twisted Poincaré duality gives $H^k(\mathbb{RP}^n;\mathcal O)\cong H_{n-k}(\mathbb{RP}^n;\mathbb Z)$. Consequently:

- if $n$ is even, the group is $\mathbb Z$ for $k=n$, is $\mathbb Z/2$ for odd $k$ with $0<k<n$, and is zero otherwise;
- if $n$ is odd, $\mathcal O$ is constant, and the group is $\mathbb Z$ for $k=0,n$, is $\mathbb Z/2$ for even $k$ with $0<k<n$, and is zero otherwise.

This twisted cohomology pairs with ordinary cohomology to give Poincaré duality without orientability.

## Practice exercises

### Exercise 15.1

Show that the constant sheaf $\underline{\mathbb{Z}}$ on a path-connected space $X$ has $H^0(X;\underline{\mathbb{Z}})=\mathbb{Z}$.

<details><summary>Hint 1</summary>

Identify global sections with locally constant functions.

</details>

<details><summary>Hint 2</summary>

A locally constant function on a path-connected space is constant.

</details>

<details><summary>Full solution</summary>

**Solution.** $H^0(X;\mathcal{F})=\Gamma(X,\mathcal{F})$ for any sheaf. For the constant sheaf, global sections are locally constant functions $X \to \mathbb{Z}$. Since $X$ is path-connected, such functions are constant, so $\Gamma(X,\underline{\mathbb{Z}})=\mathbb{Z}$. $\square$

</details>

### Exercise 15.2

Prove that a rank-$n$ real vector bundle $E\to X$ is trivial if and only if its sheaf of continuous sections is isomorphic, as a module sheaf over $C_X^0$, to $(C_X^0)^n$.

<details><summary>Hint 1</summary>

The coefficient ring is the function sheaf, not the constant real sheaf.

</details>

<details><summary>Hint 2</summary>

Pass from stalks to fibers by quotienting by function germs vanishing at the point.

</details>

<details><summary>Full solution</summary>

**Solution.** If $E\cong X\times\mathbb R^n$, sections over $U$ are $n$-tuples of continuous functions on $U$, so the section sheaf is $(C_X^0)^n$. Conversely, an isomorphism of $C_X^0$-module sheaves sends the standard basis to $n$ global sections that form a basis in every stalk and hence in every fiber. They define a bundle isomorphism $X\times\mathbb R^n\to E$. The constant sheaf $\underline{\mathbb R}^n$ would describe locally constant functions and is not the section sheaf of a trivial bundle in general. $\square$

</details>

### Exercise 15.3

Compute $H^*(S^1;\mathcal{L})$ where $\mathcal{L}$ is the local system with monodromy $-1$ on $\mathbb{Z}$.

<details><summary>Hint 1</summary>

Use the return action minus the identity on the one-cell complex.

</details>

<details><summary>Hint 2</summary>

Multiplication by minus two has the same kernel and cokernel as multiplication by two.

</details>

<details><summary>Full solution</summary>

**Solution.** The twisted cohomology of $S^1$ with monodromy $-1$ is computed by the chain complex $C^0=\mathbb{Z}$, $C^1=\mathbb{Z}$ with $\delta=\cdot 2$. Thus $H^0=0$ (no invariant sections) and $H^1=\mathbb{Z}/2\mathbb{Z}$. $\square$

The differential $T-1$ convention used above gives minus two; negating the degree-one generator identifies it with this retained positive-two convention.

</details>

### Exercise 15.4

Explain why Poincaré duality with local coefficients implies that a closed $n$-manifold $M$ has $\chi(M)=0$ when $n$ is odd, even if $M$ is non-orientable.

<details><summary>Hint 1</summary>

A rank-one rational local system gives one cochain dimension per cell.

</details>

<details><summary>Hint 2</summary>

Duality reverses degrees and inserts the parity sign of the dimension.

</details>

<details><summary>Full solution</summary>

**Solution.** Tensor the orientation system with $\mathbb Q$. Duality gives $H^k(M;\mathcal O_{\mathbb Q})\cong H_{n-k}(M;\mathbb Q)$. A finite CW model (available for closed smooth manifolds, with the general finite-CW-type theorem an additional topological input) computes the Euler characteristic of any rank-one rational local system from cochain dimensions, so $\chi(M;\mathcal O_{\mathbb Q})=\chi(M)$. Duality also gives $\chi(M;\mathcal O_{\mathbb Q})=(-1)^n\chi(M)$. For odd $n$, these equalities force $\chi(M)=0$. $\square$

</details>

### Exercise 15.5

Why does exactness of a sheaf morphism on stalks not prove surjectivity on global sections? Give the circle logarithm obstruction.

<details><summary>Hint 1</summary>

Local logarithms can exist without agreeing after one trip around the circle.

</details>

<details><summary>Hint 2</summary>

A proposed global logarithm would differ from the angle parameter by a continuous integer.

</details>

<details><summary>Full solution</summary>

The stalk condition provides a preimage on some neighborhood of each point, not a compatible choice over the whole space. For the identity circle-valued function, local real logarithms exist. A global one would give a continuous function on the parameter interval whose difference from the parameter is an integer and hence constant. Its endpoint values would differ by one, contradicting their representation of the same circle point. The obstruction is therefore global compatibility, not a missing local inverse.

</details>

### Exercise 15.6

Compute circle cohomology for the local system on $\mathbb Z^2$ with return map diagonal entries minus one and minus one.

<details><summary>Hint 1</summary>

Subtract the identity from the return matrix.

</details>

<details><summary>Hint 2</summary>

The resulting differential is minus two on each coordinate.

</details>

<details><summary>Full solution</summary>

The invariant kernel is zero because an integer equal to its negative must be zero in each coordinate. The cokernel is $(\mathbb Z/2)^2$. Thus degree-zero cohomology vanishes and degree one is that finite group; higher degrees vanish in the cellular circle model. The stalk itself is free of rank two, demonstrating that cohomology can have torsion coming from the return relation rather than torsion in the stalk.

</details>

### Exercise 15.7

Explain precisely why a constant presheaf cannot glue different constants over two disjoint open components, while its sheafification can.

<details><summary>Hint 1</summary>

There is no compatibility restriction on an empty overlap.

</details>

<details><summary>Hint 2</summary>

A locally constant function need not be constant across disconnected components.

</details>

<details><summary>Full solution</summary>

The two assigned values agree on the empty overlap automatically. A presheaf allowing only one element over the union has no section restricting to two different values, so gluing fails. The sheafification allows a function constant separately on each component, which gives the unique glued section. Its stalk groups remain the same because every point still has a neighborhood on which the value is one element; the change is in global gluing, not in the local group.

</details>

### Exercise 15.8

Why does the one-set cover of a circle fail to compute its degree-one constant-sheaf cohomology?

<details><summary>Hint 1</summary>

Its Čech complex has no positive-degree alternating intersections.

</details>

<details><summary>Hint 2</summary>

The required acyclicity hypothesis already fails on its sole open set.

</details>

<details><summary>Full solution</summary>

That single cover gives zero positive Čech groups, whereas a valid acyclic two-arc cover gives an integer group in degree one. The one open set is the whole circle and is not acyclic for the constant sheaf. Hence the particular-cover comparison theorem does not apply. The full Čech theory takes the appropriate refinements; it is not the cohomology of whichever one cover is most convenient to write.

</details>

### Exercise 15.9

For a connected nonorientable closed manifold, compute the group of integral global sections of its orientation system and explain the consequence for ordinary top homology.

<details><summary>Hint 1</summary>

At least one return action is minus one.

</details>

<details><summary>Hint 2</summary>

Duality with the orientation system removes the two orientation factors in the homology coefficient.

</details>

<details><summary>Full solution</summary>

A global section corresponds to an invariant integer in the base stalk. A reversing loop forces that integer to equal its negative, hence it is zero. Thus the global section group vanishes. Local-coefficient duality identifies it with ordinary top integral homology, since the two orientation systems tensor to the constant system. Therefore that top homology group vanishes, while top cohomology with orientation coefficients is still the integers.

</details>

### Exercise 15.10

Let $T$ be a circle return automorphism. Show that replacing it by the inverse gives isomorphic kernel and cokernel groups in the one-cell cochain model.

<details><summary>Hint 1</summary>

Factor the inverse-minus-identity operator.

</details>

<details><summary>Hint 2</summary>

Multiplication by minus the inverse is an automorphism of the stalk.

</details>

<details><summary>Full solution</summary>

One has $T^{-1}-1=-T^{-1}(T-1)$. The invertible factor gives equal kernels and identifies the images by an automorphism, hence yields isomorphic cokernels. This is the expected behavior when the orientation of the circle generator is reversed. It does not identify arbitrary unrelated return maps merely because their stalks have the same abstract rank.

</details>

## Looking forward

The final chapter studies bordism of compact smooth manifolds. Orientation systems, characteristic classes and the distinction between a stated deep comparison theorem and a proved local computation remain relevant there.
