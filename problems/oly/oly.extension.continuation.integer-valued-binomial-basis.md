# Characterize integer-valued rational polynomials

*Hard · [Original olympiad-style problems](index.md)*

Prove a rational polynomial of degree at most d takes integer values at every integer if and only if it has form $\sum_{k=0}^d c_k\binom{x}{k}$ with integer coefficients $c_k$. Prove uniqueness and include negative inputs.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use forward differences; the difference of the kth binomial polynomial is the preceding one.

</details>

<details>
<summary>Hint 2</summary>

For negative integers, use $\binom{-n}{k}=(-1)^k\binom{n+k-1}{k}$.

</details>

<details>
<summary>Model proof</summary>

Use a triangular polynomial basis whose integer values persist at negative arguments.

1. The binomial polynomials have degrees zero through d and nonzero leading coefficients, so they form a basis for rational polynomials of that degree range.
2. Their forward-difference identity follows by the usual binomial identity as a polynomial relation. Repeated differencing and evaluation at zero make their coefficients exactly $c_k=\Delta^kP(0)$, after higher terms vanish there.
3. If P is integer-valued, each such finite difference is an integer combination of integer values, hence all c coefficients are integers.
4. Conversely, binomial values are integers for nonnegative inputs by counting, and for negative inputs by the identity in the second hint. Integer linear combinations are therefore integer-valued on all of Z.
5. The basis or the same difference evaluations establish uniqueness. Rational coefficient polynomials need not have ordinary monomial coefficients integral; the binomial basis captures the exact weaker property.

**Self-assessment rubric**

- Establish the basis and its forward-difference identity.
- Recover integer coefficients from actual finite differences.
- Prove integrality for negative as well as nonnegative inputs.
- Show the representation is unique.

</details>
