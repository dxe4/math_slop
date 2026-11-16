# Construct incompatible randomization laws under a weak null

*Medium · [Statistics and probability](index.md)*

Four units have exactly two assigned to treatment, each assignment equally likely. The observed treatment set is $\{1,2\}$ and all four observed outcomes are zero. Construct two potential-outcome schedules consistent with the observations and with average treatment effect zero, but with different randomization distributions of the treated-minus-control mean difference. Contrast the sharp null $Y_i(1)=Y_i(0)$ for every unit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Start with the all-zero schedule, then alter only unobserved outcomes.

</details>

<details>
<summary>Hint 2</summary>

Make two nonzero individual effects cancel; exhibit one assignment producing a nonzero contrast.

</details>

<details>
<summary>Model proof</summary>

A zero average effect leaves missing potential outcomes unspecified.

1. Schedule A sets both potential outcomes of every unit to zero. Its average effect and every assignment contrast are zero.
2. For schedule B, set $Y_1(0)=1$, $Y_2(0)=-1$, and all other potential outcomes, including $Y_1(1),Y_2(1)$, to zero. The observed data are unchanged. The four individual effects are $-1,1,0,0$, so their average is zero.
3. Under treatment set $\{1,3\}$ in schedule B, treated outcomes are both zero and control outcomes are $-1,0$, so the contrast is $1/2$. This assignment has probability $1/6$, whereas schedule A puts all mass at zero. Under the sharp null the missing outcomes equal their observed counterparts, so the observed zeros determine the entire randomization distribution.

**Self-assessment rubric**

- Keep every observed potential outcome fixed in both schedules.
- Verify zero average effect and compute a changed assignment contrast.
- Explain why positive assignment mass changes the law and why the sharp null removes the ambiguity.

</details>
