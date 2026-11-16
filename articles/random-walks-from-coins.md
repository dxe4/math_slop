
# Random Walks from Coins

**Before reading.** Read [Ratio and Proportion](../books/number-and-arithmetic/ratio-proportion.md) and [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md). These are preparation for the ideas used below.

Place a token at 0 on an infinite number line. Flip a fair coin repeatedly: heads moves one unit right, tails one unit left. The path looks playful, but it introduces stochastic processes, diffusion, sampling error, hitting probabilities, and algorithms used across physics, finance, biology, and computing.

This low-prerequisite deep dive separates three things that are easily mixed: the exact mathematics of the model, the random output of one run, and the finite uncertainty of simulation.

## 1. State the model

Let independent random variables $Y₁,Y₂,\ldots$ take values $+1$ and $-1$, each with probability $1/2$. The position after $n$ steps is

$S_{n} = Y₁ + Y₂ + ⋯ + Y_{n}$, with $S₀=0$.

The word **independent** matters: knowing earlier flips does not change the probability of the next. A deck sampled without replacement or a biased coin creates another model.

After $n$ steps, $S_{n}$ has the same parity as $n$ and lies between $-n$ and $n$. Therefore position 0 is impossible at odd times. A simulation reporting it has an implementation defect.

## 2. Exact distribution by counting


**Worked example.**
To finish at position $s$, let $r$ be the number of right steps and $l$ the number of left steps. Then

$r+l=n$ and $r-l=s$, so $r=(n+s)/2$.

When $n+s$ is even and $|s|\le n$, exactly $\binom{n}{r}$ step sequences reach $s$. Every sequence has probability $2^{-n}$, hence

$$P(S_{n}=s) = \binom{n}{(n+s)/2} / 2^{n}$$

Otherwise the probability is zero. For $n=4$, probabilities at $-4,-2,0,2,4$ are $1,4,6,4,1$ divided by 16.

This exact formula gives a benchmark for simulation. It also explains why a histogram has a central mound without invoking a vague law of averages.

## 3. Mean zero does not mean no movement

Each step has expectation

$$E[Y_{i}]=(1/2)(1)+(1/2)(-1)=0$$

By linearity, $E[S_{n}]=0$. This is an average across possible paths, not a claim that a typical path ends at 0.

Since $Y_{i}^{2}=1$, its variance is $E[Y_{i}^{2}]-E[Y_{i}]^{2}=1$. Independence makes variances add:

$\operatorname{Var}(S_{n})=n$, so standard deviation is $\sqrt{n}$.

The typical displacement scale grows like the square root of time. After 10,000 steps, positions of order 100 are ordinary even though the walker travelled total path length 10,000. Directed distance and accumulated distance are different quantities.

## 4. An inspectable simulator

Injecting the random-number source makes the function testable.

```js
function walk(steps, random = Math.random) {
  let position = 0;
  const path = [0];
  for (let i = 0; i < steps; i += 1) {
    position += random() < 0.5 ? -1 : 1;
    path.push(position);
  }
  return path;
}

function endpoints(trials, steps, random = Math.random) {
  return Array.from({ length: trials }, () => walk(steps, random).at(-1));
}
```

One path takes $\Theta(n)$ time and $\Theta(n)$ memory when stored. If only the endpoint matters, discard intermediate positions and use $\Theta(1)$ extra memory. $M$ endpoint trials take $\Theta(Mn)$ time.

A deterministic test source such as $() => 0.25$ must produce all left steps. An alternating supplied sequence should produce a predictable zigzag. Testing only statistical averages can miss simple branch errors.

## 5. Monte Carlo error

Suppose we estimate an event probability $p$ using $M$ independent trials. Let $I_{j}$ be 1 when event $j$ occurs and 0 otherwise. The estimate

$$\widehat{p} = (1/M)\sum I_{j}$$

has expectation $p$ and standard deviation

$$\sqrt{\frac{p(1-p)}{M}}\le\frac{1}{2\sqrt{M}}$$

Thus multiplying trials by 100 reduces ordinary sampling error by about 10, not 100. Reporting $0.537428$ from 100 trials displays meaningless digits.

Simulation error and model error differ. A million accurate simulations of independent fair steps do not validate that a real animal, price, molecule, or queue follows that model.

## 6. First passage between two walls

Now put absorbing walls at 0 and $N$. Start at integer $i$, where $0\le i\le N$, and stop upon hitting either wall. Let $h(i)$ be the probability of reaching $N$ before 0.

Boundary conditions are

$h(0)=0$, $h(N)=1$.

From an interior position, condition on the first fair step:

$$h(i) = (1/2)h(i-1) + (1/2)h(i+1)$$

Rearrange:

$$h(i+1)-h(i) = h(i)-h(i-1)$$

Successive differences are constant, so $h$ is linear. Applying the boundaries gives

$$h(i)=i/N$$

Starting one quarter of the way across gives one-quarter probability of reaching the upper wall first. This proof is exact; simulation can check it but is not its foundation.

## 7. Expected stopping time

Let $e(i)$ be the expected number of additional steps before absorption. Then $e(0)=e(N)=0$, and for interior states

$$e(i)=1+(1/2)e(i-1)+(1/2)e(i+1)$$

The $1$ counts the step just taken. Rearranging yields a constant second difference:

$$e(i+1)-2e(i)+e(i-1)=-2$$

The quadratic function

$$e(i)=i(N-i)$$

satisfies both recurrence and boundaries. Starting near the middle takes order $N^{2}$ expected steps, another appearance of diffusive square-root scaling.

## 8. Biased walks and a tempting error

If right occurs with probability $p$ and left with $1-p$, then

$E[Y]=2p-1$, so $E[S_{n}]=n(2p-1)$.

A tiny bias accumulates linearly while random spread remains order $\sqrt{n}$. For moderate $n$, noise can conceal drift in individual paths.

Do not reuse the fair-wall formula $h(i)=i/N$ when $p\ne 1/2$. The recurrence becomes

$$h(i)=p h(i+1)+(1-p)h(i-1)$$

whose solutions are generally geometric rather than linear. Checking hypotheses prevents a polished but wrong answer.

## 9. Experiments that can fail

1. Simulate endpoints for $n=20$. Confirm that only even positions appear. One odd endpoint refutes the implementation.
2. For $n=100,400,1600$, estimate endpoint standard deviation. Divide by $\sqrt{n}$; the ratio should stay near 1 rather than grow.
3. Between walls 0 and 10, start at 3 and estimate upper-wall probability. Compare with $3/10$, including a sampling-error scale.
4. Estimate expected absorption time from 5 in the same interval. Compare with $5(10-5)=25$.
5. Introduce $p=0.51$. Plot many paths and look for examples ending left despite positive expected drift. They refute “positive mean means every realization increases.”

## Common errors

- Treating pseudo-random generator calls as mathematically independent without qualification.
- Resetting or sharing seeds unintentionally across trials.
- Averaging positions from one correlated path as if they were independent trials.
- Omitting stopping conditions in a walk that might run a long time.
- Using $Math.random()$ for cryptographic decisions; it is not specified for that purpose.
- Drawing smooth curves through discrete time and forgetting only integer steps occur.
- Calling a histogram a proof of a limiting distribution.

## Exercises with worked answers

### 1. Six steps

<a id="deep-dive-random-walks-from-coins-ex-1"></a>

**Exercise 1.**

Find $P(S₆=2)$.


<details>
<summary>Hint 1</summary>

A six-step endpoint of two requires more right moves than left moves by two.
</details>
<details>
<summary>Hint 2</summary>

Solve right plus left equals six and right minus left equals two, then count the resulting sequences.
</details>
<details>
<summary>Solution</summary>

Need $(6+2)/2=4$ right steps. There are $\binom{6}{4}=15$ sequences among $2^{6}=64$, so probability is $15/64$.

</details>

### 2. Impossible endpoint

<a id="deep-dive-random-walks-from-coins-ex-2"></a>

**Exercise 2.**

Why is $P(S₁₀=3)=0$?


<details>
<summary>Hint 1</summary>

A walk changes position by one at every step, so endpoint parity follows step parity.
</details>
<details>
<summary>Hint 2</summary>

Use right-move count equals n plus endpoint divided by two; ask whether that count can be an integer.
</details>
<details>
<summary>Solution</summary>

Ten plus three is odd, so $(n+s)/2=6.5$ is not a possible number of right steps. Endpoint parity must match step parity.

</details>

### 3. Scaling

Compare standard deviations after 100 and 900 fair steps.

**Answer.** They are 10 and 30. Nine times as many steps gives three times the typical displacement scale.

### 4. Wall probability

On $\{0,\ldots,12\}$, starting at 9, what is the chance of reaching 12 before 0?

**Answer.** For a fair walk it is $h(9)=9/12=3/4$.

### 5. Expected duration

For the same walk, find expected absorption time.

**Answer.** $e(9)=9(12-9)=27$ steps.

### 6. Simulation budget

What worst-case standard-error bound applies to 10,000 independent indicator trials?

**Answer.** At most $1/(2\sqrt{10000})=0.005$. The bound is largest near probability one half.

## Connections

Probability by counting gives endpoint distributions. Expectation and variance quantify centre and spread. Stochastic processes generalize the evolving random state. Graph theory lets a walker move on networks. Difference equations for hitting probabilities resemble discrete harmonic functions. Diffusion equations emerge as continuum limits under careful rescaling.

The habit to keep is threefold: derive what the model says exactly, use simulation with visible uncertainty, and test whether the model’s assumptions belong to the situation being described.
