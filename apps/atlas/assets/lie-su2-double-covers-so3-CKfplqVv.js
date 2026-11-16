var e=`---
id: deep-dive-lie-su2-double-covers-so3
title: "SU(2) double covers SO(3)"
license: CC BY-SA 4.0
---

# SU(2) double covers SO(3)

A rotation in three-dimensional space can be represented by a unit quaternion, but two opposite unit quaternions represent the same rotation. That redundancy is structured: the resulting map is a two-sheeted covering homomorphism. The half-angle in the formula is what makes one full physical rotation lift from a quaternion to its negative.

This L3 orientation assumes the real and complex matrix groups introduced in [Matrix groups: SO(3) and SU(2)](lie-matrix-groups-so3-su2.md), dot and cross products and elementary group homomorphisms. We construct the covering explicitly. The actual primary [Lie Correspondence](../books/lie-groups-lie-algebras/lie-correspondence.md), in its worked SU(2) example, supplies the full smooth and topological development, including the differential factor and simple-connectedness argument. We do not assume that equal group dimensions by themselves produce a covering.

## Quaternions provide the three-dimensional action

Use [Group Homomorphisms and Isomorphism Theorems](../books/algebra-patterns-structure/group-homomorphisms-isomorphism-theorems.md) for the kernel language and [Compactness: Covers and Finite Control](../books/topology-proof-counterexample/compactness-covers-and-finite-control.md) for the quotient argument. The covering's actual two local sheets are constructed below.

Write a quaternion as $q=a+u$, with real scalar $a$ and imaginary vector $u=b\\mathbf i+c\\mathbf j+d\\mathbf k$. Its multiplication is specified by

$$\\mathbf i^2=\\mathbf j^2=\\mathbf k^2=-1,\\qquad
\\mathbf i\\mathbf j=\\mathbf k,\\quad
\\mathbf j\\mathbf k=\\mathbf i,\\quad
\\mathbf k\\mathbf i=\\mathbf j,$$

with reversed distinct products negated. These rules can be checked in the two-by-two complex matrix model

$$a+b\\mathbf i+c\\mathbf j+d\\mathbf k\\longmapsto
\\begin{pmatrix}a+bi&c+di\\\\-c+di&a-bi\\end{pmatrix}.$$

The basis matrices obey the rules and their real span is closed under multiplication. Matrix associativity therefore proves associativity of this quaternion product. Its determinant is $a^2+b^2+c^2+d^2$. The unit quaternions correspond exactly to the special unitary matrices parametrized in the preceding article.

Define $\\overline q=a-u$ and $|q|^2=a^2+\\|u\\|^2$. Multiplication gives $q\\overline q=|q|^2$, and determinant multiplicativity proves multiplicativity of the norm. Hence a unit quaternion has inverse its conjugate.

Identify ordinary space with the purely imaginary quaternions and define

$$R_q(x)=qx\\overline q.$$

This is real-linear in $x$, preserves its norm and remains purely imaginary. The last fact follows by conjugating the product: quaternion conjugation reverses product order, so a purely imaginary input makes the output equal to the negative of its conjugate. Thus the output has zero scalar part.

The transformation is orthogonal. Its determinant is positive one: the unit quaternions form the connected three-sphere, and their determinant sign varies continuously, taking value one at the identity. Connectedness here has an elementary proof. Two non-antipodal sphere points are joined by normalizing their straight segment; opposite points can be joined by two such segments through a perpendicular unit point. The determinant can never pass through zero, so it stays positive.

Associativity proves $R_{qr}=R_qR_r$. We have therefore constructed a smooth homomorphism from $SU(2)$ to $SO(3)$, not merely assigned a rotation separately to each quaternion.

## Its kernel and image are exact

If $R_q$ fixes every imaginary vector, then $qx=xq$ for every such vector. The imaginary-vector product rule is $ux=-u\\cdot x+u\\times x$. Subtracting opposite orders gives $ux-xu=2u\\times x$. This vanishes for every $x$ only when $u=0$. The unit condition then gives $q=1$ or $q=-1$. Conversely those two scalars clearly act trivially. The kernel is exactly those two elements.

For surjectivity write $q=\\cos(\\theta/2)+n\\sin(\\theta/2)$ with unit imaginary axis $n$. Expanding the multiplication rules gives

$$R_q(x)=\\cos\\theta\\,x+(1-\\cos\\theta)(n\\cdot x)n
+\\sin\\theta\\,(n\\times x).$$

This fixes the axis and rotates its perpendicular plane through angle $\\theta$, with the right-hand convention for the cross product. Every element of $SO(3)$ has an axis-angle description, proved in the first article. Thus every rotation is in the image. Two quaternions give the same rotation exactly when their quotient is in the kernel, so each rotation has exactly the two preimages $q,-q$.

## Why two preimages really form two local sheets

A two-to-one map need not automatically be a covering. Here the group and quotient structure prove the stronger local statement. Quotient the unit three-sphere by its antipodal identification. The induced map from that quotient to $SO(3)$ is a continuous bijection. Its source is compact and its target is Hausdorff, so it is a homeomorphism: closed source sets are compact and have closed image.

Near any unit quaternion choose an open sphere neighborhood disjoint from its negative. The preimage of its image in the antipodal quotient is precisely that neighborhood and its negative. The quotient restricts to a homeomorphism on each. Indeed it is injective there, and images of open subsets are open because their full preimages are the union of the subset and its negative. These are the two disjoint sheets over one open rotation neighborhood.

Transporting this statement through the quotient homeomorphism proves the double-cover assertion. The primary also computes the identity differential as twice the cross-product operator and proves the local maps are smooth diffeomorphisms. The elementary argument here already establishes the exact topological covering, without leaving the local-sheet condition implicit.

## Worked example — One full rotation changes the lift's sign

Rotate around the third axis by angle $t$ and choose the quaternion path

$$q(t)=\\cos(t/2)+\\mathbf k\\sin(t/2).$$

The formula above gives exactly the ordinary rotation through angle $t$. At zero the quaternion is one. At $2\\pi$ the spatial rotation has returned to the identity, but its chosen lift is minus one. Only at $4\\pi$ does the quaternion path return to one.

Thus the rotation loop closes after one turn while this lifted path joins the two different points over the identity. The second turn closes the lift. This calculation concerns the specified covering and its angle convention. It does not itself derive a quantum-mechanical law for a physical particle; such an application also needs a representation and the relevant physical hypotheses. Keeping the mathematical map explicit is more informative than calling the quaternion merely a rotation with an unusual period.

## Exercises

### Exercise 1 {#lie-su2-double-cover-ex-1}

For $q=(1+\\mathbf i)/\\sqrt2$, determine the images of the three imaginary basis vectors and compare the action of $-q$.

<details><summary>Hint 1</summary>
This is the half-angle form for a quarter-turn around the first axis.
</details>
<details><summary>Hint 2</summary>
Use $\\mathbf i\\times\\mathbf j=\\mathbf k$ and $\\mathbf i\\times\\mathbf k=-\\mathbf j$.
</details>
<details><summary>Full solution</summary>
The first basis vector is fixed, the second maps to the third and the third maps to the negative second. This is the positive quarter-turn around the first axis. Negating the quaternion changes both outer factors in $qx\\overline q$, so their two minus signs cancel. Hence $-q$ gives the identical rotation, demonstrating the precise two-to-one identification in this concrete case.
</details>

### Exercise 2 {#lie-su2-double-cover-ex-2}

Two rotations have respective quaternion representatives $q,r$. Their two lift choices produce four possible products. Show that these give only two distinct quaternion representatives of the composed rotation.

<details><summary>Hint 1</summary>
List the products after choosing each sign independently.
</details>
<details><summary>Hint 2</summary>
The scalar minus sign commutes with every quaternion.
</details>
<details><summary>Full solution</summary>
The products are $qr,-qr,-qr,qr$, so there are exactly two distinct values, opposite to one another. They are distinct because a unit quaternion cannot equal its own negative. The homomorphism property sends both to the composed rotation. This agrees with the kernel calculation: composition does not create four independent sheets. The order of the non-scalar factors still matters, since general quaternion products do not commute.
</details>

## Continue in the primary book

Read [Lie Correspondence](../books/lie-groups-lie-algebras/lie-correspondence.md) for the full SU(2) calculation and its place in the global correspondence. [The Exponential Map and One-Parameter Subgroups](../books/lie-groups-lie-algebras/exponential-one-parameter-subgroups.md) explains the one-direction motions used in the half-angle path. This exposition and its exercises are original Euler orientation writing linked to those actual primary proofs. No independent review is claimed.
`;export{e as default};