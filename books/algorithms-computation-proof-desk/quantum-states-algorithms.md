
# Quantum States, Gates, Measurement, and Algorithmic Claims

Quantum computation is linear algebra plus a precise observation rule and a cost model. Its amplitudes are not probabilities, superposition is not parallel access to every answer, and a speedup claim must compare algorithms solving the same task under comparable input and error conventions.

## 1. One qubit

A pure qubit is a unit vector $\lvert \psi\rangle = \alpha\lvert 0\rangle+\beta\lvert 1\rangle$ in $\mathbb{C}^{2}$, with $\lvert \alpha\rvert^{2}+\lvert \beta\rvert^{2}=1$. Multiplying the whole vector by a phase $e^{i\theta}$ changes no measurement probability and represents the same physical pure state. Relative phase can matter after later gates.

Measuring in the computational basis returns zero with probability $\lvert \alpha\rvert^{2}$ and one with probability $\lvert \beta\rvert^{2}$. The post-measurement state is the observed basis vector in the elementary projective model. Measurement is probabilistic even though gate evolution is linear and deterministic.

## 2. Gates are unitary

A gate matrix $U$ must satisfy $U^{\dagger}U=I$; it preserves inner products and norms and is reversible. The Pauli $X$ gate swaps basis states. The Hadamard gate

\[H=(1/\sqrt{2})[[1,1],[1,-1]]\]

maps $\lvert 0\rangle$ to $\lvert +\rangle$ and $\lvert 1\rangle$ to $\lvert -\rangle$. Applying $H$ twice gives the identity. Measurement between the two applications changes that conclusion because measurement is not a unitary gate.

## 3. Several qubits and tensor products

Two qubits live in $\mathbb{C}^{2} \otimes \mathbb{C}^{2}$, with basis $\lvert 00\rangle,\lvert 01\rangle,\lvert 10\rangle,\lvert 11\rangle$. A product state factors as $\lvert a\rangle \otimes \lvert b\rangle$. Not every pure state factors. The Bell state $(\lvert 00\rangle+\lvert 11\rangle)/\sqrt{2}$ is entangled: if its coefficient array factored, the zero cross coefficients would force one of the two nonzero diagonal coefficients to vanish.

The state dimension is $2^n$. A classical simulator storing arbitrary amplitudes therefore uses exponential space, but that fact alone is not a proof that every quantum process is classically hard.

## 4. Controlled operations and entanglement

Controlled-NOT maps $\lvert a,b\rangle$ to $\lvert a,a\oplus b\rangle$. Starting from $\lvert 00\rangle$, apply $H$ to the first qubit and then CNOT to obtain the Bell state. Measuring either qubit is individually uniform, while joint outcomes agree perfectly. Correlation is not communication: local measurement outcomes cannot be chosen to send a message.

## 5. Interference

Algorithms arrange amplitudes so unwanted alternatives cancel and useful ones reinforce. Probabilities are computed only after summing amplitudes leading to the same observed outcome. This distinguishes quantum interference from a classical mixture, whose probabilities add without phase cancellation.

For $\lvert -\rangle=(\lvert 0\rangle-\lvert 1\rangle)/\sqrt{2}$, applying $H$ yields $\lvert 1\rangle$: the zero amplitude cancels and the one amplitude reinforces.

## 6. Oracles and query claims

An oracle model exposes a unitary encoding of a function, such as $U_f\lvert x,y\rangle=\lvert x,y\oplus f(x)\rangle$. Query complexity counts calls to this oracle; total gate complexity also counts work around it. A query speedup does not automatically include the cost of loading data, building the oracle, error correction, or reading a large classical output.

Deutsch's problem illustrates phase kickback: one query can distinguish whether a promised one-bit Boolean function is constant or balanced, whereas a deterministic classical query algorithm needs two evaluations in the worst case. The promise and query model are essential parts of the theorem.

## 7. Repetition and bounded error

A quantum algorithm may return the right answer with probability at least $2/3$. Independent repetition and majority vote reduce failure exponentially, provided fresh runs and a fixed input. Amplification has gate and sample cost; it does not turn an unbounded-error procedure into a theorem for free.

## 8. Dependency-free state simulator

```python
from math import sqrt

H = ((1 / sqrt(2), 1 / sqrt(2)),
     (1 / sqrt(2), -1 / sqrt(2)))

def apply(matrix, state):
    return tuple(sum(matrix[i][j] * state[j] for j in range(2)) for i in range(2))

def probabilities(state):
    values = tuple(abs(amplitude) ** 2 for amplitude in state)
    if abs(sum(values) - 1) > 1e-12:
        raise ValueError("state is not normalized")
    return values

if __name__ == "__main__":
    zero = (1 + 0j, 0 + 0j)
    plus = apply(H, zero)
    assert all(abs(a - b) < 1e-12 for a, b in zip(probabilities(plus), (0.5, 0.5)))
    restored = apply(H, plus)
    assert abs(restored[0] - 1) < 1e-12 and abs(restored[1]) < 1e-12
```

The simulator is an exact structural example with floating approximation. It does not emulate noise, measurement state update, or scalable hardware.

## 9. Noise and mixed states

Real devices interact with environments. A density matrix represents classical uncertainty over pure states and subsystems of entangled states. Valid density matrices are positive semidefinite with trace one. Quantum channels are completely positive trace-preserving maps. These notions are the correct interface for noise; simply adding a random number to an amplitude may violate normalization or physicality.

Fault-tolerant computation encodes logical information across physical qubits and repeatedly diagnoses errors without learning the encoded value. Threshold theorems have detailed locality and noise hypotheses. “Error correction exists” is not a claim that current hardware runs an arbitrary circuit reliably.

## 10. Claim audit

A quantum algorithm report names input representation, promise, oracle access, output distribution, allowable error, query and gate costs, qubit count, classical preprocessing and postprocessing, and comparison baseline. An implementation report additionally names compilation, connectivity, noise, shots, calibration, and statistical uncertainty.

## 11. The Bloch sphere as a quotient, not a new state space

Every normalized one-qubit pure state can be written

\[\cos(\theta/2)\lvert 0\rangle + e^{i \varphi} \sin(\theta/2)\lvert 1\rangle\]

after removing one global phase, with $0\le \theta\le \pi$ and $0\le \varphi<2\pi$.
The corresponding point $(\sin(\theta)\cos(\varphi), \sin(\theta)\sin(\varphi), \cos(\theta))$
lies on the unit sphere. The sphere is useful because it has already identified
vectors that differ only by global phase. It is not claiming that a qubit is a
classical arrow with a simultaneously definite value in every direction.

For a computational-basis measurement, the north and south components give
probabilities

$P(0)=\cos^{2}(\theta/2)=(1+\cos(\theta))/2$,

$P(1)=\sin^{2}(\theta/2)=(1-\cos(\theta))/2$.

The Pauli gates act as half-turns of this representation: $X$ exchanges the
poles, $Z$ changes the relative phase, and $Y$ combines both effects with a
phase. A general one-qubit unitary induces a rotation of the sphere after its
irrelevant global phase is removed. This geometric statement is a consequence
of unitary linear algebra; it does not make tensor products disappear when
several qubits are present.

**Worked state audit.** Start with $\lvert +\rangle=(\lvert 0\rangle+\lvert 1\rangle)/\sqrt{2}$, located on the
positive $x$ axis. Applying $Z$ gives $\lvert -\rangle=(\lvert 0\rangle-\lvert 1\rangle)/\sqrt{2}$, the negative
$x$ direction. Both states have the same computational-basis distribution.
Applying $H$ afterward reveals the phase: $H\lvert +\rangle=\lvert 0\rangle$ while $H\lvert -\rangle=\lvert 1\rangle$. Thus
“same observed frequencies in one basis” is not “same quantum state.” A state
tomography claim must name an informationally sufficient collection of
measurement settings and sampling uncertainty.

## 12. Phase kickback derived line by line

Let the second register be $\lvert -\rangle$ and let the Boolean oracle act by
$U_f\lvert x,y\rangle=\lvert x,y\oplus f(x)\rangle$. For a basis value $x$,

$U_f(\lvert x\rangle\lvert -\rangle)=(-1)^{f(x)}\lvert x\rangle\lvert -\rangle$.

If $f(x)=0$, the second register is unchanged. If $f(x)=1$, swapping $\lvert 0\rangle$ and
$\lvert 1\rangle$ sends $(\lvert 0\rangle-\lvert 1\rangle)/\sqrt{2}$ to its negative. Linearity then gives

$U_f\sum_x \alpha_x\lvert x\rangle\lvert -\rangle=\sum_x(-1)^{f(x)}\alpha_x\lvert x\rangle\lvert -\rangle$.

The function value has become a relative phase on the first register without
leaving a readable list of all values. A later transform must turn the desired
global property of those phases into a measurable amplitude. Attempting to
measure the first register immediately generally destroys the interference
pattern and returns only one sample.

For Deutsch's one-bit problem, prepare $\lvert +\rangle\lvert -\rangle$. After the oracle, the first
register is proportional to

$(-1)^{f(0)}\lvert 0\rangle+(-1)^{f(1)}\lvert 1\rangle$.

If the function is constant, the two signs agree and the state is $\lvert +\rangle$ up to
global phase. If balanced, the signs disagree and it is $\lvert -\rangle$ up to global
phase. The final Hadamard maps those alternatives to $\lvert 0\rangle$ and $\lvert 1\rangle$. This is
an exact one-query distinction in the ideal oracle model. It is not two hidden
classical evaluations stored for later inspection.

## 13. A complete two-qubit Grover calculation

Unstructured search has an oracle marking one of $N$ basis states. Grover's
iteration combines a phase oracle with reflection about the uniform state. For
$N=4$, start at

\[\lvert s\rangle=(\lvert 00\rangle+\lvert 01\rangle+\lvert 10\rangle+\lvert 11\rangle)/2\]

and suppose $\lvert 10\rangle$ is marked. The phase oracle changes the amplitude list from
$(1/2,1/2,1/2,1/2)$ to $(1/2,1/2,-1/2,1/2)$. Its mean is $1/4$. Reflection
about the mean maps each amplitude $a$ to $2(1/4)-a$. The three unmarked
amplitudes become zero, and the marked amplitude becomes one. One ideal Grover
iteration therefore produces $\lvert 10\rangle$ exactly.

For general $N$, the state remains in the two-dimensional span of the uniform
marked and unmarked states. Write $\sin(\theta)=\sqrt{M/N}$ when $M$ states are
marked. One iteration rotates the state by $2\theta$ in that plane. Choosing
about $\pi/(4\theta)$ iterations makes marked probability large, giving
$\Theta(\sqrt{N/M})$ oracle queries when $M$ is known within the required
convention. Too many iterations rotate past the target; “repeat until found”
is not the algorithm because measurement resets the state and the best count
depends on $M$.

The quadratic query improvement has boundaries. Preparing the uniform state
is cheap for a power-of-two domain, but constructing a predicate oracle may
not be. Returning an index uses only logarithmically many output bits; search
does not promise to read an exponentially large database into amplitudes at no
cost. A fair comparison includes how the input predicate is made available.

## 14. Mixed states, partial information, and channels

A pure state $\lvert \psi\rangle$ has density matrix $\rho=\lvert \psi\rangle\langle \psi\rvert$. A probabilistic
ensemble with state $\lvert \psi_{i}\rangle$ chosen with probability $p_{i}$ has

$\rho=\sum_{i} p_{i} \lvert \psi_{i}\rangle\langle \psi_{i}\rvert$.

Different ensembles can produce the same $\rho$; the matrix, not an unrecorded
story about its preparation, determines all measurement statistics. A
projective measurement with projectors $P_{j}$ has outcome probability
$\operatorname{tr}(P_{j} \rho)$ and, conditional on a nonzero-probability outcome, updated state
$P_{j} \rho P_{j} / \operatorname{tr}(P_{j} \rho)$.

For the Bell state, the joint density matrix is pure, yet either single qubit
has reduced state $I/2$. The reduced state is obtained by the partial trace.
This explains precisely why each local outcome is uniform even though the
joint outcomes are perfectly correlated. It also blocks a signaling mistake:
operations performed without communicating their outcomes on the distant
subsystem leave the local reduced statistics unchanged.

A channel can be represented by Kraus operators $K_r$ satisfying
$\sum_r K_r^{\dagger}K_r=I$, acting as $\rho\mapsto\sum_r K_r\rho K_r^{\dagger}$. For a bit-flip
channel, choose $K_{0}=\sqrt{1-p} I$ and $K_{1}=\sqrt{p} X$. Trace preservation
follows from the completeness equation, and positivity follows from the sum
of positive conjugations. This is a valid noise model; independently adding
Gaussian perturbations to matrix entries is not automatically positive,
trace-preserving, or operationally meaningful.

## 15. Error diagnostics for quantum algorithm claims

- **Normalization drift:** after every ideal gate, norm must remain one up to a
  declared numerical tolerance. Renormalizing silently can hide a nonunitary
  implementation bug.
- **Basis-order mismatch:** decide whether $\lvert q_1q_0\rangle$ indexes arrays in
  big-endian or little-endian order. A correct matrix under one convention can
  appear to target the wrong qubit under another.
- **Amplitude/probability confusion:** a negative or complex amplitude is
  valid; a negative probability is not. Add amplitudes for indistinguishable
  paths before taking squared magnitude.
- **Postselection inflation:** conditioning on a rare desired outcome changes
  success and runtime claims. Report the acceptance probability and the cost
  of rejected runs.
- **Shot-noise omission:** an estimated probability from $S$ shots has sampling
  uncertainty. More circuit depth does not substitute for confidence
  intervals or a predeclared decision rule.
- **Baseline mismatch:** a theorem about oracle queries should be compared with
  classical oracle queries, not a fully implemented classical runtime unless
  all other costs are included on both sides.

These diagnostics do not diminish a valid speedup. They locate the theorem:
which mathematical model supplies the advantage, what resource is bounded,
and which translation steps remain empirical engineering claims.

## 16. Teleportation as an information-flow audit

Quantum teleportation transfers an unknown qubit state using a previously
shared Bell pair and two classical bits. It does not transport matter, reveal
the amplitudes, or signal faster than light. Let the unknown state be
$\lvert \psi\rangle=\alpha\lvert 0\rangle+\beta\lvert 1\rangle$, held in register $A$, and let registers $B,C$ share
$(\lvert 00\rangle+\lvert 11\rangle)/\sqrt{2}$. Alice holds $A,B$; Bob holds $C$.

Alice applies CNOT from $A$ to $B$, then Hadamard to $A$. Expanding the three
registers and regrouping by Alice's two computational-basis outcomes gives

$(1/2)[\lvert 00\rangle\otimes\lvert \psi\rangle + \lvert 01\rangle\otimes X\lvert \psi\rangle + \lvert 10\rangle\otimes Z\lvert \psi\rangle + \lvert 11\rangle\otimes XZ\lvert \psi\rangle]$,

where the final factor in each term is Bob's register. Alice measures her two
registers, obtaining one of four equally likely bit pairs. Conditional on that
pair, Bob applies respectively $I$, $X$, $Z$, or $ZX$ (the order convention may
differ by an irrelevant global phase). His state becomes $\lvert \psi\rangle$.

Before the two classical bits arrive, Bob's reduced density matrix is $I/2$,
independent of $\alpha$ and $\beta$. He cannot choose the correction or extract
the state early. Alice's measurement also destroys the original copy, so the
protocol respects no-cloning. The resource ledger is therefore one entangled
pair consumed, two classical bits transmitted, and local gates and
measurements. Saying only “one qubit moved instantly” omits the mechanism that
enforces both causality and no-cloning.

This calculation is a useful program-proof pattern. The joint-state expansion
is a functional correctness proof; the four measurement branches are case
coverage; the correction table is a certificate mapping observed state to
recovery action; the reduced-state calculation is a noninterference theorem.
On hardware, fidelity estimation adds preparation, measurement, and sampling
assumptions not present in the ideal algebra.

## Practice with fully explained solutions

1. **Is $(1/2)\lvert 0\rangle+(\sqrt{3}/2)\lvert 1\rangle$ normalized?** Yes; squared magnitudes sum to $1/4+3/4=1$.
2. **What probabilities come from $(i\lvert 0\rangle+\lvert 1\rangle)/\sqrt{2}$?** One half each; magnitude squares discard phase at this measurement.
3. **Why is global phase unobservable here?** Multiplying all amplitudes by unit complex $z$ multiplies each magnitude square by $\lvert z\rvert^{2}=1$.
4. **Why can relative phase matter?** A later unitary combines amplitudes; equal and opposite contributions can reinforce or cancel differently.
5. **Prove $H^{2}=I$.** Matrix multiplication gives diagonal entries $(1+1)/2=1$ and off-diagonal entries $(1-1)/2=0$.
6. **Why are unitary gates reversible?** $U^{\dagger}U=I$, so the conjugate transpose $U^{\dagger}$ is an inverse.
7. **How many amplitudes describe $n$ arbitrary qubits?** $2^n$, one per computational basis word, subject to normalization and irrelevant global phase.
8. **Is every two-qubit state entangled?** No; $\lvert 0\rangle \otimes \lvert +\rangle$ factors and is a product state.
9. **What are Bell measurement outcomes?** Only $00$ and $11$, each with probability one half; $01$ and $10$ have zero amplitude.
10. **Does entanglement send messages instantly?** No. Local outcome distributions cannot be controlled by the distant measurement choice to encode a signal.
11. **What makes interference nonclassical?** Complex amplitudes add before magnitude squaring, so phase can produce cancellation absent from classical mixtures.
12. **What does query complexity omit?** Oracle construction, ordinary gates, memory, error correction, input loading, and output reading unless separately counted.
13. **Why must Deutsch's promise be stated?** Constant versus balanced exhausts one-bit functions, but for larger domains it restricts legal functions; the algorithm need not classify unpromised cases.
14. **How does repetition help?** Independent successes above one half concentrate around their expectation, so majority failure decreases exponentially with run count.
15. **Why are arbitrary amplitude perturbations suspect as noise?** They can break norm one and need not define a valid linear, completely positive physical channel.
16. **What does a hardware experiment establish?** Performance for its compiled circuit, calibration, shot count, and noise conditions—not an unrestricted asymptotic speedup theorem.

## Forward routes

Linear algebra supplies spectral and tensor machinery; probability supplies sampling guarantees; complexity supplies oracle and resource models. Quantum information, algorithms, error correction, and hardware each deserve specialist volumes. This chapter provides the definitions needed to read their claims without turning metaphor into proof.

[Previous chapter](#/books/algorithms-computation-proof-desk) · [Next chapter](#/books/algorithms-computation-proof-desk) · [Book overview](#/books/algorithms-computation-proof-desk)
