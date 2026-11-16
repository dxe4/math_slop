var e=`---
id: visual-lab-integer-image
title: "When the Scalars Must Stay Integers"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# When the scalars must stay integers

A matrix can reach every rational output while missing many integer outputs when its inputs must also be integers. Even more surprisingly, three integer columns can generate the entire integer plane while no two of those columns form a basis. The array has not changed; the permitted coefficients and the meaning of spanning have.

You need systems, kernels, bases, matrix multiplication, and determinants from [the linear algebra course](#/item/course-linear-algebra-standard), together with divisibility and the gcd. The final optional exercise uses Bézout's identity, linked below. No abstract module theory is required for the main investigation. Allow about 90 minutes for predictions, proofs, and six exercises. State the domain and codomain beside each claim about an image or an inverse.

## Guided investigation

Keep this array fixed:

$$D=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}.$$

First regard it as $D:\\mathbb Q^2\\to\\mathbb Q^2$. To produce output $(u,v)$, take $(x,y)=(u/2,v/3)$. Every rational output has a unique rational preimage. The same argument works over $\\mathbb R$. Its rank over either field is 2.

Now require $D:\\mathbb Z^2\\to\\mathbb Z^2$. Before calculating, predict which of $(4,3),(1,3),(0,1)$ are attainable. Does a nonzero determinant guarantee that every integer output is attainable?

Compare your predictions in [the live workshop](#/labs?lab=visual-lab-integer-image). It displays integer target coordinates from −4 to 4; the paper exercises also consider larger targets. Keep the chosen coefficient domain visible when interpreting a preimage. Exact tables and formulas carry the membership evidence; a finite drawing of lattice points is only an illustration. Use a failed output to explain an obstruction, and a formula for an arbitrary output to prove a whole-image claim.

The workshop has a keyboard route throughout: Tab to its native selectors,
sliders and buttons, then use arrow keys to change values. Named diagram,
formula and data table regions can be focused and scrolled horizontally with
arrow keys on a narrow screen. No dragging, animation or color judgment is
required. Exact membership records and witness coefficients provide the text
alternative to the lattice picture. Written prediction and revision notes stay
in the session; print the revealed state to retain the selected domain,
certificates, complete fiber and notes in a worksheet.

The equations $2x=u$ and $3y=v$ give the exact criterion

$$
(u,v)\\in\\operatorname{im}_{\\mathbb Z}D
\\quad\\Longleftrightarrow\\quad 2\\mid u\\text{ and }3\\mid v.
$$

Thus the integer image is $2\\mathbb Z\\times3\\mathbb Z$. The map is injective, since its zero-output equations force $x=y=0$, but it is not onto $\\mathbb Z^2$. The rational inverse

$$D^{-1}=\\begin{pmatrix}1/2&0\\\\0&1/3\\end{pmatrix}$$

does not define a map $\\mathbb Z^2\\to\\mathbb Z^2$: applied to $(1,3)$, it gives $(1/2,1)$. This is a valid rational preimage and fails the integer requirement.

## Measure the missing outputs precisely

Two integer outputs differ by an image vector exactly when their first coordinates have the same residue modulo 2 and their second coordinates have the same residue modulo 3. There are six such residue pairs, represented by

$$\\{0,1\\}\\times\\{0,1,2\\}.$$

The image therefore has **index 6** in $\\mathbb Z^2$: six cosets partition the output lattice. This counts classes modulo the image, not six individual missing points. Each class contains infinitely many points. Equivalently, the quotient is $\\mathbb Z/2\\mathbb Z\\oplus\\mathbb Z/3\\mathbb Z$.

The two columns of $D$ are an integer basis of their image. They are not a basis of the ambient integer plane. The specified image and codomain matter whenever you use the word “basis.” Full rational rank says the integer image spans the rational plane after rational coefficients are allowed; it does not say every integer point was already an integer combination.

For a square integer matrix, having an integer inverse is equivalent to determinant $\\pm1$. One direction follows from determinants: if both $C$ and $C^{-1}$ have integer entries, their integer determinants multiply to 1. Conversely, the adjugate formula gives an integer inverse when $\\det C=\\pm1$. Such a matrix is called **unimodular**. A nonzero determinant suffices for a rational inverse; an integer inverse requires a unit of $\\mathbb Z$, namely 1 or $-1$.

## A generating list containing no basis

Consider a changed map $B:\\mathbb Z^3\\to\\mathbb Z^2$:

$$B=\\begin{pmatrix}2&0&1\\\\0&3&1\\end{pmatrix}.$$

Its first two columns are the columns of $D$. Predict whether adding $(1,1)$ fills every missing output. Then predict whether, if all three columns generate $\\mathbb Z^2$, some two original columns must do so.

Let the original columns be $c_1,c_2,c_3$. The three two-column determinants are

$$\\det[c_1\\ c_2]=6,\\qquad\\det[c_1\\ c_3]=2,\\qquad\\det[c_2\\ c_3]=-3.$$

Every pair is a rational basis. No pair is an integer basis of $\\mathbb Z^2$, because none of these determinants is a unit. Yet all three columns generate the entire integer plane. Construct the two standard basis vectors explicitly:

$$e_1=-c_1-c_2+3c_3,\\qquad e_2=c_1+c_2-2c_3.$$

Collect their input coefficients into

$$S=\\begin{pmatrix}-1&1\\\\-1&1\\\\3&-2\\end{pmatrix}.$$

Column multiplication gives $BS=I_2$. Hence $S(u,v)$ is an integer preimage of **every** integer output $(u,v)$. This proves surjectivity globally, without searching a finite input window.

There is a simple way to find this construction. Choose $x=y$ in $2x+z=u$, $3y+z=v$. Subtracting gives $x=y=v-u$, and then $z=3u-2v$. These coefficients are precisely $S(u,v)$. The chosen preimage is convenient, not the only one.

## Where the field proof stops working

The [real rank-factorization investigation](#/item/visual-lab-rank-factorization) selects an image basis from original columns. Its field hypothesis matters. Over a field, a nontrivial relation permits solving for a column by dividing by a nonzero coefficient. For these integer columns,

$$3c_1+2c_2-6c_3=0.$$

Solving for a column introduces division by 3, 2, or 6. None is a unit in $\\mathbb Z$. The relation does not authorize deleting a generator while preserving the integer image. In fact, the determinant checks prove that deleting any one column loses some outputs.

The standard basis $e_1,e_2$ still exists; we constructed it from integer combinations rather than selecting it from the given list. Independence of integer columns is equivalent to rational independence, by clearing denominators in a rational relation. The spanning requirement is what differs here.

Do not conclude that $B$ requires three intermediate integer coordinates. Its image has the two-element basis $e_1,e_2$, giving $B=I_2B$ as a factorization through $\\mathbb Z^2$. One intermediate coordinate cannot work: after allowing rational scalars, its image would have dimension at most one, contradicting rational rank 2. The minimum remains two. Free-module ranks still obey rank–nullity in these examples; integer surjectivity and basis extraction need additional information.

## Find every input for an output

To find the kernel of $B$, solve $2x+z=0$ and $3y+z=0$. They imply $2x=3y=-z$. Coprimality forces $3\\mid x$; write $x=3t$, then $y=2t$ and $z=-6t$. Thus

$$\\ker_{\\mathbb Z}B=\\mathbb Zk,\\qquad k=(3,2,-6).$$

Adding a kernel vector to a particular preimage preserves the output. Conversely, subtracting two preimages gives a kernel vector. Therefore every integer fiber is exactly

$$
B^{-1}(u,v)=\\{(-u+v,-u+v,3u-2v)+t(3,2,-6):t\\in\\mathbb Z\\}.
$$

The parameter is an integer, not an arbitrary real number. Substitution checks that every displayed input works; the homogeneous calculation proves no integer input has been missed.

The construction also supplies a reversible integer coordinate change:

$$
W=[S\\ k]=\\begin{pmatrix}-1&1&3\\\\-1&1&2\\\\3&-2&-6\\end{pmatrix},
\\qquad \\det W=-1,
$$

$$
BW=[I_2\\mid0],\\qquad
W^{-1}=\\begin{pmatrix}2&0&1\\\\0&3&1\\\\1&-1&0\\end{pmatrix}.
$$

The new coordinates of an input $(x_1,x_2,x_3)$ are its two output coordinates and $t=x_1-x_2$. Equivalently,

$$x=S(Bx)+(x_1-x_2)k.$$

This is an identity for every integer input. The first two coordinates record the visible output; the third records the choice inside its fiber. Since $W$ and its inverse are integer matrices, these conversions never leave the allowed lattice.

## Exercises

Attempt these before reading the solutions. Exercise 6 is an optional transfer using Bézout's identity.

1. **Change the target.** For $D$, find the rational preimages of $(4,9),(1,3),(-6,-3),(0,1)$. Identify exactly which are integer preimages. Give a divisibility certificate for each failure. **Hint:** reaching a rational output is a different requirement from finding an integer input.
2. **Audit an inverse claim.** A report says “$\\det D=6\\ne0$, so $D$ is an automorphism of $\\mathbb Z^2$.” Correct the statement, and explain what dividing its rows by 2 and 3 does to the coefficient domain. What is the index of its image? **Hint:** a reversible integer basis change needs an integer inverse.
3. **Test selected generators.** For $B$, characterize the outputs generated by each original column pair. Can each pair reach $(5,-1)$? Can it reach $(1,0)$? Explain why reaching one target does not establish that the pair is a basis of $\\mathbb Z^2$. **Hint:** subtract the two output coordinates when a pair contains $c_3$.
4. **Change the fiber.** Find every integer input mapping to $(2,-1)$ under $B$. Decide whether $(0,-1,2)$ belongs to this fiber and recover its parameter. Prove completeness. **Hint:** use the new right inverse $S$ and subtract a particular solution.
5. **Audit integer coordinates.** Verify $BW=[I_2\\mid0]$ and the displayed $W^{-1}$. Decompose $(1,-2,3)$ in the columns of $W$. Does the failure of all original column pairs imply that three intermediate coordinates are necessary? **Hint:** the output basis may consist of combinations of the original columns.
6. **Change both coefficients.** For integers $m,n\\ge2$, let

   $$B_{m,n}=\\begin{pmatrix}m&0&1\\\\0&n&1\\end{pmatrix},\\qquad d=\\gcd(m,n).$$

   Prove its integer image is $\\{(u,v):d\\mid(u-v)\\}$ and find its full integer kernel. When is it onto? Apply the result to $m=4,n=6$ and targets $(3,0),(3,1)$. **Hint:** if $ma+nb=d$, multiply this Bézout identity by $(u-v)/d$.

## Solutions

### Exercise 1

The preimages are $(2,3),(1/2,1),(-3,-1),(0,1/3)$ respectively. The first and third are integers. For $(1,3)$, the first coordinate violates $2\\mid u$; for $(0,1)$, the second violates $3\\mid v$. Every target has its unique rational preimage, and the divisibility checks decide whether that preimage lies in $\\mathbb Z^2$.

### Exercise 2

$D$ is an automorphism of $\\mathbb Q^2$ and of $\\mathbb R^2$, and an injective map from $\\mathbb Z^2$ onto the proper sublattice $2\\mathbb Z\\times3\\mathbb Z$. It is not an automorphism of $\\mathbb Z^2$. The row scalings by $1/2$ and $1/3$ are valid rational coordinate operations, but are not unimodular integer operations on the whole ambient lattice. Dividing both sides remains a useful rewriting if you retain integrality and the divisibility conditions; it does not make the original matrix an integer automorphism. The six residue pairs modulo 2 and 3 show that the image has index 6.

### Exercise 3

The pair $(c_1,c_2)$ reaches exactly outputs with $2\\mid u$ and $3\\mid v$. The pair $(c_1,c_3)$ reaches exactly outputs with $2\\mid(u-v)$: take its $c_3$ coefficient to be $v$ and its $c_1$ coefficient to be $(u-v)/2$. The pair $(c_2,c_3)$ reaches exactly outputs with $3\\mid(v-u)$, with coefficients $(v-u)/3$ and $u$ respectively.

Thus $(5,-1)$ is missed by the first pair but reached by the second and third, using coefficients $(3,-1)$ and $(-2,5)$. All three pairs miss $(1,0)$. A pair may reach a particular target while missing others; a basis must generate every ambient integer vector uniquely. These pairs have unique coordinates on their own image sublattices, not on all of $\\mathbb Z^2$.

### Exercise 4

A particular solution is $S(2,-1)=(-3,-3,8)$. Hence the full fiber is

$$(-3,-3,8)+t(3,2,-6),\\qquad t\\in\\mathbb Z.$$

The candidate $(0,-1,2)$ is obtained at $t=1$, also recovered from $x_1-x_2=1$. Any other preimage differs from the particular one by an integer kernel vector; the earlier coprimality proof captures every such vector. This establishes both inclusion directions for the displayed family.

### Exercise 5

Multiplication gives $BS=I_2$ and $Bk=0$, proving the first identity. Multiplying the displayed inverse by $W$ gives $I_3$. Its first two rows are $B$, and its final row extracts $x_1-x_2$, so both directions of coordinate conversion have integer entries.

For $(1,-2,3)$, the output is $(5,-3)$ and the kernel coordinate is 3. Indeed

$$S(5,-3)+3k=(-8,-8,21)+(9,6,-18)=(1,-2,3).$$

The minimum intermediate rank is still two: the integer image basis $e_1,e_2$ yields a two-coordinate factorization, and rational rank rules out one coordinate. The failure concerns selecting a basis from these original columns, not the existence of an image basis.

### Exercise 6

Every output satisfies $u-v=mx-ny$, so $d\\mid(u-v)$. Conversely, write $ma+nb=d$ and $u-v=dh$. Set $x=ah$, $y=-bh$, and $z=u-mx$. These integers give both required outputs, proving sufficiency.

For a zero output, $mx=ny=-z$. Writing $m=dm'$, $n=dn'$ gives coprime $m',n'$, hence $x=n't$, $y=m't$, and $z=-mn t/d$. Therefore

$$\\ker B_{m,n}=\\mathbb Z(n/d,m/d,-mn/d).$$

The map is onto exactly when $d=1$. For $m=4,n=6$, $d=2$, so $(3,0)$ is impossible while $(3,1)$ is attained by $(-1,-1,7)$. Its entire fiber is that point plus $\\mathbb Z(3,2,-12)$. None of the original column pairs is an ambient integer basis for any allowed $m,n$: their determinants are $mn,m,-n$, all nonunits.

## Integer certificates and further reading

[MIT Algebra II Lecture 21](https://ocw.mit.edu/courses/res-18-012-algebra-ii-student-notes-spring-2022/mit18_702s22_lect21.pdf), Example 21.1, uses the diagonal $D$ example to explain residue classes modulo its image. The lecture continues to Smith reduction and lattice quotients. The rectangular generating-list investigation here makes the distinction between rational basis extraction and integer spanning explicit.

[Wolfram's SmithDecomposition documentation](https://reference.wolfram.com/language/ref/SmithDecomposition.html) returns \`\`{u,r,v}\`\` with the convention $uAv=r$, where the multipliers are unimodular integer matrices for integer input. In that convention the old input is $v$ times the new input, and the transformed target is $u$ times the old target. Verify the identity and the multipliers' determinants rather than assuming a particular returned basis. The diagonal matrix $\\operatorname{diag}(2,3)$ is not itself Smith form under the divisibility convention $d_1\\mid d_2$; its Smith form is $\\operatorname{diag}(1,6)$. No general Smith algorithm or Mathematica runtime is embedded in this lesson.

Continue to [Bézout certificates](#/item/book-number-theory-proof-reference?chapter=division-euclid-bezout), [integer solution lattices](#/item/book-number-theory-proof-reference?chapter=linear-diophantine-lattices), and [modules over PIDs](#/item/book-finite-algebra-computation?chapter=modules-over-pids) for the existing general theory. Keep the scalar domain, ambient image, permitted coordinate operations, and proof of complete spanning with every answer.
`;export{e as default};