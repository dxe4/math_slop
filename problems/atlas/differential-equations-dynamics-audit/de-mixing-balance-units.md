# Derive a variable-volume mixing model

*Difficulty 2 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 1 of 14*

A tank contains volume V(t) litres and salt amount m(t) grams. Brine enters at q_i litres per minute with concentration c_i grams per litre; well-mixed liquid leaves at q_o litres per minute. Derive equations for V and m, state the outgoing concentration, and identify the condition under which volume is constant.

<details>
<summary>Hint 1</summary>

Use inflow minus outflow for each conserved quantity

</details>

<details>
<summary>Hint 2</summary>

Perfect mixing makes outlet concentration equal to m/V

</details>

<details>
<summary>Hint 3</summary>

Check that every term in m prime has grams per minute

</details>

<details>
<summary>Worked solution</summary>

Volume balance gives $V'=q_i-q_o$. Salt inflow is $q_i c_i$ grams per minute, while salt outflow is $q_o(m/V)$, because perfect mixing makes the outlet concentration $m/V$. Thus $m'=q_i c_i-q_o m/V$. The dimensions match: a volume rate times a mass-per-volume concentration is mass per time. Volume is constant exactly when $q_i=q_o$ over the interval, assuming no other volume sources or sinks. The model also requires $V>0$ and a mixing time short enough to justify uniform concentration.

**Answer.** $V'=q_i-q_o$ and $m'=q_i c_i-q_o m/V$; outlet concentration is $m/V$ and volume is constant when $q_i=q_o$.

</details>

*Tags: ordinary differential equations, balance law, units, model assumption*
