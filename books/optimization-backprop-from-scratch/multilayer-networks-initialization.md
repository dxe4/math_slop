
# Multilayer Networks and Signal Initialization

## Purpose and prerequisites

Reverse mode tells us how to differentiate a network. Initialization decides which function, activation scales, and Jacobian products the first update sees. This chapter derives multilayer forward and backward equations, exact small-network gradients, mean-field second-moment heuristics, fan-in/fan-out compromises, depth-dependent signal failure, symmetry breaking, and an auditable initialization experiment.

The prerequisites are matrix pullbacks, reverse-mode backpropagation, smooth optimization, and stable output losses. The chapter does not claim a universal best initializer. Variance formulas rely on independence, identical-distribution, symmetry, and width assumptions that are only approximate in a realized finite network. Architecture, activation, normalization, residual paths, optimizer, data scale, and loss all matter.

## A shaped multilayer program

For one input $h^{0}=x\in \mathbb{R}^{n_{0}}$, define layers $l=1,…,L$ by

$z^l=W^l h^{l-1}+b^l$,

$h^l=\phi _{l}(z^l)$.

Here $W^l\in \mathbb{R}^{n_{l}\times n_{l-1}}$, $b^l\in \mathbb{R}^{n_{l}}$, and the activation acts componentwise unless stated otherwise. An output layer may be affine logits $s=W^{L+1}h^L+b^{L+1}$, followed by a stable loss.

For a row-batch $H^{0}=X\in \mathbb{R}^{B\times n_{0}}$, the same convention becomes

$Z^l=H^{l-1}(W^l)^{\top}+1(b^l)^{\top}$,

$H^l=\phi _{l}(Z^l)$.

Biases broadcast down rows. Their gradient must reduce over the batch axis; a shape-preserving copy of the upstream matrix is wrong.

## Backpropagation by induction

Let scalar batch loss be $J$ and define preactivation adjoint

$\delta ^l=\partial J/\partial z^l\in \mathbb{R}^{n_{l}}$

for one case. The affine differential is

$dz^l=dW^l h^{l-1}+W^l dh^{l-1}+db^l$.

Pairing with $\delta ^l$ gives

$dJ=(\delta ^l)^{\top} dW^l h^{l-1}+(\delta ^l)^{\top}W^l dh^{l-1}+(\delta ^l)^{\top}db^l$.

Using trace notation,

$\nabla _{W^l}J=\delta ^l(h^{l-1})^{\top}$,

$\nabla _{b^l}J=\delta ^l$,

and the adjoint passed to $h^{l-1}$ is $(W^l)^{\top}\delta ^l$. Through the componentwise activation,

$\delta ^{l-1}=((W^l)^{\top}\delta ^l)\odot \phi _{l-1}'(z^{l-1})$.

Starting from the stable loss derivative at the output and applying this recurrence backward proves all layer gradients by induction. The proof assumes stored forward values are the ones used by each local derivative.

For a batch with **mean** reduction, matrix formulas are

$\nabla _{W^l}J=(1/B)(\Delta ^l)^{\top} H^{l-1}$,

$\nabla _{b^l}J=(1/B)(\Delta ^l)^{\top}1$,

when $\Delta ^l$ stores unnormalized per-case preactivation adjoints. An implementation can place $1/B$ earlier, but exactly once.

## Worked two-layer network

Take input $x=(1,-1)^{\top}$,

$W^{1}=\begin{bmatrix}2 & 1 \\ 1 & -1\end{bmatrix}$, $b^{1}=(0,0)^{\top}$,

ReLU activation, output weight $W^{2}=(3,-2)$, and scalar output bias zero. Use half-squared loss $(\frac{1}{2})(s-y)^{2}$ with target $y=1$.

Forward:

$z^{1}=W^{1}x=(1,2)^{\top}$,

$h^{1}=(1,2)^{\top}$,

$s=W^{2}h^{1}=3-4=-1$,

$J=(\frac{1}{2})(-2)^{2}=2$.

Backward:

$\delta ^{2}=\partial J/\partial s=s-y=-2$,

$\nabla _{W^{2}}J=\delta ^{2}(h^{1})^{\top}=(-2,-4)$,

$\partial J/\partial h^{1}=(W^{2})^{\top}\delta ^{2}=(-6,4)^{\top}$.

Both hidden preactivations are positive, so ReLU derivatives are one and $\delta ^{1}=(-6,4)^{\top}$. Therefore

$\nabla _{W^{1}}J=\delta ^{1}x^{\top}=\begin{bmatrix}-6 & 6 \\ 4 & -4\end{bmatrix}$,

$\nabla _{b^{1}}J=(-6,4)^{\top}$, and $\nabla _{b^{2}}J=-2$.

Every value can be checked by centered differences away from the ReLU kink. This fixture tests signs, outer-product orientation, bias reduction, and the output-loss convention.

## Why initialization is mathematical state

An initialization rule specifies a distribution or deterministic construction for every parameter, plus random state and scaling. It affects:

- initial output and loss;
- activation means and second moments;
- fraction of saturated or inactive units;
- forward Jacobian and gradient scales;
- symmetry among hidden units;
- numerical overflow and underflow;
- the induced prior over functions before data fitting.

Two rules with equal variance can have different tails and therefore different maximum weights in finite width. A distribution family, truncation rule, seed, and fan definition are part of the algorithm.

## Forward second-moment propagation

Consider one neuron

$z_{i}=\sum_{j=1}^n W_{ij} h_{j}$,

with zero bias. Assume for this derivation:

1. weights are independent with $\mathbb{E}[W_{ij}]=0$ and $\operatorname{Var}(W_{ij})=\sigma _{w}^{2}$;
2. weights are independent of activations;
3. activations have common second moment $\mathbb{E}[h_{j}^{2}]=q$;
4. cross terms vanish, for example through independence and zero-mean weights.

Then

$\mathbb{E}[z_{i}^{2}]=\sum_{j} \mathbb{E}[W_{ij}^{2}]\mathbb{E}[h_{j}^{2}]=n\sigma _{w}^{2}q$.

For a linear activation, preserving second moment suggests

$\sigma _{w}^{2}=1/n$.

This is a fan-in rule. It preserves the expectation under the stated model, not each realized layer norm.

### ReLU second moments

For $\phi (z)=\max\left(0,z\right)$ and a distribution of $z$ symmetric about zero,

$\mathbb{E}[\phi (z)^{2}]=(\frac{1}{2})\mathbb{E}[z^{2}]$.

Half the squared mass lies on each side. Thus

$q_{\mathrm{next}}=(\frac{1}{2})n\sigma _{w}^{2}q$,

and second-moment preservation suggests

$\sigma _{w}^{2}=2/n$.

This is often called a He-style fan-in scale. He, Zhang, Ren, and Sun derive the rectifier-aware fan-in rule in §2.2 of “Delving Deep into Rectifiers”; see the bibliography. It preserves the **second moment**, not the centered variance. If $z$ is Gaussian with variance $q_{z}$, then

$\mathbb{E}[\operatorname{ReLU}(z)]=\sqrt{\left(q_{z}/(2\pi )\right)}$

and

$\operatorname{Var}(\operatorname{ReLU}(z))=q_{z}(\frac{1}{2}-1/(2\pi ))$.

Calling $\mathbb{E}[h^{2}]$ and $\operatorname{Var}(h)$ the same quantity after ReLU is a common derivation error.

### Worked propagation

Suppose each hidden layer has width 100, zero biases, ReLU, and incoming activation second moment 3. With weight variance $\frac{2}{100}$, preactivation second moment is

$100\cdot (\frac{2}{100})\cdot 3=6$.

After ReLU it returns to $\frac{6}{2}=3$. With variance $\frac{1}{100}$, it would fall to $1.5$ each layer in this idealized calculation, decaying geometrically.

## Backward second-moment propagation

For the recurrence

$\delta ^{l-1}=((W^l)^{\top}\delta ^l)\odot \phi '(z^{l-1})$,

assume, heuristically, that weight entries, upstream adjoints, and activation gates are sufficiently independent, with common adjoint second moment $r_{l}$. A coordinate before the gate sums $n_{l}$ terms, so

$\mathbb{E}[((W^l)^{\top}\delta ^l)_{j}^{2}]\approx n_{l}\sigma _{w}^{2}r_{l}$.

For a symmetric ReLU preactivation with no atom at zero, $\phi '(z)$ is 1 on the positive half and 0 on the negative half, so $\mathbb{E}[\phi '(z)^{2}]=\frac{1}{2}$. If there is mass at zero, the result also depends on the declared derivative convention there. Under the no-atom assumption,

$r_{l-1}\approx (\frac{1}{2})n_{l}\sigma _{w}^{2}r_{l}$.

Forward He scaling uses $\sigma _{w}^{2}=2/n_{l-1}$, giving backward factor

$n_{l}/n_{l-1}$.

It preserves both directions only for equal adjacent widths under these approximations. At a bottleneck or expansion, fan-in and fan-out demands conflict.

## Fan-in, fan-out, and compromise scales

For a linear or near-linear activation, forward preservation suggests $1/fan_{\mathrm{in}}$; backward preservation suggests $1/fan_{\mathrm{out}}$. A common symmetric compromise is

$\sigma _{w}^{2}=2/(fan_{\mathrm{in}}+fan_{\mathrm{out}})$.

For uniform weights on $[-a,a]$, variance is $a^{2}/3$, so matching this variance gives

$a=\sqrt{\left(6/(fan_{\mathrm{in}}+fan_{\mathrm{out}})\right)}$.

For ReLU, fan-in scale $2/fan_{\mathrm{in}}$ targets forward second moments; a fan-out variant targets backward moments. There is no contradiction: they optimize different approximations.

Convolutional fan counts include receptive-field size and channel counts. Recurrent sharing violates the independent-layer story. The rule must match the actual linear operator, not only a tensor's number of entries.

## Saturating activations

For $\tanh\left(z\right)$, derivative is $1-tanh^{2}(z)$. Near zero it is close to one, but for large $\lvert z\rvert$ it approaches zero. Large initial preactivation variance can place many units in saturation, shrinking backward signals even when weight norms are moderate.

For the logistic sigmoid, derivative $\sigma (z)(1-\sigma (z))\le \frac{1}{4}$, so repeated products can shrink rapidly. Its positive mean can also shift later preactivations unless weights and biases compensate.

Variance preservation alone is insufficient. A useful signal ledger records distributions or quantiles of preactivations, activations, derivatives, and adjoints, including saturation/inactivity fractions.

## Depth and Jacobian products

Ignoring biases, the input-to-output Jacobian of an $L$-layer componentwise network is

$J = D^L W^L D^{L-1}W^{L-1}…D^{1}W^{1}$,

where $D^l=\operatorname{diag}(\phi _{l}'(z^l))$. Submultiplicativity gives

$\lVert J\rVert\le \prod_{l} \lVert D^l\rVert\lVert W^l\rVert$.

If typical factors are below one, products can vanish exponentially with depth. If above one, they can explode. Matching average second moments does not guarantee every singular value of the product is near one.

### Scalar depth example

For scalar linear layers $h^l=w_{l}h^{l-1}$,

$dh^L/dx=\prod_{l}w_{l}$.

If every $w_{l}=0.9$, magnitude is $0.9^L$; at $L=100$ it is about $2.66\times 10^{-5}$. If every $w_{l}=1.1$, it is about $1.38\times 10^{4}$. Small per-layer deviations compound.

In matrices, directions behave differently according to singular vectors. “The gradient norm is stable on average” can coexist with severe directional collapse.

## Orthogonal linear maps and their boundary

For a square orthogonal matrix $Q$, $\lVert Qx\rVert=\lVert x\rVert$ exactly and every singular value equals one. Products of orthogonal linear layers preserve Euclidean norms. Scaled orthogonal initialization can therefore control linear signal geometry better than entrywise variance alone.

Nonlinear gates change the Jacobian to $DQ$; ReLU sets some rows to zero, and data-dependent gates correlate across depth. Rectangular layers cannot be orthogonal in both row and column senses when dimensions differ. Orthogonality is a useful construction, not a universal dynamical-isometry guarantee.

## Symmetry breaking

Suppose two hidden units have identical incoming weights and biases and identical outgoing roles. They produce identical activations. Under a symmetric loss and deterministic updates, their gradients remain identical, so training preserves the equality. The model behaves as if those units were one duplicated feature.

All-zero initialization is especially problematic in a multilayer network. If output weights are zero, the first backward signal into the hidden layer is zero. Even after output weights move, identical hidden units can remain locked together.

Random initialization breaks permutation symmetry by assigning different coordinates. It does not remove the underlying function symmetry: permuting hidden units and compensating the next layer still represents the same function, as Chapter 18 explains.

### Bias choices

Zero hidden biases are common because the random weights already break unit symmetry. Positive ReLU biases can reduce initial inactivity but shift means and may cause persistent activation. Large biases can saturate sigmoid or tanh units.

For a binary output, setting the output bias to training log-odds

$\log\left(p_{\mathrm{train}}/(1-p_{\mathrm{train}})\right)$

initializes probability at the training prevalence when features contribute zero. This must use training data only, requires handling $p=0$ or 1, and conflicts with some class-weighted objectives whose optimum is a transformed probability. It is a deliberate initialization, not a calibration guarantee.

## Residual paths as a preview

A residual block has form

$h_{\mathrm{next}}=h+F(h)$.

Its Jacobian is $I+J_{F}(h)$, creating a direct identity path in both forward perturbations and reverse adjoints. If $J_{F}$ starts small, the block initially lies near identity. This can ease signal propagation, but products of $I+J_{F}$ can still grow, rotate, or become ill-conditioned. Normalization, residual scaling, and train/deployment state are treated in Chapter 17.

## Finite-width and dependence caveats

The second-moment derivations average over random initialization and assume relations that fail exactly after conditioning on a realized network:

- activations share upstream inputs and are not fully independent;
- backward adjoints depend on the same weights used in the forward pass;
- finite widths produce sample fluctuations and extreme values;
- data may be nonzero-mean, correlated, sparse, or badly scaled;
- biases, normalization, dropout, and attention alter the recurrence;
- training immediately changes weight distributions and dependencies.

Therefore theory supplies expected reference curves, while an initialization audit measures the actual network on frozen representative inputs.

## An auditable initializer

```text
function initialize_dense(rng, fan_in, fan_out, activation):
    require fan_in > 0 and fan_out > 0
    if activation == "relu":
        variance = 2 / fan_in
    else if activation == "linear" or activation == "tanh":
        variance = 2 / (fan_in + fan_out)
    else:
        fail("no declared scale for activation")
    W = zeros(fan_out, fan_in)
    for i in 0..fan_out-1:
        for j in 0..fan_in-1:
            rng, z = next_standard_normal(rng)
            W[i,j] = sqrt(variance) * z
    b = zeros(fan_out)
    return rng, W, b, variance
```

The random-normal generator must itself be specified and tested. A production implementation may use a different distribution or fused kernel, but should preserve declared variance, shape, state advancement, and dtype behavior.

## Signal and gradient ledger

At initialization, record per layer:

- $fan_{\mathrm{in}}$, $fan_{\mathrm{out}}$, distribution, target variance, realized mean/variance, and maximum magnitude of weights;
- preactivation and activation mean, standard deviation, second moment, and selected quantiles;
- fraction at exact zero, ReLU inactive fraction, or saturation fraction under a declared threshold;
- output loss and finite/nonfinite status;
- activation-adjoint and parameter-gradient norms or second moments;
- JVP norms for several fixed input directions and VJP norms for fixed output covectors;
- seed/state, batch identities, dtype, reduction, and loss formula.

Compare multiple declared seeds. A mean across seeds without dispersion can hide rare exploding initializations. The batch is a diagnostic fixture, not population evidence.

## Failure boundaries

- Fan formulas preserve idealized moments, not every finite realization or singular direction.
- Forward preservation does not guarantee backward preservation when widths differ.
- Stable initialization does not guarantee trainability, generalization, or causal validity.
- Zero or equal hidden parameters can preserve harmful symmetry.
- Output-bias prevalence must be train-only and match the objective semantics.
- Gradient checks can pass while signals vanish through depth.
- A visually smooth loss trace does not prove initialization was well-conditioned.
- Comparing initializers requires common data, loss, arithmetic, optimizer state, and compute budgets.

## Exercises

1. State the shapes of $W^l$, $b^l$, $z^l$, and $h^l$ for a layer mapping width 5 to width 3.
2. Derive the one-case gradients of $z=Wh+b$ from the differential pairing with upstream $\delta$.
3. Recompute every forward and backward value in the worked two-layer network.
4. In a batch of size $B$, explain why the bias gradient sums over rows and where a mean-loss factor belongs.
5. Under the chapter assumptions, derive $\mathbb{E}[z_{i}^{2}]=n\sigma _{w}^{2}q$ and identify which cross terms vanish.
6. Prove $\mathbb{E}[\operatorname{ReLU}(Z)^{2}]=(\frac{1}{2})\mathbb{E}[Z^{2}]$ for a distribution symmetric about zero.
7. A ReLU layer has fan-in 50 and input second moment 4. Compare predicted output second moments for weight variances $\frac{1}{50}$ and $\frac{2}{50}$.
8. For Gaussian $Z\sim N(0,q)$, distinguish $\mathbb{E}[\operatorname{ReLU}(Z)^{2}]$ from $\operatorname{Var}(\operatorname{ReLU}(Z))$ using the formulas in the chapter.
9. A ReLU layer maps width 100 to 25 with fan-in He variance. Find the approximate backward second-moment factor.
10. Derive the uniform half-width matching variance $2/(fan_{\mathrm{in}}+fan_{\mathrm{out}})$.
11. Compute $0.9^{50}$ and $1.1^{50}$ approximately or express them exactly; interpret the scalar depth products.
12. Prove an orthogonal linear map preserves Euclidean norm.
13. Explain why identical hidden units remain identical under deterministic gradient descent in a symmetric architecture.
14. For training prevalence $p=0.2$, compute the output log-odds bias and its initial sigmoid probability.
15. Show that the binary logit-loss gradient at zero logit is $0.5-y$; discuss the initial average gradient under prevalence $p$.
16. A residual block is $h_{\mathrm{next}}=h+Ah$. Find its Jacobian and give a norm bound.
17. Give four reasons the mean-field independence assumptions fail in a finite trained network.
18. Design a complete initialization project comparing two scales, including exact fixtures, multi-seed summaries, JVP/VJP checks, and claim boundaries.

## Full solutions

1. $W^l\in \mathbb{R}^{3\times 5}$, $b^l\in \mathbb{R}^{3}$, and for one case both $z^l,h^l\in \mathbb{R}^{3}$. The preceding activation $h^{l-1}$ lies in $\mathbb{R}^{5}$.
2. $dz=dWh+Wdh+db$. Pairing gives $dJ=\delta ^{\top}dWh+\delta ^{\top}Wdh+\delta ^{\top}db=\operatorname{tr}((\delta h^{\top})^{\top}dW)+(W^{\top}\delta )^{\top}dh+\delta ^{\top}db$. Hence $\nabla _{W}J=\delta h^{\top}$, $\nabla _{h}J=W^{\top}\delta$, and $\nabla _{b}J=\delta$.
3. $z^{1}=(1,2)$, $h^{1}=(1,2)$, $s=-1$, and $J=2$. Output adjoint is $-2$; gradients are $\nabla W^{2}=(-2,-4)$, $\nabla b^{2}=-2$. Hidden activation adjoint is $(-6,4)$; both ReLU gates are one, so $\delta ^{1}=(-6,4)$, $\nabla W^{1}=\begin{bmatrix}-6 & 6 \\ 4 & -4\end{bmatrix}$, and $\nabla b^{1}=(-6,4)$.
4. The same bias affects every row, so its differential is broadcast to all rows and the adjoint reverses broadcasting by summing: $\nabla b=(\Delta ^{\top}1)/B$ for a mean loss. The factor may already be included in $\Delta$; it must appear exactly once.
5. Expand $z_{i}^{2}=\sum_{j}W_{ij}^{2}h_{j}^{2}+\sum_{j\ne k}W_{ij}W_{ik}h_{j}h_{k}$. Each diagonal term has expectation $\sigma _{w}^{2}q$. Cross terms vanish because distinct zero-mean independent weights have $\mathbb{E}[W_{ij}W_{ik}]=0$, independent of activations. Summing $n$ diagonal terms gives $n\sigma _{w}^{2}q$.
6. Symmetry means the distributions of $Z$ and $-Z$ agree. The squared mass splits equally: $\mathbb{E}[Z^{2}1[Z>0]]=\mathbb{E}[Z^{2}1[Z<0]]$, ignoring any zero mass which contributes zero. Since their sum is $\mathbb{E}[Z^{2}]$, the positive part and thus ReLU square has half the second moment.
7. Preactivation second moment is $50\sigma _{w}^{2}\cdot 4$. With $\frac{1}{50}$, it is 4 and ReLU output is 2. With $\frac{2}{50}$, it is 8 and ReLU output is 4, preserving the input second moment under the model.
8. $\mathbb{E}[\operatorname{ReLU}(Z)^{2}]=q/2$. Its mean is $\sqrt{\left(q/(2\pi )\right)}$, so variance is second moment minus squared mean: $q/2-q/(2\pi )=q(\frac{1}{2}-1/(2\pi ))$. The positive mean makes variance smaller than second moment.
9. Approximate backward factor is $fan_{\mathrm{out}}/fan_{\mathrm{in}}=\frac{25}{100}=\frac{1}{4}$. Adjoint second moments shrink by about fourfold across that layer under the independence heuristic.
10. Uniform $U[-a,a]$ has variance $a^{2}/3$. Set $a^{2}/3=2/(fan_{\mathrm{in}}+fan_{\mathrm{out}})$ to get $a=\sqrt{\left(6/(fan_{\mathrm{in}}+fan_{\mathrm{out}})\right)}$.
11. $0.9^{50}\approx 0.00515$, while $1.1^{50}\approx 117.39$. Repeating modest contraction nearly erases the scalar derivative; modest expansion makes it large. Matrix directions can show both behaviors simultaneously.
12. If $Q^{\top}Q=I$, then $\lVert Qx\rVert^{2}=x^{\top}Q^{\top}Qx=x^{\top}x=\lVert x\rVert^{2}$. Taking nonnegative square roots proves norm preservation.
13. Equal incoming parameters yield equal preactivations and activations. Symmetric outgoing roles give equal upstream adjoints, so their parameter gradients are equal. Applying identical deterministic updates preserves equality by induction over training steps.
14. Bias is $\log\left(0.2/0.8\right)=\log\left(\frac{1}{4}\right)\approx -1.3863$. Its sigmoid is $(\frac{1}{4})/(1+\frac{1}{4})=0.2$.
15. Binary logit gradient is $\sigma (z)-y$; at zero, it is $0.5-y$. Averaging over labels with positive prevalence $p$ gives $0.5-p$, so zero bias is stationary with respect to output bias only when $p=0.5$ under unweighted mean log loss.
16. $h_{\mathrm{next}}=(I+A)h$, so Jacobian is $I+A$. Operator norm obeys $\lVert I+A\rVert\le \lVert I\rVert+\lVert A\rVert=1+\lVert A\rVert$. A lower bound is $\lVert (I+A)v\rVert\ge (1-\lVert A\rVert)\lVert v\rVert$ when $\lVert A\rVert<1$.
17. Activations share the same upstream inputs; backward adjoints depend on forward weights; finite widths fluctuate; training correlates weights with data and gradients. Biases, normalization, structured operators, nonzero-mean data, and reused recurrent weights provide further reasons.
18. Use a hand-checkable two-layer fixture for exact forward/backward values. Compare, for example, $1/fan_{\mathrm{in}}$ and $2/fan_{\mathrm{in}}$ ReLU scales across fixed representative rows and a declared list of independent seeds. Record realized weight moments, activation/adjoint second moments, dead/saturated fractions, extreme values, loss, and finite status. Check fixed JVP/VJP dot products and directional differences away from kinks. Hold architecture, data, loss, dtype, and optimizer state fixed. State that finite diagnostics do not prove trainability or generalization.

## Project checkpoint and forward links

Build a pure dependency-free dense-network signal ledger for widths such as $8\to 32\to 32\to 4$. Implement at least two declared initialization scales, stable output loss, forward mode for fixed directions, and reverse mode for fixed covectors. Verify exact tiny gradients first, then summarize layerwise signals across a fixed seed list with text tables and numerical alternatives. Deliberately include a zero-initialized network to expose symmetry and a mis-scaled deep network to expose vanishing or explosion.

Chapter 17 adds normalization and residual-state semantics. Chapter 18 explains why different parameter initializations can represent symmetry-equivalent functions. Chapter 21 will compare initialization effects under a frozen training and evaluation protocol rather than from cherry-picked successful seeds.
