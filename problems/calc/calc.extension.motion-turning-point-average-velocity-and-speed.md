# Use a derivative to locate a hidden reversal in motion

*Medium · [Calculus](index.md)*

Position is s(t)=t³−3t metres for 0≤t≤2 seconds. Return $[\text{average velocity},\text{average speed}]$ in m/s, finding any turning time instead of assuming monotone motion.

```answer
{"answer":{"kind":"vector","expected":["1","3"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Velocity is 3t²−3 and changes sign inside the interval.

</details>

<details>
<summary>Hint 2</summary>

Split total distance at that sign change, but compute displacement using endpoints only.

</details>

<details>
<summary>Worked solution</summary>

A continuous motion rule reveals reversals not listed as separate data.

1. Velocity vanishes at t=1, is negative before and positive afterward. The positions are s(0)=0,s(1)=−2,s(2)=2.
2. Displacement is 2 m, while total distance is \|−2−0\|+\|2−(−2)\|=6 m.
3. Dividing each by the 2-second duration gives \[1,3\] in m/s.

</details>
