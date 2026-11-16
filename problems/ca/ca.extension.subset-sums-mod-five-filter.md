# Group complete root blocks before projecting weighted subset sums

*Hard · [Complex analysis problems](index.md)*

How many subsets of $\{1,2,\ldots,12\}$ have element sum divisible by five? Include the empty subset and use a fifth-root-of-unity filter.

```answer
{"answer":{"kind":"integer","expected":"820","checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Use the product of 1+x^j to record subset sums.

</details>

<details>
<summary>Hint 2</summary>

At each nontrivial fifth root, group the first ten factors into two full five-factor blocks.

</details>

<details>
<summary>Worked solution</summary>

Complete residue blocks simplify a weighted subset generating product before projection.

1. Let F(x) be the product of (1+x^j) for j=1 through twelve. At one its value is 4096. For a nontrivial fifth root u, each complete five-factor block has product two, so F(u)=4(1+u)(1+u^2).
2. Summing F(u) over the four nontrivial fifth roots gives 4 times \[4-1-1-1\]=4, because each of the first three nonzero root frequencies has sum negative one.
3. The root filter therefore gives (4096+4)/5=820 subsets, with the empty subset retained.

</details>
