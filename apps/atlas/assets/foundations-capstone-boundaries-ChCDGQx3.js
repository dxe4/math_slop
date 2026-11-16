var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: foundations-capstone-boundaries
title: "Interpretations, Evidence Boundaries, and Capstone"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
status: draft
---

# Interpretations, Evidence Boundaries, and Capstone {#section-1-interpretations-evidence-boundaries-and-capstone}

Quantum mechanics is extraordinarily predictive, but prediction, model construction, experiment, and interpretation are different layers. This closing chapter provides a ledger for stating what a calculation establishes, what data test, and what remains interpretive or outside the model.

<a id="section-3-1-four-claim-layers"></a>
## 1. Four claim layers {#section-5-1-four-claim-layers}

An **internal mathematical claim** follows from postulates and hypotheses. A **model claim** maps a physical preparation or device to states, operators, and parameters. An **empirical claim** compares predicted and observed distributions with uncertainty. An **interpretive claim** explains what the formal objects or outcomes mean. Success at one layer does not automatically settle another.

<a id="section-7-2-interpretive-families"></a>
## 2. Interpretive families {#section-9-2-interpretive-families}

Collapse approaches add or privilege stochastic outcome dynamics; hidden-variable approaches supplement the wave function; Everettian approaches retain unitary universal dynamics and branch-relative outcomes; epistemic or relational approaches alter what state assignment represents. Each family contains variants. The shared operational predictions in a regime often do not discriminate among them.

Representative, non-exhaustive primary anchors include Bohm's two-part 1952 hidden-variable proposal (https://doi.org/10.1103/PhysRev.85.166 and https://doi.org/10.1103/PhysRev.85.180), Everett's 1957 relative-state formulation (https://doi.org/10.1103/RevModPhys.29.454), the Ghirardi--Rimini--Weber 1986 collapse model (https://doi.org/10.1103/PhysRevD.34.470), and Rovelli's 1996 relational formulation (https://doi.org/10.1007/BF02302261). These sources locate examples within the families; they do not make the list exhaustive or settle interpretive merit or priority.

An honest exposition states when a result is interpretation neutral and when extra ontology or dynamics is assumed. Labels are not substitutes for precise postulates.

<a id="section-15-3-measurement-problem"></a>
## 3. Measurement problem {#section-17-3-measurement-problem}

Unitary interaction can correlate system, apparatus, and environment and explain decoherence of interference between robust records. The remaining conceptual question is how the formal superposition relates to definite experienced records and Born probabilities. Different interpretations answer differently; ordinary reduced-state decoherence alone is not a universally accepted complete solution.

Zurek's review surveys environment-induced decoherence and einselection (https://doi.org/10.1103/RevModPhys.75.715). It supports the decoherence mechanism summarized here; the manuscript retains the separate interpretive boundary rather than treating decoherence alone as a universally accepted solution to the measurement problem.

<a id="section-21-4-classical-limits"></a>
## 4. Classical limits {#section-23-4-classical-limits}

<a id="section-23-worked-example-a-diagonal-reduction-and-an-unselected-g"></a>
### Worked example: a diagonal reduction and an unselected global state {#section-25-worked-example-a-diagonal-reduction-and-an-unselected-g}

An ideal measurement model starts with $(a|0\\rangle+b|1\\rangle)|A_r\\rangle|E_r\\rangle$, $|a|^2+|b|^2=1$, and evolves unitarily to $a|0,A_0,E_0\\rangle+b|1,A_1,E_1\\rangle$. The apparatus vectors encode two orthogonal record states. Tracing the environment leaves diagonal weights $|a|^2,|b|^2$ on $|0,A_0\\rangle,|1,A_1\\rangle$, with cross coefficient $ab^*\\langle E_1|E_0\\rangle$. Orthogonal environment records remove that cross term exactly.

That calculation proves a loss of interference in the selected reduced description. It does not replace the total vector by one branch. In the fully accessible idealized joint space, the operator exchanging $|0,A_0,E_0\\rangle$ and $|1,A_1,E_1\\rangle$ has expectation $2\\operatorname{Re}(a^*b)$ in the coherent total vector but zero in the corresponding global diagonal mixture. The two global models can share the same reduced statistics while differing on that joint observable. Practical access may be impossible in the intended environment model, but accessibility and equality of global states are different propositions.

This separates the proved partial-trace result, the physical claim that the environment produces approximately orthogonal records, and the interpretive or additional dynamical account of a definite outcome. A diagonal subsystem density operator alone settles only its own operational predictions. No appeal to the word decoherence supplies a missing state-update or ontology postulate.

Classical behavior can emerge through narrow wave packets, semiclassical action scales, decoherence-selected observables, coarse graining, and law-of-large-number effects. There is no single limit $\\hbar=0$ that covers every system and observable. Chaos, long time, singular potentials, and measurement resolution can make limits nonuniform.

<a id="section-33-5-relativistic-and-field-boundaries"></a>
## 5. Relativistic and field boundaries {#section-35-5-relativistic-and-field-boundaries}

<a id="section-35-worked-example-an-exact-classical-center-with-a-spreadi"></a>
### Worked example: an exact classical center with a spreading packet {#section-37-worked-example-an-exact-classical-center-with-a-spreadi}

For a free particle and an initial unchirped Gaussian with center $x_0$, mean momentum $p_0$, and position variance $\\sigma_0^2$, the Heisenberg identities are $P(t)=P$ and $Q(t)=Q+tP/m$ on the Gaussian's invariant regular domain. The centered position-momentum covariance is zero and $\\Delta P^2=\\hbar^2/(4\\sigma_0^2)$. Expanding the square therefore gives

$$\\langle Q\\rangle_t=x_0+\\frac{p_0t}{m},\\qquad
\\Delta Q(t)^2=\\sigma_0^2+\\frac{\\hbar^2t^2}{4m^2\\sigma_0^2}.$$

The center follows a classical free trajectory exactly, while the width grows. If an observation model calls the packet localized only while its standard deviation is at most $\\delta>\\sigma_0$, this criterion holds only up to $|t|\\le(2m\\sigma_0/\\hbar)\\sqrt{\\delta^2-\\sigma_0^2}$. Thus an exact mean equation is insufficient for an indefinitely localized classical particle model.

A formal small-action-scale family can make the fixed-time spread small: take initial variance proportional to $\\hbar$ with a fixed dimensional proportionality constant. Both terms above then shrink at fixed $t$. On time scales growing like the inverse square root of that small parameter, the spreading contribution can remain macroscopic. The limit is therefore not automatically uniform in duration. Physical classicality additionally depends on which observables and resolutions matter; replacing $\\hbar$ by zero in a formula does not establish those choices or the behavior of an actual apparatus.

Nonrelativistic single-particle quantum mechanics does not consistently describe particle creation, relativistic localization, or interacting quantum fields. Quantum field theory assigns operators or algebras to fields and regions, with renormalization and construction status explicit. A finite qubit model can simulate selected dynamics without thereby being the microscopic theory of nature.

<a id="section-48-6-evidence-dossier"></a>
## 6. Evidence dossier {#section-50-6-evidence-dossier}

<a id="section-50-worked-example-postselection-hides-an-omitted-level"></a>
### Worked example: postselection hides an omitted level {#section-52-worked-example-postselection-hides-an-omitted-level}

Use a three-level preparation $\\rho=(1-\\epsilon)|0\\rangle\\langle0|+\\epsilon|2\\rangle\\langle2|$, $0<\\epsilon<1$, and a detector that retains only the subspace $P=|0\\rangle\\langle0|+|1\\rangle\\langle1|$. The retained probability is $\\operatorname{Tr}(P\\rho)=1-\\epsilon$. Conditional on retention, $P\\rho P/(1-\\epsilon)=|0\\rangle\\langle0|$, giving perfect ground-state fidelity in every retained two-level record, for any leakage fraction.

An assertion of perfect **conditional** qubit preparation is therefore internally correct. An assertion that the full preparation never occupies the third level is false in this model. For $H=E|2\\rangle\\langle2|$, $E>0$, the unconditional mean energy is $\\epsilon E$, while the retained conditional mean is zero. Both calculations use the same quantum rules but answer different conditioning questions. Recovering the missing probability requires an unconditional trial count or a calibrated loss effect; a normalization inside the retained subspace cannot reveal it.

This is an analytic counterexample, not a report of measured detector behavior. A capstone using postselection should carry the success probability and discarded categories through resource and uncertainty accounting. Otherwise a model of conditional statistics is silently promoted to a claim about every physical trial. The distinction is mathematical before it becomes a question of experimental quality or interpretation.

Every serious result should identify:

1. state space, domain, boundary, and units;
2. preparation, controls, and observable or instrument;
3. exact theorem versus approximation and error regime;
4. numerical residual and convergence evidence;
5. sampling model, uncertainty, and calibration;
6. omitted degrees of freedom and falsifying tests;
7. interpretation-dependent additions;
8. reproducible data, code, and reporting route.

<a id="section-69-7-reproducibility-and-responsibility"></a>
## 7. Reproducibility and responsibility {#section-71-7-reproducibility-and-responsibility}

<a id="section-71-worked-example-a-witness-a-bell-setting-and-their-diffe"></a>
### Worked example: a witness, a Bell setting, and their different conclusions {#section-73-worked-example-a-witness-a-bell-setting-and-their-diffe}

For the two-qubit family $\\rho_p=p|\\Phi^+\\rangle\\langle\\Phi^+|+(1-p)I/4$, take $p=1/2$. Its Bell fidelity is $5/8$, so the trusted witness $W=I/2-|\\Phi^+\\rangle\\langle\\Phi^+|$ has expectation $-1/8$. The composite chapter proved that this negativity certifies entanglement in the declared two-qubit model. Yet the CHSH settings attaining the pure Bell maximum give only $S=\\sqrt2<2$ here. These results are compatible: the preparation is entangled but that displayed Bell setting test does not violate its local bound.

The witness can be evaluated through $F=[1+\\langle X\\otimes X\\rangle-\\langle Y\\otimes Y\\rangle+\\langle Z\\otimes Z\\rangle]/4$. If all three calibrated correlation estimates have absolute error at most $\\eta$ with a stated joint confidence, then the fidelity error is at most $3\\eta/4$. The analytic margin $1/8$ above the separable threshold remains positive when $\\eta<1/6$. This is a deterministic propagation of already justified intervals, not a confidence statement manufactured from no data. The input intervals still need a sampling and calibration model.

A reliable interpretation-neutral conclusion would identify the trusted subsystem dimension and Pauli measurement model for the witness, report the separate CHSH setting and uncertainty, and stop short of selecting a quantum interpretation or inferring a unique noise mechanism. Fitting this one-parameter family may be useful, but matching its few moments does not prove every feature of the full preparation. The worked numbers are exact consequences of the specified density matrix; they are not invented observations, or hardware performance evidence.

Do not overstate precision, hide excluded data, or convert a simulated ideal effect into a hardware claim. Preserve null results and failed diagnostics. Quantum sensing, communication, and computation claims should include classical baselines and end-to-end resource accounting, not only an oracle or gate count.

<a id="section-81-more-samples-cannot-repair-an-uninformative-measurement"></a>
## More samples cannot repair an uninformative measurement family {#section-83-more-samples-cannot-repair-an-uninformative-measurement}

Prepare a qubit and measure only Z, regardless of
how many repetitions are available. The positive-X
state, the negative-X state and the maximally mixed
state all give equal probabilities for the two
Z outcomes. Infinite data of this one kind would
identify those probabilities exactly while leaving
the three preparations indistinguishable by the
allowed record. This is structural nonidentifiability,
rather than a large sampling error.

The two pure states are orthogonal and can be
perfectly distinguished by an X measurement. Thus
a small or zero discrepancy in the recorded
probabilities does not bound the distance between
the underlying states unless the measurement family
has an appropriate reconstruction property. Adding
X separates this pair, while Y is needed to
resolve the remaining imaginary coherence of a
general qubit. The familiar three Bloch coordinates
are precisely the missing independent real data.

In finite dimension, effects identify a trace-one
Hermitian matrix uniquely when their real linear
span, together with the identity constraint, separates
all traceless Hermitian differences. To see necessity,
a nonzero traceless difference orthogonal to every
effect produces no probability change. Small multiples
of that difference can be added to and subtracted
from the maximally mixed state while retaining
positivity, giving distinct physical states with
identical data. Conversely, if the only such
difference is zero, equal probabilities force equal
states. This is a linear identifiability statement;
stable reconstruction additionally depends on conditioning.

The same distinction applies to a process claim.
A few preparations and measurements may identify
some transition probabilities while leaving the
channel's action on coherence unresolved. No
number of repetitions of the identical incomplete
protocol fills that missing direction. A complete
evidence dossier should therefore describe the
span of probed inputs and effects, as well as
the uncertainty of their observed frequencies.
Precision and informational completeness solve
different problems, and a mathematical conclusion
should state which of them has been established.

<a id="section-131-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-133-exercises-with-complete-solutions}

<a id="foundations-capstone-boundaries-ex-1"></a>

<a id="section-135-1-layer-classification"></a>
### 1. Layer classification {#section-137-1-layer-classification}
“$H$ Hermitian implies unitary finite-dimensional evolution” belongs to which layer?

<details>
<summary>Hint 1</summary>

Identify the equation and hypotheses from which the statement follows.

</details>

<details>
<summary>Hint 2</summary>

No detector or physical preparation has been identified by the algebra alone.

</details>

<details>
<summary>Full solution</summary>

Internal mathematical claim, given the stated equation and finite-dimensional hypotheses.

</details>

<a id="foundations-capstone-boundaries-ex-2"></a>

<a id="section-161-2-device-mapping"></a>
### 2. Device mapping {#section-163-2-device-mapping}
“This pulse realizes $X$” belongs to which layer?

<details>
<summary>Hint 1</summary>

A mathematical matrix label does not identify a waveform.

</details>

<details>
<summary>Hint 2</summary>

A device claim maps controls to that matrix and needs evidence for the mapping.

</details>

<details>
<summary>Full solution</summary>

Model and empirical layers; calibration data are required.

</details>

<a id="foundations-capstone-boundaries-ex-3"></a>

<a id="section-187-3-born-frequency"></a>
### 3. Born frequency {#section-189-3-born-frequency}
What additional assumption connects a probability to observed frequency?

<details>
<summary>Hint 1</summary>

Probabilities specify a distribution rather than one observed frequency.

</details>

<details>
<summary>Hint 2</summary>

Inference needs a repeated-trial model and a declared uncertainty method.

</details>

<details>
<summary>Full solution</summary>

A repeated-trial statistical model with stable preparation and measurement, plus an inference procedure.

</details>

<a id="foundations-capstone-boundaries-ex-4"></a>

<a id="section-213-4-interpretation-neutrality"></a>
### 4. Interpretation neutrality {#section-215-4-interpretation-neutrality}
Does the calculation of a Stern–Gerlach probability alone choose an interpretation?

<details>
<summary>Hint 1</summary>

The operational probability can be common to several accounts of state and outcome.

</details>

<details>
<summary>Hint 2</summary>

An interpretation requires additional precise assumptions.

</details>

<details>
<summary>Full solution</summary>

No. Several interpretations reproduce the same operational distribution.

</details>

<a id="foundations-capstone-boundaries-ex-5"></a>

<a id="section-239-5-decoherence"></a>
### 5. Decoherence {#section-241-5-decoherence}
What does it robustly explain?

<details>
<summary>Hint 1</summary>

Trace the environment and examine the coherence multiplier.

</details>

<details>
<summary>Hint 2</summary>

Its small overlap suppresses selected reduced interference terms.

</details>

<details>
<summary>Full solution</summary>

Suppression of subsystem interference and emergence of stable record bases under a model of environmental coupling.

</details>

<a id="foundations-capstone-boundaries-ex-6"></a>

<a id="section-265-6-outcome-boundary"></a>
### 6. Outcome boundary {#section-267-6-outcome-boundary}
Does a diagonal reduced density matrix by itself select one experienced result?

<details>
<summary>Hint 1</summary>

The global unitary state may still be a coherent sum.

</details>

<details>
<summary>Hint 2</summary>

The first worked example separates its reduction from a selected global branch.

</details>

<details>
<summary>Full solution</summary>

Not without an additional interpretive or dynamical account.

</details>

<a id="foundations-capstone-boundaries-ex-7"></a>

<a id="section-291-7-classical-packet"></a>
### 7. Classical packet {#section-293-7-classical-packet}
Does a localized packet always follow a classical trajectory forever?

<details>
<summary>Hint 1</summary>

An exact center equation does not control packet width.

</details>

<details>
<summary>Hint 2</summary>

Use the free-Gaussian variance formula and its duration dependence.

</details>

<details>
<summary>Full solution</summary>

No. It can spread, interfere, encounter nonlinear dynamics, or leave the semiclassical regime.

</details>

<a id="foundations-capstone-boundaries-ex-8"></a>

<a id="section-317-8-small-hbar"></a>
### 8. Small $\\hbar$ {#section-319-8-small-hbar}
Is setting $\\hbar=0$ in every formula a valid derivation?

<details>
<summary>Hint 1</summary>

An action parameter can appear in both phases and the state family.

</details>

<details>
<summary>Hint 2</summary>

The resulting limit may fail to be uniform in time or near singular regions.

</details>

<details>
<summary>Full solution</summary>

No. Limits may be singular and states or observables may scale with $\\hbar$.

</details>

<a id="foundations-capstone-boundaries-ex-9"></a>

<a id="section-343-9-qubit-simulation"></a>
### 9. Qubit simulation {#section-345-9-qubit-simulation}
Does simulating a field-theory Hamiltonian make a qubit literally that field?

<details>
<summary>Hint 1</summary>

A simulation comes with a map between a target model and a finite device representation.

</details>

<details>
<summary>Hint 2</summary>

Agreement of selected dynamics does not identify the device with the simulated ontology.

</details>

<details>
<summary>Full solution</summary>

No. It realizes a mapped effective dynamics under assumptions and error limits.

</details>

<a id="foundations-capstone-boundaries-ex-10"></a>

<a id="section-369-10-particle-creation"></a>
### 10. Particle creation {#section-371-10-particle-creation}
Can fixed-particle-number wave mechanics describe it fundamentally?

<details>
<summary>Hint 1</summary>

A fixed-particle Hilbert space omits other number sectors.

</details>

<details>
<summary>Hint 2</summary>

A theory with creation processes needs those additional degrees of freedom and its own consistency conditions.

</details>

<details>
<summary>Full solution</summary>

No. A quantum field framework is required.

</details>

<a id="foundations-capstone-boundaries-ex-11"></a>

<a id="section-395-11-exact-algebra"></a>
### 11. Exact algebra {#section-397-11-exact-algebra}
Can exact algebra validate omitted levels?

<details>
<summary>Hint 1</summary>

The proof quantifies behavior only inside its chosen Hilbert space.

</details>

<details>
<summary>Hint 2</summary>

The postselection example has exact conditional qubit algebra while hiding a populated third level.

</details>

<details>
<summary>Full solution</summary>

No. Exactness is internal to the chosen truncated model.

</details>

<a id="foundations-capstone-boundaries-ex-12"></a>

<a id="section-421-12-residual"></a>
### 12. Residual {#section-423-12-residual}
What does a small eigenpair residual establish?

<details>
<summary>Hint 1</summary>

The residual uses a particular finite operator.

</details>

<details>
<summary>Hint 2</summary>

Its boundary, truncation and physical assumptions remain separate.

</details>

<details>
<summary>Full solution</summary>

Accuracy for the discrete algebraic eigenproblem, not automatically the continuum or physical model.

</details>

<a id="foundations-capstone-boundaries-ex-13"></a>

<a id="section-447-13-uncertainty"></a>
### 13. Uncertainty {#section-449-13-uncertainty}
Why report calibration and sampling separately?

<details>
<summary>Hint 1</summary>

Random sampling scatter can shrink with more independent data.

</details>

<details>
<summary>Hint 2</summary>

A systematic calibration offset need not shrink under the same procedure.

</details>

<details>
<summary>Full solution</summary>

Systematic model error and random sampling error behave differently and require different remedies.

</details>

<a id="foundations-capstone-boundaries-ex-14"></a>

<a id="section-473-14-falsifier"></a>
### 14. Falsifier {#section-475-14-falsifier}
Give one for a two-level model.

<details>
<summary>Hint 1</summary>

Identify a prediction enforced by remaining in the two-level subspace.

</details>

<details>
<summary>Hint 2</summary>

An unconditional calibrated third-level outcome contradicts it.

</details>

<details>
<summary>Full solution</summary>

Detectable leakage into a third level under the stated control regime.

</details>

<a id="foundations-capstone-boundaries-ex-15"></a>

<a id="section-499-15-baseline"></a>
### 15. Baseline {#section-501-15-baseline}
Why include a classical baseline in a quantum algorithm claim?

<details>
<summary>Hint 1</summary>

A speedup compares complete tasks at a stated accuracy and input model.

</details>

<details>
<summary>Hint 2</summary>

Include preprocessing, access and relevant classical resource costs.

</details>

<details>
<summary>Full solution</summary>

Speedup is comparative and depends on input access, accuracy, hardware, preprocessing, and the best relevant classical method.

</details>

<a id="foundations-capstone-boundaries-ex-16"></a>

<a id="section-525-16-postselection"></a>
### 16. Postselection {#section-527-16-postselection}
Why report discarded trials?

<details>
<summary>Hint 1</summary>

The retained conditional state need not represent all original trials.

</details>

<details>
<summary>Hint 2</summary>

Report its success probability and how discarded categories enter the claim.

</details>

<details>
<summary>Full solution</summary>

Selection can bias distributions, efficiencies, and apparent performance.

</details>

<a id="foundations-capstone-boundaries-ex-17"></a>

<a id="section-551-17-null-result"></a>
### 17. Null result {#section-553-17-null-result}
Why preserve it?

<details>
<summary>Hint 1</summary>

A null observation can rule out predictions or constrain parameters.

</details>

<details>
<summary>Hint 2</summary>

Selecting only favorable outcomes changes the evidence available to a reader.

</details>

<details>
<summary>Full solution</summary>

It constrains models, reduces reporting bias, and permits reproducible assessment.

</details>

<a id="foundations-capstone-boundaries-ex-18"></a>

<a id="section-577-18-interpretive-postulate"></a>
### 18. Interpretive postulate {#section-579-18-interpretive-postulate}
What should accompany an interpretation label?

<details>
<summary>Hint 1</summary>

Different variants can share a familiar interpretation name.

</details>

<details>
<summary>Hint 2</summary>

Write the actual state, ontology or update assumptions and any distinct predictions.

</details>

<details>
<summary>Full solution</summary>

Precise ontology or dynamical/state-update assumptions and any empirical differences.

</details>

<a id="foundations-capstone-boundaries-ex-19"></a>

<a id="section-603-19-scope-sentence"></a>
### 19. Scope sentence {#section-605-19-scope-sentence}
What belongs in one?

<details>
<summary>Hint 1</summary>

Name the degrees of freedom and the regime in which the claim applies.

</details>

<details>
<summary>Hint 2</summary>

Also state the approximation and which observations could reveal a failure.

</details>

<details>
<summary>Full solution</summary>

Regime, included degrees of freedom, approximations, tested observables, and known failure modes.

</details>

<a id="foundations-capstone-boundaries-ex-20"></a>

<a id="section-629-20-release-status"></a>
### 20. Release status {#section-631-20-release-status}
Does a complete draft equal a reviewed reference?

<details>
<summary>Hint 1</summary>

Source completion is only one production fact.

</details>

<details>
<summary>Hint 2</summary>

Independent review and the separate quality/release work require their own evidence.

</details>

<details>
<summary>Full solution</summary>

No. Independent mathematical, exercise, citation, accessibility, copy, and reproducibility audits remain distinct gates.

</details>

<a id="section-653-capstone-one-quantum-claim-end-to-end"></a>
## Capstone: one quantum claim, end to end {#section-655-capstone-one-quantum-claim-end-to-end}

Choose a two-level control, bound-state spectrum, tunneling experiment, entanglement witness, open-system decay, or numerical simulation. Produce a self-contained dossier containing derivation, dimensions, state and operator domains, complete solutions to one analytic benchmark, dependency-free computation, convergence and residual tables, accessible descriptions of visuals, an uncertainty model, classical or null baseline, model-breakdown tests, and an interpretation-neutral conclusion. Add a final ledger separating proved mathematics, numerical evidence, empirical evidence, and interpretive assumptions. A peer must be able to rerun the computation and identify which observation would falsify the model claim.

<a id="section-657-chapter-summary"></a>
## Chapter summary {#section-659-chapter-summary}

Quantum work becomes trustworthy when mathematics, model mapping, empirical inference, and interpretation are kept distinct. Decoherence, semiclassical limits, and simulation explain important transitions without erasing their hypotheses. The capstone turns those boundaries into a reproducible evidence practice.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=numerical-quantum-dynamics) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};