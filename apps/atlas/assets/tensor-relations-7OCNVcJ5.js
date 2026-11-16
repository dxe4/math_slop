var e=`---
id: visual-lab-tensor-relations
title: "Can These Pure Values Extend Linearly?"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Can these pure values extend linearly?

You are given a rule for evaluating a pair of vectors. To evaluate a sum of pure tensors, it is tempting to apply the rule to each pair and add. But one tensor can have many decompositions. Why should those sums give the same answer? A successful calculation on a few decompositions leaves precisely this question unanswered.

The [tensor chapter](#/item/book-linear-algebra-structure-proofs?chapter=multilinear-maps-tensor-products) already develops the universal property, tensor relations, product bases, purity, and 18 solved exercises. This companion puts that theory to work: first rewrite the same tensor while auditing an evaluation rule; then change the tensor while preserving its polynomial output. Those are different operations.

You need vector spaces, linear combinations, linear maps, bases, kernels, and coefficient expansion from [Units 1–4 of the linear algebra course](#/item/course-linear-algebra-standard). We derive the two-by-two determinant test when needed. The polynomial experiment needs degree-at-most-one polynomials and ordinary quadratic factorization. Work over $\\mathbb R$ except in the explicitly optional complex questions; no calculus, inner product, SVD, or physics is assumed. Allow about 20 minutes for predictions and controls, 30 for proofs, and 40 for the five core exercises. Exercise 6 is an optional extension requiring the arithmetic of $i$.

## Guided investigation

Let $V$ and $W$ be separately named real two-dimensional spaces, with bases $(e_1,e_2)$ and $(f_1,f_2)$. Their tensor coefficient array means

$$
C=\\begin{pmatrix}c_{11}&c_{12}\\\\c_{21}&c_{22}\\end{pmatrix}
\\quad\\longleftrightarrow\\quad
\\sum_{i,j=1}^2 c_{ij}e_i\\otimes f_j.
$$

For coordinate columns $v=(v_1,v_2)^{\\mathsf T}$ and $w=(w_1,w_2)^{\\mathsf T}$, a pure tensor has array

$$
\\tau(v,w)=vw^{\\mathsf T}
=\\begin{pmatrix}v_1w_1&v_1w_2\\\\v_2w_1&v_2w_2\\end{pmatrix}.
$$

This is an outer product using ordinary transpose. The array records a tensor in these fixed bases; it has not thereby become an operator or a bilinear-form matrix. No inner product or conjugation is being used.

Consider the vector-valued rule

$$
b:V\\times W\\longrightarrow\\mathbb R^2,
\\qquad
b(v,w)=(v_1w_1-v_2w_2,\\ v_1w_2+v_2w_1).
$$

Each coordinate is linear in either input when the other is fixed, so $b$ is bilinear. Its proposed linear extension is

$$L(C)=(c_{11}-c_{22},\\ c_{12}+c_{21}).$$

Here the output is an ordered pair, rather than a tensor coefficient array. The formula is complex multiplication viewed as a real two-coordinate algebra, although the investigation needs only its displayed real products.

Open [the live workshop](#/labs?lab=visual-lab-tensor-relations). In the first experiment, choose an integer $s$ from $-2$ to $2$ and consider

$$
D_s=e_1\\otimes(f_1-sf_2)+(se_1+e_2)\\otimes f_2.
$$

Before revealing the evidence, predict which objects change with $s$: the two pure summands, their sum as a tensor, the individual $b$-outputs, and the summed output. Give a reason using a tensor relation or a coefficient.

### Keyboard, exact evidence, notes, and print

Tab to the native experiment, parameter, rule, and polynomial-preset selectors and the reveal button; use arrow keys to change a selection. The first experiment offers $s=-2,-1,0,1,2$ and either $b$ or the scalar rule $q$ below. The second offers the two polynomial outputs $1+x^2$ and $1-x^2$, with $t=-2,-1,0,1,2$. These finite bounds select examples; the proofs concern every real parameter. Exact coefficient and output tables provide the mathematical evidence without requiring a picture, motion, or color judgment. Named table regions can be focused and scrolled on narrow screens; proof identities wrap as text in the live workshop. Prediction, reason, and revision notes stay local to the mounted workshop. Changing an experiment or control hides the revealed evidence so that you can make a fresh prediction. Print the revealed state to retain its selected conditions, certificates, and notes; written proofs are not automatically graded.

Expanding the two outer products gives the complete audit:

| Summand | Coefficient array | $b$-output |
| --- | --- | --- |
| $e_1\\otimes(f_1-sf_2)$ | $\\begin{pmatrix}1&-s\\\\0&0\\end{pmatrix}$ | $(1,-s)$ |
| $(se_1+e_2)\\otimes f_2$ | $\\begin{pmatrix}0&s\\\\0&1\\end{pmatrix}$ | $(-1,s)$ |
| Sum | $I=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$ | $(0,0)$ |

Equivalently, the tensor relations give

$$
D_s=e_1\\otimes f_1-se_1\\otimes f_2
   +se_1\\otimes f_2+e_2\\otimes f_2
=e_1\\otimes f_1+e_2\\otimes f_2.
$$

The cancellation proves equality for every real $s$. Selecting five values illustrates it. The individual summands and term outputs change, while the tensor and its total output stay fixed.

Now audit a tempting collapse:

$$
J=(e_1+e_2)\\otimes(f_1+f_2)
=e_1\\otimes f_1+e_1\\otimes f_2+e_2\\otimes f_1+e_2\\otimes f_2.
$$

Its array has all four entries equal to 1. Thus $J\\ne I$: combining both factors introduces the two cross terms $e_1\\otimes f_2$ and $e_2\\otimes f_1$. For the legal second-slot rewrite, set $v=e_1+e_2$ and compare

$$J=v\\otimes(f_1+f_2)=v\\otimes f_1+v\\otimes f_2.$$

The direct $b$-output is $(0,2)$; the split outputs are $(1,1)$ and $(-1,1)$, whose sum is also $(0,2)$. This checks a relation at the new tensor $J$. It does not claim that $J$ equals the earlier tensor $I$.

## A rule that passes misleading tests

Choose the basis-defined coordinate pairing $d(v,w)=v_1w_1+v_2w_2$, and set

$$q:V\\times W\\longrightarrow\\mathbb R,
\\qquad q(v,w)=(v_1w_1+v_2w_2)^2.$$

Its output is a scalar. Since $V$ and $W$ are separately named spaces, this pairing is a chosen coordinate formula, with no assumed geometry between their vectors.

The rule survives several plausible tests. For every nonzero real $\\lambda$,

$$q(\\lambda v,\\lambda^{-1}w)=q(v,w).$$

Its four basis-pair values are $1,0,0,1$, the same as those of the linear functional $C\\mapsto\\operatorname{tr}C=c_{11}+c_{22}$. Moreover, on every $D_s$ the proposed term sum is

$$q(e_1,f_1-sf_2)+q(se_1+e_2,f_2)=1+1=2.$$

Predict whether these agreements establish a linear extension. Then use the mandatory $J$ rewrite with $v=e_1+e_2$:

$$
q(v,f_1+f_2)=4,
\\qquad
q(v,f_1)+q(v,f_2)=1+1=2.
$$

The same tensor is represented on both sides of the rewrite. A linear map on tensors would have to give equal values, so **no linear extension can realize all the pure values of $q$**. One failed defining relation is decisive. Reciprocal rescaling, basis values, and even an entire successfully tested family of decompositions did not establish separate-slot additivity. Homogeneity also fails: $q(2e_1,f_1)=4$, whereas linearity would require $2q(e_1,f_1)=2$.

There is a useful boundary here. The pure value really does depend only on the pure tensor, since

$$q(v,w)=\\bigl(\\operatorname{tr}(vw^{\\mathsf T})\\bigr)^2.$$

In fact $Q(C)=(\\operatorname{tr}C)^2$ is a well-defined **nonlinear** function on every tensor coefficient array. It agrees with $q$ on pure tensors. But $Q(I)=4$, while adding the $q$-values over a $D_s$ decomposition gives 2. And at $J$, the single pure value is 4 while its legal split gives 2. The obstruction concerns linear extension and additive evaluation across decompositions, not the existence of a function on tensors.

## Prove independence for every decomposition

Here is the universal-property proof behind the successful rule. It must cover an arbitrary target and every finite decomposition, rather than only the selected $b$ and $D_s$.

Start with the ordinary vector space $T=M_2(\\mathbb R)$ of coefficient arrays and the outer-product map $\\tau:V\\times W\\to T$. For each entry,

$$(v_i+v_i')w_j=v_iw_j+v_i'w_j,
\\qquad (av_i)w_j=a(v_iw_j),$$

and the analogous second-slot identities hold. Thus $\\tau$ is bilinear. Let $X$ be **any real vector space**, with no finite-dimensional assumption, and let $h:V\\times W\\to X$ be bilinear. Define directly from the four entries of $C$

$$H(C)=\\sum_{i,j=1}^2c_{ij}h(e_i,f_j).$$

This is a definition on an array with unique entries, so it has not assumed that a decomposition is unique. For arrays $C,D$ and real $a,b$,

$$H(aC+bD)=\\sum_{i,j}(ac_{ij}+bd_{ij})h(e_i,f_j)
=aH(C)+bH(D).$$

Hence $H$ is linear. Expanding both slots of $h$ gives

$$
H(\\tau(v,w))=\\sum_{i,j}v_iw_jh(e_i,f_j)
=h\\left(\\sum_i v_ie_i,\\sum_j w_jf_j\\right)=h(v,w).
$$

Now take **any finite decomposition** $C=\\sum_{r=1}^n\\tau(v_r,w_r)$. It says entry by entry that $c_{ij}=\\sum_r v_{ri}w_{rj}$. Therefore

$$
\\begin{aligned}
\\sum_{r=1}^n h(v_r,w_r)
&=\\sum_{r=1}^n\\sum_{i,j}v_{ri}w_{rj}h(e_i,f_j)\\\\
&=\\sum_{i,j}\\left(\\sum_{r=1}^n v_{ri}w_{rj}\\right)h(e_i,f_j)\\\\
&=\\sum_{i,j}c_{ij}h(e_i,f_j)=H(C).
\\end{aligned}
$$

All sums are finite, including the empty sum for zero. This proves decomposition independence for every presentation of $C$. No convergence or dimension condition on $X$ is needed.

For uniqueness, let $K:T\\to X$ be another linear map with $K(\\tau(v,w))=h(v,w)$. Each matrix unit $E_{ij}=\\tau(e_i,f_j)$ then satisfies $K(E_{ij})=h(e_i,f_j)$. Every array is $\\sum c_{ij}E_{ij}$, so linearity forces $K(C)=H(C)$. We have proved existence and uniqueness in this concrete model; we did not invoke an unproved universal property to establish it.

Thus $(T,\\tau)$ is a tensor product model, identified with the chapter's $V\\otimes W$ by $E_{ij}\\leftrightarrow e_i\\otimes f_j$. Pure tensors span this space because the four $E_{ij}$ are pure. They need not fill it. Conversely, if a proposed rule is the restriction of a linear map along $\\tau$, it is bilinear: composition of the slotwise linear identities for $\\tau$ with a linear map preserves those identities. This proves both directions of the extension test.

For $b$, its four basis outputs give exactly $H=L$. For $q$, its four basis values force the only possible linear extension to be $\\operatorname{tr}C$; the $J$ witness proves that extension cannot agree with all the proposed pure values.

## Purity and the exact kernel

A tensor is **pure**, or **decomposable**, when it has the form $v\\otimes w$. We include zero: $0\\otimes w=0$. For a two-by-two array define

$$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc.$$

An outer product has determinant $v_1w_1v_2w_2-v_1w_2v_2w_1=0$. Conversely, a nonzero array of determinant zero has a nonzero column, and its other column is a scalar multiple of that column: solve using a nonzero entry, and the determinant equation enforces the remaining entry. Taking that column as $v$ and the two column multipliers as the entries of $w$ expresses the array as $vw^{\\mathsf T}$. The zero array is already pure. Consequently

$$C\\text{ is pure}\\quad\\Longleftrightarrow\\quad\\det C=0.$$

A nonzero pure array has one independent column, hence matrix rank one; a nonzero determinant means rank two. In particular $I$ is nonpure, as the tensor chapter's familiar example already shows.

Solve $L(C)=(0,0)$ by matching its two coordinates:

$$
\\ker L=
\\left\\{\\begin{pmatrix}a&b\\\\-b&a\\end{pmatrix}:a,b\\in\\mathbb R\\right\\}.
$$

This is the kernel of the **linear extension** $L$. For a nonzero member its determinant is $a^2+b^2>0$. Hence no nonzero real pure tensor maps to zero, even though the entire two-dimensional displayed subspace maps to zero.

That does not make $L$ injective even on pure tensors:

$$L(e_1\\otimes f_1)=L(-e_2\\otimes f_2)=(1,0).$$

These are distinct pure tensors; their difference is $I\\in\\ker L$, which is nonpure. The purity of a difference is a separate question from the purity of its two terms.

### Optional complex-field boundary

The positivity argument used real scalars. Extend the same coordinate formula complex-bilinearly to $\\mathbb C^2\\times\\mathbb C^2\\to\\mathbb C^2$. Then

$$
b_{\\mathbb C}((1,i),(1,-i))=(0,0),
\\qquad
(1,i)(1,-i)^{\\mathsf T}=
\\begin{pmatrix}1&-i\\\\i&1\\end{pmatrix}\\ne0.
$$

Thus a nonzero pure tensor now belongs to the extension's kernel. This map has two complex coordinates in each input; it is different from the one-dimensional complex multiplication map $\\mathbb C\\times\\mathbb C\\to\\mathbb C$. Ordinary transpose still means no conjugation. The optional polynomial exercise below changes a different map's scalar field and must be interpreted separately.

## Preserve a polynomial output, change the tensor

Let $P_1(\\mathbb R)$ contain all polynomials of degree at most one, including constants and zero; use the ordered basis $(1,x)$ in each slot. Ordinary multiplication is bilinear. Its unique linear extension has type

$$\\mu:P_1(\\mathbb R)\\otimes P_1(\\mathbb R)\\longrightarrow P_2(\\mathbb R)$$

and coefficient formula

$$
\\mu(C)=c_{00}+(c_{01}+c_{10})x+c_{11}x^2,
\\qquad C=\\begin{pmatrix}c_{00}&c_{01}\\\\c_{10}&c_{11}\\end{pmatrix}.
$$

The index 0 denotes the constant basis element; index 1 denotes $x$. The slots remain ordered even though multiplication is commutative. For example, $1\\otimes x$ and $x\\otimes1$ have different arrays and the same polynomial image.

The extension is onto: $1\\otimes1$, $1\\otimes x$, and $x\\otimes x$ map to the basis $1,x,x^2$ of $P_2$. The zero-output coefficient equations are

$$c_{00}=0,\\qquad c_{01}+c_{10}=0,\\qquad c_{11}=0.$$

Thus its complete kernel is

$$\\ker\\mu=\\mathbb R(1\\otimes x-x\\otimes1).$$

More generally, matching **all three coefficients** of $p=a+bx+cx^2$ gives every preimage, called its fiber:

$$
\\mu^{-1}(a+bx+cx^2)=
\\left\\{C_t=\\begin{pmatrix}a&t\\\\b-t&c\\end{pmatrix}:t\\in\\mathbb R\\right\\}.
$$

Indeed any preimage must have exactly these entries, and every displayed array has the requested output. Moreover,

$$C_t-C_u=(t-u)\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}.$$

Distinct parameters therefore give distinct tensors, with difference in $\\ker\\mu$. In the live polynomial experiment, predict purity before revealing the determinant and output table.

| Fixed polynomial output | Complete real fiber | Determinant | Pure lifts |
| --- | --- | --- | --- |
| $1+x^2$ | $\\begin{pmatrix}1&t\\\\-t&1\\end{pmatrix}$ | $1+t^2$ | None |
| $1-x^2$ | $\\begin{pmatrix}1&t\\\\-t&-1\\end{pmatrix}$ | $t^2-1$ | Exactly $t=-1,1$ |

For $1-x^2$, the pure tensors are $(1-x)\\otimes(1+x)$ at $t=1$ and $(1+x)\\otimes(1-x)$ at $t=-1$. They have the same output and are different ordered tensors. Every other real member of this fiber is nonpure. For $1+x^2$, no real member is pure, although $I=1\\otimes1+x\\otimes x$ is a valid preimage under $\\mu$.

Consequently multiplication $P_1(\\mathbb R)\\times P_1(\\mathbb R)\\to P_2(\\mathbb R)$ is not onto, while its linear tensor extension is onto. The extension can use sums of products rather than one product. There is no conflict between these image statements.

Record the change of operation explicitly:

| Family | What remains fixed | What changes |
| --- | --- | --- |
| $D_s$ | The input tensor $I$ and its $L$-output | A presentation as two pure summands |
| $C_t$ | The polynomial output $\\mu(C_t)$ | The input tensor itself |

## Classify every real pure lift

For an arbitrary real target $p=a+bx+cx^2$,

$$\\det C_t=ac-t(b-t)=t^2-bt+ac
=\\left(t-\\frac b2\\right)^2-\\frac{b^2-4ac}{4}.$$

Write $\\Delta=b^2-4ac$. The determinant test now proves the full classification:

- If $\\Delta<0$, no real lift is pure.
- If $\\Delta=0$, exactly one tensor lift is pure, at $t=b/2$.
- If $\\Delta>0$, exactly two tensor lifts are pure, at $t=(b\\pm\\sqrt\\Delta)/2$.

This is a criterion for the **existence and number of pure lifts of an output**. To decide whether a specified lift is pure, test its own determinant. Factoring the output does not make every tensor in its fiber pure.

The calculation covers degree at most two honestly. A genuine linear target has $c=0,b\\ne0$, giving two pure lifts, at $t=0,b$. A nonzero constant has $b=c=0$, giving the single pure lift $a(1\\otimes1)$. For the zero polynomial, the complete fiber is $\\begin{pmatrix}0&t\\\\-t&0\\end{pmatrix}$ with determinant $t^2$; its only pure lift is the zero tensor.

Finally, a nonzero pure tensor has many factor representatives:

$$v\\otimes w=(\\lambda v)\\otimes(\\lambda^{-1}w),\\qquad\\lambda\\in\\mathbb R\\setminus\\{0\\}.$$

Thus exactly one pure tensor lift need not mean exactly one ordered factor pair. The next tasks require you to keep separate a target polynomial, a particular input tensor, a pure lift of the target, and factor pairs representing that pure tensor.

## Exercises

Attempt these changed tasks before reading their separate worked solutions. They are outside the two fixed polynomial presets and the selected $b,q$ controls. Justify tensor equalities and whole-fiber claims by equations, rather than by recalling a revealed state.

1. **A new plausible rule.** Let $r(v,w)=(v_1w_1-v_2w_2)^2$. For $v=(2,-1)$, compare $r(v,f_1+f_2)$ with $r(v,f_1)+r(v,f_2)$. Does $r$ admit a linear tensor extension? Prove that reciprocal rescaling nevertheless preserves it. **Hint:** identify the exact second-slot relation that a linear extension would have to respect.
2. **A new vector-valued target.** Set $h(v,w)=(v_1w_1+2v_1w_2-v_2w_1,\\ v_2w_2)$. Prove bilinearity, derive its unique linear extension $H$, and evaluate $H\\!\\begin{pmatrix}1&-2\\\\3&0\\end{pmatrix}$. Prove independence for every finite decomposition of an arbitrary array, not merely two displayed presentations. **Hint:** collect the four sums $\\sum_r v_{ri}w_{rj}$.
3. **An image does not identify its input.** For the guided $L$, compare $C=\\begin{pmatrix}2&1\\\\-1&3\\end{pmatrix}$ and $D=\\begin{pmatrix}-1&0\\\\0&0\\end{pmatrix}$. Compute both outputs, their difference, and the two input determinants. What does their shared output establish, and what does it leave undecided? **Hint:** relate $C-D$ to the exact kernel.
4. **A fresh polynomial output.** Find the complete real fiber of $2-3x+x^2$ under $\\mu$, and classify every pure tensor in it. Give ordered polynomial factors for each pure lift and subtract the two lifts. Then decide whether the specified tensor $2(1\\otimes1)-3(x\\otimes1)+x\\otimes x$ is pure. **Hint:** match all three coefficients before factoring a determinant.
5. **A repeated root.** Find the complete fiber of $1-2x+x^2$ and its pure lifts. Does uniqueness of the pure tensor imply uniqueness of its ordered factor pair? Describe all factor pairs for the nonzero pure lift. **Hint:** distinguish the parameter $t$ selecting a tensor from a reciprocal scalar selecting its representatives.
6. **Optional scalar-field transfer.** Work explicitly in $P_1(\\mathbb C)\\otimes_{\\mathbb C}P_1(\\mathbb C)$. Find all pure lifts of $1+x^2$ and give their ordered factors. Is the fixed tensor $I=1\\otimes1+x\\otimes x$ now pure? Explain the difference between changing the available lifts and changing this particular tensor's purity. **Hint:** solve $1+t^2=0$ over $\\mathbb C$ and also calculate $\\det I$.

## Worked solutions

### Exercise 1

At the unsplit input,

$$r((2,-1),(1,1))=(2-(-1))^2=9.$$

At the two split inputs the values are $2^2=4$ and $(-(-1))^2=1$. Thus the proposed evaluation gives $9\\ne4+1=5$ on the legal relation

$$v\\otimes(f_1+f_2)=v\\otimes f_1+v\\otimes f_2.$$

No linear tensor extension can realize all these values. For nonzero $\\lambda$, every coordinate product $(\\lambda v_i)(\\lambda^{-1}w_i)=v_iw_i$, so reciprocal rescaling preserves $r$. That successful property does not repair the failed additivity relation. As with $q$, the conclusion concerns linear extension: $R(C)=(c_{11}-c_{22})^2$ is a well-defined nonlinear extension of the pure values.

### Exercise 2

Each component of $h$ is a sum of coordinate products containing one coordinate from each slot. Distributing a sum or scalar in either slot therefore proves its bilinearity. The basis outputs are

$$
\\begin{aligned}
h(e_1,f_1)&=(1,0),\\quad h(e_1,f_2)=(2,0),\\\\
h(e_2,f_1)&=(-1,0),\\quad h(e_2,f_2)=(0,1).
\\end{aligned}
$$

Consequently

$$H(C)=(c_{11}+2c_{12}-c_{21},\\ c_{22}),
\\qquad H\\!\\begin{pmatrix}1&-2\\\\3&0\\end{pmatrix}=(-6,0).$$

For any finite decomposition $C=\\sum_r v_rw_r^{\\mathsf T}$, direct expansion gives

$$
\\begin{aligned}
\\sum_r h(v_r,w_r)
=\\biggl(&\\sum_rv_{r1}w_{r1}+2\\sum_rv_{r1}w_{r2}
          -\\sum_rv_{r2}w_{r1},\\quad\\sum_rv_{r2}w_{r2}\\biggr)\\\\
&=(c_{11}+2c_{12}-c_{21},\\ c_{22})=H(C).
\\end{aligned}
$$

This proves independence for every finite presentation. The coefficient formula proves $H$ linear and agreement on pure tensors; any other linear factor agrees on the four matrix units, proving uniqueness. As an illustration, the requested array has row decomposition $e_1\\otimes(f_1-2f_2)+3e_2\\otimes f_1$, with outputs $(-3,0)+(-3,0)$. That computation checks the answer but does not replace the general identity.

### Exercise 3

The outputs are

$$L(C)=(2-3,1-1)=(-1,0),\\qquad L(D)=(-1,0).$$

Their difference is

$$C-D=\\begin{pmatrix}3&1\\\\-1&3\\end{pmatrix}\\in\\ker L.$$

It is nonzero, so the inputs are different. Also $\\det C=6+1=7$, whereas $\\det D=0$. Thus $C$ is nonpure and $D=(-e_1)\\otimes f_1$ is pure. Equal outputs establish a kernel difference; they do not identify the tensors or transfer purity from one input to the other. The output $(-1,0)$ is a vector in the target $\\mathbb R^2$; the ranks being tested belong to the two input coefficient arrays.

### Exercise 4

The coefficient equations require $c_{00}=2$, $c_{01}+c_{10}=-3$, and $c_{11}=1$. Therefore the entire fiber is

$$C_t=\\begin{pmatrix}2&t\\\\-3-t&1\\end{pmatrix},\\qquad t\\in\\mathbb R.$$

Every displayed array has the requested output, and the equations exclude any other array. Its determinant is

$$\\det C_t=2+3t+t^2=(t+1)(t+2).$$

Exactly $t=-1,-2$ give pure tensors:

$$
C_{-1}=\\begin{pmatrix}2&-1\\\\-2&1\\end{pmatrix}
=(1-x)\\otimes(2-x),
$$

$$
C_{-2}=\\begin{pmatrix}2&-2\\\\-1&1\\end{pmatrix}
=(2-x)\\otimes(1-x).
$$

Expanding each ordered outer product verifies the arrays. Their difference is

$$C_{-1}-C_{-2}=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}
=1\\otimes x-x\\otimes1\\ne0,$$

which lies in $\\ker\\mu$. Commutativity explains their equal polynomial outputs, not equality of the ordered tensors.

The specified tensor is $C_0=\\begin{pmatrix}2&0\\\\-3&1\\end{pmatrix}$ with determinant 2, so it is nonpure. Factoring the polynomial as $(1-x)(2-x)$ proves that some pure lifts exist; it does not establish purity of this specified lift.

### Exercise 5

Matching coefficients gives the complete fiber

$$C_t=\\begin{pmatrix}1&t\\\\-2-t&1\\end{pmatrix},\\qquad
\\det C_t=1+2t+t^2=(t+1)^2.$$

Hence only $t=-1$ is pure, giving the single tensor

$$C_{-1}=\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}
=(1-x)\\otimes(1-x).$$

Its polynomial factor pairs are exactly

$$\\bigl(\\lambda(1-x),\\ \\lambda^{-1}(1-x)\\bigr),
\\qquad\\lambda\\in\\mathbb R\\setminus\\{0\\}.$$

To see completeness, a product equal to this nonzero quadratic must have two degree-one factors. Each factor's root is a root of $(1-x)^2$, hence is 1. The factors are therefore scalar multiples $\\lambda(1-x)$ and $\\rho(1-x)$, and their product requires $\\lambda\\rho=1$. These infinitely many ordered factor pairs all represent the same pure tensor. Other fiber parameters select different, nonpure tensors.

### Exercise 6

After changing scalars, the full fiber remains

$$C_t=\\begin{pmatrix}1&t\\\\-t&1\\end{pmatrix},\\qquad t\\in\\mathbb C.$$

Its determinant $1+t^2$ vanishes exactly at $t=i,-i$. The two ordered pure lifts are

$$C_i=(1-ix)\\otimes(1+ix),\\qquad
C_{-i}=(1+ix)\\otimes(1-ix).$$

Their common product is $1+x^2$. These lifts were unavailable with real coefficients. But the fixed tensor $I=C_0$ still has determinant 1 over $\\mathbb C$, so it remains rank two and nonpure. A larger field changes which other tensors can be pure lifts of the output; it does not turn this fixed array into an outer product. This polynomial multiplication map is separate from the complex-bilinear $\\mathbb C^2$ coordinate formula in the earlier optional boundary.

## Continue the proof

Return to [Multilinear Maps and Tensor Products](#/item/book-linear-algebra-structure-proofs?chapter=multilinear-maps-tensor-products) for the basis-independent definition, quotient construction, functoriality, and its full exercise program. The [linear-information workshop](#/item/visual-lab-linear-information) develops the related requirement that an output assignment respect relations among generators. Here the relations come from separate-slot bilinearity, and the full polynomial fiber adds a second distinction between a tensor and its image.

[Axler, *Linear Algebra Done Right*, fourth edition, Section 9D](https://linear.axler.net/LADR4e.pdf), 9.74 (printed p. 373), 9.76 (p. 374), and 9.79 (pp. 375–376), supplies the product basis, outer-product coefficients, and arbitrary-target factorization. The paragraph following 9.79 explains why nonunique decompositions prevent simply asserting an extension from pure values.

[Keith Conrad's *Tensor Products*](https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf), Example 2.1 (pp. 4–5) and Definition 3.1 (p. 5), distinguishes the outer-product image from its linear span and includes the distinguished bilinear map in the universal property. [Gowers's Cambridge exposition](https://www.dpmms.cam.ac.uk/~wtg10/tensors3.html), in the discussion preceding its universal-property proposition, makes equality across different presentations an explicit proof obligation. The workshop examples and exercises are derived instances of this framework. Exact finite control states illustrate the arguments; the identities above supply the general proofs.
`;export{e as default};