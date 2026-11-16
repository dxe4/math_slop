# Classify integer-valued rational polynomials by finite differences

*Hard · [Number theory](index.md)*

For P∈Q\[X\] of degree at most d, prove P(n) is an integer for every n≥0 iff $P(X)=\sum_{k=0}^dc_k\binom Xk$ with all c\_k integers. Prove c\_k=ΔᵏP(0), where ΔP(X)=P(X+1)−P(X), and deduce integer values also at every negative integer.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The binomial polynomials have distinct degrees and Δbinom(X,k)=binom(X,k−1).

</details>

<details>
<summary>Hint 2</summary>

Evaluate repeated differences at zero to isolate each coefficient, then use the negative-upper-index binomial identity.

</details>

<details>
<summary>Model proof</summary>

Finite differences supply a coefficient certificate for integer values that ordinary monomial coefficients do not provide.

1. The polynomials binom(X,k)=X(X−1)⋯(X−k+1)/k!, 0≤k≤d, have distinct degrees and nonzero leading coefficients, so they form a basis of the rational polynomial space of degree at most d. Pascal identity gives Δbinom(X,k)=binom(X,k−1), with the constant case differentiating to zero.
2. In the unique expansion P=Σc\_k binom(X,k), applying Δʲ and evaluating at zero leaves only c\_j: binom(0,r) is zero for positive r and one for r=0. Thus c\_j=ΔʲP(0).
3. If all nonnegative values of P are integers, each finite difference at zero is an integer combination of P(0),…,P(j), so each c\_j is integer. Conversely, integer c\_j give integer values because binom(n,k) is integer for n≥0, including zero when k&gt;n.
4. For m≥1, binom(−m,k)=(−1)ᵏbinom(m+k−1,k), directly from its product formula. These are integers, so the same expansion gives integer values at every negative argument as well. The constant degree-zero case is included.

**Self-assessment rubric**

- Proves the binomial basis and its finite-difference lowering identity.
- Correctly isolates c\_j by Δʲ followed by evaluation at zero.
- Proves both directions between integer nonnegative values and integer Newton coefficients.
- Derives the negative-index identity and handles degree zero.

</details>
