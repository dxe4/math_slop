var e=`---
id: visual-lab-dual-coordinates
title: "Dual Coordinates and Pulling Measurements Back"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Dual coordinates and pulling measurements back

A vector describes a state. A linear functional measures that state and returns a scalar. Both have coordinate columns, but changing the basis changes those columns in different ways. Following the scalar measurement through a rectangular map explains the difference and gives a reason for the transpose.

You need linear maps, bases, inverse matrices, and the coordinate conversions of [Units 3–4 of the linear algebra course](#/item/course-linear-algebra-standard). The main investigation uses real scalars and needs no inner product or calculus. Exercise 6 is an optional complex-number audit with its inner product explicitly specified. Plan 20 minutes for predictions and the instrument, 25 for the proof, and 45 for exercises. Record a prediction before comparing the two routes, then explain any revision.

## Guided investigation

Let $T:\\mathbb R^2\\to\\mathbb R^3$ have standard matrix

$$
A=\\begin{pmatrix}1&2\\\\-1&1\\\\2&0\\end{pmatrix}.
$$

An output measurement is $\\psi(u,v,w)=2u-v+w$. What input measurement gives the same result as applying $T$ and then $\\psi$? Predict its domain, its formula, and whether it requires an inverse of $A$.

Open [the live workshop](#/labs?lab=visual-lab-dual-coordinates). Its two fixed maps have independently selectable standard or alternate domain and output bases. Native controls accept integer standard input coordinates and standard measurement coefficients from $-3$ to $3$. These bounds select examples; the proofs concern all real coordinate columns. Use the coordinate audit to examine a proposed transformation rule. Keyboard controls and scrollable formula and table regions provide the essential actions and evidence. There is no animation. Optional notes remain only while the workshop is mounted; copy them to retain them.

Direct substitution gives

$$
(\\psi\\circ T)(x,y)
=2(x+2y)-(-x+y)+2x
=5x+3y.
$$

This is a functional on the input space. It is obtained by **precomposition**, called pulling a measurement back. The algebraic dual map has type

$$
T^\\vee:(\\mathbb R^3)^\\vee\\to(\\mathbb R^2)^\\vee,
\\qquad T^\\vee(\\psi)=\\psi\\circ T.
$$

The arrow reverses between spaces of measurements. It does not reverse a state trajectory or ask a rectangular matrix to have a two-sided inverse.

The dual space $V^\\vee$ consists of all linear functions $V\\to\\mathbb R$. Its addition is pointwise: $(\\varphi+\\theta)(v)=\\varphi(v)+\\theta(v)$, and scalar multiplication is defined the same way. A functional is therefore itself a vector in a new vector space, while its inputs remain vectors in the original space. The phrase “a vector in the dual” identifies its mathematical role; it does not turn a scalar measurement into a state arrow.

Pullback respects these operations. For every input $v$ and scalars $a,b$,

$$
T^\\vee(a\\psi+b\\chi)(v)
=(a\\psi+b\\chi)(Tv)
=a(T^\\vee\\psi)(v)+b(T^\\vee\\chi)(v).
$$

Since the equality holds at every $v$, it is an equality of functionals. Thus $T^\\vee$ is linear. This is why it can have a matrix representation, even though its inputs are measurements rather than the state vectors acted on by $T$.

## Construct the dual bases

Choose domain basis $B=((1,1),(1,2))$ and output basis $C=((1,0,1),(0,1,1),(0,0,1))$. Their column matrices are

$$
P=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix},\\qquad
Q=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\1&1&1\\end{pmatrix}.
$$

An input decomposes as $(x,y)=(2x-y)(1,1)+(-x+y)(1,2)$. Thus its coordinate extractors are

$$\\beta^1(x,y)=2x-y,\\qquad\\beta^2(x,y)=-x+y.$$

Check $\\beta^i(b_j)=\\delta_{ij}$ on all four basis pairings: the value is 1 when $i=j$ and 0 otherwise. These functionals form the **dual basis** $B^\\vee$. They take vectors as inputs and return coefficients. Similarly,

$$
(u,v,w)=u(1,0,1)+v(0,1,1)+(w-u-v)(0,0,1),
$$

so $C^\\vee$ consists of $\\gamma^1=u$, $\\gamma^2=v$, and $\\gamma^3=w-u-v$. The rows of $P^{-1}$ and $Q^{-1}$ give these coordinate-extracting functionals. Neither basis was required to be orthogonal.

What are the coefficients of $\\psi$ in this dual basis? Evaluate $\\psi$ on the **primal** basis vectors:

$$
\\psi(c_1)=3,\\quad\\psi(c_2)=0,\\quad\\psi(c_3)=1,
\\qquad \\psi=3\\gamma^1+\\gamma^3.
$$

Therefore $[\\psi]_{C^\\vee}=(3,0,1)^T$. For any basis $B=(b_i)$, a functional $\\varphi$ expands as $\\sum_i\\varphi(b_i)\\beta^i$: applying that expression to $v=\\sum_i c_i b_i$ gives $\\sum_i c_i\\varphi(b_i)=\\varphi(v)$. This proves the coefficient rule for every input.

There are two different evaluation questions here. Asking $\\beta^i(v)$ extracts one coordinate of an arbitrary state. Asking $\\varphi(b_i)$ extracts one coordinate of a chosen functional. Switching the arguments would not even define the same operation. Try stating both questions aloud before calculating the dual-coordinate column; this prevents treating every column of numbers as the same kind of object.

## Why the functional column uses a transpose

Let $f$ be a functional's standard coefficient column, meaning $\\varphi(v)=f^Tv$. Write $v=Pc$, where $c=[v]_B$. Then

$$\\varphi(v)=f^TPc=(P^Tf)^Tc.$$

Hence

$$[v]_B=P^{-1}v,\\qquad[\\varphi]_{B^\\vee}=P^Tf.$$

The inverse converts a vector into coordinates. The transpose converts coefficients of a functional into coefficients in the corresponding dual basis. The scalar evaluation is preserved when the two correctly typed columns are paired. The dual-basis functionals themselves, whose formulas came from $P^{-1}$, are different objects from the coefficient column of one chosen functional.

For $\\varphi=T^\\vee\\psi=5x+3y$, this gives

$$[\\varphi]_{B^\\vee}=P^T(5,3)^T=(8,11)^T.$$

Using the vector rule instead produces $P^{-1}(5,3)^T=(7,-2)^T$. At the input $(2,-1)$, whose $B$-coordinates are $(5,-3)$, the correct pairing gives $8\\cdot5+11(-3)=7$. The incorrect column gives $7\\cdot5+(-2)(-3)=41$. Matching dimensions alone would not expose the error; the meaning of the columns does.

## The whole transpose identity

The coordinate matrix for the original map is

$$
M=Q^{-1}AP=\\begin{pmatrix}3&5\\\\0&1\\\\-1&-4\\end{pmatrix}.
$$

For example, $Tb_1=(3,0,2)$ has $C$-coordinates $(3,0,-1)$, giving the first column. The second basis image gives $(5,1,-4)$. These two checks determine the matrix for every input because $b_1,b_2$ span the input space.

Let $c=[v]_B$ and $d=[\\psi]_{C^\\vee}$. Following the vector first gives $[Tv]_C=Mc$, so measurement yields $d^TMc$. Regrouping the same scalar gives

$$d^TMc=(M^Td)^Tc.$$

This holds for every real $c$ and $d$, by matrix multiplication and transposition. Therefore the coefficient column of the pullback is $M^Td$: the matrix of $T^\\vee$ in the corresponding dual bases is $M^T$. The proof establishes an identity of functionals, rather than inferring one from a few sampled scalar values.

For the guided measurement,

$$M^T(3,0,1)^T=(8,11)^T.$$

The full routes at the selected input are:

| Quantity | Standard coordinates | Chosen basis coordinates |
| --- | --- | --- |
| Input $v$ | $(2,-1)$ | $[v]_B=(5,-3)$ |
| Output $Tv$ | $(0,-3,4)$ | $[Tv]_C=(0,-3,7)$ |
| Output functional $\\psi$ | $(2,-1,1)$ | $[\\psi]_{C^\\vee}=(3,0,1)$ |
| Input functional $T^\\vee\\psi$ | $(5,3)$ | $[T^\\vee\\psi]_{B^\\vee}=(8,11)$ |

Both standard evaluations and both chosen-coordinate evaluations give 7. Entries in the last two rows are functional coefficients; they are not another pair of geometric state vectors.

## Change one basis at a time

Use the independent basis selectors to isolate the two effects. Start with both standard bases, then change only the output basis, restore it, and change only the domain basis. Predict which dual-coordinate column changes before reading the table.

Changing the output basis alters $[\\psi]_{C^\\vee}$, but the underlying pullback is still $5x+3y$. With the domain basis still standard, its coefficient column stays $(5,3)$. Changing only the domain basis leaves the standard output measurement column $(2,-1,1)$ unchanged, while the pullback's new dual coefficients become $(8,11)$. Choosing both alternate bases combines these conversions.

The coordinate matrices in the two intermediate cases are

$$
AP=\\begin{pmatrix}3&5\\\\0&1\\\\2&2\\end{pmatrix},\\qquad
Q^{-1}A=\\begin{pmatrix}1&2\\\\-1&1\\\\2&-3\\end{pmatrix}.
$$

Check their transpose actions on the appropriate measurement columns. In particular, $(Q^{-1}A)^T(3,0,1)^T=(5,3)^T$. The changed output description cancels out when you reconstruct the same input functional. This supplies a useful audit when several basis labels appear at once: decide first which mathematical object has stayed fixed, then change only its coordinate description.

The choice of probe is independent of all four coordinate descriptions. Holding the same physical input and measurement fixed must preserve the final scalar throughout. If you instead hold a coordinate column fixed while changing the basis in which it is interpreted, you generally select a different input or a different functional. A numerical change in that situation is not evidence that the original map changed.

## Exercises

Attempt the changed polynomial task from its definitions before revealing its matrix or solution.

1. **Change the measurement.** Keep the guided $T,B,C$, but use $\\chi(u,v,w)=v-w$. Find its $C^\\vee$ coordinates and the pullback in both standard and $B^\\vee$ coordinates. Verify the scalar at $(2,-1)$. **Hint:** evaluate $\\chi$ on each output basis vector.
2. **Change the basis.** Use $E=((2,1),(1,1))$ and $\\varphi(x,y)=3x-2y$. Construct the dual basis, find $[\\varphi]_{E^\\vee}$, and audit the proposal that functional coefficients should be multiplied by the inverse basis matrix. Use $(1,0)$ as a witness. **Hint:** first express an arbitrary $(x,y)$ in $E$.
3. **Transfer to polynomials.** Define $L:P_2(\\mathbb R)\\to P_1(\\mathbb R)$ by

   $$L(a+bx+cx^2)=a+(b+c)x.$$

   Choose $B=(1,x,x(x-1))$, $C=(1,1+x)$, and output functional $\\psi(q)=q(2)$. Construct the dual bases, the matrix of $L$, and the pullback. Compare both routes on $p=1+2x+3x^2$ with directly evaluating $p(2)$. **Hint:** find basis coordinates by expanding; do not differentiate.
4. **Audit sample agreement.** The functionals $f(x,y)=5x+3y$ and $g(x,y)=6x+y$ agree at zero and at $(2,1)$. Does this prove equality? Give a counterexample and explain which finite set of exact probes would suffice for two linear functionals on $\\mathbb R^2$. **Hint:** a zero probe imposes no restriction on a linear functional.
5. **Reverse composition.** Let $U:\\mathbb R^3\\to\\mathbb R^2$ be $U(u,v,w)=(u+w,v-w)$ and $\\eta(a,b)=a-2b$. Compute $U^\\vee\\eta$, then $T^\\vee(U^\\vee\\eta)$ for the guided $T$. Check directly against $(U\\circ T)^\\vee\\eta$. **Hint:** write the domain of each functional before composing.
6. **Audit the complex boundary.** Over $\\mathbb C$, set $J(z)=iz$ and $\\psi(w)=w$. Compute the algebraic pullback $J^\\vee\\psi$. Separately use $\\langle z,w\\rangle=\\overline z w$ to find the adjoint $J^\\dagger$ satisfying $\\langle Jz,w\\rangle=\\langle z,J^\\dagger w\\rangle$. Which coefficient uses conjugation? **Hint:** $\\overline{iz}=-i\\overline z$.

## Solutions

### Exercise 1

The basis values give $[\\chi]_{C^\\vee}=(-1,0,-1)^T$. Substitution gives $(T^\\vee\\chi)(x,y)=(-x+y)-2x=-3x+y$. Its $B^\\vee$ coordinates are $(-2,-1)^T$, obtained either by evaluating on $b_1,b_2$ or by $M^T(-1,0,-1)^T$. At the selected input the result is $-7$: directly $-3-4=-7$ on the output, or $(-2)5+(-1)(-3)=-7$ in dual coordinates.

### Exercise 2

The decomposition $(x,y)=(x-y)(2,1)+(-x+2y)(1,1)$ gives dual basis $(x-y,-x+2y)$. Evaluating $\\varphi$ on the primal basis gives coefficients $(4,1)$, and indeed $4(x-y)+(-x+2y)=3x-2y$.

The basis matrix has inverse $\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$. Incorrectly applying it to $(3,-2)^T$ gives $(5,-7)^T$. The input $(1,0)$ has $E$-coordinates $(1,-1)$, so correct evaluation is $4-1=3$, while the proposal gives $5+7=12$. The dual-coordinate rule preserves the functional; the vector-coordinate rule fails this exact witness.

### Exercise 3

Addition and scalar multiplication of coefficient lists show that $L$ is linear.

Expanding $p=a+bx+cx^2$ in $B$ gives coordinates $(a,b+c,c)$. Thus $B^\\vee$ extracts its constant coefficient, the sum of its linear and quadratic coefficients, and its quadratic coefficient. For $q=r+sx$, the $C$-coordinates are $(r-s,s)$, so the output dual basis extracts those two quantities.

The images $L(1)=1$, $L(x)=x$, $L(x(x-1))=0$ give

$$
M=\\begin{pmatrix}1&-1&0\\\\0&1&0\\end{pmatrix}.
$$

Evaluation at 2 has $C^\\vee$ coefficients $(1,3)^T$, since the output basis polynomials have values 1 and 3 there. Therefore the pullback has $B^\\vee$ coefficients $M^T(1,3)^T=(1,2,0)^T$. On a general input it is

$$a+2(b+c)=a+2b+2c=2p(1)-p(0).$$

For the requested polynomial, $[p]_B=(1,5,3)$ and $[Lp]_C=(-4,5)$. The pairings give $1+10=11$ and $-4+15=11$. Directly, $Lp=1+5x$, so $\\psi(Lp)=11$. But $p(2)=17$: evaluating the original polynomial is a different functional. The input $x(x-1)$ supplies another witness, since its image is zero while its value at 2 is 2.

### Exercise 4

Both values at $(2,1)$ are 13, but at $(1,0)$ they are 5 and 6. Their difference $g-f=x-2y$ vanishes along a line; agreeing there does not establish agreement elsewhere. Every linear functional gives zero at zero, so that probe adds no information.

For two linear functionals, exact agreement on the basis $(1,0),(0,1)$ suffices: any vector is their linear combination, and linearity forces agreement on that combination. The assumption of linearity and the spanning property are essential. Rounded numerical agreement would require a separate error analysis.

### Exercise 5

$U^\\vee\\eta$ is the functional $(u+w)-2(v-w)=u-2v+3w$ on $\\mathbb R^3$. Pulling it through $T$ gives $9x$. Directly,

$$
U(T(x,y))=(3x+2y,-3x+y),
$$

so applying $\\eta$ again gives $9x$. This illustrates $(U\\circ T)^\\vee=T^\\vee\\circ U^\\vee$: the last measurement is pulled across the last state map first. The identity holds in general because composition is associative, not because these particular coefficients cancel.

### Exercise 6

The algebraic pullback is the functional $(J^\\vee\\psi)(z)=iz$. In corresponding one-dimensional dual bases its matrix coefficient is $i$, the transpose of the original one-entry matrix. There is no conjugation in precomposition of complex-linear functionals.

For the stated inner product,

$$\\langle Jz,w\\rangle=-i\\overline z w=\\langle z,-iw\\rangle,$$

so $J^\\dagger(w)=-iw$. Its coefficient is the conjugate transpose $\\overline i=-i$. The dual maps functionals to functionals; the adjoint maps vectors to vectors using an inner product. Identifying the two constructions requires that extra structure and its conjugation conventions. The real and complex algebraic pairing proof uses $d^TMc$, while inner-product formulas require the appropriate conjugation.

## Further reading

The algebraic construction also works over $\\mathbb C$, replacing real-linear functionals by complex-linear ones. Its pairing is still $d^Tc$, without conjugating a coefficient. For example, $\\psi(z)=iz$ is complex-linear, while $z\\mapsto\\overline z$ is not: conjugating $iz$ changes the scalar factor from $i$ to $-i$. A Hermitian inner product has different rules because one slot is conjugate-linear. Keep that additional structure explicit when using the optional adjoint audit; the transpose proof itself did not assume any notion of angle, length, or perpendicularity.

[Axler, *Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), Definitions 3.112 and 3.118 and Theorem 3.132, develops dual bases, precomposition, and the transpose matrix in corresponding dual bases. The Atlas [duality chapter](#/item/book-linear-algebra-structure-proofs?chapter=dual-spaces-annihilators-transpose) continues to annihilators and solvability certificates. Keep the types and basis labels when transferring the calculation: a functional coefficient column, a vector coordinate column, and a basis matrix have different jobs even when their dimensions happen to match.
`;export{e as default};