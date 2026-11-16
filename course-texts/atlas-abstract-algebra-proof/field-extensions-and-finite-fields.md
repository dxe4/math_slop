
# Module 7 — Field extensions and finite fields

**Question.** What does it mean to add a solution to a polynomial equation, and how do we know how large the new field is? Vector-space dimension measures the enlargement; minimal polynomials prevent us from inventing extra relations.

**Entry check.** In $\mathbb F_2[x]/(x^2+x+1)$, reduce $x^3$: since $x^2=x+1$, $x^3=x(x+1)=x^2+x=1$. If the last equality seems odd, use $1+1=0$ in characteristic 2. [Workshop 4 in the overview](#/courses/atlas-abstract-algebra-proof) rehearses this field's full arithmetic.

An extension $L/F$ is a field $L$ containing a specified copy of $F$. It is an $F$-vector space, with degree $[L:F]$ its dimension. Suppose $F\subseteq K\subseteq L$ and both $[K:F]=m$ and $[L:K]=n$ are finite. Let $u_1,\ldots,u_m$ be an $F$-basis of $K$ and $v_1,\ldots,v_n$ a $K$-basis of $L$. The $mn$ products $u_iv_j$ span $L$: first expand any $z\in L$ in the $v_j$, then expand each coefficient in the $u_i$. They are independent: if $\sum_j(\sum_i a_{ij}u_i)v_j=0$, independence of the $v_j$ makes every parenthesis zero, then independence of the $u_i$ makes every $a_{ij}=0$. Thus **the tower law** is $[L:F]=[L:K][K:F]$.

An element $\alpha$ is algebraic over $F$ if some nonzero $f\in F[x]$ satisfies $f(\alpha)=0$. Evaluation $\operatorname{ev}_\alpha:F[x]\to L$, $f\mapsto f(\alpha)$, is a unital homomorphism. Choose a monic nonzero polynomial $m_\alpha$ of least degree in its kernel. Divide any $f$ in the kernel by $m_\alpha$: $f=qm_\alpha+r$ with $\deg r<\deg m_\alpha$; evaluation makes $r(\alpha)=0$, so minimality forces $r=0$. Thus $\ker\operatorname{ev}_\alpha=(m_\alpha)$. A factorization $m_\alpha=ab$ into lower positive degrees would give $a(\alpha)b(\alpha)=0$ in the field $L$, contradicting minimality, so $m_\alpha$ is irreducible. By Module 6 the image $F[\alpha]$ is a field, hence equals the smallest subfield $F(\alpha)$ of $L$. The first isomorphism theorem gives $F[x]/(m_\alpha)\cong F(\alpha)$ and $[F(\alpha):F]=\deg m_\alpha$.

**Worked examples.** $x^3-2$ has no rational root: a lowest-terms rational cube equal to 2 forces numerator even and then denominator even. A cubic without a root is irreducible, so $\mathbb Q(\sqrt[3]2)$ has degree 3. It does not contain the two nonreal roots and is not the splitting field. The [Galois symmetry essay](../../articles/galois-symmetry.md) studies the larger field, with its additional theorem prerequisites.

For $p=x^2+x+1\in\mathbb F_2[x]$, evaluation at 0 and 1 gives 1, hence $p$ is irreducible. With $\alpha=[x]$, every element of $F=\mathbb F_2[x]/(p)$ has a **unique** degree-below-2 representative $0,1,\alpha,1+\alpha$. Distinctness follows from uniqueness of remainders: a nonzero polynomial of degree below 2 cannot be a multiple of $p$. The relation $\alpha^2=\alpha+1$ gives $\alpha(\alpha+1)=1$, so the inverses of the three nonzero elements are $1^{-1}=1$, $\alpha^{-1}=\alpha+1$, and $(\alpha+1)^{-1}=\alpha$. This constructs this particular four-element field; uniqueness of all finite fields of a given prime-power size is a further theorem, not established here.

## Guided practice

### 1. Starter — Reduce a power

Compute $\alpha^4$ in the displayed four-element field.

**Hint.** Use $\alpha^3=1$.

**Reasoning.** $\alpha^4=\alpha^3\alpha=\alpha$. Alternatively square $\alpha^2=\alpha+1$ to get $\alpha^4=\alpha^2+1=(\alpha+1)+1=\alpha$.

### 2. Core — Identify a kernel

For $\operatorname{ev}_{\sqrt2}:\mathbb Q[x]\to\mathbb R$, determine the kernel and image.

**Hint.** Divide by $x^2-2$ and evaluate the linear remainder.

**Reasoning.** $x^2-2$ vanishes at $\sqrt2$. If $a+b\sqrt2=0$ with rational $a,b$ and $b\ne0$, then $\sqrt2=-a/b$ would be rational, impossible. Hence a vanishing remainder is zero, so the kernel is $(x^2-2)$. The image is $\{a+b\sqrt2:a,b\in\mathbb Q\}=\mathbb Q(\sqrt2)$.

### 3. Transfer — A degree obstruction

Could a degree-3 extension of $\mathbb Q$ contain $\sqrt2$?

**Hint.** Insert $\mathbb Q(\sqrt2)$ into a proposed tower.

**Reasoning.** If $\sqrt2\in L$, then $\mathbb Q\subseteq\mathbb Q(\sqrt2)\subseteq L$ and the tower law makes $[L:\mathbb Q]$ divisible by 2. Since 3 is not divisible by 2, it cannot. This assumes $L/\mathbb Q$ has degree exactly 3.

### 4. Proof audit — An unstated theorem

“Every irreducible polynomial of degree $d$ has exactly $d$ roots in $F[x]/(p)$.” Find the error.

**Hint.** Only the class of $x$ was constructed as a root.

**Reasoning.** The quotient guarantees at least the root $[x]$, not all $d$ roots. For instance $x^3-2$ is irreducible over $\mathbb Q$, while $\mathbb Q(\sqrt[3]2)$ contains only its real root; the other two are nonreal. A splitting field requires further construction.
