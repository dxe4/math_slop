# Schur polynomial prime divisors

*Hard · [Original Putnam-style training](index.md)*

Let $P\in\mathbb Z[x]$ be nonconstant. Prove infinitely many distinct primes divide nonzero values $P(n)$ as $n$ ranges over positive integers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Assume all such prime divisors lie in a finite set and fix an input $m$ with $P(m)\ne0$.

</details>

<details>
<summary>Hint 2</summary>

Choose a progression on which $P(n)/P(m)$ is congruent to one modulo every listed prime.

</details>

<details>
<summary>Model proof</summary>

Because $a^2Q>0$ and $P$ is nonconstant, $|P(m+a^2Qt)/a|$ is unbounded as $t$ grows. Choose $t$ making its absolute value $>1$; this quotient has a prime divisor outside the list because it is coprime to every $p_i$. That prime divides the nonzero value $P(n)$, contradiction.

1. Assume the prime divisors form a finite list $p_1,\ldots,p_k$. Choose positive $m$ with $a=P(m)\ne0$, and let $Q=p_1\cdots p_k$ (or $Q=1$ if the list is empty).
2. For $n=m+a^2Qt$ with positive integer $t$, the increment is divisible by $aQ$, so polynomial congruence gives $P(n)\equiv a\pmod{aQ}$. Thus $P(n)/a$ is an integer congruent to $1$ modulo every $p_i$.
3. Because $a^2Q>0$ and $P$ is nonconstant, $|P(m+a^2Qt)/a|$ is unbounded as $t$ grows. Choose $t$ making its absolute value $>1$; this quotient has a prime divisor outside the list because it is coprime to every $p_i$. That prime divides the nonzero value $P(n)$, contradiction.

**Self-assessment rubric**

- Assume a finite prime-divisor list and choose a nonzero polynomial value.
- Construct a positive unbounded input progression whose value quotient is one modulo every listed prime.
- Use unboundedness to force a prime divisor outside the list.

</details>
