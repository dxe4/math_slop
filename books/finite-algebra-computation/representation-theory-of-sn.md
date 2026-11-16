
# Representation Theory of $S_{n}$

## Why representations?

A group is an abstract object, but it often acts concretely: permutations shuffle a set, matrices transform a vector space, symmetries rotate a molecule. A **representation** makes this action explicit by assigning to each group element an invertible linear transformation. For the symmetric group $S_{n}$, representation theory is especially rich because the irreducible representations are indexed by integer partitions, and their characters can be computed by combinatorial rules.

## Definitions

Let $G$ be a finite group and $V$ a finite-dimensional vector space over a field $k$. A **representation** of $G$ on $V$ is a group homomorphism $\rho : G \to GL(V)$. The **degree** of $\rho$ is $\dim_{k}(V)$.

A **subrepresentation** is a subspace $W \subseteq V$ such that $\rho(g)(W) \subseteq W$ for all $g \in G$. A nonzero representation is **irreducible** if its only subrepresentations are $0$ and $V$.

Two representations $\rho : G \to GL(V)$ and $\sigma : G \to GL(W)$ are **isomorphic** if there exists a linear isomorphism $T : V \to W$ such that $T \circ \rho(g) = \sigma(g) \circ T$ for all $g \in G$.

## The group algebra and Maschke's theorem

The **group algebra** $k[G]$ consists of formal sums $\sum_{g \in G} a_{g} g$ with $a_{g} \in k$. Multiplication extends the group law bilinearly:

$$\Bigl(\sum_{g} a_{g} g\Bigr)\Bigl(\sum_{h} b_{h} h\Bigr) = \sum_{g,h} a_{g} b_{h} (gh).$$

A representation of $G$ over $k$ is the same data as a left $k[G]$-module.

**Theorem 16.1 (Maschke's).** Let $G$ be a finite group and $k$ a field whose characteristic does not divide $|G|$. Then every finite-dimensional representation of $G$ over $k$ is completely reducible: it decomposes as a direct sum of irreducible representations.

Over $\mathbb{C}$, this always holds. In **modular representation theory**, where $\operatorname{char}(k)$ divides $|G|$, complete reducibility can fail.

## Characters

The **character** of a representation $\rho$ is the function $\chi_{\rho} : G \to k$ defined by

$$\chi_{\rho}(g) = \operatorname{tr}(\rho(g)).$$

Characters are **class functions**: they are constant on conjugacy classes because $\operatorname{tr}(ABA^{-1}) = \operatorname{tr}(B)$.

Key properties:
- $\chi_{\rho}(e) = \dim(V)$.
- $\chi_{\rho}(g^{-1}) = \overline{\chi_{\rho}(g)}$ over $\mathbb{C}$.
- If $\rho \cong \sigma$, then $\chi_{\rho} = \chi_{\sigma}$.
- $\chi_{V \oplus W} = \chi_{V} + \chi_{W}$.

**Orthogonality relations.** Over $\mathbb{C}$, if $\chi_{i}$ and $\chi_{j}$ are irreducible characters, then

$$\frac{1}{|G|} \sum_{g \in G} \chi_{i}(g) \overline{\chi_{j}(g)} = \begin{cases} 1 & \text{if } i = j, \\ 0 & \text{otherwise}. \end{cases}$$

## Representations of $S_{n}$

The conjugacy classes of $S_{n}$ are indexed by **partitions** of $n$: integer sequences $\lambda = (\lambda_{1} \geq \lambda_{2} \geq \dots \geq \lambda_{k} > 0)$ with $\sum \lambda_{i} = n$. The irreducible representations of $S_{n}$ over $\mathbb{C}$ are also indexed by partitions of $n$.

**Young diagrams and Specht modules.** To a partition $\lambda$ associate its **Young diagram**: left-justified rows of boxes with $\lambda_{i}$ boxes in row $i$. A **Young tableau** is a filling of the boxes with $1, \dots, n$. A **standard Young tableau** has increasing rows and columns.

The number of standard Young tableaux of shape $\lambda$ equals the degree of the corresponding irreducible representation. It is given by the **hook-length formula**:

$$f^{\lambda} = \frac{n!}{\prod_{\text{boxes } b} h(b)}$$

where $h(b)$ is the hook length of box $b$ (the number of boxes to the right and below, including $b$ itself).

**Worked example.** For $n = 3$, the partitions are $(3)$, $(2, 1)$, and $(1, 1, 1)$.
- Shape $(3)$: one row. Hook lengths are $3, 2, 1$. Degree $f^{(3)} = 3!/(3 \cdot 2 \cdot 1) = 1$. This is the trivial representation.
- Shape $(1, 1, 1)$: one column. Hook lengths are $3, 2, 1$. Degree $1$. This is the sign representation.
- Shape $(2, 1)$: hook lengths are $3, 1$ in the first row and $1$ in the second. Degree $3!/(3 \cdot 1 \cdot 1) = 2$. This is the standard representation.

## The Frobenius character formula

The character of the irreducible representation indexed by $\lambda$ on a permutation of cycle type $\mu = (\mu_{1}, \dots, \mu_{k})$ can be computed by the **Frobenius formula**, but for small $n$ it is often easier to use the **Murnaghan-Nakayama rule**. A **border strip** (or rim hook) of length $k$ is a connected skew shape with $k$ boxes containing no $2 \times 2$ square. The rule states:

$$\chi^{\lambda}(\mu) = \sum_{\text{border strips } \xi \text{ of length } \mu_{1}} (-1)^{\operatorname{ht}(\xi)} \chi^{\lambda \setminus \xi}(\mu_{2}, \dots, \mu_{k})$$

where $\operatorname{ht}(\xi)$ is one less than the number of rows of $\xi$.

**Worked example.** Compute $\chi^{(2,1)}$ on the conjugacy class of $3$-cycles in $S_{3}$.

**Solution.** The partition is $(2, 1)$ and the cycle type is $(3)$. Remove a border strip of length $3$ from $(2, 1)$. The only border strip of length $3$ is the whole diagram, which has height $1$ (two rows). Thus $\chi^{(2,1)}((3)) = (-1)^{1} \chi^{\emptyset} = -1$.

## Common errors

- **Assuming every complex representation is realizable over $\mathbb{R}$.** Every complex irreducible of $S_n$ has a real form, but this is special to symmetric groups. For $C_3$, the one-dimensional complex character sending a generator to $e^{2\pi i/3}$ has no one-dimensional real realization.
- **Confusing the partition indexing the representation with the cycle type of the conjugacy class.** Both are partitions of $n$, but they play different roles.
- **Applying Maschke's theorem in characteristic dividing $|G|$.** Over $\mathbb{F}_2$, the regular module of $C_2$ contains the invariant line spanned by $1+g$ but has no invariant complementary line, so it is not completely reducible.

## Practice exercises

### Exercise 1

Compute the degrees of all irreducible representations of $S_{4}$ using the hook-length formula.

**Solution.** The partitions of $4$ are $(4)$, $(3, 1)$, $(2, 2)$, $(2, 1, 1)$, $(1, 1, 1, 1)$.
- $(4)$: hook lengths $4, 3, 2, 1$. Degree $4!/(4 \cdot 3 \cdot 2 \cdot 1) = 1$.
- $(3, 1)$: hook lengths $4, 2, 1$ in row $1$ and $1$ in row $2$. Degree $24/(4 \cdot 2 \cdot 1 \cdot 1) = 3$.
- $(2, 2)$: hook lengths $3, 2$ in row $1$ and $2, 1$ in row $2$. Degree $24/(3 \cdot 2 \cdot 2 \cdot 1) = 2$.
- $(2, 1, 1)$: the transpose partition gives the sign twist of $(3,1)$. Degree $3$.
- $(1, 1, 1, 1)$: the sign twist of $(4)$. Degree $1$.

Over $\mathbb{C}$ all irreducible $S_n$-representations are self-dual; transposing the partition describes tensoring with the sign representation, not taking the dual.

Check: $1^{2} + 3^{2} + 2^{2} + 3^{2} + 1^{2} = 1 + 9 + 4 + 9 + 1 = 24 = |S_{4}|$.

### Exercise 2

Use the Murnaghan-Nakayama rule to compute $\chi^{(3,1)}$ on the conjugacy class of double transpositions (cycle type $(2, 2)$) in $S_{4}$.

**Solution.** The only removable rim hook of length $2$ is the horizontal pair at the right of the first row. It has height $0$ and leaves shape $(1,1)$. Therefore

$\chi^{(3,1)}((2,2))=\chi^{(1,1)}((2))=-1$,

because $(1,1)$ indexes the sign representation of $S_2$. The apparent vertical or bent alternatives do not leave a Young diagram and are not removable rim hooks.

### Exercise 3

Over $\mathbb{C}$, prove that the regular representation of a finite group $G$ decomposes as $\bigoplus_{i} (\dim V_{i}) V_{i}$, where the sum runs over irreducible representations.

**Solution.** The character of the regular representation is $|G|$ at the identity and $0$ elsewhere. By orthogonality, its inner product with an irreducible character $\chi_{i}$ is $(1/|G|) \cdot |G| \cdot \chi_{i}(e) = \dim(V_{i})$. Thus the multiplicity of $V_{i}$ in the regular representation is $\dim(V_{i})$. Taking dimensions of both sides gives $\sum_{i} (\dim V_{i})^{2} = |G|$.

### Exercise 4

Over $\mathbb{C}$, show that the permutation representation of $S_{n}$ on $\{1, \dots, n\}$ decomposes as the trivial representation plus the standard representation.

**Solution.** The permutation representation has basis $e_{1}, \dots, e_{n}$ with $\sigma \cdot e_{i} = e_{\sigma(i)}$. The one-dimensional subspace spanned by $v = e_{1} + \dots + e_{n}$ is invariant and carries the trivial representation. The orthogonal complement $W = \{\sum a_{i} e_{i} : \sum a_{i} = 0\}$ has dimension $n - 1$ and is also invariant. For $n \geq 2$, $W$ is irreducible; it is the standard representation. Thus the permutation representation is $V_{\text{triv}} \oplus V_{\text{std}}$.

## Looking backward and forward

The representation theory of $S_{n}$ connects combinatorics---partitions, Young tableaux, and symmetric functions---to linear algebra. In **Character Tables** we assemble the characters of all irreducible representations into a square matrix and learn how to use orthogonality to decompose arbitrary representations. The character table of $S_{n}$ is a cornerstone of applied group theory in chemistry and physics.
