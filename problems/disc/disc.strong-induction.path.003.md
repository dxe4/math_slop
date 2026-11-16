# Apply the hypothesis to both factors

*Medium · [Discrete mathematics](index.md)*

To prove every integer $n\geq 2$ is a product of primes, assume the claim for $2\leq m\leq k$, where $k\geq 2$. If $k+1=ab$ with integers $a,b\geq 2$, what permits using the hypothesis for both? Select the mathematically correct statement from the four alternatives.

**Options**

1. Both factors are between $2$ and k, since each is at most $(k+1)/2<k+1$.
2. One factor equals $k+1$.
3. The hypothesis includes $k+1$.
4. Every factor of a composite integer is already prime, so no induction hypothesis is needed.

```answer
{"answer":{"kind":"multiple_choice","expected":"both_factors_are_bet","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["both_factors_are_bet","one_factor_equals_k","the_hypothesis_inclu","every_factor_of_a"]}
```

<details>
<summary>Hint 1</summary>

The other factor is at least $2$.

</details>

<details>
<summary>Hint 2</summary>

An integer smaller than $k+1$ is at most k.

</details>

<details>
<summary>Worked solution</summary>

Strong induction permits all earlier cases in the proven domain. Lookback dependencies determine the needed initial block.

1. $a\leq (k+1)/2<k+1$, and the same holds for b.
2. Thus $2\leq a,b\leq k$, so both factor cases lie within the strong-induction hypothesis.

</details>
