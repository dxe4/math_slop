
# Character Tables

## What a character table encodes

A **character table** is the matrix whose rows are indexed by irreducible representations of a finite group and whose columns are indexed by conjugacy classes. The entry in row $i$ and column $j$ is the value of the $i$-th irreducible character on the $j$-th conjugacy class. This square matrix encapsulates the representation theory of the group in a compact, computationally accessible form. From it we can decompose any representation, test irreducibility, and compute tensor products.

## Orthogonality and the shape of the table

Let $G$ be a finite group with $r$ conjugacy classes. Over $\mathbb{C}$, there are exactly $r$ irreducible representations, so the character table is $r \times r$.

**First orthogonality relation.** For irreducible characters $\chi_{i}$ and $\chi_{j}$,

$$\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g) \overline{\chi_{j}(g)} = \delta_{ij}.$$

**Second orthogonality relation.** For conjugacy classes $C_{k}$ and $C_{l}$ with representatives $g_{k}$ and $g_{l}$,

$$\sum_{i=1}^{r} \chi_{i}(g_{k}) \overline{\chi_{i}(g_{l})} = \frac{|G|}{|C_{k}|} \delta_{kl}.$$

The first relation says rows are orthogonal (weighted by class size). The second says columns are orthogonal.

## Building the character table of $S_{3}$

The group $S_{3}$ has three conjugacy classes: $\{e\}$, the three transpositions, and the two $3$-cycles. There are three irreducible representations: trivial, sign, and standard (degree $2$).

We know $\chi_{\text{triv}} = (1, 1, 1)$ and $\chi_{\text{sign}} = (1, -1, 1)$. For the standard representation, $\chi_{\text{std}}(e) = 2$. The permutation representation on $\{1, 2, 3\}$ has character $(3, 1, 0)$, and it decomposes as trivial plus standard, so $\chi_{\text{std}} = (3, 1, 0) - (1, 1, 1) = (2, 0, -1)$.

The character table is:

$$\begin{array}{c|ccc}
S_{3} & 1 & (12) & (123) \\\
\chi_{\text{triv}} & 1 & 1 & 1 \\\ 
\chi_{\text{sign}} & 1 & -1 & 1 \\\ 
\chi_{\text{std}} & 2 & 0 & -1
\end{array}$$

Verify orthogonality: for rows $2$ and $3$,

$$\frac{1}{6}\bigl(1 \cdot 2 + 3 \cdot (-1) \cdot 0 + 2 \cdot 1 \cdot (-1)\bigr) = \frac{1}{6}(2 + 0 - 2) = 0.$$

## The character table of $D_{4}$

The dihedral group $D_{4}$ of order $8$ has five conjugacy classes: $\{e\}$, $\{r^{2}\}$, $\{r, r^{3}\}$, $\{s, r^{2}s\}$, $\{rs, r^{3}s\}$. There are five irreducible representations. Four have degree $1$ (because $D_{4}/\langle r^{2} \rangle \cong C_{2} \times C_{2}$ is abelian of order $4$), and one has degree $2$ (since $1^{2} + 1^{2} + 1^{2} + 1^{2} + 2^{2} = 8$).

The degree-$2$ representation sends $r$ to a rotation matrix and $s$ to a reflection. Its character is $(2, -2, 0, 0, 0)$. The four $1$-dimensional characters factor through the quotient $C_{2} \times C_{2}$ and are determined by the images of $r$ and $s$, each $\pm 1$.

## Decomposing representations

Given a representation $V$ with character $\chi_{V}$, its decomposition into irreducibles is determined by inner products:

$$V \cong \bigoplus_{i} m_{i} V_{i}, \qquad m_{i} = \langle \chi_{V}, \chi_{i} \rangle = \frac{1}{|G|} \sum_{g \in G} \chi_{V}(g) \overline{\chi_{i}(g)}.$$

**Worked example.** Decompose the action of $S_{3}$ on the set of ordered pairs $\{(i, j) : i \neq j\}$.

**Solution.** There are $6$ such pairs. The character counts pairs fixed coordinatewise:

$\chi(g)=|\{(i,j):i\ne j,\ g(i)=i,\ g(j)=j\}|$.

The identity fixes all six pairs. A transposition fixes only one point, so it fixes no ordered pair of distinct points, and a $3$-cycle fixes none. Thus $\chi=(6,0,0)$. The inner products are:
- $m_{\text{triv}} = (6 + 0 + 0)/6 = 1$,
- $m_{\text{sign}} = (6 + 0 + 0)/6 = 1$,
- $m_{\text{std}} = (12 + 0 + 0)/6 = 2$.

So $V \cong V_{\text{triv}} \oplus V_{\text{sign}} \oplus 2 V_{\text{std}}$.

## Common errors

- **Forgetting complex conjugation.** Characters of real representations are real-valued, but complex characters need not be. For $C_4$, the character sending a generator to $i$ has nonreal values and satisfies $\chi(g^{-1})=\overline{\chi(g)}$. Every irreducible character of $S_4$ itself is real-valued.
- **Using the wrong class sizes in orthogonality.** The first orthogonality relation can be rewritten as $\sum_{k} |C_{k}| \chi_{i}(g_{k}) \overline{\chi_{j}(g_{k})} = |G| \delta_{ij}$. Omitting the factor $|C_{k}|$ destroys orthogonality.
- **Assuming the character table determines the group.** Non-isomorphic groups can have identical character tables; the quaternion group $Q_{8}$ and the dihedral group $D_{4}$ both have the same character table.

## Practice exercises

### Exercise 1

Construct the character table of $C_{4} = \langle g \rangle$.

**Solution.** $C_{4}$ is abelian, so every irreducible representation is $1$-dimensional and every element is its own conjugacy class. The four irreducible characters send $g$ to $1, i, -1, -i$. The table is:

$$\begin{array}{c|cccc}
C_{4} & e & g & g^{2} & g^{3} \\\
\chi_{0} & 1 & 1 & 1 & 1 \\\ 
\chi_{1} & 1 & i & -1 & -i \\\ 
\chi_{2} & 1 & -1 & 1 & -1 \\\ 
\chi_{3} & 1 & -i & -1 & i
\end{array}$$

### Exercise 2

Show that the character table of $Q_{8} = \{\pm 1, \pm i, \pm j, \pm k\}$ is identical to that of $D_{4}$.

**Solution.** $Q_{8}$ has five conjugacy classes: $\{1\}$, $\{-1\}$, $\{\pm i\}$, $\{\pm j\}$, $\{\pm k\}$. The quotient by $\{\pm 1\} \cong C_{2}$ is $C_{2} \times C_{2}$, giving four $1$-dimensional representations. The remaining irreducible representation has degree $2$ because $1^{2} + 1^{2} + 1^{2} + 1^{2} + 2^{2} = 8$. Its character is $(2, -2, 0, 0, 0)$, matching $D_{4}$. The four $1$-dimensional characters also match because both quotients are $C_{2} \times C_{2}$.

### Exercise 3

Decompose the tensor product $V_{\text{std}} \otimes V_{\text{std}}$ for $S_{3}$.

**Solution.** The character of a tensor product is the product of characters: $\chi_{\text{std}}^{2} = (4, 0, 1)$. Compute inner products with the irreducible characters of $S_{3}$:
- $m_{\text{triv}} = (4 + 0 + 2)/6 = 1$,
- $m_{\text{sign}} = (4 + 0 + 2)/6 = 1$,
- $m_{\text{std}} = (8 + 0 - 2)/6 = 1$.

Thus $V_{\text{std}} \otimes V_{\text{std}} \cong V_{\text{triv}} \oplus V_{\text{sign}} \oplus V_{\text{std}}$.

### Exercise 4

Over $\mathbb{C}$, prove that the number of irreducible representations of a finite group equals the number of conjugacy classes, using the standard completeness theorem for irreducible characters.

**Solution.** The space of class functions on $G$ has dimension equal to the number of conjugacy classes. Row orthogonality proves that irreducible characters are linearly independent; it does not by itself prove that they span. The standard character-completeness theorem, imported here from Serre, *Linear Representations of Finite Groups*, pp. 19--20, says that they form an orthonormal basis. Hence their number, and therefore the number of irreducible representations, equals the number of conjugacy classes.

## Looking backward and forward

Character tables compress the representation theory of a finite group into a matrix that can be manipulated by hand or by program. In **Computational Group Theory** we turn these theoretical tools into algorithms: computing conjugacy classes, constructing character tables from generators and relations, and using them to identify group structure computationally.
