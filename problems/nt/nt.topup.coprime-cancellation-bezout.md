# Prove cancellation with the missing hypothesis supplied

*Hard · [Number theory](index.md)*

Assume $\gcd(a,m)=1$ and a divides mb. Prove a divides b using a Bezout identity. Then exhibit a noncoprime example where a divides mb but does not divide b.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Multiply an integer identity au+mv=1 by b.

</details>

<details>
<summary>Hint 2</summary>

In the counterexample let a and m share a nontrivial factor.

</details>

<details>
<summary>Model proof</summary>

Coprimality supplies a valid integer cancellation argument.

1. Bezout gives integers u,v with $au+mv=1$. Multiplying by b gives $b=aub+mbv$.
2. Both terms on the right are divisible by a, using the given divisibility of mb, so a divides b.
3. Without coprimality, a=6,m=3,b=2 gives mb=6 divisible by six but b not divisible by six.

**Self-assessment rubric**

- Use the coprimality hypothesis to introduce integer coefficients.
- Multiply by b and apply divisibility to both terms.
- Verify a noncoprime counterexample to cancellation.

</details>
