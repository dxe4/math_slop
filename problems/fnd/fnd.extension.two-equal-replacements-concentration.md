# Recover a repeated replacement volume

*Hard · [Foundations bridge](index.md)*

A 10 L tank initially holds a fully mixed 40% salt solution. Remove x litres and refill with pure water, mix completely, and repeat the same removal and refill once. The final concentration is 10%. Find x in litres, assuming $0\le x\le10$ and additive volumes.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each operation retains the same fraction of whatever salt is present immediately before that operation.

</details>

<details>
<summary>Hint 2</summary>

The final-to-initial salt ratio is the square of that retention factor; use its nonnegative range when taking a root.

</details>

<details>
<summary>Worked solution</summary>

Repeated replacement multiplies remaining amounts instead of subtracting the same salt amount twice.

1. The initial salt volume is 4 L. Each replacement retains the fraction 1−x/10 of the current salt, because the tank is uniformly mixed and returns to 10 L.
2. The final salt volume is 1 L, so 4(1−x/10)²=1. Thus (1−x/10)²=1/4.
3. The domain gives 0≤1−x/10≤1, so its value is +1/2, not −1/2. Hence x=5 litres.
4. Checking: the salt volumes are 4, then 2, then 1 litre, which gives the required final concentration.

</details>
