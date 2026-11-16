# Compute a two-dimensional gcd total through a totient sieve

*Hard · [Computational arithmetic problems](index.md)*

Compute $\sum_{a=1}^{20}\sum_{b=1}^{20}\gcd(a,b)$. You may use $\sum_{d\mid m}\varphi(d)=m$.

```answer
{"answer":{"kind":"integer","expected":"880","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Expand each gcd using the supplied divisor identity and interchange all finite sums.

</details>

<details>
<summary>Hint 2</summary>

The number of pairs divisible by one fixed $d$ is a square of a quotient; group its small and large divisor ranges.

</details>

<details>
<summary>Worked solution</summary>

A divisor transform reduces a quadratic gcd loop to a weighted totient sieve.

1. The identity gives $\gcd(a,b)=\sum_{d\mid a,\,d\mid b}\varphi(d)$, hence the total is $\sum_{d=1}^{20}\varphi(d)\lfloor20/d\rfloor^2$.
2. For $d=1,\ldots,10$, the contributions are $400,100,72,50,64,18,24,16,24,16$, summing to $784$.
3. The totients for $d=11,\ldots,20$ are $10,4,12,6,8,8,16,6,18,8$, whose sum is $96$; each corresponding quotient is $1$.
4. The exact grid sum is therefore $784+96=880$.

</details>
