
# From Counting to Temperature: Entropy and the Partition Function

**Before reading.** Read [Expectation and Variance](../books/introduction-to-probability/expectation-variance.md), [Differentiation in Euclidean Space](../books/proof-safe-real-analysis/differentiation-in-r-n.md) and [Newtonian Mechanics: Work, Energy and Momentum](../books/action-symmetry-mechanics/newtonian-mechanics.md). These are preparation for the ideas used below.

Statistical mechanics connects two descriptions with radically different sizes. A microscopic state specifies positions, momenta, or quantum labels for every component. A macroscopic state records a few quantities such as energy, volume, particle number, and temperature. Probability is the bridge: overwhelmingly many microstates can correspond to the same macrostate.

## 1. Scope, assumptions, and units

Begin with a finite or countable set of microstates. Assume equilibrium, fixed external controls, and an observation time long enough for the chosen equilibrium description to be meaningful. Interactions with an environment determine which ensemble is appropriate.

- Energy $E$ is measured in joules.
- Absolute temperature $T$ is measured in kelvin.
- Boltzmann's constant $k_{B}$ has units joules per kelvin.
- Entropy $S$ therefore has units joules per kelvin.
- $\beta=1/(k_{B} T)$ has units inverse joules, so $\beta E$ is dimensionless.

These equilibrium assumptions are substantive. Glasses, driven systems, active matter, and short observations can retain memory or fluxes that a simple ensemble omits.

## 2. Multiplicity and Boltzmann entropy

Suppose an isolated macrostate permits $\Omega$ microstates, treated as equally likely. Its entropy is

$$S=k_{B} \ln \Omega$$

The logarithm is not cosmetic. If independent systems $A$ and $B$ have multiplicities $\Omega_{A}$ and $\Omega_{B}$, their combined multiplicity is the product. Therefore

$$S_{AB}=k_{B} \ln(\Omega_{A} \Omega_{B})=S_{A}+S_{B}$$

The logarithm turns multiplicative counting into additive thermodynamics.

### Worked counting example

**Worked example.**

Consider four distinguishable two-state units, each with energy $0$ or $\epsilon$. If the total energy is exactly $2 \epsilon$, precisely two units are excited. The multiplicity is

$$\Omega=choose(4,2)=6$$

and $S=k_{B} \ln 6$.

At total energy $0$, there is one state and the entropy is zero under this choice of reference. At energy $\epsilon$, $\Omega=4$. Multiplicity first rises with excitation count, reaches its maximum near half excitation, then falls because a fully excited finite two-state system again has one configuration. This bounded spectrum can support negative absolute temperatures under a careful thermodynamic definition; such states are hotter than positive-temperature states, not colder than zero kelvin.

## 3. Why a heat bath gives exponential weights

Let a small system have microstate $i$ with energy $E_{i}$ and exchange energy with a much larger bath. The combined total energy is fixed. The probability of system state $i$ is proportional to the bath multiplicity at energy $E_{\mathrm{total}}-E_{i}$:

$$P_{i} \propto \Omega_{\mathrm{bath}}(E_{\mathrm{total}}-E_{i})$$

Write bath entropy $S_{b}=k_{B} \ln \Omega_{b}$. For a small exchanged energy, Taylor expand:

$$S_{b}(E_{\mathrm{total}}-E_{i}) \approx S_{b}(E_{\mathrm{total}})-E_{i} (\partial S_{b}/\partial E)$$

Thermodynamics identifies $\partial S/\partial E=1/T$, so

$$\Omega_{b}(E_{\mathrm{total}}-E_{i}) \propto \exp[-E_{i}/(k_{B} T)]=\exp(-\beta E_{i})$$

Normalizing yields the canonical distribution

$$P_{i}=\exp(-\beta E_{i})/Z$$

where

$$Z(\beta)=\sum_{i} \exp(-\beta E_{i})$$

is the partition function. $Z$ is dimensionless and packages both the energy spectrum and its degeneracies.

The derivation assumes the bath is much larger, weak coupling makes separate energies meaningful, and the bath entropy is smooth over exchanged energies.

## 4. Thermodynamics from derivatives of $\ln Z$

The mean energy is

$$U=\sum_{i} P_{i} E_{i}$$

Differentiate the partition function:

$$\partial \ln Z/\partial \beta=(1/Z)\sum_{i}(-E_{i})\exp(-\beta E_{i})=-U$$

Hence

$$U=-\partial_{\beta} \ln Z$$

Differentiate again:

$$\partial_{\beta}^{2} \ln Z=<E^{2}>-<E>^{2}=\operatorname{Var}(E)$$

Energy fluctuations are therefore encoded by the curvature of $\ln Z$. The Helmholtz free energy is

$$F=-k_{B} T \ln Z$$

and the canonical entropy can be written

$$S=(U-F)/T=k_{B}(\ln Z+\beta U)$$

These identities follow from the canonical distribution, not from arbitrary probability weights.

## 5. Worked canonical example: one two-state unit

Let the ground energy be $0$ and excited energy $\epsilon>0$. Then

$$Z=1+\exp(-\beta \epsilon)$$

The excited-state probability and mean energy are

$$p_{\mathrm{exc}}=1/(\exp(\beta \epsilon)+1)$$

$$U=\epsilon/(\exp(\beta \epsilon)+1)$$

Suppose $\epsilon/k_{B}=600 K$ and the bath temperature is $T=300 K$. Then $\beta \epsilon=2$, so

$$p_{\mathrm{exc}}=1/(e^{2}+1) \approx 0.1192$$

and $U \approx 0.1192 \epsilon$.

For $N$ independent distinguishable units, $Z_{N}=Z_{1}^{N}$ because each combined state weight factors. Consequently $\ln Z_{N}=N \ln Z_{1}$ and $U_{N}=N U_{1}$. Independence makes extensive quantities scale linearly.

The heat capacity at fixed external controls is

$$C=dU/dT=k_{B} (\beta \epsilon)^{2} \exp(\beta \epsilon)/(1+\exp(\beta \epsilon))^{2}$$

for one unit. It tends to zero at very low temperature because excitation is suppressed, and also at very high temperature because both levels approach equal occupancy and the bounded mean energy saturates.

## 6. Entropy as missing detail

For any discrete distribution $\{p_{i}\}$, Gibbs entropy is

$$S=-k_{B} \sum_{i} p_{i} \ln p_{i}$$

If $p_{i}=1/\Omega$ over $\Omega$ allowed states, this reduces to $k_{B} \ln \Omega$. For the canonical probabilities, substituting $\ln p_{i}=-\beta E_{i}-\ln Z$ gives

$$S=k_{B}(\beta U+\ln Z)$$

matching the thermodynamic identity above.

Coarse-graining matters. Fine microscopic dynamics can be reversible while a coarse macrodescription evolves toward regions corresponding to enormously more microstates. The second law is thus a statement about typical macroscopic behavior under preparation and coarse-graining; it is not a proof that every microscopic trajectory monotonically increases a fine-grained entropy at every instant.

## 7. Accessible diagram description

Imagine columns grouped by total excitation energy for four two-state units. At energy $0$ there is one small box; at $\epsilon$, four boxes; at $2\epsilon$, six boxes; then four and one. Above this symmetric $1,4,6,4,1$ pattern lies a smooth line labelled entropy $k_{B} \ln \Omega$. A second panel shows canonical probabilities as bars that decrease with energy. Every bar carries its numerical multiplicity and probability, using patterns as well as height, so the diagram works without color.

## 8. Failure modes and limits

- Counting configurations as equally likely without specifying an isolated equilibrium ensemble can be unjustified.
- Missing degeneracy factors changes $Z$ and every derived quantity.
- Exponentiating an energy with units is meaningless; only $\beta E$ is dimensionless.
- Replacing $average of a nonlinear function$ by $function of the average$ generally fails.
- The canonical ensemble can be poor for small baths, strong system-bath coupling, or constrained long-range systems.
- Equilibrium entropy does not by itself supply a rate of relaxation.
- Independence is not the same as weak correlation in finite data; $Z_{N}=Z_{1}^{N}$ requires a factorized energy and state space.

## Exercises

<a id="deep-dive-entropy-partition-function-ex-1"></a>

### Exercise 1

1. Three distinguishable two-state units have total energy $\epsilon$. Find $\Omega$ and $S$.

<details>
<summary>Hint 1</summary>

At fixed total energy epsilon, exactly one of the three distinguishable units is excited.
</details>

<details>
<summary>Hint 2</summary>

Count which unit carries the excitation, then take Boltzmann’s constant times the logarithm of that count.
</details>

<details>
<summary>Solution</summary>

Any one of the three units can be excited, so $\Omega=3$ and $S=k_{B} \ln 3$.

</details>

<a id="deep-dive-entropy-partition-function-ex-2"></a>

### Exercise 2

2. A level of energy $\epsilon$ has degeneracy three while the ground level has degeneracy one. Write $Z$.

<details>
<summary>Hint 1</summary>

The partition function sums a Boltzmann weight over microstates, not merely distinct energy values.
</details>

<details>
<summary>Hint 2</summary>

Give the ground state one term and the excited energy three equal terms.
</details>

<details>
<summary>Solution</summary>

Include each microstate: $Z=1+3 \exp(-\beta \epsilon)$.

</details>

### Further exercises

3. For the nondegenerate two-state unit, find $p_{\mathrm{exc}}$ when $\beta \epsilon=\ln 3$.
4. Derive $U=-\partial_{\beta} \ln Z$ directly from the definition of $Z$.
5. Show that shifting every energy by constant $C$ leaves all canonical probabilities unchanged.
6. Explain why the entropy of two independent systems is additive.

## Worked solutions


3. $\exp(\beta \epsilon)=3$, so $p_{\mathrm{exc}}=1/(3+1)=1/4$.
4. $\partial_{\beta} Z=-\sum_{i} E_{i} \exp(-\beta E_{i})$. Dividing by $Z$ gives $\partial_{\beta} \ln Z=-\sum_{i} P_{i}E_{i}=-U$.
5. $\exp[-\beta(E_{i}+C)]=\exp(-\beta C)\exp(-\beta E_{i})$. The common factor appears in both numerator and $Z$, then cancels.
6. Independence gives $\Omega_{AB}=\Omega_{A} \Omega_{B}$; taking $k_{B} \ln$ converts the product to $S_{A}+S_{B}$.

## Connections and next steps

This deep dive combines **probability distributions**, **multivariable calculus**, **classical mechanics**, and **information theory**. Continue to **statistical mechanics** for ideal gases, quantum statistics, phase transitions, and ensembles; to **stochastic processes** for rates and nonequilibrium dynamics; or to **ergodic theory** for the relation between time and ensemble averages. A computational counterpart can enumerate a small spin model, compare exact $Z$ with Monte Carlo estimates, and report uncertainty and autocorrelation rather than only a polished curve.
