# Wilson prime characterization

*Hard · [Original Putnam-style training](index.md)*

For integer $n>1$, prove $(n-1)!\equiv-1\pmod n$ iff $n$ is prime.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

For prime $n$, pair each nonzero residue with its multiplicative inverse.

</details>

<details>
<summary>Hint 2</summary>

For composite $n$, exhibit a nontrivial common divisor of the factorial and $n$.

</details>

<details>
<summary>Model proof</summary>

A residue congruent to $-1$ modulo $n$ is coprime to $n$, contradicting that gcd. Thus the congruence characterizes primes.

1. If $n=p$ is prime, every nonzero residue except its self-inverses pairs with a distinct inverse. The self-inverses solve $x^2=1$ in the field $\mathbb F_p$, hence are $1$ and $-1$ (the $p=2$ case agrees). Their product gives $(p-1)!\equiv-1$.
2. If $n$ is composite, choose a proper divisor $d$ with $1<d<n$. Then $d$ occurs among the factorial factors, so $\gcd((n-1)!,n)>1$.
3. A residue congruent to $-1$ modulo $n$ is coprime to $n$, contradicting that gcd. Thus the congruence characterizes primes.

**Self-assessment rubric**

- Pair units modulo a prime and identify the self-inverse residues.
- Compute the product modulo a prime, including p=2.
- Use a proper divisor of composite n to rule out residue −1.

</details>
