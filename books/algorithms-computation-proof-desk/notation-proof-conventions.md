
# Notation, Proof Patterns, and Computational Conventions {#section-1-notation-proof-patterns-and-computational-conventions}

<a id="section-1-objects-and-logic"></a>
## Objects and logic {#section-3-objects-and-logic}

Natural numbers include zero. $A \subseteq B$ allows equality; $A \subsetneq B$ does not. $\lvert S\rvert$ is finite cardinality, $\lvert w\rvert$ is word length, and $\lvert x\rvert$ in complexity statements is encoding length. A function $f:A\to B$ is total on $A$ unless explicitly called partial. Relations are subsets of Cartesian products.

Quantifiers bind as written. Negating $\forall x \exists y P(x,y)$ gives $\exists x \forall y \neg P(x,y)$. An implication's converse is never assumed. Definitions use “if and only if”; algorithms use preconditions and postconditions.

<a id="section-7-sequences-arrays-and-arithmetic"></a>
## Sequences, arrays, and arithmetic {#section-9-sequences-arrays-and-arithmetic}

Arrays and words use zero-based positions and half-open slices $[i,j)$. Empty structures are legal unless excluded. Integer division, remainder, overflow, and negative indexing are never inherited silently from a programming language. Mathematical integers are unbounded; machine integers require a width and overflow rule.

$\log n$ means base two in discrete complexity. A fixed base changes asymptotic logarithmic bounds only by a constant, but exact code-length and comparison counts retain the stated base. $O$, $\Omega$, and $\Theta$ are eventual bounds with quantified constants; equality signs are not used as decoration between them.

<a id="section-13-graphs-and-algorithms"></a>
## Graphs and algorithms {#section-15-graphs-and-algorithms}

Graphs are finite. Direction, weights, loops, and parallel edges are declared locally. A path may have length zero; a cycle is nonempty. $d(s,v)$ is shortest-path length only under the chapter's edge-weight convention. Infinity marks unreachable distance, not a large integer sentinel.

Pseudocode assignment is written $x := e$; mathematical equality remains $=$. A loop invariant holds before and after every iteration. A variant belongs to a well-founded order and proves termination. Actual, worst-case, expected, and amortized cost are distinct columns.

<a id="section-19-probability-and-information"></a>
## Probability and information {#section-21-probability-and-information}

$\Pr_{R}[\ldots]$ names the random source when ambiguity is possible. Inputs are fixed before internal random coins unless the adversary game says otherwise. $E[X]$ is expectation under the named law. Independence is an assumption or theorem, never inferred from equal marginal probabilities.

Entropy uses base-two logarithms and is measured in bits. $H(X\mid Y)$ is conditional entropy; $I(X;Y)$ is mutual information. Hamming distance counts differing coordinates. Code parameters $[n,k,d]$ mean block length, dimension, and minimum distance in the linear-code context.

<a id="section-25-languages-and-complexity"></a>
## Languages and complexity {#section-27-languages-and-complexity}

$\Sigma^{\ast}$ is the set of finite words over alphabet $\Sigma$; $\varepsilon$ is the empty word. A decision problem is a language under a finite encoding. $A \le_{p} B$ is a polynomial-time many-one reduction from $A$ to $B$: solve $A$ by mapping to $B$. $\mathsf{P}$, $\mathsf{NP}$, and $\mathsf{coNP}$ name language classes, not algorithm speeds on one instance. The P-versus-NP question is open.

Automaton transition extension may be written $\delta*$. Machine acceptance, recognition, and decision are distinguished: a recognizer may fail to halt on no-instances; a decider halts on every input.

<a id="section-31-semantics-and-verification"></a>
## Semantics and verification {#section-33-semantics-and-verification}

Program state is $\sigma$; a step is $\sigma \to \sigma'$; reflexive transitive closure is $\to^{\ast}$. A typing judgment is $\Gamma \vdash e:\tau$. A Hoare triple $\{P\} C \{Q\}$ denotes partial correctness unless total correctness is stated. $\operatorname{Pre}(X)$ denotes predecessor states in fixed-point model checking.

Safety means exclusion of finite bad prefixes. Liveness means eventual progress and names path and fairness conventions. “Verified” is always followed by the model, property, method, and trust boundary.

<a id="section-37-geometry-and-graphics"></a>
## Geometry and graphics {#section-39-geometry-and-graphics}

Points are column vectors unless a code example states tuple operations. The signed orientation of $a,b,c$ is the two-dimensional determinant $(b-a) \times (c-a)$. Coordinate systems state handedness, origin, axis directions, and whether screen $y$ increases downward. Homogeneous points distinguish finite points from directions by their final coordinate.

Pixel samples represent finite filters or point evaluations under a declared raster rule; a displayed line is not the mathematical continuum. Exact predicates and floating constructions are reported separately.

<a id="section-43-quantum-notation"></a>
## Quantum notation {#section-45-quantum-notation}

$\lvert \psi\rangle$ is a column vector and $\langle \psi\rvert$ its conjugate transpose. The adjoint of $U$ is $U^{\dagger}$; a square gate is unitary when $U^{\dagger}U=UU^{\dagger}=I$. Tensor products build multi-qubit state spaces. Amplitudes are complex numbers; computational-basis probabilities are magnitude squares. Global phase is physically irrelevant for a pure state, while relative phase may affect interference.

Oracle query cost, total gate cost, qubit count, measurement shots, and classical processing are separate resources.

<a id="section-49-proof-patterns"></a>
## Proof patterns {#section-51-proof-patterns}

- **Direct proof:** unfold definitions and derive the conclusion from hypotheses.
- **Contrapositive:** prove $\neg Q \to \neg P$ when the obstruction is easier to construct.
- **Contradiction:** assume the negation and identify the exact impossibility.
- **Induction:** state the motive and domain, prove base cases, and use only the declared hypothesis.
- **Invariant:** prove initialization, preservation, and useful exit consequence.
- **Exchange:** transform an optimum to agree with a greedy choice without loss.
- **Reduction:** define the total transformation, bound it, and prove both directions.
- **Simulation:** relate concrete and abstract states and match each relevant step.
- **Hybrid:** bound adjacent experiment changes and sum the losses.
- **Counterexample:** satisfy every hypothesis and falsify the exact conclusion.

<a id="section-62-evidence-labels"></a>
## Evidence labels {#section-64-evidence-labels}

**Proof** means deductive derivation. **Exact finite check** means a complete generator and predicate for a bounded set. **Certificate check** means acceptance implies a stated relation. **Test** means executed cases. **Experiment** means a measurement under recorded conditions. **Heuristic** means a method without the desired universal guarantee. **Conditional security** means a game theorem under assumptions and resources. **Open question** marks a statement not resolved here.
