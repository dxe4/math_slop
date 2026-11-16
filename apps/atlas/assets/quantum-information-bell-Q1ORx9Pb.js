var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: quantum-information-bell
title: "Quantum Information, Bell Tests, and No-Signalling"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
status: draft
---

# Quantum Information, Bell Tests, and No-Signalling

Quantum information treats states and channels as resources for communication, computation, and inference. Bell inequalities isolate correlations incompatible with a specified local hidden-variable model. Their violation does not enable signalling and does not remove the need to audit setting choice, detection, timing, and statistical analysis.

## 1. Classical and quantum bits

A classical bit stores one of two distinguishable values or a probability distribution over them. A qubit supports superposition, but measurement does not reveal both complex amplitudes from one specimen. Tomography needs repeated preparations. The no-cloning theorem prevents a universal device from copying unknown pure states.

If unitary $U$ cloned both $|\\psi\\rangle$ and $|\\phi\\rangle$, inner products would require $\\langle\\psi|\\phi\\rangle=\\langle\\psi|\\phi\\rangle^2$ after consistent phase choices. Taking magnitudes gives $|\\langle\\psi|\\phi\\rangle|=|\\langle\\psi|\\phi\\rangle|^2$, possible only for orthogonal rays or the same ray. Thus distinct nonorthogonal states cannot be cloned.

## 2. Entropy and data processing

Allowing an apparatus or discarded environment does not evade exact deterministic no-cloning. By finite dilation, the global output for a pure input is an isometric image. If the two desired copies are pure, the Schmidt theorem forces this image to factor as $|\\psi\\rangle|\\psi\\rangle|e_\\psi\\rangle$. For two inputs with overlap magnitude $s$, preservation of the global inner product gives $s=s^2|\\langle e_\\psi|e_\\phi\\rangle|\\le s^2$. This is impossible for $0<s<1$. Orthogonal states can be copied because their overlap is zero; identical rays are the same input state. The proof concerns exact deterministic copies and does not establish bounds for every approximate or postselected copying task.

Von Neumann entropy measures spectral mixedness. Mutual information $I(A:B)=S(A)+S(B)-S(AB)$ is nonnegative and cannot increase under local channels. Data processing formalizes that discarding or noisily transforming data cannot improve every distinguishability task.

## 3. Teleportation scope

The nonnegativity and local-channel monotonicity of mutual information use a further theorem, not the elementary no-cloning argument. In finite dimensions define relative entropy $D(\\rho\\|\\sigma)=\\operatorname{Tr}\\rho(\\log\\rho-\\log\\sigma)$ when the first support is contained in the second, and infinity otherwise. The relative-entropy nonnegativity and data-processing theorems are cited inputs here. The identity

$$I(A:B)=D(\\rho_{AB}\\|\\rho_A\\otimes\\rho_B)$$

follows by expanding the tensor-product logarithm on its support and applying the partial-trace identities. Applying relative-entropy data processing to a local channel proves the stated monotonicity. Chapter 16 separately proved trace-distance contraction directly; that is not a proof of the stronger relative-entropy theorem.

For a product state the eigenvalues are products of subsystem eigenvalues, so $S(AB)=S(A)+S(B)$ and $I=0$. For a Bell projector, global entropy is zero and both local entropies are one bit, giving $I=2$ bits. The incoherent correlated state $(|00\\rangle\\langle00|+|11\\rangle\\langle11|)/2$ has local entropies one and global entropy one, giving $I=1$ bit. These are correlation measures of joint states, not claims that one local qubit reveals two classical bits or its amplitudes from one specimen.

Teleportation consumes a shared entangled pair and two classical bits to transfer an unknown qubit state under ideal operations. No material object or usable information travels faster than the classical message. The protocol does not clone the input; the original is consumed by measurement.

## 4. CHSH inequality

The full ideal teleportation expansion is proved in the [composite-system chapter](tensor-products-entanglement.md). It decomposes the input and shared Bell pair into four orthogonal local Bell outcomes, with remote states $\\psi,Z\\psi,X\\psi,XZ\\psi$. Each outcome has probability one quarter. Without the two-bit record the average remote state is $I/2$, independent of the unknown input. With the record, the corresponding unitary correction recovers the input ray. The protocol consumes one entangled pair and the original input through measurement; it is state transfer under a declared instrument model, not a cloning counterexample. Calibration, resource preparation and channel errors are separate implementation questions.

Let parties choose settings $x,y$ and obtain outcomes $A_x,B_y$ in $\\pm 1$. A local hidden-variable model with measurement independence gives

$|S|=|E(A_0B_0)+E(A_0B_1)+E(A_1B_0)-E(A_1B_1)|\\leq 2$.

For each hidden variable, the corresponding algebraic combination is $\\pm2$; averaging proves the bound. Quantum observables can reach $2\\sqrt{2}$ but not four.

## 5. No-signalling

For precision, a stochastic local model factorizes as $p(a,b|x,y,\\lambda)=p_A(a|x,\\lambda)p_B(b|y,\\lambda)$ with one setting-independent hidden-variable distribution. Conditional sign means $a_x(\\lambda),b_y(\\lambda)$ lie in $[-1,1]$. Its conditional CHSH combination is $a_0(b_0+b_1)+a_1(b_0-b_1)$, whose absolute value is at most $|b_0+b_1|+|b_0-b_1|=2\\max(|b_0|,|b_1|)\\le2$. Integrating with the same hidden-variable distribution proves the bound even for stochastic responses. Measurement independence is what permits that same averaging measure across settings; it is a specific model assumption, not a theorem about every imaginable correlation with the setting generator.

The earlier composite-source sign convention was $E(a,b)-E(a,b')+E(a',b)+E(a',b')$. It is the same CHSH family after reversing the outcome labels of the second $B$ setting. Outcome relabeling changes the written signs, not the local bound or quantum maximum.

### Proof of the quantum bound

Let $A_x,B_y$ be Hermitian contractions on finite subsystem spaces; binary POVMs give such operators by subtracting their effects. Put $u_x=(A_x\\otimes I)\\sqrt\\rho$ and $v_y=(I\\otimes B_y)\\sqrt\\rho$ in Hilbert–Schmidt space. Their norms are at most one, and $\\langle u_x,v_y\\rangle=\\operatorname{Tr}[\\rho(A_x\\otimes B_y)]$ is the real correlation. Cauchy–Schwarz and the parallelogram identity give

$$|S|\\le\\|v_0+v_1\\|+\\|v_0-v_1\\|
\\le\\sqrt{2(\\|v_0+v_1\\|^2+\\|v_0-v_1\\|^2)}
=2\\sqrt{\\|v_0\\|^2+\\|v_1\\|^2}\\le2\\sqrt2.$$

This proves Tsirelson's bound for mixed states and unsharp binary effects as well as pure projective cases. For sharp observables squaring to identity, the operator $\\mathcal B=A_0\\otimes(B_0+B_1)+A_1\\otimes(B_0-B_1)$ also satisfies $\\mathcal B^2=4I-[A_0,A_1]\\otimes[B_0,B_1]$. Expanding the products proves this identity; bounding both commutators by two gives the same result. The extra quantum restriction beyond the algebraic maximum follows from Hilbert-space and operator structure, not from no-signalling alone.

### Worked example: attain the bound on a Bell pair

Use $|\\Phi^+\\rangle$, $A_0=Z$, $A_1=X$, $B_0=(Z+X)/\\sqrt2$, $B_1=(Z-X)/\\sqrt2$. Both Bob observables square to identity by Pauli anticommutation. The Bell state has $\\langle Z\\otimes Z\\rangle=\\langle X\\otimes X\\rangle=1$ and both mixed $XZ$ correlations zero. Therefore $(E_{00},E_{01},E_{10},E_{11})=(1,1,1,-1)/\\sqrt2$ and $S=2\\sqrt2$. Every local outcome distribution remains uniform because the reductions are $I/2$. The correlation changes with the pair of settings, while neither party controls its own random sign or sees the other's setting in its marginal.

### Worked example: entanglement without this setting violation

For $\\rho_p=p|\\Phi^+\\rangle\\langle\\Phi^+|+(1-p)I/4$, all the displayed Pauli correlations scale by $p$, so the same setting choice gives $S=2\\sqrt2p$. Its CHSH violation requires $p>1/\\sqrt2$. The composite chapter's explicit witness and separable decomposition proved that this family is entangled already for $p>1/3$. Thus the intermediate interval supplies entangled preparations failing this particular setting criterion. Conversely a poor choice such as repeated identical settings can fail to violate even on a perfect Bell state. A nonviolation is a statement about a specified preparation-and-measurement experiment, not a proof of separability.

### Worked example: no-signalling permits a larger mathematical box

For bits $x,y,a,b$, assign probability one half to each output pair satisfying $a\\mathbin\\oplus b=xy$, and zero to the others. Each local marginal is uniform independently of the distant setting. With signs $A=(-1)^a$, $B=(-1)^b$, the correlations are $E_{xy}=(-1)^{xy}$, so the CHSH value is four. These probabilities satisfy no-signalling but violate the proved quantum bound. This is a mathematical comparison model, not a realizable quantum resource. It demonstrates that no-signalling alone does not characterize the set of quantum correlations.

The marginal distribution of one party is independent of the distant setting when local operations are trace preserving and outcomes are not conditioned on uncommunicated distant results. Bell nonlocality rejects the joint local-causal factorization under assumptions; it does not provide controllable superluminal communication.

## 6. Experimental inference

The no-signalling statement follows from the local trace-preserving Kraus proof in Chapter 14: every distant unconditioned operation leaves the reduced state and hence all local effects' probabilities unchanged. Conditional subensembles can change after a distant result is communicated. Combining those records exposes correlations but cannot retrospectively turn an unobserved random result into a controllable signal. Local factorization, quantum realizability, and no-signalling are therefore three different constraints, as the explicit examples show.

A simple statistical calculation illustrates the scope of an ideal data claim. Suppose four predeclared setting cells have fixed counts $N_{xy}$ and independent identically distributed sign products within each cell. Hoeffding's bounded-variable inequality gives $\\Pr(|\\widehat E_{xy}-E_{xy}|>\\epsilon)\\le2e^{-N_{xy}\\epsilon^2/2}$. A union bound makes all four errors at most $\\epsilon$ except with probability $8e^{-N_{\\min}\\epsilon^2/2}$, and then $|\\widehat S-S|\\le4\\epsilon$. This is a fixed-sample stationary model calculation, using Hoeffding as a probability input. It is not a complete analysis for memory, adaptive settings, discarded trials or optional stopping. Those require a probability model and method that actually covers the protocol used.

A Bell-test claim must define trial formation, setting generation, spacelike separation, detector handling, stopping rule, memory assumptions or martingale analysis, and uncertainty. Loophole-free means major locality and detection loopholes are jointly addressed under stated assumptions, not that every conceivable alternative is disproved.

Landmark 2015 examples that jointly addressed the major locality and detection loopholes under their stated experimental and statistical assumptions include Hensen et al. (https://doi.org/10.1038/nature15759), Giustina et al. (https://doi.org/10.1103/PhysRevLett.115.250401), and Shalm et al. (https://doi.org/10.1103/PhysRevLett.115.250402). They are bounded historical examples, not a claim about the latest experimental record.

## Setting-dependent postselection can imitate a stronger-than-quantum box

A finite hidden-variable example shows why the retained sample must
be specified. Let the shared hidden variable be three independent
fair bits u,v,r. Alice receives a chosen setting x and reports
an outcome only if x=u; when she reports it, its sign is
(−1)ʳ. Bob reports only if his setting y=v; his reported sign
is (−1) raised to r+uv. Otherwise each device reports no
detection. These rules are local: Alice uses only her setting
and the shared variable, and Bob uses only his setting and
the shared variable. Neither needs the other actual setting.

For any fixed setting pair, both detectors report with probability
one quarter. Conditional on that coincidence, the hidden labels
must equal the chosen settings, so the product of the two
signs is (−1)ˣʸ. The retained correlations therefore give the
CHSH combination four. Each retained local sign is unbiased,
so the postselected table also has the familiar no-signalling
marginals. Yet the complete detection model was constructed
using an ordinary local hidden variable.

The apparent contradiction is resolved by conditioning. Different
setting pairs retain different subsets of the hidden-variable
population. The one setting-independent distribution used in the
binary-outcome CHSH proof is no longer the distribution of
the accepted data. Even equal coincidence rates for every
setting pair do not rule out this selection mechanism; the
example has those equal rates exactly.

For another explicit comparison, assign every no-detection event
the outcome plus one and retain every trial. Single-detection
events average to zero correlation because r is fair. Double
non-detection contributes one quarter, and coincidences contribute
one quarter times (−1)ˣʸ. The full correlation is therefore
one half for the three pairs with xy=0 and zero for the
remaining pair. Its CHSH value is three halves, safely
within the local bound. The stronger retained value came
from selection, not from nonlocality in this model.

This calculation is a logical counterexample to an inference,
not a model of any particular apparatus. A real Bell analysis
must supply its trial definition, detection treatment and
assumptions about setting selection and records. When those
assumptions justify the binary-outcome inequality on the actual
analysed sample, a violation has its stated significance.
When trials are discarded according to an uncontrolled
setting-dependent rule, the retained correlations alone are
insufficient. The probability model and the acceptance rule
belong to the mathematical claim as much as the correlation
formula does.

## Exercises with complete solutions

<a id="quantum-information-bell-ex-1"></a>

### 1. Orthogonal copying
Can a unitary copy $|0\\rangle,|1\\rangle$?

<details>
<summary>Hint 1</summary>

Use a controlled-NOT with the first register as control and an initially zero target.

</details>

<details>
<summary>Hint 2</summary>

The basis vectors are orthogonal, so the no-cloning overlap obstruction does not apply.

</details>

<details>
<summary>Full solution</summary>

Yes. A controlled-NOT with blank target $|0\\rangle$ maps $|00\\rangle$ to $|00\\rangle$ and $|10\\rangle$ to $|11\\rangle$.

</details>

<a id="quantum-information-bell-ex-2"></a>

### 2. Inner-product proof
Why does cloning square overlap?

<details>
<summary>Hint 1</summary>

The tensor-product inner product factors into one overlap per desired copy.

</details>

<details>
<summary>Hint 2</summary>

The same fixed blank and any state-dependent environment record must also respect the global isometry.

</details>

<details>
<summary>Full solution</summary>

The output overlap is $\\langle \\psi|\\phi\\rangle\\langle \\psi|\\phi\\rangle$, while unitarity preserves the input overlap.

</details>

<a id="quantum-information-bell-ex-3"></a>

### 3. Nonorthogonal cloning
Can states with overlap $1/2$ both be cloned?

<details>
<summary>Hint 1</summary>

Compare the preserved overlap magnitude with its required squared value.

</details>

<details>
<summary>Hint 2</summary>

A further environment overlap can only reduce the squared value.

</details>

<details>
<summary>Full solution</summary>

No, because $1/2 \\neq (1/2)^2$.

</details>

<a id="quantum-information-bell-ex-4"></a>

### 4. One specimen
Can one measurement reconstruct an arbitrary qubit?

<details>
<summary>Hint 1</summary>

One random outcome is not a list of all possible measurement probabilities.

</details>

<details>
<summary>Hint 2</summary>

An informationally complete reconstruction requires repeated preparations and a statistical procedure.

</details>

<details>
<summary>Full solution</summary>

No. Outcomes are random and a single result cannot determine continuous state parameters.

</details>

<a id="quantum-information-bell-ex-5"></a>

### 5. Product mutual information
What is $I(A:B)$ for $\\rho_A \\otimes \\rho_B$?

<details>
<summary>Hint 1</summary>

Product-state eigenvalues are products of subsystem eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The entropy sum cancels from the mutual-information definition.

</details>

<details>
<summary>Full solution</summary>

Entropy adds, so it is zero.

</details>

<a id="quantum-information-bell-ex-6"></a>

### 6. Bell pure entropy
What are $S(AB)$ and each local entropy in bits?

<details>
<summary>Hint 1</summary>

The total Bell vector is pure.

</details>

<details>
<summary>Hint 2</summary>

Both local reductions are maximally mixed qubits.

</details>

<details>
<summary>Full solution</summary>

The total pure entropy is zero and each reduction has entropy one.

</details>

<a id="quantum-information-bell-ex-7"></a>

### 7. Bell mutual information
Compute it.

<details>
<summary>Hint 1</summary>

Insert the three entropies from the previous exercise.

</details>

<details>
<summary>Hint 2</summary>

Use bits consistently throughout.

</details>

<details>
<summary>Full solution</summary>

$1+1-0=2$ bits.

</details>

<a id="quantum-information-bell-ex-8"></a>

### 8. Teleportation classical cost
How many classical bits are sent?

<details>
<summary>Hint 1</summary>

The Bell instrument has four possible correction labels.

</details>

<details>
<summary>Hint 2</summary>

Encoding four labels takes two classical bits.

</details>

<details>
<summary>Full solution</summary>

Two in the standard qubit protocol.

</details>

<a id="quantum-information-bell-ex-9"></a>

### 9. Teleportation signalling
Can the receiver recover the state before those bits arrive?

<details>
<summary>Hint 1</summary>

Average the four uncommunicated correction branches.

</details>

<details>
<summary>Hint 2</summary>

The remote state is I over two before receiving the record.

</details>

<details>
<summary>Full solution</summary>

No. Before conditioning, the receiver's state is independent of the input correction label.

</details>

<a id="quantum-information-bell-ex-10"></a>

### 10. CHSH deterministic value
Why is it $\\pm 2$ for fixed outcomes?

<details>
<summary>Hint 1</summary>

Group the expression by the two Alice sign values.

</details>

<details>
<summary>Hint 2</summary>

Exactly one of the sum and difference of two Bob signs vanishes.

</details>

<details>
<summary>Full solution</summary>

Factor as $A_0(B_0+B_1)+A_1(B_0-B_1)$; one parenthesis is zero and the other $\\pm 2$.

</details>

<a id="quantum-information-bell-ex-11"></a>

### 11. Local bound
Why does averaging preserve $|S|\\leq 2$?

<details>
<summary>Hint 1</summary>

Use a common hidden-variable distribution across the four setting combinations.

</details>

<details>
<summary>Hint 2</summary>

The absolute value of an integral is at most the integral of its absolute value.

</details>

<details>
<summary>Full solution</summary>

The absolute value of an average is at most the average absolute value, bounded by two.

</details>

<a id="quantum-information-bell-ex-12"></a>

### 12. Algebraic maximum
What is it?

<details>
<summary>Hint 1</summary>

Bound each of the four correlation terms independently by one.

</details>

<details>
<summary>Hint 2</summary>

This ignores both local and quantum realizability constraints.

</details>

<details>
<summary>Full solution</summary>

Four, since four correlation terms each lie in $[-1,1]$.

</details>

<a id="quantum-information-bell-ex-13"></a>

### 13. Quantum maximum
State the Tsirelson bound.

<details>
<summary>Hint 1</summary>

Use the Hilbert–Schmidt vector proof in the text.

</details>

<details>
<summary>Hint 2</summary>

The parallelogram identity and four unit-norm bounds supply the extra quantum restriction.

</details>

<details>
<summary>Full solution</summary>

$2\\sqrt{2}$ for quantum theory under the CHSH assumptions.

</details>

<a id="quantum-information-bell-ex-14"></a>

### 14. Setting independence
What does it assert?

<details>
<summary>Hint 1</summary>

The same averaging distribution must be used for every setting pair.

</details>

<details>
<summary>Hint 2</summary>

Statistical independence of hidden variables and chosen settings supplies that condition.

</details>

<details>
<summary>Full solution</summary>

Hidden variables relevant to outcomes are statistically independent of the later measurement-setting choices, within the model.

</details>

<a id="quantum-information-bell-ex-15"></a>

### 15. No-signalling marginal
What must remain independent?

<details>
<summary>Hint 1</summary>

Sum the joint distribution over the distant output.

</details>

<details>
<summary>Hint 2</summary>

The resulting local probabilities must not depend on the distant input setting.

</details>

<details>
<summary>Full solution</summary>

One party's outcome distribution must not depend on the other party's setting.

</details>

<a id="quantum-information-bell-ex-16"></a>

### 16. Conditional correlation
Can distant communicated outcomes improve prediction?

<details>
<summary>Hint 1</summary>

Conditioning can correlate a local prediction with an external record.

</details>

<details>
<summary>Hint 2</summary>

The record is obtained through ordinary communication rather than selected remotely at will.

</details>

<details>
<summary>Full solution</summary>

Yes. Correlation appears after comparing records, but communication respects causal limits.

</details>

<a id="quantum-information-bell-ex-17"></a>

### 17. Detection bias
Why can discarded trials matter?

<details>
<summary>Hint 1</summary>

A setting-dependent observed subset need not have the original hidden-variable distribution.

</details>

<details>
<summary>Hint 2</summary>

The local bound must be applied to a protocol whose outcome and trial rules cover that selection.

</details>

<details>
<summary>Full solution</summary>

If detection depends on setting or hidden variables, the observed subset may violate a bound that the full local sample obeys.

</details>

<a id="quantum-information-bell-ex-18"></a>

### 18. Optional stopping
Why report a stopping rule?

<details>
<summary>Hint 1</summary>

A fixed-sample tail bound has a declared sample size and observation rule.

</details>

<details>
<summary>Hint 2</summary>

Data-dependent stopping needs an analysis valid under that additional selection.

</details>

<details>
<summary>Full solution</summary>

Data-dependent stopping can distort nominal significance unless the analysis remains valid under it.

</details>

<a id="quantum-information-bell-ex-19"></a>

### 19. Noise
Does failure to violate CHSH prove separability?

<details>
<summary>Hint 1</summary>

Compare the entangled noise interval with the displayed CHSH setting threshold.

</details>

<details>
<summary>Hint 2</summary>

Failure in one measurement experiment does not characterize the whole state.

</details>

<details>
<summary>Full solution</summary>

No. Some entangled states and poor measurements do not violate that particular inequality.

</details>

<a id="quantum-information-bell-ex-20"></a>

### 20. Interpretation boundary
Does CHSH violation alone choose one interpretation of quantum theory?

<details>
<summary>Hint 1</summary>

The derived contradiction targets a stated probability factorization and independence model.

</details>

<details>
<summary>Hint 2</summary>

Several quantum interpretations share the same measured correlations.

</details>

<details>
<summary>Full solution</summary>

No. It rejects the specified local hidden-variable factorization under experimental assumptions; several quantum interpretations reproduce the statistics.

</details>

## Chapter summary

No-cloning, entropy, and teleportation express operational limits and resources. CHSH separates quantum correlations from a defined local hidden-variable class, while no-signalling prevents controllable faster-than-light communication. Experimental conclusions inherit explicit statistical and causal assumptions.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=open-systems-decoherence) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=perturbation-adiabatic-transitions) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};