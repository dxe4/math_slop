# Read a supplied Hoeffding exponent

*Easy · [Probability problems](index.md)*

For $n$ independent variables in $[0,1]$, Hoeffding's inequality gives $P(\bar X-E[\bar X]\ge t)\le\exp(-2nt^2)$ for $t>0$. At $n=4$ and $t=1/2$, what is the exponent $-2nt^2$?

```answer
{"answer":{"kind":"integer","expected":"-2","checker_scope":"Checks substitution into the supplied exponent only; it does not grade a proof of Hoeffding's inequality or ask for the exponential bound itself."}}
```

<details>
<summary>Hint 1</summary>

The requested quantity is the exponent, not its exponential.

</details>

<details>
<summary>Hint 2</summary>

Square the threshold first, then multiply by the signed factor involving the sample size.

</details>

<details>
<summary>Worked solution</summary>

Substitute into the displayed formula.

1. The threshold square is $(1/2)^2=1/4$.
2. The prefactor is $-2n=-8$ at sample size four.
3. Thus the exponent is $-8(1/4)=-2$. The corresponding probability upper bound would be $e^{-2}$, a different requested quantity.

The exponent is minus two.

</details>
