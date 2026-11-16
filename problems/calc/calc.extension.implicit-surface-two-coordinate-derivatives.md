# Find both partials of a locally implicit surface

*Medium · [Calculus](index.md)*

Near (1,1,1), the equation xz+yz²=2 defines z=z(x,y). Return $[z_x,z_y]$ at that point.

```answer
{"answer":{"kind":"vector","expected":["-1/3","-1/3"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The z partial of the defining function must be nonzero.

</details>

<details>
<summary>Hint 2</summary>

Differentiate with one independent coordinate at a time.

</details>

<details>
<summary>Worked solution</summary>

One nonzero solved-variable partial controls two distinct input partial derivatives.

1. For F=xz+yz²−2, F\_z=x+2yz=3 at the point, so the implicit function theorem applies.
2. The formulas give z\_x=−F\_x/F\_z=−z/3=−1/3 and z\_y=−F\_y/F\_z=−z²/3=−1/3.
3. Thus the ordered vector is \[−1/3,−1/3\].

</details>
