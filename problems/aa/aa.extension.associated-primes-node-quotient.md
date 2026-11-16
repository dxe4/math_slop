# Compute all associated primes through explicit annihilators

*Medium · [Abstract algebra problems](index.md)*

For $R=k[x,y]$ and M=R/(xy), find the number of associated prime ideals of M. An associated prime means the annihilator of one nonzero module element; identify the ideals and prove the list complete.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested module invariant only; no homological or Noetherian theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The classes of x and y have the opposite principal prime as annihilator.

</details>

<details>
<summary>Hint 2</summary>

Use divisibility by the two prime factors of xy to classify every colon ideal(xy):f.

</details>

<details>
<summary>Worked solution</summary>

An annihilator calculation distinguishes associated primes from the larger support.

1. The nonzero classes of x and y have annihilators(y) and(x), respectively, so both primes occur.
2. For any nonzero class of f, the annihilator is(xy):f. If neither x nor y divides f this is(xy), not prime; if just x divides f it is(y), and if just y divides f it is(x). If both divide f the class would be zero and is excluded.
3. These cases exhaust divisibility by the distinct prime factors x,y. Hence exactly the two primes(x),(y) are associated.

</details>
