
# Module 5 — Rings, ideals, and quotients

**Question.** A subgroup lets us identify elements compatibly with addition. What extra condition makes multiplication survive the identification? Ideals supply precisely that condition.

**Entry check.** In $\mathbb Z/6\mathbb Z$, $[2][1]=[2][4]$ but $[1]\ne[4]$. The factor $[2]$ cannot be cancelled because $[2][3]=[0]$. If this feels like an arithmetic contradiction, distinguish a ring from an integral domain before proceeding.

In this course a **ring** has an abelian additive group, associative multiplication, both distributive laws, and a multiplicative identity $1$; homomorphisms preserve $1$. We allow noncommutative rings and, unless explicitly excluded, the zero ring with $1=0$. A **domain** means a nonzero commutative ring without zero divisors. A **field** means a nonzero commutative ring in which every nonzero element is invertible. These nonzero requirements matter in quotient criteria.

A **two-sided ideal** $I$ is an additive subgroup with $rI\subseteq I$ and $Ir\subseteq I$ for every $r\in R$. For commutative $R$ one condition suffices. The additive cosets $a+I$ always form an additive quotient group. Multiplication can be defined by $(a+I)(b+I)=ab+I$ because, if $a-a',b-b'\in I$, then
$$
ab-a'b'=a(b-b')+(a-a')b'\in I.
$$
The first term uses left absorption and the second right absorption. The quotient has identity $1+I$. If $I=R$, it is the zero ring; the formulas remain valid, but it is neither a domain nor a field under our conventions. Kernels of unital ring homomorphisms are two-sided ideals, and the induced map $R/\ker f\to\operatorname{im}f$ is a well-defined unital ring isomorphism by the same kernel-image proof as in Module 4.

For a commutative unital ring $R$, a **prime ideal** $P$ is proper ($P\ne R$) and satisfies $ab\in P\Rightarrow a\in P$ or $b\in P$. This is equivalent to $R/P$ being a domain: $P$ proper gives $1+P\ne0+P$, and the condition says a zero product of classes has a zero factor. A **maximal ideal** $M$ is **proper** and has no ideal strictly between $M$ and $R$. It is equivalent to $R/M$ being a field. To see the forward direction, take $a\notin M$. The ideal $M+(a)$ strictly contains $M$, hence equals $R$; write $1=m+ra$. Then $(r+M)(a+M)=1+M$. Conversely, if $R/M$ is a field and $M\subsetneq J\subseteq R$, choose $a\in J\setminus M$. Its nonzero class has an inverse, so $1\in J$, giving $J=R$. This also proves maximal implies prime, since a field is a domain. The ideal $(0)$ in $\mathbb Z$ is prime but not maximal.

**Worked example.** $\mathbb Z/(15)$ has nonzero classes $[3],[5]$ with product zero, so $(15)$ is not prime or maximal. By contrast $\mathbb Z/(5)$ is a field: each nonzero residue has a multiplicative inverse. [Workshop 3 in the overview](#/courses/atlas-abstract-algebra-proof) tests cancellation and absorption.

## Guided practice

### 1. Starter — Test an ideal

Show $6\mathbb Z$ is an ideal of $\mathbb Z$.

**Hint.** Check additive differences and multiplication by an arbitrary integer.

**Reasoning.** If $6a,6b\in6\mathbb Z$, then $6a-6b=6(a-b)$ lies there. For $r\in\mathbb Z$, $r(6a)=6(ra)$ lies there. Commutativity supplies right absorption too.

### 2. Core — Recognize quotient fields

For positive $n$, when is $\mathbb Z/n\mathbb Z$ a field?

**Hint.** If $n=ab$ with $1<a,b<n$, inspect $[a][b]$.

**Reasoning.** Composite $n$ gives two nonzero zero divisors, so the quotient is not a field. If $n=p$ is prime, Bézout's identity gives $ua+vp=1$ for every $a$ not divisible by $p$, hence $[u][a]=[1]$. Thus the quotient is a field exactly when $n$ is prime. $n=1$ gives the zero ring, excluded by the field convention.

### 3. Transfer — One-sided trouble

Why does an arbitrary additive subgroup of $M_2(\mathbb R)$ fail to define a quotient ring? Use the subgroup of diagonal matrices.

**Hint.** Multiply a diagonal matrix by an off-diagonal matrix.

**Reasoning.** Diagonal matrices form an additive subgroup, but $\begin{pmatrix}1&0\\0&0\end{pmatrix}\begin{pmatrix}0&1\\0&0\end{pmatrix}=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ is not diagonal. Absorption fails, so changing a representative by a diagonal matrix can change a proposed product class.

### 4. Proof audit — Properness

“$R$ is a maximal ideal because no proper ideal strictly contains it.” Explain the flaw.

**Hint.** Compare the quotient $R/R$ with the field definition.

**Reasoning.** Maximal ideals must be proper. Without that clause the sentence is vacuous for $R$, while $R/R$ is the zero ring with $1=0$, not a field. The same properness requirement is built into the definition of prime ideal.
