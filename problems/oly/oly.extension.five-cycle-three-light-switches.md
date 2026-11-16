# Prove a minimum using all local parity equations

*Hard · [Original olympiad-style problems](index.md)*

$5$ bulbs form a cycle and initially are all off. Pressing a button flips its own bulb and both cyclic neighbors. Buttons may be pressed repeatedly. What is the least total number of presses needed to turn all five bulbs on?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Only the parity of each button press count affects the final state.

</details>

<details>
<summary>Hint 2</summary>

Compare the equations at adjacent bulbs to constrain all five button parities.

</details>

<details>
<summary>Worked solution</summary>

The local switch equations force every button to be used an odd number of times.

1. Let x\_i be the press parity at button i, with indices modulo five. The target condition is x\_(i-1)+x\_i+x\_(i+1)=1 modulo two. Subtracting adjacent equations gives x\_(i-1)=x\_(i+2).
2. Stepping by three cycles through all five indices, so every x\_i is the same. The original equation then forces that common parity to be one. Each button must therefore be pressed at least once.
3. Pressing each button once uses five presses and flips each bulb three times, attaining the all-on target. The minimum is five.

</details>
