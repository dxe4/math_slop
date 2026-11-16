var e=`---
parent_id: book-finite-algebra-computation
chapter_id: project-compute-a-character-table
title: "Project: Compute a Character Table"
level: undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Project: Compute a Character Table

## Project overview

This project brings together conjugacy classes and representation theory to construct and audit a small character table. The worked $S_4$ route uses known representations and orthogonality. A later exercise gives only an orientation to simultaneous class-algebra diagonalization; it is not a complete implementation of the Dixon-Schneider algorithm.

## Step 1: Choose a group and find its conjugacy classes

Select a group of order at most $24$ with a non-trivial character table. Good choices include $S_{4}$, $A_{4}$, $D_{4}$, or $Q_{8}$. For this project we work through $S_{4}$ in detail.

The conjugacy classes of $S_{4}$ are determined by cycle type:
- $C_{1}$: identity ($1$ element);
- $C_{2}$: transpositions ($6$ elements);
- $C_{3}$: double transpositions ($3$ elements);
- $C_{4}$: $3$-cycles ($8$ elements);
- $C_{5}$: $4$-cycles ($6$ elements).

Verify that $1 + 6 + 3 + 8 + 6 = 24 = |S_{4}|$.

## Step 2: Determine the degrees of irreducible representations

The sum of squares of degrees equals $|G|$:

$$\\sum_{i=1}^{r} (\\dim V_{i})^{2} = |G|.$$

For $S_{4}$, we know the trivial and sign representations (degree $1$ each). The standard representation on $\\{(x_{1}, x_{2}, x_{3}, x_{4}) : \\sum x_{i} = 0\\}$ has degree $3$. Its tensor product with the sign representation gives another degree-$3$ representation. The remaining representation has degree $2$ because $1^{2} + 1^{2} + 3^{2} + 3^{2} + 2^{2} = 24$.

## Step 3: Compute characters from known representations

**Trivial:** $\\chi_{1} = (1, 1, 1, 1, 1)$.

**Sign:** $\\chi_{2} = (1, -1, 1, 1, -1)$.

**Standard ($3$-dimensional):** The permutation representation on $\\{1, 2, 3, 4\\}$ has character $(4, 2, 0, 1, 0)$. Subtract the trivial representation to get $\\chi_{3} = (3, 1, -1, 0, -1)$.

**Sign $\\otimes$ standard:** Multiply by $\\chi_{2}$ to get $\\chi_{4} = (3, -1, -1, 0, 1)$.

**Degree $2$:** Use orthogonality. Let $\\chi_{5} = (2, a, b, c, d)$. The inner product with $\\chi_{1}$ gives

$$\\frac{1}{24}(2 + 6a + 3b + 8c + 6d) = 0.$$

Similarly, orthogonality with $\\chi_{2}, \\chi_{3}, \\chi_{4}$ yields a system of linear equations. Solving:
- With $\\chi_{2}$: $2 - 6a + 3b + 8c - 6d = 0$.
- With $\\chi_{3}$: $6 + 6a - 3b + 0 - 6d = 0$.
- With $\\chi_{4}$: $6 - 6a - 3b + 0 + 6d = 0$.

From the last two: adding gives $12 - 6b = 0$, so $b = 2$. Subtracting gives $12a - 12d = 0$, so $a = d$. From the first equation: $2 + 6a + 6 + 8c + 6a = 0$, so $8 + 12a + 8c = 0$, thus $c = -1 - (3/2)a$. From the second: $2 - 6a + 6 + 8c - 6a = 0$, so $8 - 12a + 8c = 0$, giving $c = -1 + (3/2)a$. Equating: $-1 - (3/2)a = -1 + (3/2)a$, so $a = 0$. Then $c = -1$ and $d = 0$. Thus $\\chi_{5} = (2, 0, 2, -1, 0)$.

The complete character table of $S_{4}$ is:

$$\\begin{array}{c|ccccc}
S_{4} & 1 & (12) & (12)(34) & (123) & (1234) \\\\\\
\\chi_{1} & 1 & 1 & 1 & 1 & 1 \\\\\\ 
\\chi_{2} & 1 & -1 & 1 & 1 & -1 \\\\\\ 
\\chi_{3} & 3 & 1 & -1 & 0 & -1 \\\\\\ 
\\chi_{4} & 3 & -1 & -1 & 0 & 1 \\\\\\ 
\\chi_{5} & 2 & 0 & 2 & -1 & 0
\\end{array}$$

## Step 4: Verify orthogonality

Check row orthogonality between $\\chi_{3}$ and $\\chi_{5}$:

$$\\frac{1}{24}\\bigl(1 \\cdot 3 \\cdot 2 + 6 \\cdot 1 \\cdot 0 + 3 \\cdot (-1) \\cdot 2 + 8 \\cdot 0 \\cdot (-1) + 6 \\cdot (-1) \\cdot 0\\bigr) = \\frac{1}{24}(6 + 0 - 6 + 0 + 0) = 0.$$

Check the norm of the transposition column:

$$1^{2} + (-1)^{2} + 1^{2} + (-1)^{2} + 0^{2} = 4 = \\frac{24}{6}.$$

The $4$-cycle column has the same squared norm. Their cross inner product is

$1(1)+(-1)(-1)+1(-1)+(-1)(1)+0(0)=0$,

which is the actual orthogonality check for two distinct columns.

## Step 5: Decompose a representation

Consider the action of $S_{4}$ on the $6$ unordered pairs $\\{\\{i, j\\} : 1 \\leq i < j \\leq 4\\}$. The character counts fixed pairs. We get $\\chi = (6, 2, 2, 0, 0)$. Compute multiplicities:
- $m_{1} = (6 + 12 + 6 + 0 + 0)/24 = 1$,
- $m_{2} = (6 - 12 + 6 + 0 + 0)/24 = 0$,
- $m_{3} = (18 + 12 - 6 + 0 + 0)/24 = 1$,
- $m_{4} = (18 - 12 - 6 + 0 + 0)/24 = 0$,
- $m_{5} = (12 + 0 + 12 + 0 + 0)/24 = 1$.

Thus this permutation representation decomposes as $V_{1} \\oplus V_{3} \\oplus V_{5}$.

## Common pitfalls

- **Miscounting class sizes.** In $S_{n}$, the size of the conjugacy class of cycle type with $m_{k}$ cycles of length $k$ is $n! / \\prod_{k} (k^{m_{k}} m_{k}!)$.
- **Forgetting that characters are class functions.** A character takes the same value on all elements of a conjugacy class.
- **Using the wrong normalisation in orthogonality.** The factor $1/|G|$ applies to the sum over group elements; when summing over class representatives, weight by class size.

## Practice exercises

### Exercise 1

Construct the character table of $A_{4}$. There are four conjugacy classes: $\\{e\\}$, $\\{(12)(34), (13)(24), (14)(23)\\}$, and two classes of $3$-cycles.

**Solution.** $|A_{4}| = 12$. The quotient $A_{4}/V_{4} \\cong C_{3}$ gives three $1$-dimensional representations. The remaining irreducible representation has degree $3$ because $1^{2} + 1^{2} + 1^{2} + 3^{2} = 12$. The character table is:

$$\\begin{array}{c|cccc}
A_{4} & 1 & (12)(34) & (123) & (132) \\\\\\
\\chi_{1} & 1 & 1 & 1 & 1 \\\\\\ 
\\chi_{2} & 1 & 1 & \\omega & \\omega^{2} \\\\\\ 
\\chi_{3} & 1 & 1 & \\omega^{2} & \\omega \\\\\\ 
\\chi_{4} & 3 & -1 & 0 & 0
\\end{array}$$

where $\\omega = e^{2\\pi i/3}$.

### Exercise 2

Decompose the tensor product $V_{3} \\otimes V_{5}$ for $S_{4}$.

**Solution.** The character is $\\chi_{3} \\chi_{5} = (6, 0, -2, 0, 0)$. Compute inner products:
- $m_{1} = (6 + 0 - 6 + 0 + 0)/24 = 0$,
- $m_{2} = (6 + 0 - 6 + 0 + 0)/24 = 0$,
- $m_{3} = (18 + 0 + 6 + 0 + 0)/24 = 1$,
- $m_{4} = (18 + 0 + 6 + 0 + 0)/24 = 1$,
- $m_{5} = (12 + 0 - 12 + 0 + 0)/24 = 0$.

Thus $V_{3} \\otimes V_{5} \\cong V_{3} \\oplus V_{4}$.

### Exercise 3

Write an illustrative simultaneous-diagonalization outline for recovering character data from class multiplication constants. State why this is not by itself a complete Dixon-Schneider implementation.

**Solution.**
\`\`\`text
Input: conjugacy classes C[1..r] of G
Compute structure constants c[i][j][k]
For each class i:
  Form the commuting multiplication matrix M[i]
Refine common eigenspaces using enough of the M[i]
For each common eigenline, record eigenvalues lambda[i]
Recover chi(g[i]) from lambda[i] = |C[i]| chi(g[i]) / chi(1)
Determine the positive integral degree and verify row and column orthogonality
Output character table
\`\`\`

Diagonalizing each matrix separately can choose incompatible bases inside repeated eigenspaces. A production Dixon-Schneider implementation also needs precise modular field, reconstruction, separation, and certification steps; the outline suppresses those algorithm-specific obligations.

### Exercise 4

Show that the character table entry for the identity class in row $i$ is always $\\chi_{i}(e) = \\dim(V_{i})$.

**Solution.** By definition, $\\chi_{i}(g) = \\operatorname{tr}(\\rho_{i}(g))$. The identity element acts as the identity linear transformation on $V_{i}$, whose trace is $\\dim(V_{i})$.

## Looking backward and forward

This project consolidated the representation theory of finite groups into an executable workflow. The character table of $S_{4}$ is a template for larger groups, and the orthogonality relations are universal. In the chapters that follow we apply these algebraic tools to advanced topics: **Finite Simple Groups and Classification** explores the building blocks of all finite groups, **Computational Algebraic Geometry** brings Gröbner bases and elimination into the computational toolkit, and **Advanced Topics in Finite Fields** extends the field theory of earlier chapters to trace forms, primitive polynomials, and algorithmic applications.
`;export{e as default};