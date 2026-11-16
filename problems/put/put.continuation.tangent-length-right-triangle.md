# Tangent length right triangle

*Medium · [Original Putnam-style training](index.md)*

From point $P$ at distance $13$ from the center $O$ of a circle of radius $5$, a tangent meets the circle at $T$. Find $PT$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The radius to a tangency point is perpendicular to the tangent.

</details>

<details>
<summary>Hint 2</summary>

Use the right triangle $OTP$.

</details>

<details>
<summary>Worked solution</summary>

Length is nonnegative, hence $PT=12$.

1. $OT\perp PT$, so Pythagoras gives $OP^2=OT^2+PT^2$.
2. Thus $PT^2=13^2-5^2=169-25=144$.
3. Length is nonnegative, hence $PT=12$.

</details>
