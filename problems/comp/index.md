# Computational arithmetic problems

Original exact sums, digit counts, divisibility, modular calculations and arithmetic enumeration.

190 problems with hints and worked solutions. Answers are checked in your browser; nothing you enter is stored.

## Computational continuation: arithmetic enumeration

Use quotient blocks, residue filters, prime-exponent layers, divisor transforms and binary valuation states to replace brute-force loops by exact finite counts. Preserve leading-digit, ordering, parity and endpoint conventions when comparing your derivation with the worked solution.

- [Accumulate divisor weights by quotient blocks](comp.continuation.divisor-summatory-weighted-blocks.md) · medium
- [Combine gcd fibres with prime-power multiplicativity](comp.continuation.squared-gcd-residue-fibre.md) · medium
- [Combine a restricted base-seven tail with a divisibility filter](comp.continuation.base-seven-leading-residue-uniformity.md) · medium
- [Count a coupled remainder condition across a partial final period](comp.continuation.mixed-remainder-period-window.md) · medium
- [Use a segmented sieve with exact endpoint exclusions](comp.continuation.segmented-prime-sieve-window.md) · medium
- [Enumerate smooth integers without duplicate generation paths](comp.continuation.smooth-number-exponent-layers.md) · hard
- [Compute a two-dimensional gcd total through a totient sieve](comp.continuation.gcd-grid-divisor-sieve.md) · hard
- [Count ordered product-bounded triples by nested quotient blocks](comp.continuation.ordered-triple-product-hyperbola.md) · hard
- [Count coprime pairs after imposing a parity sublattice](comp.continuation.odd-coprime-grid-parity-sieve.md) · hard
- [Count a divisibility-constrained digit family with a leading restriction](comp.continuation.digit-coefficient-leading-filter.md) · hard
- [Sieve square factors inside one arithmetic progression](comp.continuation.squarefree-progressive-sieve.md) · hard
- [Optimise a divisor-count search over ordered prime exponents](comp.continuation.least-integer-divisor-count-search.md) · hard
- [Combine a binomial valuation with a residue-aware bit count](comp.continuation.binary-carry-residue-count.md) · hard

## Computational continuation: dynamic programming

Choose states that retain exactly the information needed by the next transition. These problems distinguish unlimited and zero-one choices, overlapping patterns, boundary masks, interval splits and subset endpoints. Compare the base cases and final accepting states before comparing the numerical answer.

- [Count unordered change without counting coin order](comp.continuation.coin-change-unordered-stages.md) · medium
- [Compute a complete prefix-distance row with unit edit costs](comp.continuation.edit-distance-final-row.md) · medium
- [Maintain minimal tails while preserving subsequence length](comp.continuation.lis-tail-replacement.md) · medium
- [Count a finite subset-sum coefficient and audit its size cases](comp.continuation.subset-sum-count-with-cardinality-audit.md) · medium
- [Optimise compatible half-open jobs with the correct predecessor](comp.continuation.weighted-interval-predecessors.md) · medium
- [Keep item stages distinct from an unbounded coin recurrence](comp.continuation.zero-one-knapsack-capacity-frontier.md) · medium
- [Count a binary language with a simultaneous modular state](comp.continuation.binary-automaton-residue-dp.md) · hard
- [Correct pair-occurrence counting for triple overlaps](comp.continuation.overlapping-pattern-exact-occurrences.md) · hard
- [Tile a three-row strip by tracking unfinished horizontal dominoes](comp.continuation.domino-frontier-mask-dp.md) · hard
- [Optimise matrix-chain arithmetic over every split](comp.continuation.matrix-chain-interval-optimisation.md) · hard
- [Include unsuccessful-search gaps in an interval optimisation](comp.continuation.optimal-search-tree-gap-weights.md) · hard
- [Close a subset-DP tour only after all cities are visited](comp.continuation.held-karp-closed-tour-state.md) · hard
- [Count balanced words with both prefix and height restrictions](comp.continuation.bounded-height-parenthesis-transfer.md) · hard

## Computational continuation: exact linear algebra

Use exact elimination, low-rank reductions, invariant modes, integer normal forms and bounded lattice certificates. Individual problems specify the scalar domain and L2 or L3 preparation. Retain compatibility, uniqueness and sign conditions when interpreting a computed vector, determinant or matrix.

- [Eliminate a small exact system without introducing fractions early](comp.continuation.fraction-free-linear-system.md) · medium
- [Track a row swap and elimination multipliers in a determinant](comp.continuation.pivoted-determinant-sign.md) · medium
- [Reduce a rank-one matrix solve to one scalar coupling](comp.continuation.rank-one-update-solve.md) · medium
- [Compute an exact least-squares fit and its residual norm](comp.continuation.rational-least-squares-residual.md) · medium
- [Invert a matrix over a prime field with canonical entries](comp.continuation.finite-field-matrix-inverse.md) · medium
- [Use nilpotent paths to truncate a matrix power exactly](comp.continuation.unipotent-power-path-coefficients.md) · medium
- [Compute coupled Schur corrections in an exact block determinant](comp.continuation.arrowhead-exact-schur-determinant.md) · hard
- [Recover a large matrix power in its minimal polynomial basis](comp.continuation.cayley-hamilton-power-remainder.md) · hard
- [Resolve a singular matrix equation before choosing its least-norm solution](comp.continuation.sylvester-compatibility-minimum-norm.md) · hard
- [Combine integer invariant factors with a finite congruence-kernel count](comp.continuation.smith-invariants-modular-kernel.md) · hard
- [Infer a shortest finite recurrence and extrapolate its state cycle](comp.continuation.finite-field-recurrence-reconstruction.md) · hard
- [Compute a rational matrix-power row through invariant modes](comp.continuation.spectral-projector-exact-power.md) · hard
- [Reduce a closest-vector search to a bounded exact certificate](comp.continuation.closest-lattice-point-finite-certificate.md) · hard

## Computational continuation: graph algorithms

Compute finite route, matching, flow, spanning-tree and covering results. Keep edge direction, capacity, cost, rooting and multiplicity conventions explicit. For an optimum, compare both an attaining construction and the lower or upper certificate supplied in its solution.

- [Resolve competing weighted routes by ordered relaxation](comp.continuation.dijkstra-relaxation-vector.md) · medium
- [Compute directed distances despite a negative edge](comp.continuation.negative-edge-distance-certificate.md) · medium
- [Reject an early cycle before completing a minimum spanning tree](comp.continuation.kruskal-cycle-rejection.md) · medium
- [Update a lexicographic topological frontier after each deletion](comp.continuation.kahn-lexicographic-frontier.md) · medium
- [Separate recurrent components from one-way connections](comp.continuation.scc-condensation-sizes.md) · medium
- [Follow an alternating chain through a pre-existing matching](comp.continuation.augmenting-path-bfs-length.md) · medium
- [Find a maximum flow and its nontrivial cut certificate](comp.continuation.flow-path-and-cut-certificate.md) · hard
- [Compare min-cost demands when the cheapest path must be undone](comp.continuation.mincost-flow-rerouting-demand.md) · hard
- [Count minimum trees after retaining parallel choices under contraction](comp.continuation.weighted-mst-parallel-contraction.md) · hard
- [Count directed root-reaching trees with a cyclic minor](comp.continuation.rooted-arborescence-determinant.md) · hard
- [Optimise duplicated edges for a closed route inspecting every edge](comp.continuation.postman-odd-pairing-shortest-paths.md) · hard
- [Count topological orders by valid row-prefix states](comp.continuation.grid-topological-order-ideal-dp.md) · hard
- [Find a mixed weighted cover and an edge-packing lower bound](comp.continuation.weighted-bipartite-cover-flow-certificate.md) · hard

## Computational continuation: modular algorithms

Work through Euclidean certificates, overlapping congruences, prime-power lifts, discrete logarithms, exponent clocks and rational reconstruction. Individual items state L2 or L3 preparation. Use a hint for the next method choice, then compare the full solution and its minimality or uniqueness argument.

- [Recover a modular inverse from a Euclidean remainder chain](comp.continuation.euclidean-inverse-certificate.md) · medium
- [Solve overlapping congruences and count their bounded representatives](comp.continuation.overlapping-crt-window.md) · medium
- [Sum a full residue fibre of a noninvertible multiplier](comp.continuation.linear-congruence-root-sum.md) · medium
- [Eliminate a two-variable congruence system with a unit determinant](comp.continuation.modular-system-elimination.md) · medium
- [Lift a specified square-root branch through one prime-power step](comp.continuation.simple-root-hensel-step.md) · medium
- [Shift an affine recurrence before reducing a large index](comp.continuation.affine-modular-iteration.md) · medium
- [Combine valuation branches and CRT for a singular quadratic fibre](comp.continuation.singular-quadratic-crt-sum.md) · hard
- [Find and certify the least exponent with a baby-step giant-step search](comp.continuation.baby-giant-discrete-log.md) · hard
- [Reduce an exponent tower without applying Euler to a nonunit](comp.continuation.nonunit-power-tower-digits.md) · hard
- [Recover a reduced rational from one modular residue and certify uniqueness](comp.continuation.bounded-rational-reconstruction.md) · hard
- [Synchronise three modular power clocks with overlapping periods](comp.continuation.synchronised-exponent-crt.md) · hard
- [Carry a square-root algorithm through changing modular orders](comp.continuation.tonelli-shanks-control-state.md) · hard
- [Strip prime factors before reducing a binomial coefficient modulo a composite](comp.continuation.binomial-primepower-recombination.md) · hard

## Computational arithmetic: first 60 problems

Original exact sums, quotient blocks, digit counts, valuations, divisor functions, modular powers, CRT, Diophantine counts, recurrences, rational expansions and finite sieves. Modular-power items state L3 preparation individually. No learner code is executed; the answer contract checks the requested exact value.

- [Sum one hundred squares](comp.summation.hundred-square-sum.md) · easy
- [Turn a cube sum into a square](comp.summation.hundred-cube-sum.md) · easy
- [Pair an odd-number progression](comp.summation.thousand-odd-sum.md) · easy
- [Combine two polynomial sums](comp.summation.adjacent-product-sum.md) · medium
- [Shift a weighted geometric sum](comp.summation.weighted-binary-sum.md) · medium
- [Accumulate distinct quotient floors](comp.quotient-blocks.ten-reciprocal-floors.md) · medium
- [Group a floor sum by constant blocks](comp.quotient-blocks.seven-floor-blocks.md) · medium
- [Sum residues in complete blocks](comp.quotient-blocks.remainder-block-sum.md) · medium
- [Count ordered pairs under a hyperbola](comp.quotient-blocks.hyperbola-pair-count.md) · hard
- [Group square-root floors between squares](comp.quotient-blocks.square-root-floor-sum.md) · medium
- [Count occurrences of a decimal digit](comp.digit-enumeration.five-position-sevens.md) · medium
- [Sum all decimal digit sums](comp.digit-enumeration.four-digit-sum-total.md) · medium
- [Sum binary one-counts](comp.digit-enumeration.ten-bit-popcount-total.md) · medium
- [Count digits in a concatenated range](comp.digit-enumeration.concatenation-length.md) · medium
- [Count long palindromes using residue balance](comp.digit-enumeration.palindrome-divisible-nine.md) · hard
- [Count decimal trailing zeros](comp.factorial-valuation.thousand-factorial-decimal-zeros.md) · medium
- [Count every factor of two](comp.factorial-valuation.thousand-factorial-two-adic.md) · medium
- [Locate the first factorial with a given valuation](comp.factorial-valuation.first-hundred-fives.md) · medium
- [Count powers of three in a factorial](comp.factorial-valuation.thousand-factorial-three-adic.md) · medium
- [Interpret trailing zeros in a composite base](comp.factorial-valuation.thousand-factorial-base-twelve.md) · hard
- [Multiply local divisor sums](comp.divisor-functions.sum-divisors-three-sixty.md) · medium
- [Remove the number from its divisor sum](comp.divisor-functions.proper-divisors-ten-thousand.md) · medium
- [Count units in a decimal prime-power modulus](comp.divisor-functions.million-totient.md) · medium
- [Group a gcd sum by its gcd value](comp.divisor-functions.gcd-sum-hundred.md) · hard
- [Restrict divisor exponents to even values](comp.divisor-functions.square-divisor-count.md) · medium
- [Recover six terminal digits by squaring](comp.modular-powers.two-hundred-last-six.md) · medium
- [Square an exact intermediate power](comp.modular-powers.three-forty-last-ten.md) · medium
- [Use a proved short exponent period](comp.modular-powers.seven-power-period.md) · medium
- [Truncate a binomial expansion modulo a power of ten](comp.modular-powers.binomial-terminal-digits.md) · hard
- [Combine local periods before squaring](comp.modular-powers.composite-modulus-period.md) · hard
- [Combine two nontrivial prime-power residues](comp.crt-computation.unequal-prime-power-crt.md) · hard
- [Recognize a common negative remainder](comp.crt-computation.one-before-three-primes.md) · medium
- [Count representatives of a residue class](comp.crt-computation.crt-count-in-million.md) · medium
- [Sum all idempotents of a composite ring](comp.crt-computation.idempotent-residue-sum.md) · hard
- [Pair all roots of unity by negation](comp.crt-computation.unit-square-root-sum.md) · hard
- [Count positive solutions on a line](comp.linear-diophantine.positive-two-coin-equation.md) · medium
- [Count nonnegative three-denomination representations](comp.linear-diophantine.three-coin-hundred.md) · hard
- [Count compositions with coordinate restrictions](comp.linear-diophantine.divisibility-constrained-compositions.md) · hard
- [Count lattice points by complete residue blocks](comp.linear-diophantine.weighted-lattice-triangle.md) · hard
- [Optimize along a Diophantine progression](comp.linear-diophantine.large-positive-bezout-solution.md) · medium
- [Remove an affine recurrence constant](comp.recurrences.shifted-doubling-recurrence.md) · medium
- [Telescope a multiplicative recurrence](comp.recurrences.telescoping-product-recurrence.md) · medium
- [Use a doubling identity in an integer recurrence](comp.recurrences.fibonacci-doubling-forty.md) · hard
- [Pair alternating recurrence increments](comp.recurrences.alternating-increment-recurrence.md) · medium
- [Handle a repeated recurrence root](comp.recurrences.repeated-root-integer-recurrence.md) · hard
- [Count integers meeting exactly two divisibility rules](comp.arithmetic-counts.exactly-two-small-primes.md) · hard
- [Compute an exact coprime-pair proportion](comp.arithmetic-counts.small-coprime-pair-density.md) · hard
- [Sum squarefree divisors without enumeration](comp.arithmetic-counts.squarefree-divisor-sum.md) · medium
- [Count reduced fractions through a common denominator](comp.arithmetic-counts.fractions-with-dividing-denominators.md) · medium
- [Sum fractions by complementary pairing](comp.arithmetic-counts.reduced-numerator-fraction-sum.md) · medium
- [Convert a repeating block exactly](comp.base-expansions.repeating-four-place-block.md) · medium
- [Evaluate a nondecimal numeral](comp.base-expansions.base-seven-place-values.md) · medium
- [Find an exact decimal period](comp.base-expansions.ninety-seven-repetend.md) · hard
- [Extract a decimal prefix by exact division](comp.base-expansions.twelve-decimal-place-prefix.md) · medium
- [Detect terminating expansions after cancellation](comp.base-expansions.terminating-in-base-twelve.md) · hard
- [Count integers surviving three divisibility exclusions](comp.prime-sieves.million-small-prime-sieve.md) · medium
- [Sieve a short interval and sum prime squares](comp.prime-sieves.prime-square-sum-thirty.md) · medium
- [Enumerate composites by their smallest prime factor](comp.prime-sieves.composites-with-large-smallest-prime.md) · hard
- [Sieve multiples of three prime squares](comp.prime-sieves.three-square-exclusion.md) · hard
- [Sum distinct semiprimes by a symmetric identity](comp.prime-sieves.small-prime-semiprime-sum.md) · hard

## Computational graphs: 25 counting mechanisms

Work through computational graphs: 25 counting mechanisms. Use the staged hints when you need a first step, then compare your reasoning with the complete solutions. Proof questions invite your own written argument and personal reflection.

- [Count line-graph adjacency from endpoint incidences](comp.graph.line-graph-edge-count.md) · easy
- [Recover one complement degree without constructing the complement](comp.graph.complement-local-degree.md) · easy
- [Use the two Cartesian-product edge directions](comp.graph.cartesian-product-edge-count.md) · easy
- [Distinguish a direct graph product from a Cartesian product](comp.graph.direct-product-edge-count.md) · easy
- [Count the new cross edges in a graph join](comp.graph.join-adds-all-cross-edges.md) · easy
- [Recover a triangle count from a closed-walk trace](comp.graph.triangles-from-adjacency-trace.md) · easy
- [Count walks when every step has the same number of choices](comp.graph.regular-graph-long-walks.md) · easy
- [Separate edge retracing from genuine four-cycles](comp.graph.four-cycles-from-fourth-trace.md) · easy
- [Use bipartition parity to count odd closed walks](comp.graph.bipartite-odd-closed-walk-count.md) · easy
- [Evaluate a walk trace from a supplied adjacency spectrum](comp.graph.closed-walk-count-from-spectrum.md) · easy
- [Apply Cayley with labeled vertices and unrooted trees](comp.graph.cayley-labeled-tree-count.md) · easy
- [Force bridges and delete one cycle edge](comp.graph.unicyclic-graph-spanning-trees.md) · easy
- [Multiply independent spanning-tree choices at a cut vertex](comp.graph.one-vertex-cycle-gluing.md) · easy
- [Advance a ladder spanning-tree recurrence](comp.graph.ladder-tree-recurrence.md) · easy
- [Subtract trees containing a designated edge](comp.graph.complete-tree-avoiding-one-edge.md) · easy
- [Count named-color assignments along a path](comp.graph.path-proper-color-count.md) · easy
- [Retain the parity sign in a cycle coloring formula](comp.graph.odd-cycle-coloring-polynomial.md) · easy
- [Apply deletion-contraction without confusing the two graph operations](comp.graph.deletion-contraction-from-supplied-counts.md) · easy
- [Multiply colorings of disconnected components](comp.graph.disjoint-union-coloring-product.md) · easy
- [Read an orientation count from a negative chromatic argument](comp.graph.acyclic-orientations-chromatic-evaluation.md) · easy
- [Count edges when every plane face is triangular](comp.graph.triangulated-plane-edge-count.md) · easy
- [Include the unbounded face when counting dual vertices](comp.graph.dual-vertex-count-from-euler.md) · easy
- [Use the bipartite planar bound rather than the triangular one](comp.graph.bipartite-planar-sharp-edge-bound.md) · easy
- [Count face incidences with every edge counted twice](comp.graph.pentagonal-regular-plane-face-count.md) · easy
- [Count the complementary dual spanning-tree edges](comp.graph.dual-cotree-edge-count.md) · easy

## Computational number theory: 40 further mechanisms

Work through computational number theory: 40 further mechanisms. Use the staged hints when you need a first step, then compare your reasoning with the complete solutions. Proof questions invite your own written argument and personal reflection.

- [Apply the squarefactor branch of the Mobius definition](comp.extension.mobius-squarefactor-zero.md) · easy
- [Use a complete divisor-sum identity instead of enumerating terms](comp.extension.mobius-divisor-cancellation.md) · easy
- [Recover a hidden arithmetic-function value from four divisor totals](comp.extension.mobius-invert-supplied-divisor-data.md) · easy
- [Evaluate a squarefree counting formula on a complete finite range](comp.extension.squarefree-count-by-square-divisors.md) · easy
- [Count only aperiodic necklaces before dividing by rotation length](comp.extension.primitive-binary-necklaces-mobius.md) · medium
- [Find the smallest universal unit exponent from a supplied unit list](comp.extension.carmichael-exponent-of-eight.md) · easy
- [Combine universal exponents through a coprime decomposition](comp.extension.carmichael-coprime-component-rule.md) · easy
- [Count primitive roots using a supplied cyclic-group formula](comp.extension.primitive-root-count-prime.md) · easy
- [Apply the gcd rule for the order of a power](comp.extension.order-of-a-power-from-base-order.md) · easy
- [Combine cyclic root counts through CRT](comp.extension.twelfth-roots-of-unity-composite-modulus.md) · medium
- [Evaluate a quadratic character with the minus-one supplement](comp.extension.legendre-minus-one-supplement.md) · easy
- [Use a prime residue class modulo eight to evaluate a character](comp.extension.legendre-two-supplement.md) · easy
- [Multiply local characters without claiming a composite-modulus root](comp.extension.jacobi-product-not-root-certificate.md) · easy
- [Apply the nonzero square branch of the Legendre definition](comp.extension.character-of-nonzero-square.md) · easy
- [Evaluate a quadratic character by reciprocity and a supplementary law](comp.extension.reciprocity-then-three-supplement.md) · medium
- [Evaluate a finite continued fraction from its innermost term](comp.extension.finite-continued-fraction-value.md) · easy
- [Advance a convergent numerator using the supplied recurrence](comp.extension.convergent-numerator-one-step.md) · easy
- [Keep the alternating determinant sign at a stated index](comp.extension.adjacent-convergent-determinant-sign.md) · easy
- [Evaluate a refined approximation bound using the next partial quotient](comp.extension.continued-fraction-next-coefficient-error.md) · easy
- [Recover a canonical continued fraction by Euclidean division](comp.extension.canonical-continued-fraction-quotient-sum.md) · medium
- [Generate a Pell solution by multiplying its quadratic unit](comp.extension.pell-unit-square-coefficients.md) · easy
- [Use a trace recurrence rather than expand a large radical power](comp.extension.pell-trace-recurrence.md) · easy
- [Use conjugation to invert a norm-one quadratic unit](comp.extension.pell-unit-inverse-coordinates.md) · easy
- [Rule out a large finite search using a local square obstruction](comp.extension.negative-pell-local-obstruction.md) · easy
- [Find a least threshold-crossing Pell solution using a supplied classification](comp.extension.pell-first-large-solution.md) · medium
- [Evaluate a representation count with its sign and order convention](comp.extension.two-square-representation-divisor-formula.md) · easy
- [Compute the perimeter of a parametrized primitive triple](comp.extension.euclid-triple-perimeter.md) · easy
- [Compute a product norm without expanding the product itself](comp.extension.gaussian-norm-multiplicative-product.md) · easy
- [Apply the two-square obstruction at a prime congruent to three](comp.extension.two-square-odd-prime-exponent-obstruction.md) · easy
- [Compute an associate-invariant gcd value through Gaussian Euclidean division](comp.extension.gaussian-euclidean-gcd-norm.md) · medium
- [Find when the first fraction between Farey neighbors can appear](comp.extension.farey-mediant-entry-order.md) · easy
- [Include the extra endpoint in a Farey length formula](comp.extension.farey-length-from-totient-total.md) · easy
- [Evaluate a reciprocal denominator-product gap](comp.extension.farey-neighbor-exact-gap.md) · easy
- [Compute a Ford-circle radius with its factor of two](comp.extension.ford-circle-denominator-radius.md) · easy
- [Use a reflection pairing after an exact totient total](comp.extension.reduced-fractions-half-interval-count.md) · medium
- [Recover a shortened factorial from Wilson with a signed last factor](comp.extension.wilson-one-factor-short.md) · easy
- [Use complementary factorial factors to compute a square residue](comp.extension.half-factorial-square-by-pairing.md) · easy
- [Apply prime divisibility to an interior binomial coefficient](comp.extension.prime-row-binomial-divisibility.md) · easy
- [Evaluate a binomial coefficient through base-prime digit choices](comp.extension.lucas-multidigit-binomial.md) · easy
- [Apply a prime-cube binomial congruence with its prime restriction](comp.extension.wolstenholme-central-binomial-residue.md) · easy
