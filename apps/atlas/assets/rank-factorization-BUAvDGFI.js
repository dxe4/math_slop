var e=`---
id: visual-lab-rank-factorization
title: "Rank Factorization: Keep the Original Columns"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Rank factorization: keep the original columns

Elimination tells you which columns are independent. To describe the outputs of the original map, you must then return to its original columns. This investigation explains that instruction through a factorization: first compute a short coordinate vector, then build the actual output from a basis of the image.

You need systems of equations, span, independence, kernels, and matrix multiplication from [Units 1–3 of the linear algebra course](#/item/course-linear-algebra-standard). Neither calculus nor inner products are required. Work over $\\mathbb R$. Allow 20 minutes for prediction and the instrument, 25 for the proof, and 45 for the exercises. Write down why a proposed factorization should work before asking the instrument to check it.

## Guided investigation

Consider the map $A:\\mathbb R^4\\to\\mathbb R^3$ with matrix

$$
A=\\begin{pmatrix}
1&0&1&2\\\\
0&1&2&-1\\\\
1&1&3&1
\\end{pmatrix}.
$$

Before reducing it, predict its rank and describe its possible outputs. Which columns could serve as a basis? The third row is the sum of the first two, so every output satisfies $z=x+y$. The first two columns are independent, because their first two coordinates are $(1,0)$ and $(0,1)$. They also generate every vector in that plane. Thus the rank is exactly 2.

Open [the live laboratory](#/labs?lab=visual-lab-rank-factorization). Choose a fixed matrix preset, select columns from the original matrix or its reduced form, and compare a prediction with the certificate. Probe-vector controls accept integers from $-2$ to $2$. Matrix calculations use exact rational arithmetic; the written arguments apply to every real input vector. Native controls support keyboard use, and matrices, equations, and text tables provide the evidence without animation. Wide formulas and tables can be scrolled with the keyboard. Optional notes remain only while the laboratory is mounted; copy them to retain them.

Subtracting rows one and two from row three gives

$$
\\operatorname{rref}A=
\\begin{pmatrix}1&0&1&2\\\\0&1&2&-1\\\\0&0&0&0\\end{pmatrix}.
$$

The pivot positions are columns 1 and 2. Take those columns from **the original matrix** and call the resulting matrix $C$:

$$
C=\\begin{pmatrix}1&0\\\\0&1\\\\1&1\\end{pmatrix},
\\qquad
R=\\begin{pmatrix}1&0&1&2\\\\0&1&2&-1\\end{pmatrix}.
$$

Here $C:\\mathbb R^2\\to\\mathbb R^3$ builds an output from two coordinates, while $R:\\mathbb R^4\\to\\mathbb R^2$ computes those coordinates. Check their shapes before multiplying: the composite is $3\\times4$, as required.

## Why the product equals the whole map

Write the original columns as $a_1,a_2,a_3,a_4$. They satisfy

$$a_3=a_1+2a_2,\\qquad a_4=2a_1-a_2.$$

The columns of $R$ record exactly these representations, including the representations of $a_1,a_2$ themselves. Column $j$ of $CR$ therefore equals $a_j$ for every $j$. This proves $A=CR$ as a matrix identity, so it proves $Ax=C(Rx)$ for every input.

More generally, choose a basis of the image from original columns of an $m\\times n$ rank-$r$ matrix. Put these columns into an $m\\times r$ matrix $C$. Express each original column uniquely in that basis and place its coefficients into the corresponding column of an $r\\times n$ matrix $R$. The same column argument proves $A=CR$. This is a **rank factorization**.

Elimination preserves column relations because its row operations are reversible. A combination of columns is zero before reduction exactly when the same combination is zero afterwards. Consequently the reduced matrix reveals the coefficients expressing dependent columns in the pivot columns. The pivot indices locate the basis; the original columns supply its actual vectors.

Try $x=(1,2,-1,1)$. First

$$Rx=(2,-1),\\qquad C(Rx)=(2,-1,1)=Ax.$$

The coordinate pair is not the three-dimensional output. The second multiplication places it in the plane $z=x+y$. Agreement for this input is a useful check. The column identity above establishes agreement for all inputs; a single successful probe cannot replace it.

## What goes wrong with reduced columns

Taking the reduced matrix's first two columns gives

$$
C_{\\mathrm{wrong}}=\\begin{pmatrix}1&0\\\\0&1\\\\0&0\\end{pmatrix}.
$$

Then $C_{\\mathrm{wrong}}R=\\operatorname{rref}A$, whose image is the plane $z=0$. It is a valid factorization of the reduced matrix. It does not reconstruct $A$, whose image is $z=x+y$. On the probe above it returns $(2,-1,0)$ instead of $(2,-1,1)$.

The instrument labels the selected source. A certificate for reconstructing the reduced source certifies that source; retain the original matrix as the target when your claim concerns $A$. Row reduction preserves rank and the kernel, but can change the image as a subset of the output space.

In fact, a kernel probe can conceal this mistake. The vector $h=(-1,-2,1,0)$ satisfies $Rh=0$, so $C(Rh)=0$ and $C_{\\mathrm{wrong}}(Rh)=0$. Both routes agree there even though the matrices differ. Always check the product matrix, not just a convenient input.

One general explanation is to write row reduction as $EA$, where $E$ is an invertible matrix representing the reversible row operations. Then $EAx=0$ exactly when $Ax=0$, explaining the shared kernel. Its image is $E(\\operatorname{im}A)$: applying an invertible output transformation preserves the dimension, but can move the subspace. Keeping the codomain coordinates fixed makes that change visible.

## What the factors reveal

$C$ is injective: if $C(u,v)=0$, its first two coordinates give $u=v=0$. Therefore

$$Ax=0\\quad\\Longleftrightarrow\\quad C(Rx)=0\\quad\\Longleftrightarrow\\quad Rx=0.$$

Solving the last system gives

$$
\\ker A=\\ker R=
\\operatorname{span}\\{(-1,-2,1,0),(-2,1,0,1)\\}.
$$

The free third and fourth coordinates prove that these two vectors generate every kernel vector and are independent. The factors separate two jobs: $R$ records which inputs disappear and $C$ describes where outputs live.

For example, to solve $Ax=(2,-1,1)$, first find the image coordinates. The first two rows of $C$ force the pair $(2,-1)$, and its third row verifies compatibility with the target's third coordinate. Next solve $Rx=(2,-1)$. The complete answer is

$$
x=(2,-1,0,0)+s(-1,-2,1,0)+t(-2,1,0,1),
\\qquad s,t\\in\\mathbb R.
$$

Solving the $C$ equation supplies a unique coordinate pair for an attainable output; solving the $R$ equation need not supply a unique input. If the requested output were $(2,-1,0)$, the $C$ equation would already be inconsistent, since its third coordinate must equal the sum of its first two. This separates an image test from the remaining free-input calculation.

In the general construction, $R$ is onto $\\mathbb R^r$: its columns at the selected basis positions are the standard coordinate vectors. An input supported at those positions can therefore produce any intermediate coordinate vector. The factors describe the whole image, without including unreachable intermediate directions.

Two intermediate coordinates are also the smallest possible number. Suppose $A=UV$ with $U$ of shape $3\\times k$ and $V$ of shape $k\\times4$. Every output of $UV$ lies in the span of the $k$ columns of $U$. Hence

$$2=\\operatorname{rank}A\\le\\operatorname{rank}U\\le k.$$

Our $CR$ construction attains $k=2$. Independently, the top-left $2\\times2$ submatrix of $A$ is the identity, whose determinant is 1; this nonzero minor records that its two columns cannot be dependent. The exact product supplies the matching upper bound. No rounding threshold is involved.

You may select three original columns that still span the same image. A three-coordinate factorization is possible, but its coordinates are redundant and generally nonunique. For example, selecting columns 1, 2, 3 gives $\\widetilde C=[a_1\\ a_2\\ a_3]$. One factor is $\\widetilde R$ formed by appending a zero row to $R$. Adding $(-1,-2,1)^{\\mathsf T}q$ to $\\widetilde R$, for any $1\\times4$ row $q$, leaves the product unchanged. These are valid factorizations with three intermediate coordinates, although they do not attain the minimum of two. Injectivity, and therefore the proof of kernel equality above, must be reconsidered when columns are redundant.

## Exercises

Attempt the changed matrix before reading its solution:

$$
B=\\begin{pmatrix}
1&2&0&1&0\\\\
2&4&1&1&0\\\\
0&0&1&-1&0
\\end{pmatrix}.
$$

1. **Nonadjacent pivots.** Find a basis using original columns of $B$, construct $B=CR$, describe the image, and find a complete kernel basis. Compute the action on $(1,-1,2,1,-2)$ through the two factors. Prove the intermediate dimension is minimal. **Hint:** the second column depends on the first; do not assume the first two columns form a basis.
2. **Another basis for the same image.** For $B$, choose original columns 2 and 4 in that order. Find the new coordinate matrix $R'$ and verify the product. Does changing these two factors change $B$? **Hint:** express every original column using the selected pair.
3. **Rank one.** Factor

   $$F=\\begin{pmatrix}1&2&0&-1\\\\2&4&0&-2\\\\-1&-2&0&1\\end{pmatrix}$$

   through the smallest possible space, and find its image and kernel. **Hint:** describe every column as a multiple of one nonzero column.
4. **Rank zero.** Let $Z$ be the zero $2\\times3$ matrix. If zero-dimensional intermediate spaces are allowed, find its minimal intermediate dimension, factors, image, and kernel. Explain how their product is defined. **Hint:** an empty sum equals zero.
5. **Same kernel, different maps.** Compare $P=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$ and $Q=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$. Factor each, find their kernels and images, and give both an input on which their outputs agree and one on which they differ. **Hint:** their coordinate row can be the same while the output column changes.
6. **Any selected subset.** Classify which subsets of $B$'s original columns span its image, which give unique coordinates, and which give redundant coordinates. Account for the zero fifth column. Give a valid factorization with three selected columns. **Hint:** group nonzero columns by proportionality before checking pairs.

## Solutions

### Exercise 1

The reduced matrix has nonzero rows $(1,2,0,1,0)$ and $(0,0,1,-1,0)$, so pivot indices are 1 and 3. From the original columns obtain

$$
C=\\begin{pmatrix}1&0\\\\2&1\\\\0&1\\end{pmatrix},\\qquad
R=\\begin{pmatrix}1&2&0&1&0\\\\0&0&1&-1&0\\end{pmatrix}.
$$

Column multiplication verifies $B=CR$. Every output is $(u,2u+v,v)$; conversely every such vector is $C(u,v)$. Thus the image is the plane $y=2x+z$, with the displayed two columns as an independent basis.

Solving $Rx=0$ gives $x_1=-2x_2-x_4$ and $x_3=x_4$, with $x_2,x_4,x_5$ free. Therefore a kernel basis is

$$(-2,1,0,0,0),\\qquad(-1,0,1,1,0),\\qquad(0,0,0,0,1).$$

Independent free coordinates prove both spanning and independence. For the requested input, $Rx=(0,1)$ and $Bx=(0,1,1)$. Rank is 2, so every intermediate space has dimension at least 2 by the image-span argument; these factors attain it.

### Exercise 2

The new output-basis matrix and coordinate matrix are

$$
C'=\\begin{pmatrix}2&1\\\\4&1\\\\0&-1\\end{pmatrix},\\qquad
R'=\\begin{pmatrix}1/2&1&1/2&0&0\\\\0&0&-1&1&0\\end{pmatrix}.
$$

For instance, $b_1=\\tfrac12 b_2$ and $b_3=\\tfrac12 b_2-b_4$; the remaining columns have their displayed coefficients. These five column checks prove $C'R'=B$. The coordinates change, while the original map and its image remain the same.

### Exercise 3

Take $C=(1,2,-1)^{\\mathsf T}$ and $R=(1,2,0,-1)$. Their product is $F$, and the image is the line spanned by $C$. The nonzero first column proves rank at least 1, so this one-coordinate factorization is minimal. The equation $Rx=0$ gives $x_1=-2x_2+x_4$, with kernel basis

$$(-2,1,0,0),\\qquad(0,0,1,0),\\qquad(1,0,0,1).$$

Each free coordinate independently selects one generator, proving completeness.

### Exercise 4

Use $k=0$, a $2\\times0$ matrix $C$ and a $0\\times3$ matrix $R$. Each entry of $CR$ is a sum over no indices, so it is zero. The composite passes through $\\mathbb R^0=\\{0\\}$. Its image is $\\{0\\}$ and its kernel is all $\\mathbb R^3$. Dimension cannot be negative, so zero is minimal. If a convention insists on positive intermediate dimensions, a one-coordinate zero factorization works, but that is a different convention.

### Exercise 5

$P=(1,0)^{\\mathsf T}(1,1)$ and $Q=(0,1)^{\\mathsf T}(1,1)$. Both kernels are $\\operatorname{span}\\{(1,-1)\\}$, but their images are the first and second coordinate axes respectively. On $(1,-1)$ both return zero; on $(1,0)$ they return $(1,0)$ and $(0,1)$. Equal rank and equal kernels do not specify an output map.

### Exercise 6

The nonzero direction classes are $\\{1,2\\}$, $\\{3\\}$, and $\\{4\\}$. Their coordinates in Exercise 1's basis have directions $(1,0)$, $(0,1)$, and $(1,-1)$, so any pair from different classes is independent. A selected subset spans exactly when it meets at least two classes. Column 5 contributes no direction.

The five basis pairs are $\\{1,3\\}$, $\\{1,4\\}$, $\\{2,3\\}$, $\\{2,4\\}$, and $\\{3,4\\}$. Exactly these selections give unique coordinates for every output and minimal rank factorizations. Larger spanning selections are redundant, so coefficients are nonunique. A subset failing to span cannot reconstruct all columns of $B$.

For a concrete redundant factor, select $[b_1\\ b_3\\ b_5]$ and append a zero row to Exercise 1's $R$. The product is $B$. Replacing that last row by any row still gives $B$, since $b_5=0$. This explicitly distinguishes redundancy from impossibility.

## Further reading and boundaries

[MIT OpenCourseWare, Elimination and Factorization A = CR](https://ocw.mit.edu/courses/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/resources/res-18010-strang-part-2-version-3_mp4/) develops how elimination exposes coefficients in dependent columns. [Axler, *Linear Algebra Done Right*, fourth edition, Section 3C, printed pages 77–79](https://linear.axler.net/LADR4e.pdf) proves the column–row construction and equality of row and column rank.

These exact examples establish image bases, kernel bases, and minimal dimension. They do not assess floating-point conditioning or measurement uncertainty. Continue to the [stable linear algebra workflow](#/item/recipe-stable-linear-algebra-workflow) for those questions. Keep the three certificates distinct in your own work: which original columns form a basis, why their coefficients reconstruct every column, and why no smaller intermediate space can do so.
`;export{e as default};