# Find a complete interval model for a nonstandard metric

*Medium · [Topology problems](index.md)*

On $\mathbb R$ let $h(x)=x/(1+|x|)$ and $d(x,y)=|h(x)-h(y)|$. Give the usual closed interval that is the metric completion of this space via h.

```answer
{"answer":{"kind":"interval","expected":"[-1,1]","checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find the range and inverse of the strictly increasing map h.

</details>

<details>
<summary>Hint 2</summary>

The original metric makes h an isometry onto that range; complete it inside the usual real line.

</details>

<details>
<summary>Worked solution</summary>

Completion depends on the metric model, not on the original set being the real line.

1. The map h is a bijection onto $(-1,1)$, with inverse $u/(1-|u|)$.
2. The defining distance makes it an isometry onto that usual open interval.
3. The interval is dense in the complete metric interval $[-1,1]$, so that closed interval gives the completion.

</details>
