# Descend from a three-square residue obstruction

*Hard · [Original olympiad-style problems](index.md)*

Prove the only integer solution of $x^2+y^2+z^2=7w^2$ is $(0,0,0,0)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If $w$ is odd, use square residues modulo eight.

</details>

<details>
<summary>Hint 2</summary>

If $w$ is even, reduction modulo four forces the other three variables even as well.

</details>

<details>
<summary>Model proof</summary>

Combine an odd obstruction with an even descent.

1. If $w=0$, the sum of three nonnegative squares forces all variables zero. Otherwise choose a solution with smallest positive $|w|$.
2. For odd $w$, the right side is seven modulo eight. Three residues from $0,1,4$ cannot sum to seven modulo eight: with no four the sum is at most three, with one four it is four through six, and with two or three fours the residues are zero, one or four.
3. For even $w$, the right side is zero modulo four. A sum of three squares can have that residue only when every square is zero modulo four, so $x,y,z$ are all even.
4. Dividing all four variables by two gives another integer solution with smaller positive $|w|$, contradiction. Thus no nonzero solution exists.

**Self-assessment rubric**

- Exhaust the three-square possibilities modulo eight.
- Force every variable even from the modulo-four equation.
- Use a positive decreasing absolute value and treat the zero case separately.

</details>
