# Order quantity, units, and a flat optimum

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 7 of 12*

In the EOQ model let annual demand $D=2400$ units/year, setup cost $K=50$ currency/order, and holding cost $h=6$ currency/(unit year). Compute Q*, the two annual cost components, and the local relative response of Q* to demand.

<details>
<summary>Hint 1</summary>

$Q*=\sqrt{2KD/h}$

</details>

<details>
<summary>Hint 2</summary>

Orders per year are D/Q

</details>

<details>
<summary>Hint 3</summary>

Log-differentiate the square root

</details>

<details>
<summary>Worked solution</summary>

The optimum is $Q^*=\sqrt{2\cdot50\cdot2400/6}=\sqrt{40000}=200$ units. There are $D/Q=12$ orders per year, so setup cost is $12\cdot50=600$ currency/year. Average cycle stock is $Q/2=100$ units, so holding cost is $100\cdot6=600$ currency/year, a useful optimum check. Since $\log Q^*=\frac12(\log2+\log K+\log D-\log h)$, a small one-percent demand rise raises $Q^*$ by about one-half percent. The result assumes constant deterministic demand, instant replenishment, no shortages, and linear holding cost.

**Answer.** $Q*=200$ units; setup and holding costs are each 600/year; demand elasticity of Q* is one-half.

</details>

*Tags: operations research, inventory, EOQ, sensitivity*
