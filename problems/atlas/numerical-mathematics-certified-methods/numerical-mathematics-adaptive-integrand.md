# An integrand hidden from finite samples

*Difficulty 4 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 8 of 16*

A deterministic quadrature run samples a continuous integrand at finitely many distinct points `x_1,...,x_n` in `[a,b]` and returns zero when every sample is zero. Construct a continuous nonnegative function that vanishes at every sampled point but has positive integral. Explain the limit this places on estimator guarantees.

<details>
<summary>Hint 1</summary>

Use a product of squared factors

</details>

<details>
<summary>Hint 2</summary>

A nonzero continuous nonnegative function is positive on some interval

</details>

<details>
<summary>Worked solution</summary>

Define `g(x)=product_(i=1)^n (x-x_i)^2`. It is a polynomial, hence continuous and nonnegative, and every sampled value is zero because one factor vanishes. The polynomial is not identically zero: away from the finite sample set all factors are positive. Choose any point not among the samples; continuity then gives a small surrounding interval on which g remains positive. Therefore `integral_a^b g(x) dx>0`, even though the run observes only zeros and returns zero. Multiplying g by any positive constant makes the missed integral arbitrarily large relative to a fixed absolute tolerance. Thus no rule using only those finite values can guarantee accuracy for every continuous integrand. Rigorous guarantees need additional structure such as derivative bounds, a restricted function class, known singular locations, or verified adaptive enclosures.

**Answer.** `g(x)=product (x-x_i)^2` is continuous, nonnegative, zero at all samples, and has positive integral; finite samples alone cannot guarantee all continuous integrands.

</details>

*Tags: numerical-integration, adaptivity, counterexample*
