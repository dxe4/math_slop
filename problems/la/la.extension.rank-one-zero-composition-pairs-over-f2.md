# Count ordered zero-composition pairs over a finite field

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb F_2$ with arithmetic modulo two; matrices act on column vectors. How many ordered pairs of $2\times2$ matrices $(A,B)$ over $\mathbb F_2$ satisfy $\operatorname{rank}A=\operatorname{rank}B=1$ and $AB=0$?

```answer
{"answer":{"kind":"integer","expected":27,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count rank-one maps by choosing their image line and a nonzero linear functional into that line.

</details>

<details>
<summary>Hint 2</summary>

Once $A$ is fixed, the image of $B$ must equal the kernel line of $A$.

</details>

<details>
<summary>Worked solution</summary>

Count linear maps through image and kernel structure rather than all entry arrays.

1. There are three lines in $\mathbb F_2^2$. For each chosen image line, a fixed nonzero generator identifies maps onto it with the three nonzero functionals, giving nine rank-one choices for $A$.
2. The kernel of each such $A$ is a line. The zero composition requires the rank-one image of $B$ to be exactly that line.
3. There are three nonzero functionals producing a surjection onto that fixed line, hence three choices of $B$ for each $A$. The ordered-pair count is $9\cdot3=27$.

</details>
