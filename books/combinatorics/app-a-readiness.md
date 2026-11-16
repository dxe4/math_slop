# Appendix A — Just-in-time mathematics {#sec-comb-readiness}

Use this appendix as a repair kit, not as a prerequisite course.

## Algebra and finite sums

Factor before cancelling and record excluded zero denominators. Geometric sums
satisfy

$$
1+r+\cdots+r^n=\frac{1-r^{n+1}}{1-r}\quad(r\ne1).
$$

Telescoping sums cancel adjacent terms. Reindexing changes labels, not terms:
$\sum_{k=0}^{n}a_k=\sum_{j=1}^{n+1}a_{j-1}$. In a double sum over a finite
set, the order may always be exchanged; for infinite series, convergence needs
attention.

## Logarithms and growth

The logarithm converts products to sums and powers to multiples. It is useful
for factorial-sized values and probabilities too small to represent directly.
Growth notation compares functions as $n$ increases: $f=O(g)$ means
$|f(n)|\le C|g(n)|$ eventually; $f=\Theta(g)$ adds a matching lower bound;
$f\sim g$ means $f(n)/g(n)\to1$. These claims are not interchangeable.

## Probability essentials {#probability-essentials}

Conditional probability is
$\Pr(A\mid B)=\Pr(A\cap B)/\Pr(B)$ when $\Pr(B)>0$. Independence means
$\Pr(A\cap B)=\Pr(A)\Pr(B)$, not merely that the events look unrelated.
Variance is $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E X)^2]$.
Markov's inequality bounds a nonnegative variable; Chebyshev uses its variance.
The probabilistic method needs only one principle: if the probability of
failure is less than one, some successful object exists.

## Linear algebra essentials

An adjacency matrix $A$ has $A_{ij}=1$ when vertices $i,j$ are adjacent. The
entry $(A^k)_{ij}$ counts length-$k$ walks. A determinant is a signed sum over
permutations and detects invertibility. Row reduction preserves the solution
set of a linear system. The field $\mathbb F_p$ uses arithmetic modulo a
prime. A field of prime-power order $p^m$ generally needs an extension-field
representation, such as polynomials modulo an irreducible polynomial; ordinary
integer arithmetic modulo $p^m$ is not a field when $m>1$.

## Complex numbers and eigenvalues

Analytic generating functions use complex numbers mainly to locate
singularities around a circle. A conjugate pair has equal modulus and may
create oscillating real coefficients. Spectral graph theory uses the fact that
a real symmetric matrix has real eigenvalues and an orthonormal eigenbasis.
Numerical eigenvalues are approximations: a value printed near zero needs a
tolerance or an exact rank argument before it is treated as zero.

## Proof audit

Before accepting an enumeration, answer five questions:

1. What exactly is one object, including labels and symmetries?
2. Does every construction produce a valid object?
3. Does every valid object appear?
4. How many times does each object appear?
5. Are boundary cases and impossible parameter values represented correctly?

For an algorithm, also distinguish termination, correctness, and running time.
For randomized experiments, report the generator, seed policy, number of
replications, and uncertainty. Passing a million finite tests does not prove a
claim quantified over every $n$.

## Working with definitions

Write a definition's quantifiers before manipulating its symbols. To negate
“for every vertex there exists a neighbor,” write “there exists a vertex with
no neighbor.” To disprove a proposed converse, search the smallest admissible
size first. When a theorem has several hypotheses, deliberately remove one and
look for a counterexample; this turns memorization into structural knowledge.
