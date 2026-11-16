# Sieve multiples of three prime squares

*Hard · [Computational arithmetic problems](index.md)*

How many integers $n$ with $1\leq n\leq10000$ are divisible by none of $4,9,25$? This condition does not exclude squares of other primes.

```answer
{"answer":{"kind":"integer","expected":"6399","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Apply inclusion-exclusion to the three forbidden divisor sets.

</details>

<details>
<summary>Hint 2</summary>

The pairwise and triple intersections use the corresponding least common multiples.

</details>

<details>
<summary>Worked solution</summary>

Explicit prime-square exclusions are weaker than squarefreeness and have their own exact sieve.

1. The single-set counts are $2500,1111,400$; the intersections for lcms $36,100,225$ have counts $277,100,44$.
2. The triple intersection has lcm $900$ and count $11$. Thus the forbidden union has size $2500+1111+400-277-100-44+11=3601$.
3. The surviving count is $10000-3601=6399$.

</details>
