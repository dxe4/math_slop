var e=`---
id: deep-dive-functional-analysis-hilbert-space-projection
title: "Hilbert space and projection"
license: CC BY-SA 4.0
---

# Hilbert space and projection

Least squares asks for the permitted vector closest to the data. In a finite-dimensional Euclidean space, perpendicular projection onto a line gives the answer. In an infinite-dimensional space, the word “closest” first requires an existence argument: an infimum distance need not be attained merely because better and better approximations exist.

This **Years 2–3 (L3)** article assumes [Inner Products and Orthogonal Decomposition](/books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition/) and the distinction between Cauchy sequences and complete spaces developed in [Normed spaces and completeness](/articles/functional-analysis-normed-spaces-completeness/). We work over the real numbers throughout. The goal is to prove the closed-subspace projection theorem and see where its assumptions enter. The [Hilbert Spaces chapter](/books/functional-analysis/hilbert-spaces/) gives the broader real and complex treatment.

## The setting: a complete inner-product space

An inner product $\\langle u,v\\rangle$ measures the interaction of two vectors. Over the real numbers it is bilinear, symmetric and positive definite. It induces the norm $\\|u\\|=\\sqrt{\\langle u,u\\rangle}$. Two vectors are **orthogonal** when their inner product is zero.

A **Hilbert space** is an inner-product space complete in this norm. Let $M$ be a closed linear subspace of a Hilbert space $H$. Closedness means that a limit in $H$ of a sequence in $M$ still belongs to $M$. Linearity means that sums and scalar multiples remain in $M$; in particular, midpoints belong to $M$.

For a given $x\\in H$, we want $p\\in M$ with the smallest possible value of $\\|x-p\\|$. The theorem says that such a point exists, is unique, and is characterised by

$$\\langle x-p,v\\rangle=0\\quad\\text{for every }v\\in M.$$

The error is therefore perpendicular to every allowed direction, not just to the single point $p$.

## Why a minimising sequence must converge

Put $d=\\inf_{m\\in M}\\|x-m\\|$. This is a finite nonnegative number because $0\\in M$. By the definition of infimum, choose $m_n\\in M$ with

$$\\|x-m_n\\|^2\\le d^2+1/n.$$

Such choices approach the best squared distance without presupposing that a best point exists. The parallelogram identity gives

$$\\|m_n-m_k\\|^2=2\\|x-m_n\\|^2+2\\|x-m_k\\|^2-4\\left\\|x-\\frac{m_n+m_k}{2}\\right\\|^2.$$

The midpoint belongs to $M$, so its distance from $x$ is at least $d$. Substitution yields

$$\\|m_n-m_k\\|^2\\le\\frac2n+\\frac2k.$$

Thus $(m_n)$ is Cauchy. Completeness of $H$ supplies a limit $p\\in H$, and closedness of $M$ supplies $p\\in M$. Norm continuity then gives $\\|x-p\\|=d$. Existence has now been proved, rather than read off from a diagram.

This calculation pinpoints the roles of the hypotheses. The inner product gives the parallelogram identity. The subspace contains the midpoint. Completeness produces a limit, and closedness keeps it inside the permitted set. None of these jobs is performed by the word “bounded”.

## Why the error is perpendicular

For any $v\\in M$ and real $t$, the competitor $p+tv$ also lies in $M$. Minimality gives

$$d^2\\le\\|x-p-tv\\|^2=d^2-2t\\langle x-p,v\\rangle+t^2\\|v\\|^2.$$

If $v\\ne0$ and $\\langle x-p,v\\rangle$ were nonzero, choose $t=\\langle x-p,v\\rangle/\\|v\\|^2$. The right side would be $d^2-\\langle x-p,v\\rangle^2/\\|v\\|^2<d^2$, a contradiction. The inner product must therefore vanish. For $v=0$ it vanishes automatically.

Conversely, if $p\\in M$ has this orthogonality property, write any other $m\\in M$ as $m=p+v$. Expanding its squared error gives

$$\\|x-m\\|^2=\\|x-p\\|^2+\\|v\\|^2.$$

The cross term is zero by orthogonality. Hence $p$ is a nearest point, and equality of distances is possible only for $v=0$. This proves uniqueness and the stated characterisation. The same identity separates total squared error into minimum squared error and extra squared displacement within the subspace.

## Worked example: project onto a line

In $\\mathbb R^3$ with its usual dot product, let $u=(1,1,0)$ and $M=\\{tu:t\\in\\mathbb R\\}$. Project $x=(2,0,3)$ onto $M$.

Write $p=tu$. Orthogonality to the spanning vector requires

$$0=\\langle x-tu,u\\rangle=\\langle x,u\\rangle-t\\langle u,u\\rangle=2-2t.$$

Thus $t=1$, $p=(1,1,0)$, and the residual is $r=x-p=(1,-1,3)$. Its dot product with $u$ is $1-1=0$, as required, and its squared norm is $1+1+9=11$.

For any other coefficient $s$, the error identity gives

$$\\|x-su\\|^2=11+2(s-1)^2.$$

This explicitly verifies both the minimum value and uniqueness. It also explains why merely choosing the nearest coordinate values separately would be wrong: the first two coordinates of an allowed vector must share one coefficient.

## What can fail without the hypotheses?

Closedness is not an automatic property of infinite-dimensional subspaces. In the Hilbert space $\\ell^2$, let $M=c_{00}$, the finitely supported sequences, and let $x_j=2^{-j}$. This vector has finite square sum. Its finite truncations belong to $M$ and have squared tail error

$$\\sum_{j>n}4^{-j}=\\frac{4^{-n}}3\\longrightarrow0.$$

The best possible distance is zero, but no element of $M$ attains it: distance zero would require equality with $x$, which has infinitely many nonzero coordinates. Here $M$ is not closed. The book's [Normed and Banach Spaces chapter](/books/functional-analysis/normed-banach-spaces/) constructs the sequence spaces used in this example.

A closed set that is not a linear subspace also lies outside the stated theorem. Some broader projection results exist, but perpendicularity to every subspace direction and the linear projection framework depend on the structure we assumed. The next exercise gives a particularly small failure of uniqueness.

## Exercises

### Exercise 1
<a id="deep-dive-functional-analysis-hilbert-space-projection-ex-1"></a>
Project $x=(4,1)$ onto the line spanned by $u=(1,2)$ in the Euclidean plane. Verify orthogonality and compute the minimum squared distance.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Write the projected point as $tu$ and impose orthogonality to $u$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The coefficient is determined by $\\langle x,u\\rangle-t\\|u\\|^2=0$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
We have $\\langle x,u\\rangle=6$ and $\\|u\\|^2=5$, so $t=6/5$ and $p=(6/5,12/5)$. The residual is $(14/5,-7/5)$, whose dot product with $(1,2)$ is zero. Its squared norm is $(196+49)/25=49/5$. For any other point $p+v$ on the line, the error identity adds $\\|v\\|^2$, so this is the unique minimum.
</details>

### Exercise 2
<a id="deep-dive-functional-analysis-hilbert-space-projection-ex-2"></a>
In the real line, find the nearest points to zero in the closed set $S=\\{-1,1\\}$. Why does this not contradict the theorem, and which step of its existence argument would not apply to $S$?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare the distances to the two available points.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check whether the midpoint of the two points is an allowed competitor.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Both points are distance one from zero, so there are two nearest points. The theorem assumes a closed linear subspace, but $S$ is not linear: it does not contain zero or the midpoint of its two points. The minimising-sequence argument used the midpoint as an element of the permitted set to bound its distance below by the infimum. That step is unavailable for this set, and uniqueness is not asserted by the theorem.
</details>

## Continue into the book

Projection combines existence from completeness and closedness with geometry from the inner product. Orthogonality then makes optimality and uniqueness exact algebraic statements. Continue with [Hilbert Spaces](/books/functional-analysis/hilbert-spaces/) and [Orthonormal Bases and Riesz Representation](/books/functional-analysis/orthonormal-bases-riesz/). The earlier [Spectra, Tensors, and the Limits of Diagonalization](/articles/spectral-tensor-structure/) is an optional later companion, with its own stronger preparation.
`;export{e as default};