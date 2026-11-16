# Distinguish average velocity from average speed

*Medium · [Calculus](index.md)*

Position readings in metres are $s(0)=0$, s(1)=4, s(3)=0 and s(4)=4. Motion is monotone between each successive pair of listed times, measured in seconds. Return displacement, total\_distance, average\_velocity and average\_speed on \[0,4\].

```answer
{"answer":{"kind":"record_of_rationals","expected":{"displacement":"4","total_distance":"12","average_velocity":"1","average_speed":"3"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The endpoint difference gives signed displacement.

</details>

<details>
<summary>Hint 2</summary>

The monotonicity assumption permits summing absolute changes between successive readings for total distance.

</details>

<details>
<summary>Worked solution</summary>

Signed displacement and path length answer different rate questions.

1. The signed displacement is four metres, while the three monotone segments have distances four, four and four metres, totaling twelve.
2. The total time is four seconds, so average velocity is one metre per second.
3. Average speed is twelve divided by four, or three metres per second. Without the segment monotonicity assumption those readings alone would not determine total distance.

</details>
