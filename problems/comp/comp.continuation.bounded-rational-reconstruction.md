# Recover a reduced rational from one modular residue and certify uniqueness

*Hard · [Computational arithmetic problems](index.md)*

Find the unique reduced fraction $a/b$ with $|a|\le20$, $1\le b\le20$, $b>0$, and $a\equiv311b\pmod{1009}$. Return $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["7","13"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Apply extended Euclid to $1009$ and $311$ and look for a small remainder with a small coefficient of $311$.

</details>

<details>
<summary>Hint 2</summary>

For uniqueness, compare two candidate fractions by their cross-product difference and use its size bound.

</details>

<details>
<summary>Worked solution</summary>

Euclidean remainders reconstruct a rational, while a determinant bound rules out a second bounded fraction.

1. The first remainders are $1009=3\cdot311+76$ and $311=4\cdot76+7$.
2. Thus $7=13\cdot311-4\cdot1009$, giving the reduced candidate $7/13$ within both bounds.
3. For two candidates, the determinant $a_1b_2-a_2b_1$ is divisible by $1009$ and has magnitude at most $20\cdot20+20\cdot20=800$. It must therefore be zero.
4. Zero determinant makes the fractions equal, and reduced form with positive denominator fixes the pair. The answer is $[7,13]$.

</details>
