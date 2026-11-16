
# Glossary, Hypothesis Index, and Theorem Finder

## Structural language

**Adjoint.** The unique map satisfying $\langle Tv,w\rangle=\langle v,T^{*}w\rangle$; finite-dimensional inner-product setting, Chapter 18.

**Annihilator.** Functionals vanishing on a subspace; reverses containment and identifies quotient duals, Chapter 8.

**Basis.** An independent spanning ordered list when used for coordinates, Chapters 2–3.

**Cyclic subspace.** $\{p(T)v\}$ for one vector; isomorphic to $\mathbb{F}[t]/(m_{T,v})$, Chapter 12.

**Direct sum.** Sum with unique component representation, Chapter 4.

**Invariant subspace.** $U$ with $T(U) \subseteq U$; supports restriction and quotient operators, Chapter 7.

**Normal operator.** $T^{*}T=TT^{*}$; unitarily diagonalizable over $C$, Chapters 18–19.

**Primary component.** Kernel of a power of an irreducible polynomial in $T$, Chapter 13.

**Quotient space.** Cosets collapsing a subspace; representative formulas must be well-defined, Chapter 4.

**Tensor product.** Universal linear receiver of bilinear maps, Chapter 9.

## Classification terms

**Characteristic polynomial.** $\operatorname{det}(tI-T)$; roots in the field are eigenvalues, Chapter 11.

**Elementary divisors.** Irreducible prime powers extracted from invariant factors, Chapter 14.

**Invariant factors.** Unique divisibility-chain polynomials classifying similarity over any field, Chapter 14.

**Jordan block.** Scalar plus one nilpotent chain block; requires splitting, Chapter 16.

**Minimal polynomial.** Monic generator of $\{p:p(T)=0\}$, Chapter 12.

**Rational canonical form.** Companion-block form from invariant factors, valid over arbitrary fields, Chapter 14.

## Geometry terms

**Gram matrix.** Pairwise inner products of a list; positive definite exactly for independence, Chapter 17.

**Orthogonal projection.** Idempotent self-adjoint map onto a subspace; gives unique nearest points in finite dimension, Chapter 17.

**Positive operator.** Self-adjoint with nonnegative quadratic form, Chapter 18.

**Singular values.** Square roots of eigenvalues of $T^{*}T$, Chapter 19.

**Unitary/orthogonal.** Inner-product-preserving complex/real isomorphism, Chapter 18.

## Theorem finder with hypotheses

- **Exchange lemma and basis length:** finite lists over a field; Chapters 2–3.
- **Dimension formula $\operatorname{dim}(U+W)$:** finite dimension; Chapter 4.
- **First isomorphism theorem:** no finite-dimension need for the isomorphism; Chapter 5.
- **Rank–nullity arithmetic:** finite-dimensional domain; Chapter 5.
- **Rank normal form:** finite-dimensional spaces over a field; Chapter 6.
- **Triangularization criterion:** invariant complete flag; existence via eigenvectors needs splitting; Chapter 7.
- **Double annihilator:** finite dimension for equality as stated; Chapter 8.
- **Tensor–Hom isomorphism:** finite dimension for surjectivity onto every map; Chapter 9.
- **Determinant/invertibility:** square finite-dimensional endomorphism; Chapter 10.
- **Cayley–Hamilton:** finite-dimensional endomorphism over a commutative field; Chapter 11.
- **Primary decomposition:** factor minimal polynomial into pairwise coprime irreducible powers; Chapter 13.
- **Rational canonical form:** finite-dimensional operator over any field; Chapter 14.
- **Diagonalizability:** minimal polynomial splits into distinct linear factors over the named field; Chapter 15.
- **Jordan form:** minimal polynomial splits over the named field; Chapter 16.
- **Orthogonal projection:** finite-dimensional inner-product space; closedness replaces finite dimension in Hilbert-space extensions; Chapter 17.
- **Complex spectral theorem:** finite-dimensional complex normal operator; Chapter 19.
- **Real spectral theorem:** finite-dimensional real self-adjoint operator; Chapter 19.
- **Sylvester inertia:** real symmetric forms under congruence; Chapter 20.
- **Simultaneous diagonalization:** commuting diagonalizable family; unitary version for commuting normal complex operators; Chapter 21.

## Common implication failures

Same rank does not imply similarity. Same characteristic polynomial does not imply similarity. Splitting does not imply diagonalizability when the minimal polynomial has repeated factors. Diagonalizable does not imply normal for a fixed inner product. Normal real does not imply real diagonalizable. Individual diagonalizability does not imply simultaneous diagonalizability without commutation. A small residual does not imply an exact kernel relation.


## Additional proof and boundary distinctions

**Restriction and extension of scalars.** If $F\subseteq K$, $[K:F]=d<\infty$ and $\dim_K V=n<\infty$, restriction gives $\dim_F V=dn$. Scalar extension of a finite-dimensional $F$-operator preserves rank and its monic minimal polynomial viewed in $K[t]$, while factorisation and the available eigenvalues can change. These are different operations. Chapters 1–3 and 15.

**Complement as a graph.** In a chosen decomposition $V=U\oplus W$, every complement of $U$ is the graph of a unique map $X:W\to U$. If an operator has blocks $\begin{pmatrix}A&B\\0&D\end{pmatrix}$, this graph is invariant exactly when $AX+B=XD$. An arbitrary complement need not be invariant. Chapters 4 and 7.

**Zero-argument universal data.** A zero-argument $W$-valued map chooses an element of $W$. The representing object is the field: linear maps $F\to W$ are determined by the image of one. The chosen datum is not generally a scalar when $W\ne F$. Chapters 9–10.

**Characteristic-safe polynomial coefficients.** The coefficient of $s^j$ in $p(\lambda+s)$ is the Hasse coefficient $p^{[j]}(\lambda)$, defined over every field. Identifying it with $p^{(j)}(\lambda)/j!$ additionally requires that factorial to be invertible. Chapters 11 and 16.

**CRT projector certificate.** Suppose a nonzero annihilating polynomial is $m=\prod_i g_i$ with pairwise coprime factors. Put $q_i=m/g_i$ and choose $r_iq_i+s_ig_i=1$ by polynomial Bezout. Then $e_i=r_iq_i$ is one modulo $g_i$ and zero modulo the other factors. Pairwise coprimality makes $\sum_i e_i-1$, $e_i^2-e_i$ and $e_ie_j$ for $i\ne j$ divisible by $m$. Evaluating at the operator gives complementary algebraic projections. Chapters 12–13.

**Jordan chain endpoint.** For a length-$s$ nilpotent chain generated by $v$, both $N^s v=0$ and $N^{s-1}v\ne0$ are needed. The nonzero condition alone can describe part of a longer chain whose span is not invariant. A Jordan block at $\lambda\in F$ is defined over $F$; a full Jordan decomposition of an operator over $F$ requires splitting. Chapter 16.

**Induced and Frobenius conditioning.** For $n\ge1$ and nonzero scalar $c$ over the real or complex field, every induced operator norm gives $\kappa(cI_n)=1$. The norm-product condition number in the Frobenius norm is $n$. State the norm before interpreting a condition number. Chapters 10 and 22.

**Algebraic and geometric extension.** Under the usual choice assumptions, an algebraic basis can be extended and an algebraic complement can exist in infinite dimension. That assertion supplies no continuity, nearest-point property or orthogonal decomposition. Infinite-dimensional projection theorems need their own completeness and closedness hypotheses. Chapters 17 and 22.
