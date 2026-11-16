var e=`---
parent_id: book-linear-algebra-structure-proofs
chapter_id: nonnegative-matrices-perron-frobenius
title: "Nonnegative Matrices and Perron-Frobenius"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Nonnegative Matrices and Perron-Frobenius {#section-1-nonnegative-matrices-and-perron-frobenius}

A matrix can preserve the nonnegative coordinate cone without preserving lengths, angles, or any preferred basis of eigenvectors. This apparently modest order property nevertheless imposes strong spectral structure. Under appropriate connectivity hypotheses, one positive eigenvector describes the dominant growth direction, one positive left eigenvector measures its amplitude, and the associated eigenvalue is algebraically simple.

The hypotheses are the central issue. A matrix with all entries positive behaves differently from a matrix whose directed graph is merely strongly connected. Connectivity guarantees positive Perron vectors and simplicity of the positive spectral-radius eigenvalue. It does not by itself eliminate other eigenvalues of the same modulus. A two-state system that alternates deterministically provides the smallest warning.

The prerequisites are eigenvalues over the complex numbers, invariant direct sums, characteristic polynomials, and elementary real analysis. We use compactness of a closed bounded subset of finite-dimensional Euclidean space and the fact that a continuous real function on a nonempty compact set attains a maximum. These are the only analytic inputs in the existence argument. In particular, the proof does not require a fixed-point theorem or a Jordan normal form.

After working through the chapter, you should be able to prove the positive and irreducible Perron–Frobenius theorems, audit strict-dominance claims, bound the Perron root using test vectors, and apply the results to a column-stochastic transition matrix. Throughout, matrices have positive size and real entries, but their spectra are taken over $\\mathbb C$.

<a id="section-9-1-order-connectivity-and-three-different-hypotheses"></a>
## 1. Order, connectivity, and three different hypotheses {#section-11-1-order-connectivity-and-three-different-hypotheses}

**Definition 22.1 (Coordinate order).** For real vectors, $x\\geq0$ means every coordinate is nonnegative, and $x>0$ means every coordinate is strictly positive. Inequalities between vectors are coordinatewise. A matrix $A\\geq0$ is **nonnegative**; a matrix $A>0$ is **positive** when every entry is strictly positive. Positive here does not mean positive definite.

A nonnegative matrix preserves order: $u\\leq v$ implies $Au\\leq Av$, since each coordinate of $A(v-u)$ is a sum of nonnegative terms. A positive matrix has the stronger property that $Au>0$ whenever $u\\geq0$ is nonzero. Even a vector supported on one coordinate contributes positively to every output coordinate.

**Definition 22.2 (Directed graph and irreducibility).** The graph of $A\\geq0$ has vertices $1,\\ldots,n$ and an arrow $j\\to i$ when $a_{ij}>0$. We call $A$ **irreducible** if for every ordered pair of distinct vertices there is a directed path from the first to the second. For one vertex this condition is vacuous, so the one-by-one zero matrix is included and will be treated separately.

This arrow convention follows column evolution: an amount in input coordinate $j$ can contribute to output coordinate $i$. Reversing every arrow gives another common convention and does not change strong connectivity. A source must nevertheless specify which convention its transition interpretation uses.

**Definition 22.3 (Primitivity and spectral radius).** A nonnegative square matrix is **primitive** if $A^m>0$ for some positive integer $m$. Its spectral radius is
$$
\\rho(A)=\\max\\{|\\lambda|:\\det(\\lambda I-A)=0,\\ \\lambda\\in\\mathbb C\\}.
$$
The maximum exists because the characteristic polynomial has finitely many complex roots and at least one root.

Positivity implies primitivity with $m=1$. Primitivity implies irreducibility, because a positive $(i,j)$ entry of $A^m$ gives a path from $j$ to $i$. Irreducibility need not imply primitivity: paths may exist only at certain lengths. An eigenvalue is geometrically simple when its eigenspace has dimension one, and algebraically simple when its characteristic-polynomial multiplicity is one. We will prove the stronger property rather than substituting one for the other.

<a id="section-27-2-existence-for-a-positive-matrix-by-compactness"></a>
## 2. Existence for a positive matrix by compactness {#section-29-2-existence-for-a-positive-matrix-by-compactness}

**Lemma 22.4 (A maximal nonnegative subsolution).** If $A>0$, there are $r>0$ and $x>0$ with $Ax=rx$ and $\\sum_i x_i=1$.

*Proof.* Put $M=\\max_j\\sum_i a_{ij}$, the largest column sum, and let
$$
\\Delta=\\{x\\in\\mathbb R^n:x\\geq0,\\ \\sum_i x_i=1\\}.
$$
If $Ax\\geq tx$ for $x\\in\\Delta$ and $t\\geq0$, summing coordinates gives
$$
t\\leq\\sum_i(Ax)_i
=\\sum_j\\left(\\sum_i a_{ij}\\right)x_j\\leq M.
$$
Consider the set of pairs
$$
K=\\{(t,x)\\in[0,M]\\times\\Delta:Ax\\geq tx\\}.
$$
It is nonempty because every $(0,x)$ belongs. It is closed, since its inequalities are continuous, and bounded, hence compact. The continuous coordinate $t$ therefore attains a maximum $r$ at some $x\\in\\Delta$. Taking the uniform vector shows $r\\geq\\min_i\\sum_j a_{ij}>0$.

Let $d=Ax-rx\\geq0$. If $d\\neq0$, positivity gives $Ad>0$. Set $y=Ax>0$. Then
$$
Ay=A(rx+d)=ry+Ad.
$$
The number $\\varepsilon=\\min_i(Ad)_i/y_i$ is strictly positive, so $Ay\\geq(r+\\varepsilon)y$. Normalizing $y$ by its positive coordinate sum produces another simplex vector with a feasible value $r+\\varepsilon$. The preceding column-sum bound puts this value in $[0,M]$, contradicting maximality. Thus $d=0$, so $Ax=rx$. Finally $Ax>0$ and $r>0$ imply $x>0$. ∎

The maximized quantity is a lower growth bound, not an eigenvalue assumed in advance. Compactness supplies an optimizer even if it initially sits on the simplex boundary. Positivity then removes all slack and forces the optimizer into the interior. Both steps would fail if a nonzero slack vector could remain invisible in some output coordinate.

Apply the lemma also to $A^{\\mathsf T}$. It gives $w>0$ and $s>0$ with $w^{\\mathsf T}A=s w^{\\mathsf T}$. Pairing with the right vector yields
$$
r\\,w^{\\mathsf T}x=w^{\\mathsf T}Ax=s\\,w^{\\mathsf T}x.
$$
Since $w^{\\mathsf T}x>0$, we obtain $s=r$. Thus the same positive eigenvalue has positive left and right vectors, without any prior assertion about the spectrum.

<a id="section-60-3-the-positive-perron-theorem-and-simplicity"></a>
## 3. The positive Perron theorem and simplicity {#section-62-3-the-positive-perron-theorem-and-simplicity}

**Theorem 22.5 (Positive Perron theorem).** For $A>0$, the number $r$ above equals $\\rho(A)$. It has positive right and left eigenvectors, is algebraically simple, and every other eigenvalue $\\lambda$ satisfies $|\\lambda|<r$. Its right eigenspace is the complex span of $x$, and its left eigenspace is the complex span of $w^{\\mathsf T}$.

*Proof.* For a complex eigenpair $Az=\\lambda z$, $z\\neq0$, the coordinate triangle inequality gives
$$
|\\lambda|\\,|z|=|Az|\\leq A|z|.
$$
Multiplying by $w^{\\mathsf T}>0$ gives
$$
|\\lambda|\\,w^{\\mathsf T}|z|
\\leq w^{\\mathsf T}A|z|=r\\,w^{\\mathsf T}|z|.
$$
The scalar $w^{\\mathsf T}|z|$ is positive, so $|\\lambda|\\leq r$. As $r$ is itself an eigenvalue, it is the spectral radius.

First prove uniqueness for real eigenvectors at $r$. If $Ay=ry$, choose $t=\\max_i y_i/x_i$. Then $h=tx-y\\geq0$ and at least one coordinate of $h$ is zero. Also $Ah=rh$. If $h\\neq0$, positivity makes every coordinate of $Ah$ strictly positive, contradicting its zero coordinate on the right. Hence $y=tx$. A complex eigenvector at the real eigenvalue $r$ has real and imaginary parts that are real eigenvectors, so the complex eigenspace also has dimension one. Applying the same argument to the transpose proves left uniqueness.

Now suppose $|\\lambda|=r$. The nonnegative vector $A|z|-r|z|$ has zero pairing with the strictly positive $w$, so it is zero coordinatewise. Thus $A|z|=r|z|$, and $|z|>0$ because $A|z|>0$. Equality holds in each triangle inequality
$$
\\left|\\sum_j a_{ij}z_j\\right|=\\sum_j a_{ij}|z_j|.
$$
All coefficients $a_{ij}$ are positive. Equality in the complex triangle inequality therefore forces all nonzero $z_j$ to have a common complex phase. To justify this equality criterion, divide the summands by the phase of their nonzero sum: each real part is at most its modulus, and equality of the sums forces equality term by term. Hence $z=c|z|$ for a unit complex scalar $c$. It follows that $Az=cA|z|=rz$, so $\\lambda=r$. Every different eigenvalue has strictly smaller modulus.

Finally normalize $w^{\\mathsf T}x=1$ and set
$$
H=\\ker(w^{\\mathsf T}:\\mathbb C^n\\to\\mathbb C).
$$
Every $v$ decomposes uniquely as $(w^{\\mathsf T}v)x+h$ with $h\\in H$. The subspace $H$ is $A$-invariant because $w^{\\mathsf T}Ah=r w^{\\mathsf T}h=0$. In a basis beginning with $x$ and followed by a basis of $H$, $A$ is block diagonal with blocks $r$ and $A|_H$. The latter has no eigenvector with eigenvalue $r$, because every such vector would be a multiple of $x$, which is not in $H$. Hence $\\det(rI_H-A|_H)\\neq0$, and
$$
\\chi_A(t)=(t-r)\\chi_{A|_H}(t)
$$
contains exactly one factor $t-r$. This proves algebraic simplicity without a generalized-eigenvector argument. ∎

The left vector supplies more than a second eigenvector. Its strict positivity converts a coordinate inequality into a spectral bound, and its kernel selects an invariant complement in which the Perron eigenvalue is absent. The normalization $w^{\\mathsf T}x=1$ is a choice of scale, not an additional theorem hypothesis.

<a id="section-95-4-worked-example-22-1-growth-with-distinct-left-and-rig"></a>
## 4. Worked example 22.1: growth with distinct left and right roles {#section-97-4-worked-example-22-1-growth-with-distinct-left-and-rig}

Let
$$
A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}.
$$
The vectors $x=(1,1)^{\\mathsf T}$ and $y=(1,-1)^{\\mathsf T}$ satisfy $Ax=3x$ and $Ay=y$. Thus $r=3$, and choose $w=(1/2,1/2)^{\\mathsf T}$, giving $w^{\\mathsf T}x=1$. Every real $v=(a,b)^{\\mathsf T}$ has decomposition
$$
v=\\frac{a+b}{2}x+\\frac{a-b}{2}y.
$$
Consequently
$$
3^{-k}A^k v=\\frac{a+b}{2}x+3^{-k}\\frac{a-b}{2}y.
$$
The normalized powers tend to $xw^{\\mathsf T}$, a rank-one matrix. The right vector gives the surviving shape, while $w^{\\mathsf T}v$ measures how much of that shape survives from a particular input.

This calculation is an explicit consequence of the two eigenvectors, not a general convergence proof inferred from a picture. The input $v=(1,-1)$ has zero Perron amplitude and grows at the smaller rate one. A claim that every nonzero input grows like $3^k x$ would therefore be false. For a nonzero nonnegative input, however, the positive left vector gives positive amplitude. The order hypothesis restricts the kinds of cancellation such inputs can contain.

<a id="section-113-5-strong-connectivity-supplies-a-positive-auxiliary-mat"></a>
## 5. Strong connectivity supplies a positive auxiliary matrix {#section-115-5-strong-connectivity-supplies-a-positive-auxiliary-mat}

**Lemma 22.6 (Padded paths).** If $A\\geq0$ is irreducible and $n\\geq2$, then $B=(I+A)^{n-1}>0$.

*Proof.* In a nonnegative matrix product,
$$
(A^k)_{ij}=\\sum a_{i i_{k-1}}a_{i_{k-1}i_{k-2}}\\cdots a_{i_1j}.
$$
A summand is positive precisely when its indices trace a length-$k$ directed walk from $j$ to $i$. For distinct vertices, strong connectivity supplies a path, and deleting repeated-vertex cycles leaves a path of length at most $n-1$. The matrix $I+A$ additionally has a positive loop at every vertex. Pad that path with loops to obtain a walk of length $n-1$, giving a positive contribution to $B_{ij}$. For $i=j$, use $n-1$ loops. Hence every entry of $B$ is positive. ∎

The identity term changes the timing structure without discarding the original edges. The proof does not claim $A^{n-1}>0$: the added loops are exactly what lets paths of different lengths be padded to one common length. This is why the auxiliary positive matrix is suitable for proving irreducible Perron vectors but cannot prove that an irreducible matrix itself has strict peripheral dominance.

**Theorem 22.7 (Irreducible Perron–Frobenius theorem).** Let $A\\geq0$ be irreducible with $n\\geq2$. Then $r=\\rho(A)>0$ is an eigenvalue with positive right and left eigenvectors. Its left and right eigenspaces are one-dimensional, and it is algebraically simple. Every complex eigenvalue satisfies $|\\lambda|\\leq r$. Other eigenvalues with modulus $r$ may exist.

*Proof.* Apply Theorem 22.5 to the positive $B=(I+A)^{n-1}$, obtaining $x>0$, $Bx=\\beta x$, and a one-dimensional $\\beta$-eigenspace. Since $A$ commutes with its polynomial $B$, we have $B(Ax)=A(Bx)=\\beta Ax$. Every row of an irreducible $A$ has a positive entry, so $Ax>0$. Therefore $Ax=rx$ for some $r>0$.

Apply the same argument to $A^{\\mathsf T}$ and $B^{\\mathsf T}$ to get $w>0$ and $w^{\\mathsf T}A=s w^{\\mathsf T}$. Pairing with $x$ proves $s=r$. For any complex eigenpair of $A$, the inequality $|\\lambda||z|\\leq A|z|$, paired with $w$, gives $|\\lambda|\\leq r$. Thus $r=\\rho(A)$.

If $Ay=ry$, then $By=(1+r)^{n-1}y$. Since $Bx=(1+r)^{n-1}x$, this is the Perron eigenspace of $B$, so $y$ is a complex multiple of $x$. Transposition gives left uniqueness. Finally the invariant direct-sum argument with $H=\\ker w^{\\mathsf T}$ from Theorem 22.5 applies verbatim: it uses the left eigenvector and uniqueness at $r$, rather than strict dominance. Therefore $r$ is algebraically simple. ∎

For $n=1$, a matrix $[a]$ with $a>0$ satisfies the positive theorem immediately. Under our irreducibility convention $[0]$ is also irreducible. Its radius is zero, its positive vector $x=[1]$ is an eigenvector, and its sole eigenvalue is algebraically simple, but the conclusion $r>0$ is false. Stating this case explicitly prevents an irreducibility convention from hiding an exception.

<a id="section-135-6-primitive-matrices-and-the-periodic-obstruction"></a>
## 6. Primitive matrices and the periodic obstruction {#section-137-6-primitive-matrices-and-the-periodic-obstruction}

**Theorem 22.8 (Strict dominance for primitive matrices).** If $A\\geq0$ is primitive, its Perron eigenvalue $r>0$ is algebraically simple, has positive left and right eigenvectors, and satisfies $|\\lambda|<r$ for every other eigenvalue.

*Proof.* Primitivity implies irreducibility. Use Theorem 22.7, or the positive one-by-one case, to obtain the Perron data. Choose $m$ with $A^m>0$. Its positive right vector $x$ has eigenvalue $r^m$, so the positive theorem identifies this as the Perron root of $A^m$ and gives a one-dimensional eigenspace there.

If $Az=\\lambda z$ and $|\\lambda|=r$, then $A^m z=\\lambda^m z$ has eigenvalue of modulus $r^m$. Strict dominance for $A^m$ forces $\\lambda^m=r^m$, and its eigenspace uniqueness forces $z\\in\\mathbb Cx$. Applying $A$ to that vector now gives $\\lambda=r$. Algebraic simplicity of $r$ was already proved for $A$. ∎

**Worked example 22.2 (Irreducible but alternating).** Let
$$
S=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}.
$$
Its graph reaches either state from the other, so it is irreducible. Its eigenvalues are $1,-1$, with eigenvectors $(1,1)$ and $(1,-1)$. The radius-one eigenvalue is simple and has positive left and right vectors. Yet $S^{2k}=I$ and $S^{2k+1}=S$, so normalized powers do not converge.

Every closed path in this graph has even length; their greatest common divisor is two, called the period. Odd steps exchange the states and even steps return them. No power is positive. This illustrates the periodic obstruction without needing a general classification of all peripheral roots. We make no claim here that irreducibility alone guarantees convergence.

Adding a holding probability changes the example. For $0<\\alpha<1$,
$$
P_\\alpha=\\alpha I+(1-\\alpha)S
$$
is positive and has eigenvalues $1$ and $2\\alpha-1$. The second has modulus strictly less than one, and its explicit eigenvector decomposition proves convergence to the matrix with all entries $1/2$. The endpoint choices $\\alpha=0,1$ lose one or another needed hypothesis, so the open interval is essential.

<a id="section-157-7-row-ratio-bounds-and-comparison"></a>
## 7. Row-ratio bounds and comparison {#section-159-7-row-ratio-bounds-and-comparison}

**Theorem 22.9 (Row-ratio bounds).** Suppose $A\\geq0$ has positive left Perron vector $w$, eigenvalue $r$, and $v>0$. Then
$$
\\min_i\\frac{(Av)_i}{v_i}\\leq r\\leq
\\max_i\\frac{(Av)_i}{v_i}.
$$
Equality at either bound occurs exactly when $Av=rv$.

*Proof.* Let the minimum and maximum be $a,b$. Then $av\\leq Av\\leq bv$. Pairing with $w>0$ gives $a w^{\\mathsf T}v\\leq r w^{\\mathsf T}v\\leq b w^{\\mathsf T}v$, proving the bounds. If $r=a$, the nonnegative slack $Av-av$ has zero positive pairing and must vanish. The upper equality case is identical with $bv-Av$. Conversely a Perron vector makes every ratio equal to $r$. ∎

With $v=\\mathbf1$, these become the familiar minimum and maximum row-sum bounds. A well-chosen nonuniform $v$ can be much sharper. The ratios are sometimes called componentwise growth factors: they measure how the chosen positive shape changes in each coordinate after one application.

**Worked example 22.3 (Improving a bound).** Take $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$. The uniform test vector gives row-sum bounds $2\\leq r\\leq3$. With $v=(3,2)^{\\mathsf T}$, $Av=(8,5)^{\\mathsf T}$, giving $5/2\\leq r\\leq8/3$. The exact characteristic polynomial is $t^2-3t+1$, so $r=(3+\\sqrt5)/2$, consistent with the sharper interval.

The associated right eigenvector can be chosen as $(r-1,1)^{\\mathsf T}$. Substitution gives first coordinate $2r-1=r(r-1)$, using $r^2-3r+1=0$, and second coordinate $r$. This confirms the exact vector rather than inferring it solely from numerical ratios. Better test vectors are useful certificates even when the exact polynomial has no convenient expression.

**Corollary 22.10 (Monotonicity).** If $0\\leq A\\leq B$ and both are irreducible of size at least two, then $\\rho(A)\\leq\\rho(B)$. If $A\\neq B$, the inequality is strict.

*Proof.* Let $Ax=rx$, $x>0$, and let $u>0$ be a left Perron vector for $B$ with root $s$. Then
$$
(s-r)u^{\\mathsf T}x=u^{\\mathsf T}(B-A)x\\geq0.
$$
If $B-A$ has a positive entry, its pairing with positive $u,x$ is strictly positive, so $s>r$. ∎

<a id="section-182-8-what-reducibility-can-destroy"></a>
## 8. What reducibility can destroy {#section-184-8-what-reducibility-can-destroy}

Removing irreducibility can destroy positivity, uniqueness, and algebraic simplicity in different ways. Consider $D=\\operatorname{diag}(2,1)$. Its spectral-radius eigenvectors are multiples of $(1,0)$, so no positive right eigenvector exists. The radius is nevertheless simple. Failure of one conclusion does not imply that all the others fail.

For $D=I_2$, every vector is a radius-one eigenvector. Positive vectors exist, but uniqueness and both kinds of simplicity fail. For $J=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, the radius-one eigenspace has dimension one while the characteristic polynomial is $(t-1)^2$. This separates geometric from algebraic simplicity in a nonnegative matrix.

The nilpotent matrix $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ has radius zero despite being nonzero. Its nonzero entry records a one-way transfer, without a return path capable of sustaining positive growth. These examples show why a proof for irreducible matrices must use connectivity, rather than treating nonnegativity alone as a substitute.

They also clarify the meaning of uniqueness. A Perron vector is unique only up to scalar, unless a normalization such as coordinate sum one is fixed. Left and right vectors need not be equal for a nonsymmetric matrix. Finally, the spectral radius is nonnegative by definition; proving it is an eigenvalue with a positive vector is an additional result, not a tautology.

<a id="section-192-9-column-stochastic-evolution-and-convergence-with-its-"></a>
## 9. Column-stochastic evolution and convergence with its hypothesis {#section-194-9-column-stochastic-evolution-and-convergence-with-its-}

**Definition 22.11 (Column-stochastic matrix).** A nonnegative matrix $P$ is column-stochastic if every column sums to one. For a probability column $p\\geq0$ with $\\mathbf1^{\\mathsf T}p=1$, the next state is $Pp$, again a probability column. A stationary distribution satisfies $P\\pi=\\pi$.

**Theorem 22.12 (Stationarity and primitive convergence).** An irreducible column-stochastic matrix has a unique stationary probability vector $\\pi>0$. Its spectral radius is one. If it is primitive, $P^kp\\to\\pi$ for every initial probability column $p$. Irreducibility without primitivity does not guarantee this limit.

*Proof.* For size at least two, use the irreducible theorem. Since $\\mathbf1^{\\mathsf T}P=\\mathbf1^{\\mathsf T}$, pairing with a positive right Perron vector gives $r=1$. Normalize that vector to sum one. Simplicity gives uniqueness of every stationary vector subject to this normalization. The one-by-one stochastic matrix is $[1]$, for which the assertions are immediate.

For convergence choose $m$ with $Q=P^m>0$, and let $\\delta=\\min_{ij}q_{ij}>0$. Column sums give $n\\delta\\leq1$. Put $\\varepsilon=n\\delta$ and let $J=\\mathbf1\\mathbf1^{\\mathsf T}/n$. If $\\varepsilon=1$, all entries of each column of $Q$ equal $1/n$, so $Q=J$. Otherwise
$$
Q=\\varepsilon J+(1-\\varepsilon)R,
\\qquad
R=\\frac{Q-\\varepsilon J}{1-\\varepsilon}
$$
is column-stochastic and nonnegative. Every such matrix contracts the one-norm:
$$
\\|Rv\\|_1\\leq\\sum_{i,j}r_{ij}|v_j|=\\|v\\|_1.
$$
For a zero-sum vector $v$, $Jv=0$, so $\\|Qv\\|_1\\leq(1-\\varepsilon)\\|v\\|_1$, including the case $Q=J$. Since $p-\\pi$ has sum zero, iterating proves convergence at the times $mk$. For arbitrary times write $k=ma+b$, $0\\leq b<m$, and use contraction by $P^b$. For $\\varepsilon<1$, this gives $\\|P^k(p-\\pi)\\|_1\\leq(1-\\varepsilon)^a\\|p-\\pi\\|_1\\to0$. If $\\varepsilon=1$, the difference vanishes after the first full block and remains zero. The swap matrix from Worked example 22.2 proves the final caveat. ∎

**Worked example 22.4 (A stationary population).** Let
$$
P=\\begin{pmatrix}3/4&1/2\\\\1/4&1/2\\end{pmatrix}.
$$
Both columns sum to one and all entries are positive. The stationary equations reduce to $\\pi_1/4=\\pi_2/2$, so $\\pi=(2/3,1/3)^{\\mathsf T}$ after normalization. The second eigenvalue is $1/4$, and direct calculation on the zero-sum vector $(1,-1)$ gives multiplication by $1/4$. Therefore
$$
P^kp=\\pi+4^{-k}(p-\\pi)
$$
for every probability column $p$. The initial total is preserved by the left vector $\\mathbf1$, and the right vector $\\pi$ is the limiting shape. Reversing the row/column convention without transposing the matrix would change this interpretation.

<a id="section-222-10-a-proof-map-to-retain"></a>
## 10. A proof map to retain {#section-224-10-a-proof-map-to-retain}

The proofs divide the work into reusable mechanisms. Compactness produces a maximal lower-growth certificate. Positivity makes a nonzero slack improve every ratio, forcing an eigenvector. A positive left vector bounds every complex eigenvalue, and a maximum-ratio argument supplies geometric uniqueness. An invariant complement then upgrades uniqueness to algebraic simplicity.

For irreducible matrices, padded paths create a positive polynomial in $A$, and commutation returns its Perron direction to $A$. Primitivity requires a further positive power and removes the remaining peripheral possibilities. In stochastic evolution, a positive power supplies an explicit contraction on zero-sum differences. None of these steps permits dropping its hypothesis just because several examples happen to converge.

The exercises below separate calculation, proof reconstruction, and counterexample construction. In particular, check the domain of any ratio, specify the normalization of every Perron vector, and distinguish a theorem about the positive spectral-radius eigenvalue from a theorem about all eigenvalues on the peripheral circle.

<a id="section-230-exercises"></a>

## Summary

<a id="section-706-summary"></a>
Positive matrices have a positive spectral-radius eigenvalue with unique positive left and right directions, algebraic simplicity, and strict peripheral dominance. Irreducibility retains positive Perron vectors and simplicity but permits periodic competitors; a positive power restores strict dominance and convergence. Row-ratio bounds supply computable certificates, and stochastic normalization turns Perron vectors into stationary probabilities. Reducible examples show which conclusions require connectivity. The final capstone chapter uses these distinctions when transferring structural results to new problems.

## Exercises {#section-232-exercises}

<a id="section-232-exercise-22-1"></a>
### Exercise 22.1 {#section-234-exercise-22-1}
<a id="nonnegative-matrices-perron-frobenius-ex-1"></a>

For $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$, find its Perron root, positive right and left eigenvectors, and normalize them by $\\sum_i x_i=1$ and $w^{\\mathsf T}x=1$.

<details>
<summary>Hint 1</summary>

Check whether the row sums already identify a positive right eigenvector.

</details>

<details>
<summary>Hint 2</summary>

Solve the transpose eigenvector equation for the same eigenvalue, then scale the two vectors independently.

</details>

<details>
<summary>Solution</summary>

The row sums are both five, so $A(1,1)^{\\mathsf T}=5(1,1)^{\\mathsf T}$. The characteristic polynomial is $t^2-7t+10=(t-5)(t-2)$, so the radius is five, also guaranteed by positivity. Normalize $x=(1/2,1/2)^{\\mathsf T}$. The left equation at five gives $w_1=2w_2$. Taking $w=(4/3,2/3)^{\\mathsf T}$ gives $w^{\\mathsf T}x=1$. Direct multiplication checks both eigenvector equations. The vectors need not coincide because the matrix is not symmetric.

</details>

<a id="section-258-exercise-22-2"></a>
### Exercise 22.2 {#section-260-exercise-22-2}
<a id="nonnegative-matrices-perron-frobenius-ex-2"></a>

For $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$, derive row-ratio bounds using $v=(1,1)^{\\mathsf T}$ and $u=(5,3)^{\\mathsf T}$. Compare the widths of the intervals and verify the exact Perron root lies in both.

<details>
<summary>Hint 1</summary>

Compute the two coordinatewise ratios for each test vector.

</details>

<details>
<summary>Hint 2</summary>

The larger root of the quadratic characteristic polynomial supplies an exact comparison.

</details>

<details>
<summary>Solution</summary>

For $v$, $Av=(3,2)^{\\mathsf T}$, so $2\\leq r\\leq3$, an interval of width one. For $u$, $Au=(13,8)^{\\mathsf T}$, so $13/5\\leq r\\leq8/3$, an interval of width $1/15$. The exact root is $r=(3+\\sqrt5)/2$. The inequalities $r\\geq13/5$ and $r\\leq8/3$ are equivalent to $\\sqrt5\\geq11/5$ and $\\sqrt5\\leq7/3$, respectively. Squaring these positive quantities gives $5\\geq121/25$ and $5\\leq49/9$. Thus both bounds are valid and the nonuniform vector yields a much sharper certificate.

</details>

<a id="section-284-exercise-22-3"></a>
### Exercise 22.3 {#section-286-exercise-22-3}
<a id="nonnegative-matrices-perron-frobenius-ex-3"></a>

Classify each matrix as positive, primitive, and irreducible: $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, $\\begin{pmatrix}0&1\\\\1&1\\end{pmatrix}$, and $\\operatorname{diag}(2,1)$. Prove every claimed classification.

<details>
<summary>Hint 1</summary>

For each graph, decide whether both vertices can reach each other.

</details>

<details>
<summary>Hint 2</summary>

Compute a low power for the second matrix; for the first, distinguish odd and even powers.

</details>

<details>
<summary>Solution</summary>

The swap matrix is irreducible because it has arrows in both directions, but is not positive. Its even powers are identity and its odd powers equal itself, so it is not primitive. The second matrix is irreducible for the same two connecting arrows and is not positive because of its zero entry. Its square is $\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}>0$, proving primitivity. The diagonal matrix is neither positive nor irreducible because there is no path between distinct vertices. Every power is diagonal, so no power is positive and it is not primitive.

</details>

<a id="section-310-exercise-22-4"></a>
### Exercise 22.4 {#section-312-exercise-22-4}
<a id="nonnegative-matrices-perron-frobenius-ex-4"></a>

In the compactness argument, prove explicitly that $K$ is nonempty and compact, that every feasible $t$ is at most the largest column sum, and that the maximal value is positive when $A>0$.

<details>
<summary>Hint 1</summary>

Use the simplex normalization when summing the coordinate inequalities.

</details>

<details>
<summary>Hint 2</summary>

For positivity of the maximum, test the uniform simplex vector and its minimum row growth ratio.

</details>

<details>
<summary>Solution</summary>

For every $x\\in\\Delta$, $(0,x)\\in K$, so the set is nonempty. The simplex is closed and bounded, and each coordinate inequality $(Ax)_i-tx_i\\geq0$ defines a closed set because its left side is continuous. Thus $K$ is closed and bounded in finite-dimensional Euclidean space and is compact. Summing $Ax\\geq tx$ gives $t\\leq\\sum_j(\\sum_i a_{ij})x_j\\leq M$. For $x=\\mathbf1/n$, the ratio $(Ax)_i/x_i$ is row sum $i$, so the minimum positive row sum is feasible. Consequently the attained maximum is strictly positive.

</details>

<a id="section-336-exercise-22-5"></a>
### Exercise 22.5 {#section-338-exercise-22-5}
<a id="nonnegative-matrices-perron-frobenius-ex-5"></a>

Let $A>0$, $r>0$, $x\\geq0$ be nonzero, and $d=Ax-rx\\geq0$. Prove that $d\\neq0$ produces a positive vector $y$ and $\\varepsilon>0$ with $Ay\\geq(r+\\varepsilon)y$. Explain why normalizing $y$ does not change this inequality.

<details>
<summary>Hint 1</summary>

Choose the next iterate of x as the new test vector.

</details>

<details>
<summary>Hint 2</summary>

Apply A to the slack relation and take the minimum of the positive coordinate ratios.

</details>

<details>
<summary>Solution</summary>

Set $y=Ax$, which is positive because $A>0$ and $x\\geq0$ is nonzero. If $d\\neq0$, $Ad>0$. Applying A to $Ax=rx+d$ gives $Ay=ry+Ad$. Hence $\\varepsilon=\\min_i(Ad)_i/y_i>0$ satisfies $Ay\\geq(r+\\varepsilon)y$. Multiplying both sides by the same positive scalar preserves coordinate order. Thus dividing y by its coordinate sum makes it a simplex vector with the same feasible growth factor. The strict improvement is what contradicts maximality in Lemma 22.4.

</details>

<a id="section-362-exercise-22-6"></a>
### Exercise 22.6 {#section-364-exercise-22-6}
<a id="nonnegative-matrices-perron-frobenius-ex-6"></a>

Suppose $A\\geq0$, $Ax=rx$, and $w^{\\mathsf T}A=s w^{\\mathsf T}$, with $x,w>0$. Prove $r=s$. Then prove $|\\lambda|\\leq r$ for every complex eigenvalue of $A$.

<details>
<summary>Hint 1</summary>

Evaluate the scalar wᵀAx using each eigenvector equation.

</details>

<details>
<summary>Hint 2</summary>

For a complex eigenvector z, compare |Az| with A|z| before pairing with w.

</details>

<details>
<summary>Solution</summary>

We have $r w^{\\mathsf T}x=w^{\\mathsf T}Ax=s w^{\\mathsf T}x$. The pairing is positive, so $r=s$. If $Az=\\lambda z$, then $|\\lambda||z|\\leq A|z|$. Multiplying by $w^{\\mathsf T}$ gives $|\\lambda|w^{\\mathsf T}|z|\\leq r w^{\\mathsf T}|z|$. Since $z\\neq0$, its nonnegative modulus has positive pairing with w. Division yields the bound. This proof requires nonnegativity for the coordinate triangle estimate and positivity of w for the nonzero denominator.

</details>

<a id="section-388-exercise-22-7"></a>
### Exercise 22.7 {#section-390-exercise-22-7}
<a id="nonnegative-matrices-perron-frobenius-ex-7"></a>

Let $A>0$, $Ax=rx$, $x>0$. Reconstruct the maximum-ratio proof that every real $r$-eigenvector is a multiple of x. Explain how this also establishes the complex eigenspace dimension.

<details>
<summary>Hint 1</summary>

Subtract an arbitrary eigenvector from the smallest coordinatewise upper multiple obtained by a maximum ratio.

</details>

<details>
<summary>Hint 2</summary>

The resulting nonnegative eigenvector has a zero coordinate; strict positivity of A makes that impossible unless it is zero.

</details>

<details>
<summary>Solution</summary>

For $Ay=ry$, put $t=\\max_i y_i/x_i$. Then $h=tx-y\\geq0$, and an index attaining the maximum gives $h_i=0$. Also $Ah=rh$. If h were nonzero, $Ah>0$, contradicting its zero ith coordinate on the right. Hence h=0 and y=tx. If z is complex with $Az=rz$, the real matrix and real r imply its real and imaginary parts separately satisfy the real eigenvector equation. Both are real multiples of x, so z is a complex multiple of x.

</details>

<a id="section-414-exercise-22-8"></a>
### Exercise 22.8 {#section-416-exercise-22-8}
<a id="nonnegative-matrices-perron-frobenius-ex-8"></a>

Assume $Ax=rx$, $w^{\\mathsf T}A=r w^{\\mathsf T}$, $w^{\\mathsf T}x=1$, and $\\ker(A-rI)=\\mathbb Cx$. Prove algebraic simplicity of r using an invariant direct sum, without Jordan normal form.

<details>
<summary>Hint 1</summary>

Use ker wᵀ as a candidate complement and check invariance.

</details>

<details>
<summary>Hint 2</summary>

Factor the characteristic polynomial in the resulting block basis and evaluate the complementary factor at r.

</details>

<details>
<summary>Solution</summary>

Let $H=\\ker w^{\\mathsf T}$. Every v is $(w^{\\mathsf T}v)x+[v-(w^{\\mathsf T}v)x]$, with the bracket in H. The sum is direct because $cx\\in H$ forces c=0. Also $w^{\\mathsf T}Ah=r w^{\\mathsf T}h=0$, so H is invariant. Thus the characteristic polynomial factors as $(t-r)\\chi_{A|_H}(t)$. If the second factor vanished at r, its square matrix would have a nonzero r-eigenvector in H. The assumed full eigenspace is $\\mathbb Cx$, which intersects H trivially. This contradiction proves the second factor is nonzero at r, so the root has multiplicity one.

</details>

<a id="section-440-exercise-22-9"></a>
### Exercise 22.9 {#section-442-exercise-22-9}
<a id="nonnegative-matrices-perron-frobenius-ex-9"></a>

For irreducible $A\\geq0$ of size $n\\geq2$, prove $(I+A)^{n-1}>0$ using directed paths. Explain why the same proof cannot replace $I+A$ by A.

<details>
<summary>Hint 1</summary>

Remove repeated-vertex cycles from a path between distinct vertices.

</details>

<details>
<summary>Hint 2</summary>

Use diagonal loops supplied by I to pad each short path to a common length.

</details>

<details>
<summary>Solution</summary>

Strong connectivity gives a path for every distinct ordered pair. Removing cycles gives one of length at most n−1. Every edge has positive weight in I+A, and each vertex also has a positive loop. Repeating loops pads the path to exactly n−1 steps, so the corresponding product contributes positively to the desired matrix entry. For equal endpoints, use only loops. Nonnegative summands cannot cancel, hence every entry is positive. The matrix A may lack those loops; in a directed cycle, path lengths have residue constraints that cannot be padded arbitrarily. The swap matrix already disproves the claimed replacement.

</details>

<a id="section-466-exercise-22-10"></a>
### Exercise 22.10 {#section-468-exercise-22-10}
<a id="nonnegative-matrices-perron-frobenius-ex-10"></a>

Suppose B is positive, $x>0$, $Bx=\\beta x$, and its $\\beta$-eigenspace is one-dimensional. If $A\\geq0$ commutes with B and every row of A has a positive entry, prove $Ax=rx$ for some r>0. Apply this to the auxiliary matrix in the irreducible theorem.

<details>
<summary>Hint 1</summary>

Use commutation to test whether Ax lies in the same B eigenspace.

</details>

<details>
<summary>Hint 2</summary>

Nonzero rows and positivity of x make every coordinate of Ax positive.

</details>

<details>
<summary>Solution</summary>

Commutation gives $B(Ax)=A(Bx)=\\beta Ax$. Since each row of A has a positive entry and x is positive, Ax is positive and in particular nonzero. Eigenspace uniqueness implies $Ax=rx$, and positivity of the two vectors forces r>0. For an irreducible matrix of size at least two, no row can be zero because that would prevent paths into its vertex. The matrix $B=(I+A)^{n-1}$ is positive and commutes with A because it is a polynomial in A. All hypotheses therefore hold.

</details>

<a id="section-492-exercise-22-11"></a>
### Exercise 22.11 {#section-494-exercise-22-11}
<a id="nonnegative-matrices-perron-frobenius-ex-11"></a>

Let $A\\geq0$ have positive Perron vector x with eigenvalue r>0, and suppose $A^m>0$. Prove that an eigenvalue $\\lambda$ with $|\\lambda|=r$ must equal r. Explain why the equation $\\lambda^m=r^m$ alone is insufficient.

<details>
<summary>Hint 1</summary>

Apply the positive theorem to Aᵐ and the same eigenvector z.

</details>

<details>
<summary>Hint 2</summary>

Use the one-dimensional eigenspace of Aᵐ, not only its Perron eigenvalue.

</details>

<details>
<summary>Solution</summary>

For $Az=\\lambda z$, $A^mz=\\lambda^mz$. Since $A^mx=r^mx$, the positive theorem identifies rᵐ as its unique peripheral eigenvalue and gives eigenspace $\\mathbb Cx$. Thus $\\lambda^m=r^m$ and z=cx. Applying A to z then yields both λz and rz, forcing λ=r. The scalar equation alone permits nontrivial mth roots of unity times r, such as −r when m is even. Eigenspace uniqueness is the step excluding those possibilities.

</details>

<a id="section-518-exercise-22-12"></a>
### Exercise 22.12 {#section-520-exercise-22-12}
<a id="nonnegative-matrices-perron-frobenius-ex-12"></a>

For the three-state cycle $C e_1=e_2$, $C e_2=e_3$, $C e_3=e_1$, determine irreducibility, primitivity, the stationary probability vector, and whether $C^ke_1$ converges.

<details>
<summary>Hint 1</summary>

Follow the deterministic orbit of each basis vector.

</details>

<details>
<summary>Hint 2</summary>

Use C³=I and inspect whether any power can have more than one positive entry in each column.

</details>

<details>
<summary>Solution</summary>

The graph is a directed cycle, so every vertex reaches every other and C is irreducible. Every power is a permutation matrix with exactly one nonzero entry per column, hence none is positive and C is not primitive. The stationary equations force all three coordinates equal; normalization gives $\\pi=(1/3,1/3,1/3)^{\\mathsf T}$. The orbit of e₁ repeats e₁,e₂,e₃ and has no limit. This is compatible with uniqueness of a stationary distribution: uniqueness of a fixed probability vector does not imply convergence from every initial vector.

</details>

<a id="section-544-exercise-22-13"></a>
### Exercise 22.13 {#section-546-exercise-22-13}
<a id="nonnegative-matrices-perron-frobenius-ex-13"></a>

Give separate nonnegative reducible examples showing: a Perron eigenvector need not be positive; geometric simplicity need not imply algebraic simplicity; and a nonzero matrix can have spectral radius zero. Verify each claim.

<details>
<summary>Hint 1</summary>

Use one diagonal matrix, one upper triangular repeated-root matrix, and one strictly upper triangular matrix.

</details>

<details>
<summary>Hint 2</summary>

Compute each kernel at the spectral radius and compare with the characteristic polynomial.

</details>

<details>
<summary>Solution</summary>

For diag(2,1), the radius is two and its eigenspace is span(e₁), containing no strictly positive vector. For $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, the eigenspace at one is span(e₁), but the characteristic polynomial is $(t-1)^2$; thus geometric simplicity does not give algebraic simplicity. For $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, the matrix is nonzero but its square is zero and its characteristic polynomial is $t^2$, so its radius is zero. All are reducible because the second state cannot be reached from the first in our column-arrow convention.

</details>

<a id="section-570-exercise-22-14"></a>
### Exercise 22.14 {#section-572-exercise-22-14}
<a id="nonnegative-matrices-perron-frobenius-ex-14"></a>

Let $0\\leq A<B$ mean $A\\leq B$ entrywise with at least one strict entry. If both matrices are irreducible of size at least two, prove $\\rho(A)<\\rho(B)$. Identify the exact place strict positivity of the Perron vectors is used.

<details>
<summary>Hint 1</summary>

Pair a right Perron vector of A with a left Perron vector of B.

</details>

<details>
<summary>Hint 2</summary>

Expand the scalar involving B−A as a sum over entries.

</details>

<details>
<summary>Solution</summary>

Take $Ax=rx$, $x>0$, and $u^{\\mathsf T}B=s u^{\\mathsf T}$, $u>0$. Then $(s-r)u^{\\mathsf T}x=u^{\\mathsf T}(B-A)x$. Every summand $u_i(b_{ij}-a_{ij})x_j$ is nonnegative, and at least one is strictly positive because all uᵢ,xⱼ are positive. Thus the right side is positive. The denominator $u^{\\mathsf T}x$ is also positive, so s>r. Without positivity, a strict entry increase could be multiplied by a zero coordinate and fail to affect this pairing.

</details>

<a id="section-596-exercise-22-15"></a>
### Exercise 22.15 {#section-598-exercise-22-15}
<a id="nonnegative-matrices-perron-frobenius-ex-15"></a>

For $P=\\begin{pmatrix}4/5&3/10\\\\1/5&7/10\\end{pmatrix}$, find its stationary probability column and prove convergence from every probability column by an explicit two-dimensional calculation.

<details>
<summary>Hint 1</summary>

Use the first stationary equation together with total mass one.

</details>

<details>
<summary>Hint 2</summary>

Every difference of probability columns is a multiple of (1,−1); calculate its image.

</details>

<details>
<summary>Solution</summary>

Stationarity gives $\\pi_1/5=3\\pi_2/10$, hence $2\\pi_1=3\\pi_2$. With sum one this gives $\\pi=(3/5,2/5)^{\\mathsf T}$. Direct multiplication shows $P(1,-1)^{\\mathsf T}=(1/2)(1,-1)^{\\mathsf T}$. Every p−π has coordinate sum zero and lies on that line, so $P^kp=\\pi+2^{-k}(p-\\pi)$. The final term tends to zero, proving convergence for every probability column. Positivity also places P under the primitive theorem.

</details>

<a id="section-622-exercise-22-16"></a>
### Exercise 22.16 {#section-624-exercise-22-16}
<a id="nonnegative-matrices-perron-frobenius-ex-16"></a>

Let P be column-stochastic and $P^m=Q>0$, with $\\delta=\\min q_{ij}$ and $\\varepsilon=n\\delta<1$. Prove $\\|Qv\\|_1\\leq(1-\\varepsilon)\\|v\\|_1$ for every zero-sum real vector v. Treat $\\varepsilon=1$ separately.

<details>
<summary>Hint 1</summary>

Subtract the uniform column-stochastic matrix multiplied by ε.

</details>

<details>
<summary>Hint 2</summary>

The remainder is a nonnegative column-stochastic matrix after rescaling, and the uniform part kills zero-sum vectors.

</details>

<details>
<summary>Solution</summary>

Let $J=\\mathbf1\\mathbf1^{\\mathsf T}/n$. Every entry of $Q-\\varepsilon J$ is $q_{ij}-\\delta\\geq0$, and every column sums to 1−ε. Hence $R=(Q-\\varepsilon J)/(1-\\varepsilon)$ is column-stochastic. Such a matrix satisfies $\\|Rv\\|_1\\leq\\sum_{i,j}r_{ij}|v_j|=\\|v\\|_1$. Since Jv=0 for a zero-sum vector, $Qv=(1-\\varepsilon)Rv$, proving the bound. If ε=1, each column has n entries at least 1/n summing to one, so every entry is 1/n. Thus Q=J and Qv=0.

</details>

<a id="section-648-exercise-22-17"></a>
### Exercise 22.17 {#section-650-exercise-22-17}
<a id="nonnegative-matrices-perron-frobenius-ex-17"></a>

Let A be irreducible and nonnegative of size at least two, and suppose $Av=t v$ for a nonzero $v\\geq0$. Prove $v>0$ and $t=\\rho(A)$.

<details>
<summary>Hint 1</summary>

A positive coordinate of v first shows t is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

Apply the positive auxiliary polynomial in A to v, then pair the original equation with a positive left Perron vector.

</details>

<details>
<summary>Solution</summary>

Choose i with vᵢ>0. Since Av≥0, the equation gives tvᵢ≥0 and t≥0. Let $B=(I+A)^{n-1}>0$. Then $Bv=(1+t)^{n-1}v$. The left side is positive and the scalar on the right is positive, so v>0. If w is a positive left Perron vector with root r, pairing Av=tv gives $t w^{\\mathsf T}v=r w^{\\mathsf T}v$. The pairing is positive, hence t=r. Perron eigenspace uniqueness further makes v a positive multiple of the normalized Perron vector.

</details>

<a id="section-674-exercise-22-18"></a>
### Exercise 22.18 {#section-676-exercise-22-18}
<a id="nonnegative-matrices-perron-frobenius-ex-18"></a>

Let A be primitive, with positive Perron vectors x,w normalized by $w^{\\mathsf T}x=1$. Define $D=\\operatorname{diag}(x_1,\\ldots,x_n)$ and $R=r^{-1}D^{-1}AD$. Prove that R is row-stochastic and that $r^{-k}A^k\\to xw^{\\mathsf T}$. Use the column-stochastic convergence theorem by transposition rather than a Jordan form.

<details>
<summary>Hint 1</summary>

Apply R to the all-ones column and identify a stationary probability vector for Rᵀ.

</details>

<details>
<summary>Hint 2</summary>

Use D x-coordinate conversion and the normalized vector whose entries are wᵢxᵢ to translate the limiting matrix back.

</details>

<details>
<summary>Solution</summary>

All entries of D are positive, and $R\\mathbf1=r^{-1}D^{-1}Ax=\\mathbf1$, so R is nonnegative and row-stochastic. It is primitive because $R^m=r^{-m}D^{-1}A^mD>0$ for a positive power of A. Put $\\eta=Dw$. Its entries are positive and sum to $w^{\\mathsf T}x=1$. Also $\\eta^{\\mathsf T}R=w^{\\mathsf T}D(r^{-1}D^{-1}AD)=r^{-1}w^{\\mathsf T}AD=w^{\\mathsf T}D=\\eta^{\\mathsf T}$. Hence η is the stationary probability column of Rᵀ. Applying the column-stochastic theorem to each standard probability column shows $(R^{\\mathsf T})^k\\to\\eta\\mathbf1^{\\mathsf T}$, so $R^k\\to\\mathbf1\\eta^{\\mathsf T}$. Finally $r^{-k}A^k=DR^kD^{-1}\\to D\\mathbf1\\eta^{\\mathsf T}D^{-1}=xw^{\\mathsf T}$. This uses primitivity at the convergence step; the periodic counterexamples show why it cannot be omitted.

</details>

<a id="section-700-sources"></a>

## Sources {#section-702-sources}

Mike Boyle's author-hosted [Notes on the Perron–Frobenius Theory of Nonnegative Matrices](https://www.math.umd.edu/~mboyle/papers/pfnotes.pdf), especially the primitive and irreducible theorems and the primitive-power limit, is complementary primary reading. The proofs and worked examples here are original exposition; the existence proof uses compactness and maximal subsolutions instead of the fixed-point route in those notes. The periodic example explains why the limit requires a stronger hypothesis than irreducibility.

<a id="section-704-summary"></a>
`;export{e as default};