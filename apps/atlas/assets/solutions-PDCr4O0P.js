var e=`---
parent_id: book-finite-algebra-computation
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

Every exercise in the twelve-chapter primary route has its hint and complete solution in that chapter. This supplementary collection preserves the earlier exercise answers, including those belonging to the additional survey readings under their original identities. Use the chapter-local disclosures for the expanded primary exercises and the kernel project.

---

## Represent a finite operation safely

1. **Write the $5 \\times 5$ addition table for $\\mathbb{Z}/5\\mathbb{Z}$ and verify the Latin-square property.**

   The entry in row $a$ and column $b$ is $(a + b) \\bmod 5$. Row $0$ is $0, 1, 2, 3, 4$; row $1$ is $1, 2, 3, 4, 0$; and so on. Each row is a cyclic shift of the first, hence a permutation. The same holds for columns by symmetry of addition.

2. **Find the identity and inverses in $\\mathbb{Z}/3\\mathbb{Z}$.**

   The identity is $0$ because $(0 + a) \\bmod 3 = a$ for all $a$. The inverse of $0$ is $0$, of $1$ is $2$ (since $1 + 2 \\equiv 0 \\pmod{3}$), and of $2$ is $1$.

3. **Apply the closure algorithm to $\\langle r \\rangle$ in $D_{3}$.**

   Pass 0: $\\{e, r\\}$. Pass 1: add $r^{-1} = r^{2}$ and products $r \\cdot r = r^{2}$. Now $\\{e, r, r^{2}\\}$. Pass 2: no new elements. The subgroup has order $3$.

4. **Construct a $4 \\times 4$ Latin square that is not associative.**

   On $\\mathbb{Z}/4\\mathbb{Z}$ define $a*b=a-b\\pmod 4$. For fixed $a$, the map $b\\mapsto a-b$ is a permutation, and for fixed $b$, the map $a\\mapsto a-b$ is a permutation, so the table is Latin. It is not associative:
   $$(0*0)*1=0*1=3,\\qquad 0*(0*1)=0*3=1.$$

---

## Rings and Ideals

1. **Prove $0 \\cdot a = 0$ in any ring.**

   We have $0 \\cdot a = (0 + 0) \\cdot a = 0 \\cdot a + 0 \\cdot a$ by distributivity. Subtracting $0 \\cdot a$ from both sides (valid because $(R, +)$ is a group) gives $0 = 0 \\cdot a$.

2. **List all units in $\\mathbb{Z}/12\\mathbb{Z}$ and explain the nonzero non-units.**

   An element is a unit iff $\\gcd(a, 12) = 1$. The units are $\\{1, 5, 7, 11\\}$. Every nonzero non-unit $a$ shares a factor $d > 1$ with $12$; then $a \\cdot (12/d) \\equiv 0 \\pmod{12}$ with both factors nonzero, so $a$ is a zero divisor under the book's convention. Thus the nonunits consist of $0$ and the nonzero zero divisors $\\{2,3,4,6,8,9,10\\}$.

3. **Show $(x)$ in $\\mathbb{Z}[x]$ is prime but not maximal.**

   The quotient $\\mathbb{Z}[x]/(x)$ is isomorphic to $\\mathbb{Z}$ via $f(x) \\mapsto f(0)$. Since $\\mathbb{Z}$ is an integral domain but not a field, $(x)$ is prime but not maximal.

4. **Divide $x^{3} + 2x^{2} + 3x + 4$ by $x + 1$ in $\\mathbb{Z}/7\\mathbb{Z}[x]$.**

   The quotient is $q(x) = x^{2} + x + 2$ and the remainder is $r(x) = 2$. Check: $(x^{2} + x + 2)(x + 1) + 2 = x^{3} + 2x^{2} + 3x + 4$.

---

## Modules over PIDs

1. **For a unital ring and unital left module, prove $\\operatorname{Hom}_{R}(R, M) \\cong M$ as abelian groups.**

   Define $\\Phi(\\varphi) = \\varphi(1)$. This is a homomorphism. It is injective because $\\varphi(1) = 0$ implies $\\varphi(r) = r \\cdot \\varphi(1) = 0$ for all $r$. It is surjective because for any $m$, the map $\\varphi_{m}(r) = r \\cdot m$ satisfies $\\varphi_{m}(1) = m$.

2. **Find the Smith normal form of $\\begin{pmatrix} 6 & 4 \\\\ 4 & 4 \\end{pmatrix}$ over $\\mathbb{Z}$.**

   Subtract row 2 from row 1: $\\begin{pmatrix} 2 & 0 \\\\ 4 & 4 \\end{pmatrix}$. Subtract $2 \\times$ row 1 from row 2: $\\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix}$. Since $2 \\mid 4$, this is Smith normal form. The quotient is $\\mathbb{Z}/2\\mathbb{Z} \\oplus \\mathbb{Z}/4\\mathbb{Z}$.

3. **Show $\\mathbb{Q}$ is not a free $\\mathbb{Z}$-module.**

   Any two rationals satisfy a non-trivial $\\mathbb{Z}$-linear relation, so no subset with more than one element is independent. A singleton generates only a proper cyclic subgroup, not all of $\\mathbb{Q}$.

4. **Describe the $\\mathbb{Z}[x]$-module with $x$ acting as $\\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$.**

   Write $e_1,e_2$ for the standard generators. The first relation gives $e_2=(x-3)e_1$. Substitution into the second relation gives
   $$-e_1+(x-3)e_2=((x-3)^2-1)e_1=(x-2)(x-4)e_1=0.$$
   Conversely, this one relation recovers the displayed action on the two-element $\\mathbb{Z}$-basis $e_1,(x-3)e_1$. Hence
   $$M\\cong \\mathbb{Z}[x]/((x-2)(x-4)).$$
   This direct unit-pivot reduction is valid even though $\\mathbb{Z}[x]$ is not a PID, so no Smith-normal-form theorem over $\\mathbb{Z}[x]$ is being invoked.

---

## Galois Theory

1. **Prove $\\mathbb{Q}(\\sqrt{2} + \\sqrt{3}) = \\mathbb{Q}(\\sqrt{2}, \\sqrt{3})$.**

   Let $\\alpha = \\sqrt{2} + \\sqrt{3}$. Then $\\alpha^{2} = 5 + 2\\sqrt{6}$, so $\\sqrt{6} = (\\alpha^{2} - 5)/2 \\in \\mathbb{Q}(\\alpha)$. Also $\\alpha \\cdot \\sqrt{6} = 2\\sqrt{3} + 3\\sqrt{2}$, and subtracting $2\\alpha$ gives $\\sqrt{2} \\in \\mathbb{Q}(\\alpha)$. Similarly $\\sqrt{3} \\in \\mathbb{Q}(\\alpha)$. The reverse inclusion is immediate.

2. **Find the Galois group of $x^{4} - 2$ over $\\mathbb{Q}$.**

   The splitting field is $\\mathbb{Q}(\\sqrt[4]{2}, i)$ with degree $8$. An automorphism is determined by $\\sqrt[4]{2} \\mapsto \\zeta \\sqrt[4]{2}$ with $\\zeta \\in \\{\\pm 1, \\pm i\\}$ and $i \\mapsto \\pm i$. The group is the dihedral group $D_{4}$ of order $8$.

3. **Show $x^{5} - 4x + 2$ is irreducible over $\\mathbb{Q}$ with Galois group $S_{5}$.**

   Eisenstein at $2$ proves irreducibility over $\\mathbb{Q}$, hence the Galois group is transitive. Modulo $3$ the polynomial remains irreducible, so the group contains a $5$-cycle. Modulo $7$ it factors as
   $$(x^{2}-3x-1)(x^{3}+3x^{2}+3x-2),$$
   with both factors irreducible, so the group contains an element of cycle type $(2,3)$. Its cube is a transposition. Conjugating that transposition by the $5$-cycle gives transpositions whose edge graph is connected; such transpositions generate $S_5$. This standard Frobenius-cycle argument is imported from the arithmetic of unramified reductions; Brzeziński, *Galois Theory Through Exercises*, Theorem 15.4(b), is the exact source locator.

4. **Show $\\operatorname{Gal}(\\mathbb{F}_{p^{n}}/\\mathbb{F}_{p})$ is cyclic of order $n$ generated by Frobenius.**

   The Frobenius map $\\sigma(a) = a^{p}$ is a field automorphism fixing $\\mathbb{F}_{p}$. Since $\\mathbb{F}_{p^{n}}^{\\times}$ is cyclic of order $p^{n} - 1$, the smallest $k$ with $\\sigma^{k} = \\operatorname{id}$ is $k = n$. Hence $\\langle \\sigma \\rangle \\cong C_{n}$.

---

## Representation Theory of $S_{n}$

1. **Compute the degrees of all irreducible representations of $S_{4}$.**

   The partitions of $4$ and their hook-length degrees are:
   - $(4)$: degree $1$ (trivial);
   - $(3, 1)$: degree $3$;
   - $(2, 2)$: degree $2$;
   - $(2, 1, 1)$: degree $3$;
   - $(1, 1, 1, 1)$: degree $1$ (sign).
   Check: $1^{2} + 3^{2} + 2^{2} + 3^{2} + 1^{2} = 24 = |S_{4}|$.

2. **Compute $\\chi^{(3,1)}$ on double transpositions in $S_{4}$.**

   There is one removable border strip of length $2$, the horizontal domino at the right of the first row. Its height is $0$ because it occupies one row, leaving shape $(1,1)$, whose value on a $2$-cycle is $-1$. Thus $\\chi^{(3,1)}(2,2)=-1$. This also agrees with the fixed-point formula for the standard representation: a double transposition fixes no letters, so its character is $0-1=-1$.

3. **Over $\\mathbb{C}$, decompose the regular representation.**

   The character of the regular representation is $|G|$ at the identity and $0$ elsewhere. By orthogonality, its inner product with $\\chi_{i}$ is $\\dim(V_{i})$. Hence the multiplicity of $V_{i}$ is $\\dim(V_{i})$, and $\\sum_{i} (\\dim V_{i})^{2} = |G|$.

4. **Over $\\mathbb{C}$, decompose the permutation representation of $S_{n}$ on $\\{1, \\dots, n\\}$.**

   For $n\\geq2$, the one-dimensional subspace spanned by $e_{1} + \\dots + e_{n}$ carries the trivial representation. Its orthogonal complement $W = \\{\\sum a_{i} e_{i} : \\sum a_{i} = 0\\}$ is irreducible of dimension $n - 1$ (the standard representation). Thus the permutation representation is $V_{\\text{triv}} \\oplus V_{\\text{std}}$. For $n=1$, the whole representation is trivial and $W=0$, which is not called irreducible under the book's convention.

---

## Character Tables

1. **Construct the character table of $C_{4}$.**

   $C_{4}$ is abelian, so every irreducible representation is $1$-dimensional. The four characters send a generator $g$ to $1, i, -1, -i$.

2. **Show $Q_{8}$ and $D_{4}$ have identical character tables.**

   Both have five conjugacy classes, four $1$-dimensional representations factoring through $C_{2} \\times C_{2}$, and one $2$-dimensional representation with character $(2, -2, 0, 0, 0)$.

3. **Decompose $V_{\\text{std}} \\otimes V_{\\text{std}}$ for $S_{3}$.**

   $\\chi_{\\text{std}}^{2} = (4, 0, 1)$. The inner products give $m_{\\text{triv}} = m_{\\text{sign}} = m_{\\text{std}} = 1$. Thus $V_{\\text{std}} \\otimes V_{\\text{std}} \\cong V_{\\text{triv}} \\oplus V_{\\text{sign}} \\oplus V_{\\text{std}}$.

4. **Prove the number of irreducible representations equals the number of conjugacy classes.**

   Orthogonality proves that the irreducible characters are linearly independent. The additional fact that they span the class functions is the completeness theorem for complex characters; Serre, *Linear Representations of Finite Groups*, pp. 19--20, is the exact source locator for this import. The dimension of the class-function space is the number of conjugacy classes, so the two counts agree. Orthogonality alone does not prove spanning.

---

## Computational Group Theory

1. **Todd-Coxeter coset enumeration for $D_{4} / \\langle b \\rangle$.**

   There are four cosets, matching $[D_{4} : \\langle b \\rangle] = 4$. The coset table is consistent with the relations $a^{4}$, $b^{2}$, and $abab$.

2. **Why Schreier-Sims terminates.**

   The algorithm builds a chain of stabilisers of depth at most $n$. Each new Schreier generator is tested for membership; if new, it enlarges the next stabiliser. Since $|G|$ is finite, stabilisation occurs after finitely many steps.

3. **Structure constants for $S_{3}$.**

   With classes $C_{1} = \\{e\\}$, $C_{2}$ (transpositions), $C_{3}$ ($3$-cycles):
   - $K_{2}^{2} = 3K_{1} + 3K_{3}$;
   - $K_{2} K_{3} = 2K_{2}$;
   - $K_{3}^{2} = 2K_{1} + K_{3}$.

   Multiplication by the identity class also gives $K_1K_i=K_i$, so, for example, $c_{331}=2$ and $c_{333}=1$.

4. **BSGS membership test.**

   Given a base $(\\beta_{1}, \\dots, \\beta_{k})$, test whether $\\pi(\\beta_{1})$ lies in the orbit of $\\beta_{1}$. If so, multiply by the chosen transversal inverse and recurse on the stabiliser. After the last base point, accept only if the final residue is the identity. An arbitrary permutation outside $G$ can fix every base point, so fixing the base is not itself a membership certificate.

---

## Cohomology of Groups

1. **Compute $H^{0}(S_{3}, \\mathbb{Z})$.**

   $H^{0}(S_{3}, \\mathbb{Z}) = \\mathbb{Z}^{S_{3}} = \\mathbb{Z}$ because every integer is fixed by the trivial action.

2. **Compute $H^{1}(C_{n}, \\mathbb{Z})$.**

   With trivial action, $H^{1}(C_{n}, \\mathbb{Z}) = \\operatorname{Hom}(C_{n}, \\mathbb{Z}) = 0$ because $\\mathbb{Z}$ is torsion-free.

3. **Show $H^{2}(C_{p}, C_{p}) \\cong C_{p}$.**

   Write $C_p=\\langle g\\rangle$ and use the trivial action on the additive group $C_p$. For each $a\\in C_p$, the normalized carry function
   $$f_a(g^i,g^j)=a\\left\\lfloor\\frac{i+j}{p}\\right\\rfloor,\\qquad 0\\le i,j<p,$$
   is a $2$-cocycle. It records the relation $u^p=a$ for a lift $u$ of $g$ in the corresponding extension. Changing the section adds a coboundary but does not change $a$; conversely every extension class has such a representative. Thus $a\\mapsto[f_a]$ identifies $H^2(C_p,C_p)$ with $C_p$. This classifies extensions with the chosen kernel, quotient, and actions, rather than merely the abstract isomorphism type of the middle group.

4. **Compute $H^{0}(G, \\mathbb{Z}[G])$ and $H_{0}(G, \\mathbb{Z}[G])$.**

   If $G$ is finite, the invariants are
   $$H^{0}(G,\\mathbb{Z}[G])=\\mathbb{Z}\\!\\left(\\sum_{g\\in G}g\\right),$$
   because left translation makes all coefficients equal. If $G$ is infinite and the group ring has finite support, the invariant group is $0$. In either case the coinvariants satisfy $H_{0}(G,\\mathbb{Z}[G])\\cong\\mathbb{Z}$ via the augmentation map.

---

## Algebraic Coding Theory

1. **Parity-check matrix of $\\operatorname{Ham}(2, 2)$ and all codewords.**

   $H = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}$. The code is $C = \\{(0, 0, 0), (1, 1, 1)\\}$.

2. **Equivalence of cyclic codes with $g(x) = x^{3} + x^{2} + 1$ and $x^{3} + x + 1$ over $\\mathbb{F}_{2}$.**

   Over $\\mathbb{F}_{2}$, $x^{7} - 1 = (x + 1)(x^{3} + x + 1)(x^{3} + x^{2} + 1)$. The two cubics are reciprocals; reversing coordinates yields equivalence.

3. **Design a BCH code over $\\mathbb{F}_{2}$ of length $15$ and designed distance $5$.**

   Let $\\beta$ be a primitive $15$-th root of unity in $\\mathbb{F}_{16}$. The generator polynomial is $\\operatorname{lcm}(m_{1}(x), m_{3}(x))$, where $m_{i}(x)$ is the minimal polynomial of $\\beta^{i}$. The degrees are $4$ each, so $\\deg(g) = 8$ and $k = 7$. The code has parameters $[15, 7, d]$ with $d \\geq 5$.

4. **Prove a Reed-Solomon code is MDS.**

   A Reed-Solomon code of length $n = q - 1$ and dimension $k$ has $d \\geq n - k + 1$ by the BCH bound and $d \\leq n - k + 1$ by the Singleton bound. Hence $d = n - k + 1$.

---

## Cryptography

1. **Compute $3P$ on $E : y^{2} = x^{3} + 2x + 2$ over $\\mathbb{F}_{17}$ with $P = (5, 1)$.**

   First $2P = (6, 3)$. Then for $3P = P + 2P$:
   $$\\lambda = \\frac{3 - 1}{6 - 5} = 2, \\qquad x_{3} = 4 - 5 - 6 = -7 \\equiv 10, \\qquad y_{3} = 2(5 - 10) - 1 = -11 \\equiv 6.$$
   Thus $3P = (10, 6)$.

2. **Show $y^{2} = x^{3} + x$ over $\\mathbb{F}_{p}$ with $p \\equiv 3 \\pmod{4}$ has $p + 1$ points.**

   Let $f(x)=x^3+x$ and let $\\chi$ be the quadratic character, with $\\chi(0)=0$. Since $p\\equiv3\\pmod4$, $\\chi(-1)=-1$, while $f(-x)=-f(x)$. Pairing $x$ with $-x$ therefore gives
   $$\\chi(f(-x))=-\\chi(f(x)),$$
   and the entire character sum is $0$. The number of affine points is $\\sum_x(1+\\chi(f(x)))=p$; adding the point at infinity gives $p+1$.

3. **Diffie-Hellman shared secret with $p = 23$, $g = 5$, $A = 8$, $B = 19$.**

   Find $a$ with $5^{a} \\equiv 8 \\pmod{23}$: by trial, $a = 6$. The shared secret is $19^{6} \\equiv 2 \\pmod{23}$.

4. **Prove RSA decryption works.**

   For the RSA setup $n=pq$ with distinct primes $p,q$ and positive integers $e,d$, write $ed = 1 + k \\varphi(n)$. For $\\gcd(m, n) = 1$, Euler's theorem gives $m^{\\varphi(n)} \\equiv 1 \\pmod{n}$, so $c^{d} = m^{ed} = m \\cdot (m^{\\varphi(n)})^{k} \\equiv m \\pmod{n}$. For $m$ not coprime to $n$, apply the Chinese remainder theorem modulo $p$ and $q$ separately.

---

## Project: Compute a Character Table

1. **Construct the character table of $A_{4}$.**

   $|A_{4}| = 12$. The quotient $A_{4}/V_{4} \\cong C_{3}$ gives three $1$-dimensional representations. The remaining irreducible has degree $3$ because $1^{2} + 1^{2} + 1^{2} + 3^{2} = 12$. The character table is:
   $$\\begin{array}{c|cccc}
   A_{4} & 1 & (12)(34) & (123) & (132) \\\\
   \\chi_{1} & 1 & 1 & 1 & 1 \\\\
   \\chi_{2} & 1 & 1 & \\omega & \\omega^{2} \\\\
   \\chi_{3} & 1 & 1 & \\omega^{2} & \\omega \\\\
   \\chi_{4} & 3 & -1 & 0 & 0
   \\end{array}$$
   where $\\omega = e^{2\\pi i/3}$.

2. **Decompose $V_{3} \\otimes V_{5}$ for $S_{4}$.**

   $\\chi_{3} \\chi_{5} = (6, 0, -2, 0, 0)$. The inner products give $m_{3} = m_{4} = 1$ and all others $0$. Thus $V_{3} \\otimes V_{5} \\cong V_{3} \\oplus V_{4}$.

3. **Give an orientation-level simultaneous-diagonalization outline related to the Dixon--Schneider method.**

   \`\`\`text
   Input: conjugacy classes C[1..r] of G
   Compute structure constants c[i][j][k]
   For each class i:
     Form matrix M[i] with entries c[i][j][k]
     Find eigenvectors of M[i]
   Simultaneously decompose into common eigenspaces
   Recover scaled character rows using |C_i| chi(g_i)/chi(e)
   Normalise using chi(e) = degree and orthogonality
   Output character table
   \`\`\`

   This is an illustrative class-algebra outline, not a complete implementation of the Dixon--Schneider algorithm: repeated common eigenspaces, exact field arithmetic, degree recovery, and certification need additional handling.

4. **Show $\\chi_{i}(e) = \\dim(V_{i})$.**

   By definition, $\\chi_{i}(g) = \\operatorname{tr}(\\rho_{i}(g))$. The identity acts as the identity linear transformation, whose trace is $\\dim(V_{i})$.

---

## Finite Simple Groups and Classification

1. **Prove no group of order $p^{2}q$ is simple.**

   This is a special case of Burnside's $p^aq^b$ theorem: every group whose order is divisible by at most two distinct primes is solvable. A nontrivial finite solvable simple group is cyclic of prime order, whereas $p^2q$ is composite. Therefore a group of this order is not simple. Burnside's 1904 paper, pp. 388--392, is the exact source locator for this import; Sylow congruences alone do not justify the conclusion in all relative sizes of $p$ and $q$.

2. **Show $PSL(2, 5) \\cong A_{5}$.**

   $|PSL(2, 5)| = 5(25 - 1)/\\gcd(2, 4) = 60$. Taylor, *The Geometry of the Classical Groups*, Theorem 4.5, p. 23, gives the imported simplicity theorem for $PSL(2,q)$. Wodzicki, *Introduction to Algebra*, Theorem 6.8, pp. 57--59, gives the separate uniqueness theorem that every simple group of order $60$ is isomorphic to $A_5$. These two results give $PSL(2,5)\\cong A_5$; the equality of orders by itself would not.

3. **Find the composition factors of $S_{5}$.**

   $S_{5} \\supset A_{5} \\supset \\{e\\}$. The factors are $C_{2}$ and $A_{5}$.

4. **For $n\\geq1$, prove a group of order $p^{n}$ has a non-trivial centre.**

   The class equation is $|G| = |Z(G)| + \\sum [G : C_{G}(x_{i})]$. Each summand is a power of $p$ greater than $1$, hence divisible by $p$. Thus $|Z(G)|$ is divisible by $p$, so $|Z(G)| \\geq p > 1$.

---

## Computational Algebraic Geometry

1. **Compute a Gröbner basis for $I = (x^{2} + y, xy + y)$ in $\\mathbb{Q}[x, y]$ with lex $x > y$.**

   $f_{1} = x^{2} + y$, $f_{2} = xy + y$. The $S$-polynomial is $S(f_{1}, f_{2}) = y^{2} - xy$, which reduces to $y^{2} + y$ using $f_{2}$. The basis $\\{x^{2} + y, xy + y, y^{2} + y\\}$ is a Gröbner basis.

2. **Solve $x^{2} + y^{2} = 2$, $xy = 1$ over $\\mathbb{C}$.**

   From $xy = 1$, $y = 1/x$. Substitute: $x^{2} + 1/x^{2} = 2$, so $x^{4} - 2x^{2} + 1 = (x^{2} - 1)^{2} = 0$. Thus $x = \\pm 1$ and $y = \\pm 1$ with the same sign. The solutions are $(1, 1)$ and $(-1, -1)$, each with multiplicity $2$.

3. **Show $(x^{2} + y^{2} + 1) \\subseteq \\mathbb{R}[x, y]$ has no real zeros but is not the unit ideal.**

   For real $x, y$, $x^{2} + y^{2} + 1 \\geq 1 > 0$, so there are no real zeros. The polynomial is irreducible over $\\mathbb{R}$ and does not divide $1$, so $1 \\notin (x^{2} + y^{2} + 1)$.

4. **Count solutions of $x^{2} + y^{2} = 1$ in $\\mathbb{F}_{3}^{2}$.**

   In $\\mathbb{F}_{3}$, the squares are $0$ and $1$. The pairs $(x^{2}, y^{2})$ summing to $1$ are $(0, 1)$ and $(1, 0)$. For $(0, 1)$: $x = 0$, $y \\in \\{1, 2\\}$ gives $2$ solutions. For $(1, 0)$: $x \\in \\{1, 2\\}$, $y = 0$ gives $2$ solutions. Total: $4$.

---

## Advanced Topics in Finite Fields

1. **Find all primitive elements of $\\mathbb{F}_{9} = \\mathbb{F}_{3}[x]/(x^{2} + 1)$.**

   Here $\\alpha^2=-1$, so $\\alpha$ itself has order $4$. Direct calculation shows that the four elements of order $8$ are
   $$1+\\alpha,\\quad 1-\\alpha,\\quad -1+\\alpha,\\quad -1-\\alpha.$$
   There are four, as required by $\\varphi(8)=4$.

2. **Compute the trace from $\\mathbb{F}_{8}$ to $\\mathbb{F}_{2}$ for every element.**

   Let $\\alpha$ satisfy $\\alpha^{3} = \\alpha + 1$. The trace is $\\operatorname{Tr}(a)=a+a^2+a^4$. In the basis $1,\\alpha,\\alpha^2$, it is the constant coefficient. Thus the trace is $0$ on
   $$0,\\ \\alpha,\\ \\alpha^2,\\ \\alpha+\\alpha^2,$$
   and is $1$ on
   $$1,\\ 1+\\alpha,\\ 1+\\alpha^2,\\ 1+\\alpha+\\alpha^2.$$

3. **Test $x^{5} + x^{2} + 1$ for irreducibility over $\\mathbb{F}_{2}$.**

   For a degree-$5$ polynomial over $\\mathbb F_2$, the Frobenius test requires
   $$x^{32}\\equiv x\\pmod f\\qquad\\text{and}\\qquad \\gcd(f,x^2-x)=1,$$
   because $5$ is prime. The gcd check is not vacuous: here $f(0)=f(1)=1$, so neither linear polynomial divides $f$. Repeated squaring gives $x^{32}\\equiv x\\pmod f$, completing the irreducibility test.

4. **Explain why a suitably padded radix-two NTT multiplies degree-below-$n$ polynomials in $O(N \\log N)$ operations.**

   To multiply two polynomials of degree below $n$ without wraparound, choose a transform length $N\\geq2n-1$ with $N\\mid(q-1)$ and pad both coefficient vectors to length $N$. Evaluation at the powers of a primitive $N$-th root, pointwise multiplication, and inverse evaluation recover the ordinary product. When $N$ is a power of two, Cooley--Tukey uses $O(N)$ field operations at each of $O(\\log N)$ levels, for $O(N\\log N)$. A length-$n$ transform without padding instead computes cyclic convolution modulo $x^n-1$.
`;export{e as default};