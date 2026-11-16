# Prove the real triangle inequality with its equality case

*Hard · [Foundations bridge](index.md)*

For all real x,y prove $|x+y|\le|x|+|y|$, and show equality holds exactly when xy≥0, including zero inputs. Supply the reason a squared comparison implies the original one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Both sides are nonnegative, so their squares can be compared safely.

</details>

<details>
<summary>Hint 2</summary>

Subtract the squared left side from the squared right side and use \|x\|\|y\|=\|xy\|.

</details>

<details>
<summary>Model proof</summary>

Absolute values convert the inequality to a sign-sensitive comparison of one product.

1. The squared difference is (\|x\|+\|y\|)²−\|x+y\|²=2(\|xy\|−xy).
2. For every real t, \|t\|−t≥0, with equality exactly when t≥0. Therefore the squared difference is nonnegative, and vanishes exactly when xy≥0.
3. Both original sides are nonnegative. Squaring is strictly increasing on nonnegative real numbers, so the squared comparison implies \|x+y\|≤\|x\|+\|y\|.
4. The same nonnegative-square property shows original equality is equivalent to squared equality, hence to xy≥0. This includes either input zero and excludes opposite strictly nonzero signs.

**Self-assessment rubric**

- Computes the squared difference exactly as 2(\|xy\|−xy).
- Identifies its nonnegativity and precisely when it vanishes, including zeros.
- Justifies both the inequality and equality conclusions using nonnegativity of the original sides.

</details>
