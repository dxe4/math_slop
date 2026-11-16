# Compose divisibility witnesses

*Easy · [Foundations bridge](index.md)*

For integers a,b,c, assume $b=ak$ and $c=b$ℓ for integers k and ℓ. Which step proves that a divides c? Select the mathematically correct statement from the four alternatives.

**Options**

1. $c=a(k\ell )$, and kℓ is an integer.
2. $c=a+k+\ell$.
3. $a=c(k\ell )$.
4. $c=a(k+\ell )$, and $k+\ell$ is an integer.

```answer
{"answer":{"kind":"multiple_choice","expected":"multiply_witnesses","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["multiply_witnesses","add_terms","invert_divisibility","add_witnesses"]}
```

<details>
<summary>Hint 1</summary>

Substitute the expression for b into the expression for c.

</details>

<details>
<summary>Hint 2</summary>

To prove a divides c, write c as a times an integer.

</details>

<details>
<summary>Worked solution</summary>

An existential witness can be built from the witnesses supplied by the assumptions.

1. Substituting $b=ak$ into $c=b$ℓ gives $c=(ak) \ell =a(k\ell )$.
2. The product kℓ is an integer, so it witnesses a divides c. Select the statement “$c=a(k\ell )$, and kℓ is an integer.”.

</details>
