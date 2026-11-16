# Explain why a zero derivative needs an interval to force constancy

*Hard · [Real analysis](index.md)*

On the open set $D=(-2,-1)\cup(1,2)$ define f=0 on the first component and f=1 on the second. Prove fprime=0 everywhere on D but f is not constant. Identify the missing hypothesis when applying the mean value theorem to points from different components.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Every point has a neighborhood contained in its own component.

</details>

<details>
<summary>Hint 2</summary>

The theorem requires an entire connecting interval in the function domain.

</details>

<details>
<summary>Model proof</summary>

Local differentiability does not bridge disconnected domain components.

1. At any point of either open component the function is locally constant, so its derivative there is zero.
2. Values at -3/2 and 3/2 differ, so f is not constant on D.
3. The interval between those two points contains a gap outside D; f is not defined and continuous on the full connecting closed interval. Thus the mean value theorem cannot connect them.

**Self-assessment rubric**

- Justify the derivative at every point of the actual open domain.
- Exhibit two domain points with different values.
- Identify the precise domain hypothesis preventing the attempted theorem application.

</details>
