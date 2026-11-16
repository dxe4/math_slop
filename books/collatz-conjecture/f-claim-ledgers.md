# Claim Ledgers and Dataset Schemas {#sec-claim-ledgers}

An open-problem project can fail even when every integer operation is correct:
the range may be misstated, two map conventions may be mixed, a heuristic may be
reported as a theorem, or a regenerated dataset may no longer match the plot.
This appendix supplies portable records for preventing those failures.

## The theorem-status card

Create one card for every result used or produced. A human-readable template is:

```yaml
claim_id: stable-short-name
claim_text: complete sentence with quantifiers
status: theorem | conditional | finite_computation | model | heuristic | open
map:
  domain: positive integers
  convention: unaccelerated | shortcut | odd-only | generalized
  formula: exact piecewise definition
scope:
  lower_inclusive: null
  upper_exclusive: null
  density: null
hypotheses: []
evidence:
  proof_location: null
  source_citation: null
  dataset_hash: null
  checker_hash: null
limitations: []
reviewed_on: YYYY-MM-DD
```

Null fields are meaningful: a theorem may have no finite upper endpoint, while
a computation must have one. A schema validator should reject a
`finite_computation` record with no explicit finite domain.

### Quantifier audit

Rewrite the claim in symbolic order when possible. These statements differ:

$$
\forall n\ \exists k\quad C^k(n)=1
$$

and

$$
\exists k\ \forall n\quad C^k(n)=1.
$$

The second asserts one uniform step bound and is far stronger. The card stores
the prose and the formal order so a summary cannot swap them silently.

For density claims, record the averaging operation. Natural density,
logarithmic density, probability under Haar measure, and proportion in one
finite interval are different fields, not synonyms for "most."

## Finite-verification manifest

A run manifest describes the intended whole computation:

```yaml
run_id: collatz-example-v1
specification_hash: sha256:...
domain:
  representation: half_open_integer_interval
  lower_inclusive: L
  upper_exclusive: U
map_convention: shortcut
success_predicate: reaches_smaller_positive_value
arithmetic: unbounded_integer
shard_schema_version: 1
shards:
  - shard_id: 000000
    lower_inclusive: L0
    upper_exclusive: U0
    record_hash: sha256:...
checker:
  source_hash: sha256:...
  version: ...
environment_hash: sha256:...
completed_at_utc: ...
```

The checker sorts shards and verifies exact endpoint adjacency. Each shard record
contains its own endpoints, count, arithmetic summary, certificate root, and
completion status. The manifest is accepted only when every listed record is
available and no unlisted record is needed for coverage.

### Shard record

```text
schema_version
shard_id
lower_inclusive
upper_exclusive
number_of_inputs
number_resolved
number_fallback_to_multiprecision
maximum_steps and attaining start
maximum_peak and attaining start
certificate_digest
producer_revision
worker_environment
```

Counts are cross-checks, not substitutes for endpoints or certificates. Use a
canonical byte encoding before hashing: field order, integer format, line
endings, and Unicode normalization must not depend on the worker.

## Orbit-table schema

One row per starting value can use:

| field | type | meaning |
|:---|:---|:---|
| `start` | unbounded positive integer | unique input key |
| `map_id` | controlled string | exact convention/version |
| `resolved` | Boolean | success predicate observed |
| `steps_observed` | nonnegative integer | transitions before success or cap |
| `step_cap` | nonnegative integer or null | censoring threshold |
| `stopping_time` | integer or null | null when unresolved |
| `peak` | unbounded positive integer | maximum among observed states |
| `first_descent` | integer or null | certified descent step |
| `terminal_value` | unbounded integer | last stored/checkpoint value |
| `certificate_ref` | digest | proof record or replay block |

Never encode unresolved stopping time as zero, the cap, or a negative sentinel.
Use a null plus the explicit `resolved` field. This prevents ordinary summary
software from averaging censored values accidentally.

If full trajectories are stored, use a second table keyed by `(start, step)`.
Storing a variable-length list inside one CSV cell makes type and truncation
errors hard to detect. Large trajectories can instead use chunked binary arrays
with checksums and a documented integer encoding.

## Residue and parity tables

A residue certificate needs more than a residue number:

| field | requirement |
|:---|:---|
| modulus | positive integer, usually a named power |
| canonical residue | $0\le r<m$ |
| represented domain | all integers, positive, or odd lifts |
| word convention | ordinary parity bits or accelerated valuations |
| word length | explicit integer |
| affine multiplier | exact integer |
| affine offset | exact integer |
| denominator exponent | exact integer |
| admissibility proof | exact congruence checks |
| descent scope | representative only, bounded lifts, or all positive lifts |

For a binary residue tree, store parent IDs and verify

$$
r_{k+1}\equiv r_k\pmod {2^k}.
$$

Every unresolved parent must have all legal children present at the next
expanded depth. Resolved parents may be pruned only when the stored lemma proves
the property for all represented lifts.

## Statistical dataset metadata

A table intended for inference also records:

```yaml
population: all odd starts in [L,U)
sampling_design: complete_enumeration | uniform_without_replacement | other
observational_unit: start
selection_filters: []
censoring:
  type: none | fixed_step_cap | height_cap
  value: null
dependence_notes:
  shared_tail_definition: ...
  clustering_rule: ...
resampling:
  method: none | block | cluster | permutation
  seed: null
  replicates: null
estimands: [median_total_stopping_time]
```

Plots inherit this metadata. A caption should not call a sample distribution the
distribution of all integers, or a model-based interval an exact finite
certificate.

## Provenance and environment capture

At minimum preserve:

- source revision and dirty-state indicator;
- command line and configuration file;
- language, library, compiler, and operating-system versions;
- hardware architecture and integer behavior;
- deterministic random seeds;
- input and output content hashes;
- start and completion timestamps in UTC;
- warning, retry, fallback, and corruption logs;
- figure-generating query or script revision.

A container image digest helps reconstruction but is not enough by itself. Save
the readable specification and dependency lock data so the environment can be
audited rather than merely replayed.

Secrets, usernames, and machine-specific paths should not be embedded in public
manifests. Provenance requires relevant technical state, not private data.

## Independent review protocol

The reviewer should receive the specification before seeing the headline result.
Their checklist is:

1. restate the map, domain, predicate, and claim status;
2. validate the schema independently;
3. recompute tiny hand-checkable shards;
4. check interval and residue coverage algebraically;
5. run mutation tests against the checker;
6. replay a deterministic sample with a different implementation;
7. trace every table and figure to a content hash;
8. inspect unresolved, overflow, retry, and fallback records;
9. verify that cited theorems retain their hypotheses;
10. sign a dated review record listing remaining limitations.

Independence is strongest when the reviewer does not copy the producer's core
transition routine. Shared libraries and shared assumptions should be declared.

### Replication outcomes

Use one of four labels:

- **reproduced:** same code and environment regenerate the artifacts;
- **replicated:** an independent implementation confirms the finite claim;
- **partially replicated:** a declared subset or summary agrees;
- **not replicated:** mismatch, missing information, or checker failure remains.

None of these labels upgrades a finite computation to a proof over all positive
integers.

## Release layout

A compact release can use:

```text
README.md
SPECIFICATION.md
CLAIMS.yaml
MANIFEST.yaml
schema/
producer/
checker/
certificates/
data/
figures/
tests/mutations/
REVIEW.md
```

The README leads with scope and status. The specification defines semantics. The
claim ledger links prose to evidence. The producer may be complex; the checker
should remain small. Derived data and figures point back to hashes rather than
becoming unaudited copies.

## Part IX certificate records

Four compact record families support these methods.

### Language-count record

```text
alphabet: [0, 1]
language_rule: no_adjacent_ones
length: 20
coefficient_vector: [...]
total_count: ...
automaton_hash: sha256:...
recurrence: P_n(u) = P_(n-1)(u) + u P_(n-2)(u)
residue_translation: shortcut_parity_mod_2^n
arithmetic_label: count_only | affine_checked
```

The checker verifies base cases, recurrence, coefficient sum, and any declared
word-to-residue translation. It must not infer descent from `count_only`.

### Drift and coupling record

```text
probability_space_id: ...
states: [...]
transition_rows_rational: [...]
target_states: [...]
potential_rational: [...]
delta_rational: ...
coupling_marginal_proofs: [...]
disagreement_event: ...
horizon: ...
status: exact_model_theorem | arithmetic_average | heuristic
```

The probability space and information history are semantic fields. A transition
matrix without its sampling interpretation is not a Collatz theorem.

### Presburger elimination record

```text
map_id: shortcut_v1
horizon: 3
start_domain: positive_integers
word: 101
compatible_residue: 1 mod 8
affine_numerator: 9*x + 7
denominator: 8
solution_set: empty_for_positive_descent
soundness_checked: true
completeness_checked: true
```

Coverage requires every length-$h$ word exactly once. Soundness of individual
rows does not by itself prove completeness.

### Interval certificate record

```text
expression: 84*log(2) - 53*log(3)
method: rational_atanh_series
depth: 12
lower_rational: numerator/denominator
upper_rational: numerator/denominator
decision: upper < 0
remainder_rule_version: ...
checker_hash: sha256:...
```

Displayed decimals are derived fields. Exact rational endpoints and the
remainder rule are the proof object.

## Final claim audit

Before release, answer yes or no:

- Does every universal quantifier have a proof rather than a finite maximum?
- Does every finite claim use explicit half-open endpoints?
- Are map and stopping-time conventions machine-readable?
- Are unresolved and censored values represented without fake numbers?
- Are hashes tied to canonical encodings?
- Can coverage be checked without trusting producer summaries?
- Can the essential arithmetic be replayed independently?
- Do figures distinguish exact data from stochastic models?
- Are source versions and publication status dated?
- Does the abstract state what the work does **not** prove?

A no answer does not necessarily invalidate the experiment. It identifies the
next proof or documentation obligation.

## Schema exercises

1. Create a theorem-status card for one result in Chapter 13.
2. Explain why half-open endpoints are preferable to prose such as "through
   one million."
3. Design a canonical encoding for a shard record.
4. Add a censoring field to a flawed table that stores the cap as stopping time.
5. State the parent-child invariant in a residue tree.
6. Distinguish reproduction from independent replication.
7. List three private or irrelevant fields that should be removed from a public
   environment record.
8. Write a one-sentence finite-result abstract with an explicit non-universal
   limitation.
