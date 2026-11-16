# Differentiate both factors in a mixed exponential derivative

*Medium · [Calculus](index.md)*

For $f(x,y)=e^{xy}$, compute f\_xy(0,0), where the y derivative follows the x derivative.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The first x derivative is y e^{xy}.

</details>

<details>
<summary>Hint 2</summary>

The y derivative must differentiate both the prefactor and the exponential.

</details>

<details>
<summary>Worked solution</summary>

A mixed derivative detects interaction even when both first partials vanish.

1. First f\_x=y e^{xy}.
2. Then f\_{xy}=e^{xy}+xy e^{xy}=(1+xy)e^{xy}.
3. At the origin the value is 1.

</details>
