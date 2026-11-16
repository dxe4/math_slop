var e=`---
parent_id: book-smooth-manifolds
chapter_id: lie-groups
title: "Lie Groups: A First Look"
level: graduate
license: CC BY-SA 4.0
---

# Lie Groups: A First Look

A Lie group has both a smooth manifold structure and a group law compatible with that structure. Translating a tangent vector at the identity produces a vector field everywhere. Its flow turns the vector back into a one-parameter family of group elements. The Lie bracket records how these infinitesimal translations interact.

This L4 first-look chapter uses the tangent, differential, flow and bracket constructions already proved in this book. Groups and manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary. Smooth means infinitely differentiable. The named Euclidean inverse-function and local ODE theorems remain the analytic inputs. We prove the left-invariant-field correspondence, completeness, the local exponential theorem and functoriality. The dedicated [Lie Groups and Lie Algebras matrix examples](../lie-groups-lie-algebras/matrix-groups-examples.md) are a broader continuation. Closed-subgroup theory, the general Baker–Campbell–Hausdorff formula and representation theory are outside this first-look proof scope.

## 1. Smooth translations and the identity tangent space

A Lie group is a smooth manifold $G$ with a group operation whose multiplication and inversion maps are smooth. Write $e$ for its identity. For fixed $g$, the maps $L_g(h)=gh$ and $R_g(h)=hg$ are diffeomorphisms: their inverses are translations by the inverse group element, and all these maps are smooth by the defining operations. Thus the differential of translation identifies the tangent space at the identity with the tangent space at any other point.

A smooth field $X$ is left invariant when $(L_g)_*X=X$ for every group element, meaning $d(L_g)_hX_h=X_{gh}$. Every tangent vector $v\\in T_eG$ defines one such field by

$$X_v(g)=d(L_g)_e v.$$

It is smooth because multiplication is smooth and differentiating it in its second variable gives smooth coordinate coefficients. The chain rule and $L_gL_h=L_{gh}$ prove left invariance. Conversely, setting $h=e$ in the invariance identity shows that every invariant field has exactly this formula with $v=X_e$. The assignments between vectors and fields are therefore inverse linear maps. No global frame was arbitrarily chosen: any basis at the identity translates to a global frame, proving that every Lie group is parallelizable.

The bracket of two left-invariant fields is again left invariant. Indeed diffeomorphism naturality of the bracket gives $(L_g)_*[X,Y]=[(L_g)_*X,(L_g)_*Y]=[X,Y]$. Hence define a bracket on $\\mathfrak g=T_eG$ by

$$[v,w]=[X_v,X_w]_e.$$

Real bilinearity, antisymmetry and the Jacobi identity descend directly from the corresponding field identities. This finite-dimensional vector space with bracket is the Lie algebra of the group. The construction uses left invariant fields throughout; switching to right invariant fields without adjusting conventions reverses the familiar matrix bracket sign.

## 2. Why invariant fields are complete

Let $\\gamma$ be the local integral curve of $X_v$ starting at the identity. If $s$ and $t$ are small enough for the expressions to be defined, the curve $t\\mapsto\\gamma(s)\\gamma(t)$ is another integral curve by left invariance and starts at $\\gamma(s)$. The shifted curve $t\\mapsto\\gamma(s+t)$ has the same field and initial point. Uniqueness therefore gives the local law

$$\\gamma(s+t)=\\gamma(s)\\gamma(t).$$

This local law extends the curve to every real time. Choose a positive step shorter than its initial existence interval. Translate the initial curve segment by successive powers of the element reached after that step, doing the same backwards with inverse powers. On neighborhoods of adjacent endpoints the local law proves agreement of the translated formulas, not merely agreement of their values. They therefore glue smoothly to an integral curve on the entire real line. Uniqueness identifies it with the maximal integral curve. Translating by any starting point yields the global curve through that point, so the field is complete.

The global group law for the extended curve follows by the same uniqueness argument, now with arbitrary fixed initial time. Its inverse value is $\\gamma(-t)$ because the sum of opposite times is zero. In particular every invariant field produces a smooth homomorphism from the additive real numbers to the group. Completeness here comes from translation symmetry, not compactness: the group itself can be noncompact.

A useful convention is worth stating explicitly. Although the field is left invariant, its flow through a point is $g\\gamma(t)$, so each fixed-time flow map is a right translation. Its invariance under left translation is exactly what makes those operations commute. Calling the flow a left translation would put the group factors in the wrong order for a noncommutative example.

## 3. The exponential map and its local inverse

Define $\\exp(v)=\\gamma_v(1)$, where $\\gamma_v$ is the complete identity curve of $X_v$. Scaling the field and changing time in an integral curve give, by uniqueness,

$$\\exp(tv)=\\gamma_v(t),\\qquad
\\exp(sv)\\exp(tv)=\\exp((s+t)v).$$

This is a one-dimensional statement for multiples of the same tangent vector. It does not assert an addition formula for two unrelated vectors.

The exponential map is smooth. In local coordinates the field coefficients depend smoothly on both the base point and the parameter vector $v$. The parameter-dependent local ODE theorem therefore makes the local solution smooth in these variables. To reach time one for a fixed parameter, cover the compact time segment of its already existing trajectory by finitely many local solution neighborhoods. Their finite composition gives smooth dependence near that parameter up to the required time. Uniqueness makes these local descriptions agree. This is the same finite-chain argument used for the smooth maximal flow domain earlier in the book; it does not assume uniform global bounds over all parameter vectors.

At the zero vector, the identity curve is constant and the differential of the exponential is the identity map under $T_0\\mathfrak g=\\mathfrak g$. Indeed the derivative in any direction $v$ is the initial velocity of $t\\mapsto\\exp(tv)=\\gamma_v(t)$, namely $v$. The manifold inverse-function theorem consequently supplies a neighborhood of zero mapped diffeomorphically onto a neighborhood of the identity. This proves a local logarithm theorem. It asserts neither a single logarithm on the entire group nor global surjectivity of the exponential.

Every smooth one-parameter subgroup has this form. If $a(s+t)=a(s)a(t)$ and $a(0)=e$, differentiate in $t$ at zero. The result is $a'(s)=d(L_{a(s)})_e a'(0)$. Thus it solves the invariant-field equation with initial vector $a'(0)$ and, by uniqueness, equals $\\exp(sa'(0))$. This also proves uniqueness of its infinitesimal generator.

## 4. Homomorphisms and conjugation

Let $F:G\\to H$ be a smooth group homomorphism. It intertwines left translations, so its differential relates the invariant field $X_v$ to the invariant field determined by $dF_ev$. Related fields have related brackets: apply each side to an arbitrary smooth target function, pull it back by $F$, and use the derivation commutator definition. Evaluations on all such local functions distinguish tangent vectors. Consequently

$$dF_e[v,w]=[dF_ev,dF_ew].$$

Thus the identity differential is a Lie algebra homomorphism. Applying $F$ to the identity integral curve yields the corresponding identity curve in the target, by the field relation and uniqueness. Therefore

$$F(\\exp_G v)=\\exp_H(dF_ev).$$

This is a precise passage from global group structure to infinitesimal structure. The reverse passage, integrating arbitrary Lie algebra homomorphisms to group homomorphisms, needs global hypotheses and further theorems; it has not been proved by this argument.

Conjugation by a fixed element is a smooth group automorphism. Its identity differential is denoted $\\operatorname{Ad}_g$. The chain rule gives $\\operatorname{Ad}_{gh}=\\operatorname{Ad}_g\\operatorname{Ad}_h$, and the preceding result shows that each is an invertible bracket-preserving linear map. For a matrix group the formula is $\\operatorname{Ad}_g(A)=gAg^{-1}$, obtained by differentiating the conjugated identity curve. No choice of matrix logarithm is needed to define it.

## 5. Three worked examples

### Worked example 15.1 — The matrix commutator from invariant fields

The group of invertible real square matrices is open in its ambient matrix vector space because the determinant is continuous. Multiplication is polynomial, and inversion is smooth by the adjugate-over-determinant formula. Thus it is a Lie group with identity tangent space all real matrices of that size. The invariant field associated to $A$ is $X_A(g)=gA$.

For two such fields, differentiating their ambient linear formulas gives

$$[X_A,X_B](g)=(gA)B-(gB)A=g(AB-BA).$$

The Lie algebra bracket is therefore the matrix commutator. Its sign agrees with the earlier coordinate field convention. For any embedded matrix subgroup already known to be a Lie group, the same tangent formula applies by restriction, because the invariant fields are tangent and the bracket is intrinsic.

The matrix exponential series converges absolutely and locally uniformly together with its derivative, by the factorial bound on powers in a submultiplicative matrix norm. Termwise differentiation gives $E'(t)=E(t)A$ and $E(0)=I$. The product $E(t)E(-t)$ has zero derivative, since these series commute with $A$, so it equals the identity. The series therefore stays invertible and solves exactly the group invariant-field equation. Uniqueness identifies the familiar matrix exponential with the geometric construction above.

### Worked example 15.2 — A circle logarithm is local

On the unit complex circle multiplication and conjugation are smooth real maps, and the identity tangent vectors have the form $ia$ with $a$ real. The invariant identity curve is $e^{iat}$, as direct differentiation verifies. Hence the exponential sends $ia$ to $e^{ia}$. It is surjective, but different parameters separated by an integer multiple of $2\\pi$ have the same value. Restricting the parameter to an interval shorter than one full turn around zero gives the local diffeomorphism predicted by the theorem.

There cannot be a continuous global real logarithm inverse on the circle. If such a function existed, its composition with one full angular circuit would have to increase by $2\\pi$, while its identical endpoints would require the same value. This is the same global angle obstruction encountered with the angular one-form. A local inverse theorem never promises that its local branches glue after circling the group.

### Worked example 15.3 — Even the identity component can miss exponentials

The determinant-one two-by-two group is a smooth submanifold of invertible matrices. At a determinant-one matrix $g$, varying it along $(1+t)g$ makes the determinant $(1+t)^2$, whose derivative is two. The determinant map is therefore a submersion along this level set, so the proved regular-value theorem applies. The restricted group operations remain smooth.

Consider $B=\\operatorname{diag}(-2,-1/2)$ in this group. It lies in the identity component: the explicit path $R_{\\pi t}\\operatorname{diag}(2^t,2^{-t})$ joins the identity to it while keeping determinant one, where $R_\\theta$ is plane rotation.

If $B=e^A$ for any real two-by-two matrix, then $A$ commutes with $B$, because a matrix commutes with every convergent power series in itself. A matrix commuting with this diagonal matrix with distinct eigenvalues must be diagonal: the off-diagonal commutation equations multiply its entries by the nonzero difference of those eigenvalues. A real diagonal matrix has an exponential with positive diagonal entries, contradicting the entries of $B$. Thus no such real matrix logarithm exists. In particular $B$ is not an exponential from the determinant-one Lie algebra. Connectedness does not upgrade the local exponential theorem to a global surjectivity theorem.

## 6. How much does the bracket remember?

If the group is abelian, all invariant flows commute, and the local flow-bracket theorem proves that its Lie algebra bracket is zero. A useful converse holds when the group is connected. If the bracket is zero, every pair of invariant fields commutes. Their complete flows commute, so their values at the identity give commuting exponential elements. The exponential contains an identity neighborhood by its local theorem. The subgroup generated by that neighborhood is open, since each of its points has a translate of the neighborhood inside the subgroup. Its complement is a union of equally open cosets, so it is also closed. Connectedness forces it to be the whole group. Since the generating exponential elements commute pairwise, the group is abelian.

Without connectedness the conclusion fails. The orthogonal two-by-two group consists of rotations and rotations followed by one fixed reflection: its first column is a unit vector, and its second column must be one of the two perpendicular unit vectors. This explicitly identifies it with two disjoint smooth circles, with smooth matrix group operations. Its identity Lie algebra is one-dimensional and therefore has zero bracket, yet a reflection does not commute with a general rotation. Reflection conjugates a rotation to its inverse. The Lie algebra detects the local connected geometry but cannot encode every disconnected component's multiplication from its bracket alone. Even among connected groups, the line and the circle have isomorphic one-dimensional abelian Lie algebras while differing globally. These examples explain why global group topology must remain visible alongside the infinitesimal calculation.

## Exercises

### Exercise 15.1 {#smooth-lie-groups-ex-1}

Prove directly that an invariant field vanishing at the identity vanishes everywhere.

<details><summary>Hint 1</summary>
Translate its identity value to an arbitrary point.
</details>
<details><summary>Hint 2</summary>
The differential of translation is linear.
</details>
<details><summary>Full solution</summary>
Invariance gives $X_g=d(L_g)_eX_e$. If the identity value is zero, linearity makes every value zero. The same calculation shows that two invariant fields agreeing at the identity agree everywhere. Ordinary fields need not satisfy this conclusion: invariance is exactly the hypothesis determining all their values from one tangent vector.
</details>

### Exercise 15.2 {#smooth-lie-groups-ex-2}

For the additive real vector group compute its invariant fields, bracket and exponential map.

<details><summary>Hint 1</summary>
Translations have identity differential.
</details>
<details><summary>Hint 2</summary>
The integral curve starting at zero has constant velocity.
</details>
<details><summary>Full solution</summary>
Invariant fields are constant vector fields. Their coordinate components have zero derivatives, so all brackets vanish. The identity curve with generator $v$ is $tv$, and the exponential at time one is $v$ itself. In this example the exponential is a global diffeomorphism. That additional feature follows from the explicit linear group law, not from the general local exponential theorem.
</details>

### Exercise 15.3 {#smooth-lie-groups-ex-3}

On invertible matrices define the right-invariant fields $Y_A(g)=Ag$. Compute their bracket and compare its sign with the left-invariant convention.

<details><summary>Hint 1</summary>
The coordinate bracket differentiates the second field in the direction of the first and subtracts the reverse term.
</details>
<details><summary>Hint 2</summary>
Keep the matrix multiplication order fixed.
</details>
<details><summary>Full solution</summary>
The derivatives give $[Y_A,Y_B](g)=B(Ag)-A(Bg)=(BA-AB)g$. Thus their identity bracket is the negative of the usual matrix commutator when identified with the same matrices. This is consistent with using right invariant rather than left invariant fields. Replacing one convention by the other without this sign would change the stated Lie algebra identification.
</details>

### Exercise 15.4 {#smooth-lie-groups-ex-4}

For a smooth homomorphism of Lie groups, prove that the kernel of its identity differential is closed under the Lie bracket.

<details><summary>Hint 1</summary>
Apply the bracket-preservation identity to two kernel vectors.
</details>
<details><summary>Hint 2</summary>
The bracket of two zero vectors is zero.
</details>
<details><summary>Full solution</summary>
If both vectors have zero differential image, the image of their bracket is the bracket of those images, hence zero. Thus the vector-space kernel is a Lie subalgebra. In fact it is an ideal: if only the second vector lies in the kernel, the image bracket still has a zero second factor. This infinitesimal statement does not itself prove any smooth-subgroup theorem about the global kernel; that is additional geometry.
</details>

### Exercise 15.5 {#smooth-lie-groups-ex-5}

Let $A$ be a real skew-symmetric matrix. Prove that its exponential is orthogonal and has determinant one.

<details><summary>Hint 1</summary>
Differentiate $E(t)^TE(t)$ using the matrix ODE.
</details>
<details><summary>Hint 2</summary>
An orthogonal determinant has only two possible values and varies continuously with time.
</details>
<details><summary>Full solution</summary>
The series solution obeys $E'=AE=EA$. Hence $(E^TE)'=E^T(A^T+A)E=0$, and its initial value is the identity. The solution is orthogonal for every time. Its determinant is therefore either one or minus one; continuity along the real parameter line and initial value one force it always to be one. This proves the stated inclusion without assuming that every orthogonal matrix is an exponential.
</details>

### Exercise 15.6 {#smooth-lie-groups-ex-6}

Show that every exponential belongs to the identity component of its Lie group. Why is the converse unsupported by this argument?

<details><summary>Hint 1</summary>
Use the defining one-parameter subgroup on the unit time interval.
</details>
<details><summary>Hint 2</summary>
The diagonal example lies in that component but is not an exponential.
</details>
<details><summary>Full solution</summary>
The path $t\\mapsto\\exp(tv)$ joins the identity to the given exponential, so its endpoint lies in the identity component. This proves only one inclusion. Worked example 15.3 gives an explicit element in that component without any real matrix logarithm, proving that the reverse inclusion can fail. The local logarithm theorem supplies a neighborhood, not all of that component.
</details>

### Exercise 15.7 {#smooth-lie-groups-ex-7}

If two invariant fields commute, prove that the corresponding one-parameter subgroups commute with each other at all real parameter values.

<details><summary>Hint 1</summary>
Their complete flows commute by the local bracket-flow result and continuation.
</details>
<details><summary>Hint 2</summary>
Evaluate the two compositions of flow maps at the identity.
</details>
<details><summary>Full solution</summary>
The zero bracket makes the local flows commute. Subdivide any two finite time intervals into pieces inside local existence neighborhoods along the relevant trajectories; uniqueness extends the commutation identity to those pieces and then their finite compositions. Completeness ensures all required times exist. The invariant flow maps are right translations by the subgroup elements, so their compositions at the identity give the two opposite products. Equality of those compositions is the desired commutation of subgroup values.
</details>

### Exercise 15.8 {#smooth-lie-groups-ex-8}

Give two connected Lie groups with isomorphic Lie algebras which are not diffeomorphic. Explain the global distinction.

<details><summary>Hint 1</summary>
Compare the additive real line with the unit circle.
</details>
<details><summary>Hint 2</summary>
One space is compact and the other is not.
</details>
<details><summary>Full solution</summary>
Both have one-dimensional real Lie algebra with zero bracket. The circle is compact, while the line is noncompact, so no homeomorphism, and hence no diffeomorphism, exists between them. Their exponentials display the distinction: the line's is globally injective, whereas the circle's is periodic. The common infinitesimal algebra does not identify their global topology.
</details>

### Exercise 15.9 {#smooth-lie-groups-ex-9}

For a matrix group verify that conjugation respects its matrix bracket directly.

<details><summary>Hint 1</summary>
Multiply two conjugated matrices and cancel the adjacent inverse factors.
</details>
<details><summary>Hint 2</summary>
Subtract the products in opposite order.
</details>
<details><summary>Full solution</summary>
The difference of $(gAg^{-1})(gBg^{-1})$ and the opposite product is $g(AB-BA)g^{-1}$. Thus the adjoint map preserves the bracket, agreeing with the intrinsic homomorphism argument. The calculation also shows why conjugation rather than left multiplication alone acts linearly on the identity tangent space: conjugation fixes the identity, while left multiplication generally moves its base point.
</details>

### Exercise 15.10 {#smooth-lie-groups-ex-10}

For the covering homomorphism from the additive real line to the circle, $t\\mapsto e^{it}$, determine the differential kernel and the group kernel. What information is lost infinitesimally?

<details><summary>Hint 1</summary>
Differentiate at zero, where the target tangent space is the imaginary axis.
</details>
<details><summary>Hint 2</summary>
The group map repeats after a full turn.
</details>
<details><summary>Full solution</summary>
The identity differential sends a real number $a$ to $ia$ and is injective, so its kernel is zero. The global kernel consists of integer multiples of $2\\pi$. It is discrete and has no nonzero tangent direction at its identity, explaining why the differential does not detect it. A local Lie algebra isomorphism can therefore come from a globally noninjective group homomorphism, consistent with the local inverse theorem.
</details>

## Sources and provenance

New L4 first-look text built from this book's proved invariant-field, flow and bracket machinery. The broader examples are linked to the actual [Lie Groups and Lie Algebras opening chapter](../lie-groups-lie-algebras/matrix-groups-examples.md), whose full family remains separate. Comparison references are Lee, *Introduction to Smooth Manifolds*, the Lie groups and exponential map chapters, and Hall, *Lie Groups, Lie Algebras, and Representations*, the matrix exponential and Lie algebra sections. Matrix-series differentiation uses the displayed factorial convergence bound and the previously named ODE uniqueness theorem. No closed-subgroup, global integration or independent-review claim is made.

## Summary

The identity tangent space identifies with left-invariant fields and inherits their bracket. Translation symmetry makes those fields complete, producing one-parameter subgroups and a smooth exponential locally inverse near zero. Smooth homomorphisms respect brackets and exponentials. Matrix and circle examples demonstrate the distinction between local and global information: connectedness, periodicity, disconnected components and exponential surjectivity cannot be read from the bracket alone.
`;export{e as default};